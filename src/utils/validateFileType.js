const ACCEPTED_EXTENSIONS = [".step", ".stp", ".dwg", ".pdf"];

export default function validateFileType(fileName) {
  if (!fileName) return false;
  const nameLower = fileName.toLowerCase();
  return ACCEPTED_EXTENSIONS.some((ext) => nameLower.endsWith(ext));
}
