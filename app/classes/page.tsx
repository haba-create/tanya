import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { AIChatAssistant } from "@/components/chat/ai-chat-assistant"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, Calendar } from "lucide-react"
import Link from "next/link"

const classTypes = [
  {
    id: "hatha-yoga",
    title: "Hatha Yoga",
    type: "YOGA",
    description: "A gentle, traditional approach focusing on postures and breathing. Perfect for beginners and those seeking a calm practice.",
    duration: 60,
    level: "All Levels",
    capacity: 15,
    price: 18,
    benefits: [
      "Improves flexibility",
      "Reduces stress",
      "Builds strength",
      "Enhances mindfulness"
    ],
    schedule: [
      { day: "Monday", time: "12:00 PM" },
      { day: "Wednesday", time: "6:30 PM" }
    ],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800"
  },
  {
    id: "vinyasa-flow",
    title: "Vinyasa Flow",
    type: "YOGA",
    description: "A dynamic, flowing style linking breath with movement. Great for building strength and flexibility.",
    duration: 75,
    level: "Intermediate",
    capacity: 12,
    price: 20,
    benefits: [
      "Cardiovascular health",
      "Full body workout",
      "Mental clarity",
      "Stress relief"
    ],
    schedule: [
      { day: "Monday", time: "7:00 AM" },
      { day: "Wednesday", time: "7:00 AM" },
      { day: "Friday", time: "7:00 AM" }
    ],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800"
  },
  {
    id: "yin-yoga",
    title: "Yin Yoga",
    type: "YOGA",
    description: "A slow-paced style with longer-held poses, targeting deep connective tissues. Ideal for relaxation and flexibility.",
    duration: 75,
    level: "All Levels",
    capacity: 15,
    price: 18,
    benefits: [
      "Deep stretching",
      "Joint health",
      "Meditation practice",
      "Stress reduction"
    ],
    schedule: [
      { day: "Tuesday", time: "9:30 AM" },
      { day: "Sunday", time: "4:00 PM" }
    ],
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800"
  },
  {
    id: "kung-fu",
    title: "Traditional Kung Fu",
    type: "MARTIAL_ARTS",
    description: "Learn ancient Chinese martial arts focusing on discipline, technique, and internal energy.",
    duration: 90,
    level: "All Levels",
    capacity: 12,
    price: 22,
    benefits: [
      "Self-defense skills",
      "Physical fitness",
      "Mental discipline",
      "Cultural appreciation"
    ],
    schedule: [
      { day: "Monday", time: "6:30 PM" },
      { day: "Thursday", time: "7:00 PM" },
      { day: "Saturday", time: "11:00 AM" }
    ],
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800"
  },
  {
    id: "tai-chi",
    title: "Tai Chi",
    type: "MARTIAL_ARTS",
    description: "A gentle martial art emphasizing slow, flowing movements and meditation.",
    duration: 60,
    level: "All Levels",
    capacity: 15,
    price: 18,
    benefits: [
      "Balance improvement",
      "Stress reduction",
      "Joint health",
      "Mind-body connection"
    ],
    schedule: [
      { day: "Wednesday", time: "12:00 PM" },
      { day: "Saturday", time: "9:00 AM" }
    ],
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800"
  },
  {
    id: "meditation",
    title: "Guided Meditation",
    type: "MEDITATION",
    description: "Perfect for beginners, with voice guidance throughout the session. Find peace and clarity.",
    duration: 45,
    level: "All Levels",
    capacity: 20,
    price: 15,
    benefits: [
      "Reduced anxiety",
      "Better focus",
      "Emotional balance",
      "Improved sleep"
    ],
    schedule: [
      { day: "Tuesday", time: "7:00 PM" },
      { day: "Friday", time: "6:00 PM" }
    ],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800"
  }
]

export default function ClassesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-calm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-cormorant mb-6">
              Our Classes
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore our range of yoga, martial arts, and meditation classes.
              All levels welcome. First class free for new members!
            </p>
            <Button size="lg" variant="sage" asChild>
              <Link href="/book">Book Your First Class</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {classTypes.map((classItem) => (
              <Card key={classItem.id} className="overflow-hidden border-none shadow-calm-lg card-hover">
                {/* Class Image */}
                <div className="h-48 md:h-56 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${classItem.image}')` }}
                  />
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <CardTitle className="text-2xl md:text-3xl mb-2">{classItem.title}</CardTitle>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        classItem.type === 'YOGA' ? 'bg-sage-200 text-sage-800' :
                        classItem.type === 'MARTIAL_ARTS' ? 'bg-terracotta-200 text-terracotta-800' :
                        'bg-lavender-200 text-lavender-800'
                      }`}>
                        {classItem.type.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl md:text-3xl font-bold text-sage-600">£{classItem.price}</p>
                      <p className="text-sm text-muted-foreground">per class</p>
                    </div>
                  </div>
                  <CardDescription className="text-base">{classItem.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Class Info */}
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-sage-600" />
                      <span>{classItem.duration} mins</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-sage-600" />
                      <span>Max {classItem.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-sage-600" />
                      <span>{classItem.level}</span>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Benefits:</h4>
                    <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      {classItem.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-1">
                          <span className="text-sage-600 mt-0.5">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Schedule */}
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Schedule:</h4>
                    <div className="space-y-1 text-sm">
                      {classItem.schedule.map((slot, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          <span className="font-medium text-foreground">{slot.day}</span> at {slot.time}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Book Button */}
                  <Button className="w-full" size="lg" variant="sage" asChild>
                    <Link href={`/book?class=${classItem.id}`}>Book This Class</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-calm">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-cormorant mb-4">
            Not Sure Which Class is Right for You?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Chat with our AI assistant or contact us directly. We'll help you find the perfect class for your wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="sage" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/book">Browse Schedule</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AIChatAssistant />
    </div>
  )
}
