"use client";

import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import SkillsWidget from "../components/SkillsWidget/SkillsWidget";
import WorkWidget from "../components/WorkWidget/WorkWidget";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const projects = [
    {
      logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
      name: "React Uses Section & Frameworks",
      content:
        "A highly modular React interface built to organize workstation assets and software dependencies dynamically using strict state management and responsive Tailwind constraints.",
      link: "https://github.com",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/992/992747.png",
      name: "Sourdough Fermentation Tracker",
      content:
        "An analytical application designed to map and monitor multi-day sourdough schedules, tracking room hydration scales, bulk fermentation timers, and baking physics.",
      link: "https://github.com",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/2761/2761118.png",
      name: "Financial Portfolio Optimizer",
      content:
        "Leveraged advanced spreadsheet models, data structures, and statistical principles to evaluate real estate scenarios and capital down payment distributions.",
      link: "https://github.com",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/2544/2544087.png",
      name: "Smart Home Security Module",
      content:
        "Integrated API automation scripts to interact with digital lock frameworks, configuring secure remote validation structures and status checking routines.",
      link: "https://github.com",
    },
  ];

  const experiences = [
    {
      logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      organization: "BYU-Pathway Worldwide",
      jobTitle: "Software Support",
      startYear: 2025,
      endYear: null,
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/2761/2761118.png",
      organization: "Morgan Stanley",
      jobTitle: "Financial Analyst",
      startYear: 2024,
      endYear: 2025,
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
      organization: "Pattern",
      jobTitle: "Pricing Analyst (Intern)",
      startYear: 2023,
      endYear: 2024,
    },
  ];

  const skills = [
    { icon: "https://cdn-icons-png.flaticon.com/512/1260/1260667.png", name: "React / Next.js", proficiency: 90 },
    { icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png", name: "Tailwind CSS", proficiency: 85 },
    { icon: "https://cdn-icons-png.flaticon.com/512/2761/2761118.png", name: "SQL & Power BI", proficiency: 80 },
    { icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", name: "Python & Data Science", proficiency: 75 },
  ];

  const footerNavLinks = [
    { title: "Home", url: "/portfolio/" },
    { title: "About", url: "/portfolio/about" },
    { title: "Projects", url: "/portfolio/projects" },
    { title: "Uses", url: "/portfolio/uses" },
  ];

  return (
    // Base limpia: Blanco puro en Light y Azul Oscuro profundo (#030712) en Dark
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#030712] dark:text-slate-100 transition-colors duration-500 flex flex-col justify-between antialiased relative overflow-hidden">
      {/* Luces de fondo sutiles: Solo se renderizan en modo oscuro para preservar el fondo blanco limpio del modo claro */}
      {isDarkMode && (
        <>
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
          <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[150px] pointer-events-none" />
        </>
      )}

      {/* GLOBAL HEADER */}
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

      {/* MAIN TWO-COLUMN LAYOUT */}
      <main className="max-w-6xl w-full mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 flex-grow items-start relative z-10">
        {/* COLUMNA IZQUIERDA: HERO + PROYECTOS */}
        <div className="md:col-span-2 flex flex-col gap-12">
          {/* HERO SECTION */}
          <section className="flex flex-col gap-4">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.15] text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-slate-200 dark:to-slate-400">
              Bridging{" "}
              <span className="text-blue-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-400">
                corporate finance
              </span>{" "}
              with agile{" "}
              <span className="text-indigo-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-indigo-400 dark:to-purple-400">
                software engineering
              </span>
              .
            </h1>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal max-w-2xl">
              I am a software engineer and business development professional specializing in translating dense
              operational workflows into clean, interactive frontend architectures and data-driven solutions.
            </p>
          </section>

          {/* SECCIÓN DE PROYECTOS */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-1 border-b border-slate-200 dark:border-slate-900/60 pb-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Featured Engineering Sprints
              </h2>
            </div>

            {/* Reemplazamos los selectores globales rotos envolviendo directamente las tarjetas con estilos nativos heredables */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-5
              [&>div]:bg-slate-50 [&>div]:dark:bg-slate-900/30
              [&>div]:border [&>div]:border-slate-200/60 [&>div]:dark:border-slate-800/50
              [&>div]:rounded-2xl [&>div]:p-5 [&>div]:transition-all [&>div]:duration-300
              [&>div]:hover:-translate-y-1 [&>div]:hover:border-blue-500/40 [&>div]:hover:shadow-lg [&>div]:hover:shadow-blue-500/5
              [&_h2]:text-sm [&_h2]:font-bold [&_h2]:mt-3 [&_h2]:text-slate-900 [&_h2]:dark:text-white
              [&_p]:text-xs [&_p]:text-slate-500 [&_p]:dark:text-slate-400 [&_p]:leading-relaxed
              [&_a]:text-xs [&_a]:font-bold [&_a]:text-blue-500
              [&_img]:w-8 [&_img]:h-8"
            >
              {projects.map((proj, index) => (
                <div key={index}>
                  <ProjectCard logo={proj.logo} name={proj.name} content={proj.content} link={proj.link} />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* COLUMNA DERECHA: WIDGETS */}
        <aside className="flex flex-col gap-6 w-full md:mt-2">
          {/* Work Experience Card */}
          <div className="bg-slate-50 dark:bg-slate-900/20 border border-slate-200/60 dark:border-slate-800/50 rounded-2xl p-6 transition-colors duration-300">
            <WorkWidget
              title="Work Experience"
              content="My active business and engineering tracks."
              experiences={experiences}
            />
          </div>

          {/* Technical Stack Card */}
          <div className="bg-slate-50 dark:bg-slate-900/20 border border-slate-200/60 dark:border-slate-800/50 rounded-2xl p-6 transition-colors duration-300">
            <SkillsWidget
              title="Technical & Analytical Stack"
              content="Frameworks and database engines I leverage daily."
              skills={skills}
            />
          </div>
        </aside>
      </main>

      <Footer links={footerNavLinks} />
    </div>
  );
}
