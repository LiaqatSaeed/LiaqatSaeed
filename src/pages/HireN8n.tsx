import FaqList from "../components/FaqList";
import { homeFaqs, landingFaqs } from "../data/aeo";
import { profile } from "../data/profile";
import { siteConfig } from "../data/site";
import { useSeo } from "../seo";

const faqItems = [...landingFaqs.n8n, ...homeFaqs.slice(0, 4)];

export default function HireN8n() {
  useSeo({
    title: "Hire n8n Developer | Automation Workflows & Integrations",
    description:
      "Hire Liaqat Saeed, a full-stack automation engineer specializing in n8n workflows, API orchestration, and reliable automation systems for remote teams.",
    canonical: `${siteConfig.url}/hire-n8n-developer`,
    ogImage: siteConfig.ogImage,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "n8n Automation Engineering",
        url: `${siteConfig.url}/hire-n8n-developer`,
        serviceType: ["n8n Workflows", "Automation Pipelines", "API Orchestration"]
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
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Hire n8n Developer",
            item: `${siteConfig.url}/hire-n8n-developer`
          }
        ]
      }
    ]
  });

  return (
    <main id="main" className="page">
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h1>Hire an n8n Automation Engineer</h1>
            <p>
              I design and deliver n8n workflows that automate operations, connect APIs, and
              reduce manual work for remote teams.
            </p>
          </div>
          <div className="grid-two">
            <div className="card">
              <h2>What You Get</h2>
              <ul>
                <li>End-to-end workflow design and implementation</li>
                <li>Secure credential handling and audit-ready logging</li>
                <li>Retries, alerts, and observability for reliability</li>
              </ul>
            </div>
            <div className="card">
              <h2>Best Fit Projects</h2>
              <ul>
                <li>Lead routing, CRM sync, and notification flows</li>
                <li>Payroll, HR, and finance automation</li>
                <li>Operational dashboards with real-time status</li>
              </ul>
            </div>
          </div>
          <div className="section-cta">
            <a className="btn primary" href="/contact">
              Let’s Build Your Automation
            </a>
            <a className="btn" href={profile.links.resume} download>
              View Resume
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>FAQ</h2>
            <p>Direct answers for n8n automation projects.</p>
          </div>
          <FaqList items={faqItems} />
        </div>
      </section>
    </main>
  );
}
