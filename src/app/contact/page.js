export default function contact() {
  return ( 
    <>
      <div>
        <img className="mt-0" src="/contact-background.jpg" style={{position: "absolute", height: "30vh", width: "100%", opacity: "1.0"}} />
      </div>
      <div className="container mt-5">
        <div className="card mb-3 mt-3" style={{border: "none"}}>
          <div className="d-flex justify-content-center">
            <h1 className="center mt-3 mb-3" style={{opacity: "1.0"}}>Contact Us</h1>    
          </div>
          <div className="card bg-light" style={{marginRight: "5%", marginLeft: "5%", border: "none"}}>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-3 mt-3">
                  <strong>Location:</strong>
                </div>
                <div className="col-sm-3 mt-3">
                  <p>
                    QuIPS Platform
                    <br />
                    <br/>
                    Paul Albrechtsen Research Institute CCMB
                    <br />
                    <br />
                    ON6015 - 675 McDermot Avenue
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
                <div className="col-sm-3 mt-3">
                  <p>
                    example@example.com
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
    </>
  )
}