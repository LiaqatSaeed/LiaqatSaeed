import { useEffect, useState } from "react";
import { profile } from "./data/profile";
import { useTheme } from "./hooks";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.querySelector(link.href)
    );

    const handleScroll = () => {
      const offset = 140;
      const positions = sections
        .map((section) => {
          if (!section) return null;
          const rect = section.getBoundingClientRect();
          return { id: section.id, top: rect.top - offset };
        })
        .filter(Boolean) as { id: string; top: number }[];

      const current =
        positions
          .filter((pos) => pos.top <= 0)
          .sort((a, b) => b.top - a.top)[0] || positions[0];

      if (current && current.id !== activeSection) {
        setActiveSection(current.id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [activeSection]);

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#about">
            <img
              className="brand-avatar"
              src="/Liaqat_saeed.jpeg"
              alt="Liaqat Saeed"
            />
            <span className="brand-name">{profile.name}</span>
          </a>
          <nav className="nav" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={activeSection === link.href.slice(1) ? "active" : ""}
                aria-current={
                  activeSection === link.href.slice(1) ? "page" : undefined
                }
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <button
        className="theme-fab"
        onClick={toggleTheme}
        aria-pressed={theme === "dark"}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        type="button"
        title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        {theme === "dark" ? (
          <svg
            className="theme-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M12 4.5a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1V6a1 1 0 0 1-2 0V4.5Zm0 13a1 1 0 0 1 1 1V20a1 1 0 0 1-2 0v-1.5a1 1 0 0 1 1-1Zm7.5-5.5a1 1 0 0 1 1-1H22a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1Zm-17 0a1 1 0 0 1 1-1H5a1 1 0 1 1 0 2H3.5a1 1 0 0 1-1-1Zm13.02-5.52a1 1 0 0 1 1.42 0l.06.06a1 1 0 1 1-1.42 1.42l-.06-.06a1 1 0 0 1 0-1.42Zm-10.1 10.1a1 1 0 0 1 1.42 0l.06.06a1 1 0 1 1-1.42 1.42l-.06-.06a1 1 0 0 1 0-1.42Zm10.16 1.48a1 1 0 0 1 0-1.42l.06-.06a1 1 0 1 1 1.42 1.42l-.06.06a1 1 0 0 1-1.42 0Zm-10.1-10.1a1 1 0 0 1 0-1.42l.06-.06a1 1 0 1 1 1.42 1.42l-.06.06a1 1 0 0 1-1.42 0ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            className="theme-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M20.5 15.6A8.5 8.5 0 0 1 8.4 3.5a1 1 0 0 1 1.2 1.2 6.5 6.5 0 1 0 9.7 9.7 1 1 0 0 1 1.2 1.2Z"
              fill="currentColor"
            />
          </svg>
        )}
      </button>

      <main id="main" role="main">
        <section id="about" className="section hero" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="eyebrow">{profile.title}</p>
              <h1 id="hero-title">{profile.headline}</h1>
              <p className="lead">{profile.summary}</p>
              <p className="tagline">{profile.tagline}</p>
              <div className="cta-row">
                <a className="btn primary" href={profile.links.resume} download>
                  Download Resume
                </a>
                <a className="btn" href="#contact">
                  Discuss Your Automation Project
                </a>
                <a
                  className="btn ghost"
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="btn ghost"
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <ul className="value-props">
                {profile.valueProps.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="hero-card" aria-label="Profile details">
              <h2>Profile Snapshot</h2>
              <div className="hero-meta">
                <div>
                  <p className="meta-label">Location</p>
                  <p className="meta-value">{profile.location}</p>
                </div>
                <div>
                  <p className="meta-label">Experience</p>
                  <p className="meta-value">9+ years</p>
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
                <span>Available for remote automation projects</span>
                <span>Open to integration and workflow engagements</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section" aria-labelledby="skills-title">
          <div className="container">
            <div className="section-heading">
              <h2 id="skills-title">Skills</h2>
              <p>
                Automation, integration, backend, and infrastructure capabilities
                that power reliable workflow systems.
              </p>
            </div>
            <div className="skills-grid">
              {profile.skills.map((group) => (
                <div className="skill-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="certifications"
          className="section"
          aria-labelledby="certifications-title"
        >
          <div className="container">
            <div className="section-heading">
              <h2 id="certifications-title">Certifications</h2>
              <p>
                Verified certifications that support automation and integration
                delivery.
              </p>
            </div>
            <div className="cert-grid">
              {profile.certificates.map((cert) => (
                <article className="cert-card" key={cert.id}>
                  <div>
                    <h3>{cert.title}</h3>
                    <p className="cert-meta">{cert.issuer}</p>
                    <p className="cert-meta">
                      {cert.issued ? `Issued: ${cert.issued} · ` : ""}ID: {cert.id}
                    </p>
                  </div>
                  <a
                    className="cert-link"
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Certificate
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="section"
          aria-labelledby="experience-title"
        >
          <div className="container">
            <div className="section-heading">
              <h2 id="experience-title">Experience</h2>
              <p>
                Automation, integration, and backend engineering roles focused on
                reliable workflows, data pipelines, and production deployments.
              </p>
            </div>
            <div className="timeline">
              {profile.experience.map((role) => (
                <article className="timeline-item" key={role.company + role.dates}>
                  <div className="timeline-meta">
                    <span className="timeline-date">{role.dates}</span>
                    <span className="timeline-type">{role.employmentType}</span>
                  </div>
                  <div className="timeline-content">
                    <h3>
                      {role.title}
                      <span>
                        {role.company} · {role.location}
                      </span>
                    </h3>
                    <ul>
                      {role.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section" aria-labelledby="projects-title">
          <div className="container">
            <div className="section-heading">
              <h2 id="projects-title">Selected Projects</h2>
              <p>
                Automation systems, integrations, and product deliveries aligned
                with the resume.
              </p>
            </div>
            <div className="projects-grid">
              {profile.projects.map((project) => (
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
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="education"
          className="section"
          aria-labelledby="education-title"
        >
          <div className="container">
            <div className="section-heading">
              <h2 id="education-title">Education</h2>
            </div>
            <div className="education-grid">
              {profile.education.map((item) => (
                <article className="education-card" key={item.school}>
                  <h3>{item.degree}</h3>
                  <p className="education-school">{item.school}</p>
                  <p className="education-dates">{item.dates}</p>
                  {item.details && (
                    <ul>
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact" aria-labelledby="contact-title">
          <div className="container contact-grid">
            <div>
              <h2 id="contact-title">Contact</h2>
              <p>
                Share your automation or integration needs and I will help you
                design a reliable workflow solution.
              </p>
            </div>
            <div className="contact-card">
              <div className="contact-meta">
                <span>Remote-first, async-friendly collaboration</span>
                <span>Specialized in automation, integrations, and backend systems</span>
              </div>
              <div className="contact-actions">
                <a className="btn primary" href="#experience">
                  View Automation Experience
                </a>
                <a className="btn" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                  Connect on LinkedIn
                </a>
              </div>
            </div>
            <div className="contact-form">
              <h3 className="contact-title">What I Can Help With</h3>
              <ul>
                <li>n8n workflow automation and integrations</li>
                <li>API orchestration and backend services</li>
                <li>Data pipelines, reliability, and deployment hardening</li>
              </ul>
              <p className="form-note">
                Prefer platform messaging for initial conversations.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <div className="footer-links">
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
