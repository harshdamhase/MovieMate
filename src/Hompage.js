import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../src/Components/NavbarComp';
import vid1 from '../src/video/vid1.mp4'
// import Video from '../src/Components/Video'
import "./Homepage.css"




function Hompage() {
  return (
    <>
    <NavbarComp/>
    <div className="row video-container mt-5" >
        <video className='col-lg-7 col-sm-10 col-md-10 ms-5 video-height'controls autoplay>
            <source src={vid1} type="video/mp4" />
        </video>

        <div className=' col-lg-4 col-sm-8 col-md-8 ms-5 info'>
            <img className='img-fluid elementalimg' src="https://mickeyblog.com/wp-content/uploads/2023/04/Elemental-Main-720x340.jpg"/>
            <span className='Upcoming'>Upcoming:</span>
        </div>
        
    </div>  

   </>
   

  
  )
}


export default Hompage