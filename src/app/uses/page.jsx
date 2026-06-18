"use client";

import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";

export default function Uses() {
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
  { title: "Home", url: "/portfolio/" },
  { title: "About", url: "/portfolio/about" },
  { title: "Projects", url: "/portfolio/projects" },
  { title: "Uses", url: "/portfolio/uses" },
];

  const usesItems = [
    {
      groupName: "Workstation Architecture",
      items: [
        {
          title: "Custom Gaming & Dev PC",
          description:
            "Engineered for high-throughput multitasking, software compiling, and low-latency rendering execution.",
        },
        {
          title: "Razer High-DPI Precision Mouse",
          description:
            "Ergonomic tracking engine configured for high-accuracy viewport panning and IDE script navigation.",
        },
      ],
    },
    {
      groupName: "Development Suite",
      items: [
        {
          title: "Cursor AI & VS Code",
          description:
            "Core scripting environments optimized with strict linting rules for React, Python pipelines, and Tailwind structures.",
        },
        {
          title: "GitHub & Git Ecosystem",
          description:
            "Centralized version control system managing multi-branch deployment workflows, hotfixes, and atomic sprint commits.",
        },
      ],
    },
    {
      groupName: "Design & Analysis Systems",
      items: [
        {
          title: "Figma UI Engineering",
          description:
            "Vector prototyping tool used to measure grid constraints, viewport layouts, and pixel-perfect design handoffs.",
        },
        {
          title: "Microsoft Excel (Expert Certified)",
          description:
            "Advanced computational sheets utilized for designing recursive financial cashflow models, formulas, and structural projections.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#030712] dark:text-slate-100 flex flex-col justify-between transition-colors duration-500 antialiased relative overflow-hidden">

      {/* EFECTOS DE LUZ AMBIENTAL EN EL FONDO (Renderizado condicional limpio) */}
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
              Uses
            </h1>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
          </div>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal mt-2">
            Software, hardware tools, and setup assets I rely on daily to manage development sprints, financial models, and everything in between.
          </p>
        </div>

        {/* GRUPOS DE USES */}
        <div className="flex flex-col gap-12 max-w-3xl">
          {usesItems.map((group, gIndex) => (
            <div key={gIndex} className="relative border-l border-slate-200 dark:border-slate-800 pl-6 ml-2 group">
              {/* Indicador de nodo interactivo ajustado */}
              <div className="absolute -left-[4.5px] top-2 h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700 border border-white dark:border-[#030712] group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors duration-300" />

              <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {group.groupName}
              </h2>

              <div className="flex flex-col gap-8">
                {group.items.map((item, iIndex) => (
                  <div key={iIndex} className="flex flex-col gap-1.5 group/item">
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed transition-colors duration-200">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer links={footerNavLinks} />
    </div>
  );
}
