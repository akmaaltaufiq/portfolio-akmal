"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";

const techLogos: string[] = [
  "/techstack/php.svg",
  "/techstack/react.svg",
  "/techstack/nextjs.svg",
  "/techstack/nodejs.svg",
  "/techstack/python.svg",
  "/techstack/tailwind.svg",
  "/techstack/mysql.svg",
  "/techstack/postgresql-logo.svg",
  "/techstack/html.svg",
  "/techstack/css.svg",
  "/techstack/javascript.svg",
  "/techstack/typescript.svg",
];

const TechStackMarquee: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDrag = (x: number) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(x - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const moveDrag = (x: number) => {
    if (!isDragging || !scrollRef.current) return;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => setIsDragging(false);

  // Duplikasi hanya 2x agar panjang konten = 200% (cocok translateX(-50%))
  const loopLogos = techLogos.concat(techLogos);

  return (
    <div
      ref={scrollRef}
      className={`relative w-full h-24 my-6 overflow-x-scroll whitespace-nowrap cursor-grab hide-scrollbar ${
        isDragging ? "cursor-grabbing" : ""
      }`}
      onMouseDown={(e) => startDrag(e.pageX)}
      onMouseMove={(e) => moveDrag(e.pageX)}
      onMouseLeave={stopDrag}
      onMouseUp={stopDrag}
      onTouchStart={(e) => startDrag(e.touches[0].pageX)}
      onTouchMove={(e) => moveDrag(e.touches[0].pageX)}
      onTouchEnd={stopDrag}
    >
      <div
        className="flex min-w-max space-x-12 pr-12 animate-marquee"
        style={{ animationPlayState: isDragging ? "paused" : "running" }}
      >
        {loopLogos.map((logo, idx) => (
          <Image
            key={idx}
            src={logo}
            alt="tech logo"
            width={60}
            height={60}
            className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            priority
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
          will-change: transform;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TechStackMarquee;
