import type React from "react"
import { Heart, Zap, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ValuesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="inline-flex items-center border-primary/20 bg-primary/10 text-primary">
              Our Values
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Drives Us Forward</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our core values shape everything we do, from how we build our products to how we interact with our
              community.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3">
          {values.map((value) => (
            <ValueCard key={value.title} icon={value.icon} title={value.title} description={value.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ValueCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <Card className="relative overflow-hidden border-none bg-gradient-to-b from-background to-muted shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
      <div className="absolute top-0 left-0 w-full h-1 bg-primary/50" />
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors duration-500" />
      <CardContent className="p-6 pt-8">
        <div className="relative inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

const values = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Passion",
    description:
      "We're driven by a deep passion for what we do. This enthusiasm fuels our creativity and commitment to excellence.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Innovation",
    description:
      "We constantly push boundaries and explore new ideas. Innovation is at the heart of everything we create.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Integrity",
    description:
      "We believe in doing what's right, even when it's difficult. Honesty and transparency guide our decisions.",
  },
]

