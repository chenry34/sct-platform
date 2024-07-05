import TechnologyCard from "../technologyCard"


export default function imaging() {
  return ( 
    <>
      <div className="container mt-3">
      <div className="row">
          <div className="col-lg-6 d-flex align-items-stretch">
            <TechnologyCard
              title="Highthroughput & Multiplexed Imaging"
              subTitle="ImageXpress"
              subTitle2="​SpectraMax® iD3"
              subTitle3="IN Carta Image Analysis Software"
              image="/imx.png"
              url="/technologies/imaging/highthroughput-imaging"
            >
            </TechnologyCard>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch">
            <TechnologyCard
              title="Axio Imager"
              subTitle="Zeiss AxioImager Z2"
              subTitle2="Arivis Pro Software"
              image="/axio.jpg"
              url="/technologies/imaging/axio-imager"
            >
            </TechnologyCard>
          </div>
        </div>
      </div>
    </>
  )
}