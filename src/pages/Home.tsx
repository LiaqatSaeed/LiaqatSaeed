import { profile } from "../data/profile";
import { siteConfig } from "../data/site";
import { useSeo } from "../seo";

export default function Home() {
  useSeo({
    title: "Liaqat Saeed | Full-Stack Automation Engineer (n8n, API Integrations)",
    description:
      "Senior full-stack automation engineer with 9+ years building n8n workflows, API integrations, Node.js backends, and SaaS dashboards. Open to remote roles and freelance projects.",
    canonical: `${siteConfig.url}/`,
    ogImage: siteConfig.ogImage,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Person",
        name: siteConfig.name,
        jobTitle: "Full-Stack Automation Engineer",
        url: siteConfig.url,
        sameAs: siteConfig.sameAs
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url
      },
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Automation & Integration Engineering",
        url: siteConfig.url,
        areaServed: "Remote",
        serviceType: [
          "Full-Stack Web Development",
          "API Integrations",
          "Workflow Automation",
          "Node.js Backend Development",
          "Dashboard & SaaS Development"
        ]
      }
    ]
  });

  return (
    <main id="main" className="page">
      <section className="section hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">{profile.title}</p>
            <h1 className="hero-title">
              Full-Stack Automation Engineer for n8n, API Integrations, and Node.js Systems
            </h1>
            <p className="lead">
              I help startups and product teams automate operations, connect APIs, and ship
              reliable backend systems. 9+ years delivering workflow automation, integrations,
              and SaaS platforms with TypeScript, Node.js, Python, and Docker.
            </p>
            <p className="tagline">
              Available for remote roles, automation engagements, and integration-heavy
              projects.
            </p>
            <div className="cta-row">
              <a className="btn primary" href="/contact">
                Hire Me
              </a>
              <a className="btn" href={profile.links.resume} download>
                Download Resume
              </a>
              <a className="btn ghost" href="/projects">
                View Projects
              </a>
            </div>
            <div className="trust-grid">
              <div>
                <p className="trust-label">Experience</p>
                <p className="trust-value">9+ Years</p>
              </div>
              <div>
                <p className="trust-label">Specialties</p>
                <p className="trust-value">n8n, APIs, Backend Automation</p>
              </div>
              <div>
                <p className="trust-label">Tech</p>
                <p className="trust-value">React, Next.js, Node.js, TypeScript</p>
              </div>
            </div>
          </div>
          <div className="hero-card" aria-label="Profile snapshot">
            <h2>Snapshot</h2>
            <div className="hero-meta">
              <div>
                <p className="meta-label">Location</p>
                <p className="meta-value">{profile.location}</p>
              </div>
              <div>
                <p className="meta-label">Focus</p>
                <ul className="meta-list">
                  <li>Workflow Automation</li>
                  <li>API Integrations</li>
                  <li>Backend Systems</li>
                  <li>Deployments</li>
                </ul>
              </div>
            </div>
            <div className="hero-links">
              <span>Remote-first, async-friendly collaboration</span>
              <span>Automation + integration delivery</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>What I Help Build</h2>
            <p>Outcome-focused delivery for teams that need automation and integrations fast.</p>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <h3>Automation Workflows</h3>
              <p>n8n workflows, API orchestration, and automated data pipelines.</p>
              <p className="service-outcome">Reduce manual ops and improve reliability.</p>
            </article>
            <article className="service-card">
              <h3>API Integrations</h3>
              <p>Secure integrations across SaaS platforms, payment systems, and internal tools.</p>
              <p className="service-outcome">Connect systems and unlock real-time data.</p>
            </article>
            <article className="service-card">
              <h3>Full-Stack Platforms</h3>
              <p>React/Next.js dashboards paired with robust Node.js backend services.</p>
              <p className="service-outcome">Ship scalable SaaS features with confidence.</p>
            </article>
          </div>
          <div className="section-cta">
            <a className="btn" href="/services">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Selected Case Studies</h2>
            <p>Proof of delivery across automation, integrations, and SaaS platforms.</p>
          </div>
          <div className="projects-grid">
            {profile.projects.slice(0, 3).map((project) => (
              <article className="project-card" key={project.title}>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="chip-row">
                    {project.stack.map((chip) => (
                      <span className="chip" key={chip}>
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
                {project.links && (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
          <div className="section-cta">
            <a className="btn" href="/projects">
              View All Projects
            </a>
          </div>
        </div>
      </section>

      <section className="section contact">
        <div className="container contact-grid">
          <div>
            <h2>Open to Remote Opportunities</h2>
            <p>
              Recruiting for senior automation, integration, or full-stack roles? I partner with
              remote teams to ship reliable workflow systems, API integrations, and SaaS
              platforms.
            </p>
          </div>
          <div className="contact-card">
            <div className="contact-meta">
              <span>Remote-first · Async friendly · Global teams</span>
              <span>Automation + backend systems specialist</span>
            </div>
            <div className="contact-actions">
              <a className="btn primary" href="/contact">
                Let’s Work Together
              </a>
              <a className="btn" href={profile.links.resume} download>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
