// app/not-found.tsx
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  function handleGoBack() {
    router.back();
  }

  function handleGoHome() {
    router.push("/");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground p-4">
      <div className=" max-w-3xl mx-auto text-center">
        <div className="opacity-0 animate-[fadeIn_0.5s_ease_forwards]">
          <div className="relative w-full h-48 sm:h-64 md:h-80 mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-9xl sm:text-[12rem] md:text-[16rem] font-extrabold text-muted-foreground/20">
                404
              </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  className="stroke-primary"
                  strokeWidth="1.5"
                />
                <path
                  d="M8 8L16 16M16 8L8 16"
                  className="stroke-primary"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M12 18C12 18 12 18 12 18"
                  className="stroke-primary"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  className="stroke-muted-foreground/50 fill-none"
                  strokeWidth="1"
                  strokeDasharray="1 3"
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                />
                <path
                  className="fill-primary-foreground stroke-none"
                  d="M8.5 4.5C7 6 7 7.5 7.5 9C8 7.5 9 6.5 11 6C9.5 7 9 8 9.5 9.5C10 8.5 11 7.5 13.5 7.5C12 9 11.5 10.5 12.5 12.5C13 11 14.5 10 16.5 10C15 11 14.5 12 15 13.5"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Oops! Page Not Found
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
            The page you&apos;re looking for seems to have wandered off. Perhaps it&apos;s
            exploring the digital wilderness or taking a well-deserved break.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={handleGoBack}
              variant="outline"
              className="w-full sm:w-auto"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
            <Button
              onClick={handleGoHome}
              className="w-full sm:w-auto"
            >
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
