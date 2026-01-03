"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteContent } from "@/lib/siteContent";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-brand-orange text-brand-black shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.jpeg" 
            alt="El Aula Logo" 
            width={45} 
            height={45}
            className="rounded-lg"
          />
          <div>
            <div className="text-lg font-bold text-brand-black font-display leading-tight">
              {siteContent.navbar.brandName}
            </div>
          </div>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-brand-orange"></span>
          <span className="w-6 h-0.5 bg-brand-orange"></span>
          <span className="w-6 h-0.5 bg-brand-orange"></span>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/about" className="text-brand-black font-semibold hover:text-brand-white hover:bg-brand-black px-3 py-2 rounded transition">
            About
          </Link>
          <Link href="/courses" className="text-brand-black font-semibold hover:text-brand-white hover:bg-brand-black px-3 py-2 rounded transition">
            Courses
          </Link>
          <Link href="/reviews" className="text-brand-black font-semibold hover:text-brand-white hover:bg-brand-black px-3 py-2 rounded transition">
            Reviews
          </Link>
          <Link href="/contact" className="text-brand-black font-semibold hover:text-brand-white hover:bg-brand-black px-3 py-2 rounded transition">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-black border-t border-brand-orange px-4 py-4 space-y-4">
          <Link href="/about" className="block hover:text-brand-orange transition">
            About
          </Link>
          <Link href="/courses" className="block hover:text-brand-orange transition">
            Courses
          </Link>
          <Link href="/reviews" className="block hover:text-brand-orange transition">
            Reviews
          </Link>
          <Link href="/contact" className="block hover:text-brand-orange transition">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
