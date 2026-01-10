"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Easing } from "framer-motion";
import {
  Users,
  MessageCircle,
  Trophy,
  Cpu,
  User,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

export default function WhatSetsUs() {
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
  const sectionRef = useRef(null);
  const featuresRef = useRef(null);

  const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Users,
      title: "Personalized Strategy",
      description:
        "We craft tailored legal strategies that align perfectly with your unique objectives, ensuring every move counts.",
      hasDescription: true,
      hasHoverImage: true,
    },
    {
      icon: MessageCircle,
      title: "Transparent Communication",
      hasDescription: false,
      hasHoverImage: false,
    },
    {
      icon: Trophy,
      title: "Proven Success",
      hasDescription: false,
      hasHoverImage: false,
    },
    {
      icon: Cpu,
      title: "Tech-Driven Approach",
      hasDescription: false,
      hasHoverImage: false,
    },
    {
      icon: User,
      title: "Client-Centered Focus",
      hasDescription: false,
      hasHoverImage: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F3EF] dark:bg-[#0A0A0A] text-gray-900 dark:text-gray-100 font-sans antialiased transition-colors duration-300">
      <Header />

      <section
        ref={sectionRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            className="flex flex-col space-y-8 lg:space-y-12"
            variants={fadeInUpStagger}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight tracking-tight text-gray-900 dark:text-white">
                &quot;What Sets Us Apart?&quot;
              </h2>
              <p className="text-gray-600 dark:text-[#A1A1A1] text-lg leading-relaxed max-w-lg">
                Experience unmatched expertise, personalized solutions, and a
                commitment to justice that makes NexaLaw your trusted legal
                partner.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy6b5MGCmlwWBSy6vv1kKQXnkrrlXEDwWjvoYjdBu1FypbDxJ9BGdIsl3Uo61PNpe7Ftbed-KthYowjS74plyromlT-T-wytqUUgrb_mos0XtLvRmGg9dTvL07fYbfRqZBpldzsuC2Yi9atEC8iYY9Xui0MCI_17wWrXLfXpCYY7yQDb9_fluMDyq9Llvo-LrTl8SAqmoqRq4KyFxaB2LW5mf-dp-0vuBC70s2QocKk_jzEt-B4F5ulQFyjnTvFRLYYDrB_e-kbzCu"
                alt="Team of professional lawyers discussing legal strategy in a modern office with American flag in background"
                fill
                className="object-cover brightness-90 hover:brightness-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </motion.div>
          </motion.div>
          <motion.div
            ref={featuresRef}
            className="flex flex-col space-y-4 pt-4 lg:pt-12"
            variants={fadeInUpStagger}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1A1A1A] transition-all duration-300 hover:border-[#D4C5A9]/50 hover:bg-gray-50 dark:hover:bg-[#222]"
              >
                <div
                  className={`p-6 flex ${feature.hasDescription ? "items-start" : "items-center"} space-x-6`}
                >
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-lg border ${
                        index === 0
                          ? "border-[#D4C5A9]/30 text-[#D4C5A9] bg-[#D4C5A9]/5 dark:bg-transparent"
                          : "border-gray-300 dark:border-gray-800 group-hover:border-[#D4C5A9]/50 text-gray-400 dark:text-gray-500 group-hover:text-[#D4C5A9]"
                      } flex items-center justify-center transition-colors`}
                    >
                      <feature.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-medium mb-2 group-hover:text-[#D4C5A9] transition-colors">
                      {feature.title}
                    </h3>
                    {feature.hasDescription && (
                      <p className="text-gray-600 dark:text-[#A1A1A1] text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    )}
                  </div>
                  {feature.hasHoverImage && (
                    <div className="hidden md:block absolute -right-6 -top-6 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform rotate-12">
                      <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTixdJD53mRC05fKevEvMMk0bWcbyLK4Imt3bYXji2o5HvRl9TH6IeKx5Mdld4dBQwB0lK7r9tGTYETYdVuuAvsjX_XRG5KUpZD4olDaSzLYhy_E6J2z8jCmES-38-RiZUdH8jJxC9x8eerIjYeiq5gTXW1yJu8MkV6FBKZa43a4tUOUve-YahlcpKMTaBO1V0RuQVqZ-3IXbfIS8YjPblgisMKE_V_dJ9KiwXbUQM-mDfiR5XIvJmQqURJE1NfNoWw4YJMgLNwH5r"
                        alt="Legal abstract"
                        fill
                        className="object-cover rounded-lg shadow-lg border border-[#D4C5A9]/20"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

