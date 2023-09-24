import TechnologyHeader from "@/components/TechnologyHeader"

export default function overview() {
  return (
    <>
      <TechnologyHeader title="IN Carta Image Analysis Software" page="overview" technology="/highthroughput-imaging/in-carta"></TechnologyHeader>
      <div className="container mb-3">
        <div className="row mt-4">
          <div className="col-lg-6">
            <img src="/cells.jpg" className="img-fluid rounded-start" style={{float: "left"}}/>
          </div>
          <div className="col-lg-6">
            <p>
            IN Carta Image Analysis Software provides robust, quantitative data from complex biological image datasets. Inherent to the IN Carta software are user-friendly, pre-programmed analytic capabilities for 2D and 3D datasets, batch analysis, and monitoring paired workflows. IN Carta also provides advanced artificial intelligence capabilities to transform images into data that can be easily quantified and interpreted. The Custom Module Editor enables users to define highly customized image analysis protocols, which can be applied during a screening workflow. Additionally, the SINAP deep learning module offers tailored object segmentation and classification in all imaging channels and is adaptable to a myriad of analyses and imaging modalities, including identifying and quantifying objects localized within defined biological compartments (e.g., cell bodies, nuclei or certain cellular structures/organelles). The QuIPS platform features two IN Carta analysis workstations designed to handle the heavy lifting of image analysis, allowing users to focus on their research.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}