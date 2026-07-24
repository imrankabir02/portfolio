export const MY_DETAILS = {
  name: "Mridha Imran Kabir",
  title: "Backend Engineer",
  role: "IT Engineer at",
  company: "BIFPCL",
  companyLink: "https://www.bifpcl.com/",
  email: "imrankabir325@gmail.com",
  address: "Bagerhat, Bangladesh",
};

export const ABOUT_TEXT = `Backend engineer in Django, Laravel, and FastAPI. Most of my work is unglamorous: slow queries made fast, jobs that survive bad input, systems that tell you when they break.

I care about the 2am details — idempotent jobs, per-row error isolation, tenant data the database itself keeps from leaking, indexes chosen for the real query. I've owned systems end to end — a multi-tenant SaaS backend, a broad internal platform, workflow engines, data pipelines — from schema design through migration, deployment, and the Linux boxes they run on.`;

export const SKILLSETS = [
  "REST API design",
  "Query optimisation & indexing",
  "Background jobs & queues",
  "Multi-tenant data isolation",
  "Workflow & state machines",
  "Schema design & migrations",
  "Deployment & CI/CD",
];

export const SKILL_GROUPS = [
  {
    heading: "Languages",
    items: ["PHP", "Python", "JavaScript"],
  },
  {
    heading: "Frameworks",
    items: ["Laravel", "Django", "FastAPI", "React"],
  },
  {
    heading: "Data",
    items: ["MySQL", "PostgreSQL", "MSSQL", "Redis"],
  },
  {
    heading: "Infrastructure",
    items: ["Docker", "Celery", "Nginx", "Linux", "AWS", "Git"],
  },
];

export const EXPERIENCES = [
  {
    year: "July 2026 - Present",
    role: "Backend Engineer (Contract)",
    company: "CloudHub",
    description: `Lead backend author on a multi-tenant B2B SaaS platform. Tenant isolation is enforced in the database with PostgreSQL Row-Level Security, so a missing WHERE clause fails closed instead of leaking another tenant's data. Also built a transactional outbox for reliable notifications, TimescaleDB time-series ingestion, and concurrency-safe scheduling. I own the backend architecture and its design docs.`,
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "TimescaleDB",
      "Row-Level Security",
      "Transactional Outbox",
      "Celery",
      "Docker",
      "Nginx",
    ],
  },
  {
    year: "June 2025 - Present",
    role: "IT Engineer",
    company: "BIFPCL",
    description: `Titled IT Engineer, but the work is mostly backend. Primary author of a large internal Django platform — a multi-module monolith I've built and maintained single-handed since late 2025. Migrated it from SQLite to MSSQL in place, moved slow file handling onto background workers, and extracted a heavily-used module into its own service. Plus Linux operations, containerised deployment, and monitoring.`,
    technologies: [
      "Django",
      "DRF",
      "Celery",
      "Redis",
      "MSSQL",
      "Linux",
      "Nginx",
    ],
  },
  {
    year: "January 2025 - June 2025",
    role: "Software Engineer",
    company: "Barikoi Maps",
    description: `Location-intelligence backends in Laravel and MySQL: spatial filtering — geofence containment, nearby-point lookups — and the indexing to keep it fast as data grew. Redis for caching and queues, Laravel WebSockets for real-time, Docker on AWS.`,
    technologies: [
      "Laravel",
      "MySQL",
      "Spatial Indexing",
      "Redis",
      "WebSockets",
      "Docker",
      "AWS",
    ],
  },
  {
    year: "January 2024 - January 2025",
    role: "Backend Developer",
    company: "Phone Tech BD Ltd",
    description: `First professional backend role. Built two Laravel applications from scratch — including Shifttrek, a workforce-scheduling product now in production — covering schema design, REST APIs, and authentication, and refactored legacy modules that had grown hard to change safely.`,
    technologies: [
      "Laravel",
      "MySQL",
      "Livewire",
      "REST API",
      "Database Design",
    ],
  },
];

export const EDUCATIONS = [
  {
    title: "B.Sc in Computer Science & Engineering",
    name: "Khulna University",
    location: "Khulna, Bangladesh",
    year: "January 2018 - March 2024",
  },
];

// Ordered strongest first. Backend systems don't photograph well, so each card is
// a short problem → decision → tradeoff, not a screenshot. Keep them tight: one- or
// two-sentence description, at most three highlights. Employer/client systems are
// named (`org`) and described at the engineering level only — architecture and
// decisions, never data, secrets, repositories, or internal infrastructure.
export const PROJECTS = [
  {
    title: "CloudHR",
    org: "Lead Backend Engineer · CloudHub",
    context: "FastAPI · PostgreSQL · TimescaleDB",
    note: "Client product · code is private — walkthrough on request.",
    description:
      "A multi-tenant B2B SaaS I'm the lead backend author on. The whole design turns on tenant isolation — enforced in the database with PostgreSQL Row-Level Security, so a forgotten WHERE clause fails closed instead of leaking another tenant's data.",
    highlights: [
      "Tenant isolation via database-enforced Row-Level Security, not app-layer filtering",
      "Transactional outbox so notifications survive a broker outage",
      "TimescaleDB time-series ingestion with evaluation in a background worker",
    ],
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "TimescaleDB",
      "Row-Level Security",
      "Celery",
      "Docker",
    ],
  },
  {
    title: "BIFPCL Operations Platform",
    org: "Sole backend author · BIFPCL",
    context: "Django · MSSQL · Docker · CI/CD",
    note: "Internal system · code is private — walkthrough on request.",
    description:
      "The internal operations platform at BIFPCL — a multi-module Django monolith I'm the sole author of, covering a broad range of operational workflows. The engineering problem is keeping a system this wide coherent, migratable, and deployable as requirements keep arriving.",
    highlights: [
      "80+ models under one Django project, single-author ownership",
      "In-place SQLite → MSSQL migration behind a data-migration script",
      "Containerised nginx / uWSGI stack with a fail-fast CI pipeline",
    ],
    technologies: ["Django", "MSSQL", "Docker", "Nginx", "uWSGI", "CI/CD"],
  },
  {
    title: "Gatepass — Approval Workflow",
    org: "Backend · BIFPCL",
    context: "Django · DRF · Celery · Redis",
    note: "Internal system · code is private — walkthrough on request.",
    description:
      "BIFPCL's gate-pass approval system, extracted from the platform above into its own service. Requests route through multiple approvers, each transition modelled as an explicit finite state machine — so an approval can't land in an inconsistent or unrecoverable state. The core problem is correctness under concurrent, multi-step approvals.",
    highlights: [
      "Approval state machine on django-fsm — atomic and recoverable, no half-applied transitions",
      "JWT-authenticated API with bulk actions and CSV export",
      "Celery + Redis for background work and operational alerting",
    ],
    technologies: ["Django", "DRF", "Celery", "Redis", "django-fsm", "Docker"],
  },
  {
    title: "Vendor Procurement Portal",
    org: "Backend · BIFPCL",
    context: "Django · Services Layer · UBAC",
    note: "Internal system · code is private — walkthrough on request.",
    description:
      "BIFPCL's vendor procurement portal — a dual-portal design (external for vendors, internal for staff) over one shared domain model. The focus is separation of concerns: business rules live in a dedicated services layer, not in views or models.",
    highlights: [
      "Dual-portal architecture over one shared domain model",
      "Business rules isolated in a dedicated services layer",
      "Database-driven fine-grained access control (UBAC) with a full audit trail",
    ],
    technologies: ["Django", "Services Layer", "UBAC", "Tailwind", "Bootstrap"],
  },
  {
    title: "Reliable Background Import System",
    context: "Laravel · MySQL · Redis queues",
    note: "Private repository — happy to walk through the code on request.",
    description:
      "Monica CRM imports contacts synchronously in-request — the whole file loaded into memory, timing out past a few hundred rows. I rebuilt it as an async pipeline: the CSV streams row by row, work chains across queue jobs, and each row's outcome is recorded independently so one bad record can't abort the run.",
    highlights: [
      "Three-stage job chain, configurable batch size; streamed, never fully buffered",
      "Per-row error isolation — failed rows stay queryable and export as a corrected CSV",
      "54 tests / 189 assertions, plus ADRs on the key tradeoffs",
    ],
    technologies: ["Laravel 11", "MySQL", "Redis", "Queue Workers", "PHPUnit"],
  },
  {
    title: "Legal Document Intelligence Pipeline",
    context: "FastAPI · Python · Chroma · Docker",
    note: "Private repository — happy to walk through the code on request.",
    description:
      "An ingestion-to-draft pipeline for messy legal documents. PDFs are extracted (OCR fallback) and cleaned, retrieved over a hybrid BM25 + vector index, then a grounded draft is generated with citations back to the source.",
    highlights: [
      "Hybrid retrieval — BM25 for exact terms, Chroma vectors for semantic recall",
      "Grounded output with an evidence trail back to source passages",
      "Learns from operator edits (capture → diff → pattern store) · 57 tests, dockerised",
    ],
    technologies: ["FastAPI", "Python", "Chroma", "BM25", "React", "Docker"],
  },
  {
    title: "Shifttrek — Workforce Management Platform",
    org: "Backend · Phone Tech BD",
    context: "Production system · Laravel · MySQL",
    appLink: "https://www.shifttrek.com/",
    description:
      "A production workforce-scheduling product built at Phone Tech, now serving live operational workflows. My work centred on backend stability and database efficiency — schema design, query tuning, and predictable scheduling logic under real use.",
    technologies: ["Laravel", "MySQL", "Livewire", "TailwindCSS"],
  },
  {
    title: "CV Studio",
    context: "React 19 · Vite · Supabase",
    appLink: "https://cv-studio-v1.vercel.app/",
    description:
      "A free, no-signup CV builder for freshers. Local-first by design — everything lives in the browser, with optional Supabase sign-in for cross-device sync that stays off by default. The hard parts here are product ones: guiding someone who's staring at a blank field, and a PDF export that keeps text selectable and ATS-readable.",
    highlights: [
      "Local-first — fully usable with no account; cloud sync is opt-in via Supabase",
      "Guided authoring: 7 starter personas, inline writing tips, a completeness / ATS meter",
      "Print-ready A4 PDF export with selectable text, plus JSON import / export",
    ],
    technologies: ["React 19", "Vite", "Supabase", "localStorage"],
  },
  {
    title: "BanglaHealth — Health Records Prototype",
    context: "Django · DRF · Celery · Docker",
    note: "Work-in-progress prototype — private repository, walkthrough on request.",
    description:
      "A prototype health-records platform built around the hard domain problems rather than CRUD: patient–practitioner relationships, consent over who can read a record, and reporting aggregation.",
    highlights: [
      "~20 models across patients, practitioners, records, and consent",
      "Celery workers for notifications and background aggregation",
      "Honest status: ambitious prototype, not production — thin tests are next",
    ],
    technologies: ["Django", "DRF", "Celery", "PostgreSQL", "Docker"],
  },
];
