export default function home() {
  return ( 
    <>
      <div className="bg-light" style={{backgroundImage: `url('/about-background2.png')`, backgroundRepeat: "no-repeat", backgroundSize: "contain"}}>
        <div className="container mt-5">
          <div className="card mb-3 bg-light" style={{marginRight: "5%", marginLeft: "5%", border: "none"}}>
            <div className="d-flex justify-content-center">
              <h1 className="mt-3 mb-3 mx-3" style={{textAlign: "center"}}>Our Research Platform</h1>
            </div>

            <div className="row">
              <div className="col ms-4 me-4 mb-3" >
                <p>Our platform provides a comprehensive set of services to suit your research needs. We harness and apply leading-edge technologies in cell isolation, single cell sequencing library preparation, high-throughput multiplex imaging, spatial biology and gene editing. Please reach out to us to learn more about how we can assist you in enabling, optimizing, accelerating your research.</p>
              </div>
            </div>
          </div>

          <div className="row mt-5 mb-5">
            <div className="d-flex justify-content-center pt-3 pb-3">
              <hr style={{marginTop: "2.5em"}}></hr>
              <div className=" d-flex justify-content-center pt-3 pb-3" style={{backgroundColor: "#d1d9d3",width: "20em", position:"absolute", opacity: "1.0"}}><h1>The Team</h1></div>
            </div>
          </div>
        </div>
        <div>
          <div className="container mb-3">
            <div className="row m-0">
              <div className="col-lg-4 m-0 p-0 d-flex text-center">
                <div className="card m-0" style={{border: "none", backgroundColor: "#d1d9d3", borderRadius: "0px"}}>
                  <img src="/thumbnail_Kirk_McManus.jpg" className="img-fluid"></img>
                  <div className="card-body" style={{alignItems: "center"}}>
                    <div className="row mt-3">
                      <div className='col-sm-12 d-flex justify-content-center'>
                        <h3 className="card-title">Dr. Kirk McManus</h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className='col-sm-12 d-flex justify-content-center'>
                        <h6 className="card-title">Director</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className='mt-4 ms-3 me-3 col-sm-12 d-flex justify-content-center'>
                        <p className="card-text me-3">Dr. McManus is a Senior Scientist at the Paul Albrechtsen Research Institute CCMB and a Professor in the Department of Biochemistry and Medical Genetics at the University of Manitoba. He received his Ph.D. in Oncology from the Cross Cancer Institute, University of Alberta and got his post-doctoral training from the University of British Columbia. Dr. McManus’s research focus is on identifying and characterizing genes that regulate chromosome stability in a cancer context and exploiting these characteristics to identify novel therapeutic targets.  Dr. McManus is passionate about advancing our understanding of disease development and progression by characterizing disease phenotypes at the single-cell level and was instrumental in developing and launching the QuIPS platform.</p>
                        </div>
                    </div>
                    <div className="row">
                      <div className='mt-4 ms-3 me-3 pb-3 col-sm-12 d-flex justify-content-center'>
                        <p className="card-text me-3">kirk.mcmanus@umanitoba.ca​</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 m-0 p-0 d-flex align-items-stretch" style={{backgroundColor: "#d1d9d3"}}>
                <div className="card m-0" style={{width: "100%", border: "none", backgroundColor: "#d1d9d3", borderRadius: "0px"}}>
                  <img src="/thumbnail_Arshani_Alukumbura.jpg" className="img-fluid"></img>
                  <div className="card-body">
                    <div className="row mt-3">
                      <div className='col-sm-12 d-flex justify-content-center'>
                        <h3 className="card-title">Arshani Alukumbura</h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className='col-sm-12 d-flex justify-content-center'>
                        <h6 className="card-title">QuIPS Platform Technician</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className='mt-4 ms-3 me-3 col-sm-12 d-flex justify-content-center'>
                        <p className="card-text me-3">Arshani specializes in cell sorting and single-cell sequencing library preparation techniques. She received her MSc in Plant Science from the University of Manitoba, where she studied about plant microbiome diversity and genetic interactions of plants and plant pathogens. Before joining QuIPS, Arshani worked as a Research Technician at the University of Manitoba and involved in transcriptomics, proteomics and plant tissue culture research projects. Currently, Arshani uses her expertise to assist researchers in advancing their projects through training and assistance primarily on BD FACS Melody, ChromiumX and Chromium Connect instruments. ​</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className='mt-4 ms-3 me-3 col-sm-12 d-flex justify-content-center'>
                        <p className="card-text me-3">To enquire about the FACSMelody, Chromium X or Chromium Connect, please contact Arshani​.</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className='mt-4 ms-3 me-3 pb-3 col-sm-12 d-flex justify-content-center'>
                        <p className="card-text me-3">arshani.alukumbura@umanitoba.ca​</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 m-0 p-0 d-flex align-items-stretch">
                <div className="card m-0" style={{width: "100%", border: "none", backgroundColor: "#d1d9d3", borderRadius: "0px"}}>
                  <img src="/thumbnail_Nicole_Neudorf.jpg" className="img-fluid"></img>
                  <div className="card-body" style={{alignItems: "center"}}>
                    <div className="row mt-3">
                      <div className='col-sm-12 d-flex justify-content-center'>
                        <h3 className="card-title">Nicole Neudorf</h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className='col-sm-12 d-flex justify-content-center'>
                        <h6 className="card-title">QuIPS Platform Technician</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className='mt-4 ms-3 me-3 col-sm-12 d-flex justify-content-center'>
                        <p className="card-text me-3">Nicole specializes in quantitative imaging microscopy techniques that enable high-throughput and multiplexed imaging and novel discoveries in spatial biology. Before joining QuIPS, Nicole earned her MSc in Biochemistry and Medical Genetics at the University of Manitoba, where she employed quantitative imaging microscopy approaches to study genetic drivers of chromosome instability in cancer. Since joining QuIPS, Nicole has used her experience in quantitative imaging microscopy to enable other researchers to gain novel insight of their disease of interest at the single-cell level using the ImageXpress HT.ai and PhenoCycler-Fusion.​</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className='mt-4 ms-3 me-3 col-sm-12 d-flex justify-content-center'>
                        <p className="card-text me-3">To enquire about the PhenoCycler-Fusion, Molecular Devices Imaging Suite or Protein Jess, please contact Nicole.</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className='mt-4 ms-3 me-3 pb-3 col-sm-12 d-flex justify-content-center'>
                        <p className="card-text me-3">nicole.neudorf@umanitoba.ca​</p>
                      </div>
                    </div>
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