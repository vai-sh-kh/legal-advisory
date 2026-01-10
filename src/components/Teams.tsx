"use client";

import Image from "next/image";
import { ArrowUpRight, Linkedin, Twitter } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

export default function Teams() {
  const teamMembers = [
    {
      name: "James Sterling",
      role: "Senior Partner",
      specialization: "Specializing in Corporate Law & Mergers",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCyPfbTbCkb_8trfJh7_PX62lxZ7RDIFgid5pQNCbPV7SBBeiiw1y8BHBI0l6PxW6Rz24jzdk_UaZCidXx6c0-uLuTpwiuG0DpRiWMtDwG9TAgaazo69jTMT4ODIZOZZHNTXlsw8W7lNykfn5F8EJRFgYd-o7S-m4mDHlLCnd-Lse8Nyp_X-wahHTN1dSsgSOFpMP8dvS3Md90_SZ938kx8eE20uKPLRnTQOTUSQAwbXHLNVejxV7fK3QS6gxBhNEl72meHQAH0AbTr",
    },
    {
      name: "Eleanor Vance",
      role: "Managing Partner",
      specialization: "Expert in Litigation & Dispute Resolution",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBHRzZxjJIZ9VF73eHlcb3hRIG1rqtbpQLJdzl5QymGeeXpy2pJizA7Ii-0IV7pLxEjjyeQmhap10UftK747Egyv_Y2IMpb7aJcbG0sX0puSJcgKdw-MVjzX6S0pf16MPztN51pcgO9wCKdo2pz6voUE2vP1UF-cJH5GOd2C8y81J8Cb0TTB9IuKrtPI2PKdkvmALRbu_XRHav30St3Rj7KPYhj_xFwCmbWhMEMSvrr2lX6f5VidHNx0CeX7aGb_EClPp9yCK4Tgo_P",
    },
    {
      name: "Marcus Thorne",
      role: "Senior Associate",
      specialization: "Focus on Intellectual Property",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDg-T7ElB6SMWritUl6SL_BDYt5ut1imBvKG0Zb8a2fbLsSNMWGoOGzA6ItvyeS23YUOY5PNuiz5pIqgDh73OJtSB2bOdodu1tLLRd6wrA_lKHFbO0Oz1pcSo5VV4t82czQLOV-A540xW8UP2TT_s7_jgj9ATRY0P6zkdxVHNZGU0au-lCRvE-eKuz_BVgeCNq6bfXxxddUtq4iyMqnNnFcLV0TM666lDWaKrRMXTHRt1Zvq3QLBgJuBUbnFCitIpJgu5f_HkXuWxrM",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F3EF] dark:bg-[#0A0A0A] text-gray-900 dark:text-gray-100 font-sans antialiased transition-colors duration-300">
      <Header />

      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-gray-900 dark:text-[#D4C5A9] mb-6 leading-tight">
              Meet Our Expert Attorneys
            </h2>
            <p className="text-lg text-gray-600 dark:text-[#9CA3AF] font-light leading-relaxed max-w-xl">
              Our team of seasoned legal professionals brings decades of
              combined experience across diverse practice areas. We are dedicated
              to providing strategic counsel and achieving exceptional results
              for our clients.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="#"
              className="group inline-flex items-center gap-3 text-gray-900 dark:text-white font-medium hover:opacity-80 transition-opacity"
            >
              <span className="border border-gray-300 dark:border-white/20 px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-[#0A0A0A] transition-all duration-300">
                View All Attorneys
              </span>
              <span className="w-10 h-10 rounded-full bg-[#D4C5A9] flex items-center justify-center text-[#0A0A0A] group-hover:scale-110 transition-transform duration-300">
                <ArrowUpRight className="w-5 h-5 transform -rotate-45" />
              </span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white dark:bg-[#161616] rounded-2xl overflow-hidden group border border-gray-200 dark:border-white/5 hover:border-[#D4C5A9]/50 dark:hover:border-[#D4C5A9]/30 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}, ${member.role}`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 dark:bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-white border border-gray-200 dark:border-white/10">
                    {member.role}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-[#D4C5A9] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 dark:text-[#9CA3AF] text-sm mb-6">
                    {member.specialization}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 dark:border-white/10 pt-6 mt-auto">
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#D4C5A9] hover:text-[#0A0A0A] dark:hover:bg-[#D4C5A9] dark:hover:text-[#0A0A0A] transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#D4C5A9] hover:text-[#0A0A0A] dark:hover:bg-[#D4C5A9] dark:hover:text-[#0A0A0A] transition-colors"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white hover:text-[#D4C5A9] dark:hover:text-[#D4C5A9] transition-colors group/btn"
                  >
                    View Profile
                    <span className="w-6 h-6 rounded-full bg-[#D4C5A9] flex items-center justify-center text-[#0A0A0A] group-hover/btn:rotate-45 transition-transform duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

