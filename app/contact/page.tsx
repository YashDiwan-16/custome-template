import type { Metadata } from "next"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our team",
}

export default function ContactPage() {
  return (
      <div className="min-h-screen w-full ">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-40 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-40 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-20 w-80 h-80 bg-pink-500/10 dark:bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className=" relative z-10 py-12 md:py-24">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-900 dark:text-white">
              Get in touch
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              We'd love to hear from you. Reach out and let's start a conversation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12 max-w-6xl mx-auto">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
  )
}

