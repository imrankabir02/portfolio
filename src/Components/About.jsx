import aboutImg from "../assets/Kabir.png";
import { ABOUT_TEXT } from "../constants";
import cvFile from "../assets/ImranCV.pdf"

const About = () => {
    return (
        <div id="about" className="pb-12 text-white border-b border-neutral-800 lg:pb-20 bg-gradient-to-r from-slate-925 to-gray-900">
            <h1 className="my-20 text-4xl font-bold text-center">
                About<span className="text-indigo-400"> Me</span>
            </h1>

            {/* Main container for image and text */}
            <div className="flex flex-col px-6 mx-auto lg:flex-row lg:items-center lg:justify-between max-w-7xl">

                {/* Left side - Image */}
                <div className="flex justify-center w-full mb-8 lg:w-1/2 lg:justify-start lg:mb-0">
                    <img
                        src={aboutImg}
                        alt="Imran Kabir"
                        className="object-cover w-64 h-64 transition-all duration-500 transform border-4 border-gray-700 rounded-full shadow-lg hover:scale-105 md:w-80 md:h-80 lg:w-96 lg:h-96"
                    />
                </div>

                {/* Right side - Text */}
                <div className="flex flex-col justify-center w-full text-center lg:w-1/2 lg:justify-start lg:items-start lg:text-left">
                    <p className="max-w-xl py-6 text-lg font-light leading-relaxed text-gray-300">
                        {ABOUT_TEXT}
                    </p>

                    {/* CV Download Button */}
                    <a
                        href={cvFile}
                        download="Imran_Kabir_CV.pdf"
                        className="px-8 py-3 mt-4 text-lg font-semibold text-white transition-transform rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-indigo-500 hover:bg-indigo-600 hover:scale-105"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </div>

    );
};

export default About;
