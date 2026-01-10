"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LitigationPage() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  const fadeInUpStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  // Refs for scroll-triggered animations
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const sidebarRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.2 });
  const contentInView = useInView(contentRef, { once: true, amount: 0.2 });
  const sidebarInView = useInView(sidebarRef, { once: true, amount: 0.2 });

  return (
    <div className="min-h-screen bg-[#F5F3EF] dark:bg-[#0A0A0A] text-gray-900 dark:text-white font-sans antialiased transition-colors duration-300">
      <Header />

      <header ref={headerRef} className="px-6 md:px-12 lg:px-24 pt-20 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] text-gray-900 dark:text-[#D4C5A9]">
              Litigation & Dispute Resolution
            </h1>
          </motion.div>
          <motion.div
            className="max-w-md ml-auto"
            variants={fadeInUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            <p className="text-lg text-gray-600 dark:text-[#A3A3A3] leading-relaxed">
              Protecting your interests through strategic advocacy and precise
              legal execution. From complex commercial disputes to private
              mediation, we deliver results when they matter most.
            </p>
          </motion.div>
        </div>
      </header>

      <motion.section
        className="px-6 md:px-12 lg:px-24 mb-24"
        variants={fadeInUp}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto relative group overflow-hidden rounded-3xl aspect-[21/9] bg-[#141414] flex items-center justify-center border border-[#262626]">
          <Image
            alt="Legal Boardroom"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD17pJw-LgS_k16ucusYqjhWDa2_3uvfRP1ZjcWwcfx8RrcyDVv81wuCoPxG63sNjrV2QqDklOZm3tsPFaSp0vmSKRjvrbT_n2Zy7CYCCG46e8ptxdmJrWvfM9v5QHLPKEkrHYf4pKHoi60Inhgx4-hca01Ect9jblgANVsKPQwc27tb10AbW2HG7JNLMlZSh6CPs6tX3XRR5c1lbBIP8JNy21YhEqhxk3lHcfo5LZY30NuTKZJZ8XDpMhLHgHJkvfEf3h7jUfKiXXz"
            fill
            className="object-cover opacity-60"
          />
          <button className="relative z-10 w-24 h-24 rounded-full bg-[#D4C5A9] flex items-center justify-center text-black transition-transform duration-500 group-hover:scale-110">
            <Play className="w-10 h-10 ml-1 fill-current" />
          </button>
          <div className="absolute bottom-8 left-8 text-sm font-medium tracking-widest uppercase text-[#D4C5A9]/80">
            Inside NexaLaw Advocacy
          </div>
        </div>
      </motion.section>

      <main ref={contentRef} className="px-6 md:px-12 lg:px-24 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <motion.div
            className="lg:col-span-7 space-y-24"
            variants={fadeInUpStagger}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
          >
            <motion.section variants={cardVariants}>
              <div className="flex items-center gap-4 mb-8 text-[#D4C5A9]/60">
                <span className="text-sm font-bold tracking-widest uppercase">
                  01
                </span>
                <div className="h-px w-12 bg-[#D4C5A9]/20"></div>
              </div>
              <h2 className="text-3xl font-medium mb-6 text-gray-900 dark:text-[#D4C5A9]">
                Civil Litigation
              </h2>
              <p className="text-gray-600 dark:text-[#A3A3A3] text-lg leading-relaxed mb-8">
                Our litigation team handles a broad range of civil disputes in
                state and federal courts. We represent corporations and
                individuals in matters involving breach of contract, business
                torts, partnership disputes, and complex commercial issues. We
                combine aggressive courtroom strategy with a focus on your
                long-term business objectives.
              </p>
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                <Image
                  alt="Courtroom"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgAMcXpFEcXATXs3h0Vvyn3wLQ5OfiWMgoo_doUXZVPf29ZsBe5aLXKVZVrrhObnNk7fWk01Nnq2BsmPwejSd3PDVOafsPCov32zrYjzt-bGmyhR4yjLt2lDZ-O1u03yV1crOkPlmDoU7SMA2wEDKuf8m1EHII3t2t_xbQ_75yYasH3l-VOg6jucbnPx5n-w8X-oH5DdSpTsmDfKErWO20CiQQhfnvPFHBU8lE7iXUM9wKQecSsOERXwl6gJNEHiOw_DXDtxSSuvVx"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.section>

            <motion.section variants={cardVariants}>
              <div className="flex items-center gap-4 mb-8 text-[#D4C5A9]/60">
                <span className="text-sm font-bold tracking-widest uppercase">
                  02
                </span>
                <div className="h-px w-12 bg-[#D4C5A9]/20"></div>
              </div>
              <h2 className="text-3xl font-medium mb-6 text-gray-900 dark:text-[#D4C5A9]">
                Mediation & Arbitration
              </h2>
              <p className="text-gray-600 dark:text-[#A3A3A3] text-lg leading-relaxed mb-8">
                Alternative Dispute Resolution (ADR) provides a confidential,
                efficient path to settlement without the public nature of a
                courtroom trial. Our certified mediators and seasoned
                arbitration counsel help clients reach favorable resolutions
                while preserving business relationships and minimizing legal
                costs.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-[#262626]">
                  <Image
                    alt="Legal Negotiation"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4eECi58ggFWyc2OWPEKJZOh5-O-UYS-IKMnr72s8nXRPg99noUxg3mKHDBvEr9V74xOJmBGP3u23-hpqNbVz76-vYLGrMCR7OxSziDvzHkeDttATamOiT3cZPVL-SGKC2VcVCHDH2oUkfXW5f29WQnOY5CJrSfKYAB-7hUFoYCBMkef9GJqHubUCw1dosc1yCQFtBGOspWtrfG1nKYu1tF1hpVBZzSeajtOSgu5stZPUr67TOVyyRunuGAkI1WK3lATIKubXz0886"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-[#262626]">
                  <Image
                    alt="Professional Consultation"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGrVokZd9O4YFDIWSn2ylErlwxfAklsOgWUFFfEHPlj4n3KRK3WJ9yk9kw0to2YvVa7rccp_ANDtq5_BsXy9n8pS69g32shoNyj8cGthoglYRdGuxZNktRnxa6rSX6hHil_Sa-zbNTq5ZMP-cYXMha7rJlyfXqnOWfB1x1Ww4ynHBRz3OonJlEh_dreBYcmEyctGvz-NXaupnShv3bgyw1MjYZtnXlB5EjvHZ_uIwsheZmJdBd7Xn1CeLwjLD9rlpOBsQ2NZhcPwNG"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.section>

            <motion.section variants={cardVariants}>
              <div className="flex items-center gap-4 mb-8 text-[#D4C5A9]/60">
                <span className="text-sm font-bold tracking-widest uppercase">
                  03
                </span>
                <div className="h-px w-12 bg-[#D4C5A9]/20"></div>
              </div>
              <h2 className="text-3xl font-medium mb-6 text-gray-900 dark:text-[#D4C5A9]">
                Strategic Negotiation
              </h2>
              <p className="text-gray-600 dark:text-[#A3A3A3] text-lg leading-relaxed">
                Many disputes are won before they ever reach a judge. We excel
                in pre-litigation negotiation, utilizing detailed case analysis
                and leverage to secure settlements that align with our clients'
                needs. Our reputation for trial readiness gives us a unique
                advantage at the bargaining table.
              </p>
            </motion.section>
          </motion.div>

          <motion.aside
            ref={sidebarRef}
            className="lg:col-span-5 relative"
            variants={fadeInUp}
            initial="hidden"
            animate={sidebarInView ? "visible" : "hidden"}
          >
            <div className="lg:sticky lg:top-12 bg-[#141414] border border-[#262626] p-8 md:p-10 rounded-[2rem]">
              <h3 className="text-2xl font-medium mb-2 text-[#D4C5A9]">
                Schedule a Consultation
              </h3>
              <p className="text-[#A3A3A3] mb-8">
                Discuss your litigation needs with our senior partners.
              </p>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-[#D4C5A9]/60 mb-2 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-[#262626] rounded-xl focus:ring-[#D4C5A9] focus:border-[#D4C5A9] text-gray-900 dark:text-white py-3 px-4"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-[#D4C5A9]/60 mb-2 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-[#262626] rounded-xl focus:ring-[#D4C5A9] focus:border-[#D4C5A9] text-gray-900 dark:text-white py-3 px-4"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-[#D4C5A9]/60 mb-2 uppercase tracking-wider">
                    Legal Matter
                  </label>
                  <select className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-[#262626] rounded-xl focus:ring-[#D4C5A9] focus:border-[#D4C5A9] text-gray-900 dark:text-white py-3 px-4">
                    <option>Commercial Litigation</option>
                    <option>Contract Dispute</option>
                    <option>Mediation/Arbitration</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-[#D4C5A9]/60 mb-2 uppercase tracking-wider">
                    Brief Overview
                  </label>
                  <textarea
                    className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-[#262626] rounded-xl focus:ring-[#D4C5A9] focus:border-[#D4C5A9] text-gray-900 dark:text-white py-3 px-4"
                    placeholder="Tell us about your case..."
                    rows={4}
                  />
                </div>
                <button
                  className="w-full py-4 rounded-full bg-[#D4C5A9] text-black font-semibold hover:bg-white transition-colors flex items-center justify-center gap-2 group"
                  type="submit"
                >
                  Request Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
