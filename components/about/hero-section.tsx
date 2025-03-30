import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HeroSection() {
  return (
    <section className="relative w-full py-20 overflow-hidden ">
      <div className=" px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge
                variant="outline"
                className="inline-flex items-center border-primary/20 bg-primary/10 text-primary"
              >
                Our Story
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Meet the Team Behind Our Vision
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                We&apos;re a passionate group of innovators, creators, and problem-solvers dedicated to making a difference.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <Link href="#team">
                  Meet Our Team <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <ImageGrid />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-grid-pattern opacity-5" />
    </section>
  )
}

function ImageGrid() {
  return (
    <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] bg-primary/20 rounded-full blur-3xl" />

      {/* Animated circles - keeping these from original */}
      <div
        className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-primary/30 animate-pulse"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-3/4 left-1/3 w-3 h-3 rounded-full bg-primary/40 animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-5 h-5 rounded-full bg-primary/20 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/3 w-4 h-4 rounded-full bg-primary/30 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Replace image grid with SVG animations */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-full h-full max-w-[600px] max-h-[400px]"
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background grid pattern */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(var(--color-primary), 0.1)"
                strokeWidth="1"
              />
            </pattern>
            
            {/* Gradient definitions */}
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(var(--color-primary), 0.2)" />
              <stop offset="100%" stopColor="rgba(var(--color-primary), 0.6)" />
            </linearGradient>
            <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(var(--color-primary), 0.3)" />
              <stop offset="100%" stopColor="rgba(var(--color-primary), 0.7)" />
            </linearGradient>
          </defs>
          
          {/* Background pattern */}
          <rect width="800" height="600" fill="url(#grid)" opacity="0.3" />
          
          {/* Team silhouettes */}
          <g className="team-members">
            {/* Person 1 */}
            <g className="animate-float" style={{animationDelay: "0s"}}>
              <circle cx="250" cy="200" r="70" fill="url(#gradient1)" opacity="0.8" />
              <circle cx="250" cy="150" r="30" fill="rgba(var(--color-primary), 0.6)" />
              <path d="M200 280 Q250 220 300 280" fill="none" stroke="rgba(var(--color-primary), 0.7)" strokeWidth="5" />
            </g>
            
            {/* Person 2 */}
            <g className="animate-float" style={{animationDelay: "0.5s"}}>
              <circle cx="450" cy="250" r="65" fill="url(#gradient2)" opacity="0.8" />
              <circle cx="450" cy="200" r="28" fill="rgba(var(--color-primary), 0.6)" />
              <path d="M400 320 Q450 260 500 320" fill="none" stroke="rgba(var(--color-primary), 0.7)" strokeWidth="5" />
            </g>
            
            {/* Person 3 */}
            <g className="animate-float" style={{animationDelay: "1s"}}>
              <circle cx="200" cy="400" r="60" fill="url(#gradient1)" opacity="0.7" />
              <circle cx="200" cy="350" r="25" fill="rgba(var(--color-primary), 0.6)" />
              <path d="M150 460 Q200 410 250 460" fill="none" stroke="rgba(var(--color-primary), 0.7)" strokeWidth="5" />
            </g>
            
            {/* Person 4 */}
            <g className="animate-float" style={{animationDelay: "1.5s"}}>
              <circle cx="550" cy="400" r="68" fill="url(#gradient2)" opacity="0.8" />
              <circle cx="550" cy="350" r="29" fill="rgba(var(--color-primary), 0.6)" />
              <path d="M500 470 Q550 410 600 470" fill="none" stroke="rgba(var(--color-primary), 0.7)" strokeWidth="5" />
            </g>
            
            {/* Connecting lines */}
            <path 
              d="M250 200 Q350 150 450 250 M450 250 Q350 350 200 400 M200 400 Q375 425 550 400" 
              stroke="rgba(var(--color-primary), 0.4)" 
              strokeWidth="2" 
              fill="none" 
              className="animate-draw"
            />
            
            {/* Animated pulse circles */}
            <circle cx="250" cy="200" r="10" fill="rgba(var(--color-primary), 0.3)" className="animate-ping opacity-75" />
            <circle cx="450" cy="250" r="10" fill="rgba(var(--color-primary), 0.3)" className="animate-ping opacity-75" style={{animationDelay: "1s"}} />
            <circle cx="200" cy="400" r="10" fill="rgba(var(--color-primary), 0.3)" className="animate-ping opacity-75" style={{animationDelay: "2s"}} />
            <circle cx="550" cy="400" r="10" fill="rgba(var(--color-primary), 0.3)" className="animate-ping opacity-75" style={{animationDelay: "3s"}} />
          </g>
        </svg>
      </div>
    </div>
  )
}

// // Add these style definitions to your global CSS or add them inline with a style tag
// const svgAnimationStyles = `
// @keyframes float {
//   0% { transform: translateY(0px); }
//   50% { transform: translateY(-10px); }
//   100% { transform: translateY(0px); }
// }

// @keyframes draw {
//   0% { stroke-dashoffset: 1000; }
//   100% { stroke-dashoffset: 0; }
// }

// .animate-float {
//   animation: float 6s ease-in-out infinite;
// }

// .animate-draw {
//   stroke-dasharray: 1000;
//   stroke-dashoffset: 1000;
//   animation: draw 5s linear forwards;
// }
// `;

