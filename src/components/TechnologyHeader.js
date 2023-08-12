export default function TechnologyHeader({ title, page, technology }) {
  return (
    <>
      <div className="container">
        <div className="row" style={{maxWidth: "100%"}}>
          <div className="col-sm-5 mt-4" style={{maxWidth: "100%"}}>
            <h1 style={{fontSize: "24px"}}>{title}</h1>
          </div>
          <div className="col-sm-6">
            <a href={`/technologies/${technology}`}><button className="btn btn-light me-5 px-5 mt-4" disabled={page==="overview"} style={{color: "#00008B"}}>Overview</button></a>
            <a href={`/technologies/${technology}/specifications`}><button className="btn btn-light me-5 px-5 mt-4" disabled={page==="specifications"} style={{color: "#00008B"}}>Specifications</button></a>
            <a href={`/technologies/${technology}/pricing`}><button className="btn btn-light px-5 mt-4" disabled={page==="pricing"} style={{color: "#00008B"}}>Pricing</button></a>
          </div>
        </div>
      </div>
    </>
  )
}