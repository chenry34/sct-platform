export default function TechnologyCard({ image, title, subTitle, subTitle2, subTitle3, url }) {
  return (
    <>
      <div className="card mb-3 bg-light" style={{width: "100%"}}>
        <div className="row g-0">
          <div className="col-sm-5">
            <img src={image} className="img-fluid rounded-start" style={{minHeight: "175px"}} />
          </div>
          <div className="col-sm-7">
            <div className="card-body" style={{height: "100%"}}>
              <h5 className="card-title">{title}</h5>
              <p className="mb-0 card-text">{subTitle}</p>
              <p className="mt-0 mb-0 card-text">{subTitle2}</p>
              <p className="mt-0 card-text">{subTitle3}</p>
              <div className="mt-auto">
                <a href={url}>
                  <button className="btn btn-primary">Read more</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}