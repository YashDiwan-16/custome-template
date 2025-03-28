// components/ui/footer.tsx
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
      <div className="container px-4 py-12 mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="sm:col-span-3">
            <div className="space-y-4">
              <Link href="/" className="inline-flex items-center space-x-2">
                <span className="font-bold text-xl">MyApp</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Building the future, one pixel at a time. We're dedicated to creating amazing experiences.
              </p>

              <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>123 Innovation Way, Tech City</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>contact@myapp.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="sm:col-span-2 sm:ml-8">
            <h3 className="text-sm font-medium mb-4">Company</h3>
            <nav className="flex flex-col space-y-2">
              {companyLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources Links */}
          <div className="sm:col-span-2">
            <h3 className="text-sm font-medium mb-4">Resources</h3>
            <nav className="flex flex-col space-y-2">
              {resourceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-5">
            <h3 className="text-sm font-medium mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates, features, and news.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="max-w-xs"
              />
              <button
                type="submit"
                className={cn(
                  buttonVariants({ variant: "default", size: "default" }),
                  "whitespace-nowrap"
                )}
              >
                Subscribe
              </button>
            </div>
            
            <div className="mt-6">
              <p className="text-sm font-medium mb-2">Follow Us</p>
              <div className="flex space-x-3">
                {socialItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-label={item.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "h-8 w-8 rounded-full bg-muted"
                    )}
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} MyApp, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-foreground transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}