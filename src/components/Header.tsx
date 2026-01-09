"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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
    } else {
      document.body.style.overflow = "unset";
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
    { href: "/teams", label: "Teams" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/what-sets-us", label: "What Sets Us Apart" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav className="w-full px-6 py-6 md:px-12 flex justify-between items-center bg-transparent relative z-20">
      <Link
        href="/"
        className="text-2xl font-display font-semibold text-gray-900 dark:text-[#D4C5A9] tracking-wide hover:opacity-80 transition-opacity"
      >
        NexaLaw
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-700 dark:text-gray-300">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:text-[#D4C5A9] transition-colors ${
              isActive(link.href) ? "text-[#D4C5A9] dark:text-[#D4C5A9]" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="w-10 h-10 rounded-full bg-[#D4C5A9] flex items-center justify-center text-[#0A0A0A] hover:opacity-90 transition md:hidden z-30"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#F5F3EF] dark:bg-[#0A0A0A] z-20 md:hidden">
          <div className="flex flex-col h-full pt-24 px-6">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-2xl font-display font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-[#D4C5A9]"
                      : "text-gray-900 dark:text-gray-300 hover:text-[#D4C5A9]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}

