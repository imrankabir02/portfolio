import { DiReact, DiJsBadge, DiPhp, DiMysql, DiCss3, DiHtml5, DiCodeigniter } from "react-icons/di";
import { FaLaravel, FaJava, FaGitAlt, FaLinux, FaWindows, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiVisualstudiocode, SiC, SiUbuntu, SiDjango, SiPostman } from "react-icons/si";

const Skills = () => {
  return (
    <div id="skills" className="py-12 lg:py-20">
      <h1 className="mb-12 text-4xl font-bold text-center cursor-pointer ">Skills</h1>

      <div className="max-w-6xl px-6 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Languages */}
          <div className="p-6 bg-white shadow-lg bg-opacity-10 rounded-xl backdrop-filter backdrop-blur-lg">
            <h2 className="mb-4 text-xl font-semibold text-center ">Languages</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <DiJsBadge className="skillIcon hover:text-yellow-500" title="JavaScript" />
              <DiPhp className="skillIcon hover:text-purple-500" title="PHP" />
              <FaPython className="skillIcon hover:text-green-500" title="Python" />
              <FaJava className="skillIcon hover:text-orange-500" title="Java" />
              <SiC className="skillIcon hover:text-blue-500" title="C" />
            </div>
          </div>

          {/* Libraries and Frameworks */}
          <div className="p-6 bg-white shadow-lg bg-opacity-10 rounded-xl backdrop-filter backdrop-blur-lg">
            <h2 className="mb-4 text-xl font-semibold text-center ">Libraries and Frameworks</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <FaLaravel className="skillIcon hover:text-red-500" title="Laravel" />
              <SiDjango className="skillIcon hover:text-green-600" title="Django" />
              <DiReact className="skillIcon hover:text-blue-400" title="React" />
              <SiTailwindcss className="skillIcon hover:text-teal-400" title="Tailwind CSS" />
              <SiBootstrap className="skillIcon hover:text-purple-500 " title="Bootstrap" />
            </div>
          </div>

          {/* Technologies and Databases */}
          <div className="p-6 bg-white shadow-lg bg-opacity-10 rounded-xl backdrop-filter backdrop-blur-lg">
            <h2 className="mb-4 text-xl font-semibold text-center ">Technologies and Databases</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <DiHtml5 className="skillIcon hover:text-orange-500" title="HTML5" />
              <DiCss3 className="skillIcon hover:text-blue-500" title="CSS3" />
              <DiMysql className="skillIcon hover:text-blue-900" title="MySQL" />
            </div>
          </div>

          {/* Development Tools */}
          <div className="p-6 bg-white shadow-lg bg-opacity-10 rounded-xl backdrop-filter backdrop-blur-lg">
            <h2 className="mb-4 text-xl font-semibold text-center ">Development Tools</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <FaGitAlt className="skillIcon hover:text-orange-500" title="Git" />
              <SiVisualstudiocode className="skillIcon hover:text-blue-500" title="VS Code" />
              <SiPostman className="skillIcon hover:text-orange-500" title="Postman" />
            </div>
          </div>

          {/* Operating Systems */}
          <div className="p-6 bg-white shadow-lg bg-opacity-10 rounded-xl backdrop-filter backdrop-blur-lg">
            <h2 className="mb-4 text-xl font-semibold text-center ">Operating Systems</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <FaWindows className="skillIcon hover:text-blue-500" title="Windows" />
              <SiUbuntu className="skillIcon hover:text-orange-500" title="Ubuntu" />
              <FaLinux className="skillIcon hover:text-yellow-500" title="Linux" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;