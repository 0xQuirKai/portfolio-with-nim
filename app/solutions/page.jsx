"use client"

import { useState, useEffect } from "react";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { motion } from 'motion/react'
export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [activeTag, setActiveTag] = useState("All");

  useEffect(() => {
    // Fetch projects from JSON file
    fetch("/solutions/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const uniqueTags = [
    "All",
    ...new Set(projects.flatMap((project) => project.tags)),
  ];

  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeTag));

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX + 15, y: e.clientY + 15 });
  };


  const VARIANTS_CONTAINER = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }


  const VARIANTS_SECTION = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  }

  const TRANSITION_SECTION = {
    duration: 0.3,
  }


  // Define colors for different tags
  const tagColors = {
    Web: "bg-yellow-500",
    Go: "bg-blue-500",

  };

  return (

    <motion.div
    className="space-y-24"
          variants={VARIANTS_CONTAINER}
          initial="hidden"
          animate="visible"
    >
      {/* Tabs for filtering */}
      <div className="flex gap-2 mb-4">
        {uniqueTags.map((tag) => (

<button
  key={tag}
  className={`px-3 py-1 rounded-lg cursor-pointer ${
       `${tagColors[tag] || 'bg-zinc-500' } text-white`
  }`}
  onClick={() => setActiveTag(tag)}
>
  {tag}
</button>
        ))}
      </div>
<motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
      {/* Project Cards */}
      <div className="grid gap-4">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 transition hover:bg-zinc-100 dark:hover:bg-zinc-800 relative"
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
            onMouseMove={handleMouseMove}
          >
            {/* Project Header with Name & Tags */}
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <span className="font-bold  text-zinc-900 dark:text-zinc-50">
                  {project.name}
                </span>
                <span className="text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </span>
              </div>

              {/* Tags */}
              <div className="flex gap-1">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-2 py-1 text-xs font-semibold text-white rounded-full ${
                      tagColors[tag] || "bg-gray-500"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Icons */}
            <div className="flex gap-2 justify-end">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <CgWebsite
                  size={18}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition"
                />
              </a>

              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub
                  size={20}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-gray-100 transition"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
      </motion.section>
      {/* Floating Iframe Preview (Only for Hovered Project) */}
      {hoveredProject && (
        <iframe
          src={hoveredProject.link}
          title={hoveredProject.name}
          className="fixed w-80 h-60 rounded-lg shadow-lg border border-zinc-300 dark:border-zinc-700 pointer-events-none z-10"
          style={{ top: `${position.y}px`, left: `${position.x}px` }}
        />
      )}
    </motion.div>
  );
}
