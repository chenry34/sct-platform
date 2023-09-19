import TechnologyHeader from "@/components/TechnologyHeader"

export default function pricing() {
  return (
    <>
      <TechnologyHeader title="Spatial Biology" page="pricing" technology="spatial-biology"></TechnologyHeader>
      <div className="container">
        <h4 className="mt-4"><u>PhenoImager Fusion:</u></h4>
        <table align="center" className="mt-4 table table-responsive">
          <tbody>
            <tr>
              <td width="33%" rowSpan={3}><strong>Fee-for-service</strong></td>
              <td width="33%">PARI Member<sup>1</sup></td>
              <td width="33%">$25/hour</td>
            </tr>
            <tr>
              <td>University of Manitoba</td>
              <td>$33/hour</td>
            </tr>
            <tr>
              <td>Industry</td>
              <td>$50/hour</td>
            </tr>
            <tr>
              <td rowSpan={3}><strong>Training</strong></td>
              <td>PARI Member<sup>1</sup></td>
              <td>$30/hour</td>
            </tr>
            <tr>
              <td>University of Manitoba</td>
              <td>$40/hour</td>
            </tr>
            <tr>
              <td>Industry</td>
              <td>$60/hour</td>
            </tr>
            <tr>
              <td rowSpan={3}><strong>User</strong></td>
              <td>PARI Member<sup>1</sup></td>
              <td>$15/hour</td>
            </tr>
            <tr>
              <td>University of Manitoba</td>
              <td>$20/hour</td>
            </tr>
            <tr>
              <td>Industry</td>
              <td>$30/hour</td>
            </tr>
          </tbody>
        </table>
        <h4 className="mt-3"><u>PhenoCycler-Fusion:</u></h4>
        <table align="center" className="mt-4 table table-responsive">
          <tbody>
            <tr>
              <td width="33%" rowSpan={3}><strong>Fee-for-service</strong></td>
              <td width="33%">PARI Member<sup>1</sup></td>
              <td width="33%">$150/experiment</td>
            </tr>
            <tr>
              <td>University of Manitoba</td>
              <td>$200/experiment</td>
            </tr>
            <tr>
              <td>Industry</td>
              <td>$300/experiment</td>
            </tr>
            <tr>
              <td rowSpan={3}><strong>Training</strong></td>
              <td>PARI Member<sup>1</sup></td>
              <td>$30/hour</td>
            </tr>
            <tr>
              <td>University of Manitoba</td>
              <td>$40/hour</td>
            </tr>
            <tr>
              <td>Industry</td>
              <td>$60/hour</td>
            </tr>
            <tr>
              <td rowSpan={3}><strong>User</strong></td>
              <td>PARI Member<sup>1</sup></td>
              <td>$30/cycle</td>
            </tr>
            <tr>
              <td>University of Manitoba</td>
              <td>$40/cycle</td>
            </tr>
            <tr>
              <td>Industry</td>
              <td>$60/cycle</td>
            </tr>
            <tr>
              <td><strong>Late Fee<sup>2</sup></strong></td>
              <td>$55</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 mb-0" style={{fontSize: "14px"}}><sup>1</sup>Paul Albrechtsen Research Institute CancerCare Manitoba</p>
        <p className="mt-0 mb-3" style={{fontSize: "14px"}}><sup>2</sup>Defined as cancellation within 3 hours of appointment</p> 
      </div>
    </>
  )
}