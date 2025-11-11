import Link from "next/link"
import { Calendar, Heart, Users, Sparkles, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { AIChatAssistant } from "@/components/chat/ai-chat-assistant"

const features = [
  {
    name: "Yoga Classes",
    description: "Flow through mindful movements that strengthen body and calm mind. From gentle Hatha to dynamic Vinyasa.",
    icon: Heart,
    color: "sage",
  },
  {
    name: "Martial Arts",
    description: "Discover your inner strength through traditional and modern martial arts practices.",
    icon: Sparkles,
    color: "terracotta",
  },
  {
    name: "Meditation",
    description: "Find peace and clarity with guided meditation sessions for all experience levels.",
    icon: Users,
    color: "lavender",
  },
  {
    name: "Private Sessions",
    description: "Personalized one-on-one sessions tailored to your unique wellness journey.",
    icon: Calendar,
    color: "sage",
  },
]

const benefits = [
  "Reduce stress and anxiety",
  "Improve flexibility and strength",
  "Enhance mental clarity",
  "Build self-confidence",
  "Connect with community",
  "Develop mindfulness practices",
]

const testimonials = [
  {
    content: "Tanya's classes have transformed my life. The perfect blend of challenge and serenity. I've never felt stronger or more centered.",
    author: "Sarah Mitchell",
    role: "Yoga Student",
  },
  {
    content: "The martial arts training is exceptional. Tanya's expertise and patient teaching style helped me progress beyond what I thought possible.",
    author: "James Chen",
    role: "Martial Arts Student",
  },
  {
    content: "A sanctuary in the heart of London. The welcoming atmosphere and expert guidance make every session something to look forward to.",
    author: "Emma Thompson",
    role: "Regular Member",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-calm -z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200')] bg-cover bg-center opacity-5" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl font-cormorant mb-6">
              Transform Your
              <span className="block text-gradient">Body, Mind & Spirit</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Welcome to Tanya's Wellness Practice in Primrose Hill. Experience the perfect harmony
              of yoga, martial arts, and mindfulness in a nurturing community environment.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button size="xl" variant="sage" asChild className="shadow-calm-lg">
                <Link href="/book">
                  Book Your First Class
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link href="/classes">View Schedule</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              First class free for new members · No commitment required
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-foreground font-cormorant sm:text-5xl">
              What We Offer
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover a holistic approach to wellness through our diverse range of classes and practices.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.name} className="card-hover border-none">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-full bg-${feature.color}-100 flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                  </div>
                  <CardTitle className="text-xl">{feature.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 gradient-calm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-foreground font-cormorant sm:text-5xl mb-6">
                Why Choose Our Practice?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                More than just classes, we offer a transformative journey towards holistic wellbeing.
                Join our supportive community and experience the benefits of regular practice.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Button size="lg" variant="sage" asChild>
                  <Link href="/about">
                    Learn More About Tanya
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-sage-200 to-lavender-200 shadow-calm-lg animate-breathe" />
              <div className="absolute inset-0 rounded-2xl bg-[url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800')] bg-cover bg-center opacity-90" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-foreground font-cormorant sm:text-5xl">
              What Our Community Says
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real stories from real people who've transformed their lives through our practice.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="border-none shadow-calm">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground italic mb-6">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-sage relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200')] bg-cover bg-center opacity-10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white font-cormorant sm:text-5xl mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-white/90 mb-10">
              Join us for your first class and experience the transformative power of holistic wellness.
              Book online in seconds or chat with our AI assistant for guidance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="xl" variant="secondary" asChild className="shadow-calm-lg">
                <Link href="/book">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your First Class
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild className="bg-white/10 backdrop-blur text-white border-white/30 hover:bg-white/20">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AIChatAssistant />
    </div>
  )
}
