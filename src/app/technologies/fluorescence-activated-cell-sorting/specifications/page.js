import TechnologyHeader from "@/components/TechnologyHeader"

export default function specifications() {
  return (
    <>
      <TechnologyHeader title="Fluorescence Activated Cell Sorting" page="specifications" technology="fluorescence-activated-cell-sorting"></TechnologyHeader>
      <div className="container">
        <table className="mt-4 table table-bordered table-responsive">
          <thead>
            <tr>
              <th>Laser</th>
              <th>Compatible Dyes/Fluorescent Proteins</th>
              <th>Filters</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={2} style={{backgroundColor: "#8200c8", color: "white"}}><strong>405 nm</strong></td>
              <td>Pacific Blue™, DAPI</td>
              <td>Not Applicable</td>
            </tr>
            <tr>
              <td>AmCyan, CFP</td>
              <td>528/45</td>
            </tr>
            <tr>
              <td rowSpan={2} style={{backgroundColor: "#00f7ff"}}><strong>488 nm</strong></td>
              <td>FITC, GFP</td>
              <td>527/32</td>
            </tr>
            <tr>
              <td>PerCP, PerCP-Cy5.5</td>
              <td>700/54</td>
            </tr>
            <tr>
              <td rowSpan={4} style={{backgroundColor: "#c6ff00"}}><strong>561 nm</strong></td>
              <td>PE, DsRed</td>
              <td>582/15</td>
            </tr>
            <tr>
              <td>mCherry, PE-Texas Red®</td>
              <td>613/18</td>
            </tr>
            <tr>
              <td>PE-Cy5, PE-Cy5.5</td>
              <td>697/58</td>
            </tr>
            <tr>
              <td>PE-Cy7</td>
              <td>783/56</td>
            </tr>
          </tbody>
        </table>
        <h6 className="mt-3"><strong>Collection:</strong></h6>
        <ul>
          <li>4-way sorting: 1.5-, 2.0-, and 5.0-mL tubes</li>
          <li>2-way sorting: 1.5-, 2.0-, and 5.0-mL tubes</li>
          <li>1-way sorting: 6-, 24-, 48-, 96- and 384-well plates, 96-well PCR, microscope slides</li>
        </ul>
        <h6 className="mt-3"><strong>Temperature control:</strong></h6>
        <ul>
          <li>4°C, 22°C, 37°C and 42°C or room temperature</li>
        </ul>
        <h6 className="mt-3"><strong>Index Sorting:</strong></h6>
        <ul className="mb-3">
          <li>Sorted events with well location can be corelated with flow cytometry parameters. Available as an optional feature during multi-well plate/microscope slide-based sorting.</li>
        </ul>
      </div>
    </>
  )
}