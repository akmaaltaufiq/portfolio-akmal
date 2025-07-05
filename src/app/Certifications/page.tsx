"use client";

import React from "react";
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import RollingGallery from "@/blocks/Components/RollingGallery/RollingGallery";
import FallingText from "@/blocks/TextAnimations/FallingText/FallingText";
import Threads from "@/blocks/Backgrounds/Threads/Threads";
import AwardsAndCertifications from "./AwardsAndCertifications";

const handleAnimationComplete = () => {
  console.log("Certifications page animation completed!");
};

const certificationsData = [
  {
    entryNumber: "01",
    title: "Responsive Web Design Developer",
    award: "freeCodeCamp — June 2025",
    description:
      "Learn and practice over 300 hours of HTML, CSS, Flexbox, Grid, and responsive design principles. Build real-world projects like landing pages, survey forms, and technical documentation. ",
    imageSrc: "/certifications/web.png",
    trophyType: "participant",
  },
  {
    entryNumber: "02",
    title: "Front-End Development Libraries",
    award: "freeCodeCamp — June 2025",
    description:
      "Explore modern front-end libraries like React.js, Redux, Bootstrap, and jQuery. Create component-based Single Page Applications (SPAs) and state management.",
    imageSrc: "/certifications/FrontEnd.png",
    trophyType: "participant",
  },
  {
    entryNumber: "03",
    title: "IT Specialist: Data Analytics",
    award: "Certiport — December 2024",
    description:
      "Official international certification from Certiport on the basics of data analytics, including spreadsheet data processing, basic visualization, and interpretation of analysis results.",
    imageSrc: "/certifications/data_analytics.jpg",
    trophyType: "special",
  },
  {
    entryNumber: "04",
    title: "Promotion Partner",
    award: "2nd Place - TYMY, December 2024",
    description:
      "Achieved 2nd place in the Top Achievers Promotion Partner 2024 award, demonstrating strong performance executed personalized online marketing strategies in a short time frame.",
    imageSrc: "/certifications/promotion.jpg",
    trophyType: "second",
  },
  {
    entryNumber: "05",
    title: "Workshop SQL",
    award: "BEM-FIK - September 2023",
    description:
      "Learned how to enhance user experience using motion-based storytelling and copywriting strategies for web interfaces.",
    imageSrc: "/certifications/workshop.jpg",
    trophyType: "participant",
  },
  {
    entryNumber: "06",
    title: "21st Century Job Skills (Advanced)",
    award: "Wadhwani Foundation — April 2024",
    description:
      "Advanced soft skills training covering professional communication, team collaboration, decision-making, and critical thinking for 21st century job readiness.",
    imageSrc: "/certifications/employability.jpg",
    trophyType: "special",
  },
  {
    entryNumber: "07",
    title: "Introduction to the Internet of Things (Badge)",
    award: "Cisco via Credly — April 2025",
    description:
      "Understand the basic concepts of IoT, hardware & software architecture, and IoT applications in various industry sectors.",
    imageSrc: "/certifications/iot.jpg",
    trophyType: "participant",
  },
];

export default function Certifications() {
  return (
    <>
      <main className="flex-grow flex flex-col items-center h-full relative pt-20">
        <div
          className="hidden md:block"
          style={{
            width: "100%",
            height: "600px",
            position: "absolute",
            top: "0",
            zIndex: -1,
            opacity: 0.5,
          }}
        >
          <Threads
            amplitude={2.5}
            distance={0}
            enableMouseInteraction={false}
          />
        </div>

        <div className="flex w-full items-center justify-center p-4">
          <BlurText
            text="Certifications & Awards"
            delay={50}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-3xl md:text-7xl font-extrabold text-center"
          />
        </div>

        <RollingGallery autoplay={true} pauseOnHover={false} />

        <div className="flex flex-col w-full max-w-5xl mx-auto p-4 md:p-4 my-10 md:my-20">
          <div className="hidden md:block">
            <FallingText
              text={`Besides being a developer and content creator, I also actively join competitions. It's a great way to work on solving actual problems and meet inspiring people. Here are some certifications and awards I've received:`}
              highlightWords={[
                "competitions",
                "problems",
                "inspiring",
                "certifications",
                "awards",
              ]}
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="2rem"
              mouseConstraintStiffness={0.9}
            />
          </div>

          <div className="md:hidden mb-10">
            <FallingText
              text={`Besides being a developer and content creator, I also actively join competitions. It's a great way to work on solving actual problems and meet inspiring people. Here are some certifications and awards I've received:`}
              highlightWords={[
                "competitions",
                "problems",
                "inspiring",
                "certifications",
                "awards",
              ]}
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="1rem"
              mouseConstraintStiffness={0.9}
            />
          </div>

          <div className="mt-20 md:mt-40">
            {certificationsData.map((entry, index) => (
              <AwardsAndCertifications
                key={index}
                entryNumber={entry.entryNumber}
                title={entry.title}
                award={entry.award}
                description={entry.description}
                imageSrc={entry.imageSrc}
                trophyType={entry.trophyType}
              />
            ))}
          </div>
        </div>
      </main>

      <footer className="flex w-full items-center justify-center p-4 border-t border-white/[.15] text-white/50 text-sm font-light mt-20">
        <p>
          &copy; {new Date().getFullYear()} akmaaltaufiq. All rights reserved.
        </p>
      </footer>
    </>
  );
}
