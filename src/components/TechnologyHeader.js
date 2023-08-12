export default function TechnologyHeader({ title, page, technology }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-5 ms-3 mt-4">
            <h1 style={{fontSize: "24px"}}>{title}</h1>
          </div>
          <div className="col-sm-6">
            <a href={`/technologies/${technology}`}><button className="btn btn-light mx-3 px-5 mt-4" disabled={page==="overview"} style={{color: "#00008B"}}>Overview</button></a>
            <a href={`/technologies/${technology}/specifications`}><button className="btn btn-light mx-3 px-5 mt-4" disabled={page==="specifications"} style={{color: "#00008B"}}>Specifications</button></a>
            <a href={`/technologies/${technology}/pricing`}><button className="btn btn-light mx-3 px-5 mt-4" disabled={page==="pricing"} style={{color: "#00008B"}}>Pricing</button></a>
          </div>
        </div>
      </div>
    </>
  )
}