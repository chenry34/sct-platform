import TechnologyHeader from "@/components/TechnologyHeader"

export default function pricing() {
  return (
    <>
      <TechnologyHeader title="Modeling and Screening" page="pricing" technology="modeling-and-screening"></TechnologyHeader>
      <div className="container">
        <div className="row mt-4">
          <div>
            <h5><strong>QuIPS CRISPR-related Services</strong></h5>
            <p className="mt-3">At the QuIPS Platform, we offer a variety of CRISPR related services including:</p>
            <ul>
              <li>sgRNA design</li>
              <li>Cloning of sgRNA vectors (knockout, interference, and activation)</li>
              <li>Cloning of sgRNA Libraries (coming soon)</li>
            </ul>
          </div>
        </div>
        <table align="center" className="mt-3 table table-responsive">
          <thead>
            <tr>
              <th colSpan={2}></th>
              <th>Full Service<br></br>(sgRNA Design + CRISPR Cloning)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={3}>Fee-for-service</td>
              <td>PARI Member<sup>1</sup></td>
              <td>$200 (for 4 distinct sgRNA clones per gene)</td>
            </tr>
            <tr>
              <td>University of Manitoba</td>
              <td>$260 (for 4 distinct sgRNA clones per gene)</td>
            </tr>
            <tr>
              <td>Industry</td>
              <td>Contact us for Pricing</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 mb-0" style={{fontSize: "14px"}}><sup>1</sup>Paul Albrechtsen Research Institute CancerCare Manitoba</p>
        <p className="mt-1 mb-3" style={{fontSize: "14px"}}>*prices are subject to change</p>
        <p className="mt-3">Please contact us for more information about training and how we can help accelerate your research.</p>
      </div>
    </>
  )
}