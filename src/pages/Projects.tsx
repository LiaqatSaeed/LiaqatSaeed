import { profile } from "../data/profile";
import { siteConfig } from "../data/site";
import { useSeo } from "../seo";
import FaqList from "../components/FaqList";

const faqItems = [
  {
    question: "What kinds of projects does Liaqat Saeed deliver?",
    answer:
      "Automation workflows, API integrations, backend services, dashboards, and SaaS features for remote-first product teams."
  },
  {
    question: "Do you provide end-to-end case studies?",
    answer:
      "Yes—each project includes the problem, solution approach, key features, and measurable outcomes."
  },
  {
    question: "Can you handle integration-heavy platforms?",
    answer:
      "Absolutely. I specialize in orchestrating APIs, data pipelines, and workflow automation using Node.js, n8n, and Python."
  }
];

export default function Projects() {
  useSeo({
    title: "Case Studies | Liaqat Saeed – Automation & Integration Engineer",
    description:
      "Case studies highlighting automation workflows, API integrations, and SaaS platform delivery. Proven outcomes across fintech, HR, and product teams.",
    canonical: `${siteConfig.url}/projects`,
    ogImage: siteConfig.ogImage,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Automation & Integration Case Studies",
        url: `${siteConfig.url}/projects`,
        description:
          "Case studies highlighting automation workflows, API integrations, and SaaS platform delivery."
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
            <h1>Case Studies & Projects</h1>
            <p>
              Real-world automation, integration, and SaaS delivery. Each case study is focused
              on outcomes, reliability, and measurable impact.
            </p>
          </div>
          <div className="case-grid">
            {profile.caseStudies.map((study) => (
              <article className="case-card" key={study.name}>
                <div className="case-header">
                  <div>
                    <h2>{study.name}</h2>
                    <p className="case-domain">{study.domain}</p>
                  </div>
                  <span className="case-role">{study.role}</span>
                </div>
                <div className="case-body">
                  <div>
                    <h3>Problem</h3>
                    <p>{study.problem}</p>
                  </div>
                  <div>
                    <h3>Solution</h3>
                    <p>{study.solution}</p>
                  </div>
                </div>
                <div className="case-details">
                  <div>
                    <h4>Key Features</h4>
                    <ul>
                      {study.features.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Impact</h4>
                    <ul>
                      {study.impact.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="case-footer">
                  <div className="chip-row">
                    {study.stack.map((chip) => (
                      <span className="chip" key={chip}>
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact">
        <div className="container">
          <div className="section-heading">
            <h2>Frequently Asked Questions</h2>
            <p>Helpful answers for recruiters and hiring teams.</p>
          </div>
          <FaqList items={faqItems} />
        </div>
      </section>
    </main>
  );
}
