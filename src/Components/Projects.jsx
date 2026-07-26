import { PROJECTS } from "../constants";
import { sagaById } from "../constants/sagas";
import SectionHead from "./SectionHead";
import TcgCard from "./TcgCard";
import JollyRoger from "./JollyRoger";
import { FiArrowUpRight, FiLock, FiAnchor } from "react-icons/fi";

const SAGA = sagaById("projects");

const isLive = (p) => Boolean(p.appLink || p.gitLink);

// colour identity rotates through the OP deck colours
const TONES = ["red", "green", "blue", "purple", "yellow", "black"];

// how the work was owned, spelled out rather than abbreviated
const OWNERSHIP = {
  LEAD: "Lead author",
  SOLE: "Sole author",
  BACKEND: "Backend",
  SOLO: "Built solo",
};

/* The keyword row is the two things a hiring manager scans for first: how much
   of it was mine, and whether it actually runs. Stack follows. */
const Pills = ({ project }) => (
  <p className="mb-1.5">
    <span className="pill pill--k">{OWNERSHIP[project.ownership]}</span>
    {project.status === "Prototype" ? (
      <span className="pill pill--r">Prototype</span>
    ) : (
      <span className="pill pill--b">{project.status}</span>
    )}
    {!isLive(project) && (
      <span className="pill pill--r">
        <FiLock size={9} /> Private
      </span>
    )}
    {project.technologies.slice(0, 2).map((t) => (
      <span key={t} className="pill pill--g">
        {t}
      </span>
    ))}
  </p>
);

const Links = ({ project }) =>
  isLive(project) ? (
    <>
      {project.appLink && (
        <a
          href={project.appLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 group/l"
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
          className="inline-flex items-center gap-1"
        >
          Source <FiArrowUpRight />
        </a>
      )}
    </>
  ) : null;

const Effect = ({ project, compact, hideHighlights }) => (
  <>
    <Pills project={project} />
    <p className={compact ? "text-[0.78rem] leading-snug" : ""}>
      {project.description}
    </p>
    {project.highlights && !hideHighlights && (
      <ul className="mt-2 space-y-1 text-[0.72rem] leading-snug">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rotate-45 bg-black/60" />
            {h}
          </li>
        ))}
      </ul>
    )}
    {!isLive(project) && project.note && (
      <p className="mt-2 text-[0.7rem] italic opacity-70">{project.note}</p>
    )}
  </>
);

const Projects = () => {
  const [featured, ...rest] = PROJECTS;

  return (
    <section
      id="projects"
      className="px-6 py-24 mx-auto scroll-mt-24 max-w-7xl md:px-8"
    >
      <SectionHead saga={SAGA} />

      {/* Arc 01 — the leader card, highest bounty */}
      <div className="grid gap-8 mb-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:items-center">
        <TcgCard
          saga={SAGA}
          arc={0}
          tone="red"
          data-reveal
          max={9}
          metric={featured.metric}
          metricLabel={featured.metricLabel}
          outcome={featured.outcome}
          stamp={featured.ownership}
          type="FLAGSHIP"
          name={featured.title}
          sub={featured.org || featured.context}
          glyph={<JollyRoger size={132} />}
          attr={<FiAnchor size={16} />}
          code={featured.status.toUpperCase()}
          cost={featured.technologies.length}
          costLabel="STACK"
          edge={featured.context}
          actions={<Links project={featured} />}
        >
          <Effect project={featured} compact hideHighlights />
        </TcgCard>

        {/* the arc marker for this one already sits on its card */}
        <div data-reveal style={{ transitionDelay: "120ms" }}>
          <p className="eyebrow mb-3">&#9733; Highest bounty</p>
          <h3 className="text-3xl font-black font-display text-parch-light sm:text-4xl">
            {featured.title}
          </h3>
          {featured.org && (
            <p className="mt-2 font-mono text-sm text-gold-light">
              {featured.org}
            </p>
          )}
          <p className="max-w-xl mt-5 leading-relaxed text-parch-light/80">
            {featured.description}
          </p>
          {featured.highlights && (
            <ul className="mt-5 space-y-2.5 text-sm text-parch-light/70">
              {featured.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                  {h}
                </li>
              ))}
            </ul>
          )}
          <div className="flex flex-wrap gap-2 mt-6">
            {featured.technologies.map((t) => (
              <span key={t} className="chip-dark">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* the rest of the hand */}
      <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
        {rest.map((project, i) => (
          <TcgCard
            key={project.title}
            saga={SAGA}
            arc={i + 1}
            tone={TONES[(i + 1) % TONES.length]}
            data-reveal
            style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            metric={project.metric}
            metricLabel={project.metricLabel}
            outcome={project.outcome}
            stamp={project.ownership}
            type="SYSTEM"
            name={project.title}
            sub={project.org || project.context}
            glyph={<JollyRoger size={104} />}
            attr={<FiAnchor size={15} />}
            code={project.status.toUpperCase()}
            cost={project.technologies.length}
            costLabel="STACK"
            edge={project.context}
            actions={<Links project={project} />}
          >
            <Effect project={project} compact />
          </TcgCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
