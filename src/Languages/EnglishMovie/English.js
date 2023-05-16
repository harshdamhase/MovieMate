import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComp from '../../Components/NavbarComp';
import './English.css'
import img1 from '../../images/poster-1.jpg'
import img2 from '../../images/poster-2.jpg'
import img3 from '../../images/poster-3.png'
import Carousel from 'react-bootstrap/Carousel'
import EnglishMovieCard from '../../Components/EnglishMovieCard';


function English(props) {
  return (  
    <div>
         <NavbarComp />
      <div>
      <Carousel>
      <Carousel.Item>
        <img style={{height:'350px'}}
          className='d-block w-100 carousel-container'
          src={img1}
          alt='first slid'/>
          <Carousel.Caption>
     <h3>Latest Comedy Movies</h3>
          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
        <img style={{height:'350px'}}
          className="d-block w-100 carousel-container"
          src={img2}
          alt="Second slide"
        />

<Carousel.Caption>
          <h3>Latest Horror Movies </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'350px'}}
          className="d-block w-100 carousel-container"
          src={img3}
          alt="Third slide"
        />
                <Carousel.Caption>
          <h3>Latest Thriller Movies</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      </div>
<div>
  <EnglishMovieCard/>
</div>

    </div>

  )
}

export default English;
