import TechnologyHeader from "@/components/TechnologyHeader"

export default function overview() {
  return (
    <>
      <TechnologyHeader title="Highthroughput and Multiplexed Imaging" page="overview" technology={"highthroughput-imaging"}></TechnologyHeader>
      <div className="container mb-3">
        <div className="row mt-4">
          <div className="col-lg-6">
            <img src="/imx.png" className="img-fluid rounded-start" style={{float: "left"}}/>
          </div>
          <div className="col-lg-6">
            <p>
            The ImageXpress Confocal HT.ai High-Content Imaging System is a high-throughput and high-content screening instrument (see Figure below) that offers up to 8 imaging channels (see Specifications) and machine learning capabilities to accelerate your research. In addition to widefield microscopy, the ImageXpress Confocal HT.ai High-Content Imaging System enables highly multiplexed assays while maintaining high-throughput imaging by coupling reduced exposure times with faster acquisition of 3D samples. Further, the next-generation dual micro-lens enhanced spinning disk provides a flat field of view for more accurate and reproducible imaging in live cell experiments at the single-cell level. Automated water immersion objectives (20´; 40´; 60´) offer greater numerical apertures and matched refractive indexes between the sample and the immersion media to enhance signal intensity, improve image resolution and minimize image aberrations, empowering scientists to more precisely image thick samples such as organoids or patient-derived xenografts.
             </p>
          </div>
        </div>
      </div>
    </>
  )
}