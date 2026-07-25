export const deliveryStages = [
  {
    number: "01",
    title: "Audit the operating workflow",
    copy:
      "Map the trigger, owners, handoffs, systems, business rules, exceptions, permissions, and current failure points.",
    outcome: "Prioritized implementation brief",
  },
  {
    number: "02",
    title: "Design the controlled process",
    copy:
      "Define deterministic decisions, review gates, fallback paths, outputs, audit requirements, and production boundaries.",
    outcome: "Reviewable workflow specification",
  },
  {
    number: "03",
    title: "Implement and validate safely",
    copy:
      "Build in client-owned infrastructure, begin with minimum permissions, validate against controlled fixtures, and release in stages.",
    outcome: "Controlled production rollout",
  },
  {
    number: "04",
    title: "Operate and improve",
    copy:
      "Monitor execution, investigate failures, maintain integrations, document changes, and refine the workflow as operations evolve.",
    outcome: "Managed automation ownership",
  },
] as const;

export const safetyControls = [
  "Client-owned infrastructure",
  "Minimum required permissions",
  "Read-only before write access",
  "Human approval for high-risk actions",
  "Deterministic logic before AI",
  "Logging, failure handling, and change records",
] as const;

export const integrationCategories = [
  {
    label: "Workflow engines",
    title: "Build with the right orchestration layer",
    copy:
      "n8n, Rewst, Power Automate, Make, or another client-approved engine selected around the process and operating environment.",
    examples: ["n8n", "Rewst", "Power Automate", "Make"],
  },
  {
    label: "PSA systems",
    title: "Work with the service desk already in place",
    copy:
      "Connect ticket, company, contact, agreement, configuration, technician, queue, status, and SLA data through supported APIs.",
    examples: ["Tickets", "SLAs", "Companies", "Dispatch"],
  },
  {
    label: "RMM & endpoint",
    title: "Turn endpoint and monitoring events into action",
    copy:
      "Use alert, device, policy, patch, health, and endpoint context without replacing the MSP's existing management platform.",
    examples: ["Alerts", "Devices", "Policies", "Health"],
  },
  {
    label: "Microsoft 365 & identity",
    title: "Coordinate users, access, licensing, and communication",
    copy:
      "Support onboarding, offboarding, approval, identity, licensing, mailbox, Teams, and other Microsoft 365 workflows.",
    examples: ["Entra ID", "Microsoft 365", "Teams", "Licensing"],
  },
  {
    label: "Business systems",
    title: "Connect the rest of the operating process",
    copy:
      "Integrate documentation, communication, HR, billing, forms, databases, email, and other API-accessible business systems.",
    examples: ["Documentation", "HR", "Billing", "Email"],
  },
  {
    label: "Applied AI",
    title: "Use AI where it adds value—not where rules are safer",
    copy:
      "Apply AI to bounded classification, extraction, summarization, and recommendation tasks while preserving deterministic controls.",
    examples: ["Classification", "Extraction", "Summaries", "Recommendations"],
  },
] as const;

export const reasonsToWorkTogether = [
  {
    title: "Service-led, not platform-led",
    copy:
      "Hammer Flow implements around the MSP's operating model instead of selling another application that the team must adopt.",
  },
  {
    title: "Built around the existing stack",
    copy:
      "The PSA, RMM, Microsoft environment, workflow engine, policies, and client infrastructure remain central to the solution.",
  },
  {
    title: "MSP-specific operating context",
    copy:
      "Workflows account for service boards, SLA rules, dispatch practices, client structures, escalation paths, and technician review.",
  },
  {
    title: "Safer production boundaries",
    copy:
      "Read-only-first delivery, minimum permissions, deterministic rules, human approval, and explicit failure handling reduce risk.",
  },
  {
    title: "Ongoing operational ownership",
    copy:
      "Implementation can continue into monitoring, maintenance, troubleshooting, documentation, and managed improvement.",
  },
] as const;
