import Link from "next/link"
import Image from "next/image"
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
                We're a passionate group of innovators, creators, and problem-solvers dedicated to making a difference.
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

      {/* Animated circles */}
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

      <div className="absolute grid grid-cols-2 gap-4 w-full h-full">
        <div className="flex flex-col gap-4">
          <div className="relative h-2/3 w-full overflow-hidden rounded-lg shadow-lg transform translate-y-6 transition-transform duration-500 hover:translate-y-4">
            <Image
              src="/placeholder.svg?height=400&width=300"
              alt="Team member"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="relative h-1/3 w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-500 hover:translate-y-2">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Team member"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative h-1/3 w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-500 hover:translate-y-2">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Team member"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="relative h-2/3 w-full overflow-hidden rounded-lg shadow-lg transform translate-y-[-1.5rem] transition-transform duration-500 hover:translate-y-[-1.75rem]">
            <Image
              src="/placeholder.svg?height=400&width=300"
              alt="Team member"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

