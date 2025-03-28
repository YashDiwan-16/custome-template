// components/feature-card.tsx
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Layers, Shield, BarChart, Link as LinkIcon, 
   Smartphone, LucideIcon 
} from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const IconComponent = getIconComponent(icon);
  
  return (
    <Card className="h-full transition-all hover:shadow-emerald-100 cursor-pointer">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 p-2 rounded-full">
            <IconComponent className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

// Helper function to get the appropriate icon component
function getIconComponent(iconName: string): LucideIcon {
  const iconMap: Record<string, LucideIcon> = {
    Layers,
    Shield,
    BarChart,
    Link: LinkIcon,

    Smartphone,
  };
  
  return iconMap[iconName] || Layers;
}