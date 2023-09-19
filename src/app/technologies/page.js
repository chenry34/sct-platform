import TechnologyCard from "./technologyCard"


export default function members() {
  return ( 
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-stretch">
            <TechnologyCard
              title="Fluorescence Activated Cell Sorting"
              subTitle="BD FACSMelody​"
              subTitle2=" "
              image="/facs.png"
              url="/technologies/fluorescent-activated-cell-sorting"
            >
            </TechnologyCard>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch">
            <TechnologyCard
              title="Transcriptomics"
              subTitle="Chromium X"
              subTitle2="Chromium Connect"
              image="/ChromiumX.png"
              url="/technologies/transcriptomics"
            >
            </TechnologyCard>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 d-flex align-items-stretch">
            <TechnologyCard
              title="Spatial Biology"
              subTitle="Akoya PhenoCycler-Fusion ​"
              subTitle2=" "
              image="/phenocycler.webp"
              url="/technologies/spatial-biology"
            >
            </TechnologyCard>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch">
            <TechnologyCard
              title="Highthroughput & Multiplexed Imaging"
              subTitle="ImageXpress Confocal HT.ai "
              subTitle2=" "
              image="/imx.png"
              url="/technologies/highthroughput-imaging"
            >
            </TechnologyCard>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6 d-flex align-items-stretch">
            <TechnologyCard
              title="Protein Quantification"
              subTitle="Bio-techne Jess​"
              subTitle2=" "
              image="/jess2.png"
              url="/technologies/protein-quantification"
            >
            </TechnologyCard>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch">
            <TechnologyCard
              title="Modeling and Screening "
              subTitle="CRISPR"
              subTitle2="CRISPR Multiplexing"
              subTitle3="CRISPR Screening"
              image="/crisper.png"
              url="/technologies/modeling-and-screening"
            >
            </TechnologyCard>
          </div>
        </div>
      </div>
    </>
  )
}