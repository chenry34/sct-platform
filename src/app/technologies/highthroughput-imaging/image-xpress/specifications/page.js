import TechnologyHeader from "@/components/TechnologyHeader"

export default function specifications() {
  return (
    <>
      <TechnologyHeader title="ImageXpress" page="specifications" technology="/highthroughput-imaging/image-xpress"></TechnologyHeader>
      <div className="container">
        <table className="mt-4 table table-bordered table-responsive">
          <thead>
            <tr>
              <th><strong>8 Imaging Channels</strong></th>
              <th><strong>Excitation Spectra</strong></th>
              <th><strong>Emission Spectra</strong></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{backgroundColor: "#3c46d6", color: "white"}}>DAPI</td>
              <td>405/20nm</td>
              <td>452/45nm</td>
            </tr>
            <tr>
              <td style={{backgroundColor: "#1ae8d3"}}>Cyan Fluorescent Protein (CFP)</td>
              <td>445/20nm</td>
              <td>483/32nm</td>
            </tr>
            <tr>
              <td style={{backgroundColor: "#30e327"}}>Fluorescein isothiocyanate (FITC)</td>
              <td>467.5/21nm</td>
              <td>520/28nm</td>
            </tr>
            <tr>
              <td style={{backgroundColor: "#e2f062"}}>Yellow Fluorescent Protein (YFP)</td>
              <td>520/10nm</td>
              <td>562/40nm</td>
            </tr>
            <tr>
              <td style={{backgroundColor: "#e6702c", color: "white"}}>Tetramethylrhodamine (TRITC)</td>
              <td>555nm</td>
              <td>598/25nm</td>
            </tr>
            <tr>
              <td style={{backgroundColor: "#fa4011", color: "white"}}>Texas Red</td>
              <td>555nm</td>
              <td>624/40nm</td>
            </tr>
            <tr>
              <td style={{backgroundColor: "#820a0a", color: "white"}}>Cyanine-5 (Cy5)</td>
              <td>638/17nm</td>
              <td>692/40nm</td>
            </tr>
            <tr>
              <td style={{backgroundColor: "#4a0404", color: "white"}}>Cyanine-7 (Cy7)</td>
              <td>725/30nm</td>
              <td>794/32nm</td>
            </tr>
          </tbody>
        </table>
        <h6 className="mt-3"><strong>Compatible Slide Formats:</strong></h6>
        <ul>
          {/* <li>Microscopy Slides</li>
          <li>6-well</li> */}
          <li>24-well</li>
          <li>96-well</li>
          <li>384-well</li>
          <li>1536-well</li>
        </ul>
        <h6 className="mt-3"><strong>Objective Lenses:</strong></h6>
        <ul>
          <li>2x Plan Apo Lambda (Installed); Numerical Aperture (NA): 0.10</li>
          <li>10x Plan Apo Lambda (Installed); NA: 0.45</li>
          <li>20x S Plan Fluor; NA: 0.45</li>
          <li>20x Water Immersion CFI Apochromat (Installed); NA: 0.95</li>
          <li>40x CFI Apochromat; NA: 1.15</li>
          <li>60x Water Immersion CFI Plan Apochromat VC (Installed); NA: 1.2</li>
        </ul>
        <h6 className="mt-3"><strong>Plate Combatibility:</strong></h6>
        <ul className="mb-3">
          <li>Contact us to inquire about plate/slide compatibility (type and manufacturer).</li>
        </ul>
        <h6 className="mt-3"><strong>High-Throughput Analyses:</strong></h6>
        <ul className="mb-3">
          <li>Live cell plate reading/imaging is enabled using the PreciseFlex 400 Robotic Arm. Barcoded/non-barcoded plates are placed in the LiCONiC BCX Incubator (holds up to 40 plates) for automated plate reading/imaging.</li>
          <li>Endpoint/Fixed imaging is enabled using the PreciseFlex 400 Robotic Arm. Barcoded/non-barcoded plates are placed in the plate hotels (4 x 20 plates) for automated plate reading/imaging.</li>
        </ul>
      </div>
    </>
  )
}