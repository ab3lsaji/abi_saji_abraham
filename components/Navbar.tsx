// src/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-900 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="#" className="font-mono text-sm font-bold tracking-tight text-white hover:text-teal-400 transition-colors">
          ASA <span className="text-teal-400">_</span>
        </Link>

        <nav className="flex items-center gap-6 sm:gap-8 text-sm font-medium text-slate-400">
          <Link href="#experience" className="hover:text-white transition-colors">
            Experience
          </Link>
          <Link href="#tech" className="hover:text-white transition-colors">
            Skills
          </Link>
          <Link href="#education" className="hover:text-white transition-colors">
            Education
          </Link>
          <Link
            href="#contact"
            className="text-teal-400 hover:text-teal-300 border border-teal-500/20 bg-teal-500/5 px-3 py-1.5 rounded-md transition-colors text-xs"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}