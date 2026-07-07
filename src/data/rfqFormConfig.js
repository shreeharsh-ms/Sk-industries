export default {
  fields: {
    fullName: {
      label: "Full Name",
      required: "Full Name is required",
      placeholder: "e.g. John Doe",
    },
    email: {
      label: "Business Email",
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
      placeholder: "e.g. john@company.com",
    },
    companyName: {
      label: "Company Name",
      required: "Company Name is required",
      placeholder: "e.g. Sourcing Ltd",
    },
    materialGrade: {
      label: "Material Grade Requirement",
      required: "Please select a material grade",
      options: [
        { value: "CRCA_STEEL", label: "Mild Steel (CRCA - 10 to 16 Gauge)" },
        { value: "STAINLESS_STEEL", label: "Stainless Steel (AISI 304 / 316)" },
        { value: "ALUMINUM", label: "Aluminum Sheet (5052 / 6061)" },
        { value: "BRASS_COPPER", label: "Conductive Copper / Cartridge Brass" },
      ],
    },
    materialThickness: {
      label: "Nominal Thickness (mm)",
      required: "Thickness is required",
      placeholder: "e.g. 2.0",
    },
    ralColor: {
      label: "RAL Powder Color Finish",
      placeholder: "e.g. RAL 7024 (Graphite Grey)",
      required: false,
    },
    glossLevel: {
      label: "Desired Paint Gloss Level",
      options: [
        { value: "MATTE", label: "Matte (10-20% Gloss)" },
        { value: "SATIN", label: "Satin (50-60% Gloss)" },
        { value: "GLOSSY", label: "Glossy (80%+ Gloss)" },
        { value: "RAW_NO_COAT", label: "Raw Mill Finish (No coating)" },
      ],
      required: "Please select a paint gloss level",
    },
  },
  ctaText: "Initiate Technical RFQ",
  successMessage: "RFQ Submitted Successfully. An engineering manager will review your submission and CAD drawings and follow up within 24 hours.",
};
