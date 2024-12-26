import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div id="experience" className="py-12 lg:py-20">
      <h1 className="mb-12 text-4xl font-bold text-center text-white">
        Experiences
      </h1>
      <div className="max-w-6xl px-6 mx-auto space-y-8">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="relative p-6 overflow-hidden rounded-lg shadow-lg bgcard"
          >
            <div className="absolute inset-0 opacity-25 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            <div className="relative z-10 flex flex-col lg:flex-row">
              {/* Year Section */}
              <div className="w-full mb-4 text-center text-white lg:w-1/5 lg:mb-0 lg:text-left">
                <p className="text-lg font-semibold">{experience.year}</p>
              </div>

              {/* Experience Content */}
              <div className="w-full lg:w-4/5 lg:pl-8">
                <h2 className="mb-2 text-xl font-semibold text-white">
                  {experience.role} -{" "}
                  <span className="text-blue-300">{experience.company}</span>
                </h2>
                <p className="mb-4 leading-relaxed text-white">
                  {experience.description}
                </p>

                {/* Technologies Used */}
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full opacity-80 hover:opacity-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;