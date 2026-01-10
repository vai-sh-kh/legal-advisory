"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, type Easing } from "framer-motion";
import {
  ArrowUpRight,
  Gavel,
  Users,
  Building2,
  UsersRound,
  Brain,
  MessageCircle,
  Trophy,
  Cpu,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as Easing,
        staggerChildren: 0.1,
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
  const heroRef = useRef(null);
  const whoWeAreRef = useRef(null);
  const servicesRef = useRef(null);
  const whatSetsUsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const processRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const whoWeAreInView = useInView(whoWeAreRef, { once: true, amount: 0.2 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const whatSetsUsInView = useInView(whatSetsUsRef, {
    once: true,
    amount: 0.2,
  });
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    amount: 0.2,
  });
  const processInView = useInView(processRef, { once: true, amount: 0.2 });

  return (
    <div className="min-h-screen bg-[#F5F3EF] dark:bg-[#0A0A0A] text-gray-900 dark:text-gray-100 font-sans antialiased transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <header
        ref={heroRef}
        className="relative px-6 md:px-12 pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="z-10"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeInUpStagger}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-7xl font-display leading-tight text-gray-900 dark:text-[#D4C5A9] mb-8"
            >
              Redefining Legal <br />
              Excellence —{" "}
              <span className="dark:text-white text-gray-600 block mt-2">
                Welcome to NexaLaw
              </span>
            </motion.h1>
          </motion.div>
          <motion.div
            className="lg:pt-4 z-10 flex flex-col justify-between h-full"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeInUpStagger}
          >
            <div>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-600 dark:text-[#A3A3A3] leading-relaxed mb-8 max-w-md ml-auto lg:ml-0"
              >
                Our experienced attorneys are dedicated to turning your legal
                goals into reality. Don&apos;t wait—reach out to us today to
                discuss how we can help you achieve the results you deserve.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4"
              >
                <button className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:border-[#D4C5A9] dark:hover:border-[#D4C5A9] text-gray-900 dark:text-white transition duration-300">
                  Explore More
                </button>
                <button className="w-12 h-12 rounded-full bg-[#D4C5A9] flex items-center justify-center text-[#0A0A0A] hover:scale-105 transition transform">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 relative group cursor-pointer">
          <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-[#D4C5A9]/20 rounded-full blur-3xl opacity-50 z-0"></div>
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-[#D4C5A9]/10 rounded-full blur-3xl opacity-50 z-0"></div>
          <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[600px] w-full shadow-2xl z-10">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuXSSJVeFovWge5c9BUPgNxqxVg3_OxQc2GHULlZ13rFsOUz_6rre3gFSWPKhHp2uNGTxqDWD8tDMkVq_9EwzvdD_qmvZTFvg1UmJodnT8P7wpBjAqajaUo2aLZ4xAQuluKdtPrh0PRWHb5r2tOhvspDaJxdfHzoF8D7qsELYpz7JwfM3ghn7gTf4Nk8Ls9AlHt7IcyTgrge4rSCHrsf4HIwbLlW2unlSWVhl9OXkd4998c55QmgZghemh9fdzbshqO0s65KQrcL5y"
              alt="Legal team meeting in a modern office"
              fill
              className="object-cover transition duration-700 opacity-90 dark:opacity-80"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute w-full h-full animate-[spin_10s_linear_infinite]">
                  <svg
                    height="100%"
                    viewBox="0 0 100 100"
                    width="100%"
                    className="w-full h-full"
                  >
                    <defs>
                      <path
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        id="circle"
                      />
                    </defs>
                    <text
                      className="dark:fill-white fill-gray-900 uppercase font-bold tracking-widest"
                      fontSize="11.5"
                    >
                      <textPath href="#circle">
                        NexaLaw Legal Excellence • We Come to •
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg relative z-10">
                  <Play className="w-8 h-8 text-black ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Who We Are Section */}
      <section
        ref={whoWeAreRef}
        className="py-24 px-6 md:px-12 bg-white dark:bg-[#141414] transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            animate={whoWeAreInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-display text-gray-900 dark:text-[#D4C5A9] mb-16"
          >
            Who We Are at NexaLaw
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate={whoWeAreInView ? "visible" : "hidden"}
              variants={cardVariants}
              className="relative rounded-2xl overflow-hidden shadow-xl"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxaveCzYqbM6rA-Q-DiiQJeKl9Wjn1b0Z94_YfeQRDiYfJVgZBA6TjGSXfQnPPq41kM7aSxXuYNWD9rkI72Pn4qXF8Tx84UsUuC7c5AsklWQjZRY02ClGIm-f3k7jjeyHwuHLUBCt9oly56aB3m-D-WsWru2E-lme5ioDRLoQ4k-By3ajpA1XJQk6ShotjUSn6DuUuXnoW1Y5FH7kcGAVgqVOHcGb5AwwrrfR9Cb5saqn2NvS63cPt-XKVTzo-R7Mfs1sbJ2-pyRp4"
                alt="Senior lawyer portrait"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              animate={whoWeAreInView ? "visible" : "hidden"}
              variants={fadeInUpStagger}
              className="flex flex-col space-y-12"
            >
              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                At NexaLaw, we bring unparalleled expertise, innovation, and
                dedication to every legal challenge. Our team of seasoned
                attorneys is committed to delivering justice and crafting
                strategic solutions tailored to your unique needs.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-3 gap-8 border-t border-gray-200 dark:border-gray-800 pt-8"
              >
                <div>
                  <div className="text-3xl md:text-4xl font-display text-gray-900 dark:text-white mb-2">
                    20+
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Years of Experience
                  </div>
                </div>
                <div className="border-l border-gray-200 dark:border-gray-800 pl-8">
                  <div className="text-3xl md:text-4xl font-display text-gray-900 dark:text-white mb-2">
                    24K+
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Award-Winning Attorneys
                  </div>
                </div>
                <div className="border-l border-gray-200 dark:border-gray-800 pl-8">
                  <div className="text-3xl md:text-4xl font-display text-gray-900 dark:text-white mb-2">
                    30K+
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Comprehensive Legal Solutions
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4 pt-4"
              >
                <button className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-600 hover:border-[#D4C5A9] dark:hover:border-[#D4C5A9] text-gray-900 dark:text-white transition">
                  About us
                </button>
                <button className="w-12 h-12 rounded-full bg-[#D4C5A9] flex items-center justify-center text-[#0A0A0A] hover:scale-105 transition transform">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className="py-24 px-6 md:px-12 bg-[#F5F3EF] dark:bg-[#0A0A0A]"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="lg:w-1/3"
          >
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 dark:text-[#D4C5A9] leading-tight mb-6">
              Comprehensive Legal Services Designed for Your Success
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={fadeInUpStagger}
            className="lg:w-2/3 flex flex-col gap-6"
          >
            <motion.div
              variants={cardVariants}
              className="group relative bg-white dark:bg-[#141414] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-[#D4C5A9] dark:hover:border-[#D4C5A9] transition-all duration-300 flex flex-col md:flex-row gap-6"
            >
              <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-xs font-mono text-gray-500">
                1
              </div>
              <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg w-fit h-fit text-[#D4C5A9]">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-display text-gray-900 dark:text-[#D4C5A9] mb-2">
                  Corporate Law
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Expert legal counsel to help your business navigate complex
                  regulations and growth strategies efficiently.
                </p>
              </div>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Link
                href="/services/family-law"
                className="group relative bg-white dark:bg-[#141414] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-[#D4C5A9] dark:hover:border-[#D4C5A9] transition-all duration-300 flex flex-col md:flex-row gap-6 cursor-pointer"
              >
                <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-xs font-mono text-gray-500">
                  2
                </div>
                <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg w-fit h-fit text-[#D4C5A9]">
                  <UsersRound className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-display text-gray-900 dark:text-[#D4C5A9] mb-2">
                    Family Law
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Compassionate support for family-related matters, ensuring
                    your rights and loved ones are protected.
                  </p>
                </div>
              </Link>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="group relative bg-white dark:bg-[#141414] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-[#D4C5A9] dark:hover:border-[#D4C5A9] transition-all duration-300 flex flex-col md:flex-row gap-6"
            >
              <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-xs font-mono text-gray-500">
                3
              </div>
              <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg w-fit h-fit text-[#D4C5A9]">
                <Gavel className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-display text-gray-900 dark:text-[#D4C5A9] mb-2">
                  Criminal Defense
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Strategic defense representation to safeguard your future and
                  ensure a fair legal process.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section
        ref={whatSetsUsRef}
        className="py-24 px-6 md:px-12 bg-white dark:bg-[#141414]"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            animate={whatSetsUsInView ? "visible" : "hidden"}
            variants={fadeInUpStagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-display text-gray-900 dark:text-[#D4C5A9] mb-6"
            >
              &quot;What Sets Us Apart?&quot;
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-lg"
            >
              Experience unmatched expertise, personalized solutions, and a
              commitment to justice that makes NexaLaw your trusted legal
              partner.
            </motion.p>
            <motion.div
              variants={cardVariants}
              className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 w-full relative"
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNI0KiVzmab-wcnkkRuGAQWvNHFkmBSUZEtADr2nLUSw6Z4VdeZdbhuyMkRA9ib3B6zsrUfmj_U4A-xMcGb7Lh20V3hI72Hi-m-p-tySvHgYHDcwNmJaYCwU6Id3TWKdFPWtRd2NbIdZC_Aes5vr6y7PolYnPEvpY27fOHh6xYPQVS7C1t_4u08hx9bobO74usN1peumb-B9AotdoLDgO9AmN-IoalXmTUVDTYoQavuWBGGvtife8ULnX-DHnd3Id47kq0NEXiRl1a"
                alt="Legal team discussion"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={whatSetsUsInView ? "visible" : "hidden"}
            variants={fadeInUpStagger}
            className="flex flex-col space-y-4"
          >
            <motion.div
              variants={cardVariants}
              className="group p-6 border border-gray-200 dark:border-gray-700 rounded-xl flex items-center gap-6 hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer relative overflow-hidden"
            >
              <div className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 group-hover:border-[#D4C5A9] dark:group-hover:border-[#D4C5A9] text-gray-500 dark:text-gray-400 group-hover:text-[#D4C5A9] transition">
                <Brain className="w-6 h-6" />
              </div>
              <span className="text-xl font-medium text-gray-800 dark:text-gray-200 group-hover:text-[#D4C5A9] transition">
                Personalized Strategy
              </span>
              <div className="hidden group-hover:block absolute right-4 top-1/2 -translate-y-1/2 w-24 h-16 bg-gray-800 rounded-lg overflow-hidden border border-gray-600 transform rotate-6 shadow-xl z-10">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnO2pWRgGygy5hjbbJyGUywJqydFW6VtA3ZFBnoNjFZ_O1rXPXsV3Q9MCxewxUCzuZT4XPMMHQS92TbCSCZMu2E0V6YgEEJJK8F4eC-02VRDrzMRe53hSHYXGWroLVrQt2FM4jlL3ziW8zZSGfGnEYJYgMN1C7rlNbs6GKEb066ZrojdSOYydCRMLve_lcGvlg0wdxCBVbozBdA_D92iUaCJlH3PReGixkqO3kWyOFl7mYtoz7MpuFo_uqr5oMn52Aae1wJXc8J_vu"
                  alt="Strategy meeting"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="group p-6 border border-gray-200 dark:border-gray-700 rounded-xl flex items-center gap-6 hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer"
            >
              <div className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 group-hover:border-[#D4C5A9] dark:group-hover:border-[#D4C5A9] text-gray-500 dark:text-gray-400 group-hover:text-[#D4C5A9] transition">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-xl font-medium text-gray-800 dark:text-gray-200 group-hover:text-[#D4C5A9] transition">
                Transparent Communication
              </span>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="group p-6 border border-gray-200 dark:border-gray-700 rounded-xl flex items-center gap-6 hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer"
            >
              <div className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 group-hover:border-[#D4C5A9] dark:group-hover:border-[#D4C5A9] text-gray-500 dark:text-gray-400 group-hover:text-[#D4C5A9] transition">
                <Trophy className="w-6 h-6" />
              </div>
              <span className="text-xl font-medium text-gray-800 dark:text-gray-200 group-hover:text-[#D4C5A9] transition">
                Proven Success
              </span>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="group p-6 border border-gray-200 dark:border-gray-700 rounded-xl flex items-center gap-6 hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer"
            >
              <div className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 group-hover:border-[#D4C5A9] dark:group-hover:border-[#D4C5A9] text-gray-500 dark:text-gray-400 group-hover:text-[#D4C5A9] transition">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-xl font-medium text-gray-800 dark:text-gray-200 group-hover:text-[#D4C5A9] transition">
                Tech-Driven Approach
              </span>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="group p-6 border border-gray-200 dark:border-gray-700 rounded-xl flex items-center gap-6 hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer"
            >
              <div className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 group-hover:border-[#D4C5A9] dark:group-hover:border-[#D4C5A9] text-gray-500 dark:text-gray-400 group-hover:text-[#D4C5A9] transition">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xl font-medium text-gray-800 dark:text-gray-200 group-hover:text-[#D4C5A9] transition">
                Client-Centered Focus
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        className="py-24 px-6 md:px-12 bg-[#F5F3EF] dark:bg-[#0A0A0A] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto mb-16 flex justify-between items-end">
          <motion.h2
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-display text-gray-900 dark:text-[#D4C5A9]"
          >
            What Our Clients Say
          </motion.h2>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-600 dark:text-gray-400">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 rounded-full bg-[#D4C5A9] flex items-center justify-center text-[#0A0A0A] hover:opacity-90 transition">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        <motion.div
          initial="hidden"
          animate={testimonialsInView ? "visible" : "hidden"}
          variants={fadeInUpStagger}
          className="flex gap-8 overflow-x-auto pb-8 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <motion.div
            variants={cardVariants}
            className="min-w-[350px] md:min-w-[400px] snap-center"
          >
            <div className="h-full flex flex-col justify-between border-l border-gray-300 dark:border-gray-700 pl-8 py-2">
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                &quot;The team at NexaLaw went above and beyond to resolve my
                legal issue. Their attention to detail, clear communication, and
                professionalism gave me the confidence I needed.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnTqrgPFlox0Jy3eGK6f_uC2xN30GXJthryjoQBcLDyNSs5o4bO3isrGHyYpP-jARdt3eiNp21kjfWy15UnjI0X-Nbw5e_JeVWBHk05cGk-rkYHS8Mo5e-LysdXgnA6YPzTIRxYCrsRLj4XeXnBubytYg24DgPYpJBStq0gfee_PKroM4o28jPMt5I9LNykMOEMRp1ouMaPhvwvjgcYODy5eYwgGd2HtBwrIGH4m7XI8NfQD74fX2Pd78PdCr1HCBEA65K7hqSgS11"
                    alt="Client"
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div>
                  <h4 className="font-display text-lg text-gray-900 dark:text-white">
                    John Doe
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Los Angeles, USA
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={cardVariants}
            className="min-w-[350px] md:min-w-[400px] snap-center"
          >
            <div className="h-full flex flex-col justify-between border-l border-gray-300 dark:border-gray-700 pl-8 py-2">
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                &quot;NexaLaw turned a complex property dispute into a
                manageable process. Their strategic approach and dedication to
                my case ensured a favorable outcome.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe2mmWHkqsNW8BwHJmEN5WDJ8BWcnZgrI8CBgJ6b5rITbxy6PYIKAssOBMFsJiwoJSGV3GwS-Q98ldxiuzqyefDiQJSbmUmW-V_-iFv60nD9kVHR7Fs-OIpZRJ56u3_HmjHstAFfCxrQeMToX5HVzBYqd0WhLzWHH3Qm9-GX5V8MM6iVEy-k1ezaYu31bzE3PTnoanQSTDinlTuNpp5FALzsBpRkTK2MWk711IIqsc-u4VOCz-Mub30K0WIRNqPbhc17ql8ZDEHCzZ"
                    alt="Client"
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div>
                  <h4 className="font-display text-lg text-gray-900 dark:text-white">
                    Emily Carter
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Chicago, USA
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={cardVariants}
            className="min-w-[350px] md:min-w-[400px] snap-center"
          >
            <div className="h-full flex flex-col justify-between border-l border-gray-300 dark:border-gray-700 pl-8 py-2">
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                &quot;Their expertise in corporate law was exactly what my
                business needed. From contract negotiations to compliance
                advice, NexaLaw delivered exceptional results.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdAHQzEbRjY1eAS3nY0NNQF2d0Rc0gnG7dnbniH4wO9ggRt0cc17SsYqo0zI7ITDZkArJHg8agZ6F8fCc81bzGcfcfbjuxPOawDURjtb9TEq14JWLriDroes-tn6V1GTiYa0rPXdA0nMk4uDj_7pZo8aed9ooNa4NPFbCN4qePrmEG_YeMT6NprTy7Zd8daXVSd5rB3L4JdFfnWG9JI_kIn0lxq98qoOTIaIKpXHVX1awX0sAFLqNlkwuVy1S5F4PX1xHsPx-EOry4"
                    alt="Client"
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div>
                  <h4 className="font-display text-lg text-gray-900 dark:text-white">
                    Michael Brown
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    New York, USA
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="min-w-[100px] opacity-20">
            <div className="h-full border-l border-gray-300 dark:border-gray-700 pl-8 py-2">
              <p className="text-gray-600 dark:text-gray-300">...</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Our Process Section */}
      <section
        ref={processRef}
        className="py-24 px-6 md:px-12 bg-[#141414] text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D4C5A9]/5 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={fadeInUpStagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-display text-[#D4C5A9] mb-8"
            >
              Our Process
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-400 mb-12 max-w-md"
            >
              From understanding your goals to delivering results, our
              streamlined approach ensures clarity, precision, and success every
              step of the way.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <button className="px-8 py-3 rounded-full border border-gray-600 hover:border-[#D4C5A9] text-white transition">
                Let&apos;s talk
              </button>
              <button className="w-12 h-12 rounded-full bg-[#D4C5A9] flex items-center justify-center text-[#0A0A0A] hover:scale-105 transition transform">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={fadeInUpStagger}
            className="flex flex-col space-y-6"
          >
            <motion.div variants={cardVariants} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-sm text-gray-400">
                  1
                </div>
                <div className="w-px h-full bg-gray-800 my-2"></div>
              </div>
              <div className="bg-[#0A0A0A]/50 border border-gray-800 p-6 rounded-xl w-full">
                <h3 className="text-xl font-display text-[#D4C5A9] mb-2">
                  Discovery Call
                </h3>
                <p className="text-sm text-gray-400">
                  An initial conversation to explore your goals, challenges, and
                  aspirations, ensuring we align on expectations.
                </p>
              </div>
            </motion.div>
            <motion.div variants={cardVariants} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-sm text-gray-400">
                  2
                </div>
                <div className="w-px h-full bg-gray-800 my-2"></div>
              </div>
              <div className="bg-[#0A0A0A]/50 border border-gray-800 p-6 rounded-xl w-full">
                <h3 className="text-xl font-display text-gray-200 mb-2">
                  Case Analysis
                </h3>
                <p className="text-sm text-gray-400">
                  A comprehensive assessment of your needs and objectives,
                  enabling us to identify key priorities.
                </p>
              </div>
            </motion.div>
            <motion.div variants={cardVariants} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-sm text-gray-400">
                  3
                </div>
              </div>
              <div className="bg-[#0A0A0A]/50 border border-gray-800 p-6 rounded-xl w-full opacity-50">
                <h3 className="text-xl font-display text-gray-200 mb-2">
                  Strategy Execution
                </h3>
                <p className="text-sm text-gray-400">
                  Implementing the tailored plan with precision and regular
                  updates.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
