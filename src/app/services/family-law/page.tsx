"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Play, ArrowRight, Users, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FamilyLawPage() {
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

      <header ref={headerRef} className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight text-gray-900 dark:text-[#D4C5A9] leading-[1.1]">
              Family Law
            </h1>
          </motion.div>
          <motion.div
            className="max-w-md ml-auto"
            variants={fadeInUpStagger}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 dark:text-[#A3A3A3] leading-relaxed"
            >
              Navigating sensitive family transitions with precision, empathy,
              and unwavering dedication to your future and the well-being of
              your loved ones.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8">
              <a className="inline-flex items-center group" href="#">
                <span className="px-8 py-3 rounded-full border border-[#D4C5A9] text-[#D4C5A9] transition-colors duration-300 group-hover:bg-[#D4C5A9] group-hover:text-[#000000]">
                  Explore More
                </span>
                <span className="ml-4 w-12 h-12 flex items-center justify-center rounded-full bg-[#D4C5A9] text-[#000000] transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight className="w-5 h-5 rotate-[-45deg]" />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </header>

      <motion.section
        className="max-w-7xl mx-auto px-6 pb-24"
        variants={fadeInUp}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
      >
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
      </motion.section>

      <main ref={contentRef} className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            className="lg:col-span-8 space-y-20"
            variants={fadeInUpStagger}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
          >
            <motion.section variants={fadeInUp}>
              <h2 className="text-3xl font-medium mb-8 text-gray-900 dark:text-[#D4C5A9]">
                Comprehensive Support for Family Matters
              </h2>
              <div className="prose prose-invert dark:prose-invert max-w-none text-gray-600 dark:text-[#A3A3A3] space-y-6">
                <p className="text-xl leading-relaxed">
                  At NexaLaw, we understand that family legal issues are among
                  the most challenging experiences life can present. Our
                  approach combines strategic legal excellence with the
                  sensitivity required for domestic matters.
                </p>
              </div>
            </motion.section>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
              variants={fadeInUpStagger}
            >
              <motion.div variants={cardVariants} className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-[#121212] border border-gray-200 dark:border-[#262626] flex items-center justify-center text-[#D4C5A9]">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                  Divorce & Separation
                </h3>
                <p className="text-gray-600 dark:text-[#A3A3A3] leading-relaxed">
                  Strategic navigation of complex asset division, spousal
                  support, and legal dissolution while protecting your interests
                  and dignity.
                </p>
              </motion.div>
              <motion.div variants={cardVariants} className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-[#121212] border border-gray-200 dark:border-[#262626] flex items-center justify-center text-[#D4C5A9]">
                  <AlertTriangle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                  Child Custody
                </h3>
                <p className="text-gray-600 dark:text-[#A3A3A3] leading-relaxed">
                  Advocating for the best interests of your children with
                  tailored parenting plans and robust representation in
                  visitation disputes.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="rounded-3xl overflow-hidden"
            >
              <div className="relative w-full h-80 rounded-3xl overflow-hidden">
                <Image
                  alt="Legal Consultation"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSXA0BzzFwkMxOpiR1yx9f-9IHKd1TZurxVXdwprQsVv31XQHryYqO5X3P7loK1ZJViUT07XwdrKY4sRvaMTiJThZDUE5cJjdQBdtTQNBgo2mJn2hNeJ6M7imfbPA1N48DE3QToaVMd2bNyBGehNjdDF0qxcR7In-TP3EovZ3EQulsjaG_bgaVZwqHrJZsk6eKGWHh6Z2cGaO8ntfLJaZ7I7yoJxgEtT3R7cecmUWYONehfuk4nNzWZx1Kx3ERYn9WDMrEfBtaD3tz"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.section variants={fadeInUpStagger} className="space-y-12">
              <motion.div
                variants={cardVariants}
                className="border-t border-gray-200 dark:border-[#262626] pt-12"
              >
                <h3 className="text-2xl font-medium mb-4 text-gray-900 dark:text-white">
                  Financial Settlements
                </h3>
                <p className="text-gray-600 dark:text-[#A3A3A3] leading-relaxed">
                  Ensuring fair distribution of marital property, business
                  interests, and retirement accounts through meticulous
                  financial analysis.
                </p>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="border-t border-gray-200 dark:border-[#262626] pt-12"
              >
                <h3 className="text-2xl font-medium mb-4 text-gray-900 dark:text-white">
                  Prenuptial Agreements
                </h3>
                <p className="text-gray-600 dark:text-[#A3A3A3] leading-relaxed">
                  Crafting forward-thinking agreements that provide security and
                  clarity for both parties entering a new chapter of life.
                </p>
              </motion.div>
            </motion.section>
          </motion.div>

          <motion.div
            ref={sidebarRef}
            className="lg:col-span-4"
            variants={fadeInUp}
            initial="hidden"
            animate={sidebarInView ? "visible" : "hidden"}
          >
            <div className="sticky top-12 bg-white dark:bg-[#121212] border border-gray-200 dark:border-[#262626] p-8 rounded-3xl">
              <h3 className="text-2xl font-medium mb-2 text-gray-900 dark:text-white">
                Schedule a Consultation
              </h3>
              <p className="text-gray-600 dark:text-[#A3A3A3] text-sm mb-8">
                Discuss your case privately with our expert partners.
              </p>
              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-gray-600 dark:text-[#A3A3A3] mb-2">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-gray-50 dark:bg-[#000000] border border-gray-200 dark:border-[#262626] rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-[#D4C5A9] focus:border-[#D4C5A9]"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-gray-600 dark:text-[#A3A3A3] mb-2">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-gray-50 dark:bg-[#000000] border border-gray-200 dark:border-[#262626] rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-[#D4C5A9] focus:border-[#D4C5A9]"
                    type="email"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-gray-600 dark:text-[#A3A3A3] mb-2">
                    Service Type
                  </label>
                  <select className="w-full bg-gray-50 dark:bg-[#000000] border border-gray-200 dark:border-[#262626] rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-[#D4C5A9] focus:border-[#D4C5A9]">
                    <option>Divorce</option>
                    <option>Custody</option>
                    <option>Settlements</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-gray-600 dark:text-[#A3A3A3] mb-2">
                    Brief Message
                  </label>
                  <textarea
                    className="w-full bg-gray-50 dark:bg-[#000000] border border-gray-200 dark:border-[#262626] rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-[#D4C5A9] focus:border-[#D4C5A9]"
                    rows={4}
                  />
                </div>
                <button className="w-full bg-[#D4C5A9] text-[#000000] font-bold py-4 rounded-full hover:bg-[#C9B69C] transition-colors flex items-center justify-center gap-2">
                  Send Request <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
