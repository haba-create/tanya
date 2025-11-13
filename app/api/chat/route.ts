import { NextRequest, NextResponse } from "next/server"
import Anthropic from "@anthropic-ai/sdk"
import { retrieveKnowledge, formatContext } from "@/lib/rag"
import { searchWeb, formatSearchResults, needsWebSearch } from "@/lib/web-search"

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
})

// System prompt for the wellness assistant
const SYSTEM_PROMPT = `You are a helpful and knowledgeable wellness assistant for Tanya's Wellness Practice in Primrose Hill, London.

Your role is to:
1. Answer questions about classes, schedules, pricing, and services
2. Help users understand the benefits of different practices (yoga, martial arts, meditation)
3. Provide guidance on booking classes and private sessions
4. Share wellness tips and advice
5. Be warm, encouraging, and supportive
6. Direct users to book online or contact Tanya directly for personalized advice

Guidelines:
- Be conversational and friendly but professional
- Use the provided context from the knowledge base to answer questions accurately
- If you don't know something, admit it and suggest contacting Tanya directly
- Encourage users to try their first free class
- Emphasize the welcoming, inclusive nature of the practice
- Keep responses concise but informative
- When discussing booking, remind users they can book through the website
- Be mindful of the calming, wellness-focused atmosphere

When providing information, cite specific details from the knowledge base when available.
If asked about current information (like weather, news, or latest wellness trends), let the user know you can search for that information.`

interface ChatMessage {
  role: "user" | "assistant"
  content: string
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json() as { messages: ChatMessage[] }

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid messages format" },
        { status: 400 }
      )
    }

    // Get the last user message for RAG retrieval
    const lastUserMessage = messages.filter(m => m.role === "user").pop()

    if (!lastUserMessage) {
      return NextResponse.json(
        { error: "No user message found" },
        { status: 400 }
      )
    }

    // Retrieve relevant knowledge from the knowledge base
    const relevantKnowledge = retrieveKnowledge(lastUserMessage.content, 3)
    const context = formatContext(relevantKnowledge)

    // Check if web search is needed
    let searchContext = ""
    if (needsWebSearch(lastUserMessage.content)) {
      try {
        const searchResponse = await searchWeb(lastUserMessage.content)
        searchContext = formatSearchResults(searchResponse.results)
      } catch (error) {
        console.error("Web search error:", error)
        // Continue without search results
      }
    }

    // Prepare messages for Claude
    const claudeMessages: Anthropic.MessageParam[] = messages.map(msg => ({
      role: msg.role,
      content: msg.content,
    }))

    // Build system prompt with context
    let systemPrompt = SYSTEM_PROMPT

    if (context) {
      systemPrompt += `\n\nRelevant Information from Knowledge Base:\n\n${context}\n\nUse this information to answer the user's question accurately.`
    }

    if (searchContext) {
      systemPrompt += `\n\nCurrent Information from Web Search:\n\n${searchContext}\n\nUse this information if relevant to the user's question about current events or trends.`
    }

    // Call Claude 3.5 Haiku
    const response = await anthropic.messages.create({
      model: "claude-3-5-haiku-20241022",
      max_tokens: 1024,
      system: systemPrompt,
      messages: claudeMessages,
    })

    // Extract the assistant's response
    const assistantMessage = response.content[0]
    if (assistantMessage.type !== "text") {
      throw new Error("Unexpected response type from Claude")
    }

    return NextResponse.json({
      message: assistantMessage.text,
    })
  } catch (error) {
    console.error("Chat API error:", error)

    return NextResponse.json(
      {
        error: "Failed to process chat message",
        message: "I apologize, but I'm having trouble responding right now. Please try again in a moment, or contact us directly at hello@tanyawellness.com or +44 20 1234 5678.",
      },
      { status: 500 }
    )
  }
}
