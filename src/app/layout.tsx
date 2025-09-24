"use client";

import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import GooeyNav from "@/blocks/Components/GooeyNav/GooeyNav";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { gilroy } from "@/fonts/fonts";

const items = [
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const lenis = useRef<Lenis | null>(null);

  // --- Smooth scroll with Lenis ---
  useEffect(() => {
    const sections = items.map(
      (item) => document.querySelector(item.href) as HTMLElement
    );

    function onScroll() {
      const scrollPos = window.scrollY + 120; // offset dari atas (header sticky)
      let currentIndex = -1;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            currentIndex = index;
          }
        }
      });

      setActiveIndex(currentIndex);
    }

    window.addEventListener("scroll", onScroll);
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- Scrollspy to detect active section ---
  useEffect(() => {
    const heroSection = document.querySelector("main") as HTMLElement;
    const sections = [
      heroSection,
      ...items.map((item) => document.querySelector(item.href) as HTMLElement),
    ];

    function onScroll() {
      let currentIndex = -1;
      sections.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentIndex = index;
          }
        }
      });

      // Hero section tidak masuk nav, kurangi 1
      setActiveIndex(currentIndex > 0 ? currentIndex - 1 : -1);
    }

    window.addEventListener("scroll", onScroll);
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gilroy.variable} antialiased font-gilroy bg-black`}
      >
        {/* Header */}
        <header className="sticky top-0 z-50 flex w-full items-center justify-between px-4 py-2 md:px-8 md:py-3 bg-transparent backdrop-blur-[3px]">
          {/* Logo - scroll ke home tanpa hash */}
          <button
            onClick={() => {
              if (lenis.current) {
                lenis.current.scrollTo(0); // scroll ke atas
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              setActiveIndex(-1); // reset nav highlight

              // reset URL ke root tanpa hash
              const cleanPath = window.location.pathname;
              window.history.replaceState(null, document.title, cleanPath);
            }}
            className="text-white font-bold text-lg md:text-xl m-4 md:m-10 transition-all duration-300 hover:scale-110 hover:rotate-1 hover:brightness-125 tracking-wide"
          >
            akmaaltaufiq
          </button>

          {/* Desktop Nav */}
          <div
            className="hidden md:block font-medium"
            style={{ height: "70px", width: "400px", position: "relative" }}
          >
            <GooeyNav
              key={activeIndex} // untuk trigger re-render highlight
              items={items}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={activeIndex}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-[72px] right-4 z-40 p-4 rounded-2xl bg-black/40 backdrop-blur-md shadow-lg max-h-[70vh] overflow-y-auto">
            <nav className="flex flex-col space-y-3 min-w-[160px]">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-white hover:text-gray-300 px-3 py-1 text-sm font-medium transition-colors"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setActiveIndex(index);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}

        {children}
      </body>
    </html>
  );
}
