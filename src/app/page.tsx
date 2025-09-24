"use client";

import React, { useState } from "react";
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import TiltedCard from "@/blocks/Components/TiltedCard/TiltedCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectsSection from "@/components/ProjectCard";
import TechStackMarquee from "@/components/TechStackMarquee";
import Image from "next/image";

export default function Home() {
  const [showRole, setShowRole] = useState(false);

  const handleAnimationComplete = () => {
    setShowRole(true);
  };

  return (
    <>
      <main className="flex-grow flex flex-col items-center h-full relative pt-20 overflow-x-hidden">
        <div className="w-full flex justify-center items-center my-4 md:mt-15 text-center font-bold relative px-4 md:px-0">
          <BlurText
            text="Akmal Taufiqurrahman"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="lg:text-7xl md:text-6xl sm:text-4xl text-3xl text-center"
          />
        </div>
        {showRole && (
          <div className="font-bold text-center mt-1 md:mt-3 px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-neon-once">
              Full-Stack Developer
            </h2>
          </div>
        )}
        <style jsx>{`
          @keyframes textAppear {
            0% {
              opacity: 0;
              transform: scale(0.95);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes neonSlideOnce {
            0% {
              background-position: 100% 0;
              filter: drop-shadow(0 0 0 rgba(56, 189, 248, 0))
                drop-shadow(0 0 0 rgba(168, 85, 247, 0));
            }
            50% {
              background-position: 50% 0;
              filter: drop-shadow(0 0 15px rgba(56, 189, 248, 0.6))
                drop-shadow(0 0 25px rgba(168, 85, 247, 0.5));
            }
            100% {
              background-position: 0% 0;
              filter: drop-shadow(0 0 20px rgba(56, 189, 248, 0.8))
                drop-shadow(0 0 35px rgba(168, 85, 247, 0.7));
            }
          }
          @keyframes glowPulse {
            0%,
            100% {
              filter: drop-shadow(0 0 15px rgba(56, 189, 248, 0.6))
                drop-shadow(0 0 25px rgba(168, 85, 247, 0.5));
            }
            50% {
              filter: drop-shadow(0 0 25px rgba(56, 189, 248, 0.8))
                drop-shadow(0 0 40px rgba(236, 72, 153, 0.7));
            }
          }
          .animate-neon-once {
            background-size: 200% 100%;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            animation: textAppear 0.8s ease-out forwards,
              neonSlideOnce 2.5s ease-out 0.8s forwards,
              glowPulse 3s ease-in-out 3.3s infinite;
          }
        `}</style>

        {/* Spacer dari hero ke About Me */}
        <div className="h-32 sm:h-40 md:h-52 lg:h-64"></div>

        {/* About Me Section */}
        <div
          id="about"
          className="flex-grow flex flex-col lg:flex-row items-stretch justify-between w-full max-w-7xl mx-auto mt-16 md:mt-24 px-4 sm:px-6 md:px-8 lg:px-12 gap-8 md:gap-12 relative"
        >
          {/* === Title About Me di tengah === */}
          <BlurText
            text="About Me"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="absolute -top-8 sm:-top-10 md:-top-12 left-1/2 -translate-x-1/2 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center"
          />

          {/* === Mobile: Photo First === */}
          <div className="md:hidden flex flex-col w-full justify-center items-center relative pt-20 mb-8">
            {/* Mobile Photo */}
            <div className="relative mb-8">
              <TiltedCard
                imageSrc="/photos/tiltedcard.svg"
                altText="akmaaltaufiq"
                captionText="Akmal Taufiqurrahman"
                containerHeight="280px"
                containerWidth="220px"
                imageHeight="280px"
                imageWidth="220px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>
          </div>

          {/* === Left : Developer + TechStack === */}
          <div className="flex flex-col w-full lg:w-7/12 items-center lg:items-start space-y-8 md:space-y-10 lg:space-y-12 pt-0 md:pt-24">
            <div className="relative p-4 sm:p-6 w-full rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 custom-corner-border">
              <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl tracking-wide mb-3 text-center lg:text-left">
                DEVELOPER
              </h3>
              <p className="text-gray-400 text-sm sm:text-base md:text-md mt-2 leading-relaxed text-center lg:text-left">
                I&apos;m a 5th-semester Informatics student at UPN Veteran
                Jakarta (GPA 3.90) with strong full-stack development skills. On
                the <strong>front end</strong>, I build responsive, user-focused
                interfaces using HTML, CSS, JavaScript, TypeScript, Tailwind
                CSS, Bootstrap, React.js, and Next.js. For the{" "}
                <strong>back end</strong>, I develop secure, scalable services
                with PHP, Node.js, Express, and PostgreSQL/SQL, leveraging
                frameworks like Laravel and CodeIgniter to deliver end-to-end
                solutions and collaborate effectively on real-world projects.
              </p>
            </div>

            <div className="relative p-4 sm:p-6 w-full rounded-lg custom-corner-border transition-transform duration-300 ease-in-out hover:scale-105">
              <h4 className="text-white font-bold text-lg sm:text-xl md:text-2xl tracking-wide mb-4 text-center lg:text-left">
                Tech Stack
              </h4>
              <TechStackMarquee />
            </div>
          </div>

          {/* === Right : Photo (Tablet & Desktop) === */}
          <div className="hidden md:flex flex-col w-full lg:w-5/12 justify-center items-center relative pt-24">
            {/* Desktop Photo */}
            <div className="hidden lg:flex justify-center items-center translate-x-6 flex-1 min-h-[480px] xl:min-h-[520px]">
              <TiltedCard
                imageSrc="/photos/tiltedcard.svg"
                altText="akmaaltaufiq"
                captionText="Akmal Taufiqurrahman"
                containerHeight="480px"
                containerWidth="400px"
                imageHeight="480px"
                imageWidth="400px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>

            {/* Tablet Photo */}
            <div className="md:flex lg:hidden justify-center items-center relative mb-16">
              <TiltedCard
                imageSrc="/photos/tiltedcard.svg"
                altText="akmaaltaufiq"
                captionText="Akmal Taufiqurrahman"
                containerHeight="360px"
                containerWidth="280px"
                imageHeight="360px"
                imageWidth="280px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>
          </div>
        </div>

        {/* Spacer dari About Me ke Experience */}
        <div className="h-12 sm:h-16 md:h-20 lg:h-28"></div>

        {/* Experience Section */}
        <div
          id="experience"
          className="flex w-full items-center justify-center p-4 md:mt-25 mt-5"
        >
          <BlurText
            text=" My Experience"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center"
          />
        </div>
        <ExperienceTimeline />

        {/* ===== Projects Section ===== */}
        <div className="flex w-full items-center justify-center p-4 md:mt-25 mt-5 font-extrabold">
          <BlurText
            text=" My Projects"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center"
          />
        </div>

        <ProjectsSection />

        {/* Spacer dari Projects ke Contact */}
        <div className="h-12 sm:h-16 md:h-20 lg:h-28"></div>

        {/* Contact Section */}
        <section
          id="contact"
          className="relative flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24"
        >
          {/* Title */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <BlurText
              text="Get In Touch"
              delay={50}
              animateBy="letters"
              direction="top"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold"
            />
          </div>

          {/* Two-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 w-full max-w-5xl">
            {/* Left : Contact + Downloads */}
            <div className="flex flex-col space-y-6 sm:space-y-8 lg:mt-0 overflow-hidden">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                Contact Information
              </h2>

              {/* Social list */}
              <div className="flex flex-col divide-y divide-white/10">
                {[
                  {
                    platform: "Email",
                    href: "mailto:taufikakmal53@gmail.com",
                    iconPath: "/icons/gmail.svg",
                    username: "taufikakmal53@gmail.com",
                  },
                  {
                    platform: "LinkedIn",
                    href: "https://www.linkedin.com/in/akmal-taufiqurrahman-686961285/",
                    iconPath: "/icons/linkedin.svg",
                    username: "Akmal Taufiqurrahman",
                  },
                  {
                    platform: "GitHub",
                    href: "https://github.com/akmaaltaufiq",
                    iconPath: "/icons/github.svg",
                    username: "@akmaaltaufiq",
                  },
                  {
                    platform: "Instagram",
                    href: "https://www.instagram.com/akmaaltaufiq/",
                    iconPath: "/icons/instagram.svg",
                    username: "@akmaaltaufiq",
                  },
                  {
                    platform: "TikTok",
                    href: "https://www.tiktok.com/@akmaaltaufiq",
                    iconPath: "/icons/tiktok.svg",
                    username: "@akmaaltaufiq",
                  },
                ].map((link) => (
                  <a
                    key={link.platform}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-start gap-3 py-3 text-gray-300 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-md"
                  >
                    <Image
                      src={link.iconPath}
                      alt={`${link.platform} icon`}
                      width={24}
                      height={24}
                      className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                    />

                    <span className="text-sm sm:text-base lg:text-lg font-medium break-all">
                      {link.username}
                    </span>
                  </a>
                ))}
              </div>

              {/* Professional downloads */}
              <div className="overflow-hidden">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-6">
                  Professional Information
                </h3>
                <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 px-1">
                  <a
                    href="/documents/CV_ENG_Updated.pdf"
                    download
                    className="inline-flex items-center justify-center text-center px-4 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black min-h-[44px] transform-gpu"
                  >
                    Download CV
                  </a>
                  <a
                    href="/documents/Portfolio_ENG_Updated.pdf"
                    download
                    className="inline-flex items-center justify-center text-center px-4 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow hover:shadow-pink-500/30 hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-black min-h-[44px] transform-gpu"
                  >
                    Download Portfolio
                  </a>
                </div>
              </div>
            </div>

            {/* Right : Contact Form */}
            <div className="overflow-hidden">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-white">
                Send a Message
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  const f = new FormData(e.currentTarget);
                  // Pastikan semua field menjadi string dan tidak null
                  const name = (f.get("name") || "").toString().trim();
                  const email = (f.get("email") || "").toString().trim();
                  const subject = (f.get("subject") || "").toString().trim();
                  const message = (f.get("message") || "").toString().trim();

                  // Validasi sederhana
                  if (!subject || !message) {
                    alert("Subject dan pesan tidak boleh kosong.");
                    return;
                  }

                  const mailto =
                    `mailto:taufikakmal53@gmail.com` +
                    `?subject=${encodeURIComponent(subject)}` +
                    `&body=${encodeURIComponent(
                      `Name: ${name}\nEmail: ${email}\n\n${message}`
                    )}`;

                  window.location.href = mailto;

                  alert(
                    "Thanks for reaching out! Your email client will open."
                  );
                }}
                className="flex flex-col space-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 sm:py-2.5 bg-[#1a1b1c] border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-shadow focus:shadow-md focus:shadow-cyan-500/30 text-sm sm:text-base min-h-[44px]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 sm:py-2.5 bg-[#1a1b1c] border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-shadow focus:shadow-md focus:shadow-cyan-500/30 text-sm sm:text-base min-h-[44px]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-300 text-sm font-medium mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 sm:py-2.5 bg-[#1a1b1c] border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-shadow focus:shadow-md focus:shadow-cyan-500/30 text-sm sm:text-base min-h-[44px]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 text-sm font-medium mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 sm:py-2.5 bg-[#1a1b1c] border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-shadow focus:shadow-md focus:shadow-cyan-500/30 text-sm sm:text-base min-h-[100px] resize-y"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-3 sm:py-3.5 bg-cyan-600 text-white font-bold rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black transition duration-200 text-sm sm:text-base min-h-[50px]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full overflow-x-hidden flex items-center justify-center p-4 border-t border-white/15 text-white/50 text-xs sm:text-sm font-light mt-16 sm:mt-20">
        <p className="text-center px-4">
          &copy; {new Date().getFullYear()} akmaaltaufiq. All rights reserved.
        </p>
      </footer>
    </>
  );
}
