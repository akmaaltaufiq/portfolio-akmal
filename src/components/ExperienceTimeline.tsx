"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    title: "Workshop SQL Participant",
    company: "UPN Veteran Jakarta",
    year: "2023",
    description:
      "Learned how to enhance user experience using motion-based storytelling and copywriting strategies for web interfaces.",
    logos: ["/exp_logos/logo_upnvj.svg"],
  },
  {
    id: 2,
    title: "Sales Assistant & Content Creator",
    company: "My Sibling and I Bakeshop",
    year: "2024",
    description:
      "Contributed as a part-time production assistant and content creator, increasing product engagement by 30% through promotional TikTok content.",
    logos: ["/exp_logos/logo_msai.svg"],
  },
  {
    id: 3,
    title: "Digital Marketing Specialist",
    company: "PT TYMY Teknologi Indonesia",
    year: "2024",
    description: `Worked as a freelance digital marketer promoting insurance and streaming products through social media, consistently meeting daily sales targets.`,
    logos: ["/exp_logos/logo_tymy.svg"],
  },
  {
    id: 4,
    title: "Kitchen Steward",
    company: "Seroeni Restaurant",
    year: "2025",
    description:
      "Worked part-time maintaining kitchen hygiene and assisting chefs to ensure efficient, clean, and safe food service operations.",
    logos: ["/exp_logos/logo_seroeni.svg"],
  },
  {
    id: 5,
    title: "Content Creator",
    company: "Tiktok & Youtube",
    year: "2025",
    description: `Created engaging short-form videos and visual content focused on self-development, student life, and tech journeys. Grew an audience of 200+ followers and 80,000+ likes on TikTok, and built a YouTube channel with 1,000+ subscribers.`,
    logos: ["/exp_logos/logo_tiktok.svg", "/exp_logos/logo_youtube.svg"],
  },
  {
    id: 6,
    title: "Public Relations Staff FIK Fair",
    company: "BEM FIK UPN Veteran Jakarta",
    year: "2025",
    description:
      "Responsible for creating communication materials, managing social media engagement, and coordinating with external partners and sponsors.",
    logos: ["/exp_logos/logo_bemfik.svg"],
  },
];

const ExperienceTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.01,
  });

  const dotTop = useTransform(scaleY, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-10"
    >
      {/* Central Timeline Line */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-cyan-600 to-cyan-800 transform -translate-x-1/2"
        style={{ scaleY: scaleY, transformOrigin: "top" }}
      />

      {/* Glowing Dot */}
      <motion.div
        className="absolute left-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] transform -translate-x-1/2"
        style={{ top: dotTop }}
      />

      <div className="relative space-y-24">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-x-20 bg-black rounded-2xl p-6 shadow-lg md:bg-transparent"
          >
            {/* Side 1: Title, Company, Year, Logo */}
            <div
              className={`flex flex-col ${
                index % 2 === 0
                  ? "md:items-end md:text-right"
                  : "md:items-start md:text-left"
              } ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
            >
              <h3 className="md:text-2xl text-xl font-bold text-gray-100">
                {exp.title}
              </h3>
              <p className="text-lg text-cyan-400 mb-1">{exp.company}</p>
              <span
                className="md:text-xl text-md font-regular text-gray-400 mb-2"
                style={{ letterSpacing: "0.4em" }}
              >
                {exp.year}
              </span>

              {/* Logos */}
              <div className="flex flex-row space-x-2 items-center md:my-0 my-5">
                {(Array.isArray(exp.logos) ? exp.logos : [exp.logos]).map(
                  (logo, i) => (
                    <div key={i} className="w-10 h-10 relative">
                      <Image
                        src={logo}
                        alt={`${exp.company} logo ${i + 1}`}
                        fill
                        style={{ objectFit: "contain" }}
                        unoptimized
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Side 2: Description */}
            <div
              className={`text-gray-300 md:text-lg text-md ${
                index % 2 !== 0 ? "md:text-right" : "text-left"
              } ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
            >
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
