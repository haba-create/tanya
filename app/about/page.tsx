import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { AIChatAssistant } from "@/components/chat/ai-chat-assistant"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, Users, Sparkles } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-calm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-cormorant mb-6">
              About Tanya's Wellness Practice
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Your journey to holistic wellbeing starts here in the heart of Primrose Hill, London
            </p>
          </div>
        </div>
      </section>

      {/* Tanya's Story */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-cormorant mb-6">
                Meet Tanya
              </h2>
              <div className="space-y-4 text-muted-foreground text-base md:text-lg">
                <p>
                  With over 15 years of experience in yoga, martial arts, and holistic wellness practices,
                  Tanya has dedicated her life to helping others discover balance, strength, and peace
                  through mindful movement.
                </p>
                <p>
                  Her journey began in traditional martial arts, where she learned the importance of
                  discipline and inner strength. This path naturally led her to yoga and meditation,
                  where she found the perfect complement to physical practice through spiritual growth
                  and mindfulness.
                </p>
                <p>
                  After years of training under renowned teachers across Asia and Europe, Tanya founded
                  her wellness practice in Primrose Hill to create a welcoming space where individuals
                  of all backgrounds and abilities can explore their potential and cultivate wellbeing.
                </p>
                <p className="font-semibold text-foreground">
                  "Wellness is not a destination—it's a journey we take together, one breath at a time."
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" variant="sage" asChild>
                  <Link href="/book">Book a Class with Tanya</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-calm-lg">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800')" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-cormorant mb-4">
              Qualifications & Training
            </h2>
            <p className="text-lg text-muted-foreground">
              Certified, experienced, and committed to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "500-Hour Yoga Teacher",
                detail: "Registered Yoga Teacher (RYT-500)",
                icon: Award
              },
              {
                title: "Martial Arts Master",
                detail: "3rd Degree Black Belt in Kung Fu",
                icon: Sparkles
              },
              {
                title: "Meditation Teacher",
                detail: "Certified Mindfulness Instructor",
                icon: Heart
              },
              {
                title: "15+ Years Experience",
                detail: "Teaching students worldwide",
                icon: Users
              }
            ].map((qual, idx) => (
              <Card key={idx} className="border-none shadow-calm text-center">
                <CardContent className="pt-6">
                  <qual.icon className="w-12 h-12 mx-auto mb-4 text-sage-600" />
                  <h3 className="font-semibold text-lg mb-2">{qual.title}</h3>
                  <p className="text-sm text-muted-foreground">{qual.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-cormorant mb-4">
              Our Philosophy
            </h2>
          </div>

          <div className="space-y-8">
            <Card className="border-none shadow-calm">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-sage-700">Holistic Approach</h3>
                <p className="text-muted-foreground">
                  We believe in nurturing the whole person—body, mind, and spirit. Our classes
                  integrate physical movement, breathwork, and meditation to create a comprehensive
                  wellness experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-calm">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-lavender-700">Inclusive Community</h3>
                <p className="text-muted-foreground">
                  Everyone is welcome here, regardless of age, fitness level, or experience. We
                  create a supportive environment where you can explore at your own pace, without
                  judgment or comparison.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-calm">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-terracotta-700">Authentic Practice</h3>
                <p className="text-muted-foreground">
                  We honor the traditional roots of yoga and martial arts while making these ancient
                  practices accessible and relevant to modern life. Every class is taught with respect,
                  knowledge, and genuine care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 gradient-sage">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-cormorant mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join our welcoming community and experience transformative wellness practices.
            Your first class is free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/classes">View Classes</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 backdrop-blur text-white border-white/30 hover:bg-white/20">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AIChatAssistant />
    </div>
  )
}
