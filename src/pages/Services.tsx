import { siteConfig } from "../data/site";
import { useSeo } from "../seo";
import FaqList from "../components/FaqList";

const services = [
  {
    title: "Full-Stack Web Development",
    who: "Product teams shipping SaaS platforms and internal tools.",
    outcome: "Full-stack delivery with reliable backend workflows and modern UX."
  },
  {
    title: "React / Next.js Frontend Development",
    who: "Teams needing fast, scalable interfaces and dashboards.",
    outcome: "Polished UI with strong performance and seamless API integration."
  },
  {
    title: "Node.js Backend Development",
    who: "Organizations building APIs, microservices, and data pipelines.",
    outcome: "Secure, scalable services that power automation and integrations."
  },
  {
    title: "API Integrations",
    who: "Companies connecting SaaS tools, payment systems, or internal platforms.",
    outcome: "Reliable orchestration, data sync, and error recovery."
  },
  {
    title: "Automation Workflows (n8n)",
    who: "Ops and product teams seeking to reduce manual work.",
    outcome: "Automated pipelines, alerts, and workflow reliability."
  },
  {
    title: "Dashboard / SaaS Development",
    who: "Founders launching new platforms or admin tools.",
    outcome: "Data-rich dashboards that drive decisions and scale operations."
  },
  {
    title: "Technical Consulting",
    who: "Leaders needing architecture guidance or integration audits.",
    outcome: "Clear roadmap, implementation plan, and risk reduction."
  }
];

const faqItems = [
  {
    question: "What’s your primary specialization?",
    answer:
      "Automation workflows, API integrations, and backend systems using Node.js, n8n, and TypeScript."
  },
  {
    question: "Can you join a team temporarily?",
    answer:
      "Yes. I work with remote teams on contract, fractional, or full-time roles depending on scope."
  },
  {
    question: "Do you support existing systems?",
    answer:
      "Yes. I can audit, stabilize, and extend existing integration pipelines and backend services."
  }
];

export default function Services() {
  useSeo({
    title: "Services | Automation, API Integrations, Full-Stack Engineering",
    description:
      "Services for automation workflows, API integrations, Node.js backend development, and full-stack SaaS delivery. Built for remote teams and recruiters.",
    canonical: `${siteConfig.url}/services`,
    ogImage: siteConfig.ogImage,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Liaqat Saeed – Automation & Integration Services",
        url: `${siteConfig.url}/services`,
        serviceType: services.map((service) => service.title)
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
            <h1>Services</h1>
            <p>
              Specialist services for automation, API integrations, backend systems, and
              full-stack delivery.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.who}</p>
                <p className="service-outcome">{service.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact">
        <div className="container">
          <div className="section-heading">
            <h2>FAQ</h2>
            <p>Quick answers for recruiters and hiring managers.</p>
          </div>
          <FaqList items={faqItems} />
        </div>
      </section>
    </main>
  );
}
