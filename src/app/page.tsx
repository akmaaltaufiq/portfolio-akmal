// app/page.tsx (or wherever your page file is)

"use client";

import React from "react"; // Removed useState
import Image from "next/image"; // Keep Image for CircularText section

// Import your components and blocks
// Removed GooeyNav import
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import TrueFocus from "@/blocks/TextAnimations/TrueFocus/TrueFocus";
import Threads from "@/blocks/Backgrounds/Threads/Threads";
import CircularText from "@/blocks/TextAnimations/CircularText/CircularText";
// ScrollReveal is imported but not used in the provided code snippet, keep if used elsewhere
// import ScrollReveal from "@/blocks/TextAnimations/ScrollReveal/ScrollReveal";
import TiltedCard from "@/blocks/Components/TiltedCard/TiltedCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillTag from "@/components/SkillTag"; // Assuming SkillTag is in components folder
import ProjectCard from "@/components/ProjectCard"; // Import the new ProjectCard component

// data/projects.ts
// Define your projects array (add your actual project data here)
const projects = [
  {
    id: 1,
    number: "01",
    title: "SecureNote: Web App for Hybrid Encrypted Messaging",
    description: "Full Stack Developer",
    techstack: [
      "/techstack/python.svg",
      "/techstack/react.svg",
      "/techstack/tailwind.svg",
      "/techstack/flask-logo.svg",
      "/techstack/rest-api.svg",
    ],
    imageSrc: "/proj/securenote.png",
    link: "https://github.com/akmaaltaufiq/securenote-web",
  },
  {
    id: 2,
    number: "02",
    title: "MSAI Bakeshop: Brand Website with Bilingual Support",
    description: "Web Developer",
    techstack: [
      "/techstack/html.svg",
      "/techstack/css.svg",
      "/techstack/javascript.svg",
      "/techstack/tailwind.svg",
    ],
    imageSrc: "/proj/MSAI.png",
    link: "https://msai-bakeshop.vercel.app/",
  },
  {
    id: 3,
    number: "03",
    title: "PhishDetect Web: Email Phishing Detection System",
    description: "Full Stack Developer",
    techstack: [
      "/techstack/html.svg",
      "/techstack/css.svg",
      "/techstack/javascript.svg",
      "/techstack/python.svg",
      "/techstack/flask-logo.svg",
    ],
    imageSrc: "/proj/Phishdetectweb.png",
    link: "https://phishdetect-web-production.up.railway.app/",
  },
  {
    id: 4,
    number: "04",
    title: " Jahitra: Company Profile Website",
    description: "Web Developer",
    techstack: [
      // <-- Add paths to tech stack icons for Procrash
      "/techstack/html.svg",
      "/techstack/css.svg",
      "/techstack/javascript.svg",
    ],
    imageSrc: "/proj/projectOne.png",
    link: "https://jahitra.vercel.app/",
  },

  {
    id: 5,
    number: "05",
    title: "PakarISPA.ID: Mobile Expert System for Respiratory Diagnosis",
    description: "Mobile App Developer",
    techstack: ["/techstack/java.svg", "/techstack/android_studio.svg"],
    imageSrc: "/proj/projectTwo.png",
    link: "https://github.com/Zaynorang/SistemPakarISPA.git",
  },
  {
    id: 6,
    number: "06",
    title: "IoT-based Temperature, Humidity & Motion Monitoring System",
    description: "IoT Developer",
    techstack: [
      "/techstack/python.svg",
      "/techstack/postgresql-logo.svg",
      "/techstack/timescaledb.svg",
      "/techstack/c++.svg",
    ],
    imageSrc: "/proj/iot-proj.png",
    link: "https://github.com/Zaynorang/iot-sensor-monitoring",
  },
];

// Removed items constant

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

// Define your skill arrays (you could also move these to a data file if they get long)
const devSkills = [
  "HTML",
  "CSS",
  "Javascript",
  "Tailwind",
  "React",
  "SQL",
  "Next.js",
  "Node.js",
  "Python",
  "Java",
];

const contentSkills = [
  "Figma",
  "Canva",
  "Capcut",
  "Adobe Premiere Pro",
  "Adobe Photoshop",
  "OBS Studio",
  "Microsoft Excel",
];

export default function Home() {
  // Removed mobileMenuOpen state
  return (
    // The cursor: 'none' style is now applied globally in layout.tsx
    // Removed outer div as layout.tsx now handles the main structure
    // <div className="flex flex-col min-h-screen bg-[#101112] font-gilroy"> // Removed this line
    <>
      {" "}
      {/* Added React Fragment wrapper */}
      {/* Main content area */}
      <main className="flex-grow flex flex-col items-center h-full relative pt-20">
        {" "}
        {/* Added padding top to account for fixed header */}
        <div
          style={{
            width: "100%",
            height: "600px",
            position: "absolute",
            bottom: "50",
          }}
          className="hidden md:block"
        >
          <Threads
            amplitude={2.5}
            distance={0}
            enableMouseInteraction={false}
          />
        </div>
        <div
          style={{
            width: "100%",
            height: "600px",
            position: "absolute",
            bottom: "50",
          }}
          className="md:hidden opacity-10"
        >
          <Threads
            amplitude={2.5}
            distance={0}
            enableMouseInteraction={false}
          />
        </div>
        {/* ... other main content elements ... */}
        <div className="w-full flex justify-center items-center my-4 md:mt-15 text-center font-bold relative px-4 md:px-0">
          <BlurText
            text="Akmal Taufiqurrahman"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="lg:text-7xl md:text-5xl text-2xl text-center"
          />
        </div>
        <div className="font-bold text-center opacity-0 animate-fadeIn mt-1 md:mt-3">
          <TrueFocus
            sentence="Developer   Creator"
            manualMode={true}
            blurAmount={5}
            borderColor="cyan"
            animationDuration={0.3}
            pauseBetweenAnimations={1}
          />
        </div>
        {/* style jsx block is fine */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
            animation-delay: 0.8s;
          }
        `}</style>
        <div className="w-full items-center mt-8 mb-4 relative h-[300px] hidden md:block">
          <CircularText
            text="SCROLL-DOWN*SCROLL-DOWN*"
            onHover="slowDown"
            spinDuration={5}
            className="absolute left-45 bottom-10"
          />
          <p className="text-white font-bold text-xl tracking-wide absolute left-44 bottom-9 m-10 transition-all duration-300 hover:scale-150 hover:rotate-6 hover:brightness-125">
            at
          </p>
        </div>
        <div className="flex-grow flex flex-col md:flex-row items-center justify-center w-full md:w-9xl md:mt-35 mt-10 md:space-x-50 space-x-0">
          {/* Tech Stack Section Start */}
          <div className="flex flex-col w-full max-w-lg px-4 md:px-0 mt-10 mb-20 space-y-8">
            {/* DEVELOP Card */}
            {/* custom-corner-border class is kept from previous step */}
            {/* hover:scale-105 on the card wrapper is kept */}
            <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 custom-corner-border">
              <h3 className="text-white font-bold md:text-2xl text-lg tracking-wide mb-3">
                DEVELOPER
              </h3>
              <p className="text-gray-400 md:text-md text-sm mt-2 leading-relaxed mb-5">
                I’m a 4th-semester Informatics student at UPN Veteran Jakarta
                (GPA 3.93) passionate about fullstack web development. I’ve
                built responsive web applications using HTML, CSS, JavaScript,
                Tailwind CSS, and React, and I’m currently deepening my backend
                skills with Node.js, Express, and MySQL. I also have experience
                developing Android apps in Java and building Python-based
                systems. I actively grow through real-world projects, freelance
                work, and team-based collaboration.
              </p>
              <h4 className="text-cyan-300 font-semibold mb-3 text-base">
                Skillset &amp; tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {devSkills.map((skill) => (
                  <SkillTag key={skill} skillName={skill} />
                ))}
              </div>
            </div>

            {/* CONTENTS Card */}
            {/* custom-corner-border class is kept from previous step */}
            {/* hover:scale-105 on the card wrapper is kept */}
            <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 custom-corner-border">
              <h3 className="text-white font-bold md:text-2xl text:lg tracking-wide mb-3">
                CREATOR {/* Updated title based on your code */}
              </h3>
              <p className="text-gray-400 md:text-md text-sm mt-2 leading-relaxed mb-5">
                My journey in content creation has sparked a deep passion for
                building digital solutions that are both functional and
                impactful. Actively involved in student organizations, I’ve
                developed leadership, collaboration, and communication skills.
                Beyond academics, I’ve worked as a freelance digital marketer
                and content creator, sharpening my adaptability, time
                management, and self-initiative through real-world experiences.
              </p>
              <h4 className="text-cyan-300 font-semibold mb-3 text-base">
                Skillset &amp; Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {contentSkills.map((skill) => (
                  <SkillTag key={skill} skillName={skill} />
                ))}
              </div>
            </div>
          </div>
          {/* Tech Stack Section End */}

          {/* About Me Section */}
          <div className="flex flex-col">
            <BlurText
              text="About Me"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="md:text-7xl text-3xl font-extrabold"
            />

            <div className="hidden md:block mt-10 mb-20">
              <TiltedCard
                imageSrc="/photos/tiltedcard.svg"
                altText="akmaaltaufiq"
                captionText="Akmal Taufiqurrahman"
                containerHeight="600px"
                containerWidth="500px"
                imageHeight="600px"
                imageWidth="500px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <p className="bg-transparent px-4 py-2 border-1 border-dashed rounded-lg opacity-50 font-bold m-5 absolute top-5 left-85">
                    Akmal
                  </p>
                }
              />
            </div>

            <div className="md:hidden mt-10 mb-20">
              <TiltedCard
                imageSrc="/photos/tiltedcard.svg"
                altText="akmaaltaufiq"
                captionText="Akmal Taufiqurrahman"
                containerHeight="400px"
                containerWidth="300px"
                imageHeight="400px"
                imageWidth="300px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <p className="bg-transparent px-4 py-2 border-1 border-dashed rounded-lg opacity-50 font-bold m-5 absolute">
                    Akmal
                  </p>
                }
              />
            </div>
          </div>
        </div>
        {/* Experience Section */}
        <div className="flex w-full items-center justify-center p-4 md:mt-25 mt-5">
          <BlurText
            text=" My Experience"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="md:text-7xl text-3xl font-extrabold"
          />
        </div>
        <ExperienceTimeline />
        <div className="flex w-full items-center justify-center p-4 md:mt-25 mt-5 font-extrabold">
          <BlurText
            text=" My Projects"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="md:text-7xl text-3xl font-extrabold"
          />
        </div>
        {/* Projects Section Start */}
        {/* Modified this div to use a grid layout for two columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-[1400px] mx-auto mt-10">
          {/* Now mapping over the imported projects array */}
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        {/* Projects Section End */}
      </main>
      {/* Footer Section - Consider moving this to layout.tsx as well for consistency */}
      <footer className="flex w-full items-center justify-center p-4 border-t border-white/[.15] text-white/50 text-sm font-light mt-20">
        {" "}
        {/* Added margin top */}
        <p>
          &copy; {new Date().getFullYear()} akmaaltaufiq. All rights reserved.
        </p>{" "}
        {/* Updated name */}
      </footer>
    </> // Closed React Fragment wrapper
    // </div> // Removed this closing tag
  );
}
