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
            <img style={{ height: '350px' }}
              className='d-block w-100 carousel-container'
              src={img1}
              alt='first slid' />
            <Carousel.Caption>
              <h3>Latest Comedy Movies</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img style={{ height: '350px' }}
              className="d-block w-100 carousel-container"
              src={img2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Latest Horror Movies </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{ height: '350px' }}
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
     <section class="features" >
        <h2 className="my-3">Most Popular Comedy Movies</h2>
        <div className="row  mx-3 px-5">
        
 
        <div class="col-md-3" >
            <EnglishMovieCard imgUrl="https://www.themanual.com/wp-content/uploads/sites/9/2021/12/4ldpbxicygkkr8fghgjklphrfuc.jpg?p=1" filmName="Dumb-Dumber" timeDuration="1hrs 35mins" filmType="Comedy"/>
            </div>

            <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://imgix.ranker.com/node_img/3140/62793346/original/arthur-films-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=125&w=125" filmName="arthur" timeDuration="1hrs 40mins" filmType="comedy-romentic"/>
            </div>

            <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://c8.alamy.com/comp/PMB8P8/moms-night-out-the-new-family-comedy-from-sony-affirm-and-provident-films-poster-PMB8P8.jpg" filmName="Mom's night out" timeDuration="1hrs 50mins" filmType="comedy"/>
            </div>

            <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://filmfare.wwmindia.com/content/2021/aug/best-comedy-movies-hollywood-the-hangover.jpg" filmName="Hangover" timeDuration="1hrs 60mins" filmType="Comedy"/>
            </div>

            <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://m.media-amazon.com/images/I/51XtWylAzmL.jpg" filmName="Operation-fortune" timeDuration="1hrs 54mins" filmType="comedy"/>
            </div>

            <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://i.ytimg.com/vi/S1Hl8HnxnAM/mqdefault.jpg" filmName="Ticket paradise" timeDuration="1hrs 32mins" filmType="comedy"/>
            </div>

            <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlfTsJIEpggkIgOwR-CZNsHfGU8l6irrrVVAYJpzDFQlj5zioC" filmName="Bullet Train" timeDuration="2 hrs 10min" filmType="comedy"/>
            </div>


            <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2MzY1MjM1._V1_.jpg" filmName="Minions: The Rise of Gru" timeDuration="1 hrs 30min" filmType="comedy"/>
            </div>

      </div>
      </section>
    </div>

  )
}

export default English;
