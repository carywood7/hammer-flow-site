export const operationalProblems = [
  {
    title: "Service visibility",
    copy:
      "Management reporting is often fragmented, delayed, or dependent on manual PSA exports and spreadsheet work.",
  },
  {
    title: "SLA risk",
    copy:
      "Tickets approaching contractual deadlines may not receive attention until the service risk has already become a breach.",
  },
  {
    title: "Dispatch overhead",
    copy:
      "New tickets require repetitive classification, prioritization, routing, and technician-assignment decisions.",
  },
  {
    title: "Recurring incidents",
    copy:
      "Similar incidents are frequently handled as isolated tickets without identifying the underlying problem.",
  },
  {
    title: "Onboarding coordination",
    copy:
      "New-hire readiness spans approvals, equipment, licensing, account provisioning, access, and multiple internal owners.",
  },
  {
    title: "Disconnected systems",
    copy:
      "Critical processes cross PSA, RMM, Microsoft 365, email, documentation, HR, and communication platforms.",
  },
] as const;

export const services = [
  {
    title: "Automation audits",
    copy:
      "Map repetitive work, service risks, handoffs, data dependencies, bottlenecks, and the highest-value implementation opportunities.",
    outcome: "Prioritized automation roadmap",
  },
  {
    title: "Workflow design",
    copy:
      "Translate operating processes into triggers, inputs, conditions, deterministic rules, approvals, exceptions, and outputs.",
    outcome: "Implementation-ready workflow specification",
  },
  {
    title: "Implementation & customization",
    copy:
      "Build around the MSP's actual service boards, ticket statuses, SLA definitions, client structures, technicians, and policies.",
    outcome: "Configured operational workflow",
  },
  {
    title: "Systems integration",
    copy:
      "Connect PSA, RMM, Microsoft 365, communication, documentation, HR, billing, and other API-accessible systems.",
    outcome: "Connected cross-system process",
  },
  {
    title: "Validation & controlled rollout",
    copy:
      "Test calculations, routing logic, permissions, outputs, and failure conditions before enabling controlled production access.",
    outcome: "Verified and reviewable release",
  },
  {
    title: "Managed automation",
    copy:
      "Monitor execution, maintain integrations, investigate failures, document changes, and improve workflows after launch.",
    outcome: "Ongoing operational ownership",
  },
] as const;
