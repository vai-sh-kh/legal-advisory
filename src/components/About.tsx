"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  UsersRound,
  Gavel,
  Lightbulb,
  Handshake,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

export default function About() {
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

  return (
    <div className="min-h-screen bg-[#F5F3EF] dark:bg-[#0A0A0A] text-[#333333] dark:text-[#e5e5e5] font-[var(--font-manrope)] antialiased transition-colors duration-300">
      <Header />

      {/* Who We Are Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative group">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#1a1a1a] w-full"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBfTJnsctgv-n9br_tS72RRyDZ-tAmaE8s3ayb6gJpLdtW9EAOGqQ9sHuR9SSD7BeH8y-X3cDHFOptvYuEjDVkBCp-rhpvkfhHtso1s65mppzJqlL1cXU-b7ygzXFKv0WfZ3Eohk6bwWgXOw7km2Uudp6-QTyaJxDV329INoaUZMiXPSwLW3Uc8IdFFsmUrGuiNDpPuAe5_j2V6Cte8L7Yq7n-ervd9kFdw25THVLNhptLMjnwlP83a9ML-r-gYzWdMoQJW2bRsiL4"
                  alt="Professional attorney sitting at a desk with legal books and scales of justice"
                  fill
                  className="object-cover transform transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="hidden lg:block absolute -z-10 -bottom-6 -left-6 w-full h-full border border-[#d6c3a5]/20 rounded-2xl dark:border-[#d6c3a5]/10"></div>
            </div>
            <div className="flex flex-col justify-center space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 dark:text-white">
                Who We Are at{" "}
                <span className="text-[#d6c3a5] font-medium">NexaLaw</span>
              </h2>
              <div className="space-y-6 text-lg text-[#666666] dark:text-[#a3a3a3] leading-relaxed font-light">
                <p>
                  At NexaLaw, we bring unparalleled expertise, innovation, and
                  dedication to every legal challenge. Our team of seasoned
                  attorneys is committed to delivering justice and crafting
                  strategic solutions tailored to your unique needs.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 border-l-0 md:border-l-0 py-4">
                <div className="flex flex-col pr-4 border-r border-gray-300 dark:border-gray-800">
                  <span className="text-4xl md:text-5xl font-medium text-[#d6c3a5]">
                    20+
                  </span>
                  <span className="text-sm md:text-base mt-2 text-[#666666] dark:text-[#a3a3a3] leading-tight">
                    Years of
                    <br />
                    Experience
                  </span>
                </div>
                <div className="flex flex-col px-4 border-r border-gray-300 dark:border-gray-800">
                  <span className="text-4xl md:text-5xl font-medium text-[#d6c3a5]">
                    24K+
                  </span>
                  <span className="text-sm md:text-base mt-2 text-[#666666] dark:text-[#a3a3a3] leading-tight">
                    Award-Winning
                    <br />
                    Attorneys
                  </span>
                </div>
                <div className="flex flex-col pl-4">
                  <span className="text-4xl md:text-5xl font-medium text-[#d6c3a5]">
                    30K+
                  </span>
                  <span className="text-sm md:text-base mt-2 text-[#666666] dark:text-[#a3a3a3] leading-tight">
                    Comprehensive
                    <br />
                    Legal Solutions
                  </span>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href="#"
                  className="inline-flex items-center gap-4 group"
                >
                  <span className="px-8 py-3 rounded-full border border-gray-400 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-[#1a1a1a] hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
                    About us
                  </span>
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#d6c3a5] text-[#0d0d0d] group-hover:bg-[#d6c3a5]/90 transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="py-20 lg:py-32 px-6 md:px-12 lg:px-24 bg-[#F5F3EF] dark:bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
            {/* Left Column - Sticky */}
            <div className="flex flex-col justify-start h-full lg:sticky lg:top-32 self-start space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-[#1A1A1A] dark:text-[#F5F5F5]">
                Comprehensive Legal Services Designed for Your Success
              </h2>
              <p className="text-lg text-[#555555] dark:text-[#A3A3A3] leading-relaxed max-w-md">
                We offer a wide range of specialized legal services tailored to
                meet the unique needs of individuals and businesses. Our team is
                dedicated to providing strategic counsel and effective
                representation.
              </p>
              <div className="pt-4">
                <Link
                  href="/services"
                  className="inline-flex items-center group"
                >
                  <span className="px-8 py-3 rounded-full border border-current text-[#1A1A1A] dark:text-white transition-colors duration-300 group-hover:bg-[#E3D5C0] group-hover:border-[#E3D5C0] group-hover:text-[#0D0D0D]">
                    See All Services
                  </span>
                  <span className="ml-4 w-12 h-12 flex items-center justify-center rounded-full bg-[#E3D5C0] text-[#0D0D0D] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Column - Services Timeline */}
            <div className="relative pl-8 md:pl-12 border-l border-[#E5E5E5] dark:border-[#333333] space-y-12">
              {/* Service 1 - Corporate Law */}
              <div className="relative group">
                <div className="absolute -left-[3.25rem] md:-left-[4.25rem] top-0 flex flex-col items-center h-full">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#E5E5E5] dark:border-[#333333] bg-[#F5F3EF] dark:bg-[#1A1A1A] flex items-center justify-center text-sm font-medium text-[#555555] dark:text-[#A3A3A3] z-10 group-hover:border-[#E3D5C0] group-hover:text-[#E3D5C0] transition-colors duration-300">
                    1
                  </div>
                  <div className="w-px h-full bg-[#E5E5E5] dark:bg-[#333333] -mt-2"></div>
                </div>
                <div className="bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333333] p-8 rounded-2xl transition-all duration-300 hover:border-[#E3D5C0]/50 hover:shadow-lg dark:hover:shadow-[#E3D5C0]/5">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-lg border border-[#E3D5C0]/30 flex items-center justify-center text-[#E3D5C0]">
                      <Briefcase className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-medium mb-3 text-[#E3D5C0]">
                    Corporate Law
                  </h3>
                  <p className="text-[#555555] dark:text-[#A3A3A3] leading-relaxed">
                    Expert legal counsel to help your business navigate complex
                    regulations, mergers, and acquisitions with confidence and
                    precision.
                  </p>
                </div>
              </div>

              {/* Service 2 - Family Law */}
              <div className="relative group">
                <div className="absolute -left-[3.25rem] md:-left-[4.25rem] top-0 flex flex-col items-center h-full">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#E5E5E5] dark:border-[#333333] bg-[#F5F3EF] dark:bg-[#1A1A1A] flex items-center justify-center text-sm font-medium text-[#555555] dark:text-[#A3A3A3] z-10 group-hover:border-[#E3D5C0] group-hover:text-[#E3D5C0] transition-colors duration-300">
                    2
                  </div>
                  <div className="w-px h-full bg-[#E5E5E5] dark:bg-[#333333] -mt-2"></div>
                </div>
                <div className="bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333333] p-8 rounded-2xl transition-all duration-300 hover:border-[#E3D5C0]/50 hover:shadow-lg dark:hover:shadow-[#E3D5C0]/5">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-lg border border-[#E3D5C0]/30 flex items-center justify-center text-[#E3D5C0]">
                      <UsersRound className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-medium mb-3 text-[#E3D5C0]">
                    Family Law
                  </h3>
                  <p className="text-[#555555] dark:text-[#A3A3A3] leading-relaxed">
                    Compassionate support and strong representation for divorce,
                    custody disputes, and other sensitive family matters tailored
                    to your needs.
                  </p>
                </div>
              </div>

              {/* Service 3 - Criminal Defense */}
              <div className="relative group">
                <div className="absolute -left-[3.25rem] md:-left-[4.25rem] top-0 flex flex-col items-center h-full">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#E5E5E5] dark:border-[#333333] bg-[#F5F3EF] dark:bg-[#1A1A1A] flex items-center justify-center text-sm font-medium text-[#555555] dark:text-[#A3A3A3] z-10 group-hover:border-[#E3D5C0] group-hover:text-[#E3D5C0] transition-colors duration-300">
                    3
                  </div>
                  <div className="w-px h-full bg-[#E5E5E5] dark:bg-[#333333] -mt-2"></div>
                </div>
                <div className="bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333333] p-8 rounded-2xl transition-all duration-300 hover:border-[#E3D5C0]/50 hover:shadow-lg dark:hover:shadow-[#E3D5C0]/5">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-lg border border-[#E3D5C0]/30 flex items-center justify-center text-[#E3D5C0]">
                      <Gavel className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-medium mb-3 text-[#E3D5C0]">
                    Criminal Defense
                  </h3>
                  <p className="text-[#555555] dark:text-[#A3A3A3] leading-relaxed">
                    Aggressive defense strategies to protect your rights and
                    future. We handle misdemeanors to serious felonies with
                    utmost dedication.
                  </p>
                </div>
              </div>

              {/* Service 4 - Intellectual Property */}
              <div className="relative group">
                <div className="absolute -left-[3.25rem] md:-left-[4.25rem] top-0 flex flex-col items-center h-full">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#E5E5E5] dark:border-[#333333] bg-[#F5F3EF] dark:bg-[#1A1A1A] flex items-center justify-center text-sm font-medium text-[#555555] dark:text-[#A3A3A3] z-10 group-hover:border-[#E3D5C0] group-hover:text-[#E3D5C0] transition-colors duration-300">
                    4
                  </div>
                  <div className="w-px h-full bg-[#E5E5E5] dark:bg-[#333333] -mt-2"></div>
                </div>
                <div className="bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333333] p-8 rounded-2xl transition-all duration-300 hover:border-[#E3D5C0]/50 hover:shadow-lg dark:hover:shadow-[#E3D5C0]/5">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-lg border border-[#E3D5C0]/30 flex items-center justify-center text-[#E3D5C0]">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-medium mb-3 text-[#E3D5C0]">
                    Intellectual Property
                  </h3>
                  <p className="text-[#555555] dark:text-[#A3A3A3] leading-relaxed">
                    Safeguarding your innovations and creative works through
                    comprehensive trademark, copyright, and patent protection
                    services.
                  </p>
                </div>
              </div>

              {/* Service 5 - Dispute Resolution */}
              <div className="relative group">
                <div className="absolute -left-[3.25rem] md:-left-[4.25rem] top-0 flex flex-col items-center h-full">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#E5E5E5] dark:border-[#333333] bg-[#F5F3EF] dark:bg-[#1A1A1A] flex items-center justify-center text-sm font-medium text-[#555555] dark:text-[#A3A3A3] z-10 group-hover:border-[#E3D5C0] group-hover:text-[#E3D5C0] transition-colors duration-300">
                    5
                  </div>
                </div>
                <div className="bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333333] p-8 rounded-2xl transition-all duration-300 hover:border-[#E3D5C0]/50 hover:shadow-lg dark:hover:shadow-[#E3D5C0]/5">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-lg border border-[#E3D5C0]/30 flex items-center justify-center text-[#E3D5C0]">
                      <Handshake className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-medium mb-3 text-[#E3D5C0]">
                    Dispute Resolution
                  </h3>
                  <p className="text-[#555555] dark:text-[#A3A3A3] leading-relaxed">
                    Efficient and effective conflict resolution through
                    mediation, arbitration, and negotiation to avoid lengthy
                    court battles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

