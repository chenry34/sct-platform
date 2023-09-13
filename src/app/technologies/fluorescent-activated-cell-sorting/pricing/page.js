import TechnologyHeader from "@/components/TechnologyHeader"

export default function pricing() {
  return (
    <>
      <TechnologyHeader title="Fluorescence Activated Cell Sorting" page="pricing" technology="fluorescent-activated-cell-sorting"></TechnologyHeader>
      <div className="container">
      <table align="center" className="mt-4 table table-responsive">
          <thead>
            <tr>
              <th></th>
              <th>First 40 hours</th>
              <th>After 40 hours</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PARI Member<sup>1</sup></td>
              <td>$50/hour</td>
              <td>$30/hour</td>
            </tr>
            <tr>
              <td>University of Manitoba</td>
              <td>$70/hour</td>
              <td>$40/hour</td>
            </tr>
            <tr>
              <td>Industry</td>
              <td>$150/hour</td>
              <td>$150/hour</td>
            </tr>
            <tr>
              <td>Late Fee<sup>2</sup></td>
              <td>$55/hour</td>
              <td></td>
            </tr>
            <tr>
              <td>Cancellation Fee<sup>3</sup></td>
              <td>$55</td>
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