export default function TechnologyHeader({ title, page, technology }) {
  return (
    <>
      <div className="container">
        <div className="row" style={{maxWidth: "100%"}}>
          <div className="col-lg-4 mt-4" style={{maxWidth: "100%"}}>
            <h1 style={{fontSize: "26px"}}>{title}</h1>
          </div>
          <div className="col-lg-8 text-center">
            <a href={`/technologies/${technology}`}><button className="btn btn-light me-2 px-4 mt-4 ms-2" disabled={page==="overview"} style={{color: "#00008B", minWidth: "200px"}}>Overview</button></a>
            <a href={`/technologies/${technology}/specifications`}><button className="btn btn-light me-2 px-4 mt-4 ms-2" disabled={page==="specifications"} style={{color: "#00008B",  minWidth: "200px"}}>Specifications</button></a>
            <a href={`/technologies/${technology}/pricing`}><button className="btn btn-light me-2 px-4 mt-4 ms-2" disabled={page==="pricing"} style={{color: "#00008B",  minWidth: "200px"}}>Pricing</button></a>
          </div>
        </div>
      </div>
    </>
  )
}