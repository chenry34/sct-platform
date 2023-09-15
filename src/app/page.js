
export default function Home() { 
  return (
    <>
      <div style={{backgroundImage: `url('/home-background.png')`, backgroundRepeat: "no-repeat", backgroundSize: "contain"}}>
        {/* <img className="mt-0" src="/home-background.png" style={{position: "absolute", height: "20ve", maxWidth: "100%", width: "100%", opacity: "1.0", zIndex: "-10"}} /> */}
        <div className="container mb-5">
          <div className="row justify-content-center mt-3">
            <div className="col-lg-9">
              <div className="card mt-3 p-3" style={{border: "none", fontSize: "21px"}}>
                <p className="m-3">Our platform provides leading-edge technological services for researchers within the Paul Albrechtsen Research Institute CancerCare Manitoba, the University of Manitoba, external academic institutes, and industrial partners.</p>
              </div> 
            </div>
          </div>
          <div className="container d-flex justify-content-center mt-3">
            <img className="img-fluid" src="/wheel.png" style={{maxWidth: "900px", width: "100%"}} />
          </div>
        </div>
      </div>
    </>
  )
}
