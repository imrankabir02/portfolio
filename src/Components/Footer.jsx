import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiFacebook, SiInstagram } from "react-icons/si";

export default function Footer() {
    return (
        <div className="flex flex-wrap justify-center m-2.5 mb-5">
            <div className="flex items-center gap-6 text-3xl">
                <a href="https://www.facebook.com/imrankabir02/" target="_blank" rel="noopener noreferrer" className="transition-all duration-100 transform hover:text-blue-600 hover:scale-110">
                    <SiFacebook />
                </a>
                <a href="https://www.instagram.com/imrankabir02" target="_blank" rel="noopener noreferrer" className="transition-all duration-100 transform hover:text-pink-600 hover:scale-110">
                    <SiInstagram />
                </a>
                <a href="https://www.linkedin.com/in/imrankabir02" target="_blank" rel="noopener noreferrer" className="transition-all duration-100 transform hover:text-sky-400 hover:scale-110">
                    <FaLinkedin />
                </a>
                <a href="https://www.github.com/imrankabir02" target="_blank" rel="noopener noreferrer" className="transition-all duration-100 transform hover:text-gray-800 hover:scale-110">
                    <FaGithub />
                </a>
            </div>
        </div>
    )
}
