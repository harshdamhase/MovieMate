import React from 'react'
import NavbarComp from '../../Components/NavbarComp'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../TamilMovie/Images/Hit Tamil.jpg'
import img2 from "../TamilMovie/Images/lidsa.jpg"
import img3 from "../TamilMovie/Images/patro.webp"
import TamilCarousel from '../../Components/TamilCarousel'
import "./Tamil.css"




function Tamil() {
  return (
    <>
      <NavbarComp/>
      <div className='TamilCarousel'>
      <TamilCarousel img1={img1} img2={img2} img3={img3}/>
      </div>
      <hr/>
      <div>
        <p className=''>
          Popular Tollywood Movies:
        </p>
      </div>


    </>
  )
}

export default Tamil