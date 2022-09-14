import React from 'react'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner" style={{justifyItems:'center'}}>
    <div className="carousel-item active">
        <div className="d-flex justify-content-center"><img src={img1} className="carousel_img" alt="..."/></div>
      
    </div>
    <div className="carousel-item">
    <div className="d-flex justify-content-center"><img src={img2} className="carousel_img" alt="..."/></div>
      
    </div>
    <div className="carousel-item">
    <div className="d-flex justify-content-center"> <img src={img3} className="carousel_img" alt="..."/></div>
     
    </div>
    <div className="carousel-item">
    <div className="d-flex justify-content-center"><img src={img4} className="carousel_img" alt="..."/></div>
      
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" >
    <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
