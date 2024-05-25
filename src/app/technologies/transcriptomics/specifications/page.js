import TechnologyHeader from "@/components/TechnologyHeader"

export default function specifications() {
  return (
    <>
      <TechnologyHeader title="Transcriptomics" page="specifications" technology="transcriptomics"></TechnologyHeader>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-6 text-center" style={{textAlign: "center"}}>
            <img src="/ChromiumX.png" className="img-fluid rounded-start" style={{width: "75%"}}></img>
          </div>
          <div className="col-md-6">
            <p>
            The Chromium X system enables users to perform any 10x Genomics single-cell assay including high-throughput and multiomic assays.  Its Feature Barcode Technology enables sample multiplexing while providing a cost-effective way of performing single-cell sequencing, as multiple samples can be analyzed simultaneously. The Chromium X provides both flexibility and cost-effective single cell analysis solutions for users.
            </p>
            <h6><strong>Compatible Assays:</strong></h6>
            <ul>
              <li>Single Cell Gene Expression (Flex)</li>
              <li>Single Cell Immune Profiling</li>
              <li>Single Cell ATAC1 Sequencing</li>
              <li>Cell Surface Protein Screening</li>
              <li>Single Cell CRISPR Screening</li>
            </ul> 
            <p className="mt-3 mb-3" style={{fontSize: "14px"}}><sup>1</sup>Assay for Transposase-Accessible Chromatin</p>
          </div>
        </div>
      </div>
    </>
  )
}