"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "عن زهرة", href: "#about" },
  { label: "الوحدات", href: "#units" },
  { label: "المميزات", href: "#lifestyle" },
  { label: "مرافق زهرة", href: "#amenities" },
  { label: "تواصل معنا", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-[#1B2A3B] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Logo — right side in RTL */}
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-36 overflow-hidden rounded">
            <Image
              src="/assets/images/logo.png"
              alt="زهرة المرشدي"
              fill
              sizes="144px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="cursor-pointer text-white/90 transition-colors hover:text-[#C9A84C] font-semibold text-sm"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Hamburger — right side on mobile */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="القائمة"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#1B2A3B] px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="block w-full py-3 text-right text-white/90 hover:text-[#C9A84C] font-semibold"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
