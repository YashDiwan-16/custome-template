import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PricingFeature } from "./pricing-feature";

interface PricingCardProps {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  isPopular: boolean;
}

export function PricingCard({
  id,
  name,
  icon: Icon,
  description,
  price,
  period,
  features,
  buttonText,
  isPopular
}: PricingCardProps) {
  return (
    <Card 
      className={`
        flex flex-col bg-white dark:bg-black 
        border border-gray-200 dark:border-gray-800 
        rounded-xl overflow-hidden
        shadow-[0_8px_30px_rgb(0,0,0,0.08)]
        hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
        dark:shadow-[0_8px_30px_rgb(255,255,255,0.04)]
        dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.06)]
        transition-all duration-300
        hover:-translate-y-1 hover:rotate-[0.5deg]
        relative
        ${isPopular ? 'relative z-10' : ''}
        before:absolute before:inset-0 before:rounded-xl 
        before:bg-gradient-to-br before:from-white/10 before:to-transparent 
        before:opacity-60 before:content-[''] before:pointer-events-none
        dark:before:from-gray-800/20 dark:before:to-transparent
      `}
    >
      {isPopular && (
        <div className="-top-3 left-0 right-0 flex justify-center z-10">
          <Badge className="px-3 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-0 rounded-full text-sm font-medium shadow-lg">
            MOST POPULAR
          </Badge>
        </div>
      )}
      <CardHeader className="pt-8 pb-4 z-10">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl flex items-center justify-center shadow-inner">
            <Icon className="w-8 h-8 text-gray-700 dark:text-gray-300" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          {name}
        </CardTitle>
        <CardDescription className="text-center text-gray-600 dark:text-gray-400 text-base mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 flex-grow z-10">
        <div className="text-center mb-6">
          <span className="text-5xl font-bold text-gray-900 dark:text-white">{price}</span>
          <span className="text-lg text-gray-600 dark:text-gray-400 ml-2">{period}</span>
        </div>
        <ul className="space-y-4 mb-6">
          {features.map((feature, index) => (
            <PricingFeature key={index} feature={feature} />
          ))}
        </ul>
      </CardContent>
      <CardFooter className="px-6 pb-8 mt-auto z-10">
        <Button className="w-full py-6 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 dark:from-gray-700 dark:to-gray-800 dark:hover:from-gray-600 dark:hover:to-gray-700 text-white text-base font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
