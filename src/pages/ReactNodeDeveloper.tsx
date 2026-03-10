import FaqList from "../components/FaqList";
import { landingFaqs } from "../data/aeo";
import { profile } from "../data/profile";
import { siteConfig } from "../data/site";
import { useSeo } from "../seo";

const faqItems = landingFaqs.reactNode;

export default function ReactNodeDeveloper() {
  useSeo({
    title: "React & Node.js Developer | Full-Stack Automation Engineer",
    description:
      "Hire Liaqat Saeed for React, TypeScript, and Node.js development. Full-stack delivery with automation, APIs, and production-ready deployments.",
    canonical: `${siteConfig.url}/react-nodejs-developer`,
    ogImage: siteConfig.ogImage,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "React + Node.js Full-Stack Development",
        url: `${siteConfig.url}/react-nodejs-developer`,
        serviceType: ["React Development", "Node.js Backend", "TypeScript Apps"]
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
            name: "React & Node.js Developer",
            item: `${siteConfig.url}/react-nodejs-developer`
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
            <h1>React & Node.js Full-Stack Developer</h1>
            <p>
              I deliver React and TypeScript frontends paired with Node.js services for
              automation, dashboards, and SaaS platforms.
            </p>
          </div>
          <div className="grid-two">
            <div className="card">
              <h2>Frontend Delivery</h2>
              <ul>
                <li>React, Next.js, and TypeScript UI</li>
                <li>Dashboards, admin tools, and internal apps</li>
                <li>UX focused on clarity and speed</li>
              </ul>
            </div>
            <div className="card">
              <h2>Backend Delivery</h2>
              <ul>
                <li>Node.js APIs and background services</li>
                <li>Authentication, RBAC, and data pipelines</li>
                <li>Monitoring, testing, and deployments</li>
              </ul>
            </div>
          </div>
          <div className="section-cta">
            <a className="btn primary" href="/contact">
              Looking for a React/Node.js Engineer?
            </a>
            <a className="btn" href="/projects">
              View Projects
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>FAQ</h2>
            <p>Common questions about full-stack delivery.</p>
          </div>
          <FaqList items={faqItems} />
        </div>
      </section>
    </main>
  );
}
