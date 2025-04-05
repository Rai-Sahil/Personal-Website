import { Link } from "react-router-dom";

export function Publication() {
    return (
        <div>
            <div className="bg-blue-50 p-1 mt-1 rounded-sm hover:shadow-lg transition-shadow duration-300">
                <p className="flex items-center gap-2">
                    <span className=""></span> <span className="text-blue-500 font-[400]">You can find a full list of my publications on my{" "}</span>
                    <Link to="#" className="text-blue-500 underline decoration-blue-500 underline-offset-3 hover:decoration-3 hover:bg-pink-100 hover:text-pink-500 hover:decoration-pink-500 transition-all duration-300">
                        Google Scholar
                    </Link>
                </p>
            </div>


            <div className="mt-2">
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        <Link
                            to="#"
                            className="font-[700] text-blue-500 underline decoration-blue-500 underline-offset-3 hover:decoration-3 hover:bg-pink-100 hover:text-pink-500 hover:decoration-pink-500 transition-all duration-300"
                        >
                            MProt-DPO: Breaking the ExaFLOPS Barrier for Multimodal Protein Design Workflows with Direct Optimization
                        </Link>

                        <p className="text-gray-500 font-[400] text-base">
                            Proc. IEEE Int. Perform. Comput. and Comm. Conf. Anaheim, LA, USA 11/2024
                        </p>

                    </li>

                    <li>
                        <Link to="#" className="text-blue-500 underline underline decoration-blue-500 underline-offset-3 hover:decoration-3 hover:bg-pink-100 hover:text-pink-500 hover:decoration-pink-500 transition-all duration-300">
                            Evaluation of Pruning Techniques
                        </Link>
                        <p className="text-gray-500 font-[400] text-base">
                            IEEE International Performance, Computing and Communication Performance
                        </p>

                        <ul className="list-[circle] pl-6">
                            <li>

                                <p className="text-gray-500 font-[400] text-base">
                                S Kumar, R Nayak, J Kannampuzha, Sahil Rai, Jeeho Ryoo, and Lizy K John
                                </p>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to="#" className="text-blue-500 underline underline decoration-blue-500 underline-offset-3 hover:decoration-3 hover:bg-pink-100 hover:text-pink-500 hover:decoration-pink-500 transition-all duration-300">
                            Multi-Agent AI Model to Enhance Self-Regulated Learning and Conceptual Understanding in Education
                        </Link>
                        <p className="text-gray-500">Proc. ACM Meas. Anal. Comput. Syst. 03/2024</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}