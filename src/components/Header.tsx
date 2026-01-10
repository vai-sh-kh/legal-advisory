"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ui/theme-toggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.overflowX = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/our-process", label: "Our Process" },
    { href: "/company", label: "Company" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <>
      <nav className="sticky top-0 w-full px-6 py-6 md:px-12 flex justify-between items-center bg-[#F5F3EF]/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 z-30 2xl:px-60">
        <Link
          href="/"
          className="text-2xl  md:text-4xl font-display font-bold text-gray-900 dark:text-[#D4C5A9] tracking-wide hover:opacity-80 transition-opacity"
        >
          NexaLaw
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-700 dark:text-gray-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-[#D4C5A9] transition-colors ${isActive(link.href) ? "text-[#D4C5A9] dark:text-[#D4C5A9]" : ""
                }`}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#D4C5A9] text-[#0A0A0A] font-medium hover:bg-[#D4C5A9]/90 transition-all duration-300"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          </Link>
        </div>

        {/* Mobile Menu Button - Only show hamburger when menu is closed */}
        {!isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(true)}
            className="w-10 h-10 rounded-full bg-[#D4C5A9] flex items-center justify-center text-[#0A0A0A] hover:opacity-90 transition md:hidden relative z-50"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#F5F3EF] dark:bg-[#0A0A0A] z-40 md:hidden overflow-x-hidden">
          {/* Close Button - Inside overlay for visibility */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#D4C5A9] flex items-center justify-center text-[#0A0A0A] hover:opacity-90 transition z-50"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex flex-col h-full pt-24 px-6">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-2xl font-display font-medium transition-colors ${isActive(link.href)
                      ? "text-[#D4C5A9]"
                      : "text-gray-900 dark:text-gray-300 hover:text-[#D4C5A9]"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 mt-4">
                <ThemeToggle />
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#D4C5A9] text-[#0A0A0A] font-medium hover:bg-[#D4C5A9]/90 transition-all duration-300"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
