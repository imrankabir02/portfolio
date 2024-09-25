import { EXPERIENCES } from "../constants"

const Experience = () => {
    return (
        <div id="experience" className="pb-4 border-b border-neutral-900">
            <h1 className="my-20 text-4xl text-center">
                Experience
            </h1>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">
                                {experience.year}
                            </p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2">
                                {experience.role} - {" "}
                                <span>
                                    {experience.company}
                                </span>
                            </h6>
                            <p className="mb-4 text-neutral-400">
                                {experience.description}
                            </p>
                            {experience.technologies.map((tech, idx) => (
                                <span key={idx} className="px-2 py-1 mt-4 mr-2 text-sm font-medium text-purple-600 rounded bg-neutral-900">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
