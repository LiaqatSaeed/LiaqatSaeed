export type ServiceItem = {
  title: string;
  description: string;
  bullets: string[];
  cta?: {
    label: string;
    href: string;
  };
};

export type CaseStudyItem = {
  title: string;
  problem: string;
  stack: string[];
  role: string;
  outcome: string;
  href?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const homeServices: ServiceItem[] = [
  {
    title: "n8n Automation",
    description:
      "Design and deploy n8n workflows that eliminate manual work and keep operations reliable across teams.",
    bullets: [
      "Workflow orchestration and error handling",
      "Automated alerts, reporting, and approvals",
      "Secure credential and data management"
    ],
    cta: { label: "Hire n8n Developer", href: "/hire-n8n-developer" }
  },
  {
    title: "API Integration",
    description:
      "Connect SaaS platforms, internal systems, and external APIs with dependable, documented integrations.",
    bullets: [
      "REST, webhooks, and event-driven sync",
      "Payments, HR, CRM, and ops tooling",
      "Monitoring, retries, and data validation"
    ],
    cta: { label: "API Integration Services", href: "/api-integration-services" }
  },
  {
    title: "Internal Tools & Dashboards",
    description:
      "Build operations dashboards and internal tools that make complex workflows easy to manage.",
    bullets: [
      "Admin portals and reporting panels",
      "Role-based access and audit logs",
      "Data visualization for decision makers"
    ]
  },
  {
    title: "React Frontend Development",
    description:
      "Ship fast, clean React and TypeScript interfaces that pair seamlessly with automation backends.",
    bullets: [
      "Component-driven UI with strong UX",
      "Responsive dashboards and forms",
      "Performance-focused delivery"
    ],
    cta: { label: "Hire React Developer", href: "/hire-react-developer" }
  },
  {
    title: "Node.js Backend Development",
    description:
      "Build secure, scalable Node.js services that power integrations, automation, and products.",
    bullets: [
      "API design, auth, and data pipelines",
      "Microservices and background jobs",
      "TypeScript-first backend architecture"
    ],
    cta: { label: "React + Node.js", href: "/react-nodejs-developer" }
  },
  {
    title: "Deployment & DevOps Support",
    description:
      "Production-ready deployments with Docker, CI/CD, and monitoring to keep systems stable.",
    bullets: [
      "Dockerized services and environments",
      "CI/CD, rollback strategy, and observability",
      "Security, SSL, and uptime protection"
    ]
  }
];

export const homeCaseStudies: CaseStudyItem[] = [
  {
    title: "Global Payroll Automation",
    problem: "Manual Workday PECI processing and fragmented payroll workflows across countries.",
    stack: ["n8n", "Node.js", "PostgreSQL", "GPG", "Shell"],
    role: "Automation & Integration Engineer",
    outcome: "Automated PECI pipelines with decryption, parsing, and compliant delivery."
  },
  {
    title: "Stellar Disbursement Platform",
    problem: "Slow payout processing and limited visibility across financial partners.",
    stack: ["Node.js", "Python", "Django", "Next.js", "Docker"],
    role: "Full-Stack Automation Engineer",
    outcome: "Automated payout workflows and monitoring dashboards for operations teams."
  },
  {
    title: "Integration-Heavy SaaS Dashboards",
    problem: "Teams lacked a unified view of customer operations and system status.",
    stack: ["React", "TypeScript", "Node.js", "MongoDB"],
    role: "Full-Stack Engineer",
    outcome: "Delivered admin tools that centralize workflows and reporting."
  },
  {
    title: "Plugin & Extension Integrations",
    problem: "Need for seamless third-party integrations for WordPress, Shopify, and M365.",
    stack: ["TypeScript", "GraphQL", "Shopify Admin API"],
    role: "Full-Stack Engineer (Plugins)",
    outcome: "Shipped integrations that expand distribution and improve customer adoption."
  },
  {
    title: "Client Web & Mobile Apps",
    problem: "Clients needed automation-aware apps with reliable data syncing.",
    stack: ["React", "React Native", "API Integrations"],
    role: "Senior Full-Stack Engineer",
    outcome: "Delivered production apps with integrated workflows and notifications."
  }
];

export const buildWhyHirePoints = (experienceLabel: string) => [
  `${experienceLabel} of full-stack delivery across automation, integrations, and SaaS`,
  "End-to-end ownership from architecture to deployment",
  "Expertise in n8n workflows, API orchestration, and backend systems",
  "Strong React/TypeScript UI delivery for internal tools and dashboards",
  "Remote-first collaboration with global teams and async workflows"
];

export const homeFaqs: FaqItem[] = [
  {
    question: "What does an n8n automation engineer do?",
    answer:
      "I design and maintain n8n workflows that automate operations, integrate APIs, and reduce manual work."
  },
  {
    question: "What types of API integrations do you build?",
    answer:
      "REST, webhooks, and event-driven integrations across HR, payments, CRM, and SaaS platforms."
  },
  {
    question: "Can you automate lead flows, notifications, and reporting?",
    answer:
      "Yes. I automate lead routing, alerts, and scheduled reporting using n8n and backend services."
  },
  {
    question: "Do you build internal dashboards and admin tools?",
    answer:
      "Yes. I build React and TypeScript dashboards with secure API backends and role-based access."
  },
  {
    question: "Are you available for freelance or remote work?",
    answer:
      "Yes. I work with remote teams and clients globally for contract, fractional, or full-time roles."
  },
  {
    question: "What technologies do you use?",
    answer:
      "n8n, Node.js, TypeScript, React, Python, Docker, and PostgreSQL/MongoDB depending on the stack."
  },
  {
    question: "Do you handle deployment too?",
    answer:
      "Yes. I deploy with Docker and CI/CD, and set up monitoring, SSL, and environment management."
  },
  {
    question: "Can you improve existing systems instead of building from scratch?",
    answer:
      "Absolutely. I audit, stabilize, and extend existing automation or integration pipelines."
  },
  {
    question: "What outcomes should I expect?",
    answer:
      "Reduced manual work, reliable data flows, and scalable automation that teams can trust."
  }
];

export const landingFaqs: Record<string, FaqItem[]> = {
  n8n: [
    {
      question: "Do you build n8n workflows from scratch?",
      answer:
        "Yes. I design, implement, and document n8n workflows tailored to your business processes."
    },
    {
      question: "Can you secure workflows and credentials?",
      answer:
        "Yes. I configure credential management, secrets handling, and access controls."
    }
  ],
  api: [
    {
      question: "Which APIs do you integrate?",
      answer:
        "I integrate HR, finance, CRM, payments, and internal APIs using REST, webhooks, and queues."
    },
    {
      question: "Do you provide monitoring and retries?",
      answer:
        "Yes. I include logging, retries, and alerts to keep integrations reliable."
    }
  ],
  reactNode: [
    {
      question: "Do you handle both frontend and backend?",
      answer:
        "Yes. I deliver React/TypeScript frontends paired with Node.js APIs and services."
    },
    {
      question: "Can you join an existing team?",
      answer:
        "Yes. I collaborate with remote teams and contribute within established workflows."
    }
  ],
  caseStudies: [
    {
      question: "Do you share detailed case studies?",
      answer:
        "Yes. I can provide deeper breakdowns, metrics, and implementation details on request."
    }
  ]
};
