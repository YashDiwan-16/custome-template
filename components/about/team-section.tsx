import { Badge } from "@/components/ui/badge"
import TeamMemberCard from "@/components/about/team-member-card"
import type { TeamMember } from "@/types/teams"

export default function TeamSection() {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="inline-flex items-center border-primary/20 bg-primary/10 text-primary">
              Our Team
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              The People Behind Our Success
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Meet the talented individuals who make our vision a reality through their expertise, dedication, and
              creativity.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const teamMembers: TeamMember[] = [
  {
    name: "Alex Johnson",
    role: "Chief Executive Officer",
    bio: "With over 15 years of experience in the industry, Alex leads our company with vision and strategic insight.",
    image: "/placeholder.svg?height=300&width=300",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Samantha Lee",
    role: "Chief Operating Officer",
    bio: "Samantha oversees our day-to-day operations, ensuring we deliver excellence in everything we do.",
    image: "/placeholder.svg?height=300&width=300",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    bio: "Michael drives our technological innovation, keeping us at the cutting edge of our industry.",
    image: "/placeholder.svg?height=300&width=300",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "David Rodriguez",
    role: "Lead Software Engineer",
    bio: "David architects our software solutions with a focus on scalability and performance.",
    image: "/placeholder.svg?height=300&width=300",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Priya Patel",
    role: "Frontend Developer",
    bio: "Priya creates intuitive and responsive user interfaces that delight our customers.",
    image: "/placeholder.svg?height=300&width=300",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Emma Thompson",
    role: "Creative Director",
    bio: "Emma leads our design vision, ensuring a cohesive and engaging brand experience.",
    image: "/placeholder.svg?height=300&width=300",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
]

