"use client"

import type React from "react"

import { useState, useRef } from "react"
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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

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
    { name: "name", label: "Name", icon: User, color: "from-violet-500 to-fuchsia-500" },
    { name: "email", label: "Email", icon: Mail, color: "from-blue-500 to-cyan-500" },
    { name: "subject", label: "Subject", icon: FileText, color: "from-emerald-500 to-green-500" },
    { name: "message", label: "Message", icon: MessageSquare, color: "from-amber-500 to-yellow-500" },
  ]

  if (isSubmitted) {
    return (
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative h-full rounded-2xl overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
        }}
      >
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-10 text-center">
          <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-r from-green-400 to-emerald-500 mb-6 text-white shadow-lg shadow-emerald-500/20">
            <CheckCircle2 className="h-12 w-12" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Message Sent!</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-md">
            Thank you for reaching out. Our team will review your message and get back to you as soon as possible.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white border-none shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
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
      className="relative rounded-2xl overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl"
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
      }}
    >
      <div className="relative z-10 p-8">
        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
            Send us a message
          </span>
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
                      className={cn("transition-all duration-300", activeField === field.name ? "scale-105" : "")}
                    >
                      <FormLabel className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                        <field.icon className="h-4 w-4" />
                        {field.label}
                      </FormLabel>
                      <FormControl>
                        <div className="relative group">
                          <Input
                            placeholder={`Your ${field.label.toLowerCase()}`}
                            {...formField}
                            className={cn(
                              "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 transition-all duration-300",
                              activeField === field.name ? "shadow-[0_0_15px_rgba(168,85,247,0.15)]" : "",
                            )}
                            onFocus={() => setActiveField(field.name)}
                            onBlur={() => setActiveField(null)}
                          />
                          <div
                            className={cn(
                              "absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r transition-all duration-500",
                              field.color,
                              activeField === field.name ? "w-full" : "",
                            )}
                          ></div>
                        </div>
                      </FormControl>
                      <FormMessage className="text-pink-600 dark:text-pink-400" />
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
                    className={cn("transition-all duration-300", activeField === field.name ? "scale-[1.02]" : "")}
                  >
                    <FormLabel className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                      <field.icon className="h-4 w-4" />
                      {field.label}
                    </FormLabel>
                    <FormControl>
                      <div className="relative group">
                        {field.name === "message" ? (
                          <Textarea
                            placeholder={`Your ${field.label.toLowerCase()}`}
                            className={cn(
                              "min-h-32 resize-none bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 transition-all duration-300",
                              activeField === field.name ? "shadow-[0_0_15px_rgba(168,85,247,0.15)]" : "",
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
                              "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 transition-all duration-300",
                              activeField === field.name ? "shadow-[0_0_15px_rgba(168,85,247,0.15)]" : "",
                            )}
                            onFocus={() => setActiveField(field.name)}
                            onBlur={() => setActiveField(null)}
                          />
                        )}
                        <div
                          className={cn(
                            "absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r transition-all duration-500",
                            field.color,
                            activeField === field.name ? "w-full" : "",
                          )}
                        ></div>
                      </div>
                    </FormControl>
                    <FormMessage className="text-pink-600 dark:text-pink-400" />
                  </FormItem>
                )}
              />
            ))}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white border-none shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
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
          <div className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span className="block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Secure Form - Your data is protected
          </div>
        </div>
      </div>
    </div>
  )
}

