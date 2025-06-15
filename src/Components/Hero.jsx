import { MY_DETAILS } from "../constants";
import profilePic from '../assets/Kabir.png';
import { MdOutlineMailOutline } from "react-icons/md";
import { MdPhone } from "react-icons/md";
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
                            alt="Imran Kabir"
                            className="object-cover w-48 h-48 transition-all duration-500 transform cursor-grab rounded-3xl hover:scale-105 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-max xl:h-max grayscale-50 hover:grayscale-0"
                        />
                    </div>
                    
                    {/* Text content - Now comes second on mobile */}
                    <div className="flex flex-col items-center lg:order-1 lg:items-start lg:w-1/2">
                        <p className="text-xl font-semibold leading-tight tracking-tight text-center text-yellow-800 lg:text-3xl lg:text-left">
                            Hello, I'm...
                        </p>
                        <h1
                            className="text-4xl font-bold leading-tight tracking-tight text-center transition-colors lg:text-6xl lg:text-left hover:text-yellow-700"
                        >
                            {MY_DETAILS.name}
                        </h1>

                        <div className="mt-6 text-center lg:text-left">
                            <p className="text-2xl font-medium tracking-tight hovar:text-yellow-700 lg:text-4xl">
                                {MY_DETAILS.title} 
                            <a href={MY_DETAILS.companyLink} target="_blank" rel="noopener noreferrer" className="text-2xl font-light tracking-tight transition-colors lg:text-3xl hover:text-yellow-600">
                                @{MY_DETAILS.company}
                            </a>
                            </p>
                        </div>

                        {/* MY_DETAILS Information */}
                        <p className="max-w-xl py-6 text-lg leading-relaxed text-center lg:text-left">
                            {/* Box with transform and transition effects */}
                            <div className="p-6 space-y-6 transition-all duration-100 transform rounded-lg shadow-lg bgcard">

                                {/* Email */}
                                <div className="flex items-center gap-4">
                                    <MdOutlineMailOutline className="text-2xl hover:text-green-700" />
                                    <a
                                        href={`mailto:${MY_DETAILS.email}`}
                                        className="text-lg transition-colors hover:text-green-700"
                                    >
                                        {MY_DETAILS.email}
                                    </a>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center gap-4">
                                    <MdPhone className="text-2xl hover:text-yellow-700" />
                                    <a
                                        href={`tel:${MY_DETAILS.phoneNo}`}
                                        className="text-lg transition-colors hover:text-yellow-700"
                                    >
                                        {MY_DETAILS.phoneNo}
                                    </a>
                                </div>

                                {/* Address */}
                                <div className="flex items-center gap-4">
                                    <FaLocationDot className="text-2xl hover:text-sky-500" />
                                    <span className="text-lg hover:text-yellow-700">{MY_DETAILS.address}</span>
                                </div>
                            </div>
                        </p>

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
