"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Mail, Phone, Twitter, Linkedin, Globe, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ContactInfo() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredOption, setHoveredOption] = useState<string | null>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const contactOptions = [
    {
      id: "email",
      icon: Mail,
      label: "Email",
      value: "hello@example.com",
      color: "from-blue-500 to-cyan-500",
      action: "mailto:hello@example.com",
    },
    {
      id: "discord",
      icon: MessageSquare,
      label: "Discord",
      value: "example#1234",
      color: "from-indigo-500 to-purple-500",
      action: "#",
    },
    {
      id: "twitter",
      icon: Twitter,
      label: "Twitter",
      value: "@example",
      color: "from-sky-500 to-blue-500",
      action: "https://twitter.com/example",
    },
    {
      id: "linkedin",
      icon: Linkedin,
      label: "LinkedIn",
      value: "company/example",
      color: "from-blue-600 to-blue-800",
      action: "https://linkedin.com/company/example",
    },
    {
      id: "portfolio",
      icon: Globe,
      label: "Portfolio",
      value: "example.com",
      color: "from-emerald-500 to-green-500",
      action: "https://example.com",
    },
    {
      id: "phone",
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      color: "from-amber-500 to-yellow-500",
      action: "tel:+15551234567",
    },
  ]

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-full rounded-2xl overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl"
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
      }}
    >
      <div className="relative z-10 h-full flex flex-col p-8">
        {/* Animated title */}
        <h2 className="text-2xl font-bold mb-8 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            Connect With Us
          </span>
          <div className="h-0.5 w-full bg-gradient-to-r from-indigo-500 to-purple-500 mt-2"></div>
        </h2>

        {/* Contact options */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactOptions.map((option) => (
            <a
              key={option.id}
              href={option.action}
              className="group"
              onMouseEnter={() => setHoveredOption(option.id)}
              onMouseLeave={() => setHoveredOption(null)}
            >
              <div
                className={cn(
                  "relative p-4 rounded-xl transition-all duration-300 h-full",
                  "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700",
                  hoveredOption === option.id ? "shadow-lg scale-105" : "shadow",
                )}
              >
                <div
                  className={cn(
                    "absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r transition-all duration-500",
                    option.color,
                    hoveredOption === option.id ? "w-full" : "",
                  )}
                ></div>

                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center p-3 text-white shadow-md",
                      `bg-gradient-to-r ${option.color}`,
                    )}
                  >
                    <option.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white mb-1">{option.label}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{option.value}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Status indicator */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span className="block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Currently Online & Ready to Help
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}

