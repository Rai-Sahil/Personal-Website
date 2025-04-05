"use client"

import { useState } from "react"
import { ChevronRight, Play } from "lucide-react"
import researchData from "@/data/research.json";
import { AccuracyVsPruningGraph, SpeedupComparisonGraph } from "@/components/graph/1";

export function ResearchDropdown() {
  const openData: any = {};
  for (let i = 0; i < researchData.length; i++) {
    openData[researchData[i].id] = false;
  }

  const [isOpen, setIsOpen] = useState(openData);

  const toggleDropdown = (id: string) => {
    setIsOpen((prev: any) => ({ ...prev, [id]: !prev[id] }))
  }

  const [openResearchData, setOpenResearchData] = useState<Record<string, Map<string, boolean>>>(
    Object.fromEntries(researchData.map(research => [research.id, new Map([["abstract", false], ["keyResults", false]])]))
  );

  const data = [
    {
      content: `<div class="px-1 text-base text-[rgb(34,34,34)]">
      <p>AI for Self-Regulated Learning in education:</p>
      <div class="flex justify-center items-top">
        <div class="w-1/2">
          <ul class="list-[circle] pl-9">
            <li>🤖 AI System for SRL</li>
            <li><span>🎓 </span>
              <a href="#" class="text-blue-500 underline hover:underline decoration-blue-500 underline-offset-3 hover:decoration-3 hover:bg-pink-100 hover:text-pink-500 hover:decoration-pink-500 transition-all duration-300">
                Teaching AI provides hints
              </a>
            </li>
            <li>🔄 Personalized learning</li>
            <ul class="list-[square] pl-9">
              <li><span>📚 </span>
                <a href="#" class="text-blue-500 underline hover:underline decoration-blue-500 underline-offset-3 hover:decoration-3 hover:bg-pink-100 hover:text-pink-500 hover:decoration-pink-500 transition-all duration-300">
                  AI records data
                </a>
              </li>
              <li><span>📝 </span>
                <a href="#" class="text-blue-500 underline hover:underline decoration-blue-500 underline-offset-3 hover:decoration-3 hover:bg-pink-100 hover:text-pink-500 hover:decoration-pink-500 transition-all duration-300">
                  Analyzes for conceptual confusion
                </a>
              </li>
            </ul>
          </ul>
        </div>
        <div class="w-1/2">
          <ul class="list-[circle] pl-6">
            <li>🖥️ Used OpenAI API to train the Teaching AI</li>
            <li><span>⚙️ </span>
              <a href="#" class="text-blue-500 underline hover:underline decoration-blue-500 underline-offset-3 hover:decoration-3 hover:bg-pink-100 hover:text-pink-500 hover:decoration-pink-500 transition-all duration-300">
                Created a Node.js (TypeScript) backend
              </a>
            </li>
            <ul class="list-[square] pl-9"><li>🚀 Auto-scaled with Docker & K8</li></ul>
            <li><span>🌐 </span>
              <a href="#" class="text-blue-500 underline hover:underline decoration-blue-500 underline-offset-3 hover:decoration-3 hover:bg-pink-100 hover:text-pink-500 hover:decoration-pink-500 transition-all duration-300">
                Built the UI using React (Typescript)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>`,
    }
  ]

  return (
    <>
      {researchData.map((research) => (
        <div className="relative mt-2" key={research.id}>
          {/* Dropdown Header */}
          <button
            onClick={() => toggleDropdown(research.id)}
            className="bg-[rgba(166,166,166,0.1)] flex items-center justify-between w-full text-gray-500 font-medium hover:shadow-[0px_2px_7px_rgba(0,0,0,0.25)] rounded-md transition-all p-1 duration-300"
          >
            <div className="flex items-center gap-2 px-2 text-left">
              <span className="font-[400]">{research.icon} {research.title}</span>
            </div>
            <div className={`transform transition-transform duration-300 px-2 ${isOpen[research.id] ? "rotate-90" : ""}`}>
              <ChevronRight className="text-gray-400 h-4 w-4" />
            </div>
          </button>

          {/* Dropdown Content */}
          <div className={`bg-[rgba(166,166,166,0.1)] overflow-hidden p-1 transition-all duration-300 rounded-md  ${isOpen[research.id] ? "opacity-100 max-h-screen ease-in-out" : "max-h-0 opacity-0 ease-out"}`}>

            <div className="px-1 py-2">
              <ul className="list-disc ml-5 pl-6">
                <li className="transform transition-all duration-300 hover:translate-x-1">
                  <a
                    href="#"
                    onClick={() => {
                      setOpenResearchData((prev) => {
                        let newState = { ...prev };
                        let researchMap = new Map(prev[research.id]);  // Clone the existing map for this research
                        researchMap.set("abstract", !researchMap.get("abstract")); // Toggle the value
                        newState[research.id] = researchMap; // Update the state for this research
                        return newState;
                      });
                    }}
                    className="flex items-center gap-1 text-blue-500 p-1 transition-colors duration-200"
                  >
                    <div className="flex group items-center gap-2 bg-blue-100 px-2 hover:bg-pink-100 hover:text-pink-500 rounded-xs hover:shadow-[0px_2px_7px_rgba(0,0,0,0.25)]">
                      <span className={`transition-transform duration-300 ${openResearchData[research.id]?.get("abstract") ? "rotate-90" : ""}`}>
                        <Play className="fill-blue-500 h-3 w-3 group-hover:fill-pink-500"></Play>
                      </span>
                      <span>🔥 Abstract</span>
                    </div>
                  </a>
                </li>

                {openResearchData[research.id]?.get("abstract") && (
                  <div className="px-1 mb-3 text-[rgb(34,34,34)]">
                    <div dangerouslySetInnerHTML={{ __html: data[0].content }} />
                  </div>
                )}

                <li className="transform transition-all duration-300 hover:translate-x-1">
                  <a
                    href="#"
                    className="flex items-center gap-1 text-blue-500 p-1 rounded-md transition-colors duration-200"
                    onClick={() => {
                      setOpenResearchData((prev) => {
                        let newState = { ...prev };
                        let researchMap = new Map(prev[research.id]);  // Clone the existing map for this research
                        researchMap.set("keyResults", !researchMap.get("keyResults")); // Toggle the value
                        newState[research.id] = researchMap; // Update the state for this research
                        return newState;
                      });
                    }}
                  >
                    <div className="flex group items-center gap-2 bg-blue-100 px-2 hover:bg-pink-100 hover:text-pink-500 rounded-xs hover:shadow-[0px_2px_7px_rgba(0,0,0,0.25)]">
                    <span className={`transition-transform duration-300 ${openResearchData[research.id]?.get("keyResults") ? "rotate-90" : ""}`}>
                        <Play className="fill-blue-500 h-3 w-3 group-hover:fill-pink-500"></Play>
                      </span>
                      <span>📍 Key results</span>
                    </div>
                  </a>
                </li>

                {openResearchData[research.id]?.get("keyResults") && (
                  <div className="flex px-1 mb-3 text-[rgb(34,34,34)]">
                    <SpeedupComparisonGraph />
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}