import { PROJECTS } from "../constants";

const Projects = () => {
    return (
        <div id="projects" className="py-12 lg:py-20">
            <h1 className="mb-12 text-4xl font-semibold text-center text-white">Projects</h1>
            <div className="grid max-w-6xl gap-8 px-6 mx-auto md:grid-cols-2">
                {PROJECTS.map((project, index) => (
                    <div key={index} className="p-1 overflow-hidden shadow-lg rounded-xl">
                        <div className="rounded-xl">
                            <a href={project.appLink}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-48 transition duration-500 transform hover:scale-150 rounded-t-xl hover:rounded-xl"
                                />
                            </a>
                            <div className="p-6 bgcard">
                                <a href={project.gitLink}>
                                    <h2 className="mb-2 text-2xl font-semibold text-white hover:text-blue-400">
                                        {project.title}
                                    </h2>
                                </a>
                                <p className="mb-4 text-white">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-sm font-medium bg-blue-600 rounded-full text-slate-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Diagonal Divider */}
                        <div className="absolute top-0 right-0 w-1/2 h-full origin-top-left transform -skew-x-12 opacity-25 bg-gradient-to-r from-blue-500 to-indigo-500 -z-10"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;