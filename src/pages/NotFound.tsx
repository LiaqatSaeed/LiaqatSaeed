import { siteConfig } from "../data/site";
import { useSeo } from "../seo";

export default function NotFound() {
  useSeo({
    title: "Page Not Found | Liaqat Saeed",
    description: "The page you are looking for does not exist.",
    canonical: `${siteConfig.url}/404`,
    ogImage: siteConfig.ogImage
  });

  return (
    <main id="main" className="page">
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h1>Page Not Found</h1>
            <p>The page you’re looking for doesn’t exist. Use the navigation to continue.</p>
          </div>
          <a className="btn" href="/">
            Back to Home
          </a>
        </div>
      </section>
    </main>
  );
}
