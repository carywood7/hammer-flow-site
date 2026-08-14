export const workflowControls = [
  "34 separate blueprints",
  "Synthetic fixtures",
  "Deterministic rules",
  "Human review",
  "Inactive, sanitized exports",
  "No production writes",
] as const;

export const workflowGroups = [
  {
    id: "service-desk-operations",
    title: "Service Desk & Operations",
    range: "HF-001–HF-004",
    description:
      "Reporting, SLA visibility, dispatcher support, and recurring-incident detection for day-to-day service operations.",
    workflowIds: ["HF-001", "HF-002", "HF-003", "HF-004"],
  },
  {
    id: "identity-people-licensing",
    title: "Identity, People & Licensing",
    range: "HF-005–HF-007",
    description:
      "Onboarding, licensing, and offboarding review with explicit human approval before access or billing changes.",
    workflowIds: ["HF-005", "HF-006", "HF-007"],
  },
  {
    id: "security-client-risk",
    title: "Security & Client Risk",
    range: "HF-008–HF-009",
    description:
      "Prioritized security and relationship-risk review without automatic endpoint response or client communication.",
    workflowIds: ["HF-008", "HF-009"],
  },
  {
    id: "reporting-governance-profitability",
    title: "Reporting, Governance & Profitability",
    range: "HF-010–HF-013",
    description:
      "QBR preparation, Microsoft 365 governance, backup readiness, and agreement profitability analysis.",
    workflowIds: ["HF-010", "HF-011", "HF-012", "HF-013"],
  },
  {
    id: "endpoint-compliance-protection",
    title: "Endpoint Compliance & Protection",
    range: "HF-014–HF-015",
    description:
      "Patch, vulnerability, and security-tool coverage exceptions across the managed endpoint estate.",
    workflowIds: ["HF-014", "HF-015"],
  },
  {
    id: "finance-procurement",
    title: "Finance & Procurement",
    range: "HF-016 · HF-033",
    description:
      "Collections, cash-risk, purchasing, and vendor-invoice exceptions for authorized finance review.",
    workflowIds: ["HF-016", "HF-033"],
  },
  {
    id: "growth-marketing-sales",
    title: "Growth, Marketing & Sales",
    range: "HF-017–HF-018 · HF-022 · HF-026–HF-028",
    description:
      "Lead, campaign, pipeline, email, and search evidence organized into explainable reviews and reports.",
    workflowIds: ["HF-017", "HF-018", "HF-022", "HF-026", "HF-027", "HF-028"],
  },
  {
    id: "people-productivity-scheduling",
    title: "People, Productivity & Scheduling",
    range: "HF-019–HF-020 · HF-025",
    description:
      "Workload, recruiting follow-up, dispatch coverage, and scheduling visibility without automated people decisions.",
    workflowIds: ["HF-019", "HF-020", "HF-025"],
  },
  {
    id: "research-analytics-intelligence",
    title: "Research, Analytics & Intelligence",
    range: "HF-021 · HF-023–HF-024",
    description:
      "Evidence-backed vendor research, service trends, and client-portfolio prioritization for human review.",
    workflowIds: ["HF-021", "HF-023", "HF-024"],
  },
  {
    id: "data-engineering-devops",
    title: "Data, Engineering & DevOps",
    range: "HF-029–HF-032",
    description:
      "Data quality, structured extraction, deployment readiness, and control-evidence exception reviews.",
    workflowIds: ["HF-029", "HF-030", "HF-031", "HF-032"],
  },
  {
    id: "content-creation",
    title: "Content Creation",
    range: "HF-034",
    description:
      "Source-grounded briefs and channel drafts with explicit claim, rights, statistics, and accessibility review.",
    workflowIds: ["HF-034"],
  },
] as const;

export const referenceWorkflows = [
  {
    id: "HF-001",
    group: "service-desk-operations",
    category: "Service desk intelligence",
    title: "Weekly Executive Service Desk Digest",
    purpose:
      "Turns PSA ticket activity into a consistent weekly management summary without manual spreadsheet assembly.",
    logic: [
      "Opened, resolved, and still-open counts",
      "SLA, reopen, and waiting-state metrics",
      "Category and client activity ranking",
    ],
    proof:
      "10 opened · 6 resolved · 3 SLA breaches · 17h average resolution",
    outcome: "Executive HTML digest",
    control: "Read-only reporting",
  },
  {
    id: "HF-002",
    group: "service-desk-operations",
    category: "Service-level management",
    title: "SLA Risk Alert",
    purpose:
      "Surfaces open tickets that have breached or are approaching SLA, including high-priority unassigned and stale active work.",
    logic: [
      "Breached, critical, high-risk, and watch bands",
      "High-priority unassigned detection",
      "Stale active-ticket detection",
    ],
    proof:
      "8 attention tickets · 2 breached · 2 critical · 3 high-priority unassigned",
    outcome: "Prioritized internal alert",
    control: "No PSA write actions",
  },
  {
    id: "HF-003",
    group: "service-desk-operations",
    category: "Dispatch operations",
    title: "New Ticket Triage & Routing Recommendation",
    purpose:
      "Reviews new or untriaged tickets and recommends urgency, service category, destination team, and dispatcher action.",
    logic: [
      "Deterministic category and routing rules",
      "Security, impact, VIP, and information flags",
      "Current-priority alignment",
    ],
    proof:
      "12 evaluated · 2 emergency · 7 urgent · 5 high-urgency unassigned",
    outcome: "Dispatcher review queue",
    control: "No technician assignment",
  },
  {
    id: "HF-004",
    group: "service-desk-operations",
    category: "Problem management",
    title: "Recurring Incident & Problem Candidate Detection",
    purpose:
      "Groups repeated incidents through exact deterministic signatures and transparent recurrence scoring for service-manager review.",
    logic: [
      "Fixed 30-day lookback",
      "Exact issue signatures and cluster keys",
      "Deterministic severity and ordering",
    ],
    proof:
      "21 eligible tickets · 7 recurring clusters · 4 problem candidates",
    outcome: "Problem-candidate report",
    control: "No ticket merge or problem creation",
  },
  {
    id: "HF-005",
    group: "identity-people-licensing",
    category: "Identity & access",
    title: "New Hire Onboarding Readiness & Provisioning Recommendation",
    purpose:
      "Checks onboarding requests for missing information, possible duplicates, policy conflicts, and elevated access before provisioning.",
    logic: [
      "Identity and contact conflict checks",
      "Policy, privilege, and approval rules",
      "Fixed readiness-status precedence",
    ],
    proof:
      "8 requests · 2 duplicate · 2 policy · 2 information · 2 ready",
    outcome: "Provisioning approval queue",
    control: "No account or access changes",
  },
  {
    id: "HF-006",
    group: "identity-people-licensing",
    category: "Licensing & billing control",
    title: "Pax8 License Reconciliation & Billing Leakage Alert",
    purpose:
      "Reconciles purchased subscriptions, assigned Microsoft 365 licenses, and PSA agreement quantities to expose billing and licensing drift.",
    logic: [
      "Distributor, assignment, and agreement reconciliation",
      "Used-not-billed and paid-unused detection",
      "Orphaned, terminated-user, and quantity-mismatch rules",
    ],
    proof:
      "5 discrepancies · 1 matched · $62 monthly leakage · $2,049.60 annual exposure",
    outcome: "Financial review queue",
    control: "No license or billing changes",
  },
  {
    id: "HF-007",
    group: "identity-people-licensing",
    category: "Employee lifecycle",
    title: "Secure Employee Offboarding Readiness",
    purpose:
      "Reviews offboarding requests for timing, completeness, approvals, and lingering access risk before an authorized administrator acts.",
    logic: [
      "Request completeness and timing checks",
      "Approval and ownership validation",
      "Access, session, mailbox, and license review prompts",
    ],
    proof:
      "12 requests · 6 deterministic classifications · 2 in each class",
    outcome: "Prioritized offboarding queue",
    control: "No account disablement or access revocation",
  },
  {
    id: "HF-008",
    group: "security-client-risk",
    category: "Security operations",
    title: "Endpoint Security Alert Triage",
    purpose:
      "Applies transparent severity, threat-state, endpoint, age, and risk rules to endpoint-protection alerts.",
    logic: [
      "Deterministic alert-risk scoring",
      "Endpoint and threat-state context",
      "Review, escalation, and no-escalation classification",
    ],
    proof:
      "18 alerts · 15 in review queue · 3 no-escalation outcomes",
    outcome: "Prioritized analyst queue",
    control: "No endpoint isolation or alert closure",
  },
  {
    id: "HF-009",
    group: "security-client-risk",
    category: "Client success",
    title: "Client Sentiment & Churn-Risk Alert",
    purpose:
      "Combines service, satisfaction, feedback, and missing-data signals into a consistent client-risk review.",
    logic: [
      "Transparent thresholds and point values",
      "Fixed status-classification precedence",
      "Operational and relationship-signal evidence",
    ],
    proof:
      "14 clients · 7 statuses · top 2 immediate escalations scored 194",
    outcome: "Client-success risk queue",
    control: "No client contact or account-status changes",
  },
  {
    id: "HF-010",
    group: "reporting-governance-profitability",
    category: "Account management",
    title: "Automated QBR Data Harvester",
    purpose:
      "Collects, normalizes, and validates service, security, licensing, billing, asset, and client-success data for quarterly business reviews.",
    logic: [
      "Multi-source client normalization",
      "Completeness and freshness validation",
      "Deterministic readiness and risk priorities",
    ],
    proof:
      "6 clients · 10 source areas · consolidated QBR preparation package",
    outcome: "QBR review package",
    control: "Read-only and advisory",
  },
  {
    id: "HF-011",
    group: "reporting-governance-profitability",
    category: "Microsoft 365 governance",
    title: "Microsoft 365 Security Baseline & Privileged Access Review",
    purpose:
      "Reviews privileged access, authentication, exclusions, external sharing, and governance evidence across Microsoft 365 tenants.",
    logic: [
      "Privileged MFA and administrator-concentration checks",
      "Conditional Access, legacy-auth, and guest review",
      "Forwarding, app-permission, and departed-user findings",
    ],
    proof:
      "3 tenants · 26 identities · 18 privileged accounts · 30 findings",
    outcome: "Severity-ranked security review",
    control: "No role, policy, user, or mailbox changes",
  },
  {
    id: "HF-012",
    group: "reporting-governance-profitability",
    category: "Backup governance",
    title: "Backup Failure & Recovery Readiness Escalation",
    purpose:
      "Evaluates backup failures, recovery evidence, workload importance, ownership, and exceptions instead of treating a successful job as proof of recoverability.",
    logic: [
      "Failure-history and workload-priority rules",
      "Recovery-evidence and readiness checks",
      "Ownership, exception, and escalation classification",
    ],
    proof:
      "16 findings · 15 actionable · 5 critical · 7 high",
    outcome: "Recovery-readiness escalation report",
    control: "No restart, restore, or retention changes",
  },
  {
    id: "HF-013",
    group: "reporting-governance-profitability",
    category: "Service profitability",
    title: "Time Entry & Agreement Profitability Leakage",
    purpose:
      "Calculates labor cost, recoverable revenue, agreement consumption, and unbilled overage to expose service-margin leakage.",
    logic: [
      "Time-entry and labor-cost calculation",
      "Agreement gross-margin and included-hours review",
      "Unbilled overage and recoverable-revenue detection",
    ],
    proof:
      "27 actionable findings · quantified margin and revenue exposure",
    outcome: "Profitability review report",
    control: "No invoice, agreement, rate, or time-entry changes",
  },
  {
    id: "HF-014",
    group: "endpoint-compliance-protection",
    category: "Patch & vulnerability governance",
    title: "Patch & Vulnerability Compliance Exception Report",
    purpose:
      "Prioritizes patch failures, vulnerabilities, unsupported software, pending reboots, and unresolved exceptions across managed endpoints.",
    logic: [
      "Age, severity, and asset-risk scoring",
      "Patch, lifecycle, reboot, and vulnerability rules",
      "Ownership, maintenance-window, and exception evidence",
    ],
    proof:
      "50 exception findings · 3 clients · 5 sites · 11 endpoints",
    outcome: "Compliance exception review",
    control: "No patching, rebooting, or exception approval",
  },
  {
    id: "HF-015",
    group: "endpoint-compliance-protection",
    category: "Security-tool coverage",
    title: "Endpoint Protection & Security Tool Coverage Gap Report",
    purpose:
      "Reconciles endpoint inventory with EDR and protection agents to find missing, unhealthy, stale, unlicensed, or conflicting security-tool coverage.",
    logic: [
      "Inventory-to-agent reconciliation",
      "Health, telemetry, definition, and licensing checks",
      "Policy, exclusion, conflict, and high-risk asset rules",
    ],
    proof:
      "58 findings · 23 critical · 30 high · 5 medium · 1 clean client",
    outcome: "Endpoint coverage-gap report",
    control: "No agent installation, policy change, or endpoint action",
  },
  {
    id: "HF-016",
    group: "finance-procurement",
    category: "Finance",
    title: "Accounts Receivable & Collections Risk Escalation",
    purpose:
      "Reconciles invoices, payments, credits, disputes, and payment promises to surface overdue balances and collection risk.",
    logic: ["Invoice and payment reconciliation", "Broken-promise and dispute detection", "Risk-based review ordering"],
    proof: "Synthetic finance fixtures · deterministic expected-results validation",
    outcome: "Collections review queue",
    control: "No client contact, fund application, or invoice changes",
  },
  {
    id: "HF-017",
    group: "growth-marketing-sales",
    category: "Lead generation",
    title: "MSP Lead Qualification & Sales Readiness Escalation",
    purpose:
      "Applies exclusions, consent controls, ICP-fit rules, and buying-intent evidence to create an explainable sales-review queue.",
    logic: ["Consent and exclusion controls", "ICP-fit and intent evidence", "Explainable readiness classification"],
    proof: "Synthetic lead fixtures · deterministic expected-results validation",
    outcome: "Sales-readiness review queue",
    control: "No prospect contact or automatic qualification",
  },
  {
    id: "HF-018",
    group: "growth-marketing-sales",
    category: "Marketing",
    title: "MSP Marketing Attribution & Pipeline Performance Report",
    purpose:
      "Connects campaigns, leads, touchpoints, and opportunities to report qualified pipeline and supported closed-won revenue.",
    logic: ["Cross-source identity linking", "Qualified-pipeline calculation", "Attribution evidence and limitation checks"],
    proof: "Synthetic campaign fixtures · deterministic expected-results validation",
    outcome: "Marketing pipeline report",
    control: "No causation claims, source rewrites, or budget changes",
  },
  {
    id: "HF-019",
    group: "people-productivity-scheduling",
    category: "Productivity / service operations",
    title: "MSP Technician Capacity, Workload & Service Flow Review",
    purpose:
      "Identifies workload pressure, capacity, aging work, schedule variance, stale ownership, and team bottlenecks without ranking employees.",
    logic: ["Capacity and workload calculation", "Aging and ownership checks", "Service-flow exception classification"],
    proof: "Synthetic service fixtures · deterministic expected-results validation",
    outcome: "Capacity and workload review",
    control: "No employee ranking, work reassignment, or personnel decisions",
  },
  {
    id: "HF-020",
    group: "people-productivity-scheduling",
    category: "Recruiting",
    title: "MSP Recruiting Pipeline & Candidate Follow-Up Escalation",
    purpose:
      "Finds stalled applications, missing ownership, overdue feedback, delayed updates, failed communications, and recruiting-data problems.",
    logic: ["Stage-age and follow-up checks", "Ownership and feedback validation", "Communication and data-quality exceptions"],
    proof: "Synthetic recruiting fixtures · deterministic expected-results validation",
    outcome: "Recruiting follow-up queue",
    control: "No candidate ranking, rejection, scheduling, or messaging",
  },
  {
    id: "HF-021",
    group: "research-analytics-intelligence",
    category: "Research / vendor management",
    title: "MSP Vendor Lifecycle & Service Change Research Brief",
    purpose:
      "Converts verified vendor lifecycle and service-change notices into an evidence-backed brief showing products and client exposure.",
    logic: ["Source verification and capture", "Product and client exposure matching", "Evidence-backed review classification"],
    proof: "Synthetic vendor fixtures · deterministic expected-results validation",
    outcome: "Vendor change research brief",
    control: "No service changes, client notices, or unverified instructions",
  },
  {
    id: "HF-022",
    group: "growth-marketing-sales",
    category: "Sales",
    title: "MSP Sales Pipeline, Proposal Follow-Up & Deal Risk Escalation",
    purpose:
      "Reviews opportunities for stalled stages, missing engagement, overdue follow-up, proposal risk, ownership gaps, and decision dates.",
    logic: ["Stage-stagnation checks", "Engagement and follow-up validation", "Proposal, ownership, and date-risk rules"],
    proof: "Synthetic sales fixtures · deterministic expected-results validation",
    outcome: "Deal-risk review queue",
    control: "No outreach, opportunity changes, discounts, or commitments",
  },
  {
    id: "HF-023",
    group: "research-analytics-intelligence",
    category: "Analytics",
    title: "MSP Service Delivery KPI Trend & Anomaly Review",
    purpose:
      "Compares current and previous service metrics to identify meaningful deterioration in SLA, backlog, response, reopen, and satisfaction measures.",
    logic: ["Current-to-prior comparison", "Material-change thresholds", "Trend and anomaly classification"],
    proof: "Synthetic KPI fixtures · deterministic expected-results validation",
    outcome: "Service trend and anomaly report",
    control: "No target, ticket, or staff-assignment changes",
  },
  {
    id: "HF-024",
    group: "research-analytics-intelligence",
    category: "Business intelligence",
    title: "MSP Client Portfolio Health & Strategic Account Prioritization",
    purpose:
      "Combines financial, service, agreement, satisfaction, and risk evidence to prioritize accounts for human review.",
    logic: ["Cross-domain client normalization", "Transparent health classification", "Retention, remediation, and renewal priorities"],
    proof: "Synthetic client fixtures · deterministic expected-results validation",
    outcome: "Strategic account review",
    control: "No definitive labels, commercial changes, or client contact",
  },
  {
    id: "HF-025",
    group: "people-productivity-scheduling",
    category: "Calendar / dispatch",
    title: "MSP Dispatch Calendar, On-Call Coverage & Appointment Conflict Review",
    purpose:
      "Detects appointment conflicts, missing coverage, unassigned visits, skill mismatches, availability problems, and scheduling gaps.",
    logic: ["Calendar conflict detection", "Coverage and availability validation", "Skill and priority matching"],
    proof: "Synthetic scheduling fixtures · deterministic expected-results validation",
    outcome: "Dispatch conflict review",
    control: "No calendar changes, assignment, or coverage modification",
  },
  {
    id: "HF-026",
    group: "growth-marketing-sales",
    category: "Marketing operations",
    title: "Campaign Performance & Lead Source Leakage",
    purpose:
      "Finds missing or conflicting lead sources, broken campaign references, and overdue handoffs while reporting supported performance metrics.",
    logic: ["Lead-source integrity checks", "Campaign and handoff validation", "Evidence-gated ROAS and ROI calculation"],
    proof: "Synthetic marketing fixtures · deterministic expected-results validation",
    outcome: "Campaign leakage report",
    control: "No attribution overwrite, campaign changes, or unsupported claims",
  },
  {
    id: "HF-027",
    group: "growth-marketing-sales",
    category: "Email marketing",
    title: "Email Marketing Deliverability & Engagement Exception Report",
    purpose:
      "Identifies complaint, bounce, authentication, suppression, unsubscribe, engagement, and abnormal-sending exceptions.",
    logic: ["Bounce and complaint thresholds", "Authentication and suppression checks", "Engagement and sending-pattern review"],
    proof: "Synthetic email fixtures · deterministic expected-results validation",
    outcome: "Deliverability exception report",
    control: "No sending, suppression removal, authentication, or campaign changes",
  },
  {
    id: "HF-028",
    group: "growth-marketing-sales",
    category: "SEO",
    title: "Technical SEO & Content Opportunity Audit",
    purpose:
      "Correlates crawl, CMS, linking, search, analytics, and performance evidence to identify technical problems and content opportunities.",
    logic: ["Cross-source URL normalization", "Technical SEO exception rules", "Evidence-backed content opportunity checks"],
    proof: "Synthetic SEO fixtures · deterministic expected-results validation",
    outcome: "SEO and content review",
    control: "No publishing, website changes, or ranking promises",
  },
  {
    id: "HF-029",
    group: "data-engineering-devops",
    category: "Data management",
    title: "Duplicate, Stale & Orphaned Data Quality Report",
    purpose:
      "Finds duplicate candidates, stale records, broken relationships, invalid ownership, and incomplete evidence without modifying data.",
    logic: ["Duplicate-candidate signatures", "Freshness and ownership validation", "Parent-relationship integrity checks"],
    proof: "Synthetic data fixtures · deterministic expected-results validation",
    outcome: "Data-quality review report",
    control: "No record merge, deletion, or rewrite",
  },
  {
    id: "HF-030",
    group: "data-engineering-devops",
    category: "Data extraction",
    title: "Document & Message Structured-Data Extraction",
    purpose:
      "Converts supported document and message templates into structured previews while retaining source evidence for every field.",
    logic: ["Supported-template detection", "Field extraction with source retention", "Missing and conflicting evidence checks"],
    proof: "Synthetic document fixtures · deterministic expected-results validation",
    outcome: "Evidence-backed structured preview",
    control: "No system overwrite or treatment of uncertain text as fact",
  },
  {
    id: "HF-031",
    group: "data-engineering-devops",
    category: "DevOps",
    title: "CI/CD Failure & Deployment Readiness Escalation",
    purpose:
      "Reviews pipelines, required checks, deployments, and release risks to identify failures, blocked releases, and insufficient readiness evidence.",
    logic: ["Pipeline failure detection", "Required-check and deployment validation", "Release-readiness risk classification"],
    proof: "Synthetic CI/CD fixtures · deterministic expected-results validation",
    outcome: "Deployment-readiness escalation",
    control: "No deployment, rerun, bypass, approval, or repository change",
  },
  {
    id: "HF-032",
    group: "data-engineering-devops",
    category: "Engineering / security & compliance",
    title: "Security & Compliance Evidence Gap Review",
    purpose:
      "Identifies missing, stale, conflicting, or incomplete control evidence without declaring an organization compliant or secure.",
    logic: ["Evidence freshness and completeness checks", "Conflict and ownership validation", "Control-gap review classification"],
    proof: "Synthetic control fixtures · deterministic expected-results validation",
    outcome: "Security evidence-gap review",
    control: "No certification, control change, or automatic remediation",
  },
  {
    id: "HF-033",
    group: "finance-procurement",
    category: "Finance / procurement",
    title: "MSP Procurement, Purchase Order & Vendor Invoice Exception Review",
    purpose:
      "Reconciles purchase orders, receipts, vendor invoices, and approval evidence to identify exceptions before payment review.",
    logic: ["PO, receipt, and invoice matching", "Duplicate and mismatch detection", "Approval-evidence validation"],
    proof: "Synthetic procurement fixtures · deterministic expected-results validation",
    outcome: "Vendor invoice exception review",
    control: "No purchase approval, accounting change, or payment release",
  },
  {
    id: "HF-034",
    group: "content-creation",
    category: "Content creation",
    title: "Source-Grounded Content Brief & Safe Repurposing Review",
    purpose:
      "Transforms approved source material into briefs, outlines, and channel drafts while flagging unsupported claims and rights issues.",
    logic: ["Approved-source grounding", "Claim and statistic consistency checks", "Rights and accessibility review flags"],
    proof: "Synthetic content fixtures · deterministic expected-results validation",
    outcome: "Content brief and repurposing review",
    control: "No publishing, claim approval, or rights determination",
  },
] as const;
