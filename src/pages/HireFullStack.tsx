import { profile } from "../data/profile";
import { siteConfig } from "../data/site";
import { useSeo } from "../seo";
import FaqList from "../components/FaqList";

const faqItems = [
  {
    question: "What makes your full-stack approach different?",
    answer:
      "I specialize in automation and integrations, so backend workflows and API reliability are built in from day one."
  },
  {
    question: "Do you build SaaS dashboards?",
    answer:
      "Yes. I deliver full-stack SaaS features with React/Next.js frontends and Node.js services."
  },
  {
    question: "Are you open to freelance and remote roles?",
    answer:
      "Yes. I work with recruiters and founders on remote roles, contracts, and fractional engagements."
  }
];

export default function HireFullStack() {
  useSeo({
    title: "Hire Full Stack Developer | Liaqat Saeed (Automation + API Integrations)",
    description:
      "Hire a senior full-stack developer who specializes in automation workflows, API integrations, Node.js backends, and React/Next.js dashboards.",
    canonical: `${siteConfig.url}/hire-full-stack-developer`,
    ogImage: siteConfig.ogImage,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Hire Full Stack Developer",
        url: `${siteConfig.url}/hire-full-stack-developer`,
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
            <h1>Hire a Full-Stack Developer</h1>
            <p>
              Senior full-stack developer with automation expertise. I deliver backend services,
              API integrations, and product-grade interfaces that scale.
            </p>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <h3>Backend + Automation</h3>
              <p>Node.js services, workflow automation, and integration orchestration.</p>
              <p className="service-outcome">Automate operations and remove manual steps.</p>
            </article>
            <article className="service-card">
              <h3>Full-Stack SaaS</h3>
              <p>React/Next.js dashboards with secure backend APIs and data pipelines.</p>
              <p className="service-outcome">Launch scalable SaaS features quickly.</p>
            </article>
            <article className="service-card">
              <h3>Remote Delivery</h3>
              <p>Clear communication, async updates, and production-ready delivery.</p>
              <p className="service-outcome">Trusted partner for distributed teams.</p>
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
            <p>Common questions about full-stack engagement.</p>
          </div>
          <FaqList items={faqItems} />
        </div>
      </section>
    </main>
  );
}
