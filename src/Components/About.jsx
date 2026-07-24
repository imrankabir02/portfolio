import { ABOUT_TEXT } from "../constants";
import cvFile from "../assets/Mridha_Imran_Kabir_Backend.pdf";
import { SKILLSETS } from "../constants";

const About = () => {
  return (
    <div id="about" className="py-12 lg:py-20 ">
      <div className="max-w-6xl px-6 mx-auto ">
        <h1 className="mb-8 text-4xl font-bold text-center ">
          About <span className="hover:text-green-400">Me</span>
        </h1>

        <div className="p-8 bg-white shadow-lg bg-opacity-10 rounded-xl backdrop-filter backdrop-blur-lg">
          <div className="mb-8 space-y-4 text-lg font-light leading-relaxed">
            {ABOUT_TEXT.split("\n\n").map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {SKILLSETS.map((skill, index) => (
              <span
                key={index}
                className="eldesign"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href={cvFile}
              download="Mridha_Imran_Kabir_Backend.pdf"
              className="px-8 py-3 text-lg font-semibold transition-transform rounded-full shadow-lg hover:text-white hover:bg-green-600 hover:scale-105"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;