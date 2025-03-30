"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Mail, Phone, Twitter, Linkedin, Globe, MessageSquare, Copy, Check, Clock, QrCode, Download, X } from "lucide-react"
import { cn } from "@/lib/utils"
import QRCodeSVG from 'react-qr-code'

// Contact card option type definition
type ContactOption = {
  id: string
  icon: React.ElementType
  label: string
  value: string
  color: string
  action: string
}

// Reusable action button component
type ActionButtonProps = {
  icon: React.ElementType
  onClick: (e: React.MouseEvent) => void
  onKeyDown?: (e: React.KeyboardEvent) => void
  label: string
  isActive?: boolean
  activeIcon?: React.ElementType
}

const ActionButton = ({ icon: Icon, onClick, onKeyDown, label, isActive, activeIcon: ActiveIcon }: ActionButtonProps) => (
  <button 
    onClick={onClick}
    onKeyDown={onKeyDown}
    className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:outline-none"
    aria-label={label}
    tabIndex={0}
  >
    {isActive && ActiveIcon ? (
      <ActiveIcon className="w-3.5 h-3.5 text-green-500" />
    ) : (
      <Icon className="w-3.5 h-3.5 text-slate-500" />
    )}
  </button>
)

// QR Code modal component
type QRModalProps = {
  option: ContactOption | null
  onClose: () => void
  generateVCardData: (option: ContactOption) => string
  downloadVCard: (e: React.MouseEvent, option: ContactOption) => void
}

const QRModal = ({ option, onClose, generateVCardData, downloadVCard }: QRModalProps) => {
  if (!option) return null
  
  const vCardData = generateVCardData(option)
  
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-black rounded-lg shadow-lg max-w-sm w-full p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700"
          aria-label="Close QR code"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-medium mb-4 text-center text-slate-900 dark:text-white">{option.label} QR Code</h3>
          
          <div className="bg-white p-4 rounded-lg mb-4">
            <QRCodeSVG 
              value={vCardData} 
              size={200}
              bgColor={"#FFFFFF"}
              fgColor={"#000000"}
              level={"L"}
            />
          </div>
          
          <p className="text-sm text-slate-600 dark:text-slate-300 text-center mb-4">{option.value}</p>
          
          <div className="flex space-x-2">
            <button
              onClick={(e) => downloadVCard(e, option)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors text-sm"
            >
              <Download className="w-4 h-4" />
              Download vCard
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Contact card component
type ContactCardProps = {
  option: ContactOption
  index: number
  isHovered: boolean
  isCopied: boolean
  tiltValue: { x: number, y: number } | undefined
  isMounted: boolean
  onHover: (id: string | null) => void
  onCopy: (e: React.MouseEvent, value: string, id: string) => void
  onKeyDown: (e: React.KeyboardEvent, value: string, id: string) => void
  onCardMove: (e: React.MouseEvent, id: string) => void
  onCardLeave: (id: string) => void
  onShowQR: (id: string) => void
  onDownloadVCard: (e: React.MouseEvent, option: ContactOption) => void
}

const ContactCard = ({
  option, 
  index, 
  isHovered, 
  isCopied,
  tiltValue,
  isMounted,
  onHover, 
  onCopy,
  onKeyDown,
  onCardMove,
  onCardLeave,
  onShowQR,
  onDownloadVCard
}: ContactCardProps) => (
  <a
    key={option.id}
    href={option.action}
    className="group focus:outline-none"
    onMouseEnter={() => onHover(option.id)}
    onMouseLeave={() => {
      onHover(null)
      onCardLeave(option.id)
    }}
    onMouseMove={(e) => onCardMove(e, option.id)}
    onFocus={() => onHover(option.id)}
    onBlur={() => onHover(null)}
    style={{ 
      transitionDelay: `${index * 100}ms`,
      animation: `fadeIn 0.6s ease-out ${index * 100}ms both` 
    }}
  >
    <div
      className={cn(
        "relative p-4 rounded-xl transition-all duration-300 h-full",
        "bg-white/70 dark:bg-black/70 border border-white/20 dark:border-black/20",
        "backdrop-blur-md focus-within:ring-2 focus-within:ring-gray-500",
        isHovered ? "shadow-lg" : "shadow hover:shadow-md",
      )}
      style={{
        transform: isMounted && tiltValue ? 
          `perspective(1000px) rotateX(${tiltValue.x || 0}deg) rotateY(${tiltValue.y || 0}deg) scale3d(1.05, 1.05, 1.05)` : 
          'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: 'transform 0.3s ease'
      }}
    >
      <div
        className={cn(
          "absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r transition-all duration-500 rounded-full",
          "from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300",
          isHovered ? "w-full" : "",
        )}
      ></div>

      <div className="absolute top-2 right-2 flex space-x-1">
        <ActionButton 
          icon={QrCode}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onShowQR(option.id)
          }}
          label={`Show QR code for ${option.label}`}
        />
        
        <ActionButton 
          icon={Download}
          onClick={(e) => onDownloadVCard(e, option)}
          label={`Download contact as vCard`}
        />
        
        <ActionButton 
          icon={Copy}
          activeIcon={Check}
          isActive={isCopied}
          onClick={(e) => onCopy(e, option.value, option.id)}
          onKeyDown={(e) => onKeyDown(e, option.value, option.id)}
          label={`Copy ${option.label}`}
        />
      </div>

      <div className="flex items-start gap-4">
        <div
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center p-3 text-white shadow-md transition-transform group-hover:scale-110",
            "bg-gradient-to-r from-gray-500 to-gray-700 dark:from-gray-600 dark:to-gray-400",
          )}
        >
          <option.icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-medium text-slate-900 dark:text-white mb-1">{option.label}</h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm">{option.value}</p>
          {isCopied && (
            <span className="text-xs text-green-500 mt-1 inline-block">Copied!</span>
          )}
        </div>
      </div>
    </div>
  </a>
)

export default function ContactInfo() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredOption, setHoveredOption] = useState<string | null>(null)
  const [copiedOption, setCopiedOption] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [tiltValues, setTiltValues] = useState<{ [key: string]: { x: number, y: number } }>({})
  const [currentTime, setCurrentTime] = useState<string>("")
  const [mounted, setMounted] = useState(false)
  const [showQRCode, setShowQRCode] = useState<string | null>(null)

  // Reset copy state after 2 seconds
  useEffect(() => {
    if (copiedOption) {
      const timer = setTimeout(() => {
        setCopiedOption(null)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [copiedOption])

  // Add animation on mount
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Display current time in company's timezone
  useEffect(() => {
    setMounted(true)
    
    const updateTime = () => {
      // Example: showing time in New York (adjust to your company's timezone)
      const options: Intl.DateTimeFormatOptions = { 
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: true,
        timeZone: 'America/New_York'  // Set your company's timezone
      }
      const time = new Intl.DateTimeFormat('en-US', options).format(new Date())
      setCurrentTime(time)
    }
    
    updateTime()
    const interval = setInterval(updateTime, 60000) // Update every minute
    
    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleCopy = (e: React.MouseEvent, value: string, id: string) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(value)
    setCopiedOption(id)
  }

  // Add keyboard support for copy functionality
  const handleKeyDown = (e: React.KeyboardEvent, value: string, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      navigator.clipboard.writeText(value)
      setCopiedOption(id)
      // Announce to screen readers
      const announcement = document.createElement("div")
      announcement.setAttribute("aria-live", "assertive")
      announcement.setAttribute("role", "status")
      announcement.className = "sr-only"
      announcement.textContent = `${value} copied to clipboard`
      document.body.appendChild(announcement)
      setTimeout(() => document.body.removeChild(announcement), 3000)
    }
  }

  // Handle card tilt effect
  const handleCardMove = (e: React.MouseEvent, id: string) => {
    if (!containerRef.current) return
    
    const card = e.currentTarget as HTMLElement
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const tiltX = (centerY - y) / 10
    const tiltY = (x - centerX) / 10
    
    setTiltValues(prev => ({
      ...prev,
      [id]: { x: tiltX, y: tiltY }
    }))
  }
  
  const handleCardLeave = (id: string) => {
    setTiltValues(prev => ({
      ...prev,
      [id]: { x: 0, y: 0 }
    }))
  }

  // Generate vCard data in the correct format
  const generateVCardData = (option: ContactOption) => {
    let vcard = "BEGIN:VCARD\nVERSION:3.0\n"
    vcard += "FN:Example Company\n"
    vcard += "ORG:Example Company\n"
    
    if (option.id === "email") {
      vcard += `EMAIL:${option.value}\n`
    } else if (option.id === "phone") {
      vcard += `TEL:${option.value.replace(/[^0-9+]/g, '')}\n`
    } else if (option.id === "twitter" || option.id === "linkedin" || option.id === "portfolio") {
      vcard += `URL:${option.action}\n`
    }
    
    vcard += "END:VCARD"
    return vcard
  }

  // Download vCard file
  const downloadVCard = (e: React.MouseEvent, option: ContactOption) => {
    e.preventDefault()
    e.stopPropagation()
    
    const vCardData = generateVCardData(option)
    const blob = new Blob([vCardData], { type: 'text/vcard' })
    const url = window.URL.createObjectURL(blob)
    
    const link = document.createElement('a')
    link.href = url
    link.download = `contact_${option.id}.vcf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Define contact options as a centralized data source
  const contactOptions: ContactOption[] = [
    {
      id: "email",
      icon: Mail,
      label: "Email",
      value: "hello@example.com",
      color: "from-gray-500 to-gray-600",
      action: "mailto:hello@example.com",
    },
    {
      id: "discord",
      icon: MessageSquare,
      label: "Discord",
      value: "example#1234",
      color: "from-gray-600 to-gray-700",
      action: "#",
    },
    {
      id: "twitter",
      icon: Twitter,
      label: "Twitter",
      value: "@example",
      color: "from-gray-400 to-gray-600",
      action: "https://twitter.com/example",
    },
    {
      id: "linkedin",
      icon: Linkedin,
      label: "LinkedIn",
      value: "company/example",
      color: "from-gray-700 to-gray-800",
      action: "https://linkedin.com/company/example",
    },
    {
      id: "portfolio",
      icon: Globe,
      label: "Portfolio",
      value: "example.com",
      color: "from-gray-500 to-gray-700",
      action: "https://example.com",
    },
    {
      id: "phone",
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      color: "from-gray-400 to-gray-500",
      action: "tel:+15551234567",
    },
  ]

  // Get currently shown QR code option
  const currentQROption = showQRCode 
    ? contactOptions.find(option => option.id === showQRCode) || null
    : null

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative h-full rounded-2xl overflow-hidden transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        "bg-white/30 dark:bg-black/30 border border-white/20 dark:border-gray-800/20",
        "backdrop-blur-lg shadow-2xl"
      )}
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15) 0%, transparent 50%)`,
      }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 dark:bg-white/5 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 dark:bg-white/5 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-white/5 dark:bg-white/5 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 dark:from-white/5 dark:via-transparent dark:to-white/5 z-0"></div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent"></div>
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/30 dark:via-white/10 to-transparent"></div>
      
      <div className="relative z-10 h-full flex flex-col p-8">
        <h2 className="text-2xl font-bold mb-8 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-black dark:from-gray-300 dark:to-white">
            Connect With Us
          </span>
          <div className="h-0.5 w-full bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-white/90 mt-2"></div>
        </h2>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactOptions.map((option, index) => (
            <ContactCard
              key={option.id}
              option={option}
              index={index}
              isHovered={hoveredOption === option.id}
              isCopied={copiedOption === option.id}
              tiltValue={tiltValues[option.id]}
              isMounted={mounted}
              onHover={setHoveredOption}
              onCopy={handleCopy}
              onKeyDown={handleKeyDown}
              onCardMove={handleCardMove}
              onCardLeave={handleCardLeave}
              onShowQR={setShowQRCode}
              onDownloadVCard={downloadVCard}
            />
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center gap-2">
          <div className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 px-3 py-1.5 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-full shadow-sm border border-white/20 dark:border-gray-800/30">
            <span className="block w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-pulse"></span>
            Currently Online & Ready to Help
          </div>
          
          {mounted && (
            <div className="inline-flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
              <Clock className="w-3 h-3" />
              <span>Local time: {currentTime} (EST)</span>
            </div>
          )}
        </div>
      </div>

      <QRModal
        option={currentQROption}
        onClose={() => setShowQRCode(null)}
        generateVCardData={generateVCardData}
        downloadVCard={downloadVCard}
      />

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); opacity: 0.2; }
          33% { transform: translate(30px, -50px) scale(1.1); opacity: 0.3; }
          66% { transform: translate(-20px, 20px) scale(0.9); opacity: 0.1; }
          100% { transform: translate(0px, 0px) scale(1); opacity: 0.2; }
        }
        
        .animate-blob {
          animation: blob 20s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

