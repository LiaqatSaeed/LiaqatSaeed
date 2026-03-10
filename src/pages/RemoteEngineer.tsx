import { profile } from "../data/profile";
import { siteConfig } from "../data/site";
import { useSeo } from "../seo";
import FaqList from "../components/FaqList";

const faqItems = [
  {
    question: "Do you work across time zones?",
    answer:
      "Yes. I collaborate async-first and overlap with US/EU teams for critical meetings."
  },
  {
    question: "What kind of remote roles are a fit?",
    answer:
      "Automation engineer, integration engineer, or full-stack roles with API-heavy backends."
  },
  {
    question: "How do you communicate progress?",
    answer:
      "Clear weekly updates, documented decisions, and transparent delivery milestones."
  }
];

export default function RemoteEngineer() {
  useSeo({
    title: "Remote Software Engineer | Liaqat Saeed (Full-Stack + Automation)",
    description:
      "Remote software engineer specializing in automation workflows, API integrations, Node.js backends, and SaaS platforms. Open to global teams.",
    canonical: `${siteConfig.url}/remote-software-engineer`,
    ogImage: siteConfig.ogImage,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Remote Software Engineer",
        url: `${siteConfig.url}/remote-software-engineer`
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
            <h1>Remote Software Engineer</h1>
            <p>
              Senior full-stack engineer with automation focus, delivering integrations and
              backend systems for remote teams.
            </p>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <h3>Remote Collaboration</h3>
              <p>Async-friendly delivery with clear documentation and updates.</p>
              <p className="service-outcome">Smooth collaboration across time zones.</p>
            </article>
            <article className="service-card">
              <h3>Automation + Integrations</h3>
              <p>Workflow automation, API orchestration, and backend services.</p>
              <p className="service-outcome">Reliable systems that scale without manual work.</p>
            </article>
            <article className="service-card">
              <h3>SaaS Delivery</h3>
              <p>Dashboards, admin tooling, and product features for modern platforms.</p>
              <p className="service-outcome">Production-ready delivery for product teams.</p>
            </article>
          </div>
          <div className="section-cta">
            <a className="btn primary" href="/contact">
              Let’s Work Together
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
            <p>Remote engagement expectations and collaboration details.</p>
          </div>
          <FaqList items={faqItems} />
        </div>
      </section>
    </main>
  );
}
