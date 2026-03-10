import { useEffect } from "react";

export type SeoConfig = {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const upsertMeta = (selector: string, attrs: Record<string, string>) => {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    Object.entries(attrs).forEach(([key, value]) => {
      if (key === "name" || key === "property") {
        el!.setAttribute(key, value);
      }
    });
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => {
    if (key !== "name" && key !== "property") {
      el!.setAttribute(key, value);
    }
  });
};

const upsertLink = (rel: string, href: string) => {
  let link = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.rel = rel;
    document.head.appendChild(link);
  }
  link.href = href;
};

const upsertJsonLd = (jsonLd?: SeoConfig["jsonLd"]) => {
  const existing = document.head.querySelector("script[data-seo-jsonld]");
  if (!jsonLd) {
    existing?.remove();
    return;
  }
  const script = (existing as HTMLScriptElement) || document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-seo-jsonld", "true");
  script.textContent = JSON.stringify(jsonLd);
  if (!existing) {
    document.head.appendChild(script);
  }
};

export const useSeo = (config: SeoConfig) => {
  useEffect(() => {
    document.title = config.title;
    upsertMeta('meta[name="description"]', { name: "description", content: config.description });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: config.ogTitle || config.title
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: config.ogDescription || config.description
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: config.ogType || "website"
    });
    if (config.ogImage) {
      upsertMeta('meta[property="og:image"]', { property: "og:image", content: config.ogImage });
    }
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: config.canonical
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image"
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: config.twitterTitle || config.title
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: config.twitterDescription || config.description
    });
    if (config.twitterImage || config.ogImage) {
      upsertMeta('meta[name="twitter:image"]', {
        name: "twitter:image",
        content: config.twitterImage || config.ogImage || ""
      });
    }
    upsertLink("canonical", config.canonical);
    upsertJsonLd(config.jsonLd);
  }, [config]);
};
