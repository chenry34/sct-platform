import TechnologyHeader from "@/components/TechnologyHeader"

export default function specifications() {
  return (
    <>
      <TechnologyHeader title="SpectraMax® iD3 Multi-Mode Microplate Reader" page="specifications" technology="/imaging/highthroughput-imaging/spectramax"></TechnologyHeader>
      <div className="container">
        <h6 className="mt-3"><strong>Imaging Modalities:</strong></h6>
        <ul>
          <li>Absorbance: 230-1000nm</li>
          <li>Fluorescent Imaging: Excitation: 250-830nm; Emission 270-850nm</li>
          <li>Luminescence: 300-850nm</li>
        </ul>
        <h6 className="mt-3"><strong>Temperature Control:</strong></h6>
        <ul>
          <li>Ranging from ambient to 66ºC</li>
        </ul>
        <h6 className="mt-3"><strong>Compatible Plate Types:</strong></h6>
        <ul>
          <li>6-well</li>
          <li>24-well</li>
          <li>96-well</li>
          <li>384-well</li>
        </ul>
        <h6 className="mt-3"><strong>Examples of Applications/Assays:</strong></h6>
        <ul>
          <li>Apoptosis</li>
          <li>Cell Signaling</li>
          <li>Cell Viability</li>
          <li>Cytotoxicity</li>
          <li>ELISA</li>
          <li>Proliferation</li>
          <li>Protein Quantification</li>
          <li>Reactive Oxygen Species (Presence)</li>
          <li>Substrate Metabolism</li>
        </ul>
      </div>
    </>
  )
}