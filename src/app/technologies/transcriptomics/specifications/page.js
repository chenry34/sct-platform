import TechnologyHeader from "@/components/TechnologyHeader"

export default function specifications() {
  return (
    <>
      <TechnologyHeader title="Transcriptomics" page="specifications" technology="transcriptomics"></TechnologyHeader>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-6 text-center" style={{textAlign: "center"}}>
            <h6><strong>Chromium X</strong></h6>
            <img src="/ChromiumX.png" className="img-fluid rounded-start" style={{width: "65%"}}></img>
            <p>
            The Chromium X system enables users to perform any 10x Genomics single-cell assay including high-throughput and multiomic assays.  Its Feature Barcode Technology enables sample multiplexing while providing a cost-effective way of performing single-cell sequencing, as multiple samples can be analyzed simultaneously. The Chromium X provides both flexibility and cost-effective single cell analysis solutions for users.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <h6><strong>Chromium Connect</strong></h6>
            <img src="/ChromiumConnect.png" className="img-fluid rounded-start" style={{width: "80%"}}></img>
            <p>
            The Chromium Connect is a fully automated system with walk-away convenience and performs single-cell gene expression and immune profiling workflows with ease. It offers automated library construction starting from cDNA (manually generated through Chromium X) using a modular workflow. Thus, the Connect maximizes productivity and throughput, while ensuring consistent and reproducible results.  
            </p>
          </div>
        </div>
      </div>
    </>
  )
}