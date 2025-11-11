/**
 * Web Search utilities for getting current information
 * Supports Tavily API and Brave Search API
 */

export interface SearchResult {
  title: string
  url: string
  snippet: string
  score?: number
}

export interface SearchResponse {
  results: SearchResult[]
  query: string
}

/**
 * Search using Tavily API
 */
async function searchWithTavily(query: string): Promise<SearchResponse> {
  const apiKey = process.env.TAVILY_API_KEY

  if (!apiKey) {
    throw new Error("Tavily API key not configured")
  }

  const response = await fetch("https://api.tavily.com/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key: apiKey,
      query,
      search_depth: "basic",
      max_results: 5,
    }),
  })

  if (!response.ok) {
    throw new Error(`Tavily search failed: ${response.statusText}`)
  }

  const data = await response.json()

  return {
    query,
    results: data.results.map((result: any) => ({
      title: result.title,
      url: result.url,
      snippet: result.content,
      score: result.score,
    })),
  }
}

/**
 * Search using Brave Search API
 */
async function searchWithBrave(query: string): Promise<SearchResponse> {
  const apiKey = process.env.BRAVE_API_KEY

  if (!apiKey) {
    throw new Error("Brave API key not configured")
  }

  const url = new URL("https://api.search.brave.com/res/v1/web/search")
  url.searchParams.append("q", query)
  url.searchParams.append("count", "5")

  const response = await fetch(url.toString(), {
    headers: {
      Accept: "application/json",
      "Accept-Encoding": "gzip",
      "X-Subscription-Token": apiKey,
    },
  })

  if (!response.ok) {
    throw new Error(`Brave search failed: ${response.statusText}`)
  }

  const data = await response.json()

  return {
    query,
    results: data.web.results.map((result: any) => ({
      title: result.title,
      url: result.url,
      snippet: result.description,
    })),
  }
}

/**
 * Main search function that tries available providers
 */
export async function searchWeb(query: string): Promise<SearchResponse> {
  // Try Tavily first (preferred for MVP)
  if (process.env.TAVILY_API_KEY) {
    try {
      return await searchWithTavily(query)
    } catch (error) {
      console.error("Tavily search failed:", error)
      // Fall through to try Brave
    }
  }

  // Try Brave as fallback
  if (process.env.BRAVE_API_KEY) {
    try {
      return await searchWithBrave(query)
    } catch (error) {
      console.error("Brave search failed:", error)
      throw new Error("All search providers failed")
    }
  }

  throw new Error("No search provider configured")
}

/**
 * Format search results for context injection
 */
export function formatSearchResults(results: SearchResult[]): string {
  if (results.length === 0) return "No search results found."

  return results
    .map(
      (result, index) =>
        `${index + 1}. ${result.title}\n   ${result.snippet}\n   Source: ${result.url}`
    )
    .join("\n\n")
}

/**
 * Determine if a query needs web search
 * Returns true if the query is asking about current events, weather, news, etc.
 */
export function needsWebSearch(query: string): boolean {
  const webSearchKeywords = [
    "current",
    "latest",
    "recent",
    "today",
    "now",
    "weather",
    "news",
    "trend",
    "update",
    "2024",
    "2025",
    "this week",
    "this month",
    "this year",
  ]

  const lowerQuery = query.toLowerCase()
  return webSearchKeywords.some(keyword => lowerQuery.includes(keyword))
}
