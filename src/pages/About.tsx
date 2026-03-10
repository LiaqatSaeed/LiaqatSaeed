import { useState } from "react";
import { profile } from "../data/profile";
import { siteConfig } from "../data/site";
import { useSeo } from "../seo";
import { formatExperienceYears } from "../utils/experience";

export default function About() {
  const [activeCertId, setActiveCertId] = useState(
    profile.certificates[0]?.id
  );
  const activeCert = profile.certificates.find((cert) => cert.id === activeCertId);

  const experienceLabel = formatExperienceYears();

  useSeo({
    title: "About Liaqat Saeed | Full-Stack Automation Engineer",
    description:
      `Learn about Liaqat Saeed, a senior full-stack automation engineer with ${experienceLabel} of experience in n8n workflows, API integrations, Node.js backends, and SaaS platforms for remote teams.`,
    canonical: `${siteConfig.url}/about`,
    ogImage: siteConfig.ogImage,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: siteConfig.name,
      jobTitle: "Full-Stack Automation Engineer",
      url: `${siteConfig.url}/about`,
      sameAs: siteConfig.sameAs
    }
  });

  return (
    <main id="main" className="page">
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h1>About Liaqat Saeed</h1>
            <p>
              Senior full-stack automation engineer with {experienceLabel} of experience delivering
              workflow systems, API integrations, and backend platforms for global teams.
            </p>
          </div>
          <div className="about-grid">
            <div>
              <p className="lead">
                I build automation pipelines and integration systems that remove manual work,
                improve reliability, and help teams scale. My focus is on n8n workflows, API
                orchestration, and backend services using Node.js, TypeScript, Python, and
                Docker.
              </p>
              <p>
                I partner with startups, agencies, and product teams on automation initiatives,
                platform integrations, and dashboard-driven SaaS features. My work is grounded
                in production delivery, clear documentation, and measurable outcomes.
              </p>
              <div className="about-highlights">
                <div>
                  <h3>Core Focus</h3>
                  <ul>
                    <li>Workflow automation and backend pipelines</li>
                    <li>API integrations across SaaS ecosystems</li>
                    <li>Production-ready deployments and monitoring</li>
                  </ul>
                </div>
                <div>
                  <h3>Recruiter Notes</h3>
                  <ul>
                    <li>Open to remote roles and freelance engagements</li>
                    <li>Strong communication and async collaboration</li>
                    <li>Experience across fintech, HR, SaaS, and platforms</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="about-card">
              <h3>Tech Stack Snapshot</h3>
              <div className="chip-row">
                {profile.skills
                  .flatMap((group) => group.items)
                  .slice(0, 10)
                  .map((skill) => (
                    <span className="chip" key={skill}>
                      {skill}
                    </span>
                  ))}
              </div>
              <div className="about-cta">
                <a className="btn primary" href="/contact">
                  Hire for Automation
                </a>
                <a className="btn" href={profile.links.resume} download>
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          <div className="section-spacer cert-section">
            <div className="section-heading">
              <h2>Certifications</h2>
              <p>Verified credentials that support automation and integration delivery.</p>
            </div>
            <div className="cert-showcase">
              <div className="cert-display">
                {activeCert?.imageUrl ? (
                  <a
                    className="cert-image-link"
                    href={activeCert.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={activeCert.imageUrl}
                      alt={`${activeCert.title} certificate`}
                      loading="lazy"
                    />
                  </a>
                ) : (
                  <div className="cert-placeholder">Certificate preview unavailable.</div>
                )}
              </div>
              <div className="cert-caption">
                <div>
                  <h3>{activeCert?.title}</h3>
                  <p className="cert-meta">{activeCert?.issuer}</p>
                  <p className="cert-meta">
                    {activeCert?.issued ? `Issued: ${activeCert.issued} · ` : ""}ID: {activeCert?.id}
                  </p>
                </div>
                {activeCert?.url ? (
                  <a className="btn" href={activeCert.url} target="_blank" rel="noreferrer">
                    View Certificate
                  </a>
                ) : null}
              </div>
              <div className="cert-thumbs">
                {profile.certificates.map((cert) => (
                  <button
                    key={cert.id}
                    className={cert.id === activeCertId ? "cert-thumb active" : "cert-thumb"}
                    type="button"
                    onClick={() => setActiveCertId(cert.id)}
                    aria-pressed={cert.id === activeCertId}
                  >
                    {cert.imageUrl ? (
                      <img src={cert.imageUrl} alt="" loading="lazy" />
                    ) : null}
                    <span>{cert.title}</span>
                    <small>Verified</small>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
