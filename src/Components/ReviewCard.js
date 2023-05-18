import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import vid1 from '../video/vid1.mp4';
import React from 'react'

function ReviewCard({video,Title,Overview}) {
  return (
  <>
      <div class="card card-video">
  <div class="card-body">
     <video className="col-lg-5 col-sm-10 col-md-10 ms-5 mb-2 video" controls autoplay muted>
  <source src={vid1} type={video}/>
</video>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

  
  
  

  </>
  )
}

export default ReviewCard

// <div class="card mb-3">
// <div class="row g-0">
//     <div class="col-md-4">
    {/* <img src={imgUrl}  class="img-fluid rounded-start horcardimg" alt="..."/> */}

    {/* <div className="row  " >
<video className="col-lg-5 col-sm-10 col-md-10 ms-5 mb-2 video-height" controls autoplay muted>
  <source src={vid1} type={video}/>
</video>
</div>
    </div>
    <div class="col-md-8">
    <div class="card-body">
        <h5 class="card-title">{Title}</h5>
        <p class="card-text">{Overview}</p>
        
    </div>
    </div>
</div>
</div>  */}