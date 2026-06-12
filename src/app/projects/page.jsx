"use client";

import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function Projects() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Sincronización del modo claro y oscuro en el HTML raíz
  useEffect(() => {
    const root = window.document.documentElement;
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
  ];

  // Datos de tus proyectos reales y retos para poblar la vista
  const myProjects = [
    {
      name: "React Uses Section",
      content:
        "A highly modular React component built to organize workstation assets and tools dynamically using structured lists, custom CSS, and strict PropType validations.",
      logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png", // Icono de React
      link: "https://github.com",
    },
    {
      name: "Sourdough Fermentation Tracker",
      content:
        "An analytical application designed to map and monitor multi-day sourdough schedules, tracking room hydration, timers, and baking temperatures.",
      logo: "https://cdn-icons-png.flaticon.com/512/992/992747.png", // Icono de Pan/Baking
      link: "https://github.com",
    },
    {
      name: "Financial Portfolio Optimizer",
      content:
        "Leveraged advanced spreadsheet models and data structure principles to evaluate real estate scenarios and capital down payments efficiently.",
      logo: "https://cdn-icons-png.flaticon.com/512/2761/2761118.png", // Icono de Finanzas
      link: "https://github.com",
    },
    {
      name: "Smart Home Security Module",
      content:
        "Integrated API automation scripts to interact with digital locks, configuring secure remote validation systems for residential environments.",
      logo: "https://cdn-icons-png.flaticon.com/512/2544/2544087.png", // Icono de Smart Lock
      link: "https://github.com",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-slate-900 dark:text-gray-100 flex flex-col justify-between transition-colors duration-300">
      {/* HEADER GLOBAL */}
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

      {/* CONTENIDO PRINCIPAL: CUADRÍCULA DE PROYECTOS */}
      <main className="max-w-6xl w-full mx-auto p-6 flex-grow my-6">
        <div className="flex flex-col gap-3 mb-10 max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight">Projects</h1>
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
            Things I&apos;ve built to bridge the gap between financial analysis, operational data, and modern frontend
            software architecture.
          </p>
        </div>

        {/* CONTENEDOR GRID RESPONSIVO CON INYECCIÓN DE ESTILOS PARA EL COMPONENTE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 [&>.project-card]:bg-gray-50 [&>.project-card]:dark:bg-slate-800/60 [&>.project-card]:border [&>.project-card]:border-gray-100 [&>.project-card]:dark:border-slate-800 [&>.project-card]:p-6 [&>.project-card]:rounded-2xl [&>.project-card]:flex [&>.project-card]:flex-col [&>.project-card]:justify-between [&>.project-card]:transition-colors [&>.project-card]:duration-200 [&>.project-card_h2]:text-lg [&>.project-card_h2]:font-bold [&>.project-card_h2]:mt-3 [&>.project-card_h2]:text-gray-900 [&>.project-card_h2]:dark:text-white [&>.project-card_p]:text-sm [&>.project-card_p]:text-gray-600 [&>.project-card_p]:dark:text-gray-200 [&>.project-card_p]:my-3 [&>.project-card_a]:text-xs [&>.project-card_a]:font-semibold [&>.project-card_a]:text-blue-500 [&>.project-card_a]:hover:underline [&>.project-card_img.project-card-logo]:w-10 [&>.project-card_img.project-card-logo]:h-10">
          {myProjects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              content={project.content}
              logo={project.logo}
              link={project.link}
            />
          ))}
        </div>
      </main>

      {/* FOOTER NAVBAR GLOBAL */}
      <Footer links={footerNavLinks} />
    </div>
  );
}
