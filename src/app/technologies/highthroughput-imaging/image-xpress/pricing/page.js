import TechnologyHeader from "@/components/TechnologyHeader"

export default function pricing() {
  return (
    <>
    <TechnologyHeader title="ImageXpress" page="pricing" technology="/highthroughput-imaging/image-xpress"></TechnologyHeader>
      <div className="container">
        <table align="center" className="mt-4 table table-responsive">
          <tbody>
            <tr>
              <td rowSpan={3}><strong>Fee-for-service</strong></td>
              <td>PARI Member<sup>1</sup></td>
              <td>$25/hour</td>
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
            <tr>
              <td><strong>Late Fee<sup>2</sup></strong></td>
              <td>$55/hour</td>
              <td></td>
            </tr>
            <tr>
              <td><strong>Cancellation Fee<sup>3</sup></strong></td>
              <td>$55</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 mb-0" style={{fontSize: "14px"}}><sup>1</sup>Paul Albrechtsen Research Institute CancerCare Manitoba</p>
        <p className="mt-0 mb-0" style={{fontSize: "14px"}}><sup>2</sup>Beginning 30 mins after start of scheduled appointment</p> 
        <p className="mt-0 mb-3" style={{fontSize: "14px"}}><sup>3</sup>Defined as cancellation within 3 hours of scheduled appointment</p>
        <p className="mt-0 mb-3" style={{fontSize: "14px"}}>*prices are subject to change</p>
      </div>
    </>
  )
}