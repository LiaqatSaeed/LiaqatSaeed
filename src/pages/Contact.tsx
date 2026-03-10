import { profile } from "../data/profile";
import { siteConfig } from "../data/site";
import { useSeo } from "../seo";

export default function Contact() {
  useSeo({
    title: "Contact | Hire Liaqat Saeed (Automation & Full-Stack)",
    description:
      "Reach out for automation workflows, API integrations, and full-stack engineering. Open to remote roles and freelance projects.",
    canonical: `${siteConfig.url}/contact`,
    ogImage: siteConfig.ogImage,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Liaqat Saeed",
      url: `${siteConfig.url}/contact`
    }
  });

  return (
    <main id="main" className="page">
      <section className="section">
        <div className="container contact-grid">
          <div>
            <div className="section-heading">
              <h1>Contact</h1>
              <p>
                I partner with remote teams on automation, API integrations, and full-stack
                delivery. Share your scope and I will respond quickly.
              </p>
            </div>
            <div className="contact-meta">
              <span>Remote-first · Async friendly · Global availability</span>
              <span>Specialist in n8n, Node.js, and API integrations</span>
            </div>
          </div>
          <div className="contact-card">
            <h2>Recruiter / Client CTA</h2>
            <p>
              Best initial contact: LinkedIn. Resume and case studies are ready on request.
            </p>
            <div className="contact-actions">
              <a className="btn primary" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                Connect on LinkedIn
              </a>
              <a className="btn" href={profile.links.resume} download>
                Download Resume
              </a>
            </div>
          </div>
          <div className="contact-form">
            <h3 className="contact-title">What I Can Help With</h3>
            <ul>
              <li>Automation workflows and data pipelines</li>
              <li>API integrations and backend services</li>
              <li>Dashboards, SaaS features, and operational tooling</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
