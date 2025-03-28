import type React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Github } from "lucide-react"
import type { TeamMember } from "@/types/teams"

interface TeamMemberCardProps {
  member: TeamMember
  index: number
}

export default function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  // Different SVG patterns for each card
  const patterns = [
    <svg
      key="pattern1"
      className="absolute top-0 right-0 w-32 h-32 text-primary/10"
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="40" cy="40" r="30" fill="currentColor" />
      <path d="M80 0L0 80" stroke="currentColor" strokeWidth="2" />
      <path d="M20 0L100 80" stroke="currentColor" strokeWidth="2" />
      <path d="M40 0L120 80" stroke="currentColor" strokeWidth="2" />
      <path d="M60 0L140 80" stroke="currentColor" strokeWidth="2" />
    </svg>,
    <svg
      key="pattern2"
      className="absolute top-0 right-0 w-32 h-32 text-primary/10"
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="10" fill="currentColor" />
      <circle cx="60" cy="20" r="10" fill="currentColor" />
      <circle cx="20" cy="60" r="10" fill="currentColor" />
      <circle cx="60" cy="60" r="10" fill="currentColor" />
      <circle cx="40" cy="40" r="20" fill="currentColor" opacity="0.5" />
    </svg>,
    <svg
      key="pattern3"
      className="absolute top-0 right-0 w-32 h-32 text-primary/10"
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="10" width="60" height="60" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="25" y="25" width="30" height="30" rx="4" fill="currentColor" opacity="0.5" />
      <circle cx="40" cy="40" r="5" fill="currentColor" />
    </svg>,
    <svg
      key="pattern4"
      className="absolute top-0 right-0 w-32 h-32 text-primary/10"
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M40,10 L70,30 L70,70 L10,70 L10,30 Z" fill="currentColor" opacity="0.3" />
      <circle cx="40" cy="40" r="15" fill="currentColor" opacity="0.6" />
    </svg>,
    <svg
      key="pattern5"
      className="absolute top-0 right-0 w-32 h-32 text-primary/10"
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10,10 C30,-10 50,30 70,10 C90,-10 90,50 70,70 C50,90 30,50 10,70 C-10,90 -10,30 10,10 Z"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>,
    <svg
      key="pattern6"
      className="absolute top-0 right-0 w-32 h-32 text-primary/10"
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0,0 L80,0 L80,80 L0,80 Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M20,20 L60,20 L60,60 L20,60 Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M35,35 L45,35 L45,45 L35,45 Z" fill="currentColor" />
    </svg>,
  ]

  const patternIndex = index % patterns.length

  return (
    <Card className="group relative overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80 z-0" />

      {/* Decorative SVG pattern */}
      {patterns[patternIndex]}

      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="relative z-10">
        <div className="p-1 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent mx-auto mt-8 mb-4 w-32 h-32 overflow-hidden">
          <div className="rounded-full overflow-hidden w-full h-full border-2 border-background relative">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              width={128}
              height={128}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        <CardContent className="text-center p-6">
          <div className="relative inline-block mb-1">
            <h3 className="text-xl font-bold">{member.name}</h3>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </div>
          <p className="text-sm font-medium text-primary mb-4">{member.role}</p>
          <p className="text-muted-foreground">{member.bio}</p>

          <div className="mt-6 flex justify-center space-x-3">
            <SocialIcon href={member.socialLinks.linkedin} icon={<Linkedin size={16} />} />
            <SocialIcon href={member.socialLinks.twitter} icon={<Twitter size={16} />} />
            <SocialIcon href={member.socialLinks.github} icon={<Github size={16} />} />
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

interface SocialIconProps {
  href: string
  icon: React.ReactNode
}

function SocialIcon({ href, icon }: SocialIconProps) {
  return (
    <a
      href={href}
      className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 hover:text-primary-foreground transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  )
}

