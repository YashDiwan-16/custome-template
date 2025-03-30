"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

import { CheckCircle2, Loader2, Send, User, Mail, MessageSquare, FileText } from "lucide-react"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeField, setActiveField] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const [blobPositions, setBlobPositions] = useState([
    { x: 20, y: 20, size: 150 },
    { x: 70, y: 60, size: 200 },
    { x: 40, y: 80, size: 180 },
  ])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setBlobPositions(prev => 
        prev.map(blob => ({
          x: blob.x + (Math.random() * 2 - 1),
          y: blob.y + (Math.random() * 2 - 1),
          size: Math.max(100, Math.min(250, blob.size + (Math.random() * 10 - 5)))
        }))
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    toast("Message sent successfully", {
      description: "We'll get back to you as soon as possible.",
    })

    console.log(values)
  }

  const formFields = [
    { name: "name", label: "Name", icon: User, color: "bg-white/40" },
    { name: "email", label: "Email", icon: Mail, color: "bg-white/40" },
    { name: "subject", label: "Subject", icon: FileText, color: "bg-white/40" },
    { name: "message", label: "Message", icon: MessageSquare, color: "bg-white/40" },
  ]

  if (isSubmitted) {
    return (
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-lg border border-white/20"
        style={{
          boxShadow: "0 10px 30px -5px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.2)",
        }}
      >
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          {blobPositions.map((blob, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/5 blur-3xl transition-all duration-5000 ease-in-out"
              style={{
                left: `${blob.x}%`,
                top: `${blob.y}%`,
                width: `${blob.size}px`,
                height: `${blob.size}px`,
              }}
            />
          ))}
        </div>
        
        {/* Light reflection on top */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-10 text-center">
          <div className="w-24 h-24 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-lg border border-white/20 shadow-inner shadow-white/5">
            <CheckCircle2 className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-2xl font-bold mt-6 mb-4 text-white">Message Sent!</h2>
          <p className="text-gray-300 mb-8 max-w-md">
            Thank you for reaching out. Our team will review your message and get back to you as soon as possible.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-lg transition-all duration-300 shadow-lg hover:shadow-white/5"
          >
            Send another message
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-lg border border-white/20"
      style={{
        boxShadow: "0 10px 30px -5px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.2)",
      }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {blobPositions.map((blob, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/5 blur-3xl transition-all duration-5000 ease-in-out"
            style={{
              left: `${blob.x}%`,
              top: `${blob.y}%`,
              width: `${blob.size}px`,
              height: `${blob.size}px`,
            }}
          />
        ))}
      </div>
      
      {/* Light reflection on top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      {/* Light reflection on side */}
      <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

      <div className="relative z-10 p-8">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
          <span className="mr-2">Send us a message</span>
          <div className="h-px flex-grow bg-gradient-to-r from-white/50 to-transparent ml-4"></div>
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {formFields.slice(0, 2).map((field) => (
                <FormField
                  key={field.name}
                  control={form.control}
                  name={field.name as "name" | "email"}
                  render={({ field: formField }) => (
                    <FormItem
                      className={cn(
                        "transition-all duration-300", 
                        activeField === field.name ? "scale-105" : ""
                      )}
                    >
                      <FormLabel className="flex items-center gap-2 text-gray-200 font-medium">
                        <field.icon className="h-4 w-4" />
                        {field.label}
                      </FormLabel>
                      <FormControl>
                        <div className="relative group">
                          <Input
                            placeholder={`Your ${field.label.toLowerCase()}`}
                            {...formField}
                            className={cn(
                              "bg-black/30 border-white/10 text-white placeholder:text-gray-500 transition-all duration-300 backdrop-blur-sm",
                              activeField === field.name ? "ring-1 ring-white/30" : "",
                              "hover:border-white/30 focus:bg-black/40"
                            )}
                            onFocus={() => setActiveField(field.name)}
                            onBlur={() => setActiveField(null)}
                          />
                          <div
                            className={cn(
                              "absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500",
                              field.color,
                              activeField === field.name ? "w-full" : ""
                            )}
                          ></div>
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />
              ))}
            </div>

            {formFields.slice(2).map((field) => (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name as "subject" | "message"}
                render={({ field: formField }) => (
                  <FormItem
                    className={cn(
                      "transition-all duration-300", 
                      activeField === field.name ? "scale-[1.02]" : ""
                    )}
                  >
                    <FormLabel className="flex items-center gap-2 text-gray-200 font-medium">
                      <field.icon className="h-4 w-4" />
                      {field.label}
                    </FormLabel>
                    <FormControl>
                      <div className="relative group">
                        {field.name === "message" ? (
                          <Textarea
                            placeholder={`Your ${field.label.toLowerCase()}`}
                            className={cn(
                              "min-h-32 resize-none bg-black/30 border-white/10 text-white placeholder:text-gray-500 transition-all duration-300 backdrop-blur-sm",
                              activeField === field.name ? "ring-1 ring-white/30" : "",
                              "hover:border-white/30 focus:bg-black/40"
                            )}
                            {...formField}
                            onFocus={() => setActiveField(field.name)}
                            onBlur={() => setActiveField(null)}
                          />
                        ) : (
                          <Input
                            placeholder={`Your ${field.label.toLowerCase()}`}
                            {...formField}
                            className={cn(
                              "bg-black/30 border-white/10 text-white placeholder:text-gray-500 transition-all duration-300 backdrop-blur-sm",
                              activeField === field.name ? "ring-1 ring-white/30" : "",
                              "hover:border-white/30 focus:bg-black/40"
                            )}
                            onFocus={() => setActiveField(field.name)}
                            onBlur={() => setActiveField(null)}
                          />
                        )}
                        <div
                          className={cn(
                            "absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500",
                            field.color,
                            activeField === field.name ? "w-full" : ""
                          )}
                        ></div>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-300" />
                  </FormItem>
                )}
              />
            ))}

            <Button
              type="submit"
              className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-lg transition-all duration-300 shadow-lg hover:shadow-white/5"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </Form>

        {/* Status indicator */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-400">
            <span className="block w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span className="text-white/70">Secure Form - Your data is protected</span>
          </div>
        </div>
      </div>
    </div>
  )
}

