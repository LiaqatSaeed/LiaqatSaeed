import { homeCaseStudies, landingFaqs } from "../data/aeo";
import { siteConfig } from "../data/site";
import { useSeo } from "../seo";
import FaqList from "../components/FaqList";

export default function AutomationCaseStudies() {
  useSeo({
    title: "Automation Case Studies | n8n, API Integrations, Dashboards",
    description:
      "Automation case studies showing workflow systems, API integrations, dashboards, and backend automation delivered by Liaqat Saeed.",
    canonical: `${siteConfig.url}/automation-case-studies`,
    ogImage: siteConfig.ogImage,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Automation Case Studies",
        itemListElement: homeCaseStudies.map((study, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: study.title
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
            name: "Automation Case Studies",
            item: `${siteConfig.url}/automation-case-studies`
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
            <h1>Automation Case Studies</h1>
            <p>
              A snapshot of automation, integration, and platform projects delivered for
              global teams.
            </p>
          </div>
          <div className="case-grid">
            {homeCaseStudies.map((study) => (
              <article className="case-card" key={study.title}>
                <h3>{study.title}</h3>
                <p className="case-problem">Problem: {study.problem}</p>
                <p className="case-meta">Role: {study.role}</p>
                <div className="chip-row">
                  {study.stack.map((chip) => (
                    <span className="chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
                <p className="case-outcome">Outcome: {study.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>FAQ</h2>
            <p>Additional context about the work.</p>
          </div>
          <FaqList items={landingFaqs.caseStudies} />
        </div>
      </section>
    </main>
  );
}
