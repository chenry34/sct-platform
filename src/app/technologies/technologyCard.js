export default function TechnologyCard({ image, title, subTitle, subTitle2, subTitle3, url }) {
  return (
    <>
      <div className="card mb-3 bg-light" style={{width: "100%"}}>
        <div className="row g-0">
          <div className="col-sm-4">
            <img src={image} className="img-fluid rounded-start" />
          </div>
          <div className="col-sm-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="mb-0 card-text">{subTitle}</p>
              <p className="mt-0 mb-0 card-text">{subTitle2}</p>
              <p className="mt-0 card-text">{subTitle3}</p>
              <a href={url}>
                <button className="btn btn-primary">Read more</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}