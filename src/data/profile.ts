export type ProfileLink = {
  label: string;
  url: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  location: string;
  title: string;
  dates: string;
  employmentType: string;
  highlights: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  stack: string[];
  links?: ProfileLink[];
};

export type EducationItem = {
  school: string;
  degree: string;
  dates: string;
  details?: string[];
};

export type CertificateItem = {
  title: string;
  issuer: string;
  issued?: string;
  id: string;
  url: string;
};

export type Profile = {
  name: string;
  headline: string;
  title: string;
  tagline: string;
  summary: string;
  location: string;
  links: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    resume: string;
    skype?: string;
  };
  valueProps: string[];
  skills: SkillGroup[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certificates: CertificateItem[];
};

export const profile: Profile = {
  name: "Liaqat Saeed",
  headline: "Full-Stack Automation Engineer (n8n, API Integrations, Node.js)",
  title: "Full-Stack Automation Engineer",
  tagline:
    "Helping businesses automate workflows and connect systems using n8n, APIs, and custom backend services.",
  summary:
    "Senior engineer with 9+ years of experience building automation workflows, API integrations, and backend systems for global teams. I design reliable data pipelines, connect business platforms, and ship backend services with Node.js, TypeScript, Python, and Docker to eliminate manual work and improve operational scale.",
  location: "Islamabad, Pakistan",
  links: {
    email: "liaqatsaeed007@gmail.com",
    phone: "+923125234889",
    linkedin: "https://www.linkedin.com/in/liaqat-saeed",
    github: "https://github.com/LiaqatSaeed",
    resume: "/resume/Liaqat_Saeed_Resume.pdf",
    skype: "liaquat.saeed"
  },
  valueProps: [
    "Workflow automation and API integration systems that reduce manual operations",
    "Backend services and data pipelines built for reliability and scale",
    "Production-ready deployments with Docker, Nginx, and cloud infrastructure"
  ],
  skills: [
    {
      title: "Automation & Integrations",
      items: [
        "n8n",
        "API Integrations",
        "Workflow Automation",
        "REST APIs",
        "GraphQL",
        "Webhooks",
        "Shell scripting",
        "Bash"
      ]
    },
    {
      title: "Backend & Services",
      items: [
        "TypeScript",
        "JavaScript",
        "Python",
        "Node.js",
        "Express",
        "ASP.NET MVC",
        "Django",
        "PHP (Beginner)"
      ]
    },
    {
      title: "Databases",
      items: ["MongoDB", "PostgreSQL", "MySQL", "SQL", "SQLite"]
    },
    {
      title: "DevOps & Infra",
      items: [
        "Docker",
        "Nginx",
        "AWS EC2",
        "IIS",
        "Apache",
        "SSL",
        "DNS (GoDaddy, Wix, Namecheap)",
        "CI/CD"
      ]
    },
    {
      title: "Frontend",
      items: [
        "React",
        "TypeScript",
        "JavaScript",
        "React Native",
        "HTML",
        "CSS",
        "Sass",
        "jQuery",
        "Vue (Beginner)"
      ]
    },
    {
      title: "Mobile",
      items: ["React Native", "Capacitor"]
    },
    {
      title: "Testing",
      items: ["Jest", "React Testing Library", "React TestCafe"]
    },
    {
      title: "Realtime & Collaboration",
      items: ["Socket.io", "SignalR", "Git", "Bitbucket", "TFS"]
    }
  ],
  experience: [
    {
      company: "Mercans",
      location: "Estonia (Remote)",
      title: "Automation & Integration Engineer",
      dates: "Mar 2024 – Present",
      employmentType: "Full Time",
      highlights: [
        "Led automation workflows, API integrations, and backend systems for global payroll and HR platforms.",
        "Designed automated Workday PECI pipelines with n8n, GPG decryption, XML-to-JSON transformations, and shell scripting.",
        "Built country-specific integration workflows for Ireland, Finland, and Norway to support compliant payroll reporting and data synchronization.",
        "Developed scalable integration services and templates using microservices with Node.js, PostgreSQL, MongoDB, and Docker.",
        "Automated data processing pipelines to reduce manual operations and improve integration reliability.",
        "Implemented complex payroll rule engines and statutory leave formulas (caregiver, annual, childcare, sick leave) for Singapore."
      ]
    },
    {
      company: "CodeSauces",
      location: "Islamabad (Remote)",
      title: "Senior Full Stack Engineer",
      dates: "Jun 2023 – Present",
      employmentType: "Freelance / Part Time",
      highlights: [
        "Delivered integration-heavy features and backend automation for DirectRent, including map/email flows and admin workflows.",
        "Built a real-time Rasa chatbot UI connected to REST APIs and Socket.io services.",
        "Deployed the Stellar Disbursement Platform with Docker, Nginx reverse proxy, and SSL hardening.",
        "Shipped automation-enabled wallet apps using Capacitor + Next.js with Stellar API integrations.",
        "Built the SDP Quotes Module with Python, Django, SQLite, and workflow-driven data processing.",
        "Implemented the Instant Crypto Exchange (ICE), integrating EasyBit API and Polaris SEP-24 for secure transactions."
      ]
    },
    {
      company: "LottieFiles",
      location: "California, USA (Remote)",
      title: "Full Stack Engineer (Plugins)",
      dates: "Jan 2022 – Jun 2023",
      employmentType: "Full Time",
      highlights: [
        "Built the i18n-js CLI to automate Phrase.com translation sync across repos (TypeScript, Node, Jest).",
        "Developed WordPress and Shopify plugins with API integrations and reliable content workflows.",
        "Shipped Microsoft M365 add-in enhancements using GraphQL and integration-focused frontend logic.",
        "Built the Bubble.io plugin to embed Lottie animations for no-code builders.",
        "Developed the Shopify block extension with Shopify Admin API integration and Polaris UI patterns."
      ]
    },
    {
      company: "Distributed",
      location: "UK (Remote)",
      title: "React Developer",
      dates: "Oct 2021 – Oct 2022",
      employmentType: "Contract",
      highlights: [
        "Delivered alert management features for Onyx Insight AIHUB using React, TypeScript, and API integrations.",
        "Shipped features and fixes for Retain Cloud with React, Jest, Redux, and integration-driven workflows."
      ]
    },
    {
      company: "CodeSauces",
      location: "Islamabad",
      title: "Full Stack Engineer",
      dates: "Jan 2020 – Jan 2022",
      employmentType: "Freelance / Part Time",
      highlights: [
        "Built Forex174, a forex analysis platform with Node.js services, MongoDB, and AWS.",
        "Delivered DirectRent with web/admin workflows and integration-ready backend services.",
        "Designed and integrated the Niazi Foods ecommerce app with REST APIs.",
        "Built CapriEasy travel and booking workflows with payments and Firebase.",
        "Launched Labbin Dance and KickIt mobile apps with React Native and API integrations."
      ]
    },
    {
      company: "Caliber Technology Inc.",
      location: "Islamabad, Pakistan",
      title: "Senior Software Engineer",
      dates: "Jan 2017 – Dec 2019",
      employmentType: "Full Time",
      highlights: [
        "Built a travel search engine with listings and product detail flows (React, Node.js, MongoDB).",
        "Delivered an LMS SaaS campus management app using React Native and ASP.NET MVC APIs.",
        "Built a hybrid task management tool with multi-view workflows (ASP.NET MVC, SQL).",
        "Developed the Sketchfunnels UI/UX (jQuery, HTML, CSS).",
        "Owned UI/UX across six modules of the Calimatic SaaS platform (ASP.NET MVC, Entity Framework, WordPress, SignalR)."
      ]
    },
    {
      company: "MaxRemind Inc.",
      location: "Carrollton, TX (Pakistan Office)",
      title: "Web Developer",
      dates: "Jan 2016 – Dec 2016",
      employmentType: "Full Time",
      highlights: [
        "Developed hospice and medical billing web applications with jQuery, ASP.NET MVC, and SQL.",
        "Built a rule-based centralized medical billing system enabling dynamic CMS-1500 form logic."
      ]
    },
    {
      company: "Untangle Solution",
      location: "Islamabad, Pakistan",
      title: "ASP.NET Intern",
      dates: "Jun 2015 – Sep 2015",
      employmentType: "Internship",
      highlights: [
        "Built a dentist desktop application using C# and WPF for practice management."
      ]
    }
  ],
  projects: [
    {
      title: "Stellar Disbursement Platform",
      description:
        "Deployment and module development for the Stellar Disbursement Platform, including infrastructure setup and the Quotes Module.",
      stack: ["Docker", "Nginx", "Next.js", "Python", "Django", "SQLite"]
    },
    {
      title: "ATM Token Wallet",
      description:
        "App Store release built with Capacitor and Next.js, integrating Stellar API for blockchain transactions.",
      stack: ["Capacitor", "Next.js", "Stellar API"],
      links: [
        {
          label: "App Store",
          url: "https://apps.apple.com/pk/app/atm-token/id6526489486"
        }
      ]
    },
    {
      title: "Freedom Pay Wallet",
      description:
        "App Store release built with Capacitor and Next.js with Stellar API integration.",
      stack: ["Capacitor", "Next.js", "Stellar API"],
      links: [
        {
          label: "App Store",
          url: "https://apps.apple.com/pk/app/freedom-pay/id6448116005"
        }
      ]
    },
    {
      title: "Instant Crypto Exchange (ICE)",
      description:
        "Crypto exchange workflow integrating EasyBit API and Polaris SEP-24 for compliant transactions.",
      stack: ["Python", "Django", "EasyBit API", "Polaris SEP-24"]
    },
    {
      title: "LottieFiles for WordPress",
      description:
        "Gutenberg block plugin enabling Lottie animations on WordPress websites.",
      stack: ["React", "TypeScript", "GraphQL", "PHP", "MySQL"],
      links: [
        {
          label: "WordPress Plugin",
          url: "https://wordpress.org/plugins/lottiefiles/"
        }
      ]
    },
    {
      title: "LottieFiles for Shopify",
      description:
        "Shopify block extension with Admin API integration and Polaris UI patterns.",
      stack: ["JavaScript", "React", "Shopify Admin API"]
    },
    {
      title: "LottieFiles for Microsoft M365",
      description:
        "M365 add-in enhancements and bug fixes for Lottie animations.",
      stack: ["React", "TypeScript", "GraphQL"],
      links: [
        {
          label: "Microsoft AppSource",
          url: "https://appsource.microsoft.com/en-us/product/office/WA200003732?tab=Overview&exp=ubp8"
        }
      ]
    },
    {
      title: "LottieFiles for Bubble.io",
      description:
        "Bubble.io plugin enabling easy Lottie animation embeds for no-code builders.",
      stack: ["JavaScript"],
      links: [
        {
          label: "Bubble Plugin",
          url: "https://bubble.io/plugin/lottiefiles-1676280573614x891677842206097400?ref=lottiefiles.com"
        }
      ]
    },
    {
      title: "DirectRent.ai",
      description:
        "Property renting platform with web, admin, and integrations for landlords and tenants.",
      stack: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      title: "Forex174",
      description:
        "Forex analysis and forecasting platform built for traders.",
      stack: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      title: "Calimatic",
      description:
        "SaaS platform UI/UX across six modules with real-time collaboration workflows.",
      stack: ["ASP.NET MVC", "jQuery", "SignalR"],
      links: [
        {
          label: "Website",
          url: "https://www.calimatic.com"
        }
      ]
    },
    {
      title: "Sketchfunnels",
      description:
        "Marketing funnel builder UI/UX implementation.",
      stack: ["jQuery", "HTML", "CSS"],
      links: [
        {
          label: "Website",
          url: "https://www.sketchfunnels.io/"
        }
      ]
    },
    {
      title: "TravelGny",
      description:
        "Travel search engine for agents and tour operators with listings and product detail flows.",
      stack: ["React", "Node.js", "MongoDB"],
      links: [
        {
          label: "Website",
          url: "https://travelgny.com"
        }
      ]
    }
  ],
  education: [
    {
      school: "Foundation University Rawalpindi Campus (FURC)",
      degree: "BS Software Engineering",
      dates: "Sep 2012 – Jun 2016",
      details: [
        "Coursework included data mining, HCI, database management, and web engineering projects."
      ]
    }
  ],
  certificates: [
    {
      title: "REST API (Intermediate)",
      issuer: "HackerRank",
      id: "FAD63792F4BC",
      url: "https://www.hackerrank.com/certificates/fad63792f4bc"
    },
    {
      title: "JavaScript (Intermediate)",
      issuer: "HackerRank",
      issued: "Aug 20, 2021",
      id: "B7A6C5554BF0",
      url: "https://www.hackerrank.com/certificates/b7a6c5554bf0"
    },
    {
      title: "React (Basic)",
      issuer: "HackerRank",
      issued: "Sep 7, 2021",
      id: "9631A784EDF8",
      url: "https://www.hackerrank.com/certificates/9631a784edf8"
    },
    {
      title: "CSS (Basic)",
      issuer: "HackerRank",
      issued: "Aug 20, 2021",
      id: "524BF7731CF3",
      url: "https://www.hackerrank.com/certificates/524bf7731cf3"
    }
  ]
};
