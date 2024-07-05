import TechnologyHeader from "@/components/TechnologyHeader"

export default function specifications() {
  return (
    <>
      <TechnologyHeader title="Axio Imager" page="specifications" technology="/imaging/axio-imager"></TechnologyHeader>
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
              <td>Transmitted Light</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td style={{backgroundColor: "#3c46d6", color: "white"}}>DAPI</td>
              <td>385/30nm</td>
              <td>425/30nm</td>
            </tr>
            <tr>
              <td style={{backgroundColor: "#0070c0"}}>Blue Fluorescent Protein (BFP)</td>
              <td>390/40nm</td>
              <td>450/40nm</td>
            </tr>
            <tr>
              <td style={{backgroundColor: "#1ae8d3"}}>Cyan Fluorescent Protein (CFP)</td>
              <td>436/20nm</td>
              <td>480/40nm</td>
            </tr>
            <tr>
              <td style={{backgroundColor: "#30e327"}}>Fluorescein isothiocyanate (FITC)</td>
              <td>470/40nm</td>
              <td>525/50nm</td>
            </tr>
            <tr>
              <td style={{backgroundColor: "#e6702c"}}>Cyanine-3; TRITC</td>
              <td>550/25nm</td>
              <td>570/25nm</td>
            </tr>
            <tr>
              <td style={{backgroundColor: "#fa4011", color: "white"}}>Red Fluorescent Protein (RFP)</td>
              <td>555/30nm</td>
              <td>592/25nm</td>
            </tr>
            <tr>
              <td style={{backgroundColor: "#820a0a", color: "white"}}>Cyanine-5 (Cy5)</td>
              <td>631/33nm</td>
              <td>681/45nm</td>
            </tr>
            <tr>
              <td style={{backgroundColor: "#4a0404", color: "white"}}>Cyanine-7 (Cy7)</td>
              <td>735/40nm</td>
              <td>785/38nm</td>
            </tr>
          </tbody>
        </table>
        <h6 className="mt-3"><strong>Objective Lenses:</strong></h6>
        <ul>
          <li>2.5x EC Plan-NEOFLUAR; Numerical Aperture (NA): 0.085</li>
          <li>10x Objective Plan Apo Lambda; NA: 0.45</li>
          <li>20x Objective Plan-Apochromat; NA: 0.8</li>
          <li>40x Oil Plan-Apochromat; NA: 1.3</li>
          <li>63x Oil Plan Apochromat; NA: 1.4</li>
        </ul>
      </div>
    </>
  )
}