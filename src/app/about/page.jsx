"use client";

import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";

export default function About() {
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

  const timelineExperience = [
    {
      role: "Software Support",
      company: "BYU-Pathway Worldwide",
      location: "Salt Lake City, UT",
      period: "Mar 2025 - Present",
      description: [
        "Provide technical and academic support to students and professors navigating the platform.",
        "Utilize internal CRM tools and logic-based workflows to resolve support cases efficiently.",
        "Identify technical issues, collaborating with IT teams to improve user experience.",
      ],
      tag: "Tech",
    },
    {
      role: "Financial Analyst",
      company: "Morgan Stanley",
      location: "Salt Lake City, UT",
      period: "Feb 2024 - Mar 2025",
      description: [
        "Supported internal cost analysis and pricing models for client-facing investment strategies.",
        "Analyzed operational and financial data to generate key corporate insights.",
        "Collaborated across departments to streamline reporting via SQL and Excel automation.",
      ],
      tag: "Finance",
    },
    {
      role: "Pricing Analyst (Intern)",
      company: "Pattern",
      location: "Lehi, UT",
      period: "Jan 2023 - Jan 2024",
      description: [
        "Led financial forecasting projects, presenting actionable risk mitigation strategies.",
        "Innovated and implemented dynamic pricing models to maximize profitability.",
        "Collaborated on financial reports and analytics to drive strategic decisions.",
      ],
      tag: "Strategy",
    },
    {
      role: "Business Development Consultant (Intern)",
      company: "Lendio",
      location: "Lehi, UT",
      period: "Aug 2022 - Dec 2022",
      description: [
        "Conducted competitive analysis for high-impact product and service enhancements.",
        "Drove client segmentation strategy, increasing targeted engagements and revenue.",
        "Negotiated and optimized business contracts to enhance partnership value.",
      ],
      tag: "Business",
    },
  ];

  return (
    // Base consistente: bg-white en claro y bg-[#030712] en oscuro
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

      {/* CONTENT GRID */}
      <main className="max-w-6xl w-full mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12 flex-grow relative z-10 items-start">
        {/* COLUMNA IZQUIERDA: BIOGRAFÍA, TIMELINE E HISTORIAL */}
        <div className="md:col-span-2 flex flex-col gap-12">
          {/* INTRO BIOGRAFÍA CON GRADIENTES */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-slate-200 dark:to-slate-400">
                About Me
              </h1>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
            </div>

            <div className="text-base text-slate-600 dark:text-slate-400 flex flex-col gap-5 leading-relaxed font-normal">
              <p>
                Hi, I&apos;m <span className="font-semibold text-slate-950 dark:text-white">Nick Gonzalez</span>. I am a
                strategic and analytical professional holding a Bachelor of Science in{" "}
                <span className="text-blue-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-400 font-semibold">
                  Strategic Management
                </span>{" "}
                (with a Minor in Statistics) from the BYU Marriott School of Business, alongside an ongoing Bachelor of
                Science in{" "}
                <span className="text-indigo-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-indigo-400 dark:to-purple-400 font-semibold">
                  Software Engineering
                </span>{" "}
                from Ensign College.
              </p>
              <p>
                My professional path maps the intersection of data frameworks, corporate financial architectures, and
                modern engineering design. Having engineered automation models for operations at{" "}
                <span className="font-semibold text-slate-950 dark:text-white">Morgan Stanley</span> and managed
                high-throughput systems diagnostics, I build scalable solutions leveraging tools like React, Next.js,
                Python, SQL, and AI-driven pair programming architectures.
              </p>
            </div>
          </div>

          {/* INTERACTIVE TIMELINE SECTION */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-900/60 pb-4">
              <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">Professional Journey</h2>

              <a
                href="/resume.pdf"
                download="Nick_Gonzalez_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white hover:text-white transition-all duration-300 shadow-sm active:scale-95"
              >
                <span>Download Full Resume</span>
                <span className="text-sm">⬇</span>
              </a>
            </div>

            <div className="relative border-l-2 border-slate-200 dark:border-slate-800/80 ml-4 flex flex-col gap-8">
              {timelineExperience.map((exp, idx) => (
                <div key={idx} className="relative pl-6 group">
                  <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-slate-300 dark:bg-slate-700 dark:border-[#030712] group-hover:bg-blue-500 group-hover:border-blue-500 dark:group-hover:bg-blue-400 dark:group-hover:border-blue-400 transition-colors duration-300" />

                  <div className="flex flex-col gap-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {exp.role}
                        </h3>
                        <span className="text-[10px] px-2 py-0.5 font-bold rounded-md uppercase tracking-wider bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-transparent">
                          {exp.tag}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-slate-400 dark:text-slate-500">{exp.period}</span>
                    </div>

                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {exp.company} — <span className="font-normal italic">{exp.location}</span>
                    </div>

                    <ul className="mt-2 list-disc pl-4 flex flex-col gap-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {exp.description.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PASATIEMPOS (Look grisáceo limpio en light, cristal translúcido en dark) */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              Crafts & Discipline Beyond Code
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-900/20 dark:backdrop-blur-md hover:border-blue-500/40 transition-all duration-300 group">
                <div className="h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                  🍞
                </div>
                <h3 className="font-bold text-sm mt-3 text-slate-900 dark:text-slate-100">
                  Artisanal Sourdough Baking
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                  Mastering structural hydration formulas, wild yeast cultivation schedules, and precise thermal
                  profiling.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-900/20 dark:backdrop-blur-md hover:border-blue-500/40 transition-all duration-300 group">
                <div className="h-10 w-10 rounded-xl bg-red-500/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                  🥩
                </div>
                <h3 className="font-bold text-sm mt-3 text-slate-900 dark:text-slate-100">Meat Science & BBQ Craft</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                  Perfecting breakdown physics and thermodynamic control parameters for premium cuts like brisket and
                  chuck roasts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: EDUCACIÓN, SOCIALES Y HERRAMIENTAS */}
        <div className="flex flex-col gap-6 w-full">
          {/* TARJETA DE ACADEMIA / EDUCACIÓN */}
          <div className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-900/20 dark:backdrop-blur-md shadow-sm flex flex-col gap-4">
            <h2 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Education</h2>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                  Apr 2025 - Apr 2026
                </span>
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-tight mt-0.5">
                  B.S. in Software Engineering
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Ensign College</p>
              </div>
              <div className="flex flex-col gap-0.5 border-t border-slate-200/60 dark:border-slate-800/40 pt-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                  Apr 2018 - Apr 2024
                </span>
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-tight mt-0.5">
                  B.S. in Strategic Management
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">BYU - Marriott School of Business</p>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 italic mt-0.5">
                  Minor in Statistics
                </span>
              </div>
            </div>
          </div>

          {/* ENLACES SOCIALES Y CONTACTO */}
          <div className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-900/20 dark:backdrop-blur-md shadow-sm flex flex-col gap-4 sticky top-24">
            <h2 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              Network & Channels
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Open to collaborative full-stack systems engineering, financial tool builds, or automation analytics.
            </p>

            <div className="flex flex-col gap-2.5 mt-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800/60 transition-all duration-200 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-blue-500/40"
              >
                <div className="flex items-center gap-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="GitHub"
                    className="w-4 h-4 object-contain dark:invert"
                  />
                  <span>GitHub Repository</span>
                </div>
                <span className="text-slate-400 text-[10px]">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/nick-gonzalez-115974163"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800/60 transition-all duration-200 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-blue-500/40"
              >
                <div className="flex items-center gap-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt="LinkedIn"
                    className="w-4 h-4 object-contain"
                  />
                  <span>LinkedIn Profile</span>
                </div>
                <span className="text-slate-400 text-[10px]">↗</span>
              </a>

              <a
                href="mailto:nickjg9622@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800/60 transition-all duration-200 text-xs font-semibold text-slate-700 dark:text-slate-300 border-dashed hover:border-blue-500/40"
              >
                <span className="text-sm">✉️</span>
                <span>nickjg9622@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer links={footerNavLinks} />
    </div>
  );
}
