"use client";

import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";

export default function About() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Control del modo claro/oscuro idéntico al de Home para mantener consistencia
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

      {/* CONTENIDO PRINCIPAL: DISEÑO RESPONSIVO DE DOS COLUMNAS */}
      <main className="max-w-6xl w-full mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-12 my-6 flex-grow">

        {/* COLUMNA IZQUIERDA: BIOGRAFÍA E INTERESES */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <h1 className="text-4xl font-extrabold tracking-tight border-b pb-4 border-gray-100 dark:border-slate-800">
            About Me
          </h1>

          <div className="text-base text-gray-600 dark:text-gray-300 flex flex-col gap-4 leading-relaxed">
            <p>
              Hi, I&apos;m Nick Gonzalez. I hold a bachelor&apos;s degree in **Finance**, which gave me a strong foundation in analytical thinking, data management, and problem-solving. However, my curiosity for building things led me to the world of software development.
            </p>
            <p>
              Currently, I am expanding my skills in **Computer Science**, focusing deeply on modern web technologies like **React, TypeScript, and Python**. I love bridging the gap between numbers and functional code, finding clean software solutions to complex financial and data workflows.
            </p>
            <p>
              Alongside my studies, I work as a **Student Services Representative**, where I develop communication skills and help manage team updates every single morning.
            </p>
          </div>

          {/* SECCIÓN CREATIVA: PASATIEMPOS */}
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              When I&apos;m Not Coding
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-800/50">
                <span className="text-2xl">🍞</span>
                <h3 className="font-semibold text-sm mt-2">Sourdough Baking</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Mastering the science behind wild yeast, fermentation timers, and perfect crust lines.</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-800/50">
                <span className="text-2xl">🥩</span>
                <h3 className="font-semibold text-sm mt-2">Meat & BBQ Craft</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Perfecting cooking techniques for high-quality cuts like brisket and picanha.</p>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: ENLACES SOCIALES Y CONTACTO REAL */}
        <div className="flex flex-col gap-6">
          <div className="p-6 rounded-2xl border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col gap-4">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Connect With Me</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">Feel free to reach out or explore my active code repositories.</p>

            <div className="flex flex-col gap-3 mt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/80 transition-colors duration-200 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="w-5 h-5 object-contain invert dark:invert-0" />
                Follow on GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/nick-gonzalez-115974163/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/80 transition-colors duration-200 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-5 h-5 object-contain" />
                Connect on LinkedIn
              </a>

              <a
                href="mailto:nickjg9622@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/80 transition-colors duration-200 text-sm font-medium text-gray-700 dark:text-gray-300 border-dashed"
              >
                <span className="text-lg">✉️</span>
                nickjg9622@gmail.com
              </a>
            </div>
          </div>
        </div>

      </main>

      {/* FOOTER NAVBAR GLOBAL */}
      <Footer links={footerNavLinks} />
    </div>
  );
}
