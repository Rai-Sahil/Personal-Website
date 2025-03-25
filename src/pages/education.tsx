export default function EducationSection() {
  return (
    <div className="w-full max-w-4xl mx-auto mb-9">
      <h2 className="text-xl font-medium flex items-center gap-2 text-gray-700">
        <span className="text-xl">🍎</span> School
      </h2>

      <div className="mb-4">
        <div className="text-center text-sm text-gray-600">
          Table 1:{" "}
          <span className="inline-flex items-center gap-1">
            <span className="">🎓</span> Education
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-gray-800">
              <th className="py-2 px-4 text-left">Degree</th>
              <th className="py-2 px-4 text-left">In</th>
              <th className="py-2 px-4 text-left">@</th>
              <th className="py-2 px-4 text-left">End</th>
            </tr>
          </thead>
          <tbody>
            {educations.map((ed, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100 hover:bg-[#B3E8FF]" : ""}>
                <td className="py-3 px-4">
                  <p className="text-gray-700 font-medium">
                    {ed.degree}
                  </p>
                </td>
                <td className="py-3 px-4">
                  <p className="text-gray-700">
                    {ed.in}
                  </p>
                </td>
                <td className="py-3 px-4">
                  <div>{ed.school}</div>
                </td>
                <td className="py-3 px-4">
                  <div>{ed.endDate}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const educations = [
  {
    id: "software-engineer",
    degree: "B.A.Sc",
    in: "Computer System Technology",
    school: "BCIT",
    location: "Lemont, IL",
    orgLink: "https://www.alcf.anl.gov/",
    startDate: "2024",
    startDateFull: "December",
    endDate: "2022",
    endDateFull: "",
    current: true,
    shortDescription:
      "Leading research in high-performance computing applications for scientific simulations and machine learning models for computational science.",
    expandedDescription:
      "Developing novel computational methods and algorithms to accelerate scientific discovery through the use of leadership computing resources. Focusing on the intersection of traditional HPC, machine learning, and quantum computing to solve complex scientific problems that were previously intractable.",
    keySkills: ["HPC", "Machine Learning", "Quantum Computing", "Python", "C++", "CUDA"],
  },
]

