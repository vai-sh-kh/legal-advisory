"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Easing } from "framer-motion";
import { Play, ArrowRight, Award, Lightbulb, Copyright } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function IntellectualPropertyPage() {
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

      <section
        ref={headerRef}
        className="pt-16 pb-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end border-b border-white/10 pb-16">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#D4C5A9] leading-[1.1]">
              Intellectual Property
            </h1>
          </motion.div>
          <motion.div
            className="lg:pl-20"
            variants={fadeInUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            <p className="text-lg md:text-xl text-gray-600 dark:text-zinc-400 leading-relaxed max-w-lg">
              Safeguarding your innovations and creative works through
              comprehensive trademark, copyright, and patent protection services
              globally.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="mt-16 relative aspect-video w-full rounded-3xl overflow-hidden bg-zinc-900 group"
          variants={fadeInUp}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <Image
            alt="Creative workspace"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE64xIRbW7bDlV7DRnhzP353m5rTDdxd83Xd_9-Kq4MtbQ0vg3HiR5Xly7fiE-R_D_XFvgFn-Ik_Bba-gtdK82hFDGZ_s181oo6IEKrP_kxjyr0XOa-KJBH0vxzygeZtf6amkcn1_QK8-olD9i4pEx__OWxD2T1XgABYf_aYcAu1j3Yasw1HUaMlua-pC4W1TbgLzMzC5buuQIwRDfC2ZmWfIadhIMaW0lbFVuSErOB8eOJwag6sNO8gCgZMaqHhB5xbzNakTDK2Tk"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-24 h-24 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play className="w-10 h-10 text-black ml-1" />
            </button>
          </div>
        </motion.div>
      </section>

      <section
        ref={contentRef}
        className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <motion.div
            className="lg:col-span-7 space-y-16"
            variants={fadeInUpStagger}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-medium mb-8 text-gray-900 dark:text-[#D4C5A9]">
                Comprehensive IP Protection
              </h2>
              <p className="text-lg text-gray-600 dark:text-zinc-400 leading-relaxed mb-6">
                In today&apos;s knowledge-based economy, your intellectual
                property is often your most valuable asset. At NexaLaw, we
                provide strategic counsel to help you identify, protect, and
                monetize your innovations and creative expressions.
              </p>
            </motion.div>
            <motion.div className="space-y-12" variants={fadeInUpStagger}>
              <motion.div variants={cardVariants} className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#D4C5A9]/10 border border-[#D4C5A9]/20 flex items-center justify-center text-[#D4C5A9]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-3">Trademark Law</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    From initial clearance searches to international
                    registration and enforcement, we ensure your brand identity
                    remains protected and distinct in the marketplace.
                  </p>
                </div>
              </motion.div>
              <motion.div variants={cardVariants} className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#D4C5A9]/10 border border-[#D4C5A9]/20 flex items-center justify-center text-[#D4C5A9]">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-3">Patent Strategy</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Our technical expertise allows us to navigate complex patent
                    filings, providing robust protection for your inventions and
                    technological advancements.
                  </p>
                </div>
              </motion.div>
              <motion.div variants={cardVariants} className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#D4C5A9]/10 border border-[#D4C5A9]/20 flex items-center justify-center text-[#D4C5A9]">
                  <Copyright className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-3">
                    Copyright Protection
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    We safeguard creative works for authors, artists, and
                    software developers, managing licensing agreements and
                    defending against unauthorized use.
                  </p>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 gap-4 pt-8"
            >
              <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                <Image
                  alt="Legal Professional"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvvk6mQjWjxfMgVQ_qQYIO4s-CL1Wm90Ndqhwf2-D2GTdJPtYRYyX-sDYTvoFvHkI2On90BYljaE40Vh7WzAsJqYU-rwS3cKKLLvAVUYZUsKzLqD7p790ziDBzX_FkXq3oQg4ADQnOyhj6jnMRtrsTVB0bp-_fNtHTcyn8vk1gvpqIkHbPDp1iWYiuw4DURkAlUld16uqVUlKa1jqpRDL9Vy1r11W4Ztan3T3BN-AMq8YeTYDmD2rSbvQ2YKYcx7pcTBGAgYG95EgS"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                <Image
                  alt="Legal Meeting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxi40OvhiaWC1pc7EMcNWJQHCB_PcluvxuQoUCvHwXqaoLpQSAMT5K1KgHPLkJve7pdN-gXNBgc1sLDx8AElIQ23y2TyUGf8XxZAai_jiNNYYYBdVFdQzDmmr9A6v9W5ovWZDQ6RZnfpo3WGyCVYrF3a7Wb1Aiptf02zvO2132ZP_St0dSmzav_clQ_qq6A9qo681QdjWvJSMPAtvHwNlaJkp58N05SMEMBGEx7y2RN4nfBJ07WGovpJBM4eyEwXfHu5xCvyaMNVOE"
                  fill
                  className="object-cover"
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
            <div className="lg:sticky lg:top-32 bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-white/10 p-10 rounded-3xl">
              <h3 className="text-2xl font-medium mb-2 text-gray-900 dark:text-white">
                Request a Consultation
              </h3>
              <p className="text-gray-600 dark:text-zinc-400 mb-8">
                Discuss your IP needs with our senior partners today.
              </p>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-zinc-500 mb-2 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 focus:border-[#D4C5A9] focus:ring-0 transition-colors text-gray-900 dark:text-white"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-zinc-500 mb-2 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 focus:border-[#D4C5A9] focus:ring-0 transition-colors text-gray-900 dark:text-white"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-zinc-500 mb-2 uppercase tracking-wider">
                    How can we help?
                  </label>
                  <textarea
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 focus:border-[#D4C5A9] focus:ring-0 transition-colors text-gray-900 dark:text-white"
                    placeholder="Tell us about your IP concerns..."
                    rows={4}
                  />
                </div>
                <button
                  className="w-full bg-[#D4C5A9] text-black font-semibold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#D4C3A9] transition-colors"
                  type="submit"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
