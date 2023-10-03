import './globals.css'
import { Inter } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { } from '@fortawesome/fontawesome-svg-core'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'QuIPS',
  description: 'Quantitative Imaging, Phenotyping and Sorting Platform',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " d-flex flex-column min-vh-100"}>
        <nav className="pt-4 mb-0 navbar navbar-expand-sm navbar-light bg-light">
          <div className="container">
            <div className="navbar-brand">
                <a href="/"><img className="img-fluid" src="/quips.png" href="/" style={{width: "18vh"}}/></a>
            </div>
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{whiteSpace: "nowrap"}}>
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/technologies">Technologies</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/instruments">Instrument Booking</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="bg-light">
          <div className="container bg-light">
            <hr className="m-0" />
            <div className="pt-1 pb-1 bg-light"><h1 style={{fontSize: "20px"}}><strong>Quantitative Imaging, Phenotyping and Sorting Platform</strong></h1></div>
          </div>
        </div>
        {children}
        <img className="mt-auto" src="/bottom-banner.png" style={{width: "100%"}}></img>
        <footer  className="text-center text-lg-start bg-light text-muted">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mt-3">
                <p>QuIPS Platform<br/><br/>Paul Albrechtsen Research Institute CCMB<br/>ON6015 - 675 McDermot Avenue<br/>Winnipeg, Manitoba<br/>R3E 0V9, Canada<br/>Phone: 204-787-2844​</p>
              </div>
              <div className="col-lg-3 my-auto">
                <a target="_blank" href="https://x.com/QuIPS_Platform" className="m-2" style={{color: "inherit", textDecorations:"none"}}><FontAwesomeIcon style={{height: "50px"}} icon={faXTwitter}/></a>
                <a target="_blank" href="https://instagram.com/QuIPS_Platform" className="m-2" style={{color: "inherit", textDecorations:"none"}}><FontAwesomeIcon style={{height: "50px"}} icon={faInstagram} /></a>
                <a target="_blank" href="https://www.linkedin.com/in/quips-platform-ba261b27a/" className="m-2" style={{color: "inherit", textDecorations:"none"}}><FontAwesomeIcon style={{height: "50px"}} icon={faLinkedin} /></a>
              </div>
              <div className="col-lg-5 ms-auto mt-3">
                <img src="/paulA.png" className="img-fluid" style={{width: "57%"}}></img>
                <img src="/cancercare.png" className="img-fluid" style={{width: "43%"}}></img>
                <p className="mt-3">We acknowledge the generous donation from the Paul Albrechtson Foundation for the purchase of the platform, as well as the ongoing support from Manitobans through their kind donations to the CancerCare Manitoba Foundation.</p>
              </div>
            </div>
          </div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js"></script>
      </body>
    </html>
  )
}
