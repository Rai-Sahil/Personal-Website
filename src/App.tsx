import { NavLink, Link, Route, Routes } from "react-router-dom";
import './App.css'
import Github from './assets/Github.svg';
import Twitter from './assets/Twitter.svg';
import LinkedIn from './assets/LinkedIn.svg';
import { GraduationCap, House, MailOpen } from "lucide-react";
import { About } from "./pages/about";
import { Publication } from "./pages/publication";
import ExperienceSection from "./pages/experience/section";
import ResearchSection from "./pages/research/page";
import Resume from "@/assets/Sahil_Rai_Resume_v1.pdf";

function App() {
  return (
    <>
      <div className='min-h-screen bg-white'>
        {/* Header */}
        <header className='w-full p-2 flex items-center justify-between' style={{ boxShadow: "0 4px 5px rgba(0, 0, 0, 0.19)" }}>
          <div className="text-gray-600 font-light italic text-xl">
            <Link to="/">Sahil Rai</Link>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
          <Link to="/" className="hover:bg-orange-100 hover:text-orange-500 group-hover:w-full transition-all duration-300 relative group">
              <p className="px-2">about</p>
              <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-orange-500 group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></span>
            </Link>
            <Link to={Resume} target="_blank" className="hover:bg-red-100 hover:text-red-500 group-hover:w-full transition-all duration-300 relative group">
              <p className="px-2">resume</p>
              <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-red-500 group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></span>
            </Link>
            <div className="relative group">
              <Link to="/projects" className="hover:bg-yellow-100 hover:text-yellow-500 group-hover:w-full transition-all duration-300 relative group flex items-center gap-1">
                <p className="px-2">projects</p>
                <span className="text-xs">▼</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-yellow-500 group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></span>
              </Link>
            </div>
            <Link to="https://github.com/Rai-Sahil" className="hover:bg-green-100 hover:text-green-500 group-hover:w-full transition-all duration-300 relative group">
              <div className="px-2 py-1"><img src={Github} alt="GitHub" className="w-5 h-5" /></div>
              <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-green-500 group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></span>
            </Link>
          </div>
        </header>

        <main className="max-w-4xl mx-auto p-4">
          {/* Profile Section */}
          <div className="flex flex-col items-center justify-center py-3">
            <div className="relative w-25 h-25 rounded-full overflow-hidden border-2 border-gray-200">
              <img
                src="/placeholder.svg?height=128&width=128"
                alt="Profile picture"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <h1 className="mt-4 text-2xl flex items-center gap-2 text-gray-500 font-[400]">
              <span className="text-gray-800">👋</span>Hi, I'm Sahil!{" "}
              <a href="https://orcid.org/0009-0003-6403-8446" className="bg-green-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                iD
              </a>
            </h1>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-3 mt-4 text-gray-500">
              <Link to="/" aria-label="Home">
                <House className="w-5 h-5 hover:bg-green-100 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link to="https://Github.com/Rai-Sahil" aria-label="GitHub">
                <img src={Github} alt="GitHub" className="w-5 h-5 hover:bg-green-100 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link to="https://LinkedIn.com/in/Rai-Sahil" aria-label="LinkedIn">
                <img src={LinkedIn} alt="LinkedIn" className="w-5 h-5 hover:bg-green-100 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link to="#" aria-label="Twitter">
                <img src={Twitter} alt="Twitter" className="w-5 h-5 hover:bg-green-100 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link to="mailto:raisahil580@gmail.com" aria-label="Email">
                <MailOpen className="w-5 h-5 hover:bg-green-100 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link to="https://scholar.google.ca/citations?user=sRNaPK8AAAAJ&hl=en&sortby=pubdate" aria-label="Calendar">
                <GraduationCap className="w-5 h-5 hover:bg-green-100 group-hover:w-full transition-all duration-300" />
              </Link>
            </div>

            {/* Navigation */}
            <div className="flex flex-wrap justify-center gap-[1rem] text-[rgb(34,34,34)] mt-5">
              {[
                { to: "/", icon: "🧑‍💻", label: "About" },
                { to: "/research", icon: "📚", label: "Research" },
                { to: "/publication", icon: "📝", label: "Publications" },
                { to: "/projects", icon: "📦", label: "Projects" },
                { to: "/experience", icon: "🌲", label: "Experience" },
                { to: "/reference", icon: "", label: "Reference" },
              ].map(({ to, icon, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `border border-1 rounded-sm flex items-center gap-1 text-base px-1 transition-all duration-300
                    ${isActive ? "bg-blue-100 border-blue-500 text-blue-700" : "bg-gray-100 border-gray-300 text-gray-500"}
                    hover:bg-pink-100 hover:text-pink-500 hover:border-pink-500`
                  }
                >
                  <span className="text-lg">{icon}</span> {label}
                </NavLink>
              ))}
            </div>
          </ div>

          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/publication" element={<Publication />} />
            <Route path="/experience" element={<ExperienceSection />} />
            <Route path="/research" element={<ResearchSection />} />
          </Routes>
        </ main>
      </div>
    </>
  )
}

export default App;