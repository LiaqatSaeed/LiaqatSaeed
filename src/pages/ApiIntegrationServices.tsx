import FaqList from "../components/FaqList";
import { landingFaqs } from "../data/aeo";
import { profile } from "../data/profile";
import { siteConfig } from "../data/site";
import { useSeo } from "../seo";

const faqItems = landingFaqs.api;

export default function ApiIntegrationServices() {
  useSeo({
    title: "API Integration Services | SaaS, Payments, HR, and Ops",
    description:
      "API integration services by Liaqat Saeed. Build secure, reliable integrations across SaaS platforms, payments, HR, and internal tools.",
    canonical: `${siteConfig.url}/api-integration-services`,
    ogImage: siteConfig.ogImage,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "API Integration Services",
        url: `${siteConfig.url}/api-integration-services`,
        serviceType: ["API Integrations", "Webhooks", "Data Sync"]
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
            name: "API Integration Services",
            item: `${siteConfig.url}/api-integration-services`
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
            <h1>API Integration Services</h1>
            <p>
              I build secure integrations that sync data, automate workflows, and connect
              platforms across your stack.
            </p>
          </div>
          <div className="grid-two">
            <div className="card">
              <h2>Typical Integrations</h2>
              <ul>
                <li>Payments, billing, and reconciliation</li>
                <li>HR, payroll, and operations tooling</li>
                <li>CRM, marketing, and customer support systems</li>
              </ul>
            </div>
            <div className="card">
              <h2>Reliability Focus</h2>
              <ul>
                <li>Retries, rate-limits, and monitoring</li>
                <li>Schema validation and audit logs</li>
                <li>Secure credential handling</li>
              </ul>
            </div>
          </div>
          <div className="section-cta">
            <a className="btn primary" href="/contact">
              Need API Integration Support?
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
            <p>Answers for API integration projects.</p>
          </div>
          <FaqList items={faqItems} />
        </div>
      </section>
    </main>
  );
}
