import Link from "next/link"
import { Instagram, Twitter, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"

interface FooterNavItem {
  title: string
  href: string
}

const companyLinks: FooterNavItem[] = [
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Our Team",
    href: "/team",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: "News",
    href: "/news",
  },
]

const resourceLinks: FooterNavItem[] = [
  {
    title: "Help Center",
    href: "/help",
  },
  {
    title: "Privacy Policy",
    href: "/privacy",
  },
  {
    title: "Terms of Service",
    href: "/terms",
  },
  {
    title: "Contact Support",
    href: "/contact",
  },
]

interface SocialItem {
  name: string
  href: string
  icon: React.ReactNode
}

const socialItems: SocialItem[] = [
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: <Twitter className="h-4 w-4" />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: <Instagram className="h-4 w-4" />,
  },
  {
    name: "GitHub",
    href: "https://github.com",
    icon: <Github className="h-4 w-4" />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: <Linkedin className="h-4 w-4" />,
  },
]

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className=" mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info - Simplified */}
          <div className="space-y-3">
            <Link href="/" className="inline-flex items-center">
              <span className="font-bold text-lg">MyApp</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Building the future, one pixel at a time.
            </p>
          </div>

          {/* Quick Links - Combined sections */}
          <div>
            <h3 className="text-sm font-medium mb-3 ">Links</h3>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link>
              <Link href="/help" className="text-muted-foreground hover:text-foreground">Help</Link>
              <Link href="/team" className="text-muted-foreground hover:text-foreground">Team</Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy</Link>
              <Link href="/careers" className="text-muted-foreground hover:text-foreground">Careers</Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground">Terms</Link>
            </nav>
          </div>

          {/* Contact - Simplified */}
          <div>
            <h3 className="text-sm font-medium mb-3">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>123 Innovation Way, Tech City</p>
              <p>contact@myapp.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Newsletter - Simplified */}
          <div>
            <h3 className="text-sm font-medium mb-3">Newsletter</h3>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Email address"
                className="h-9"
              />
              <button
                type="submit"
                className={cn(buttonVariants({ size: "sm" }), "shrink-0")}
              >
                Subscribe
              </button>
            </div>
            
            {/* Social Links - Compact */}
            <div className="mt-4 flex space-x-2">
              {socialItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  className="p-2 text-muted-foreground hover:text-foreground"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        
        {/* Footer Bottom - Minimal */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} MyApp, Inc.</p>
          <div className="flex space-x-4 mt-3 sm:mt-0">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}