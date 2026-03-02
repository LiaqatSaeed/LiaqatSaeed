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
  const [copyStatus, setCopyStatus] = useState<string>("");

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

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = name ? `Project inquiry from ${name}` : "Project inquiry";
    const bodyLines = [
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      "",
      message
    ].filter(Boolean);
    const mailto = `mailto:${profile.links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.links.email);
      setCopyStatus("Copied!");
      window.setTimeout(() => setCopyStatus(""), 2000);
    } catch {
      setCopyStatus("Copy failed");
      window.setTimeout(() => setCopyStatus(""), 2000);
    }
  };

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
          <div className="header-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-pressed={theme === "dark"}
              aria-label="Toggle dark mode"
              type="button"
            >
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </button>
          </div>
        </div>
      </header>

      <main id="main" role="main">
        <section id="about" className="section hero" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="eyebrow">{profile.title}</p>
              <h1 id="hero-title">{profile.headline}</h1>
              <p className="lead">{profile.summary}</p>
              <div className="cta-row">
                <a className="btn primary" href={profile.links.resume} download>
                  Download Resume (PDF)
                </a>
                <a className="btn" href="#contact">
                  Contact
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
                  <p className="meta-value">Integrations, automation, deployments</p>
                </div>
              </div>
              <div className="hero-links">
                <span className="contact-link">{profile.links.email}</span>
                <a href={`tel:${profile.links.phone}`}>{profile.links.phone}</a>
                <span>Skype: {profile.links.skype}</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section" aria-labelledby="skills-title">
          <div className="container">
            <div className="section-heading">
              <h2 id="skills-title">Skills</h2>
              <p>
                Core technologies and platforms across frontend, backend, mobile,
                automation, and infrastructure.
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
          id="experience"
          className="section"
          aria-labelledby="experience-title"
        >
          <div className="container">
            <div className="section-heading">
              <h2 id="experience-title">Experience</h2>
              <p>
                Senior full-stack and integration roles focused on delivering
                reliable products, workflows, and deployments.
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
                Recent integrations, platforms, and product deliveries aligned
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
                Reach out for collaboration, integration work, or senior full-stack
                engineering support.
              </p>
            </div>
            <div className="contact-card">
              <div className="contact-inline">
                <span className="contact-link">{profile.links.email}</span>
                <button
                  className="contact-copy"
                  type="button"
                  onClick={handleCopyEmail}
                  aria-live="polite"
                >
                  {copyStatus || "Copy email"}
                </button>
              </div>
              <a className="contact-link" href={`tel:${profile.links.phone}`}>
                {profile.links.phone}
              </a>
              <div className="contact-meta">
                <span>{profile.location}</span>
                <span>Skype: {profile.links.skype}</span>
              </div>
              <div className="contact-actions">
                <a className="btn primary" href={`mailto:${profile.links.email}`}>
                  Email
                </a>
                <a
                  className="btn"
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-row">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your project or role."
                  rows={4}
                  required
                />
              </div>
              <p className="form-note">
                Submitting opens your default email client with a pre-filled
                message.
              </p>
              <button className="btn primary" type="submit">
                Send Message
              </button>
            </form>
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
            <a href={`mailto:${profile.links.email}`}>Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
