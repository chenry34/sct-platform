import TechnologyHeader from "@/components/TechnologyHeader"

export default function overview() {
  return (
    <>
      <TechnologyHeader title="Axio Imager" page="overview" technology="/imaging/axio-imager"></TechnologyHeader>
      <div className="container mb-3">
        <div className="row mt-4">
          <div className="col-lg-6">
            <img src="/axio.jpg" className="img-fluid rounded-start" style={{float: "left"}}/>
          </div>
          <div className="col-lg-6">
            <p>
            The Zeiss Axio Imager Z2 (see Specifications) is an advanced upright microscope that offers exceptional optical performance in 8 widefield fluorescence imaging channels (Colibri 7) and includes both an Axiocam 820 (20 megapixel) CMOS camera (fluorescence) and an Axiocam 305 color (5 megapixel) CMOS camera for pathology-based imaging. The ZEN Toolkit smart motorization feature automates 2D and 3D imaging including tile-based or multi-position imaging that can be combined with autofocusing and direct processing capabilities (e.g., stitching or shade correction) to provide highly reproducible results across all experimental conditions and magnification levels. The ZEN ToolKit also provides automatic image analysis pipelines and machine learning tools to develop custom image segmentation parameters based on geometry, intensity, and user-defined parameters. Finally, the associated image deconvolution software mathematically re-assigns out-of-focus information to significantly enhance signal-to-noise ratios and greatly improve image resolution. The ZEN Toolkit data analysis software is also accessible on an additional offline workstation to enable a greater volume of image data to be processed and analyzed. In summary, the Zeiss Axio Imager Z2 and Zen Toolkit enables users to execute advanced microscopy experiments with precision and efficiency to enable and accelerate their data analyses and research productivity.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}