"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Easing } from "framer-motion";
import { Play, ArrowRight, User, Globe, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ImmigrationLawPage() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as Easing,
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
        ease: [0.22, 1, 0.36, 1] as Easing,
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

      <main>
        <section
          ref={headerRef}
          className="px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto pt-12 pb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-gray-900 dark:text-[#D4C5A9] tracking-tight leading-[1.1]">
                Immigration
                <br />
                Law
              </h1>
            </motion.div>
            <motion.div
              className="lg:max-w-md lg:ml-auto"
              variants={fadeInUp}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
            >
              <p className="text-xl text-gray-600 dark:text-[#A3A3A3] leading-relaxed">
                Navigating the complexities of global mobility with precision,
                expertise, and personalized legal strategies for individuals and
                corporations.
              </p>
            </motion.div>
          </div>
          <motion.div
            className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden bg-zinc-900 group"
            variants={fadeInUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            <Image
              alt="International Travel"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUbNw6gcYLCDby_tA_BVYAbkjr8-un11QZ0qzs_jl6bf8b7zoFMKa0S4Koy0eRQh_DUMKmd7K6t6KaPdhp9xDCJOWcmosuwmYlQBB0xQGmyF-hh97hxwipUv42VkipEjqDSf8fIk-Lqzj2i-KyUA8EfmJO4by1OLwTIpfWPHc_G2ao3Jkxxs1_54-U_9D7lqrht2OsYD2KOlbvIX-lXY9tKAH4cA_rXlWi97HbdcIV9u33IaQuGiPSL1hhu6NxnWvI74BlugwIFe2n"
              fill
              className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="cursor-pointer relative w-32 h-32 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="absolute w-[140px] h-[140px] animate-[spin_20s_linear_infinite]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <path
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                      id="circlePath"
                    />
                  </defs>
                  <text
                    className="uppercase tracking-[0.2em] fill-white font-medium"
                    fontSize="8"
                  >
                    <textPath href="#circlePath" startOffset="0%">
                      NexaLaw Legal Excellence — We Care to Excellence —
                    </textPath>
                  </text>
                </svg>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center relative z-10 transition-transform hover:scale-110">
                  <Play className="w-8 h-8 text-black ml-1 fill-current" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section
          ref={contentRef}
          className="px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto pb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div
              className="lg:col-span-7 space-y-16"
              variants={fadeInUpStagger}
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-medium mb-8 text-gray-900 dark:text-white">
                  Our Immigration Expertise
                </h2>
                <p className="text-gray-600 dark:text-[#A3A3A3] text-lg leading-relaxed mb-12">
                  In an increasingly interconnected world, legal hurdles should
                  not stand in the way of your international ambitions. At
                  NexaLaw, we provide comprehensive immigration solutions
                  tailored to your unique circumstances, whether you are an
                  individual seeking a new beginning or a corporation managing a
                  global workforce.
                </p>
                <motion.div className="space-y-12" variants={fadeInUpStagger}>
                  <motion.div variants={cardVariants} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-[#D4C5A9]/20 flex items-center justify-center text-[#D4C5A9]">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium mb-4">
                        Visa Services
                      </h3>
                      <p className="text-gray-600 dark:text-[#A3A3A3] leading-relaxed">
                        Comprehensive guidance for work, investment, and student
                        visas. We handle the documentation and strategy for
                        H-1B, L-1, EB-5, and other specialized categories with
                        meticulous attention to detail.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div variants={cardVariants} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-[#D4C5A9]/20 flex items-center justify-center text-[#D4C5A9]">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium mb-4">
                        Citizenship & Naturalization
                      </h3>
                      <p className="text-gray-600 dark:text-[#A3A3A3] leading-relaxed">
                        Assisting individuals through the rewarding journey of
                        becoming a citizen. We provide support for applications,
                        interviews, and potential legal challenges throughout
                        the naturalization process.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div variants={cardVariants} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-[#D4C5A9]/20 flex items-center justify-center text-[#D4C5A9]">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium mb-4">
                        Corporate Compliance
                      </h3>
                      <p className="text-gray-600 dark:text-[#A3A3A3] leading-relaxed">
                        Ensuring businesses remain compliant with evolving
                        immigration laws. From I-9 audits to E-Verify
                        management, we protect your organization from regulatory
                        risks.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="rounded-3xl overflow-hidden"
              >
                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                  <Image
                    alt="Legal Professional"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPFk8hLLFOmocZcn2UJfkGMMnfyKatdbT-Lra-lm4Xub2IxmfAeDTvXJh5fJCJ9M9IGSKRHB7CiCOIjBMUiGetVktI272wEbycMYsmFE7LPBJfoYM2Gd2W0UXnKLuoVDu604ZTXqVvLfmQ14gOLYm2T-NBZvSuUQDERPr_w5VV7uz1YkwNV-fb2yGNYCLOoJuWYZE431tYkxEy_zSij4pD1Nd3rr2AUzLBoS28HiqFTz9lwhlE6z0iyoFVXzG7sd4bH3E2QwW1VgcL"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              ref={sidebarRef}
              className="lg:col-span-5"
              variants={fadeInUp}
              initial="hidden"
              animate={sidebarInView ? "visible" : "hidden"}
            >
              <div className="sticky top-12 bg-white dark:bg-[#121212] border border-gray-200 dark:border-[#262626] p-8 md:p-10 rounded-3xl">
                <h3 className="text-2xl font-medium mb-2 text-gray-900 dark:text-white">
                  Book a Consultation
                </h3>
                <p className="text-gray-600 dark:text-[#A3A3A3] mb-8">
                  Discuss your case with our expert immigration attorneys.
                </p>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-[#A3A3A3] mb-2 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      className="w-full bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-[#262626] rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-[#D4C5A9] focus:border-[#D4C5A9] placeholder-gray-400 dark:placeholder-zinc-600"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-[#A3A3A3] mb-2 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      className="w-full bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-[#262626] rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-[#D4C5A9] focus:border-[#D4C5A9] placeholder-gray-400 dark:placeholder-zinc-600"
                      placeholder="john@example.com"
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-[#A3A3A3] mb-2 uppercase tracking-wider">
                      Service Needed
                    </label>
                    <select className="w-full bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-[#262626] rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-[#D4C5A9] focus:border-[#D4C5A9]">
                      <option>Visa Application</option>
                      <option>Citizenship</option>
                      <option>Corporate Compliance</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-[#A3A3A3] mb-2 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      className="w-full bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-[#262626] rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-[#D4C5A9] focus:border-[#D4C5A9] placeholder-gray-400 dark:placeholder-zinc-600"
                      placeholder="Tell us about your situation..."
                      rows={4}
                    />
                  </div>
                  <button className="w-full bg-[#D4C5A9] hover:bg-[#C9B69C] text-black font-semibold py-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2">
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
