/* ------------------------------------------------------------------ */
/*  Selected Work — concise, single-page project data.                  */
/*  Metrics are verified (resume + brief); nothing invented.            */
/*  Klaritics & Swamithra intentionally carry no numeric results.       */
/* ------------------------------------------------------------------ */

export type Project = {
  id: string;
  name: string;
  company: string;
  domain: string;
  description: string; // max ~2 lines on the card
  contribution: string; // one concise sentence
  impact?: string; // headline metric shown on the card
  // Short modal detail (each 1–2 sentences; ~50–80 words total)
  problem: string;
  work: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    id: "education-loan",
    name: "Multi-Lender Education Loan Platform",
    company: "Deepta AI",
    domain: "Fintech / EdTech",
    description:
      "An embedded education-loan flow inside the university admission form, integrating Avanse, Fibe and Propelld with real-time status tracking.",
    contribution:
      "Defined the loan workflows and multi-lender experience, and drove launch with engineering and lending partners.",
    impact: "5–7 → 1–2 day turnaround · 1,260 loan-funded students · ₹18 Cr+ admissions",
    problem:
      "Loan applications ran on manual coordination and Excel hand-offs between students, counsellors and lenders, with no real-time status — causing 5–7 day turnarounds and a poor experience.",
    work:
      "I defined the application workflows and a consistent multi-lender experience across Avanse, Fibe and Propelld, plus status tracking — coordinating engineering and partners through launch.",
    outcome:
      "Turnaround dropped to 1–2 days, supporting 1,260 loan-funded students and ₹18 Cr+ in admissions for Jain University's Jan '26 intake.",
  },
  {
    id: "coupon-platform",
    name: "Configurable Coupon Management Platform",
    company: "Deepta AI",
    domain: "B2B SaaS / EdTech",
    description:
      "A configurable coupon platform with rule-based eligibility and redemption controls across universities and admission batches.",
    contribution:
      "Defined the eligibility and redemption rules and coordinated design and engineering to launch.",
    impact: "₹1.4 Cr+ discounts governed",
    problem:
      "Discounts were hard to control across universities and admission batches, leaving a revenue-leakage gap.",
    work:
      "I defined rule-based eligibility, redemption controls and university- and batch-level configuration, then coordinated design and engineering to ship it.",
    outcome:
      "Governed ₹1.4 Cr+ in redeemed discounts in its first live batch, closing the leakage gap.",
  },
  {
    id: "fee-renewal",
    name: "Centralized Fee-Renewal Platform",
    company: "Deepta AI",
    domain: "Payments / EdTech",
    description:
      "A centralized platform to collect fee renewals after a legacy-system migration removed the existing process.",
    contribution:
      "Identified the gap, defined the renewal workflow and drove launch with engineering.",
    impact: "₹10 Cr+ renewal revenue enabled",
    problem:
      "A legacy-system migration left the business with no way to collect fee renewals, putting recurring revenue at risk.",
    work:
      "I identified the requirement, defined the end-to-end renewal workflow and coordinated engineering to build and launch a centralized platform.",
    outcome: "Restored renewal collection and enabled ₹10 Cr+ in renewal revenue.",
  },
  {
    id: "klaritics",
    name: "Klaritics — Product Analytics Platform",
    company: "Deepta AI",
    domain: "Product Analytics / B2B SaaS",
    description:
      "Product discovery and roadmap for a product analytics platform, grounded in customer research and competitive benchmarking.",
    contribution:
      "Led discovery and defined and delivered the core analytics capabilities.",
    impact: "Dashboards · Cohorts · Alerts · RBAC",
    problem:
      "The analytics platform needed a clear roadmap grounded in real customer needs rather than assumptions.",
    work:
      "I led discovery through customer research and competitive benchmarking, then defined and delivered Dashboards Management, Third-Party Cohorts, Alerts and RBAC.",
    outcome:
      "Shipped four core capabilities — structured dashboards, cohort analysis, proactive alerts and role-based access control.",
  },
  {
    id: "swamithra",
    name: "Swamithra — 0-to-1 Product Definition",
    company: "Deepta AI",
    domain: "SaaS / Tax Technology",
    description:
      "A 0-to-1 definition for an income-tax notice assistance platform connecting taxpayers and CAs with ex-IRS experts.",
    contribution:
      "Turned a raw idea into a fully scoped product — research, personas, PRDs, scope and acceptance criteria.",
    impact: "Idea → execution-ready product definition",
    problem:
      "A client had a raw idea for a tax-notice assistance platform but no defined product.",
    work:
      "I ran user research, defined personas, and produced PRDs, scope and acceptance criteria — independently turning the idea into an execution-ready definition.",
    outcome:
      "Delivered a fully scoped 0-to-1 product concept ready for a team to build (discovery and definition — not yet launched).",
  },
  {
    id: "campaign-diagnostics",
    name: "Campaign Diagnostics & Self-Service Experience",
    company: "Apxor",
    domain: "B2B SaaS / Product Analytics",
    description:
      "Event-level campaign diagnostics with failure-state visibility across the SDK and dashboard.",
    contribution:
      "Defined the diagnostic requirements and worked with engineering to enable self-service debugging.",
    impact: "50% fewer CSM support tickets",
    problem:
      "Clients couldn't tell why campaigns failed, so every issue needed Customer Success and engineering to diagnose.",
    work:
      "I defined event-level diagnostics that surface failure states across the SDK and dashboard, and partnered with engineering to ship self-service debugging.",
    outcome:
      "Clients could diagnose failed campaigns themselves, cutting CSM support tickets by 50%.",
  },
];
