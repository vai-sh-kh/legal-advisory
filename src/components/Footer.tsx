"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] pt-24 pb-12 px-6 md:px-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-display text-[#D4C5A9] mb-6">
              NexaLaw
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              With over a decade of expertise and more than $200 million in
              successful transactions, we deliver unmatched, top-tier legal
              solutions tailored to your needs.
            </p>
            <div className="flex gap-4">
              <a
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition"
                href="#"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition"
                href="#"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition"
                href="#"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-[#D4C5A9] font-display text-lg mb-6">
              Explore
            </h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/our-process"
                  className="hover:text-white transition"
                >
                  Our Process
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#D4C5A9] font-display text-lg mb-6">More</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>
                <Link href="/teams" className="hover:text-white transition">
                  Teams
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="hover:text-white transition"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/what-sets-us"
                  className="hover:text-white transition"
                >
                  What Sets Us Apart
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#D4C5A9] font-display text-lg mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>
                Queens, NY, <br />
                United States
              </li>
              <li>
                <a
                  href="mailto:hello@nexalaw.com"
                  className="hover:text-white transition"
                >
                  hello@nexalaw.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+16465987983"
                  className="hover:text-white transition"
                >
                  +1 646-598-7983
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© Copyright 2024</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gray-400 transition">
              License
            </Link>
            <Link href="#" className="hover:text-gray-400 transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
