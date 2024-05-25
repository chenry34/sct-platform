import TechnologyHeader from "@/components/TechnologyHeader"

export default function overview() {
  return (
    <>
      <TechnologyHeader title="Transcriptomics" page="overview" technology="transcriptomics"></TechnologyHeader>
      <div className="container mb-3">
        <div className="row mt-4">
          {/* <div className="col-lg-1"></div> */}
          <div className="col-lg-6 text-center" style={{height: "100%"}}>
            <img src="/ChromiumX.png" className="img-fluid rounded-start" style={{maxWidth: "60%"}}/>
          </div>
          <div className="col-lg-6">
            <p>
              10x Genomics is a life science technology company that provides powerful and reliable tools for analyzing transcriptomic and epigenomic data at single cell resolution. Their integrated solutions include instruments, consumables and software that enable transcriptomic/epigenomic profiling of up to a million single cells with multiomic capabilities to reveal cellular diversity. The instruments function by using barcoded beads and partitioning individual cells into nanoliter-scale Gel Bead-In-Emulsions (GEMs), where each GEM contains a single cell and a unique barcode (<i>see Figure</i>). The resulting libraries are sequenced by end users to generate high-quality data for downstream analysis using a Next Generation Sequencing platform. The Chromium instruments are useful in many scientific applications such as dissecting cell-type differences, detecting novel cell subtypes and biomarkers, and defining gene regulatory interactions.
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6">
            <img src="/Transcriptomics2.png" className="img-fluid rounded-start ms-auto me-auto"/>
            <p style={{fontSize: "12px", textAlign: "center"}}>The partitioning and barcoding of cells using Next GEM Technology (Image provided by 10x Genomics)</p>
          </div>
          <div className="col-lg-6">
            <p>We provide two service options which include:</p>
            <ol>
              <li>Library preparation (fee-for-service)</li>
              <li>Training and end user-performed library preparation</li>
            </ol>
            <p>Next-generation sequencing services are not currently provided; end users must arrange and submit their own samples for sequencing.</p>
            <p>Please contact us for more information about training, sample processing or how we can best assist you in your single cell sequencing library preparation. To ensure the most appropriate assays and kits are selected, we can also connect you with a 10X Genomics representative.</p>
          </div>
        </div>
      </div>
    </>
  )
}