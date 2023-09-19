import TechnologyHeader from "@/components/TechnologyHeader"

export default function specifications() {
  return (
    <>
      <TechnologyHeader title="Spatial Biology" page="specifications" technology="spatial-biology"></TechnologyHeader>
      <div className="container">
        <table className="mt-4 table table-bordered table-responsive">
          <thead>
            <tr>
              <th><strong>Fluorescent Imaging Channels</strong></th>
              <th><strong>Compatible Alexa Dye</strong></th>
              <th><strong>Compatible Cyanine Dye</strong></th>
              <th><strong>Compatible Other Dye</strong></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{backgroundColor: "#3c46d6", color: "white"}}>DAPI</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td style={{backgroundColor: "#1ae8d3", color: "white"}}>Opal 480</td>
              <td>AF405</td>
              <td></td>
              <td>Coumarin 6</td>
            </tr>
            <tr>
              <td style={{backgroundColor: "#30e327", color: "white"}}>Opal 520</td>
              <td>AF488</td>
              <td>Cy2</td>
              <td>FITC</td>
            </tr>
            <tr>
              <td style={{backgroundColor: "#e6702c", color: "white"}}>Opal 570</td>
              <td>AF555</td>
              <td>Cy3</td>
              <td>TRITC</td>
            </tr>
            <tr>
              <td style={{backgroundColor: "#fa4011", color: "white"}}>Opal 620</td>
              <td>AF594</td>
              <td>Cy3.5</td>
              <td>Texas Red</td>
            </tr>
            <tr>
              <td style={{backgroundColor: "#820a0a", color: "white"}}>Opal 690</td>
              <td>AF660</td>
              <td>Cy5.5</td>
              <td></td>
            </tr>
            <tr>
              <td style={{backgroundColor: "#4a0404", color: "white"}}>Opal 780</td>
              <td>AF750</td>
              <td>Cy7</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <h6 className="mt-3"><strong>Compatible Slide Formats:</strong></h6>
        <p>Contact us to inquire about slide compatibility (type and manufacturer). </p>
        <h6 className="mt-3"><strong>Objective Lenses:</strong></h6>
        <ul>
          <li>{"4x Plan Apo Lambda (air)"}</li>
          <li>{"10x Plan Apo Lambda (air)"}</li>
          <li>{"20x Plan Apo Lambda (air)"}</li>
          <li>{"40x Plan Apo Lambda (air)"}</li>
        </ul>
        <h6 className="mt-3"><strong>Imaging Modes:</strong></h6>
        <ul className="mb-3">
          <li>Brightfield</li>
          <li>Fluorescence</li>
        </ul>
        <h6 className="mt-3"><strong>Sample Types:</strong></h6>
        <ul className="mb-3">
          <li>Formalin-Fixed Paraffin Embedded: Human</li>
          <li>Fresh-frozen: Human & Mouse</li>
          <li>Tissue MicroArrays: Human</li>
        </ul>
      </div>
    </>
  )
}