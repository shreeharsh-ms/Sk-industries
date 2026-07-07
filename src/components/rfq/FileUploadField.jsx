import React, { useRef, useState } from "react";
import { UploadCloud, X, FileText } from "lucide-react";
import validateFileType from "../../utils/validateFileType";
import styles from "./FileUploadField.module.css";

export default function FileUploadField({ onFilesSelected, selectedFiles = [] }) {
  const fileInputRef = useRef(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const processFiles = (files) => {
    setErrorMsg("");
    const newFilesList = [...selectedFiles];
    let hasInvalidFile = false;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (validateFileType(file.name)) {
        // Prevent duplicates
        if (!newFilesList.some((f) => f.name === file.name)) {
          newFilesList.push(file);
        }
      } else {
        hasInvalidFile = true;
      }
    }

    if (hasInvalidFile) {
      setErrorMsg("Some files were rejected. Only CAD (.step, .dwg) and PDF files are accepted.");
    }

    onFilesSelected(newFilesList);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFiles(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      processFiles(e.target.files);
    }
  };

  const removeFile = (idx) => {
    const newFilesList = [...selectedFiles];
    newFilesList.splice(idx, 1);
    onFilesSelected(newFilesList);
  };

  const triggerInput = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  return (
    <div style={{ width: "100%" }}>
      <label className="styles.label" style={{ fontSize: "var(--font-size-body-sm)", fontWeight: "600", display: "block", marginBottom: "var(--space-2)" }}>
        Upload CAD Drawings (.step, .dwg, .pdf)
      </label>
      <div
        className={`${styles.dropzone} ${isDragActive ? styles.dropzoneActive : ""}`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={triggerInput}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          style={{ display: "none" }}
          onChange={handleFileChange}
          accept=".step,.stp,.dwg,.pdf"
        />
        <UploadCloud className={styles.icon} size={32} />
        <span className={styles.title}>Drag & drop drawing files here</span>
        <span className={styles.subtitle}>or click to select from files</span>
        {errorMsg && <span className={styles.warning}>{errorMsg}</span>}
      </div>

      {selectedFiles.length > 0 && (
        <ul className={styles.fileList}>
          {selectedFiles.map((file, idx) => (
            <li key={idx} className={styles.fileItem}>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                <FileText size={16} style={{ color: "var(--color-steel-300)" }} />
                <span className={styles.fileName}>{file.name}</span>
                <span style={{ fontSize: "0.7rem", color: "var(--color-steel-300)" }}>
                  ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </span>
              </div>
              <button
                type="button"
                className={styles.removeBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(idx);
                }}
              >
                <X size={16} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
