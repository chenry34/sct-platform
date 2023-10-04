import TechnologyHeader from "@/components/TechnologyHeader"

export default function overview() {
  return (
    <>
      <TechnologyHeader title="Spatial Biology" page="overview" technology="spatial-biology"></TechnologyHeader>
      <div className="container mb-3">
        <div className="row mt-4">
          <div className="col-lg-12">
            <img src="/phenocycler.webp" className="img-fluid rounded-start mt-3 me-3 mb-1" style={{float: "left", maxWidth: "700px", width: "100%"}}/>
            <p className="mt-3">
            The Akoya Biosciences PhenoCycler-Fusion pairs state-of-the-art, high-speed imaging with automated microfluidics to empower high-resolution/high-dimensional spatial biology and multi-omic analyses of tissue samples and microarrays. By imaging up to 70 fluorescent reporters in a single experiment, the PhenoCycler-Fusion system provides researchers with an unprecedented understanding of the 2D/3D spatial organization of single-cells and multiparameter cellular expression and cell-to-cell interactions. By harnessing artificial intelligence to locate, image and analyze tissues, this system enables unbiased quantitative characterization and discovery, maximizing the insights gathered from complete tissue sections/microarrays including: determining co-expression patterns, defining cellular interactions, mapping cellular neighborhoods, building a cell atlas, developing a spatial phenotypic signature, and enabling biomarker discovery and validation.
            </p>
            <p>
            The PhenoCycler-Fusion contains a microfluidics system and an automated confocal microscope that enables multiplexed, quantitative immunofluorescence of human and mouse tissue slides and tissue microarrays. Choose from ~100 pre-conjugated antibodies to create custom multiplex panels available from Akoya Biosciences. Alternatively, Akoya provides custom conjugation kits, enabling scientists to employ their favourite antibodies. Additionally, the PhenoImager Fusion can be employed as a stand-alone confocal microscope capable of multiplexing up to 7 markers of interest on prelabeled tissue samples (see Specifications). The PhenoImager has a 4-slide carrier capacity with the ability to run independent imaging protocols in each position, enabling high-throughput imaging. Once images are acquired, users can perform image optimization, cell segmentation and in-depth data analyses on three available open-source software applications: PhenoChart, inForm, and QuPath.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}