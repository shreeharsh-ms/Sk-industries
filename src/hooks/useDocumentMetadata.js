import { useEffect } from "react";

export default function useDocumentMetadata(title, description, keywords) {
  useEffect(() => {
    // 1. Title
    if (title) {
      document.title = `${title} | SK Industries — Precision Stamping & Powder Coating`;
    }

    // 2. Meta Description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", description);
    }

    // 3. Meta Keywords (Optimized for PP Engineering, Metal Stamping Pune, etc.)
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    const defaultKeywords = "PP Engineering, PP Engineering Pune, SK Industries, precision metal stamping, progressive press, press tool maker Pune, industrial powder coating, sheet metal stamping, Kondhwa industrial area, electrical stamping, EV enclosures, rolling shutter locks, Pune engineering company, metal fabrication Pune";
    const pageKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
    metaKeywords.setAttribute("content", pageKeywords);

    // 4. Open Graph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", title || "SK Industries");

    // 5. Open Graph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute("content", description || "Precision Metal Stamping & Industrial Powder Coating services in Pune.");
  }, [title, description, keywords]);
}
