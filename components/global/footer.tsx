import Link from "next/link"
import { Instagram, Twitter, Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className=" flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
        {/* Logo/Brand */}
        <Link href="/" className="font-medium">
          MyApp
        </Link>
        
       
        
        {/* Social Icons */}
        <div className="flex items-center gap-x-3">
          <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground" aria-label="Twitter">
            <Twitter className="h-4 w-4" />
          </Link>
          <Link href="https://instagram.com" className="text-muted-foreground hover:text-foreground" aria-label="Instagram">
            <Instagram className="h-4 w-4" />
          </Link>
          <Link href="https://github.com" className="text-muted-foreground hover:text-foreground" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </Link>
          <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </Link>
        </div>
        
        {/* Copyright */}
        <div className="text-xs text-muted-foreground">
          © Copyright{new Date().getFullYear()} MyApp
        </div>
      </div>
    </footer>
  )
}
