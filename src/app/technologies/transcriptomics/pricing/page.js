import TechnologyHeader from "@/components/TechnologyHeader"

export default function pricing() {
  return (
    <>
      <TechnologyHeader title="Transcriptomics" page="pricing" technology="transcriptomics"></TechnologyHeader>
      <div className="container">
        <table align="center" className="mt-4 table table-borderless table-responsive">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Chromium X<sup>2,3</sup></th>
              <th>Chromium Connect<sup>2,3</sup></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={4}><strong>Fee-for-service</strong></td>
              <td>PARI Member<sup>1</sup></td>
              <td>$65/run</td>
              <td>$100/run</td>
            </tr>
            <tr>
              <td>University of Manitoba</td>
              <td>$80/run</td>
              <td>$130/run</td>
            </tr>
            <tr>
              <td>Industry</td>
              <td>$130/run</td>
              <td>$200/run</td>
            </tr>
            <tr><td></td><td></td><td></td></tr>
            <tr>
              <td rowSpan={4}><strong>Training</strong></td>
              <td>PARI Member<sup>1</sup></td>
              <td>$55/hour</td>
              <td></td>
            </tr>
            <tr>
              <td>University of Manitoba</td>
              <td>$70/hour</td>
              <td></td>
            </tr>
            <tr>
              <td>Industry</td>
              <td>$110/hour</td>
              <td></td>
            </tr>
            <tr><td></td><td></td><td></td></tr>
            <tr>
              <td rowSpan={4}><strong>User</strong></td>
              <td>PARI Member<sup>1</sup></td>
              <td>$45/run</td>
              <td></td>
            </tr>
            <tr>
              <td>University of Manitoba</td>
              <td>$60/run</td>
              <td></td>
            </tr>
            <tr>
              <td>Industry</td>
              <td>$90/run</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 mb-0" style={{fontSize: "14px"}}><sup>1</sup>Paul Albrechtsen Research Institute CancerCare Manitoba</p>
        <p className="mt-0 mb-0" style={{fontSize: "14px"}}><sup>2</sup>Beginning 30 mins after start of scheduled appointment</p> 
        <p className="mt-0 mb-3" style={{fontSize: "14px"}}><sup>3</sup>Defined as cancellation within 3 hours of scheduled appointment</p>
      </div>
    </>
  )
}