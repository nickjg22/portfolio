"use client";

import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";

export default function Uses() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Sincronización del tema oscuro/claro
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Navegación del Footer unificada
  const footerNavLinks = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Projects", url: "/projects" },
    { title: "Uses", url: "/uses" },
  ];

  // Datos de tu Setup y Herramientas
  const usesItems = [
    {
      groupName: "Workstation",
      items: [
        {
          title: "Custom Gaming & Dev PC",
          description: "Built for smooth multitasking, compiling software, and immersive gaming setup capabilities.",
        },
        {
          title: "Razer High-DPI Precision Mouse",
          description: "Provides pixel-perfect tracking for navigating complex codebases and intense gaming matches.",
        },
      ],
    },
    {
      groupName: "Development Tools",
      items: [
        {
          title: "Cursor AI & VS Code",
          description: "My primary environment for writing clean React, TypeScript, and modern Tailwind setups.",
        },
        {
          title: "GitHub & Git",
          description:
            "Crucial for managing my codebase sprints, tracking changes, and collaborating on group project repositories.",
        },
      ],
    },
    {
      groupName: "Design & Management",
      items: [
        {
          title: "Figma",
          description:
            "Used to inspect UI components, layouts, and spacing scales before transforming mockups into real code.",
        },
        {
          title: "Microsoft Excel (Expert Certified)",
          description:
            "My go-to software for managing financial data sheets, models, and deep structured analytical reporting.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-slate-900 dark:text-gray-100 flex flex-col justify-between transition-colors duration-300">
      {/* HEADER */}
      <header className="border-b border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 w-full">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tight">Nick Gonzalez</span>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="px-4 py-2 text-sm font-medium border border-gray-300 dark:border-slate-700 rounded-xl bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-900 dark:text-gray-100 transition-colors duration-200 shadow-sm"
          >
            {isDarkMode ? "To Light Mode" : "To Dark Mode"}
          </button>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL RENDERIZADO DIRECTAMENTE */}
      <main className="max-w-6xl w-full mx-auto p-6 flex-grow my-6">
        <div className="flex flex-col gap-3 mb-10 max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight">Uses</h1>
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
            Software, hardware tools, and setup assets I rely on daily to manage development sprints, financial models,
            and everything in between.
          </p>
        </div>

        {/* LISTADO DE ARTÍCULOS */}
        <div className="flex flex-col gap-10">
          {usesItems.map((group, gIndex) => (
            <div key={gIndex} className="border-l-2 border-gray-200 dark:border-slate-800 pl-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{group.groupName}</h2>
              <div className="flex flex-col gap-6">
                {group.items.map((item, iIndex) => (
                  <div key={iIndex} className="flex flex-col gap-1">
                    <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200">{item.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xl">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <Footer links={footerNavLinks} />
    </div>
  );
}
