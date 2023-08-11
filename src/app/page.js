"use client"

import $ from "jquery";
import 'maphilight/jquery.maphilight'
import imageMapResize from 'image-map-resizer/js/imageMapResizer.min'
import { useEffect } from "react";

export default function Home() {  

  useEffect(() => {
    window.addEventListener('resize',() => {
      $('.maparea').maphilight({strokeColor: "#000000"})
    })
  }, []);

  return (
    <>
      <div>
        <img className="mt-0" src="/home-background.png" style={{position: "absolute", height: "30vh", width: "100%", opacity: "1.0", zIndex: "-10"}} />
      </div>
      <div className="container">
        <div className="row justify-content-center mt-3 mb-3">
          <div className="col-sm-8 mb-3">
            <div className="card mt-4 p-3" style={{border: "none"}}>
              <p className="m-2">Our platform provides leading-edge technological services for researchers within the Paul Albrechtsen Research Institute CancerCare Manitoba, the University of Manitoba, external academic institutes, and industrial partners.</p>
            </div> 
          </div>
        </div>
        <div className="container d-flex justify-content-center">
          <img id="image" className="maparea" src="/CircleMenu/Slide1.jpg" useMap="#image-map"/>
          <map id="image-map" name="image-map">
            <area target="_blank" alt="Modeling and Screening" title="Modeling and Screening" href="/technologies/modeling-and-screening" coords="239,28,414,176" shape="rect" />
            <area target="" alt="Cell Sorting" title="Cell Sorting" href="/technologies/cell-sorting" coords="467,158,641,305" shape="rect" />
            <area target="" alt="Transcriptomics" title="Transcriptomics" href="/technologies/transcriptomics" coords="466,412,638,558" shape="rect" />
            <area target="" alt="High-Throughput-multiplexed-imaging" title="High-Throughput-multiplexed-imaging" href="/technologies/high-throughput-multiplexed-imaging" coords="243,541,414,684" shape="rect" />
            <area target="" alt="Spatial Biology" title="Spatial Biology" href="/technologies/spatial-biology" coords="11,412,181,556" shape="rect" />
            <area target="" alt="Protein Levels" title="Protein Levels" href="/technologies/protein-levels" coords="2,162,175,308" shape="rect" />
          </map>
        </div>
      </div>
      <script>{imageMapResize()}</script>
    </>
  )
}
