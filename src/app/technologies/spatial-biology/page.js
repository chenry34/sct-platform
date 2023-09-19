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
              The Akoya Biosciences PhenoCycler-Fusion pairs state-of-the-art, high-speed imaging with automated microfluidics to empower high-resolution/high-dimensional spatial biology and multi-omic analyses of tissue samples and microarrays. By imaging up to 70 fluorescent reporters in a single experiment, the PhenoCycler Fusion system provides researchers with an unprecedented understanding of the 2D/3D spatial organization of single-cells and multiparameter cellular expression and cell-to-cell interactions. By harnessing artificial intelligence to locate, image and analyze tissues, this system enables unbiased quantitative characterization and discovery, maximizing the insights gathered from complete tissue sections/microarrays including: determining co-expression patterns, defining cellular interactions, mapping cellular neighborhoods, building a cell atlas, developing a spatial phenotypic signature, and enabling biomarker discovery and validation.
            </p>
            <p>
              The PhenoCycler-Fusion contains a microfluidics system and an automated confocal microscope that enables multiplexed, quantitative immunofluorescence of human and mouse tissue slides and tissue microarrays. Using antibodies conjugated to barcodes (Akoya Biosciences), the PhenoCycler Fusion automatically dispenses complementary fluorescent reporters, images the tissue, and dissociates these reporters before cycling with new fluorescent reporters. Choose from ~100 pre-conjugated antibodies to create custom multiplex panels available from Akoya Biosciences. Alternatively, Akoya provides custom conjugation kits, enabling scientists to employ their favourite antibodies. The 4 lasers within the PhenoCycler-Fusion system enable 4 fluorescent reporters in your sample to be imaged in each cycle, enabling the detection of up to 70 protein biomarkers in one sample for deep spatial phenotyping. Additionally, the PhenoImager Fusion can be employed as a stand-alone confocal microscope capable of multiplexing up to 9 markers of interest on prelabeled tissue samples (see Specifications). The PhenoImager has a 4-slide carrier capacity with the ability to run independent imaging protocols in each position, enabling high-throughput imaging. 
              Once images are acquired, users can perform image optimization, cell segmentation and in-depth data analyses on three available software applications: PhenoChart, inForm, and QuPath. PhenoChart software enables users to easily view and analyze whole slide images and select areas of interest for further review and annotation, allowing users to manually draw regions and count structures of interest. The machine learning-based neural network pattern recognition functions inherent to inForm can phenotype cells in tissue sections, such as computing the double positivity of cells, measuring the distance between cells, and analyzing the spatial distribution of cells (i.e., cellular neighborhoods). Researchers can also perform per-cell analysis of immunohistochemistry, immunofluorescence, and RNA in-situ-hybridization. InForm’s multispectral imaging and analysis capabilities also allow for the separation and measurement of weak and spectrally overlapping markers in single and multiplex assays to accurately identify and quantify biomarkers in tissue sections. With QuPath, users can create custom workflows by combining and linking the existing algorithms and exchange data with existing open-source software, such as ImageJ and MATLAB.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}