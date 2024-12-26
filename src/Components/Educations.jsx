import { EDUCATIONS } from "../constants";

const Educations = () => {
  return (
    <div id="educations" className="py-12 lg:py-20">
      <h1 className="mb-12 text-4xl font-bold text-center text-white">Educations</h1>

      <div className="max-w-6xl px-6 mx-auto space-y-8">
        {EDUCATIONS.map((education, index) => (
          <div
            key={index}
            className="relative p-6 overflow-hidden rounded-lg shadow-lg bgcard"
          >
            <div className="absolute inset-0 opacity-25 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            <div className="relative z-10 flex flex-col lg:flex-row">
              {/* Year Section */}
              <div className="w-full mb-4 text-center text-white lg:w-1/5 lg:mb-0 lg:text-left">
                <p className="text-lg font-semibold">{education.year}</p>
              </div>

              {/* Education Content */}
              <div className="w-full lg:w-4/5 lg:pl-8">
                <h2 className="mb-2 text-xl font-semibold text-white">
                  {education.title} -{" "}
                  <span className="text-blue-400">{education.name}</span>
                </h2>
                <p className="leading-relaxed text-gray-300">{education.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Educations;