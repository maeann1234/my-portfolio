"use client";

import { useState } from "react";

// Simplified to just Frontend and Backend with relevant tech
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
    <section className="py-20 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Header - Added mb-12 to push the buttons down and fix the overlap */}
        <h2 className="text-[5.5rem] md:text-[6.5rem] font-bold tracking-tight text-zinc-950 leading-[0.9] mb-12">
          My Skills.
        </h2>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap gap-4 mb-10 pb-4 border-b border-zinc-200">
          {(Object.keys(skillsData) as SkillCategory[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-8 py-3 text-base font-bold transition-all duration-200 ${
                activeTab === tab
                  ? "bg-zinc-950 text-white shadow-md scale-105"
                  : "bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-400 hover:text-zinc-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid - Added a key based on the activeTab to trigger a re-render animation */}
        <div 
          key={activeTab} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
        >
          {skillsData[activeTab].map((skill) => (
            <div 
              key={skill} 
              className="p-8 rounded-2xl border border-zinc-200 bg-white hover:shadow-lg transition-shadow"
            >
              <p className="text-xl font-bold text-zinc-950">
                {skill}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}