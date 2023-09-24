import TechnologyCard from "../technologyCard"

export default function overview() {
  return (
    <>
      <div className="container mb-3">
        <div className="row mt-4">
          <div className="col-lg-6">
            <img src="/highthroughput.jpg" className="img-fluid rounded-start" style={{width: "100%"}}></img> 
            <p>
            The Molecular Devices high-content suite couples high-throughput plate reading and quantitative imaging microscopy with powerful artificial intelligence supported analytics to empower and accelerate transformative research. The SpectraMax iD3 Multi-Mode Microplate Reader provides luminescence, absorbance and fluorescence reading capabilities in multiple plate formats, while the ImageXpress Confocal HT.ai High-Content Imaging System provides both widefield and confocal microscopy capabilities and up to 8-fluorescent channels to enable the acquisition of high-resolution, multidimensional (2D, 3D and 4D) images from either plates or microscopy slides. The Molecular Devices suite also houses a plate incubator and plate hotel that can be accessed by the PreciseFlex 400 Robotic Arm to facilitate fully automated high-throughput plate reading/imaging of either live (up to 40 plates simultaneously) or traditional end-point/fixed (up to 80 plates) experiments. Finally, the suite is complimented by two high-end workstations equipped with IN Carta Image Analysis Software, allowing researchers to harness the power of artificial intelligence to help inform and expedite their data analyses.
            </p>
          </div>
          <div className="col-lg-6">
            <TechnologyCard
              title="SpectraMax® iD3 Multi-Mode Microplate Reader "
              subTitle="​ "
              subTitle2="​ "
              image="/spectramax.png"
              url="/technologies/highthroughput-imaging/spectramax"
            >
            </TechnologyCard>
            <TechnologyCard
              title="ImageXpress"
              subTitle="​ "
              subTitle2="​ "
              image="/imx.png"
              url="/technologies/highthroughput-imaging/image-xpress"
            >
            </TechnologyCard>
            <TechnologyCard
              title="IN Carta Image Analysis Software"
              subTitle="​ "
              subTitle2="​ "
              image="/cells.jpg"
              url="/technologies/highthroughput-imaging/in-carta"
            >
            </TechnologyCard>
          </div>
        </div>
      </div>
    </>
  )
}