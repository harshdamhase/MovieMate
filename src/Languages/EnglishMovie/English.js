import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComp from '../../Components/NavbarComp';
import './English.css'

function English(props) {
  return (
    <div>
      <NavbarComp />
      
      <button type='button' className='Comedy'><h4>Comedy Movies</h4></button>
      <div className='img-container'>
        <div className='img-box'>
          <img className='img m-2'  src='https://m.media-amazon.com/images/I/91OMqjzH-pL._SY550_.jpg'/>
          <img className='img m-2' src='https://qph.cf2.quoracdn.net/main-qimg-2144e4b0f58c764c3751f1018295c43a.webp'/>
          <img className='img m-2' src='https://www.themanual.com/wp-content/uploads/sites/9/2021/12/cuvdzcbhlyyuawbikbjt3tc28ck.jpg?p=1#038;p=1.jpg'/>
          <img className='img m-2' src='https://c8.alamy.com/comp/PMB8P8/moms-night-out-the-new-family-comedy-from-sony-affirm-and-provident-films-poster-PMB8P8.jpg'/>
          <img className='img m-2' src='https://www.themanual.com/wp-content/uploads/sites/9/2021/12/4ldpbxicygkkr8fghgjklphrfuc.jpg?p=1#038;p=1.jpg'/>
        </div>
      </div>
    </div>

  )
}

export default English
