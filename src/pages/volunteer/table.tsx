
export default function VolunteerSection() {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-xl font-medium flex items-center gap-2 text-gray-700">
                <span className="text-xl">👔</span> Volunteer
            </h2>

            <div className="mb-4">
                <div className="text-center text-sm text-gray-600">
                    Table 1:{" "}
                    <span className="inline-flex items-center gap-1">
                        <span className="">📂</span> Volunteering
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
                        </tr>
                    </thead>
                    <tbody>
                        {volunteer.map((vol, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-gray-100 hover:bg-[#B3E8FF]" : "hover:bg-[#B3E8FF]"}>
                                <td className="py-3 px-2">
                                    <a href={`/experience/${vol.id}`} className="text-blue-500 underline decoration-blue-500 underline-offset-3 hover:decoration-3 hover:bg-pink-100 hover:text-pink-500 hover:decoration-pink-500 transition-all duration-300 hover:underline font-medium">
                                        {vol.position}
                                    </a>

                                </td>
                                <td className="py-3 px-1">
                                    <p
                                        className="text-gray-700"
                                        rel="noopener noreferrer"
                                    >
                                        {vol.organization}
                                    </p>
                                </td>
                                <td className="py-3 px-1">
                                    <div>{vol.startDate}</div>
                                    <div className="text-xs text-gray-500">{vol.startDateFull}</div>
                                </td>
                                <td className="py-3 px-1">
                                    <div>{vol.endDate}</div>
                                    <div className="text-xs text-gray-500">{vol.endDateFull}</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const volunteer = [
    {
        id: "Software_Engineer",
        position: "Software Engineer",
        organization: "Horus Computer",
        department: "Identity and Licensing (IDL)",
        location: "Vancouver, BC",
        orgLink: "https://autodesk.com",
        startDate: "2025",
        startDateFull: "April",
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
        id: "ta",
        position: "Teaching Assitant",
        organization: "BCIT",
        department: "Identity and Licensing (IDL)",
        location: "Vancouver, BC",
        orgLink: "https://autodesk.com",
        startDate: "2025",
        startDateFull: "April",
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
]

