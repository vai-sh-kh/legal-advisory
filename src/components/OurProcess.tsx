"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  Building2,
  DollarSign,
  Gavel,
  Lightbulb,
  Home,
  UsersRound,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

export default function OurProcess() {
  useEffect(() => {
    // Check local storage or system preference for dark mode
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const services = [
    {
      number: 1,
      icon: Building2,
      title: "Company Law",
      description:
        "Expert guidance on corporate governance, mergers, acquisitions, and compliance strategies for businesses of all scales.",
      href: null,
    },
    {
      number: 2,
      icon: DollarSign,
      title: "Tax Law",
      description:
        "Strategic tax planning and litigation services to optimize your financial position and ensure regulatory adherence.",
      href: null,
    },
    {
      number: 3,
      icon: Gavel,
      title: "Civil Litigation",
      description:
        "Robust representation in civil disputes, ensuring your rights are protected through every stage of the legal process.",
      href: "/services/litigation",
    },
    {
      number: 4,
      icon: Lightbulb,
      title: "Intellectual Property",
      description:
        "Securing your innovations and creative works through comprehensive trademark, patent, and copyright protections.",
      href: "/services/intellectual-property",
    },
    {
      number: 5,
      icon: Home,
      title: "Real Estate Law",
      description:
        "Navigating complex property transactions, zoning laws, and commercial leasing with precision and foresight.",
      href: null,
    },
    {
      number: 6,
      icon: UsersRound,
      title: "Family Law",
      description:
        "Empathetic and professional counsel for matrimonial matters, child custody, and estate planning for your family's future.",
      href: "/services/family-law",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F3EF] dark:bg-[#0A0A0A] text-gray-900 dark:text-gray-100 font-sans antialiased transition-colors duration-300">
      <Header />

      <header className="px-6 md:px-12 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-tight text-gray-900 dark:text-[#D4C5A9] max-w-5xl">
            Comprehensive Legal Services Designed for Your Success
          </h1>
        </div>
      </header>

      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {services.map((service, index) => {
            const ServiceCard = (
              <div
                className={`relative flex gap-8 group ${
                  index === services.length - 1 ? "last-card" : ""
                }`}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-[#1A1A1A] border border-gray-300 dark:border-gray-700 flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-400 z-10 relative">
                    {service.number}
                  </div>
                  {index < services.length - 1 && (
                    <div className="absolute left-5 top-10 bottom-[-2.5rem] w-px bg-gray-300 dark:bg-gray-700 z-0"></div>
                  )}
                </div>
                <div className="bg-white dark:bg-[#1A1A1A] p-10 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-[#D4C5A9]/50 transition-all duration-500 w-full group-hover:shadow-2xl dark:group-hover:shadow-[#D4C5A9]/5">
                  <div className="mb-8">
                    <div className="w-12 h-12 rounded-lg border border-[#D4C5A9]/30 flex items-center justify-center text-[#D4C5A9]">
                      <service.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-[#F5F5F0] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-[#9CA3AF] text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );

            return service.href ? (
              <Link key={service.number} href={service.href}>
                {ServiceCard}
              </Link>
            ) : (
              <div key={service.number}>{ServiceCard}</div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
