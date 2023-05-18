import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavbarComp from '../../Components/NavbarComp';
import './English.css'
import img1 from '../../images/poster-1.jpg'
import img2 from '../../images/poster-2.jpg'
import img3 from '../../images/poster-3.png'
import Carousel from 'react-bootstrap/Carousel'
import EnglishMovieCard from '../../Components/EnglishMovieCard';
import Footer from '../../Components/Footer';
import { NavLink } from 'react-bootstrap';
import { useState } from 'react';

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
              src={img3} alt="Third slide"
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
            <EnglishMovieCard imgUrl="https://www.themanual.com/wp-content/uploads/sites/9/2021/12/4ldpbxicygkkr8fghgjklphrfuc.jpg?p=1" filmName="Dumb-Dumber" timeDuration="1hrs 35mins" filmType="Comedy" />
             </div>

            <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://imgix.ranker.com/node_img/3140/62793346/original/arthur-films-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=125&w=125" filmName="arthur" timeDuration="1hrs 40mins" filmType="comedy-romentic" />
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

       <h2 className="my-3">Most Popular Horror Movies</h2>
     
      <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/The_Invitation_%282022_film%29_poster.jpg/220px-The_Invitation_%282022_film%29_poster.jpg" filmName="The Invitation" timeDuration="1 hrs 30min" filmType="Horror"/>
            </div>

            <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/5/56/Creep_%282014_film%29_poster.jpg" filmName="Creep" timeDuration="1 hrs 17min" filmType="Horror"/>
            </div>

            <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/9/9b/Ouija_two_xxlg.jpeg" filmName="Ouija: Origin of Evil" timeDuration="1 hrs 34min" filmType="Horror"/>
            </div>

            <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/1/18/Under_the_Shadow_%28poster%29.jpg" filmName="under the shadow" timeDuration="1 hrs 24min" filmType="Horror"/>
            </div>

            <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/5/5c/Apostle_poster.jpg" filmName="Apostle" timeDuration="1 hrs 40min" filmType="Horror"/>
            </div>
    
            <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/5/5c/Apostle_poster.jpg" filmName="The silence" timeDuration="1 hrs 30min" filmType="Horror"/>
            </div>
    
            <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/5/5c/Apostle_poster.jpg" filmName="CARGo" timeDuration="1 hrs 30min" filmType="Horror"/>
            </div>
    
            <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/5/5c/Apostle_poster.jpg" filmName="The silence" timeDuration="1 hrs 30min" filmType="Horror"/>
            </div>
    
            </div>

            </section>

      </div>
  )
}
export default English;
