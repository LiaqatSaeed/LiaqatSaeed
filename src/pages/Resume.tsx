import { profile } from "../data/profile";
import { siteConfig } from "../data/site";
import { useSeo } from "../seo";

export default function Resume() {
  useSeo({
    title: "Resume | Liaqat Saeed – Full-Stack Automation Engineer",
    description:
      "Download the resume of Liaqat Saeed, senior full-stack automation engineer specializing in n8n workflows, API integrations, Node.js, and TypeScript.",
    canonical: `${siteConfig.url}/resume`,
    ogImage: siteConfig.ogImage,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Resume",
      url: `${siteConfig.url}/resume`
    }
  });

  return (
    <main id="main" className="page">
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h1>Resume</h1>
            <p>
              Download the latest resume and review automation, integration, and full-stack
              experience highlights.
            </p>
          </div>
          <div className="resume-card">
            <div>
              <h2>Full-Stack Automation Engineer</h2>
              <p>{profile.summary}</p>
              <ul>
                <li>Automation workflows and API integrations</li>
                <li>Node.js, TypeScript, Python backends</li>
                <li>Docker deployments and production reliability</li>
              </ul>
            </div>
            <div className="resume-actions">
              <a className="btn primary" href={profile.links.resume} download>
                Download Resume (PDF)
              </a>
              <a className="btn" href="/contact">
                Contact for Opportunities
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
