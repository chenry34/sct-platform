import TechnologyHeader from "@/components/TechnologyHeader"

export default function specifications() {
  return (
    <>
      <TechnologyHeader title="IN Carta Image Analysis Software" page="specifications" technology="/highthroughput-imaging/in-carta"></TechnologyHeader>
      <div className="container">
        <h6 className="mt-3"><strong>Examples of Applications/Assays:</strong></h6>
        <ul>
          <li>3D Quantification (Cell-/Patient-derived Organoids; Patient-derived Xenografts)</li>
          <li>Angiogenesis</li>
          <li>Apoptosis (Cleaved Caspase 3)</li>
          <li>Chromosome Instability</li>
          <li>DNA Damage (&gamma;-H2AX; 53BP1)</li>
          <li>Drug Screening</li>
          <li>Fluorescence In Situ Hybridization (FISH)</li>
          <li>Mitotic Index</li>
          <li>Neurite Outgrowth</li>
          <li>Protein Localization/Translocation (Cytosol vs. Nucleus)</li>
          <li>Protein Quantification (Indirect Immunofluorescence)</li>
          <li>Proximity Ligation Assay</li>
          <li>Sizing (Area/Volume)</li>
          <li>Viability (Live/Dead)</li>
        </ul>
      </div>
    </>
  )
}