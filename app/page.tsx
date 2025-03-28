// app/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import HeroIllustration from "@/components/home/hero-illustration";
import FeatureCard from "@/components/home/feature-card";
// import NewsletterForm from "@/components/home/newsletter-form";

export default function HomePage() {
  // Feature card data
  const features = [
    {
      title: "Scalable Infrastructure",
      description: "Built to grow with your business, from startup to enterprise scale.",
      icon: "Layers"
    },
    {
      title: "Secure by Design",
      description: "Industry-leading security practices and compliance built into every layer.",
      icon: "Shield"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time insights and data visualization to make informed decisions.",
      icon: "BarChart"
    },
    {
      title: "Seamless Integration",
      description: "Connect with your existing tools and workflows without friction.",
      icon: "Link"
    },
    {
      title: "24/7 Support",
      description: "Our dedicated team is always available to help when you need it.",
      icon: "HeadsetHelp"
    },
    {
      title: "Mobile Optimized",
      description: "Perfect experience across all devices with responsive design.",
      icon: "Smartphone"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Modern solutions for your digital needs
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Transform your business with our innovative platform built for scale, security, and performance.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/get-started">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/learn-more">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              {/* <HeroIllustration className="max-w-full h-auto" /> */}
              <HeroIllustration className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Key Features</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Our platform provides everything you need to succeed in today's digital landscape.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

