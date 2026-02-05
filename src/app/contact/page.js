export default function contact() {
  return ( 
    <>
      <div className="bg-light" style={{backgroundImage: `url('/contact-background.jpg')`, backgroundRepeat: "no-repeat", backgroundSize: "100%"}}>
        <div className="container mt-5 ">
          <div className="card bg-light mb-3 mt-3" style={{border: "none"}}>
            <div className="d-flex justify-content-center">
              <h1 className="center mt-4 mb-3" style={{opacity: "1.0"}}>Contact Us</h1>    
            </div>
            <div className="card bg-light mb-5" style={{marginRight: "5%", marginLeft: "5%", border: "none"}}>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3"></div>
                  <div className="col-sm-3 mt-3">
                    <strong>Location:</strong>
                  </div>
                  <div className="col-sm-5 mt-3">
                    <p>
                      Paul Albrechtsen Research Institute CCMB
                      <br />
                      <br />
                      ON6015A - 675 McDermot Avenue
                      <br/>
                      Winnipeg, Manitoba
                      <br/>
                      R3E 0V9, Canada
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3"></div>
                  <div className="col-sm-3 mt-3">
                    <strong>Email:</strong>
                  </div>
                  <div className="col-sm-6 mt-3">
                    <p>
                      arshani.alukumbura@umanitoba.ca<br></br>
                      nicole.neudorf@umanitoba.ca<br></br>
                      obinna.ohaegbula@umanitoba.ca
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3"></div>
                  <div className="col-sm-3 mt-3">
                    <strong>Telephone:</strong>
                  </div>
                  <div className="col-sm-3 mt-3">
                    <p>
                      204-787-2844
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}