import { PROJECTS } from "../constants";
import SectionHead from "./SectionHead";
import TcgCard from "./TcgCard";
import JollyRoger from "./JollyRoger";
import { FiArrowUpRight, FiLock, FiAnchor } from "react-icons/fi";

const isLive = (p) => Boolean(p.appLink || p.gitLink);

// colour identity rotates through the OP deck colours
const TONES = ["red", "green", "blue", "purple", "yellow", "black"];

// power reads like a card's: scaled off how much stack the bounty carries
const powerOf = (p) => (p.technologies.length + (p.highlights?.length || 0)) * 1000;

const Pills = ({ project }) => (
  <p className="mb-1.5">
    <span className="pill pill--k">Activate:Main</span>
    {isLive(project) ? (
      <span className="pill pill--b">Deployed</span>
    ) : (
      <span className="pill pill--r">
        <FiLock size={9} /> Under NDA
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
      <SectionHead
        index="03"
        kicker="Bounties"
        title="Treasures hauled in"
        blurb="Backend work doesn't photograph well — so each bounty is dealt as a card: the problem, the decision, and the tradeoff. Ordered by the size of the haul."
      />

      {/* the leader card — highest bounty */}
      <div className="grid gap-8 mb-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:items-center">
        <TcgCard
          tone="red"
          data-reveal
          max={9}
          power={powerOf(featured)}
          stamp="L"
          type="LEADER"
          name={featured.title}
          sub={featured.org || featured.context}
          glyph={<JollyRoger size={132} />}
          attr={<FiAnchor size={16} />}
          code={`PRJ13-001 L 1`}
          cost={featured.technologies.length}
          costLabel="DEPS"
          edge="highest-bounty.tcg"
          actions={<Links project={featured} />}
        >
          <Effect project={featured} compact hideHighlights />
        </TcgCard>

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
            tone={TONES[(i + 1) % TONES.length]}
            data-reveal
            style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            power={powerOf(project)}
            stamp={isLive(project) ? "R" : "C"}
            type="CHARACTER"
            name={project.title}
            sub={project.org || project.context}
            glyph={<JollyRoger size={104} />}
            attr={<FiAnchor size={15} />}
            code={`PRJ13-${String(i + 2).padStart(3, "0")} ${
              isLive(project) ? "R" : "C"
            } 1`}
            cost={project.technologies.length}
            costLabel="DEPS"
            edge={`bounty-${String(i + 2).padStart(2, "0")}.tcg`}
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
