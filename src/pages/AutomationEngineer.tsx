import { profile } from "../data/profile";
import { siteConfig } from "../data/site";
import { useSeo } from "../seo";
import FaqList from "../components/FaqList";

const faqItems = [
  {
    question: "What automation tools do you specialize in?",
    answer:
      "n8n, Node.js, TypeScript, Python, and API-driven workflow orchestration."
  },
  {
    question: "Can you automate payroll or HR workflows?",
    answer:
      "Yes. I have delivered Workday PECI automation and country-specific payroll workflows."
  },
  {
    question: "Do you provide monitoring and reliability improvements?",
    answer:
      "Yes. I build alerts, logging, and recovery steps into automation pipelines."
  }
];

export default function AutomationEngineer() {
  useSeo({
    title: "Automation Engineer | n8n Workflows & API Integrations",
    description:
      "Hire a senior automation engineer specializing in n8n workflows, API integrations, backend pipelines, and data automation for remote teams.",
    canonical: `${siteConfig.url}/automation-engineer`,
    ogImage: siteConfig.ogImage,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Automation Engineer",
        url: `${siteConfig.url}/automation-engineer`,
        provider: {
          "@type": "Person",
          name: siteConfig.name
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
          }
        }))
      }
    ]
  });

  return (
    <main id="main" className="page">
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h1>Automation Engineer (n8n, API Integrations)</h1>
            <p>
              Senior automation engineer focused on n8n workflows, API orchestration, and
              backend services that remove manual work and improve system reliability.
            </p>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <h3>Workflow Automation</h3>
              <p>n8n flows, scheduled jobs, and automation pipelines.</p>
              <p className="service-outcome">Consistent, repeatable operations at scale.</p>
            </article>
            <article className="service-card">
              <h3>API Orchestration</h3>
              <p>Secure integrations across SaaS platforms and internal systems.</p>
              <p className="service-outcome">Reliable data sync and process automation.</p>
            </article>
            <article className="service-card">
              <h3>Backend Reliability</h3>
              <p>Logging, monitoring, recovery, and performance improvements.</p>
              <p className="service-outcome">Lower failure rates and faster remediation.</p>
            </article>
          </div>
          <div className="section-cta">
            <a className="btn primary" href="/contact">
              Discuss Automation Needs
            </a>
            <a className="btn" href={profile.links.resume} download>
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <section className="section contact">
        <div className="container">
          <div className="section-heading">
            <h2>FAQ</h2>
            <p>Automation, integrations, and workflow delivery details.</p>
          </div>
          <FaqList items={faqItems} />
        </div>
      </section>
    </main>
  );
}
