export const workflowControls = [
  "15 separate workflows",
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
] as const;
