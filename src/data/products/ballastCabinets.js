export default {
  slug: "ballast-cabinets",
  name: "Ballast Cabinets",
  audience: "Industrial luminaire manufacturers, electrical panel builders, and LED/HID driver OEMs",
  application: "Precision-engineered sheet metal enclosures and driver boxes designed for thermal ventilation, vibration isolation, and electrical shielding of lighting ballasts and power units.",
  specs: [
    { label: "Material", value: "CRCA Mild Steel (1.0 mm to 2.0 mm / 16-20 Gauge)" },
    { label: "Thermal Dissipation", value: "Progressive stamped convective louvers" },
    { label: "Coating Finish", value: "80-micron Epoxy-Polyester Powder (RAL 7035 / RAL 9005)" },
    { label: "Grounding Safety", value: "Integrated M10 welded brass/copper earthing stud" },
  ],
  whatWeAdd: [
    {
      node: "NODE_01",
      title: "LOUVERED HEAT FLOW",
      body: "Precision stamped convective louvers allow continuous heat escape.",
      detail: "Prevents internal thermal throttling and extends electronic ballast MTBF life.",
      statValue: "Convective",
      statLabel: "THERMAL VENTILATION"
    },
    {
      node: "NODE_02",
      title: "EARTH CONTINUITY",
      body: "Welded M10 copper/brass grounding terminal post with star washer.",
      detail: "Guarantees low-resistance electrical fault path complying with safety standards.",
      statValue: "< 0.1 Ohm",
      statLabel: "GROUND CONTINUITY"
    },
    {
      node: "NODE_03",
      title: "SINGLE-ROOF COATING",
      body: "7-tank chemical degreasing & phosphating prior to electrostatic powder spray.",
      detail: "Provides 1,000-hour salt spray resistance in humid commercial environments.",
      statValue: "80+ μm",
      statLabel: "POWDER THICKNESS"
    }
  ],
  specSheetPdf: "/downloads/spec-sheets/ballast-cabinets.pdf"
};
