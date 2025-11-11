/**
 * RAG (Retrieval-Augmented Generation) utilities
 * For MVP, we'll use a simple in-memory knowledge base
 * Later can be upgraded to use vector database (Pinecone, pgvector, etc.)
 */

export interface KnowledgeItem {
  id: string
  title: string
  content: string
  category: string
  metadata?: Record<string, any>
}

// Knowledge base for the wellness practice
export const knowledgeBase: KnowledgeItem[] = [
  {
    id: "1",
    title: "About Tanya's Wellness Practice",
    content: `Tanya's Wellness Practice is a holistic wellness center located in the heart of Primrose Hill, London.
    Founded by Tanya, an experienced yoga instructor and martial arts practitioner with over 15 years of experience.
    The practice offers a comprehensive approach to wellness, combining ancient Eastern practices with modern wellness techniques.
    Our mission is to help individuals discover balance, strength, and peace through mindful movement and meditation.`,
    category: "about",
  },
  {
    id: "2",
    title: "Yoga Classes",
    content: `We offer various styles of yoga including:
    - Hatha Yoga: A gentle, traditional approach focusing on postures and breathing. Perfect for beginners and those seeking a calm practice.
    - Vinyasa Flow: A dynamic, flowing style linking breath with movement. Great for building strength and flexibility.
    - Yin Yoga: A slow-paced style with longer-held poses, targeting deep connective tissues. Ideal for relaxation and flexibility.
    - Restorative Yoga: A deeply relaxing practice using props to support the body in restful poses.

    All classes are suitable for all levels, with modifications provided. Classes run for 60-90 minutes.
    We provide all necessary equipment including mats, blocks, and bolsters.`,
    category: "classes",
  },
  {
    id: "3",
    title: "Martial Arts Training",
    content: `Our martial arts program includes:
    - Traditional Kung Fu: Learn ancient Chinese martial arts focusing on discipline, technique, and internal energy.
    - Tai Chi: A gentle martial art emphasizing slow, flowing movements and meditation.
    - Self-Defense Workshops: Practical self-defense techniques for everyday situations.

    Classes focus on personal development, self-discipline, and physical fitness.
    Suitable for all fitness levels and ages (adults and teens 14+).
    We emphasize the philosophical and mental aspects alongside physical training.`,
    category: "classes",
  },
  {
    id: "4",
    title: "Meditation Classes",
    content: `Our meditation offerings include:
    - Guided Meditation: Perfect for beginners, with voice guidance throughout the session.
    - Mindfulness Meditation: Learn to be present and aware in the moment.
    - Breathwork Sessions: Explore various breathing techniques for relaxation and energy.
    - Sound Bath Meditation: Experience deep relaxation through therapeutic sound vibrations.

    Sessions run for 30-60 minutes and are suitable for complete beginners.
    We provide cushions, blankets, and a peaceful environment.`,
    category: "classes",
  },
  {
    id: "5",
    title: "Private Sessions",
    content: `We offer personalized one-on-one sessions including:
    - Private Yoga: Customized yoga practice tailored to your goals, abilities, and schedule.
    - Personal Training: Martial arts or fitness training designed specifically for you.
    - Wellness Consultation: Discuss your wellness goals and create a personalized plan.
    - Therapeutic Sessions: Address specific physical or emotional concerns with specialized techniques.

    Duration: 60 or 90 minutes
    Prices start at £80 per hour
    Book in advance to secure your preferred time slot.`,
    category: "services",
  },
  {
    id: "6",
    title: "Pricing and Packages",
    content: `Class Pricing:
    - Single Drop-in Class: £18
    - 5-Class Package: £80 (£16 per class) - Valid for 8 weeks
    - 10-Class Package: £150 (£15 per class) - Valid for 12 weeks
    - Monthly Unlimited: £120 - Attend as many classes as you like

    Private Sessions:
    - 60 minutes: £80
    - 90 minutes: £110
    - 5-Session Package: £360 (60 min sessions)

    Workshops (when available): £35-50 depending on duration

    First class is FREE for new members!
    Student discount: 15% off with valid student ID
    Concession rates available - please inquire.`,
    category: "pricing",
  },
  {
    id: "7",
    title: "Class Schedule",
    content: `Weekly Schedule:

    Monday:
    - 7:00 AM - Vinyasa Flow (60 min)
    - 12:00 PM - Gentle Hatha (60 min)
    - 6:30 PM - Kung Fu Basics (90 min)

    Tuesday:
    - 9:30 AM - Yin Yoga (75 min)
    - 7:00 PM - Meditation & Breathwork (45 min)

    Wednesday:
    - 7:00 AM - Power Vinyasa (75 min)
    - 12:00 PM - Tai Chi (60 min)
    - 6:30 PM - Mixed Level Yoga (60 min)

    Thursday:
    - 9:30 AM - Restorative Yoga (75 min)
    - 7:00 PM - Martial Arts Training (90 min)

    Friday:
    - 7:00 AM - Vinyasa Flow (60 min)
    - 12:00 PM - Gentle Yoga (60 min)
    - 6:00 PM - Sound Bath Meditation (60 min)

    Saturday:
    - 9:00 AM - All Levels Yoga (90 min)
    - 11:00 AM - Kung Fu & Tai Chi (90 min)
    - 2:00 PM - Workshop (varies)

    Sunday:
    - 10:00 AM - Gentle Flow & Meditation (90 min)
    - 4:00 PM - Yin & Restorative (90 min)`,
    category: "schedule",
  },
  {
    id: "8",
    title: "Location and Contact",
    content: `Tanya's Wellness Practice
    Primrose Hill, London NW1

    Contact Information:
    Phone: +44 20 1234 5678
    Email: hello@tanyawellness.com

    Opening Hours:
    Monday - Friday: 6:30 AM - 9:00 PM
    Saturday: 8:00 AM - 6:00 PM
    Sunday: 9:00 AM - 6:00 PM

    We're located in the beautiful Primrose Hill neighborhood, easily accessible by:
    - Underground: Chalk Farm (Northern Line) - 5 min walk
    - Bus: Routes 31, 168, C2
    - Parking: Street parking available (check local restrictions)

    Our studio is on the ground floor with step-free access.`,
    category: "info",
  },
  {
    id: "9",
    title: "Booking and Cancellation Policy",
    content: `How to Book:
    - Online: Book through our website 24/7
    - Phone: Call us during opening hours
    - Walk-in: Subject to availability

    Booking Policy:
    - Book up to 4 weeks in advance
    - First-time visitors must create an account
    - Payment required at time of booking
    - Arrive 10 minutes early for your first class

    Cancellation Policy:
    - Cancel up to 12 hours before class for full credit
    - Late cancellations (less than 12 hours): No refund or credit
    - No-shows: No refund or credit
    - For private sessions: Cancel 24 hours in advance

    Class Changes:
    - You can reschedule up to 12 hours before your booked class
    - Subject to availability in the new class slot

    Package Validity:
    - Class packages must be used within their validity period
    - No extensions or refunds on expired packages
    - Packages are non-transferable`,
    category: "policies",
  },
  {
    id: "10",
    title: "What to Bring and Wear",
    content: `What to Wear:
    - Comfortable, breathable clothing that allows movement
    - For yoga: Fitted or stretchy clothing (leggings, yoga pants, athletic tops)
    - For martial arts: Loose, comfortable clothing or gi if you have one
    - Layers are recommended as you may warm up during practice

    What to Bring:
    - Water bottle (essential!)
    - Towel if you tend to perspire
    - Your own mat if you prefer (though we provide mats)

    What We Provide:
    - Yoga mats and props (blocks, straps, bolsters)
    - Filtered water fountain
    - Changing facilities and lockers
    - Shower facilities

    Please Note:
    - Arrive with an empty stomach (eat light 2-3 hours before)
    - Remove shoes in the practice space
    - Turn off mobile phones
    - Avoid strong perfumes or scents`,
    category: "info",
  },
  {
    id: "11",
    title: "Wellness Tips",
    content: `General Wellness Advice:

    Daily Practice:
    - Even 10 minutes of daily practice is better than longer irregular sessions
    - Morning practice energizes, evening practice calms
    - Listen to your body and honor its limits

    Nutrition:
    - Stay hydrated throughout the day
    - Eat whole, unprocessed foods when possible
    - Be mindful while eating

    Rest and Recovery:
    - Aim for 7-9 hours of quality sleep
    - Include rest days in your practice schedule
    - Try restorative practices when feeling tired

    Mindfulness:
    - Practice mindful breathing throughout your day
    - Take short breaks to check in with yourself
    - Cultivate gratitude and positive thinking

    Consistency:
    - Build a regular practice schedule
    - Start small and gradually increase
    - Find a practice buddy for accountability`,
    category: "wellness",
  },
  {
    id: "12",
    title: "Frequently Asked Questions",
    content: `Q: Do I need experience to join?
    A: No! All our classes welcome complete beginners. We provide modifications and support for all levels.

    Q: What if I'm not flexible?
    A: Flexibility is developed through practice, not a prerequisite. Yoga and martial arts will actually help improve your flexibility over time.

    Q: Can I try a class before committing?
    A: Yes! Your first class is free. This allows you to experience our teaching style and community.

    Q: Do you offer refunds?
    A: Unused class packages can be refunded within 30 days of purchase (minus any used classes). Monthly unlimited memberships are non-refundable.

    Q: What if I have an injury?
    A: Please inform your instructor before class. We can provide modifications or suggest alternative practices.

    Q: Can I book a private session for a group?
    A: Yes! We offer private group sessions for 2-6 people. Contact us for pricing and availability.

    Q: Do you offer online classes?
    A: Currently, we focus on in-person classes for the best experience. Online options may be available in the future.

    Q: Is there parking nearby?
    A: Yes, street parking is available. Please check local parking restrictions and meters.`,
    category: "faq",
  },
]

/**
 * Simple cosine similarity for text matching
 * In production, this would use actual embeddings
 */
function cosineSimilarity(text1: string, text2: string): number {
  const words1 = text1.toLowerCase().split(/\W+/)
  const words2 = text2.toLowerCase().split(/\W+/)

  const intersection = words1.filter(word => words2.includes(word)).length
  const union = new Set([...words1, ...words2]).size

  return intersection / union
}

/**
 * Retrieve relevant knowledge based on query
 */
export function retrieveKnowledge(query: string, topK: number = 3): KnowledgeItem[] {
  const scored = knowledgeBase.map(item => ({
    item,
    score: cosineSimilarity(query, item.title + " " + item.content),
  }))

  scored.sort((a, b) => b.score - a.score)

  return scored.slice(0, topK).map(s => s.item)
}

/**
 * Format retrieved knowledge for context
 */
export function formatContext(items: KnowledgeItem[]): string {
  if (items.length === 0) return ""

  return items
    .map(item => `${item.title}:\n${item.content}`)
    .join("\n\n---\n\n")
}

/**
 * Get all knowledge by category
 */
export function getKnowledgeByCategory(category: string): KnowledgeItem[] {
  return knowledgeBase.filter(item => item.category === category)
}
