import { Badge } from "@/components/ui/badge"
import EducationSection from "../education"

export default function ExperienceSection() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-medium flex items-center gap-2 text-gray-700">
        <span className="text-xl">👔</span> Employment
      </h2>

      <div className="mb-4">
        <div className="text-center text-sm text-gray-600">
          Table 1:{" "}
          <span className="inline-flex items-center gap-1">
            <span className="">📂</span> Experience
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-gray-800">
              <th className="py-2 px-4 text-left">Position</th>
              <th className="py-2 px-4 text-left">@</th>
              <th className="py-2 px-4 text-left">Start</th>
              <th className="py-2 px-4 text-left">End</th>
              <th className="py-2 px-4 text-left">Type</th>
            </tr>
          </thead>
          <tbody>
            {experiences.map((exp, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100 hover:bg-[#B3E8FF]" : "hover:bg-[#B3E8FF]"}>
                <td className="py-3 px-2">
                  <a href={`/experience/${exp.id}`} className="text-blue-500 underline decoration-blue-500 underline-offset-3 hover:decoration-3 hover:bg-pink-100 hover:text-pink-500 hover:decoration-pink-500 transition-all duration-300 hover:underline font-medium">
                    {exp.position}
                  </a>

                </td>
                <td className="py-3 px-1">
                  <p
                    className="text-gray-700"
                    rel="noopener noreferrer"
                  >
                    {exp.organization}
                  </p>
                </td>
                <td className="py-3 px-1">
                  <div>{exp.startDate}</div>
                  <div className="text-xs text-gray-500">{exp.startDateFull}</div>
                </td>
                <td className="py-3 px-1">
                  <div>{exp.endDate}</div>
                  <div className="text-xs text-gray-500">{exp.endDateFull}</div>
                </td>
                <td className="py-3 px-1">
                  <div className="flex items-center">
                    <span
                      className={`w-2 h-2 rounded-full mr-2 ${exp.current ? "bg-green-500" : "bg-gray-400"}`}
                    ></span>
                    <span>{exp.employmentType}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-9">
        <EducationSection />
      </div>
    </div>
  )
}

const experiences = [
  {
    id: "software-engineer",
    position: "Software Engineer",
    organization: "FusionWare Integration",
    department: "Computing, Environment and Life Sciences",
    location: "Lemont, IL",
    orgLink: "https://www.alcf.anl.gov/",
    startDate: "2024",
    startDateFull: "December",
    endDate: "Present",
    endDateFull: "",
    current: true,
    employmentType: "Full-time",
    duration: "1 year, 5 months",
    shortDescription:
      "Leading research in high-performance computing applications for scientific simulations and machine learning models for computational science.",
    expandedDescription:
      "Developing novel computational methods and algorithms to accelerate scientific discovery through the use of leadership computing resources. Focusing on the intersection of traditional HPC, machine learning, and quantum computing to solve complex scientific problems that were previously intractable.",
    keySkills: ["HPC", "Machine Learning", "Quantum Computing", "Python", "C++", "CUDA"],
  },
  {
    id: "fullstack",
    position: "Full Stack Developer",
    organization: "Risings Edu",
    department: "Leadership Computing Facility",
    location: "Lemont, IL",
    orgLink: "https://www.alcf.anl.gov/",
    startDate: "2019",
    startDateFull: "September 2019",
    endDate: "2022",
    endDateFull: "December 2021",
    current: false,
    employmentType: "Part-time",
    duration: "2 years, 4 months",
    shortDescription:
      "Conducted research on scalable algorithms for scientific computing and implemented parallel computing solutions for large-scale simulations.",
    expandedDescription:
      "Focused on developing and optimizing scientific applications for high-performance computing systems, with emphasis on scalability, performance, and portability across different architectures. Collaborated with domain scientists to implement efficient computational solutions for their research problems.",
    keySkills: ["Parallel Comput", "Algorithm", "MPI", "OpenMP", "Fortran", "C++"],
  },
  {
    id: "software-dev",
    position: "Software Engineer",
    organization: "Buble Tech",
    department: "Environmental Science Division",
    location: "Argonne, IL",
    orgLink: "https://www.anl.gov/",
    startDate: "2018",
    startDateFull: "January 2018",
    endDate: "2019",
    endDateFull: "August 2019",
    current: false,
    employmentType: "Full-time",
    duration: "1 year, 8 months",
    shortDescription:
      "Researched applications of machine learning in earth sciences and developed models for climate prediction using high-performance computing resources.",
    expandedDescription:
      "Applied machine learning techniques to analyze large-scale climate datasets and develop predictive models for climate phenomena. Utilized high-performance computing resources to process and analyze terabytes of climate data from various sources including satellite observations, weather stations, and climate models.",
    keySkills: ["Climate Modeling", "Data", "Machine Learning", "Python", "R", "GIS"],
  },
  {
    id: "coop",
    position: "Web Developer Intern",
    organization: "Accenture",
    department: "Environmental Science Division",
    location: "Argonne, IL",
    orgLink: "https://www.anl.gov/",
    startDate: "2018",
    startDateFull: "January 2018",
    endDate: "2019",
    endDateFull: "August 2019",
    current: false,
    employmentType: "Full-time",
    duration: "1 year, 8 months",
    shortDescription:
      "Researched applications of machine learning in earth sciences and developed models for climate prediction using high-performance computing resources.",
    expandedDescription:
      "Applied machine learning techniques to analyze large-scale climate datasets and develop predictive models for climate phenomena. Utilized high-performance computing resources to process and analyze terabytes of climate data from various sources including satellite observations, weather stations, and climate models.",
    keySkills: ["Climate Modeling", "Data", "Machine Learning", "Python", "R", "GIS"],
  },
]

