import {
  ABOUT_TEXT,
  EDUCATIONS,
  EXPERIENCES,
  MY_DETAILS,
  PROJECTS,
  SKILLSETS,
  SKILL_GROUPS,
} from "./index";

/**
 * The voyage, as sagas.
 *
 * Every section of the page is a SAGA — a leg of the route with its own island
 * on the Grand Line map. Every repeated element inside a section is an ARC of
 * that saga, numbered in reading order. Arcs are derived from the existing
 * content arrays wherever one exists, so adding a project or a job adds an arc
 * to its saga automatically — nothing to keep in sync by hand.
 *
 * `isle` is the island on the 3D map: `pos` is [x, z] in map space (the route
 * runs from +z to -z), `kind` picks the silhouette, `tint` the sand colour.
 */

/**
 * An arc carries enough of its own content to be read on the map without the
 * page: `name` and `note` for the marker, and `body` / `tags` / `bullets` /
 * `when` / `where` / `badge` for the detail panel when you pick it.
 */
const arcsFrom = (items, build) => items.map(build);

export const SAGAS = [
  {
    id: "home",
    no: "I",
    log: "00",
    nav: "Deck",
    name: "The Departure Saga",
    kicker: "Deck",
    title: "Ahoy — the name's Kabir",
    blurb: null,
    isle: { kind: "lighthouse", tint: "#cba055", pos: [-9, 17], scale: 1.05 },
    arcs: [
      {
        name: "Colours to the Mast",
        note: "who is aboard",
        badge: "Open to work",
        body: "Backend engineer in Django, Laravel and FastAPI — the below-deck engine room where slow queries get fast, jobs survive bad input, and systems tell you when they break.",
      },
      {
        name: "The Wanted Poster",
        note: "the bounty notice",
        badge: "Available immediately",
        body: "The hire notice: available now, based in Bagerhat, Bangladesh, and open to remote or relocation for backend work.",
      },
    ],
  },
  {
    id: "about",
    no: "II",
    log: "01",
    nav: "The Pirate",
    name: "The Flag Saga",
    kicker: "The Pirate",
    title: "A backend that behaves under pressure",
    blurb: null,
    isle: { kind: "twin", tint: "#c9a24a", pos: [6, 8], scale: 1.0 },
    arcs: [
      {
        name: "The Leader Card",
        note: "the pirate himself",
        badge: "Backend",
        body: "Owns systems end to end — schema through migration, deployment, and the Linux boxes they run on.",
      },
      {
        name: "The Log Entry",
        note: "what the work actually is",
        body: ABOUT_TEXT.split("\n\n")[0],
      },
      {
        name: "Haki I Fight With",
        note: "the disciplines",
        body: "The areas the work keeps returning to, whatever the framework underneath happens to be.",
        tags: SKILLSETS,
      },
      {
        name: "The DON!! Tally",
        note: "the tally",
        body: "Every figure on this site counts something on this site — roles held, systems built, and how many of them a stranger could hit today.",
      },
    ],
  },
  {
    id: "skills",
    no: "III",
    log: "02",
    nav: "Powers",
    name: "The Devil Fruit Saga",
    kicker: "Powers",
    title: "The arsenal aboard",
    blurb:
      "Every pirate has their devil fruit and their crew — here's the kit behind the systems: languages, fighting styles, the treasure vault, and the ship it all runs on.",
    isle: { kind: "volcano", tint: "#c08a3e", pos: [-7, -1], scale: 1.15 },
    arcs: arcsFrom(SKILL_GROUPS, (g) => ({
      name:
        {
          Languages: "Tongues of the Sea",
          Frameworks: "Fighting Styles",
          Data: "The Treasure Vault",
          Infrastructure: "The Ship & Crew",
        }[g.heading] || g.heading,
      note: g.heading,
      badge: `${g.items.length} tools`,
      body: {
        Languages: "Written daily in production code.",
        Frameworks: "Systems built end to end and shipped on these.",
        Data: "Schema design, indexing and migrations — owned, not inherited.",
        Infrastructure: "Deployed and operated, not handed to someone else.",
      }[g.heading],
      tags: g.items,
    })),
  },
  {
    id: "projects",
    no: "IV",
    log: "03",
    nav: "Bounties",
    name: "The Bounty Saga",
    kicker: "Bounties",
    title: "Treasures hauled in",
    blurb:
      "Backend work doesn't photograph well — so each bounty is dealt as a card: the problem, the decision, and the tradeoff. Ordered by the size of the haul.",
    isle: { kind: "spire", tint: "#d0ad5a", pos: [9, -10], scale: 1.25 },
    arcs: arcsFrom(PROJECTS, (p) => ({
      name: p.title,
      note: p.org || p.context,
      badge: p.status,
      body: p.description,
      bullets: p.highlights,
      tags: p.technologies,
      outcome: p.outcome,
      link: p.appLink || p.gitLink || null,
    })),
  },
  {
    id: "experience",
    no: "V",
    log: "04",
    nav: "Voyage",
    name: "The Grand Line Saga",
    kicker: "Voyage",
    title: "Islands on the log pose",
    blurb:
      "Four ports along the Grand Line, each one a step deeper into ownership — from first APIs to architecting a multi-tenant platform.",
    isle: { kind: "arch", tint: "#c19a44", pos: [-5, -20], scale: 1.1 },
    arcs: arcsFrom(EXPERIENCES, (e) => ({
      name: e.company,
      note: e.role,
      when: e.year,
      badge: e.year.includes("Present") ? "Current" : "Completed",
      body: e.description,
      tags: e.technologies,
      outcome: e.outcome,
    })),
  },
  {
    id: "educations",
    no: "VI",
    log: "05",
    nav: "Training",
    name: "The Whetstone Saga",
    kicker: "Training",
    title: "Where the sword was forged",
    blurb: null,
    isle: { kind: "plateau", tint: "#b98f3e", pos: [8, -28], scale: 0.95 },
    arcs: arcsFrom(EDUCATIONS, (e) => ({
      name: e.name,
      note: e.title,
      when: e.year.trim(),
      where: e.location,
      badge: "Completed",
    })),
  },
  {
    id: "contact",
    no: "VII",
    log: "06",
    nav: "Hail",
    name: "The Log Pose Saga",
    kicker: "Hail",
    title: "Ready to set sail?",
    blurb: null,
    isle: { kind: "mound", tint: "#caa350", pos: [-8, -37], scale: 1.0 },
    arcs: [
      {
        name: "The Den Den Mushi",
        note: "the hail",
        badge: "Recruiting crew",
        body: "Have a system that needs to stay correct under load — or one that already ran aground? Send a Den Den Mushi.",
        tags: [MY_DETAILS.email, MY_DETAILS.address],
      },
      {
        name: "The Crew Roster",
        note: "where else to find me",
        body: "LinkedIn, GitHub, LeetCode and the rest — the trail of work outside this page.",
      },
    ],
  },
];

export const SAGA_IDS = SAGAS.map((s) => s.id);

export const sagaById = (id) => SAGAS.find((s) => s.id === id);

export const TOTAL_ARCS = SAGAS.reduce((n, s) => n + s.arcs.length, 0);
