import TechnologyHeader from "@/components/TechnologyHeader"

export default function pricing() {
  return (
    <>
      <TechnologyHeader title="Transcriptomics" page="pricing" technology="transcriptomics"></TechnologyHeader>
      <div className="container">
        <table align="center" className="mt-4 table table-responsive" style={{ "maxWidth": "100vw"}} >
          <thead>
            <tr align="center">
              <th colSpan={4}><h4><strong>Chromium X</strong></h4></th>
            </tr>
            <tr align="center">
              <th colSpan={2}></th>
              <th colSpan={2}>Assay</th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th>Gene Expression</th>
              <th style={{}}>Multiome (ATAC + Gene Expression)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={3}><strong>Fee-for-service</strong></td>
              <td>PARI Member<sup>1</sup></td>
              <td style={{width: "25%"}}>$330 for the first sample and $80 for each additional sample</td>
              <td style={{width: "25%"}}>$485 for the first sample and $110 for each additional sample</td>
            </tr>
            <tr>
              <td>University of Manitoba</td>
              <td>$355 for the first sample and $105 for each additional sample</td>
              <td>$520 for the first sample and $145 for each additional sample</td>
            </tr>
            <tr>
              <td>Industry</td>
              <td>$495 for the first sample and $240 for each additional sample</td>
              <td>$730 for the first sample and $330 for each additional sample</td>
            </tr>
            <tr>
              <td rowSpan={3}><strong>Training</strong></td>
              <td>PARI Member<sup>1</sup></td>
              <td>$60/hour</td>
              <td>$60/hour</td>
            </tr>
            <tr>
              <td>University of Manitoba</td>
              <td>$80/hour</td>
              <td>$80/hour</td>
            </tr>
            <tr>
              <td>Industry</td>
              <td>$180/hour</td>
              <td>$180/hour</td>
            </tr>
            <tr>
              <td rowSpan={3}><strong>User</strong></td>
              <td>PARI Member<sup>1</sup></td>
              <td>$80 per sample</td>
              <td>$110 per sample</td>
            </tr>
            <tr>
              <td>University of Manitoba</td>
              <td>$105 per sample</td>
              <td>$145 per sample</td>
            </tr>
            <tr>
              <td>Industry</td>
              <td>$240 per sample</td>
              <td>$330 per sample</td>
            </tr>
            <tr>
              <td><strong>Late Fee<sup>2</sup></strong></td>
              <td>$100/hour</td>
              <td colSpan={2}></td>
            </tr>
            <tr>
              <td><strong>Cancellation Fee<sup>3</sup></strong></td>
              <td>$55</td>
              <td colSpan={2}></td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 mb-3">Prices include the cost to cover platform-provided-consumables and to cover technician time. It is important to note that the prices do not cover 10x Genomics reagent kits which are required to be purchased separately by users. Additional charges may apply due to special circumstances that may arise during the experiment.</p>
        <p className="mt-0 mb-3">We can provide you with a customized quote based on the number of samples and the type of assay you will perform. </p>
        <p className="mt-3 mb-0" style={{fontSize: "14px"}}><sup>1</sup>Paul Albrechtsen Research Institute CancerCare Manitoba</p>
        <p className="mt-0 mb-0" style={{fontSize: "14px"}}><sup>2</sup>Beginning 30 mins after start of scheduled appointment</p>
        <p className="mt-0 mb-3" style={{fontSize: "14px"}}><sup>3</sup>Defined as cancellation within 3 hours of scheduled appointment</p>
        <p className="mt-0 mb-3" style={{fontSize: "14px"}}>*prices are subject to change</p>
      </div>
    </>
  )
}