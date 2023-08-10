"use client"
// Import the circular menu
import { Planet } from "react-planet"

export default function HomeMenu() {


  return (
    <div className="d-flex justify-content-center">
      <Planet
        orbitRadius={210}
        autoClose
        open
        centerContent={<div><img src="/CircleMenu/Slide3.jpg"/></div>}
      >
        <div><img src="/CircleMenu/Slide4.jpg"/></div>
        <div><img src="/CircleMenu/Slide5.jpg"/></div>
        <div><img src="/CircleMenu/Slide6.jpg"/></div>
        <div><img src="/CircleMenu/Slide7.jpg"/></div>
        <div><img src="/CircleMenu/Slide8.jpg"/></div>
        <div><img src="/CircleMenu/Slide9.jpg"/></div>
      </Planet>
    </div>
  );
};