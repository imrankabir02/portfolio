import { DiReact, DiJsBadge, DiPhp, DiMysql, DiCss3, DiHtml5, DiCodeigniter } from "react-icons/di";
import { FaLaravel, FaJava, FaGitAlt, FaLinux, FaWindows, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiVisualstudiocode, SiC, SiUbuntu, SiDjango } from "react-icons/si";

const Skills = () => {
    return (
        <div id="skills" className="pb-12 text-white lg:pb-20 bg-gradient-to-r from-slate-925 to-gray-800">

            <h1 className="my-20 text-4xl font-bold text-center">Skills</h1>

            {/* Skillset Section - Centered Layout */}
            <div className="space-y-16">
                {/* Languages */}
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-xl font-semibold text-center">Languages</h2>
                    <div className="flex flex-wrap justify-center gap-6 mt-4">
                        <div className="skillset">
                            <DiJsBadge className="text-6xl text-yellow-500" />
                        </div>
                        <div className="skillset"><DiPhp className="text-6xl text-purple-700" /></div>
                        <div className="skillset">
                            <FaPython className="text-6xl text-green-500" />
                        </div>
                        <div className="skillset"><FaJava className="text-6xl text-orange-600" /></div>
                        <div className="skillset">
                            <SiC className="text-6xl text-blue-500" />
                        </div>
                    </div>
                </div>

                {/* Libraries and Frameworks */}
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-xl font-semibold text-center">Libraries and Frameworks</h2>
                    <div className="flex flex-wrap justify-center gap-6 mt-4">
                        <div className="skillset"><FaLaravel className="text-6xl text-red-600" /></div>
                        <div className="skillset"><SiDjango className="text-6xl text-green-700" /></div>
                        <div className="skillset"><DiReact className="text-6xl text-cyan-400" /></div>
                        <div className="skillset"><SiTailwindcss className="text-6xl text-teal-400" /></div>
                        <div className="skillset"><SiBootstrap className="text-6xl text-purple-500" /></div>
                    </div>
                </div>

                {/* Technologies and Databases */}
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-xl font-semibold text-center">Technologies and Databases</h2>
                    <div className="flex flex-wrap justify-center gap-6 mt-4">
                        <div className="skillset"><DiHtml5 className="text-6xl text-red-500" /></div>
                        <div className="skillset"><DiCss3 className="text-6xl text-blue-500" /></div>
                        <div className="skillset"><DiMysql className="text-6xl text-blue-700" /></div>
                        {/* <div className="skillset"><SiDocker className="text-6xl text-blue-400" /></div> */}
                    </div>
                </div>

                {/* Development Tools */}
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-xl font-semibold text-center">Development Tools</h2>
                    <div className="flex flex-wrap justify-center gap-6 mt-4">
                        <div className="skillset"><FaGitAlt className="text-6xl text-orange-600" /></div>
                        <div className="skillset"><SiVisualstudiocode className="text-6xl text-blue-600" /></div>
                    </div>
                </div>

                {/* Operating Systems */}
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-xl font-semibold text-center">Operating Systems</h2>
                    <div className="flex flex-wrap justify-center gap-6 mt-4">
                        <div className="skillset"><FaWindows className="text-6xl text-blue-600" /></div>
                        <div className="skillset"><SiUbuntu className="text-6xl text-orange-600" /></div>
                        <div className="skillset"><FaLinux className="text-6xl text-yellow-500" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
