export default {
  slug: "industrial-powder-coating",
  name: "Industrial Powder Coating",
  audience: "Procurement managers, enclosure designers, and industrial product OEMs",
  application: "Premium electrostatic powder application and heat cure lines executed under a single roof.",
  specs: [
    { label: "Coating Types", value: "Polyester, Epoxy-Polyester, Pure Epoxy" },
    { label: "Film Thickness", value: "80 to 120 microns dry film thickness (DFT)" },
    { label: "Pre-Treatment", value: "Multi-stage pickling, hot-dip zinc phosphating" },
    { label: "Testing Compliance", value: "ASTM B117 salt spray, ASTM D3359 cross-hatch adhesion" },
  ],
  whatWeAdd: [
    {
      node: "NODE_01",
      title: "PRE-TREATMENT",
      body: "Multi-stage chemical washing and zinc phosphating lines.",
      detail: "Creates a microscopic crystalline lock layer that anchors powder coats and halts under-film rust.",
      statValue: "Zinc Phos",
      statLabel: "LOCK LAYER"
    },
    {
      node: "NODE_02",
      title: "SPRAY UNIFORMITY",
      body: "Controlled electrostatic spray booths with automatic gun positioning.",
      detail: "Delivers uniform 80-120 micron thickness, avoiding runs, drips, or paint pooling.",
      statValue: "80-120 μm",
      statLabel: "DFT RANGE"
    },
    {
      node: "NODE_03",
      title: "BAKE CURING",
      body: "Conveyorized convection baking ovens held at 200°C for 20 minutes.",
      detail: "Ensures complete chemical cross-linking for a durable, impact-resistant finish.",
      statValue: "200°C / 20m",
      statLabel: "CURE CYCLE"
    }
  ],
  specSheetPdf: "/downloads/spec-sheets/powder-coating.pdf"
};
