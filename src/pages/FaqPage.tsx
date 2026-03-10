import FaqList from "../components/FaqList";
import { homeFaqs } from "../data/aeo";
import { siteConfig } from "../data/site";
import { useSeo } from "../seo";

export default function FaqPage() {
  useSeo({
    title: "FAQ | Automation, API Integrations, Full-Stack Delivery",
    description:
      "FAQ about n8n automation, API integrations, dashboards, and full-stack engineering with Liaqat Saeed.",
    canonical: `${siteConfig.url}/faq`,
    ogImage: siteConfig.ogImage,
    jsonLd: {
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
    }
  });

  return (
    <main id="main" className="page">
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h1>FAQ</h1>
            <p>Direct answers about automation, integrations, and delivery.</p>
          </div>
          <FaqList items={homeFaqs} />
        </div>
      </section>
    </main>
  );
}
