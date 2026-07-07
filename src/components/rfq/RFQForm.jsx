import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle } from "lucide-react";
import Button from "../ui/Button";
import styles from "./RFQForm.module.css";

export default function RFQForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    setLoading(true);
    // Simulate API request delay
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      console.log("RFQ Submission Data:", data);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className={styles.successScreen}>
        <CheckCircle className={styles.successIcon} size={64} style={{ color: "var(--color-accent-primary)" }} />
        <h2 className={styles.successTitle}>Request Submitted</h2>
        <p className={styles.successDesc}>
          An engineering manager will review your submission and email a technical pricing quotation within 24 hours of submission.
        </p>
        <Button variant="primary" onClick={() => setIsSubmitted(false)}>
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: "1.25rem", margin: "0 0 var(--space-4) 0" }}>
        Technical RFQ Form
      </h2>

      {/* Row 1: Name & Email */}
      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Full Name</label>
          <input
            className={styles.input}
            type="text"
            placeholder="e.g. John Doe"
            {...register("fullName", { required: "Full name is required" })}
          />
          {errors.fullName && (
            <span className={styles.errorText}>{errors.fullName.message}</span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Business Email</label>
          <input
            className={styles.input}
            type="email"
            placeholder="e.g. john@company.com"
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
          />
          {errors.email && (
            <span className={styles.errorText}>{errors.email.message}</span>
          )}
        </div>
      </div>

      {/* Row 2: Company & Phone */}
      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Company Name</label>
          <input
            className={styles.input}
            type="text"
            placeholder="e.g. Sourcing Ltd"
            {...register("companyName", { required: "Company name is required" })}
          />
          {errors.companyName && (
            <span className={styles.errorText}>{errors.companyName.message}</span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Phone Number</label>
          <input
            className={styles.input}
            type="text"
            placeholder="e.g. +91 98765 43210"
            {...register("phone", { required: "Phone number is required" })}
          />
          {errors.phone && (
            <span className={styles.errorText}>{errors.phone.message}</span>
          )}
        </div>
      </div>

      {/* Row 3: Requirement Details */}
      <div className={styles.inputGroup}>
        <label className={styles.label}>Requirement Details / Specifications</label>
        <textarea
          className={styles.textarea}
          rows="6"
          placeholder="Please describe your stamping requirements, material grade, coating specifications, and target volumes."
          {...register("message", { required: "Requirement details are required" })}
        ></textarea>
        {errors.message && (
          <span className={styles.errorText}>{errors.message.message}</span>
        )}
      </div>

      <div style={{ marginTop: "var(--space-4)" }}>
        <Button variant="primary" type="submit" disabled={loading} style={{ width: "100%" }}>
          {loading ? "Submitting Request..." : "Initiate Technical RFQ"}
        </Button>
      </div>
    </form>
  );
}
