import { EXPERIENCES } from "../constants"

const Experience = () => {
    return (
        <div id="experience" className="pb-12 text-white lg:pb-20 bg-gradient-to-r from-slate-925 to-gray-800">
            <h1 className="my-20 text-4xl font-bold text-center text-blue-100">
                My Experience
            </h1>
            <div className="container mx-auto">
                {EXPERIENCES.map((experience, index) => (
                    <div
                        key={index}
                        className={`flex flex-col lg:flex-row mb-12 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out bg-slate-910 hover:bg-gray-700 hover:scale-105 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                            }`}
                    >
                        {/* Year Section */}
                        <div className="w-full p-6 text-center text-gray-100 rounded-t-lg bg-slate-950 lg:w-1/4 lg:rounded-t-none lg:rounded-l-lg lg:rounded-r-none">
                            <p className="text-lg font-semibold">{experience.year}</p>
                        </div>

                        {/* Experience Content */}
                        <div className="w-full p-6 lg:w-3/4">
                            <h6 className="mb-2 text-xl font-semibold text-white">
                                {experience.role} -{' '}
                                <span className="text-indigo-400">{experience.company}</span>
                            </h6>
                            <p className="mb-4 leading-relaxed text-gray-300">
                                {experience.description}
                            </p>

                            {/* Technologies Used */}
                            <div className="flex flex-wrap gap-3">
                                {experience.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 mt-2 text-sm font-medium text-white bg-indigo-500 rounded-full shadow hover:bg-indigo-400"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience;
