import { profile } from "../data/profile";
import { siteConfig } from "../data/site";
import { useSeo } from "../seo";
import FaqList from "../components/FaqList";

const faqItems = [
  {
    question: "Can you deliver React and Next.js dashboards?",
    answer:
      "Yes. I build recruiter-friendly, data-rich dashboards and customer portals with React and Next.js tied to reliable backend services."
  },
  {
    question: "Do you handle API integration?",
    answer:
      "Absolutely. API integrations are a core focus, especially for workflow automation and SaaS platforms."
  },
  {
    question: "Are you open to remote roles?",
    answer:
      "Yes. I work with remote teams across time zones for contract or full-time roles."
  }
];

export default function HireReact() {
  useSeo({
    title: "Hire React Developer | Liaqat Saeed (Remote, Senior)",
    description:
      "Hire a senior React/Next.js developer with automation and integration expertise. Remote-first, full-stack, and outcome-focused delivery.",
    canonical: `${siteConfig.url}/hire-react-developer`,
    ogImage: siteConfig.ogImage,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Hire React Developer",
        url: `${siteConfig.url}/hire-react-developer`,
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
            <h1>Hire a Senior React Developer</h1>
            <p>
              React/Next.js specialist with full-stack automation experience. I build performant
              interfaces tied to reliable backend services and integration workflows.
            </p>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <h3>Frontend + API Integration</h3>
              <p>React and Next.js interfaces connected to secure APIs and workflow systems.</p>
              <p className="service-outcome">Launch dashboards that scale with your data.</p>
            </article>
            <article className="service-card">
              <h3>Automation-Aware UI</h3>
              <p>UI that reflects workflow states, automation runs, and integration health.</p>
              <p className="service-outcome">Reduce support load with clarity and visibility.</p>
            </article>
            <article className="service-card">
              <h3>Remote Delivery</h3>
              <p>Async-friendly collaboration with fast delivery and clear communication.</p>
              <p className="service-outcome">Ship recruiter-ready features on schedule.</p>
            </article>
          </div>
          <div className="section-cta">
            <a className="btn primary" href="/contact">
              Hire Liaqat Saeed
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
            <p>Common questions from recruiters and hiring managers.</p>
          </div>
          <FaqList items={faqItems} />
        </div>
      </section>
    </main>
  );
}
