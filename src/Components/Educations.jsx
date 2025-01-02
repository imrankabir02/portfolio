import { EDUCATIONS } from "../constants";

const Educations = () => {
  return (
    <div id="educations" className="py-12 lg:py-20">
      <h1 className="mb-12 text-4xl font-bold text-center ">Educations</h1>

      <div className="max-w-6xl px-6 mx-auto space-y-8">
        {EDUCATIONS.map((education, index) => (
          <div
            key={index}
            className="relative p-6 overflow-hidden rounded-lg shadow-lg bgcard"
          >
            <div className="absolute inset-0"></div>
            <div className="relative z-10 flex flex-col lg:flex-row">
              {/* Year Section */}
              <div className="w-full mb-4 text-center lg:w-1/5 lg:mb-0 lg:text-left">
                <p className="text-lg font-semibold">{education.year}</p>
              </div>

              {/* Education Content */}
              <div className="w-full lg:w-4/5 lg:pl-8">
                <h2 className="mb-2 text-xl ">
                  {education.title} -{" "}
                  <span className="font-semibold hover:text-green-700">{education.name}</span>
                </h2>
                <p className="leading-relaxed text-gray-700">{education.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Educations;