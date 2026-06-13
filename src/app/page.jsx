"use client"; // Required in Next.js to enable client-side interactivity and hooks

import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import SkillsWidget from "../components/SkillsWidget/SkillsWidget";
import WorkWidget from "../components/WorkWidget/WorkWidget";
import Footer from "../components/Footer/Footer";

export default function Home() {
  // Estado local para controlar el modo oscuro (por defecto empieza en dark para tu plantilla)
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Cada vez que cambie el estado, añadimos o removemos la clase 'dark' del documento raíz
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // 1. Projects array for dynamic cards rendering
  const projects = [
    {
      logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png", // Clean GitHub Icon placeholder
      name: "Project One",
      content:
        "Development of an interactive portfolio interface using Next.js and Tailwind CSS featuring global theme state management.",
      link: "https://github.com",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      name: "Project Two",
      content:
        "Configuration and resolution of complex Git merge conflicts for highly collaborative group development workflows.",
      link: "https://github.com",
    },
  ];

  // 2. Work history array for the WorkWidget component
  const experiences = [
    {
      logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      organization: "Ensign College",
      jobTitle: "Student Services Representative",
      startYear: 2025,
      endYear: null, // Passing null automatically displays "current" in the UI
    },
  ];

  // 3. Technical expertise data for the SkillsWidget component
  const skills = [
    { icon: "https://cdn-icons-png.flaticon.com/512/1260/1260667.png", name: "React / Next.js", proficiency: 90 },
    { icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png", name: "Tailwind CSS", proficiency: 85 },
    { icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png", name: "Git & GitHub", proficiency: 80 },
  ];

  // 4. Required navigation hyperlinks mapping to the Footer
  const footerNavLinks = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Projects", url: "/projects" },
    { title: "Uses", url: "/uses" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-slate-900 dark:text-gray-100 transition-colors duration-300 flex flex-col justify-between">
      {/* GLOBAL HEADER */}
      <header className="border-b border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tight">Nick Gonzalez</span>

          {/* Reemplazamos el ThemeSwitcher roto por un botón nativo estilizado con Tailwind */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="px-4 py-2 text-sm font-medium border border-gray-200 dark:border-slate-700 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors duration-200 shadow-sm"
          >
            {isDarkMode ? "To Light Mode" : "To Dark Mode"}
          </button>
        </div>
      </header>

      {/* MAIN CONTENT SECTION - RESPONSIVE GRID LAYOUT */}
      <main className="max-w-6xl w-full mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8 my-4 flex-grow">
        {/* Left Column: Projects Feed con inyección de colores de texto */}
        <section className="md:col-span-2 flex flex-col gap-6">
          <h2 className="text-2xl font-bold border-b pb-2 border-gray-100 dark:border-slate-800">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 [&>.project-card_h2]:text-gray-900 [&>.project-card_h2]:dark:text-white [&>.project-card_p]:text-gray-600 [&>.project-card_p]:dark:text-gray-200 [&>.project-card_a]:text-blue-500">
            {projects.map((proj, index) => (
              <ProjectCard key={index} logo={proj.logo} name={proj.name} content={proj.content} link={proj.link} />
            ))}
          </div>
        </section>

        {/* Right Column: Information Widgets con control estricto de texto en modo oscuro */}
        <aside className="flex flex-col gap-6 [&_h2]:text-gray-900 [&_h2]:dark:text-white [&_p]:text-gray-600 [&_p]:dark:text-gray-300 [&_span]:text-gray-900 [&_span]:dark:text-gray-100 [&_.work-widget]:text-gray-900 [&_.work-widget]:dark:text-gray-100">
          <WorkWidget title="Work" content="My professional path and experience." experiences={experiences} />
          <SkillsWidget title="Skills" content="My technical stack and expertise levels." skills={skills} />
        </aside>
      </main>

      {/* FOOTER NAVBAR */}
      <Footer links={footerNavLinks} />
    </div>
  );
}
