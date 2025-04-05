
export function SkillsSection() {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-xl font-medium flex items-center gap-2 text-[rgb(34,34,34)]">
                <span className="text-xl">🧑‍💻</span> Skills and Expertise
            </h2>

            <div className="mt-2 text-[rgb(34,34,34)] leading-relaxed">
                <span>
                    I have dealt with a tremendous amount of programming languages and frameworks, while specializing in a handful. Although I have my preferences, I always pick the technology that makes the most sense for a project, considering scalability, maintainability and security.
                </span>
                <br />
                <br />
                <span>
                    I have experience in hands-on software development positions, as well as leadership positions, with responsibilities that extend further than lines of code (determining roadmaps, leading projects, business decisions).
                </span>
            </div>

            <h2 className="mt-9 text-xl font-medium flex items-center gap-2 text-[rgb(34,34,34)]">
                <span className="text-xl">⌨️</span> Technologies used
            </h2>

            <div className="mt-2 text-[rgb(34,34,34)] leading-relaxed">
                <span>
                    The technologies I’m currently working with the most and am most familiar with are in <b>bold</b>.
                </span>
            </div>

            <div className="justify-center flex items-top mt-3">
                <ul className="text-[rgb(34,34,34)] leading-relaxed list-disc pl-6">
                    <li><span className="text-xs">🌐 </span>Backend/server development
                        <div>
                            <ul className="list-[circle] pl-9">
                                <li><b>Go</b> (Gin, Stdlib)</li>
                                <li><b>TypeScript</b> (Node.js, Express.js)</li>
                                <li>C# (ASP.NET)</li>
                            </ul>
                        </div>
                    </li>

                    <li className="mt-3"><span className="text-xs">💾 </span>Database
                        <div>
                            <ul className="list-[circle] pl-9">
                                <li>SQL (<b>Postgres</b>, MySQL, SQL Server, SQLite)</li>
                                <li>NoSQL (<b>MongoDB</b>, Redis Caching, Cosmos, Firebase)</li>
                            </ul>
                        </div>
                    </li>
                </ul>

                <ul className="text-[rgb(34,34,34)] leading-relaxed list-disc pl-6">
                    <li><span className="text-md">📱</span>Front-end development
                        <div>
                            <ul className="list-[circle] pl-9">
                                <li><b>React with TypeScript</b> (Next.js, React.js)</li>
                                <li>Progressive Web Apps</li>
                                <li>ASP.NET (Blazor, Razor, XAML)</li>
                            </ul>
                        </div>
                    </li>

                    <li className="mt-3"><span className="text-md">⚙️</span>Site Reliability Engineering and DevOps
                        <div>
                            <ul className="list-[circle] pl-9">
                                <li>SQL (<b>Postgres</b>, MySQL, SQL Server, SQLite)</li>
                                <li>NoSQL (<b>MongoDB</b>, Redis Caching, Cosmos, Firebase)</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}