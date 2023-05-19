import React from 'react'
import NavbarComp from '../../Components/NavbarComp'
import { NavLink } from 'react-bootstrap';
import Footer from '../../Components/Footer';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/img1.jpg'
import img3 from '../../images/img3.jpg'

function Marathi() {
  return (
    <>
      <NavbarComp />

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
              src={img1}
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
        <h2 className="heading"><ul>Most Popular Comedy Movies :</ul></h2>

        <div className="row cardsDiv">


          <h2 className="heading"><ul>Most Popular Thriller Movies :</ul></h2>

          <Footer />
        </div>
      </section>

    </>
  )
}

export default Marathi