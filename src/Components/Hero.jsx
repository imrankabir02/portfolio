import { MY_DETAILS } from "../constants";
import profilePic from '../assets/Kabir.png';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

const Hero = () => {
    return (
        <div id="contactme" className="py-12 lg:py-20">
            <div className="pb-4">
                {/* Main container */}
                <div className="flex flex-col px-6 py-12 mx-auto max-w-7xl lg:flex-row lg:items-center lg:justify-between">
                    {/* Profile picture - Now comes first on mobile */}
                    <div className="flex justify-center w-full mb-8 lg:order-2 lg:w-1/2 lg:justify-end lg:mb-0">
                        <img
                            src={profilePic}
                            alt="Portrait of Mridha Imran Kabir"
                            width="500"
                            height="500"
                            fetchPriority="high"
                            className="object-cover w-48 h-48 transition-all duration-500 transform cursor-grab rounded-3xl hover:scale-105 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 grayscale-50 hover:grayscale-0"
                        />
                    </div>
                    
                    {/* Text content - Now comes second on mobile */}
                    <div className="flex flex-col items-center lg:order-1 lg:items-start lg:w-1/2">
                        <p className="text-xl font-semibold leading-tight tracking-tight text-center text-yellow-800 lg:text-3xl lg:text-left">
                            Hello, I&apos;m...
                        </p>
                        <h1
                            className="text-4xl font-bold leading-tight tracking-tight text-center transition-colors lg:text-6xl lg:text-left hover:text-yellow-700"
                        >
                            {MY_DETAILS.name}
                        </h1>

                        <div className="mt-4 text-center lg:text-left">
                            <p className="text-2xl font-medium tracking-tight lg:text-4xl">
                                {MY_DETAILS.title}
                            </p>
                            <p className="mt-2 text-xl font-light tracking-tight text-neutral-600 lg:text-2xl">
                                {MY_DETAILS.role}{" "}
                                <a
                                    href={MY_DETAILS.companyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-normal underline transition-colors underline-offset-4 decoration-neutral-400 hover:text-yellow-700"
                                >
                                    {MY_DETAILS.company}
                                </a>
                            </p>
                        </div>

                        {/* Contact details */}
                        <div className="w-full max-w-xl py-6">
                            <div className="space-y-6 rounded-lg shadow-lg bgcard">

                                {/* Email */}
                                <div className="flex items-center gap-4">
                                    <MdOutlineMailOutline className="text-2xl shrink-0" />
                                    <a
                                        href={`mailto:${MY_DETAILS.email}`}
                                        className="text-lg transition-colors hover:text-green-700"
                                    >
                                        {MY_DETAILS.email}
                                    </a>
                                </div>

                                {/* Address */}
                                <div className="flex items-center gap-4">
                                    <FaLocationDot className="text-2xl shrink-0" />
                                    <span className="text-lg">{MY_DETAILS.address}</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-6 text-3xl">
                            <a href="https://www.linkedin.com/in/imrankabir02" target="_blank" rel="noopener noreferrer" className="transition-all duration-100 transform hover:text-sky-500 hover:scale-110">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.github.com/imrankabir02" target="_blank" rel="noopener noreferrer" className="transition-all duration-100 transform hover:scale-110">
                                <FaGithub />
                            </a>
                            <a href="https://leetcode.com/u/imrankabir02/" target="_blank" rel="noopener noreferrer" className="transition-all duration-100 transform hover:text-yellow-500 hover:scale-110">
                                <SiLeetcode />
                            </a>
                            <a href="https://www.hackerrank.com/profile/imrankabir02" target="_blank" rel="noopener noreferrer" className="transition-all duration-100 transform hover:text-green-600 hover:scale-110">
                                <SiHackerrank />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
