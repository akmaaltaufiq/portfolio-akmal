"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16"
    >
      <motion.h2
        className="text-4xl md:text-6xl font-extrabold text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      ></motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="group flex flex-col overflow-hidden rounded-xl bg-[#111] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={project.imageSrc}
                  alt={`${project.title} image`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-xl">
                    {project.title}
                  </h3>
                  <span className="text-cyan-400 text-3xl md:text-4xl font-extrabold">
                    {project.number}
                  </span>
                </div>

                {project.tagline && (
                  <p className="text-cyan-300 text-sm">{project.tagline}</p>
                )}

                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {project.descriptionStory}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.techstack.map((icon, idx) => (
                    <Image
                      key={idx}
                      src={icon}
                      alt={`Tech ${idx}`}
                      width={24}
                      height={24}
                    />
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-md bg-cyan-600 hover:bg-cyan-700 text-white transition-colors"
                    >
                      <FiExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-md border border-cyan-600 text-cyan-300 hover:bg-cyan-700/30 transition-colors"
                    >
                      <FiGithub size={16} />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
