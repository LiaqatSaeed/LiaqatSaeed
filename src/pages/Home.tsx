import FaqList from "../components/FaqList";
import { buildWhyHirePoints, homeCaseStudies, homeFaqs, homeServices } from "../data/aeo";
import { profile } from "../data/profile";
import { siteConfig } from "../data/site";
import { useSeo } from "../seo";
import { formatExperienceYears } from "../utils/experience";

export default function Home() {
  const experienceLabel = formatExperienceYears();
  const whyHirePoints = buildWhyHirePoints(experienceLabel);

  useSeo({
    title: "Liaqat Saeed | Full-Stack Automation Engineer, n8n & API Integrations",
    description:
      `Liaqat Saeed is a Full-Stack Automation Engineer with ${experienceLabel} of experience building n8n workflows, API integrations, internal tools, React apps, Node.js backends, and production-ready systems.`,
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
        name: "Full-Stack Automation & Integration Engineering",
        url: siteConfig.url,
        areaServed: "Remote",
        serviceType: homeServices.map((service) => service.title)
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: homeFaqs.map((item) => ({
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
        "@type": "ItemList",
        name: "Selected Case Studies",
        itemListElement: homeCaseStudies.map((study, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: study.title
        }))
      }
    ]
  });

  return (
    <main id="main" className="page">
      <section className="section hero" id="top">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Full-Stack Automation Engineer · {experienceLabel}</p>
            <h1 className="hero-title">
              Liaqat Saeed — Full-Stack Automation Engineer (n8n, API Integrations, React, Node.js)
            </h1>
            <p className="lead">
              I have {experienceLabel} of experience building automation workflows, API integrations, and
              full-stack products for remote teams. I specialize in n8n, React, TypeScript, and
              Node.js to deliver reliable backend systems, internal tools, and scalable
              deployments for global clients.
            </p>
            <div className="cta-row">
              <a className="btn primary" href="/contact">
                Hire Me
              </a>
              <a className="btn" href={profile.links.resume} download>
                View Resume
              </a>
              <a className="btn ghost" href="/projects">
                View Projects
              </a>
              <a className="btn ghost" href="/contact">
                Contact Me
              </a>
            </div>
            <div className="trust-grid">
              <div>
                <p className="trust-label">Experience</p>
                <p className="trust-value">{experienceLabel}</p>
              </div>
              <div>
                <p className="trust-label">Specialties</p>
                <p className="trust-value">n8n, API Integrations, Automation</p>
              </div>
              <div>
                <p className="trust-label">Stack</p>
                <p className="trust-value">React, TypeScript, Node.js, Python</p>
              </div>
            </div>
            <div className="hero-links">
              <a href="#services">Services</a>
              <a href="#case-studies">Case Studies</a>
              <a href="#why-hire">Why Hire Me</a>
              <a href="#faq">FAQ</a>
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
                  <li>Workflow automation and API orchestration</li>
                  <li>Internal tools and dashboards</li>
                  <li>Full-stack delivery with deployment support</li>
                </ul>
              </div>
            </div>
            <div className="hero-links">
              <span>Remote-first · Async friendly · Global teams</span>
              <span>Automation + integrations specialist</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <h2>Services</h2>
            <p>Focused delivery for automation, integrations, and full-stack systems.</p>
          </div>
          <div className="service-grid">
            {homeServices.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-list">
                  {service.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {service.cta && (
                  <a className="text-link" href={service.cta.href}>
                    {service.cta.label}
                  </a>
                )}
              </article>
            ))}
          </div>
          <div className="section-cta">
            <a className="btn" href="/services">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="case-studies">
        <div className="container">
          <div className="section-heading">
            <h2>Selected Case Studies</h2>
            <p>Real-world automation, integration, and platform work.</p>
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
                {study.href && (
                  <a className="text-link" href={study.href}>
                    Read case study
                  </a>
                )}
              </article>
            ))}
          </div>
          <div className="section-cta">
            <a className="btn" href="/automation-case-studies">
              View Case Studies
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="why-hire">
        <div className="container">
          <div className="section-heading">
            <h2>Why Hire Me</h2>
            <p>Clear proof points for recruiters, founders, and product teams.</p>
          </div>
          <div className="stats-grid">
            {whyHirePoints.map((point) => (
              <div className="stat-card" key={point}>
                <p>{point}</p>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <a className="btn primary" href="/contact">
              Let’s Build Your Automation
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <div className="section-heading">
            <h2>FAQ</h2>
            <p>Direct answers for recruiters and hiring managers.</p>
          </div>
          <FaqList items={homeFaqs} />
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="container contact-grid">
          <div>
            <h2>Ready to Automate?</h2>
            <p>
              Need workflow automation, API integrations, or a senior engineer who can own the
              full stack? Let’s scope your project.
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
