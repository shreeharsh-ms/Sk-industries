import React from "react";
import { Link } from "react-router-dom";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

export default function NotFoundPage() {
  useDocumentMetadata(
    "404 - Page Not Found",
    "The page you are looking for does not exist on SK Industries."
  );

  return (
    <main className="container section-padding" style={{ textAlign: "center" }}>
      <h1 className="heading-display-lg" style={{ color: "var(--color-accent-primary)" }}>404</h1>
      <p style={{ marginTop: "var(--space-4)" }}>Page Not Found</p>
      <div style={{ marginTop: "var(--space-6)" }}>
        <Link to="/" style={{ color: "var(--color-accent-primary)", textDecoration: "underline" }}>
          Return to Home
        </Link>
      </div>
    </main>
  );
}
