import { MY_DETAILS } from "../constants";
import profilePic from '../assets/Kabir.png';
import { MdOutlineMailOutline } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

const Hero = () => {
    return (
        <div id="hero" className="pb-12 text-white border-b border-neutral-800 lg:pb-20 bg-gradient-to-r from-slate-925 to-slate-1000">
            {/* Main container */}
            <div className="flex flex-col px-6 py-12 mx-auto lg:flex-row lg:items-center lg:justify-between max-w-7xl">
                {/* Left side - Text content */}
                <div className="flex flex-col items-center mb-8 lg:items-start lg:w-1/2 lg:mb-0">
                    <p className="text-xl font-semibold leading-tight tracking-tight text-center text-pink-400 lg:text-3xl lg:text-left lg:mt-16 animate-fadeIn">
                        Hello, I'm...
                    </p>
                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-center lg:text-6xl lg:text-left lg:mt-16">
                        {MY_DETAILS.name}
                    </h1>
                    <span className="block mt-6 text-3xl font-medium tracking-tight text-center text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text lg:text-4xl lg:text-left">
                        {MY_DETAILS.title}
                        <br />
                        {/* </span> */}

                        {/* Company */}
                        {/* <span className="block mt-2 text-2xl font-light tracking-tight text-center text-indigo-400 lg:text-3xl lg:text-left"> */}

                        <a href="https://codextric.com/about/" target="_blank" rel="noopener noreferrer">
                            {MY_DETAILS.company}
                        </a>
                    </span>

                    {/* MY_DETAILS Information */}
                    <p className="max-w-xl py-6 text-lg leading-relaxed text-center text-gray-300 lg:text-left">
                        {/* Box with transform and transition effects */}
                        <div className="p-6 space-y-6 transition-all duration-500 transform bg-gray-800 rounded-lg shadow-md hover:scale-105 hover:bg-gray-700">

                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <MdOutlineMailOutline className="text-2xl text-pink-500" />
                                <a
                                    href={`mailto:${MY_DETAILS.email}`}
                                    className="text-lg text-gray-300 transition-colors hover:text-pink-400"
                                >
                                    {MY_DETAILS.email}
                                </a>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-4">
                                <MdPhone className="text-2xl text-purple-500" />
                                <a
                                    href={`tel:${MY_DETAILS.phoneNo}`}
                                    className="text-lg text-gray-300 transition-colors hover:text-purple-400"
                                >
                                    {MY_DETAILS.phoneNo}
                                </a>
                            </div>

                            {/* Address */}
                            <div className="flex items-center gap-4">
                                <FaLocationDot className="text-2xl text-sky-500" />
                                <span className="text-lg text-gray-300">{MY_DETAILS.address}</span>
                            </div>
                        </div>
                    </p>


                    {/* Social Links */}
                    <div className="flex items-center gap-6 text-3xl">
                        <a href="https://www.linkedin.com/in/imrankabir02" target="_blank" rel="noopener noreferrer" className="transition-all duration-500 transform text-sky-500 hover:text-sky-400 hover:scale-110">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.github.com/imrankabir02" target="_blank" rel="noopener noreferrer" className="text-gray-500 transition-all duration-500 transform hover:text-gray-300 hover:scale-110">
                            <FaGithub />
                        </a>
                        <a href="https://leetcode.com/u/imrankabir02/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 transition-all duration-500 transform hover:text-yellow-400 hover:scale-110">
                        <SiLeetcode />
                        </a>
                        <a href="https://www.hackerrank.com/profile/imrankabir02" target="_blank" rel="noopener noreferrer" className="text-green-600 transition-all duration-500 transform hover:text-green-400 hover:scale-110">
                            <SiHackerrank />
                        </a>
                    </div>
                </div>

                {/* Right side - Profile picture */}
                <div className="flex justify-center w-full lg:w-1/2 lg:justify-end">
                    <img
                        src={profilePic}
                        alt="Imran Kabir"
                        className="object-cover w-48 h-48 transition-all duration-500 transform border-4 border-gray-700 rounded-full shadow-xl hover:scale-105 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
                    />
                </div>
            </div>
        </div>

    );
};

export default Hero;