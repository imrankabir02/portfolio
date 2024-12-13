import { PROJECTS } from "../constants"

const Projects = () => {
    return (
        <div id="projects" className="pb-12 text-white border-b border-neutral-800 lg:pb-20 bg-gradient-to-r from-slate-925 to-gray-900">
            <h1 className="my-20 text-4xl font-semibold text-center text-white">
                Projects
            </h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <div className="transition-all duration-500 ease-in-out transform bg-slate-910 hover:bg-slate-910 hover:scale-105">
                        <div key={index} className="flex flex-wrap mb-8 gap-x-10 lg:justify-center">
                            <div className="w-full lg:w-1/4">
                                <div>
                                    <a href={project.appLink}>
                                        <img src={project.image} width={300} height={150} alt={project.title} />
                                    </a>
                                </div>
                            </div>
                            <div className="w-full max-w-xl lg:w-3/4">
                                <div>
                                    <a href={project.gitLink}>
                                        <h6 className="mb-2 text-2xl font-semibold text-neutral-400 hover:text-blue-400">
                                            {project.title}
                                        </h6>
                                    </a>
                                </div>
                                <p className="mb-4 text-neutral-400">
                                    {project.description}
                                </p>
                                {project.technologies.map((tech, idx) => (
                                    <span key={idx} className="gap-3 px-3 py-1 mt-2 text-sm font-medium text-white bg-indigo-500 rounded-full shadow hover:bg-indigo-400">
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

export default Projects
