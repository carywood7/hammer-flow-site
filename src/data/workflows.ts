export const workflowControls = [
  "5 separate workflows",
  "Synthetic fixtures",
  "Deterministic rules",
  "Human review",
  "No production writes",
] as const;

export const referenceWorkflows = [
  {
    id: "HF-001",
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
] as const;
