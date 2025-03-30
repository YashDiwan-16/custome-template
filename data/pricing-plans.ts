import { Zap, Sparkles, Shield } from "lucide-react";

export const pricingPlans = [
  {
    id: "free",
    name: "Free Plan",
    icon: Zap,
    description: "Perfect for starters",
    price: "$0",
    period: "Forever Free",
    features: [
      "Basic features included",
      "Up to 3 projects",
      "Community support"
    ],
    buttonText: "Get Started",
    isPopular: false
  },
  {
    id: "standard",
    name: "Standard Plan",
    icon: Sparkles,
    description: "For growing businesses",
    price: "$20",
    period: "/month",
    features: [
      "All Free features",
      "Up to 10 projects",
      "Priority email support",
      "Advanced analytics"
    ],
    buttonText: "Subscribe Now",
    isPopular: true
  },
  {
    id: "pro",
    name: "Pro Plan",
    icon: Shield,
    description: "Best value for professionals",
    price: "$100",
    period: "/year",
    features: [
      "All Standard features",
      "Unlimited projects",
      "24/7 phone & email support",
      "Custom integrations",
      "Save 58% compared to monthly"
    ],
    buttonText: "Subscribe Now",
    isPopular: false
  }
];
