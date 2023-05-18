import React from 'react'
import NavbarComp from '../../Components/NavbarComp'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NavLink } from 'react-bootstrap';
import Footer from '../../Components/Footer';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
// import MarathiMovieCard from '../../Components/MarathiMovieCard';


function Marathi() {
  return (
  <>
  <NavbarComp/>
   
  <div>
        <Carousel>
          <Carousel.Item>
            <img style={{ height: '370px' }}
              className='d-block w-100 carousel-container'
              src={img1}
              alt='first slid' />
            <Carousel.Caption>
              <h3>Latest thriller Movies</h3>
            </Carousel.Caption>
          </Carousel.Item>
      

          <Carousel.Item>
            <img style={{ height: '370px' }}
              className='d-block w-100 carousel-container'
              src={img2}
              alt='first slid' />
            <Carousel.Caption>
              <h3>Latest comdey Movies</h3>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item>
            <img style={{ height: '370px' }}
              className='d-block w-100 carousel-container'
              src={img3}
              alt='third slid' />
            <Carousel.Caption>
              <h3>Latest horror Movies</h3>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
   </div>

      <section class="features" >
        <h2 className="my-3">Most Popular Comedy Movies</h2>
        <div className="row  mx-3 px-5">
          </div>
</section>
        {/* <div class="col-md-3" >
            <MarathiMovieCard imgUrl="https://www.themanual.com/wp-content/uploads/sites/9/2021/12/4ldpbxicygkkr8fghgjklphrfuc.jpg?p=1" filmName="Dumb-Dumber" timeDuration="1hrs 35mins" filmType="Comedy" />
          </div>
          </div> */}

    </>
  )
}

export default Marathi