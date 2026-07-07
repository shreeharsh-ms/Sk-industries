import { useEffect } from "react";

export default function useDocumentMetadata(title, description) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | SK Industries`;
    }
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", description);
    }
  }, [title, description]);
}
