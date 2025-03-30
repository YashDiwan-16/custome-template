"use client"

import { PricingHeader } from "@/components/pricing/pricing-plans";
import { PricingCard } from "@/components/pricing/pricing-card";
import { PricingFooter } from "@/components/pricing/pricing-footer";
import { pricingPlans } from "@/data/pricing-plans";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <PricingHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => (
            <PricingCard 
              key={plan.id}
              {...plan}
            />
          ))}
        </div>
        
        <PricingFooter />
      </div>
    </div>
  );
}

