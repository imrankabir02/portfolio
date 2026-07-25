import { PROJECTS } from "../constants";
import SectionHead from "./SectionHead";
import { FiArrowUpRight, FiLock } from "react-icons/fi";

const isLive = (p) => Boolean(p.appLink || p.gitLink);

const Meta = ({ project }) => (
  <div className="flex items-center justify-between gap-3">
    {project.context && (
      <p className="font-mono text-[11px] tracking-wide uppercase text-iris-cyan/80">
        {project.context}
      </p>
    )}
    {isLive(project) ? (
      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-signal">
        <span className="dot-online" /> LIVE
      </span>
    ) : (
      <span className="inline-flex items-center gap-1 font-mono text-[10px] text-neutral-500">
        <FiLock size={11} /> PRIVATE
      </span>
    )}
  </div>
);

const Links = ({ project }) =>
  isLive(project) ? (
    <div className="flex flex-wrap gap-4 mt-auto text-sm font-semibold">
      {project.appLink && (
        <a
          href={project.appLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-iris-cyan hover:text-white group/l"
        >
          Live site
          <FiArrowUpRight className="transition-transform group-hover/l:translate-x-0.5 group-hover/l:-translate-y-0.5" />
        </a>
      )}
      {project.gitLink && project.gitLink !== project.appLink && (
        <a
          href={project.gitLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-neutral-300 hover:text-white"
        >
          Source <FiArrowUpRight />
        </a>
      )}
    </div>
  ) : (
    project.note && (
      <p className="mt-auto font-mono text-[11px] italic text-neutral-500">
        {project.note}
      </p>
    )
  );

const Tech = ({ items }) => (
  <div className="flex flex-wrap gap-2 mb-6">
    {items.map((t) => (
      <span key={t} className="chip">
        {t}
      </span>
    ))}
  </div>
);

const Projects = () => {
  const [featured, ...rest] = PROJECTS;

  return (
    <section
      id="projects"
      className="px-6 py-24 mx-auto scroll-mt-24 max-w-7xl md:px-8"
    >
      <SectionHead
        index="03"
        kicker="Selected work"
        title="Systems, not screenshots"
        blurb="Backend work doesn't photograph well — so each card is the problem, the decision, and the tradeoff. Ordered strongest first."
      />

      {/* featured */}
      <article
        data-reveal
        className="relative flex flex-col gap-6 p-8 mb-6 lg:flex-row lg:p-10 glass rounded-3xl aura-border glass-hover"
      >
        <span className="absolute font-mono text-[11px] tracking-widest top-6 right-8 text-neutral-600">
          ★ FEATURED
        </span>
        <div className="lg:w-2/5">
          <Meta project={featured} />
          <h3 className="mt-3 text-3xl font-bold font-display">
            {featured.title}
          </h3>
          {featured.org && (
            <p className="mt-2 text-sm font-medium text-neutral-400">
              {featured.org}
            </p>
          )}
        </div>
        <div className="flex flex-col lg:w-3/5">
          <p className="mb-5 leading-relaxed text-neutral-300">
            {featured.description}
          </p>
          {featured.highlights && (
            <ul className="mb-6 space-y-2.5 text-sm text-neutral-400">
              {featured.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-iris-cyan shadow-[0_0_8px_rgba(79,227,208,0.8)]" />
                  {h}
                </li>
              ))}
            </ul>
          )}
          <Tech items={featured.technologies} />
          <Links project={featured} />
        </div>
      </article>

      {/* grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {rest.map((project, i) => (
          <article
            key={project.title}
            data-reveal
            style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            className="flex flex-col p-6 glass rounded-2xl aura-border glass-hover"
          >
            <div className="flex items-baseline justify-between mb-4">
              <span className="font-mono text-xs text-neutral-600">
                {String(i + 2).padStart(2, "0")}
              </span>
              {isLive(project) ? (
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-signal">
                  <span className="dot-online" /> LIVE
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 font-mono text-[10px] text-neutral-500">
                  <FiLock size={11} /> PRIVATE
                </span>
              )}
            </div>

            <h3 className="text-xl font-semibold font-display">
              {project.title}
            </h3>
            {project.org && (
              <p className="mt-1 text-xs font-medium text-neutral-500">
                {project.org}
              </p>
            )}
            {project.context && (
              <p className="mt-1 mb-4 font-mono text-[10px] tracking-wide uppercase text-iris-cyan/70">
                {project.context}
              </p>
            )}

            <p className="mb-4 text-sm leading-relaxed text-neutral-400">
              {project.description}
            </p>

            {project.highlights && (
              <ul className="mb-5 space-y-2 text-xs text-neutral-500">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-iris-cyan/70" />
                    {h}
                  </li>
                ))}
              </ul>
            )}

            <Tech items={project.technologies} />
            <Links project={project} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
