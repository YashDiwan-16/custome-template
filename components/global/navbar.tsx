"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeToggle } from "./mode-toggle"

interface NavItem {
  title: string
  href: string
  description?: string
}

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    description: "Return to the homepage",
  },
  {
    title: "Features",
    href: "/features",
    description: "Explore our features",
  },
  {
    title: "Pricing",
    href: "/pricing",
    description: "Check our pricing plans",
  },
  {
    title: "About",
    href: "/about",
    description: "Learn more about us",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch with our team",
  },
]

function NavItems({ isMobile = false }: { isMobile?: boolean }) {
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "flex",
        isMobile ? "flex-col w-full gap-2" : "items-center space-x-1"
      )}
    >
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} className="w-full">
          <Button
            variant="ghost"
            className={cn(
              "justify-start text-sm font-medium",
              pathname === item.href && "bg-accent text-accent-foreground",
              isMobile ? "w-full text-base" : "px-3"
            )}
          >
            {item.title}
          </Button>
        </Link>
      ))}
    </div>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-lg">MyApp</span>
          </Link>
        </div>

        {/* Desktop navbar */}
        <div className="hidden md:flex items-center space-x-4">
          <NavItems />
        </div>

        {/* Right-side actions */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />

          {/* Login button (visible on desktop) */}
          <Button className="hidden md:inline-flex cursor-p" variant="default" >
            Login
          </Button>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <div className="px-7">
                {/* Mobile logo */}
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="font-bold text-lg">MyApp</span>
                </Link>
                <div className="mt-6 flex flex-col gap-3">
                  <NavItems isMobile />
                  <div className="mt-2">
                    <Button className="w-full" variant="default">
                      Login
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}