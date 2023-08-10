import TechnologyCard from "./technologyCard"


export default function members() {
  return ( 
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-stretch">
            <TechnologyCard
              title="Fluorescence Activated Cell Sorting"
              subTitle="BD FACSMelody​"
              subTitle2=" "
              image="/BD-FACSMelody.png"
              url="/technologies/BD-FACSMelody"
            >
            </TechnologyCard>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch">
            <TechnologyCard
              title="Automated Single Cell Library Preparation"
              subTitle="ChromiumX"
              subTitle2="Chromium Connect"
              image="/ChromiumX.png"
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
            >
            </TechnologyCard>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch">
            <TechnologyCard
              title="Highthroughput Imaging"
              subTitle="ImageXpress Confocal HT.ai "
              subTitle2=" "
              image="/imageexpress.png"
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
            >
            </TechnologyCard>
          </div>
        </div>
      </div>
    </>
  )
}