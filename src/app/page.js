"use client"

import { useEffect } from 'react'

export default function Home() { 
  
  useEffect(() => {

    let createCircleMenu = async () => {
      let createElement = (paper, image, x, y, width, height, href) => {
        return paper
                .image(image, x, y, width, height)
                .attr({
                  cursor: "pointer"
                }).hover(function () {
                  this.animate({"opacity": 0.8}, 50);
                }).mouseout(function () {
                  this.animate({"opacity": 1}, 50);
                }).click(() => {
                  window.location.href = href
                });
      }

      let createArrowElement = (paper, image, x, y, width, height) => {
        return paper.image(image, x, y, width, height)
      }

      if (typeof window !== "undefined") {
        const Raphael = (await import('raphael/raphael.min.js')).default
        
        let width = document.getElementById("circle-menu").offsetWidth;
        let height = width*1.15
        let elementWidth = width / 3.7
        let elementHeight = width / 4
  
        let paper = Raphael("circle-menu", width, height)
        paper.setViewBox(0,0,width, height, true)
        paper.setSize("100%", "100%")
        
        createElement(paper, "CircleMenu2/CRISPR Only.png", (width / 2) - (elementWidth / 2), 0, elementWidth, elementHeight, '/technologies/modeling-and-screening')
        createArrowElement(paper, "CircleMenu2/Arrow 1.png", (width / 2) + (elementWidth / 1.6), height / 11, width / 7, width / 11)
        
        createElement(paper, "CircleMenu2/Cell Sorting Only.png", width - elementWidth, elementHeight * 0.9, elementWidth, elementHeight, '/technologies/fluorescence-activated-cell-sorting')
        createArrowElement(paper, "CircleMenu2/Arrow 2.png", (width / 2) + (elementWidth * 1.45), height / 2.36, width / 15, width / 7)
        
        createElement(paper, "CircleMenu2/Transcriptomics Only.png", width - elementWidth, elementHeight * 2.5, elementWidth, elementHeight, '/technologies/transcriptomics')
        createArrowElement(paper, "CircleMenu2/Arrow 3.png", (width / 2) + (elementWidth / 1.5), height - (elementHeight), width / 7, width / 10)

        createElement(paper, "CircleMenu2/ImageXpress only.png", (width / 2) - (elementWidth / 2), elementHeight * 2.5 + elementHeight * 0.9, elementWidth, elementHeight, '/technologies/highthroughput-imaging')
        createArrowElement(paper, "CircleMenu2/Arrow 4.png", (width / 2) - (elementWidth * 1.15), height - (elementHeight), width / 7, width / 10)

        createElement(paper, "CircleMenu2/Spatial Biology Only.png", 0, elementHeight * 2.5, elementWidth, elementHeight, '/technologies/spatial-biology')
        createArrowElement(paper, "CircleMenu2/Arrow 5.png", (elementWidth * 0.2), height / 2.36, width / 20, width / 8)

        createElement(paper, "CircleMenu2/Protein Levels only.png", 0, elementHeight * 0.9, elementWidth, elementHeight, '/technologies/protein-quantification')
        createArrowElement(paper, "CircleMenu2/Arrow 6.png", (width / 2) - (elementWidth * 1.15), height / 10, width / 7, width / 11)

        let quipsWidth = width * 0.33
        let quipsHeight = height * 0.125

        paper.image("/quips.png", (width / 2) - (quipsWidth / 2), (height / 2) - (quipsHeight / 2), quipsWidth, quipsHeight)

      }
    }

    createCircleMenu()


  }, [])


  return (
    <>
      <div className="bg-light" style={{backgroundImage: `url('/home-background.png')`, backgroundRepeat: "no-repeat", backgroundSize: "contain"}}>
        {/* <img className="mt-0" src="/home-background.png" style={{position: "absolute", height: "20ve", maxWidth: "100%", width: "100%", opacity: "1.0", zIndex: "-10"}} /> */}
        <div className="container mb-5">
          <div className="row justify-content-center mt-3">
            <div className="col-lg-11">
              <div className="card mt-3 p-2 bg-light" style={{border: "none", fontSize: "22px"}}>
                <p className="m-3">Our platform provides leading-edge technological services for researchers within the Paul Albrechtsen Research Institute CancerCare Manitoba, the University of Manitoba, external academic institutes, and industrial partners.</p>
              </div> 
            </div>
          </div>
          <div className="container d-flex justify-content-center mt-5">
            <div id="circle-menu" align="center" style={{width: "90%", height: "100%", marginRight: "3%", marginLeft: "3%", maxWidth: "900px"}}></div>
          </div>
        </div>
      </div>
    </>
  )
}
