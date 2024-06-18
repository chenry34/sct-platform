import TechnologyHeader from "@/components/TechnologyHeader"

export default function specifications() {
  return (
    <>
      <TechnologyHeader title="Modeling and Screening" page="specifications" technology="modeling-and-screening"></TechnologyHeader>
      <div className="container mt-4 mb-4">
        <div className="row">
          <p style={{overflow: "hidden", fontSize: "18px"}}>
            In general, there are 3 distinct, yet complementary CRISPR technologies that enable distinct opportunities and applications in disease modelling:
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">CRISPR Knockout</h5>
                <p className="card-text mt-4">By inactivating specific genes, researchers can study the effects of gene loss, which is critical to model diseases arising from gene deletions or loss-of-function alterations. This method is less suited to long-term studies of essential genes as knocking out essential genes can prove lethal to the cell.</p>
              </div>
              <img src="/crispr-knockout.jpg" className="img-fluid rounded-start card-image-bottom m-3" />
            </div>
          </div>
          <div className="col-lg-6 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">CRISPR Interference (CRISPRi)</h5>
                <p className="card-text mt-4">Transiently reduces or knocks-down gene expression enabling researchers to study diseases caused by reduced gene function. This is accomplished by using a catalytically inactivated dead Cas9 to a transcriptional effector such as the repressive KRAB domain which leads to a downregulation of gene expression via transcriptional repression. Unlike traditional CRISPR knockout, this method is suitable for studying essential genes as the effects are only temporary.</p>
              </div>
              <img src="/crispr-i.jpg" className="img-fluid rounded-start card-image-bottom m-3" />
            </div>
          </div>
          <div className="col-lg-6 mb-3">
            <div className="card mt-3 h-100">
              <div className="card-body">
                <h5 className="card-title">CRISPR Activation (CRISPRa)</h5>
                <p className="card-text mt-4">Enhances gene expression by employing programmable transcription activators that recruit RNA Polymerase and other important co-factors, allowing researchers to study diseases caused by gene overexpression or gain-of-function mutations. When dCas9 is fused to a single or several transcriptional activation domains (e.g., MS2, MPH, SAM etc.), it leads to the increased expression of the desired gene product.</p>
              </div>
              <img src="/crispr-a.jpg" className="img-fluid rounded-start card-image-bottom m-3" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}