"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Link } from "react-router-dom";

export function MostRecentBlog() {
    const [isOpen, setIsOpen] = useState(false);

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
                    <span className="">💬</span>
                    <span className="font-[700] text-[rgb(128,128,128)]">Most Recent Blog</span>
                </div>
                <div className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="h-4 w-4" />
                </div>
            </button>

            {/* Dropdown Content */}
            <div
                className={`px-2 text-[rgb(128,128,128)] bg-[rgba(166,166,166,0.1)] overflow-hidden transition-all duration-300  ${isOpen ? "opacity-100 ease-in-out" : "max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-out"
                    }`}
            >
                [<Link 
                    to="https://medium.com/@raisahil580/understanding-rest-apis-basics-security-and-debugging-4ea8b543dd54?source=friends_link&sk=7186092bd990fdd40002c3cec492f5f1" 
                    className="text-blue-500 underline underline decoration-blue-500 underline-offset-3 hover:decoration-3 hover:bg-pink-100 hover:text-pink-500 hover:decoration-pink-500 transition-all duration-300"
                >
                    here
                </Link>]
                (about REST APIs)
            </div>
        </div>
    )
}

