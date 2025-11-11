import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react"

const footerLinks = {
  practice: [
    { name: "Classes", href: "/classes" },
    { name: "Schedule", href: "/schedule" },
    { name: "Pricing", href: "/pricing" },
    { name: "About Tanya", href: "/about" },
  ],
  services: [
    { name: "Yoga Classes", href: "/classes?type=yoga" },
    { name: "Martial Arts", href: "/classes?type=martial-arts" },
    { name: "Meditation", href: "/classes?type=meditation" },
    { name: "Private Sessions", href: "/private-sessions" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/faq" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
}

const social = [
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "YouTube", href: "#", icon: Youtube },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-sage-50 via-cream-50 to-lavender-50 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sage-400 to-lavender-400 flex items-center justify-center shadow-calm">
                <span className="text-white font-cormorant font-bold text-2xl">T</span>
              </div>
              <div>
                <p className="font-cormorant font-semibold text-xl text-foreground">
                  Tanya's Wellness
                </p>
                <p className="text-xs text-muted-foreground">
                  Primrose Hill, London
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Experience transformative wellness through yoga, martial arts, and holistic practices.
              Nurture your body, mind, and spirit in the heart of Primrose Hill.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-sage-600" />
                <span>Primrose Hill, London NW1</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-sage-600" />
                <a href="tel:+442012345678" className="hover:text-primary transition-colors">
                  +44 20 1234 5678
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-sage-600" />
                <a href="mailto:hello@tanyawellness.com" className="hover:text-primary transition-colors">
                  hello@tanyawellness.com
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 rounded-full bg-white shadow-calm flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-calm-lg transition-all hover:-translate-y-1"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold font-raleway uppercase tracking-wider text-foreground">
                  Practice
                </h3>
                <ul className="mt-4 space-y-3">
                  {footerLinks.practice.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold font-raleway uppercase tracking-wider text-foreground">
                  Services
                </h3>
                <ul className="mt-4 space-y-3">
                  {footerLinks.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1">
              <div>
                <h3 className="text-sm font-semibold font-raleway uppercase tracking-wider text-foreground">
                  Support
                </h3>
                <ul className="mt-4 space-y-3">
                  {footerLinks.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 border-t border-border/40 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Tanya's Wellness Practice. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with{" "}
              <span className="text-sage-600">♥</span>
              {" "}in Primrose Hill
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
