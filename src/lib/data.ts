/* ------------------------------------------------------------------ */
/*  Central content source. Edit text here — components read from it.   */
/*  PLACEHOLDER = confirm / replace before sharing.                     */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Jahnavi Kotana",
  firstName: "Jahnavi",
  role: "Associate Product Manager",
  tagline:
    "Associate Product Manager · B2B SaaS · Product Discovery · Execution · Analytics",
  heroHeadline:
    "Building customer-centric products through discovery, data and execution.",
  heroIntro:
    "Associate Product Manager with 3+ years in B2B SaaS across Fintech, EdTech, Payments and Analytics. I turn customer problems and business requirements into scalable products — working closely with engineering, design and business teams from discovery to launch.",
  email: "jahnavi.kotana2002@gmail.com",
  phone: "+91 86883 82352",
  linkedin: "https://www.linkedin.com/in/jahnavi-kotana",
  resumePath: "/Kotana_Jahnavi_Resume.pdf",
  location: "India",
};

export const highlights: string[] = [
  "3+ Years Experience",
  "2+ Years Product Management",
  "B2B SaaS",
  "0-to-1 Product Development",
  "Product Analytics",
];

// Slim set of verified numbers for the hero.
export type HeroStat = { value: string; label: string };
export const heroStats: HeroStat[] = [
  { value: "₹18 Cr+", label: "Admissions enabled" },
  { value: "₹10 Cr+", label: "Renewal revenue" },
  { value: "50%", label: "Fewer support tickets" },
];

// About — kept under ~100 words.
export const aboutText =
  "My journey into product started in customer success, partnering with enterprise customers to understand their real-world problems and translate goals into product use cases. I moved into product management and now own discovery, PRDs, prioritization and launch across B2B SaaS. Over 3+ years — at Deepta AI and Apxor — I've shipped lending, payments, fee and analytics products, working closely with engineering, design and business teams. I care about finding the right problem, making informed decisions, and shipping solutions that create measurable business and customer value.";

export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Deepta AI Private Limited",
    role: "Associate Product Manager",
    period: "Sep 2025 – Present",
    current: true,
    bullets: [
      "Launched an embedded multi-lender education-loan flow (Avanse, Fibe, Propelld), cutting turnaround from 5–7 days to 1–2 days and supporting ₹18 Cr+ in admissions.",
      "Shipped a configurable coupon platform governing ₹1.4 Cr+ in discounts, and a centralized fee-renewal platform enabling ₹10 Cr+ in renewal revenue.",
      "Led discovery and delivery for Klaritics analytics and scoped Swamithra, a 0-to-1 income-tax notice platform.",
    ],
  },
  {
    company: "Apxor Technology Solutions Pvt Ltd",
    role: "Associate Product Manager",
    period: "Sep 2024 – Aug 2025",
    bullets: [
      "Cut CSM support tickets by 50% with event-level campaign diagnostics and failure-state visibility across the SDK and dashboard.",
      "Reduced appointment booking time from 10–15 minutes to 2–3 minutes across Hearzap's franchise network by redesigning the flow.",
      "Removed engineering dependency from view configuration with a multi-strategy view system, enabling independent growth experiments.",
    ],
  },
  {
    company: "Apxor Technology Solutions Pvt Ltd",
    role: "Associate Customer Success Manager",
    period: "May 2023 – Aug 2024",
    bullets: [
      "Partnered with 8+ enterprise customers across fintech, banking, retail and EdTech on onboarding, SDK integration and adoption.",
      "Guided SDK integrations and first in-app campaigns to accelerate time-to-value.",
      "Designed and analyzed A/B experiments with Product, Design and Engineering to optimize engagement and conversion.",
    ],
  },
];

// Simple five-step approach — labels only, no long explanations.
export const approachSteps: string[] = [
  "Discover",
  "Define",
  "Prioritize",
  "Build",
  "Measure",
];

export type SkillGroup = { title: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Product Management",
    skills: [
      "Product Strategy",
      "Product Discovery",
      "Product Roadmap",
      "User Research",
      "Customer Interviews",
      "PRD Writing",
      "User Stories",
      "Acceptance Criteria",
      "Backlog Prioritization",
      "MVP Scoping",
      "Stakeholder Management",
      "Cross-Functional Collaboration",
      "Agile Product Development",
      "0-to-1 Products",
    ],
  },
  {
    title: "Product Analytics",
    skills: [
      "Product Metrics & KPIs",
      "Funnel Analysis",
      "A/B Testing",
      "Cohort Analysis",
      "Experimentation",
      "Data-Driven Decision Making",
      "Competitive Analysis",
    ],
  },
  {
    title: "Execution",
    skills: [
      "API Integrations",
      "Webhooks",
      "Lending Integrations",
      "SDK Integrations",
      "Sprint Planning",
      "UAT Coordination",
      "Post-Launch Operations",
    ],
  },
  {
    title: "Domains",
    skills: [
      "B2B SaaS",
      "B2B2C SaaS",
      "EdTech",
      "Analytics Platforms",
      "Payments & Reconciliation",
      "Lending",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Mixpanel",
      "Apxor",
      "Figma",
      "Notion",
      "GitLab",
      "Slack",
      "WebEngage",
      "Lovable",
      "AiSensy",
    ],
  },
];

export const certifications = [
  { title: "Product Management: An Introduction", issuer: "IBM via Coursera" },
];

export const education = [
  {
    degree: "B.Tech — Computer Science and Engineering",
    school: "JNTU — Gurajada Vizianagaram",
    period: "2019 – 2023",
    detail: "CGPA: 8.4",
  },
];

export const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
