import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { AIChatAssistant } from "@/components/chat/ai-chat-assistant"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Users } from "lucide-react"
import Link from "next/link"

export default function BookPage() {
  const upcomingClasses = [
    {
      id: "1",
      title: "Vinyasa Flow",
      date: "Monday, Nov 18",
      time: "7:00 AM",
      duration: "75 mins",
      spots: "3 spots left",
      instructor: "Tanya",
      price: 20
    },
    {
      id: "2",
      title: "Hatha Yoga",
      date: "Monday, Nov 18",
      time: "12:00 PM",
      duration: "60 mins",
      spots: "8 spots left",
      instructor: "Tanya",
      price: 18
    },
    {
      id: "3",
      title: "Kung Fu Basics",
      date: "Monday, Nov 18",
      time: "6:30 PM",
      duration: "90 mins",
      spots: "5 spots left",
      instructor: "Tanya",
      price: 22
    },
    {
      id: "4",
      title: "Yin Yoga",
      date: "Tuesday, Nov 19",
      time: "9:30 AM",
      duration: "75 mins",
      spots: "12 spots left",
      instructor: "Tanya",
      price: 18
    },
    {
      id: "5",
      title: "Meditation & Breathwork",
      date: "Tuesday, Nov 19",
      time: "7:00 PM",
      duration: "45 mins",
      spots: "15 spots left",
      instructor: "Tanya",
      price: 15
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-calm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-cormorant mb-6">
              Book Your Class
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Choose from our upcoming classes. Your first class is free for new members!
            </p>
          </div>
        </div>
      </section>

      {/* Booking Info Banner */}
      <section className="py-8 bg-sage-50 border-y border-sage-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center text-center md:text-left">
            <div>
              <p className="text-sm text-muted-foreground mb-1">New Member Offer</p>
              <p className="font-semibold text-lg text-sage-700">First Class FREE</p>
            </div>
            <div className="h-8 w-px bg-sage-200 hidden md:block" />
            <div>
              <p className="text-sm text-muted-foreground mb-1">Drop-in Rate</p>
              <p className="font-semibold text-lg">£15-22 per class</p>
            </div>
            <div className="h-8 w-px bg-sage-200 hidden md:block" />
            <div>
              <p className="text-sm text-muted-foreground mb-1">Class Packages</p>
              <p className="font-semibold text-lg">Save up to 20%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Classes */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-cormorant mb-4">
              Upcoming Classes This Week
            </h2>
            <p className="text-lg text-muted-foreground">
              Select a class to view details and complete your booking
            </p>
          </div>

          <div className="space-y-4">
            {upcomingClasses.map((classItem) => (
              <Card key={classItem.id} className="border-none shadow-calm card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold font-cormorant mb-2">
                        {classItem.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-sage-600" />
                          <span>{classItem.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-sage-600" />
                          <span>{classItem.time} • {classItem.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-sage-600" />
                          <span>{classItem.spots}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        with {classItem.instructor}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 md:flex-col md:items-end">
                      <div className="text-right">
                        <p className="text-2xl md:text-3xl font-bold text-sage-600">
                          £{classItem.price}
                        </p>
                        <p className="text-xs text-muted-foreground">per person</p>
                      </div>
                      <Button size="lg" variant="sage" className="flex-shrink-0">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-8 text-center">
            <Button size="lg" variant="outline">
              View Full Schedule
            </Button>
          </div>
        </div>
      </section>

      {/* Class Packages */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-cormorant mb-4">
              Class Packages
            </h2>
            <p className="text-lg text-muted-foreground">
              Save money with our multi-class packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-transparent hover:border-sage-300 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">5-Class Pack</CardTitle>
                <CardDescription>Valid for 8 weeks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-sage-600 mb-2">£80</p>
                <p className="text-sm text-muted-foreground mb-4">£16 per class</p>
                <p className="text-sm mb-4">Save £10 compared to drop-in rate</p>
                <Button size="lg" variant="sage" className="w-full">
                  Purchase
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-sage-400 shadow-calm-lg relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sage-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">10-Class Pack</CardTitle>
                <CardDescription>Valid for 12 weeks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-sage-600 mb-2">£150</p>
                <p className="text-sm text-muted-foreground mb-4">£15 per class</p>
                <p className="text-sm mb-4">Save £30 compared to drop-in rate</p>
                <Button size="lg" variant="sage" className="w-full">
                  Purchase
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-lavender-300 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Monthly Unlimited</CardTitle>
                <CardDescription>Attend as many classes as you like</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-lavender-600 mb-2">£120</p>
                <p className="text-sm text-muted-foreground mb-4">per month</p>
                <p className="text-sm mb-4">Best value for regular practitioners</p>
                <Button size="lg" variant="lavender" className="w-full">
                  Purchase
                </Button>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            All packages are non-refundable but can be transferred to another person
          </p>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-cormorant mb-4">
            Need Help Booking?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Chat with our AI assistant for instant help, or contact us directly.
            We're here to make your booking experience smooth and easy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="sage" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/classes">Browse All Classes</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AIChatAssistant />
    </div>
  )
}
