"use client"

import { useState } from "react"
import { ChevronDown, Play } from "lucide-react"

export function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [moredataSeletecd, setMoreDataSelected] = useState<null | string>(null);

    const data = {
        work: "This is what I work on. Details about my projects and work experience.",
        journey: "This is how I got here. A brief story about my journey.",
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="relative mt-2">
            {/* Dropdown Header */}
            <button
                onClick={toggleDropdown}
                className="bg-[rgba(166,166,166,0.1)] flex items-center justify-between w-full text-gray-600 font-medium rounded-md hover:shadow-[0px_2px_7px_rgba(0,0,0,0.25)] transition-all p-1 rounded-md duration-300"
            >
                <div className="flex items-center gap-2">
                    <span className="text-amber-800">👀</span>
                    <span className="font-[700] text-[rgb(128,128,128)]">More</span>
                </div>
                <div className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="h-4 w-4" />
                </div>
            </button>

            {/* Dropdown Content */}
            <div
                className={`bg-[rgba(166,166,166,0.1)] overflow-hidden transition-all duration-300  ${isOpen ? "opacity-100 ease-in-out" : "max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-out"
                    }`}
            >
                <ul className="list-disc ml-5 pl-6">
                    <li className="transform transition-all duration-300 hover:translate-x-1">
                        <a
                            href="#"
                            className="flex items-center gap-1 text-blue-500 p-1 rounded-md transition-colors duration-200"
                            onClick={() => setMoreDataSelected(moredataSeletecd === "work" ? null : "work")}
                        >
                            <div className="flex group items-center gap-2 bg-blue-100 px-2 hover:bg-pink-100 hover:text-pink-500 rounded-xs hover:shadow-[0px_2px_7px_rgba(0,0,0,0.25)]">
                                <span className={`transition-transform duration-300 ${moredataSeletecd === "work" ? "rotate-90" : ""}`}>
                                    <Play className="fill-blue-500 h-3 w-3 group-hover:fill-pink-500"></Play>
                                </span>
                                <span>🔥 What I work on</span>
                            </div>
                        </a>
                        {moredataSeletecd === "work" && (
                            <div className="px-1 text-[rgb(34,34,34)]">
                                {data.work}
                            </div>
                        )}
                    </li>
                    <li className="transform transition-all duration-300 hover:translate-x-1">
                        <a
                            href="#"
                            className="flex items-center gap-1 text-blue-500 p-1 rounded-md transition-colors duration-200"
                            onClick={() => setMoreDataSelected(moredataSeletecd === "journey" ? null : "journey")}
                        >
                            <div className="flex group items-center gap-2 bg-blue-100 px-2 hover:bg-pink-100 hover:text-pink-500 rounded-xs hover:shadow-[0px_2px_7px_rgba(0,0,0,0.25)]">
                                <span className={`transition-transform duration-300 ${moredataSeletecd === "journey" ? "rotate-90" : ""}`}>
                                    <Play className="fill-blue-500 h-3 w-3 group-hover:fill-pink-500"></Play>
                                </span>
                                <span>📍 How I got here</span>
                            </div>
                        </a>

                    </li>
                    {moredataSeletecd === "journey" && (
                        <div className="px-1 mb-5 text-[rgb(34,34,34)]">
                            <span>
                                My current work focuses on developing containerized microservices for scalable backend systems, particularly in Go and Node.js. I'm exploring ways to improve microservice architectures with a focus on authentication, security, and efficient database management. I'm also integrating API gateways for dynamic routing, rate limiting, and service discovery in Kubernetes environments.
                            </span>
                            <br />
                            <span>
                                I aim to continue creating innovative solutions that impact education and cloud computing, focusing on security, performance, and user-centric design
                            </span>
                            <br />
                            <span>
                                I’ve worked with experts like Jeeho Ryoo on research advancing Machine Learning and Backend security. My open-source contributions include building robust backends for applications like invoicing platforms with Stripe and scalable educational tools.
                            </span>
                        </div>
                    )}
                </ul>

                {/* Footer */}
                <div className="weight-[400] mt-2 mb-2 text-center text-base text-gray-500">
                    <div>
                        © Copyright{" "}
                        <a href="#" className="text-blue-500 underline hover:underline decoration-blue-500 underline-offset-3 hover:decoration-3 hover:bg-pink-100 hover:text-pink-500 hover:decoration-pink-500 transition-all duration-300">
                            Sahil Rai
                        </a>
                    </div>
                    <div>
                        Last Updated: <span className="text-pink-300 font-bold">2025-03-12 </span>@<span className="font-bold text-cyan-400"> 08:17:32</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

