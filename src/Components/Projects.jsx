import { PROJECTS } from "../constants";
import SectionHead from "./SectionHead";
import Tilt from "./Tilt";
import { FiArrowUpRight, FiLock } from "react-icons/fi";

const isLive = (p) => Boolean(p.appLink || p.gitLink);

const StatusTag = ({ project }) =>
  isLive(project) ? (
    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-green-700">
      <span className="dot-online" /> SAILING
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 font-mono text-[10px] text-parch-soft">
      <FiLock size={11} /> SEALED
    </span>
  );

const Meta = ({ project }) => (
  <div className="flex items-center justify-between gap-3">
    {project.context && (
      <p className="font-mono text-[11px] tracking-wide uppercase text-pirate-deep">
        {project.context}
      </p>
    )}
    <StatusTag project={project} />
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
          className="inline-flex items-center gap-1 text-pirate-red hover:text-pirate-deep group/l"
        >
          Set sail
          <FiArrowUpRight className="transition-transform group-hover/l:translate-x-0.5 group-hover/l:-translate-y-0.5" />
        </a>
      )}
      {project.gitLink && project.gitLink !== project.appLink && (
        <a
          href={project.gitLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-parch-soft hover:text-parch-ink"
        >
          Source <FiArrowUpRight />
        </a>
      )}
    </div>
  ) : (
    project.note && (
      <p className="mt-auto font-mono text-[11px] italic text-parch-soft">
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
        kicker="Bounties"
        title="Treasures hauled in"
        blurb="Backend work doesn't photograph well — so each bounty is the problem, the decision, and the tradeoff. Ordered by the size of the haul."
      />

      {/* featured — highest bounty */}
      <Tilt
        as="article"
        max={5}
        data-reveal
        className="relative flex flex-col gap-6 p-8 mb-6 lg:flex-row lg:p-10 glass rounded-3xl aura-border float-shadow stage-3d"
      >
        <span className="absolute font-mono text-[11px] tracking-widest top-6 right-8 text-pirate-red">
          &#9733; HIGHEST BOUNTY
        </span>
        <div className="lg:w-2/5">
          <Meta project={featured} />
          <h3 className="mt-3 text-3xl font-black font-display text-parch-ink">
            {featured.title}
          </h3>
          {featured.org && (
            <p className="mt-2 text-sm font-medium text-parch-soft">
              {featured.org}
            </p>
          )}
        </div>
        <div className="flex flex-col lg:w-3/5">
          <p className="mb-5 leading-relaxed text-parch-ink/90">
            {featured.description}
          </p>
          {featured.highlights && (
            <ul className="mb-6 space-y-2.5 text-sm text-parch-soft">
              {featured.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-deep" />
                  {h}
                </li>
              ))}
            </ul>
          )}
          <Tech items={featured.technologies} />
          <Links project={featured} />
        </div>
      </Tilt>

      {/* grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 stage-3d">
        {rest.map((project, i) => (
          <Tilt
            as="article"
            max={8}
            key={project.title}
            data-reveal
            style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            className="flex flex-col p-6 glass rounded-2xl aura-border float-shadow"
          >
            <div className="flex items-baseline justify-between mb-4">
              <span className="font-mono text-xs text-parch-soft">
                {String(i + 2).padStart(2, "0")}
              </span>
              <StatusTag project={project} />
            </div>

            <h3 className="text-xl font-bold font-display text-parch-ink">
              {project.title}
            </h3>
            {project.org && (
              <p className="mt-1 text-xs font-medium text-parch-soft">
                {project.org}
              </p>
            )}
            {project.context && (
              <p className="mt-1 mb-4 font-mono text-[10px] tracking-wide uppercase text-pirate-deep">
                {project.context}
              </p>
            )}

            <p className="mb-4 text-sm leading-relaxed text-parch-ink/85">
              {project.description}
            </p>

            {project.highlights && (
              <ul className="mb-5 space-y-2 text-xs text-parch-soft">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rotate-45 bg-gold-deep/80" />
                    {h}
                  </li>
                ))}
              </ul>
            )}

            <Tech items={project.technologies} />
            <Links project={project} />
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Projects;
