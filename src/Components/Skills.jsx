import { DiReact, DiJsBadge, DiPhp, DiMysql, DiCss3, DiHtml5, DiCodeigniter } from "react-icons/di";
import { FaLaravel, FaJava, FaGitAlt, FaLinux, FaWindows, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiVisualstudiocode, SiC, SiUbuntu, SiDjango } from "react-icons/si";

const Skills = () => {
  return (
    <div id="skills" className="py-12 lg:py-20">
      <h1 className="mb-12 text-4xl font-bold text-center text-white">Skills</h1>

      <div className="max-w-6xl px-6 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Languages */}
          <div className="p-6 bg-white shadow-lg bg-opacity-10 rounded-xl backdrop-filter backdrop-blur-lg">
            <h2 className="mb-4 text-xl font-semibold text-center text-white">Languages</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <DiJsBadge className="text-4xl text-yellow-500" title="JavaScript" />
              <DiPhp className="text-4xl text-purple-500" title="PHP" />
              <FaPython className="text-4xl text-green-500" title="Python" />
              <FaJava className="text-4xl text-orange-500" title="Java" />
              <SiC className="text-4xl text-blue-500" title="C" />
            </div>
          </div>

          {/* Libraries and Frameworks */}
          <div className="p-6 bg-white shadow-lg bg-opacity-10 rounded-xl backdrop-filter backdrop-blur-lg">
            <h2 className="mb-4 text-xl font-semibold text-center text-white">Libraries and Frameworks</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <FaLaravel className="text-4xl text-red-500" title="Laravel" />
              <SiDjango className="text-4xl text-green-600" title="Django" />
              <DiReact className="text-4xl text-blue-400" title="React" />
              <SiTailwindcss className="text-4xl text-teal-400" title="Tailwind CSS" />
              <SiBootstrap className="text-4xl text-purple-500" title="Bootstrap" />
            </div>
          </div>

          {/* Technologies and Databases */}
          <div className="p-6 bg-white shadow-lg bg-opacity-10 rounded-xl backdrop-filter backdrop-blur-lg">
            <h2 className="mb-4 text-xl font-semibold text-center text-white">Technologies and Databases</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <DiHtml5 className="text-4xl text-orange-500" title="HTML5" />
              <DiCss3 className="text-4xl text-blue-500" title="CSS3" />
              <DiMysql className="text-4xl text-blue-900" title="MySQL" />
            </div>
          </div>

          {/* Development Tools */}
          <div className="p-6 bg-white shadow-lg bg-opacity-10 rounded-xl backdrop-filter backdrop-blur-lg">
            <h2 className="mb-4 text-xl font-semibold text-center text-white">Development Tools</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <FaGitAlt className="text-4xl text-orange-500" title="Git" />
              <SiVisualstudiocode className="text-4xl text-blue-500" title="VS Code" />
            </div>
          </div>

          {/* Operating Systems */}
          <div className="p-6 bg-white shadow-lg bg-opacity-10 rounded-xl backdrop-filter backdrop-blur-lg">
            <h2 className="mb-4 text-xl font-semibold text-center text-white">Operating Systems</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <FaWindows className="text-4xl text-blue-500" title="Windows" />
              <SiUbuntu className="text-4xl text-orange-500" title="Ubuntu" />
              <FaLinux className="text-4xl text-yellow-500" title="Linux" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;