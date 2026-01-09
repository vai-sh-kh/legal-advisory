"use client";

import { useEffect } from "react";
import { ArrowUpRight, Building2, UsersRound, Gavel, Lightbulb, Handshake } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

export default function Services() {
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
      title: "Corporate Law",
      description:
        "Expert legal counsel to help your business navigate complex regulations, mergers, and acquisitions with confidence and precision.",
    },
    {
      number: 2,
      icon: UsersRound,
      title: "Family Law",
      description:
        "Compassionate support and strong representation for divorce, custody disputes, and other sensitive family matters tailored to your needs.",
    },
    {
      number: 3,
      icon: Gavel,
      title: "Criminal Defense",
      description:
        "Aggressive defense strategies to protect your rights and future. We handle misdemeanors to serious felonies with utmost dedication.",
    },
    {
      number: 4,
      icon: Lightbulb,
      title: "Intellectual Property",
      description:
        "Safeguarding your innovations and creative works through comprehensive trademark, copyright, and patent protection services.",
    },
    {
      number: 5,
      icon: Handshake,
      title: "Dispute Resolution",
      description:
        "Efficient and effective conflict resolution through mediation, arbitration, and negotiation to avoid lengthy court battles.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F3EF] dark:bg-[#0A0A0A] text-gray-900 dark:text-gray-100 font-sans antialiased transition-colors duration-300">
      <Header />

      <section className="py-20 lg:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
          <div className="flex flex-col justify-center h-full lg:sticky lg:top-32 self-start space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight leading-[1.1] text-gray-900 dark:text-[#D4C5A9]">
              Comprehensive Legal Services Designed for Your Success
            </h2>
            <p className="text-lg text-gray-600 dark:text-[#A3A3A3] leading-relaxed max-w-md">
              We offer a wide range of specialized legal services tailored to
              meet the unique needs of individuals and businesses. Our team is
              dedicated to providing strategic counsel and effective
              representation.
            </p>
            <div className="pt-4">
              <a
                href="#"
                className="inline-flex items-center group"
              >
                <span className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white transition-colors duration-300 group-hover:bg-[#D4C5A9] group-hover:border-[#D4C5A9] group-hover:text-[#0A0A0A]">
                  See All Services
                </span>
                <span className="ml-4 w-12 h-12 flex items-center justify-center rounded-full bg-[#D4C5A9] text-[#0A0A0A] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </a>
            </div>
          </div>
          <div className="relative pl-8 md:pl-12 border-l border-gray-200 dark:border-gray-800 space-y-12">
            {services.map((service, index) => (
              <div key={service.number} className="relative group">
                <div className="absolute -left-[3.25rem] md:-left-[4.25rem] top-0 flex flex-col items-center h-full">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1A1A1A] flex items-center justify-center text-sm font-medium text-gray-600 dark:text-[#A3A3A3] z-10 group-hover:border-[#D4C5A9] group-hover:text-[#D4C5A9] transition-colors duration-300">
                    {service.number}
                  </div>
                  {index < services.length - 1 && (
                    <div className="w-px h-full bg-gray-200 dark:bg-gray-800 -mt-2"></div>
                  )}
                </div>
                <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 p-8 rounded-2xl transition-all duration-300 hover:border-[#D4C5A9]/50 hover:shadow-lg dark:hover:shadow-[#D4C5A9]/5">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-lg border border-[#D4C5A9]/30 flex items-center justify-center text-[#D4C5A9]">
                      <service.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-medium mb-3 text-[#D4C5A9]">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-[#A3A3A3] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

