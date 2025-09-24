"use client";

export interface Project {
  id: number;
  number: string;
  title: string;
  role: string;
  tagline?: string;
  descriptionStory: string;
  techstack: string[];
  imageSrc: string;
  liveDemo?: string;
  code?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    number: "01",
    title: "Trade Information System (SIP)",
    role: "Web Developer",
    tagline: "Export Readiness Assessment Tool (ERAT)",
    descriptionStory:
      "Built core features for the Ministry of Trade’s Trade Information System (SIP) during my internship. Developed the Export Readiness Assessment Tool (ERAT) questionnaire and designed the user interface that guides businesses through the export assessment process.",
    techstack: [
      "/techstack/html.svg",
      "/techstack/css.svg",
      "/techstack/javascript.svg",
      "/techstack/php.svg",
      "/techstack/codeigniter.svg",
      "/techstack/bootstrap.svg",
      "/techstack/postgresql-logo.svg",
    ],
    imageSrc: "/proj/SIP.png",
    liveDemo: "https://sip.kemendag.go.id/",
  },
  {
    id: 2,
    number: "02",
    title: "SecureNote Web",
    role: "Full-Stack Developer",
    tagline: "Hybrid Encrypted Messaging",
    descriptionStory:
      "Developed a secure web application allowing users to exchange encrypted messages with confidence. Implemented hybrid encryption using Python and React, integrating a Flask backend and REST API for seamless communication.",
    techstack: [
      "/techstack/html.svg",
      "/techstack/javascript.svg",
      "/techstack/react.svg",
      "/techstack/tailwind.svg",
      "/techstack/python.svg",
    ],
    imageSrc: "/proj/securenote.png",
    code: "https://github.com/akmaaltaufiq/securenote-web",
  },
  {
    id: 3,
    number: "03",
    title: "PhishDetect Web",
    role: "Full-Stack Developer",
    tagline: "Email Phishing Detection System",
    descriptionStory:
      "Implemented a full-stack email phishing detection system using Python and Flask. Integrated an intuitive web interface to classify emails, helping users recognize potential cyber threats efficiently.",
    techstack: [
      "/techstack/html.svg",
      "/techstack/css.svg",
      "/techstack/javascript.svg",
      "/techstack/python.svg",
      "/techstack/flask-logo.svg",
    ],
    imageSrc: "/proj/Phishdetectweb.png",
    code: "https://github.com/akmaaltaufiq/phishdetect-web",
  },
  {
    id: 4,
    number: "04",
    title: "MSAI Bakeshop",
    role: "Frontend Developer",
    tagline: "Brand Website with Bilingual Support",
    descriptionStory:
      "Built a responsive website for MSAI Bakeshop, offering bilingual support for English and Indonesian. Focused on modern UI, intuitive navigation, and cross-device compatibility to enhance user experience.",
    techstack: [
      "/techstack/html.svg",
      "/techstack/css.svg",
      "/techstack/javascript.svg",
      "/techstack/tailwind.svg",
    ],
    imageSrc: "/proj/MSAI.png",
    liveDemo: "https://msai-bakeshop.vercel.app/",
    code: "https://github.com/akmaaltaufiq/msai-bakeshop",
  },
  {
    id: 5,
    number: "05",
    title: "Jahitra",
    role: "Frontend Developer",
    tagline: "Company Profile Website",
    descriptionStory:
      "Designed and developed a clean, modern company profile website. Focused on clear presentation of services, visual appeal, and responsive design for desktop and mobile users.",
    techstack: [
      "/techstack/html.svg",
      "/techstack/css.svg",
      "/techstack/javascript.svg",
    ],
    imageSrc: "/proj/jahitra.png",
    liveDemo: "https://jahitra.vercel.app/",
    code: "https://github.com/akmaaltaufiq/jahitra",
  },
  {
    id: 6,
    number: "06",
    title: "PakarISPA.ID",
    role: "Mobile App Developer",
    tagline: "Expert System for Respiratory Diagnosis",
    descriptionStory:
      "Created an Android application using Java and Android Studio to assist in diagnosing respiratory diseases. Implemented a user-friendly interface and integrated a knowledge base for accurate symptom analysis.",
    techstack: ["/techstack/java.svg", "/techstack/android_studio.svg"],
    imageSrc: "/proj/pakarispa.png",
    code: "https://github.com/Zaynorang/SistemPakarISPA.git",
  },
];
