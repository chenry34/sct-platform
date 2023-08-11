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
              image="/BD-FACSMelody.png"
              url="/technologies/fluorescent-activated-cell-sorting/overview"
            >
            </TechnologyCard>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch">
            <TechnologyCard
              title="Transcriptomics"
              subTitle="ChromiumX"
              subTitle2="Chromium Connect"
              image="/ChromiumX.png"
              url="/technologies/transcriptomics/overview"
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
              url="/technologies/spatial-biology/overview"
            >
            </TechnologyCard>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch">
            <TechnologyCard
              title="Highthroughput & Multiplexed Imaging"
              subTitle="ImageXpress Confocal HT.ai "
              subTitle2=" "
              image="/imageexpress.png"
              url="/technologies/highthroughput-imaging/overview"
            >
            </TechnologyCard>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6 d-flex align-items-stretch">
            <TechnologyCard
              title="Protein Quantification"
              subTitle="Jess - Chemiluminescent & Fluorescent Western Blotting​"
              subTitle2=" "
              image="/jess.jpg"
              url="/technologies/protein-quantification/overview"
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
              url="/technologies/modeling-and-screening/overview"
            >
            </TechnologyCard>
          </div>
        </div>
      </div>
    </>
  )
}