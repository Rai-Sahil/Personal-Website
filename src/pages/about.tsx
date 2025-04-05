import { MostRecentBlog } from "@/components/Dropdown2";
import { Dropdown } from "../components/Dropdown";

export function About() {
    return (
        <section>
            <div className="flex items-start justify-center text-[rgb(34,34,34)]">
                <div className="w-1/2 pr-4">
                    <ul className="mt-2 list-disc pl-6">
                        <li>
                            <span>Software Development Engineer II @ </span>
                            <a href="https://www.autodesk.com" className="text-blue-500 underline decoration-blue-500 underline-offset-3 hover:decoration-3 hover:bg-pink-100 hover:text-pink-500 hover:decoration-pink-500 transition-all duration-300 hover:underline font-medium">
                            <span>Autodesk</span>
                            </a>
                            <ul className="list-[circle] pl-6">
                                <li className="mt-1">
                                    Building secure & scalable systems
                                </li>
                            </ul>
                        </li>

                        <li>
                            Working on:
                            <ul className="list-[circle] pl-6">
                                <li className="mt-1">
                                    🚀 &#123;ZKP, FHE&#125; in app
                                </li>
                                <li className="mt-1">
                                    🔐 Privacy preserving biometrics auth
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="w-1/2 pl-4">
                    <MostRecentBlog />
                </div>
            </div>

            <Dropdown />
        </section>
    )
}
