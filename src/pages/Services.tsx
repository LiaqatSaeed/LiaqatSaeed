import { homeServices, homeFaqs } from "../data/aeo";
import { siteConfig } from "../data/site";
import { useSeo } from "../seo";
import FaqList from "../components/FaqList";

export default function Services() {
  useSeo({
    title: "Services | Automation, API Integrations, Full-Stack Engineering",
    description:
      "Automation services, API integrations, internal tools, and full-stack delivery by Liaqat Saeed. Built for remote teams and recruiters.",
    canonical: `${siteConfig.url}/services`,
    ogImage: siteConfig.ogImage,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Liaqat Saeed – Automation & Integration Services",
        url: `${siteConfig.url}/services`,
        serviceType: homeServices.map((service) => service.title)
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: homeFaqs.slice(0, 5).map((item) => ({
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
            <h1>Services</h1>
            <p>
              Specialist services for automation, API integrations, backend systems, and
              full-stack delivery.
            </p>
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
        </div>
      </section>

      <section className="section contact">
        <div className="container">
          <div className="section-heading">
            <h2>FAQ</h2>
            <p>Quick answers for recruiters and hiring managers.</p>
          </div>
          <FaqList items={homeFaqs.slice(0, 6)} />
        </div>
      </section>
    </main>
  );
}
