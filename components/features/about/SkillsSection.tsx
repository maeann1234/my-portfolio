"use client";

import { useState } from "react";

const skillsData = {
  "Frontend": [
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Figma",
    "HTML5 / CSS3"
  ],
  "Backend": [
    "C# & .NET",
    "Laravel",
    "SQL Server",
    "MySQL",
    "PHP",
    "RESTful APIs"
  ]
};

type SkillCategory = keyof typeof skillsData;

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<SkillCategory>("Frontend");

  return (
    <section className="py-20 bg-[#faf9f6] dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        <h2 className="text-[5.5rem] md:text-[6.5rem] font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[0.9] mb-12 transition-colors">
          My Skills.
        </h2>

        <div className="flex flex-wrap gap-4 mb-10 pb-4 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
          {(Object.keys(skillsData) as SkillCategory[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-8 py-3 text-base font-bold transition-all duration-200 ${
                activeTab === tab
                  ? "bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 shadow-md scale-105"
                  : "bg-white dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div 
          key={activeTab} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
        >
          {skillsData[activeTab].map((skill) => (
            <div 
              key={skill} 
              className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:shadow-lg dark:hover:shadow-zinc-900/20 transition-all duration-300"
            >
              <p className="text-xl font-bold text-zinc-950 dark:text-zinc-50 transition-colors">
                {skill}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}