import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, X, Mail, MessageCircle } from "lucide-react";
import Button from "../ui/Button";
import styles from "./RFQForm.module.css";

export default function RFQForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
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

  const handleResetForm = () => {
    reset({
      fullName: "",
      email: "",
      companyName: "",
      phone: "",
      message: "",
    });
    setIsSubmitted(false);
    setShowPopup(false);
    setSubmittedData(null);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    setSubmittedData(data);

    // 1. Dispatch form payload to SK Industries inbox via FormSubmit AJAX
    try {
      await fetch("https://formsubmit.co/ajax/skindustries0709@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Technical RFQ: ${data.companyName} - ${data.fullName}`,
          _template: "table",
          "Client Name": data.fullName,
          "Business Email": data.email,
          "Company Name": data.companyName,
          "Phone Number": data.phone,
          "Specifications & Requirement Details": data.message,
        }),
      }).catch((err) => {
        console.warn("Background email notification error:", err);
      });
    } catch (err) {
      console.warn("Submission error:", err);
    }

    // 2. Trigger mailto so user's email client prepares the RFQ to skindustries0709@gmail.com
    const mailSubject = encodeURIComponent(`Technical RFQ: ${data.companyName} - ${data.fullName}`);
    const mailBody = encodeURIComponent(
      `New Technical RFQ Sourcing Request\n\n` +
      `Client Name: ${data.fullName}\n` +
      `Business Email: ${data.email}\n` +
      `Company: ${data.companyName}\n` +
      `Phone: ${data.phone}\n\n` +
      `Specifications & Requirement Details:\n${data.message}\n\n` +
      `Sent via SK Industries RFQ Portal`
    );
    const mailtoUrl = `mailto:skindustries0709@gmail.com?subject=${mailSubject}&body=${mailBody}`;

    // Safely trigger mailto
    const mailLink = document.createElement("a");
    mailLink.href = mailtoUrl;
    mailLink.style.display = "none";
    document.body.appendChild(mailLink);
    mailLink.click();
    document.body.removeChild(mailLink);

    setLoading(false);
    setIsSubmitted(true);
    setShowPopup(true);
  };

  if (isSubmitted) {
    return (
      <div className={styles.successScreen}>
        <CheckCircle className={styles.successIcon} size={64} style={{ color: "#0d8253" }} />
        <h2 className={styles.successTitle}>Request Submitted</h2>
        <p className={styles.successDesc}>
          An engineering manager will review your submission and email a technical pricing quotation to <strong>{submittedData?.email || "your email"}</strong> within 24 hours of submission.
        </p>
        <Button variant="primary" onClick={handleResetForm}>
          Submit Another Request
        </Button>

        {/* Modal Popup Notification */}
        {showPopup && (
          <div className={styles.modalBackdrop} onClick={() => setShowPopup(false)}>
            <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
              <button
                className={styles.modalCloseBtn}
                onClick={() => setShowPopup(false)}
                title="Close"
              >
                <X size={18} />
              </button>
              <CheckCircle className={styles.popupIcon} size={54} />
              <h3 className={styles.popupTitle}>Technical RFQ Sent</h3>
              <p className={styles.popupDesc}>
                Your RFQ has been sent to SK Industries engineering team at <strong>skindustries0709@gmail.com</strong>. An engineering manager will review your specifications and reply within 24 hours.
              </p>

              {submittedData && (
                <div className={styles.summaryBox}>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Client:</span>
                    <span className={styles.summaryValue}>{submittedData.fullName}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Company:</span>
                    <span className={styles.summaryValue}>{submittedData.companyName}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Email:</span>
                    <span className={styles.summaryValue}>{submittedData.email}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Phone:</span>
                    <span className={styles.summaryValue}>{submittedData.phone}</span>
                  </div>
                </div>
              )}

              <div className={styles.popupActions}>
                <Button variant="primary" onClick={handleResetForm} style={{ width: "100%" }}>
                  Submit Another Request
                </Button>
                <div className={styles.secondaryActions}>
                  <a
                    href={`mailto:skindustries0709@gmail.com?subject=Technical%20RFQ%20-%20${encodeURIComponent(submittedData?.companyName || "")}&body=${encodeURIComponent(submittedData?.message || "")}`}
                    className={styles.secondaryBtn}
                  >
                    <Mail size={15} />
                    <span>Open Mail App</span>
                  </a>
                  <a
                    href={`https://wa.me/917875138713?text=${encodeURIComponent(`*New Technical RFQ Sourcing Request*\n\n*Client Name:* ${submittedData?.fullName || ""}\n*Company:* ${submittedData?.companyName || ""}\n*Email:* ${submittedData?.email || ""}\n*Phone:* ${submittedData?.phone || ""}\n\n*Requirements:*\n${submittedData?.message || ""}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryBtn}
                  >
                    <MessageCircle size={15} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
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
