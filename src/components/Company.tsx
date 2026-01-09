"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Twitter,
  ArrowUpRight,
  Brain,
  MessageCircle,
  Trophy,
  Cpu,
  Users,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

export default function Company() {
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
    <div className="min-h-screen bg-[#F5F3EF] dark:bg-[#0A0A0A] text-gray-900 dark:text-gray-100 font-sans antialiased transition-colors duration-300">
      <Header />

      {/* Testimonials Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-[#F5F3EF] dark:bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end md:items-center gap-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-gray-900 dark:text-[#e0d3bc] leading-tight">
            What Our Clients Say
          </h2>
          <div className="flex items-center gap-4">
            <button
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-gray-400 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full bg-[#e0d3bc] flex items-center justify-center text-gray-900 hover:bg-opacity-90 transition-opacity duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            <div className="absolute inset-y-0 left-1/3 w-px bg-gray-200 dark:bg-[#2a2a2a] hidden lg:block"></div>
            <div className="absolute inset-y-0 left-2/3 w-px bg-gray-200 dark:bg-[#2a2a2a] hidden lg:block"></div>
            
            {/* Testimonial 1 */}
            <div className="flex flex-col justify-between h-full p-6 lg:pr-10 border-b lg:border-b-0 border-gray-200 dark:border-[#2a2a2a] lg:border-none pb-12 lg:pb-0">
              <div className="mb-8">
                <p className="text-lg md:text-xl font-light leading-relaxed text-gray-600 dark:text-gray-400">
                  The team at NexaLaw went above and beyond to resolve my legal
                  issue. Their attention to detail, clear communication, and
                  professionalism gave me the confidence I needed during a
                  stressful time. I highly recommend them.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcX7ChHvQi2nv5_QunJFWilqbYSOby5LIJBbvXrEXRP5Jk0wjwr323iP-VCykEogaD6dkYVra-uH6FsXZ4Qx7wy8KcfdMSZ3rpuLcwABKQxTNBzjjgogNZtjvI7yzonx-MBf-aJHx14I3dA_-A6EIFTdNDTIbVeiJ7Oa7lkY_QDo7K8bkT9Ysh6epj9JSjfv-EL_ERoyNnzw6yazNdc9f1hbZpebOFvSefURMRHgS5QM5dJOlYMVGSV6VBACFvVl8267JfMI97RzPI"
                    alt="Portrait of John Doe"
                    fill
                    className="object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-display font-medium text-gray-900 dark:text-[#e0d3bc]">
                    John Doe
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wide">
                    Los Angeles, USA
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col justify-between h-full p-6 lg:px-10 border-b lg:border-b-0 border-gray-200 dark:border-[#2a2a2a] lg:border-none pb-12 lg:pb-0">
              <div className="mb-8">
                <p className="text-lg md:text-xl font-light leading-relaxed text-gray-600 dark:text-gray-400">
                  NexaLaw turned a complex property dispute into a manageable
                  process. Their strategic approach and dedication to my case
                  ensured a favorable outcome. I&apos;m incredibly grateful for
                  their support and legal expertise.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwkX3hzR33nybFkYq2CFJjHNc9uuWRAXgBtkM1P0XYX1s8cLoSFoFrYx7eDv9XamL7T_gAPZPNvOYEZITQkYF9TBUZheWhM2AvOzt_W8Xuij_h36rqnoMCj01xob1GGkMxMV0SiukCMYbJ5pqpKRe8JiXpr_IZFWYhPC8nub8daapXQLzVRNVvoP-1sKH23ae9bH3QlT79-WVWFt0dGS7xaG22NvuKzFc663AR_y5wFiMOIUANnoiX_IeXoVFKjO06CfsX-Dm-4tV7"
                    alt="Portrait of Emily Carter"
                    fill
                    className="object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-display font-medium text-gray-900 dark:text-[#e0d3bc]">
                    Emily Carter
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wide">
                    Chicago, USA
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col justify-between h-full p-6 lg:pl-10">
              <div className="mb-8">
                <p className="text-lg md:text-xl font-light leading-relaxed text-gray-600 dark:text-gray-400">
                  Their expertise in corporate law was exactly what my business
                  needed. From contract negotiations to compliance advice,
                  NexaLaw delivered exceptional results every step of the way
                  with utmost precision.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuASslemnkuvBX3jNSfKv4PiQyQ_b7cDqqpp1XMRlNx6kUJYvULyaRjfCzDuyZf65XqzGyj8qGIs4QD22w_krEZNuQzCO9uCVwGzuQXKkDKm-wkFucPDPqNfbneVaoHuJjsTX5CN_-rD0aUeLTEhTbitRSG2m91rHfR9ZIDC1nd368I4OToz0H_7LjP2s0xVvzrQZOM0BNJKQeWjpg59R9CQeqHo91Xci2euJnmuvnehy1yMDhCljUy4ZCF5-fmUlpxCar9lLhZA-xmI"
                    alt="Portrait of Michael Brown"
                    fill
                    className="object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-display font-medium text-gray-900 dark:text-[#e0d3bc]">
                    Michael Brown
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wide">
                    New York, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200 dark:bg-[#2a2a2a]"></div>
      </section>

      {/* Teams Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#F2F2F0] dark:bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#1A1A1A] dark:text-[#D4C5A9] mb-6 leading-tight">
                Meet Our Expert Attorneys
              </h2>
              <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] font-light leading-relaxed max-w-xl">
                Our team of seasoned legal professionals brings decades of
                combined experience across diverse practice areas. We are
                dedicated to providing strategic counsel and achieving
                exceptional results for our clients.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="#"
                className="group inline-flex items-center gap-3 text-[#1A1A1A] dark:text-white font-medium hover:opacity-80 transition-opacity"
              >
                <span className="border border-[#1A1A1A]/20 dark:border-white/20 px-6 py-3 rounded-full hover:bg-[#1A1A1A] hover:text-white dark:hover:bg-white dark:hover:text-[#0D0D0D] transition-all duration-300">
                  View All Attorneys
                </span>
                <span className="w-10 h-10 rounded-full bg-[#D4C5A9] flex items-center justify-center text-[#0D0D0D] group-hover:scale-110 transition-transform duration-300">
                  <ArrowUpRight className="w-5 h-5 transform -rotate-45" />
                </span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white dark:bg-[#161616] rounded-2xl overflow-hidden group border border-gray-200 dark:border-white/5 hover:border-[#D4C5A9]/50 dark:hover:border-[#D4C5A9]/30 transition-all duration-300 flex flex-col h-full">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyPfbTbCkb_8trfJh7_PX62lxZ7RDIFgid5pQNCbPV7SBBeiiw1y8BHBI0l6PxW6Rz24jzdk_UaZCidXx6c0-uLuTpwiuG0DpRiWMtDwG9TAgaazo69jTMT4ODIZOZZHNTXlsw8W7lNykfn5F8EJRFgYd-o7S-m4mDHlLCnd-Lse8Nyp_X-wahHTN1dSsgSOFpMP8dvS3Md90_SZ938kx8eE20uKPLRnTQOTUSQAwbXHLNVejxV7fK3QS6gxBhNEl72meHQAH0AbTr"
                  alt="Portrait of James Sterling, Senior Partner"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 dark:bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] dark:text-white border border-gray-200 dark:border-white/10">
                    Senior Partner
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-[#1A1A1A] dark:text-[#D4C5A9] mb-2">
                    James Sterling
                  </h3>
                  <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm mb-6">
                    Specializing in Corporate Law & Mergers
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 dark:border-white/10 pt-6 mt-auto">
                  <div className="flex gap-3">
                    <a
                      className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-[#6B7280] dark:text-gray-400 hover:bg-[#D4C5A9] hover:text-[#0D0D0D] dark:hover:bg-[#D4C5A9] dark:hover:text-[#0D0D0D] transition-colors"
                      href="#"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-[#6B7280] dark:text-gray-400 hover:bg-[#D4C5A9] hover:text-[#0D0D0D] dark:hover:bg-[#D4C5A9] dark:hover:text-[#0D0D0D] transition-colors"
                      href="#"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                  <a
                    className="flex items-center gap-2 text-sm font-medium text-[#1A1A1A] dark:text-white hover:text-[#D4C5A9] dark:hover:text-[#D4C5A9] transition-colors group/btn"
                    href="#"
                  >
                    View Profile
                    <span className="w-6 h-6 rounded-full bg-[#D4C5A9] flex items-center justify-center text-[#0D0D0D] group-hover/btn:rotate-45 transition-transform duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white dark:bg-[#161616] rounded-2xl overflow-hidden group border border-gray-200 dark:border-white/5 hover:border-[#D4C5A9]/50 dark:hover:border-[#D4C5A9]/30 transition-all duration-300 flex flex-col h-full">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHRzZxjJIZ9VF73eHlcb3hRIG1rqtbpQLJdzl5QymGeeXpy2pJizA7Ii-0IV7pLxEjjyeQmhap10UftK747Egyv_Y2IMpb7aJcbG0sX0puSJcgKdw-MVjzX6S0pf16MPztN51pcgO9wCKdo2pz6voUE2vP1UF-cJH5GOd2C8y81J8Cb0TTB9IuKrtPI2PKdkvmALRbu_XRHav30St3Rj7KPYhj_xFwCmbWhMEMSvrr2lX6f5VidHNx0CeX7aGb_EClPp9yCK4Tgo_P"
                  alt="Portrait of Eleanor Vance, Managing Partner"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 dark:bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] dark:text-white border border-gray-200 dark:border-white/10">
                    Managing Partner
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-[#1A1A1A] dark:text-[#D4C5A9] mb-2">
                    Eleanor Vance
                  </h3>
                  <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm mb-6">
                    Expert in Litigation & Dispute Resolution
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 dark:border-white/10 pt-6 mt-auto">
                  <div className="flex gap-3">
                    <a
                      className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-[#6B7280] dark:text-gray-400 hover:bg-[#D4C5A9] hover:text-[#0D0D0D] dark:hover:bg-[#D4C5A9] dark:hover:text-[#0D0D0D] transition-colors"
                      href="#"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-[#6B7280] dark:text-gray-400 hover:bg-[#D4C5A9] hover:text-[#0D0D0D] dark:hover:bg-[#D4C5A9] dark:hover:text-[#0D0D0D] transition-colors"
                      href="#"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                  <a
                    className="flex items-center gap-2 text-sm font-medium text-[#1A1A1A] dark:text-white hover:text-[#D4C5A9] dark:hover:text-[#D4C5A9] transition-colors group/btn"
                    href="#"
                  >
                    View Profile
                    <span className="w-6 h-6 rounded-full bg-[#D4C5A9] flex items-center justify-center text-[#0D0D0D] group-hover/btn:rotate-45 transition-transform duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white dark:bg-[#161616] rounded-2xl overflow-hidden group border border-gray-200 dark:border-white/5 hover:border-[#D4C5A9]/50 dark:hover:border-[#D4C5A9]/30 transition-all duration-300 flex flex-col h-full">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg-T7ElB6SMWritUl6SL_BDYt5ut1imBvKG0Zb8a2fbLsSNMWGoOGzA6ItvyeS23YUOY5PNuiz5pIqgDh73OJtSB2bOdodu1tLLRd6wrA_lKHFbO0Oz1pcSo5VV4t82czQLOV-A540xW8UP2TT_s7_jgj9ATRY0P6zkdxVHNZGU0au-lCRvE-eKuz_BVgeCNq6bfXxxddUtq4iyMqnNnFcLV0TM666lDWaKrRMXTHRt1Zvq3QLBgJuBUbnFCitIpJgu5f_HkXuWxrM"
                  alt="Portrait of Marcus Thorne, Senior Associate"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 dark:bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] dark:text-white border border-gray-200 dark:border-white/10">
                    Senior Associate
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-[#1A1A1A] dark:text-[#D4C5A9] mb-2">
                    Marcus Thorne
                  </h3>
                  <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm mb-6">
                    Focus on Intellectual Property
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 dark:border-white/10 pt-6 mt-auto">
                  <div className="flex gap-3">
                    <a
                      className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-[#6B7280] dark:text-gray-400 hover:bg-[#D4C5A9] hover:text-[#0D0D0D] dark:hover:bg-[#D4C5A9] dark:hover:text-[#0D0D0D] transition-colors"
                      href="#"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-[#6B7280] dark:text-gray-400 hover:bg-[#D4C5A9] hover:text-[#0D0D0D] dark:hover:bg-[#D4C5A9] dark:hover:text-[#0D0D0D] transition-colors"
                      href="#"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                  <a
                    className="flex items-center gap-2 text-sm font-medium text-[#1A1A1A] dark:text-white hover:text-[#D4C5A9] dark:hover:text-[#D4C5A9] transition-colors group/btn"
                    href="#"
                  >
                    View Profile
                    <span className="w-6 h-6 rounded-full bg-[#D4C5A9] flex items-center justify-center text-[#0D0D0D] group-hover/btn:rotate-45 transition-transform duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F5F0] dark:bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="flex flex-col space-y-8 lg:space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight tracking-tight text-gray-900 dark:text-white">
                  &quot;What Sets Us Apart?&quot;
                </h2>
                <p className="text-gray-600 dark:text-[#A1A1A1] text-lg leading-relaxed max-w-lg">
                  Experience unmatched expertise, personalized solutions, and a
                  commitment to justice that makes NexaLaw your trusted legal
                  partner.
                </p>
              </div>
              <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy6b5MGCmlwWBSy6vv1kKQXnkrrlXEDwWjvoYjdBu1FypbDxJ9BGdIsl3Uo61PNpe7Ftbed-KthYowjS74plyromlT-T-wytqUUgrb_mos0XtLvRmGg9dTvL07fYbfRqZBpldzsuC2Yi9atEC8iYY9Xui0MCI_17wWrXLfXpCYY7yQDb9_fluMDyq9Llvo-LrTl8SAqmoqRq4KyFxaB2LW5mf-dp-0vuBC70s2QocKk_jzEt-B4F5ulQFyjnTvFRLYYDrB_e-kbzCu"
                  alt="Team of professional lawyers discussing legal strategy"
                  fill
                  className="object-cover rounded-2xl filter brightness-90 hover:brightness-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none rounded-2xl"></div>
              </div>
            </div>
            <div className="flex flex-col space-y-4 pt-4 lg:pt-12">
              {/* Feature 1 */}
              <div className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-[#333333] bg-white dark:bg-[#1A1A1A] transition-all duration-300 hover:border-[#D4C5A8]/50">
                <div className="p-6 flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg border border-[#D4C5A8]/30 flex items-center justify-center text-[#D4C5A8] bg-[#D4C5A8]/5 dark:bg-transparent">
                      <Brain className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-medium mb-2 group-hover:text-[#D4C5A8] transition-colors">
                      Personalized Strategy
                    </h3>
                    <p className="text-gray-600 dark:text-[#A1A1A1] text-sm leading-relaxed">
                      We craft tailored legal strategies that align perfectly
                      with your unique objectives, ensuring every move counts.
                    </p>
                  </div>
                  <div className="hidden md:block absolute -right-6 -top-6 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform rotate-12">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTixdJD53mRC05fKevEvMMk0bWcbyLK4Imt3bYXji2o5HvRl9TH6IeKx5Mdld4dBQwB0lK7r9tGTYETYdVuuAvsjX_XRG5KUpZD4olDaSzLYhy_E6J2z8jCmES-38-RiZUdH8jJxC9x8eerIjYeiq5gTXW1yJu8MkV6FBKZa43a4tUOUve-YahlcpKMTaBO1V0RuQVqZ-3IXbfIS8YjPblgisMKE_V_dJ9KiwXbUQM-mDfiR5XIvJmQqURJE1NfNoWw4YJMgLNwH5r"
                      alt="Legal abstract"
                      fill
                      className="object-cover rounded-lg shadow-lg border border-[#D4C5A8]/20"
                    />
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-[#333333] bg-white dark:bg-[#1A1A1A] transition-all duration-300 hover:border-[#D4C5A8]/50 hover:bg-gray-50 dark:hover:bg-[#222]">
                <div className="p-6 flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg border border-gray-300 dark:border-[#333333] group-hover:border-[#D4C5A8]/50 flex items-center justify-center text-gray-400 dark:text-gray-500 group-hover:text-[#D4C5A8] transition-colors">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-medium group-hover:text-[#D4C5A8] transition-colors">
                      Transparent Communication
                    </h3>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-[#333333] bg-white dark:bg-[#1A1A1A] transition-all duration-300 hover:border-[#D4C5A8]/50 hover:bg-gray-50 dark:hover:bg-[#222]">
                <div className="p-6 flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg border border-gray-300 dark:border-[#333333] group-hover:border-[#D4C5A8]/50 flex items-center justify-center text-gray-400 dark:text-gray-500 group-hover:text-[#D4C5A8] transition-colors">
                      <Trophy className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-medium group-hover:text-[#D4C5A8] transition-colors">
                      Proven Success
                    </h3>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-[#333333] bg-white dark:bg-[#1A1A1A] transition-all duration-300 hover:border-[#D4C5A8]/50 hover:bg-gray-50 dark:hover:bg-[#222]">
                <div className="p-6 flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg border border-gray-300 dark:border-[#333333] group-hover:border-[#D4C5A8]/50 flex items-center justify-center text-gray-400 dark:text-gray-500 group-hover:text-[#D4C5A8] transition-colors">
                      <Cpu className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-medium group-hover:text-[#D4C5A8] transition-colors">
                      Tech-Driven Approach
                    </h3>
                  </div>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-[#333333] bg-white dark:bg-[#1A1A1A] transition-all duration-300 hover:border-[#D4C5A8]/50 hover:bg-gray-50 dark:hover:bg-[#222]">
                <div className="p-6 flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg border border-gray-300 dark:border-[#333333] group-hover:border-[#D4C5A8]/50 flex items-center justify-center text-gray-400 dark:text-gray-500 group-hover:text-[#D4C5A8] transition-colors">
                      <Users className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-medium group-hover:text-[#D4C5A8] transition-colors">
                      Client-Centered Focus
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Button Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F5F3EF] dark:bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-4 px-8 py-4 rounded-full bg-[#D4C5A9] text-[#0A0A0A] font-medium hover:bg-[#D4C5A9]/90 transition-all duration-300 hover:scale-105"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

