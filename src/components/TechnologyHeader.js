export default function TechnologyHeader({ title, page }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-5 ms-3 mt-4">
            <h1 style={{fontSize: "28px"}}>{title}</h1>
          </div>
          <div className="col-sm-6">
            <button className="btn btn-light mx-3 px-5 mt-4" disabled={page==="overview"} style={{color: "#23395d"}}>Overview</button>
            <button className="btn btn-light mx-3 px-5 mt-4" disabled={page==="specifications"} style={{color: "#23395d"}}>Specifications</button>
            <button className="btn btn-light mx-3 px-5 mt-4" disabled={page==="pricing"} style={{color: "#23395d"}}>Pricing</button>
          </div>
        </div>
      </div>
    </>
  )
}