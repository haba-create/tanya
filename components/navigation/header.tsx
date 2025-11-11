"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, User, Calendar, Home, Info, Mail, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Classes", href: "/classes", icon: BookOpen },
  { name: "About", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: Mail },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/40">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 group">
              <span className="sr-only">Tanya's Wellness Practice</span>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sage-400 to-lavender-400 flex items-center justify-center shadow-calm group-hover:shadow-calm-lg transition-all group-hover:scale-105">
                  <span className="text-white font-cormorant font-bold text-2xl">T</span>
                </div>
                <div className="hidden sm:block">
                  <p className="font-cormorant font-semibold text-xl text-foreground">
                    Tanya's Wellness
                  </p>
                  <p className="text-xs text-muted-foreground font-inter">
                    Primrose Hill, London
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/auth/signin">
                <User className="w-4 h-4" />
                Sign In
              </Link>
            </Button>
            <Button variant="sage" size="sm" asChild>
              <Link href="/book">
                <Calendar className="w-4 h-4" />
                Book Now
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <div className="space-y-1 px-6 pb-6 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium text-foreground/80 hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          ))}
          <div className="pt-4 space-y-2">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/auth/signin" onClick={() => setMobileMenuOpen(false)}>
                <User className="w-4 h-4" />
                Sign In
              </Link>
            </Button>
            <Button variant="sage" className="w-full" asChild>
              <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                <Calendar className="w-4 h-4" />
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
