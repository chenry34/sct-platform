export default function home() {
  return ( 
    <>
      <div className="container">
        <div className="card mb-3" style={{marginRight: "10%", marginLeft: "10%", border: "none"}}>
          <div className="d-flex justify-content-center">
            <h1 className="mt-5 mb-3" style={{textAlign: "center"}}>Our Research Platform</h1>
          </div>

          <div className="row">
            <div className="col ms-3 me-3 mb-3" >
              <p>Our platform provides a comprehensive set of services to suit your research needs. We harness and apply leading-edge technologies in cell isolation, single cell sequencing library preparation, high-throughput multiplex imaging, spatial biology and gene editing. Please reach out to us to learn more about how we can assist you in enabling, optimizing, accelerating your research projects.</p>
            </div>
          </div>
        </div>

        <div className="row mt-3 mb-5">
          <div className="d-flex justify-content-center pt-3 pb-3">
            <hr style={{marginTop: "2.5em"}}></hr>
            <div className="bg-light d-flex justify-content-center pt-3 pb-3" style={{width: "20em", position:"absolute", opacity: "1.0"}}><h1>The Team</h1></div>
          </div>
        </div>
      </div>

      <div className="container mb-3">
        <div className="row m-0">
          <div className="col-sm-6 m-0 p-0 d-flex align-items-stretch">
            <div className="card m-0" style={{width: "100%", border: "none"}}>
              <img src="/BD-FACSMelody.png" className="img-fluid"></img>
              <div className="card-body">
                <div className="row">
                  <div className='col-sm-12 d-flex justify-content-center'>
                    <h3 class="card-title">Arshani Alukumbura</h3>
                  </div>
                </div>
                <div className="row">
                  <div className='col-sm-12 d-flex justify-content-center'>
                    <h6 class="card-title">QuIPS Platform Technician</h6>
                  </div>
                </div>
                <div className="row">
                  <div className='mt-4 ms-3 me-3 col-sm-12 d-flex justify-content-center'>
                    <p class="card-text me-3">Arshani specializes in cell sorting and single-cell sequencing library preparation techniques. She received her MSc in Plant Science from the University of Manitoba, where she studied about plant microbiome diversity and genetic interactions of plants and plant pathogens. Before joining QuIPS, Arshani worked as a Research Technician at the University of Manitoba and involved in transcriptomics, proteomics and plant tissue culture research projects. Currently, Arshani uses her expertise to assist researchers in advancing their projects through training and assistance primarily on BD FACS Melody, ChromiumX and Chromium Connect instruments. ​</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-0 p-0 d-flex align-items-stretch">
            <div className="card m-0" style={{width: "100%", border: "none"}}>
              <img src="/BD-FACSMelody.png" className="img-fluid"></img>
              <div className="card-body" style={{alignItems: "center"}}>
                <div className="row">
                  <div className='col-sm-12 d-flex justify-content-center'>
                    <h3 class="card-title">Nicole Neudorf</h3>
                  </div>
                </div>
                <div className="row">
                  <div className='col-sm-12 d-flex justify-content-center'>
                    <h6 class="card-title">QuIPS Platform Technician</h6>
                  </div>
                </div>
                <div className="row">
                  <div className='mt-4 ms-3 me-3 col-sm-12 d-flex justify-content-center'>
                    <p className="card-text me-3">Nicole specializes in quantitative imaging microscopy techniques that enable high-throughput and multiplexed imaging and novel discoveries in spatial biology. Before joining QuIPS, Nicole earned her MSc in Biochemistry and Medical Genetics at the University of Manitoba, where she employed quantitative imaging microscopy approaches to study genetic drivers of chromosome instability in cancer. Since joining QuIPS, Nicole has used her experience in quantitative imaging microscopy to enable other researchers to gain novel insight of their disease of interest at the single-cell level using the ImageXpress HT.ai and PhenoCycler-Fusion.​</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}