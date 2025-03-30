// components/hero-illustration.tsx
import { SVGProps } from "react";

export default function HeroIllustration({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 300"
      fill="none"
      className={className}
      {...props}
    >
      <rect
        x="50"
        y="40"
        width="300"
        height="220"
        rx="8"
        className="fill-background stroke-primary"
        strokeWidth="2"
      />
      
      {/* Dashboard elements */}
      <rect
        x="70"
        y="60"
        width="260"
        height="40"
        rx="4"
        className="fill-muted/50"
      />
      
      <rect
        x="80"
        y="72"
        width="120"
        height="16"
        rx="2"
        className="fill-primary/20"
      />
      
      <circle cx="320" cy="80" r="12" className="fill-primary" />
      <circle cx="290" cy="80" r="12" className="fill-primary/40" />
      
      {/* Content area */}
      <rect
        x="70"
        y="114"
        width="168"
        height="126"
        rx="4"
        className="fill-muted/30"
      />
      
      <rect
        x="248"
        y="114"
        width="82"
        height="60"
        rx="4"
        className="fill-muted/30"
      />
      
      <rect
        x="248"
        y="180"
        width="82"
        height="60"
        rx="4"
        className="fill-muted/30"
      />
      
      {/* Chart elements */}
      <rect
        x="84"
        y="130"
        width="20"
        height="94"
        rx="2"
        className="fill-primary/80"
      />
      
      <rect
        x="114"
        y="150"
        width="20"
        height="74"
        rx="2"
        className="fill-primary/60"
      />
      
      <rect
        x="144"
        y="110"
        width="20"
        height="114"
        rx="2"
        className="fill-primary"
      />
      
      <rect
        x="174"
        y="165"
        width="20"
        height="59"
        rx="2"
        className="fill-primary/40"
      />
      
      {/* Data points */}
      <circle cx="260" cy="134" r="4" className="fill-primary" />
      <circle cx="280" cy="144" r="4" className="fill-primary/80" />
      <circle cx="300" cy="124" r="4" className="fill-primary" />
      <circle cx="320" cy="154" r="4" className="fill-primary/60" />
      
      <circle cx="260" cy="200" r="4" className="fill-primary/60" />
      <circle cx="280" cy="210" r="4" className="fill-primary" />
      <circle cx="300" cy="190" r="4" className="fill-primary/80" />
      <circle cx="320" cy="220" r="4" className="fill-primary" />
      
      {/* Abstract decorative elements */}
      <path
        d="M30 120 Q40 80 60 100 T80 70"
        className="stroke-primary/40"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M350 230 Q370 260 385 240 T400 260"
        className="stroke-primary/40"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Floating icons */}
      <rect
        x="20"
        y="180"
        width="24"
        height="24"
        rx="12"
        className="fill-primary/20"
      />
      <rect
        x="25"
        y="185"
        width="14"
        height="14"
        rx="2"
        className="fill-primary"
      />
      
      <circle
        cx="370"
        cy="90"
        r="15"
        className="fill-primary/20 animate-pulse"
      />
      <circle
        cx="370"
        cy="90"
        r="7"
        className="fill-primary"
      />
      
      {/* Added decorative elements */}
      <circle cx="30" cy="50" r="10" className="fill-primary/30 animate-bounce" style={{ animationDuration: '3s' }} />
      <circle cx="380" cy="200" r="8" className="fill-primary/40 animate-pulse" style={{ animationDuration: '2s' }} />
      
      {/* Floating particles */}
      <circle cx="50" cy="230" r="2" className="fill-primary animate-ping" style={{ animationDuration: '4s' }} />
      <circle cx="320" cy="40" r="2" className="fill-primary animate-ping" style={{ animationDuration: '3s' }} />
      <circle cx="280" cy="270" r="2" className="fill-primary animate-ping" style={{ animationDuration: '5s' }} />
      <circle cx="150" cy="30" r="2" className="fill-primary animate-ping" style={{ animationDuration: '3.5s' }} />
      
      {/* Gradient decoration */}
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      
      <path
        d="M350 50 Q380 70 390 40 T410 60"
        stroke="url(#grad1)"
        strokeWidth="3"
        strokeLinecap="round"
        className="animate-pulse"
        style={{ animationDuration: '4s' }}
      />
      
      <polygon
        points="40,240 60,260 20,260"
        className="fill-primary/20 animate-spin"
        style={{ transformOrigin: 'center', animationDuration: '15s' }}
      />
      
      <rect
        x="365"
        y="150"
        width="20"
        height="20"
        rx="4"
        transform="rotate(45, 375, 160)"
        className="fill-primary/30 animate-pulse"
      />
      
      {/* Connected dots effect */}
      <path
        d="M15,100 L35,120 L55,90 L75,130"
        fill="none"
        stroke="var(--primary)"
        strokeOpacity="0.3"
        strokeWidth="1"
        strokeDasharray="2,2"
      />
      <circle cx="15" cy="100" r="3" className="fill-primary/70" />
      <circle cx="35" cy="120" r="3" className="fill-primary/70" />
      <circle cx="55" cy="90" r="3" className="fill-primary/70" />
      <circle cx="75" cy="130" r="3" className="fill-primary/70" />
    </svg>
  );
}