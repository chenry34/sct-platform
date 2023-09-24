import TechnologyHeader from "@/components/TechnologyHeader"

export default function overview() {
  return (
    <>
      <TechnologyHeader title="SpectraMax® iD3 Multi-Mode Microplate Reader" page="overview" technology="/highthroughput-imaging/spectramax"></TechnologyHeader>
      <div className="container mb-3">
        <div className="row mt-4">
          <div className="col-lg-6">
            <img src="/spectramax.png" className="img-fluid rounded-start" style={{float: "left"}}/>
          </div>
          <div className="col-lg-6">
            <p>
            The SpectraMax iD3 Multi-Mode Microplate Reader is a versatile instrument capable of measuring absorbance, fluorescence, and luminescence, making it suitable for various applications in academic, clinical and pharmaceutical research. The four-monochromator optical pathway ensures precise and accurate measurements, while a 20´20 read matrix enables high-throughput screening and analysis of multiple samples simultaneously. The SpectraMax iD3 also offers spectral scanning capabilities, allowing researchers to detect multiple wavelengths simultaneously, enabling deeper insights and more detailed analysis. The external shake feature allows researchers to mix their samples in linear, orbital and double orbital modes with shake intensities tunable to low, medium or high. The SpectraMax iD3 is equipped with a user-friendly touchscreen interface, making it easy to operate, while the SoftMax Pro Software allows for seamless data analysis and interpretation, enhancing the efficiency and productivity of research workflows.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}