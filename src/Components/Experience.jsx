import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div id="experience" className="py-12 lg:py-20">
      <h1 className="mb-12 text-4xl font-bold text-center ">
        Experiences
      </h1>
      <div className="max-w-6xl px-6 mx-auto space-y-8">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="relative p-6 overflow-hidden rounded-lg shadow-lg bgcard"
          >
            <div className="absolute inset-0 opacity-25"></div>
            <div className="relative z-10 flex flex-col lg:flex-row">
              {/* Year Section */}
              <div className="w-full mb-4 text-center lg:w-1/5 lg:mb-0 lg:text-left">
                <p className="text-lg font-semibold">{experience.year}</p>
              </div>

              {/* Experience Content */}
              <div className="w-full lg:w-4/5 lg:pl-8">
                <h2 className="mb-2 text-xl ">
                  {experience.role} -{" "}
                  <span className="font-semibold hover:text-green-700">{experience.company}</span>
                </h2>
                <p className="mb-4 leading-relaxed ">
                  {experience.description}
                </p>

                {/* Technologies Used */}
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="eldesign opacity-80 hover:opacity-100"
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