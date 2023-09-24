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
              <td rowSpan={4}><strong>User</strong></td>
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
        <p className="mt-3 mb-3" style={{fontSize: "14px"}}><sup>1</sup>Paul Albrechtsen Research Institute CancerCare Manitoba</p>
      </div>
    </>
  )
}