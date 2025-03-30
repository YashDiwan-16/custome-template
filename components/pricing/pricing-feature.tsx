import { Check } from "lucide-react";

interface PricingFeatureProps {
  feature: string;
}

export function PricingFeature({ feature }: PricingFeatureProps) {
  return (
    <li className="flex items-center">
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3">
        <Check className="h-3 w-3 text-gray-700 dark:text-gray-300" />
      </div>
      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
    </li>
  );
}
