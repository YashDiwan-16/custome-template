import { Badge } from "@/components/ui/badge";

export function PricingHeader() {
  return (
    <div className="text-center mb-16">
      <Badge className="mb-4 px-3 py-1 bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-200 border-0 rounded-full text-sm font-medium">
        PRICING PLANS
      </Badge>
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
        Choose Your Perfect Plan
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Unlock premium features with our flexible pricing options
      </p>
    </div>
  );
}
