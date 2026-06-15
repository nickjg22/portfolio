"use client";

import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function Projects() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const footerNavLinks = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Projects", url: "/projects" },
    { title: "Uses", url: "/uses" },
  ];

  const myProjects = [
    {
      name: "React Uses Section",
      content:
        "A highly modular React component built to organize workstation assets and tools dynamically using structured lists, custom CSS, and strict PropType validations.",
      logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
      link: "https://github.com",
    },
    {
      name: "Sourdough Fermentation Tracker",
      content:
        "An analytical application designed to map and monitor multi-day sourdough schedules, tracking room hydration, timers, and baking temperatures.",
      logo: "https://cdn-icons-png.flaticon.com/512/992/992747.png",
      link: "https://github.com",
    },
    {
      name: "Financial Portfolio Optimizer",
      content:
        "Leveraged advanced spreadsheet models and data structure principles to evaluate real estate scenarios and capital down payments efficiently.",
      logo: "https://cdn-icons-png.flaticon.com/512/2761/2761118.png",
      link: "https://github.com",
    },
    {
      name: "Smart Home Security Module",
      content:
        "Integrated API automation scripts to interact with digital locks, configuring secure remote validation systems for residential environments.",
      logo: "https://cdn-icons-png.flaticon.com/512/2544/2544087.png",
      link: "https://github.com",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#030712] dark:text-slate-100 flex flex-col justify-between transition-colors duration-500 antialiased relative overflow-hidden">
      {/* EFECTOS DE LUZ AMBIENTAL EN EL FONDO */}
      {isDarkMode && (
        <>
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[150px] pointer-events-none" />
        </>
      )}

      {/* HEADER GLOBAL */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#030712]/70 border-b border-slate-200 dark:border-slate-900 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse" />
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
              Nick Gonzalez
            </span>
          </div>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900/60 backdrop-blur-sm transition-all duration-300 shadow-sm flex items-center justify-center text-slate-700 dark:text-slate-300 active:scale-95 text-xs font-bold"
          >
            {isDarkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-6xl w-full mx-auto px-6 py-12 flex-grow relative z-10">
        <div className="flex flex-col gap-3 mb-12 max-w-2xl">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-slate-200 dark:to-slate-400">
              Projects
            </h1>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
          </div>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal mt-2">
            Things I&apos;ve built to bridge the gap between financial analysis, operational data, and modern frontend
            software architecture.
          </p>
        </div>

        {/* PROYECTOS EN GRID CON TEXTO CORREGIDO Y LEGIBLE */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6
          [&_h2]:text-base [&_h2]:font-bold [&_h2]:mt-4 [&_h2]:tracking-tight [&_h2]:text-slate-900 [&_h2]:dark:text-white
          [&_p]:text-xs [&_p]:text-slate-600 [&_p]:dark:text-slate-300 [&_p]:leading-relaxed [&_p]:my-3
          [&_a]:text-xs [&_a]:font-bold [&_a]:text-blue-600 [&_a]:dark:text-blue-400 [&_a]:hover:underline [&_a]:inline-flex [&_a]:items-center [&_a]:gap-1"
        >
          {myProjects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-900/20 dark:backdrop-blur-md border border-slate-200/60 dark:border-slate-800/50 p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:border-blue-500/40 hover:shadow-md hover:-translate-y-0.5"
            >
              <ProjectCard name={project.name} content={project.content} logo={project.logo} link={project.link} />
            </div>
          ))}
        </div>
      </main>

      <Footer links={footerNavLinks} />
    </div>
  );
}
