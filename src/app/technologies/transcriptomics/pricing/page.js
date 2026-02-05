import TechnologyHeader from "@/components/TechnologyHeader"

export default function pricing() {
  return (
    <>
      <TechnologyHeader title="Transcriptomics" page="pricing" technology="transcriptomics"></TechnologyHeader>
      <div className="container">
        <div className="table-responsive">
          <table align="center" className="mt-4 table" >
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
                <td rowSpan={3}><strong>Fee-for-service</strong><br /> (4 samples per experiment)</td>
                <td>PARI Member<sup>1</sup></td>
                <td style={{width: "25%"}}>$470 for technician time and $80 per sample</td>
                <td style={{width: "25%"}}>$660 for technician time and $130 per sample</td>
              </tr>
              <tr>
                <td>University of Manitoba</td>
                <td>$610 for technician time and $105 per sample</td>
                <td>$860 for technician time and $170 per sample</td>
              </tr>
              <tr>
                <td>Industry</td>
                <td>$1410 for technician time and $240 per sample</td>
                <td>$1980 for technician time and $390 per sample</td>
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
                <td>$130 per sample</td>
              </tr>
              <tr>
                <td>University of Manitoba</td>
                <td>$105 per sample</td>
                <td>$170 per sample</td>
              </tr>
              <tr>
                <td>Industry</td>
                <td>$240 per sample</td>
                <td>$390 per sample</td>
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
        </div>
        <p className="mt-3 mb-3">To ensure efficient and equitable use of QuIPS Platform resources and promote experimental success, equipment and instrument bookings will only be accepted once all required reagents have been received by the end-user. For large-scale projects, users are strongly encouraged to perform a pilot study, as bookings for subsequent large-scale work can only proceed after pilot data have been collected, analyzed, and reviewed. This policy helps validate experimental workflows, minimize cancellations, and enhance data quality, ensuring fair access and reliable outcomes for all Platform users.</p>
        <p className="mt-3 mb-3">Prices include the cost to cover platform-provided-consumables and to cover technician time. It is important to note that the prices do not cover 10x Genomics reagent kits which are required to be purchased separately by users. Additional charges may apply due to special circumstances that may arise during the experiment.</p>
        <p className="mt-0 mb-3">We can provide you with a customized quote based on the number of samples and the type of assay you will perform. </p>
        <p className="mt-3 mb-0" style={{fontSize: "14px"}}><sup>1</sup>Paul Albrechtsen Research Institute CancerCare Manitoba</p>
        <p className="mt-0 mb-0" style={{fontSize: "14px"}}><sup>2</sup>Beginning 30 mins after start of scheduled appointment</p>
        <p className="mt-0 mb-3" style={{fontSize: "14px"}}><sup>3</sup>Defined as cancellation within 24 hours of scheduled appointment</p>
        <p className="mt-0 mb-3" style={{fontSize: "14px"}}>*prices are subject to change</p>
      </div>
    </>
  )
}