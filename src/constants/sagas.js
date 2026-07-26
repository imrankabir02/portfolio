import { SKILL_GROUPS, PROJECTS, EXPERIENCES, EDUCATIONS } from "./index";

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

const arcsFrom = (items, name, note) =>
  items.map((item) => ({ name: name(item), note: note(item) }));

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
      { name: "Colours to the Mast", note: "who is aboard" },
      { name: "The Wanted Poster", note: "the bounty notice" },
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
      { name: "The Leader Card", note: "the pirate himself" },
      { name: "The Log Entry", note: "what the work actually is" },
      { name: "Haki I Fight With", note: "the disciplines" },
      { name: "The DON!! Tally", note: "the tally" },
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
    arcs: arcsFrom(
      SKILL_GROUPS,
      (g) =>
        ({
          Languages: "Tongues of the Sea",
          Frameworks: "Fighting Styles",
          Data: "The Treasure Vault",
          Infrastructure: "The Ship & Crew",
        }[g.heading] || g.heading),
      (g) => g.heading
    ),
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
    arcs: arcsFrom(
      PROJECTS,
      (p) => p.title,
      (p) => p.org || p.context
    ),
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
    arcs: arcsFrom(
      EXPERIENCES,
      (e) => e.company,
      (e) => e.role
    ),
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
    arcs: arcsFrom(
      EDUCATIONS,
      (e) => e.name,
      (e) => e.title
    ),
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
      { name: "The Den Den Mushi", note: "the hail" },
      { name: "The Crew Roster", note: "where else to find me" },
    ],
  },
];

export const SAGA_IDS = SAGAS.map((s) => s.id);

export const sagaById = (id) => SAGAS.find((s) => s.id === id);

export const TOTAL_ARCS = SAGAS.reduce((n, s) => n + s.arcs.length, 0);
