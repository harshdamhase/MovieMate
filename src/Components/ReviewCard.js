import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import vid1 from '../video/vid1.mp4';

import React from 'react'
import {Link} from 'react-router-dom';
function ReviewCard({video,Title,link}) {
  return (
  <>
  <div class="card card-video ms-3">
  <div class="card-body">
     <video className="col-lg-5 col-sm-10 col-md-10 ms-5 mb-2 video" autoPlay loop controls muted>
    <source src={video} type="video/mp4"/>
    
    </video>
   
    <p class="card-text netflix-name trailer-text">{Title}</p>
    {/* <a href={link} class="btn btn-primary trailer-btn ">Go somewhere</a> */}
    <Link className='btn btn-primary  custom trailer-btn' to = {link}> Explore More </Link> 
  </div>
</div>

  
  
  

  </>
  )
}

export default ReviewCard

