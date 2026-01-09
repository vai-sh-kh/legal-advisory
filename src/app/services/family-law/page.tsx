"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Play, ArrowRight, Users, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FamilyLawPage() {
  useEffect(() => {
    // Set dark mode by default for service pages
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans antialiased">
      <Header />

      <header className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight text-[#D4C5A9] leading-[1.1]">
              Family Law
            </h1>
          </div>
          <div className="max-w-md ml-auto">
            <p className="text-lg text-[#A3A3A3] leading-relaxed">
              Navigating sensitive family transitions with precision, empathy,
              and unwavering dedication to your future and the well-being of
              your loved ones.
            </p>
            <div className="mt-8">
              <a className="inline-flex items-center group" href="#">
                <span className="px-8 py-3 rounded-full border border-[#D4C5A9] text-[#D4C5A9] transition-colors duration-300 group-hover:bg-[#D4C5A9] group-hover:text-[#000000]">
                  Explore More
                </span>
                <span className="ml-4 w-12 h-12 flex items-center justify-center rounded-full bg-[#D4C5A9] text-[#000000] transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight className="w-5 h-5 rotate-[-45deg]" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative rounded-3xl overflow-hidden aspect-video group cursor-pointer">
          <Image
            alt="Private Consultation Room"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtrB5lqo5DMx-16hSWmzj9QKJ4RJ8bZJSeTL01HgVs1RohP7Aztr7gm43VX1ywwFIIIOcuEeQnQP1eJTWcbXxXMSzLD60vo-TYQKtvkdxJlR2WDNzUP474b3tdUt_XaLdQUPt3WxB9zNi1pLWp66yqZ6REKUJ4frr-y5AB586g2s-kfov6wXEV8xUBLBgLULt5xxpfw5JgmGVI0e6rbQEOQZd1UT37Pyh_LeHtAWph1F-HnCCZxLWPG8_L6F_1roHPBySpYAYn__8f"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full animate-pulse"></div>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center z-10">
                <Play className="w-10 h-10 text-[#000000] ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-20">
            <section>
              <h2 className="text-3xl font-medium mb-8 text-[#D4C5A9]">
                Comprehensive Support for Family Matters
              </h2>
              <div className="prose prose-invert max-w-none text-[#A3A3A3] space-y-6">
                <p className="text-xl leading-relaxed">
                  At NexaLaw, we understand that family legal issues are among
                  the most challenging experiences life can present. Our approach
                  combines strategic legal excellence with the sensitivity
                  required for domestic matters.
                </p>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-[#121212] border border-[#262626] flex items-center justify-center text-[#D4C5A9]">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-medium">Divorce & Separation</h3>
                <p className="text-[#A3A3A3] leading-relaxed">
                  Strategic navigation of complex asset division, spousal
                  support, and legal dissolution while protecting your interests
                  and dignity.
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-[#121212] border border-[#262626] flex items-center justify-center text-[#D4C5A9]">
                  <AlertTriangle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-medium">Child Custody</h3>
                <p className="text-[#A3A3A3] leading-relaxed">
                  Advocating for the best interests of your children with
                  tailored parenting plans and robust representation in
                  visitation disputes.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden">
              <div className="relative w-full h-80 rounded-3xl overflow-hidden">
                <Image
                  alt="Legal Consultation"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSXA0BzzFwkMxOpiR1yx9f-9IHKd1TZurxVXdwprQsVv31XQHryYqO5X3P7loK1ZJViUT07XwdrKY4sRvaMTiJThZDUE5cJjdQBdtTQNBgo2mJn2hNeJ6M7imfbPA1N48DE3QToaVMd2bNyBGehNjdDF0qxcR7In-TP3EovZ3EQulsjaG_bgaVZwqHrJZsk6eKGWHh6Z2cGaO8ntfLJaZ7I7yoJxgEtT3R7cecmUWYONehfuk4nNzWZx1Kx3ERYn9WDMrEfBtaD3tz"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <section className="space-y-12">
              <div className="border-t border-[#262626] pt-12">
                <h3 className="text-2xl font-medium mb-4">Financial Settlements</h3>
                <p className="text-[#A3A3A3] leading-relaxed">
                  Ensuring fair distribution of marital property, business
                  interests, and retirement accounts through meticulous
                  financial analysis.
                </p>
              </div>
              <div className="border-t border-[#262626] pt-12">
                <h3 className="text-2xl font-medium mb-4">Prenuptial Agreements</h3>
                <p className="text-[#A3A3A3] leading-relaxed">
                  Crafting forward-thinking agreements that provide security and
                  clarity for both parties entering a new chapter of life.
                </p>
              </div>
            </section>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-12 bg-[#121212] border border-[#262626] p-8 rounded-3xl">
              <h3 className="text-2xl font-medium mb-2">Schedule a Consultation</h3>
              <p className="text-[#A3A3A3] text-sm mb-8">
                Discuss your case privately with our expert partners.
              </p>
              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#A3A3A3] mb-2">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-[#000000] border border-[#262626] rounded-xl px-4 py-3 text-white focus:ring-[#D4C5A9] focus:border-[#D4C5A9]"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#A3A3A3] mb-2">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-[#000000] border border-[#262626] rounded-xl px-4 py-3 text-white focus:ring-[#D4C5A9] focus:border-[#D4C5A9]"
                    type="email"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#A3A3A3] mb-2">
                    Service Type
                  </label>
                  <select className="w-full bg-[#000000] border border-[#262626] rounded-xl px-4 py-3 text-white focus:ring-[#D4C5A9] focus:border-[#D4C5A9]">
                    <option>Divorce</option>
                    <option>Custody</option>
                    <option>Settlements</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#A3A3A3] mb-2">
                    Brief Message
                  </label>
                  <textarea
                    className="w-full bg-[#000000] border border-[#262626] rounded-xl px-4 py-3 text-white focus:ring-[#D4C5A9] focus:border-[#D4C5A9]"
                    rows={4}
                  />
                </div>
                <button className="w-full bg-[#D4C5A9] text-[#000000] font-bold py-4 rounded-full hover:bg-[#C9B69C] transition-colors flex items-center justify-center gap-2">
                  Send Request{" "}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

