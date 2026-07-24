import { PROJECTS } from "../constants";

const Projects = () => {
    return (
        <div id="projects" className="py-12 lg:py-20">
            <h1 className="mb-4 text-4xl font-semibold text-center">Projects</h1>
            <p className="max-w-2xl px-6 mx-auto mb-12 text-center text-neutral-600">
                Backend systems, with the problem and the tradeoffs rather than the screenshots.
            </p>

            <div className="grid max-w-6xl gap-8 px-6 mx-auto md:grid-cols-2">
                {PROJECTS.map((project) => (
                    <article
                        key={project.title}
                        className="flex flex-col overflow-hidden shadow-lg rounded-xl"
                    >
                        <div className="flex flex-col flex-1 p-6 bgcard">
                            <h2 className="text-2xl font-semibold">{project.title}</h2>
                            {project.org && (
                                <p className="mt-1 text-sm font-semibold text-green-800">
                                    {project.org}
                                </p>
                            )}
                            {project.context && (
                                <p className="mt-1 mb-3 font-mono text-xs tracking-wide uppercase text-neutral-500">
                                    {project.context}
                                </p>
                            )}

                            <p className="mb-4 leading-relaxed">{project.description}</p>

                            {project.highlights && (
                                <ul className="mb-5 space-y-2 text-sm list-disc list-outside ps-4 text-neutral-700 marker:text-green-700">
                                    {project.highlights.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            )}

                            <div className="flex flex-wrap gap-2 mb-5">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="eldesign">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto">
                                {project.appLink || project.gitLink ? (
                                    <div className="flex flex-wrap gap-4 text-sm font-semibold">
                                        {project.appLink && (
                                            <a
                                                href={project.appLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="transition-colors hover:text-green-700"
                                            >
                                                Live site ↗
                                            </a>
                                        )}
                                        {project.gitLink && project.gitLink !== project.appLink && (
                                            <a
                                                href={project.gitLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="transition-colors hover:text-green-700"
                                            >
                                                Source ↗
                                            </a>
                                        )}
                                    </div>
                                ) : (
                                    project.note && (
                                        <p className="text-sm italic text-neutral-500">
                                            {project.note}
                                        </p>
                                    )
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Projects;
