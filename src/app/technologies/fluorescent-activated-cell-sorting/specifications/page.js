import TechnologyHeader from "@/components/TechnologyHeader"

export default function specifications() {
  return (
    <>
      <TechnologyHeader title="Fluorescent Activated Cell Sorting" page="specifications" technology="fluorescent-activated-cell-sorting"></TechnologyHeader>
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
      </div>
    </>
  )
}