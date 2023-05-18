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
            <EnglishMovieCard imgUrl="https://c8.alamy.com/comp/PMB8P8/moms-night-out-the-new-family-comedy-from-sony-affirm-and-provident-films-poster-PMB8P8.jpg" filmName="Mom's night out" timeDuration="1hrs 50mins" filmType="comedy" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://filmfare.wwmindia.com/content/2021/aug/best-comedy-movies-hollywood-the-hangover.jpg" filmName="Hangover" timeDuration="1hrs 60mins" filmType="Comedy" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://m.media-amazon.com/images/I/51XtWylAzmL.jpg" filmName="Operation-fortune" timeDuration="1hrs 54mins" filmType="comedy" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://i.ytimg.com/vi/S1Hl8HnxnAM/mqdefault.jpg" filmName="Ticket paradise" timeDuration="1hrs 32mins" filmType="comedy" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlfTsJIEpggkIgOwR-CZNsHfGU8l6irrrVVAYJpzDFQlj5zioC" filmName="Bullet Train" timeDuration="2 hrs 10min" filmType="comedy" />
          </div>


          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://timesofindia.indiatimes.com/photo/62017358.cms" filmName="Fighting wih family" timeDuration="1 hrs 30min" filmType="comedy" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/52/1514482013-the-big-sick-movie-1.jpg?resize=480:*" filmName="The bigsic" timeDuration="1 hrs 45min" filmType="Romentic-comedy" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://www.scrolldroll.com/wp-content/uploads/2022/10/the-lost-city-english-comedy-movies-of-2022-scaled.jpg" filmName="the lost-city" timeDuration="1 hrs 35min" filmType="comedy" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2MzY1MjM1._V1_.jpg" filmName="Minions: The Rise of Gru" timeDuration="1 hrs 30min" filmType="comedy" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://files.delhievents.com/images/events/2016/july/Bad-Moms-Movie-Poster.jpg" filmName="Bad moms" timeDuration="1 hrs 25min" filmType="comedy" />
          </div>

          <h2 className="my-3">Most Popular Horror Movies</h2>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/The_Invitation_%282022_film%29_poster.jpg/220px-The_Invitation_%282022_film%29_poster.jpg" filmName="The Invitation" timeDuration="1 hrs 30min" filmType="Horror" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/5/56/Creep_%282014_film%29_poster.jpg" filmName="Creep" timeDuration="1 hrs 17min" filmType="Horror" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/9/9b/Ouija_two_xxlg.jpeg" filmName="Ouija: Origin of Evil" timeDuration="1 hrs 34min" filmType="Horror" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/1/18/Under_the_Shadow_%28poster%29.jpg" filmName="under the shadow" timeDuration="1 hrs 24min" filmType="Horror" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/5/5c/Apostle_poster.jpg" filmName="Apostle" timeDuration="1 hrs 40min" filmType="Horror" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Smile_%282022_film%29.jpg/220px-Smile_%282022_film%29.jpg" filmName="smile" timeDuration="1 hrs 30min" filmType="Horror" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/3/34/X_%282022_film%29.jpeg/220px-X_%282022_film%29.jpeg" filmName="X 2022" timeDuration="1 hrs 30min" filmType="Horror" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/3/34/TheNunPoster.jpg" filmName="The nun" timeDuration="1 hrs 24min" filmType="Horror" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/American_Psycho.png/220px-American_Psycho.png" filmName="American Psycho" timeDuration="1 hrs 37min" filmType="Horror" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/9/95/Train_to_Busan.jpg" filmName="Train to busan" timeDuration="1 hrs 55min" filmType="Horror" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png" filmName="get out" timeDuration="1 hrs 43min" filmType="Horror" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Peninsula_poster.jpg/220px-Peninsula_poster.jpg" filmName="Peninsula" timeDuration="1 hrs 24min" filmType="Horror" />
          </div>

          <h2 className="my-3">Most Popular Thriller Movies</h2>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Secret_Window_movie.jpg/220px-Secret_Window_movie.jpg" filmName="Secret Window" timeDuration="1 hrs 36 min" filmType="thriller" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/7/76/Shutterislandposter.jpg" filmName="Shutter Island" timeDuration="1 hrs 36 min" filmType="thriller" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Fall_%282022_film%29.jpg/220px-Fall_%282022_film%29.jpg" filmName="Fall" timeDuration="1 hrs 40 min" filmType="thriller" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/0/03/M3GAN_Poster.jpeg" filmName="M3GAN" timeDuration="1 hrs 36 min" filmType="thriller" />
          </div>


          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/American_Psycho.png/220px-American_Psycho.png" filmName="American Psycho" timeDuration="1 hrs 60 min" filmType="thriller" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Scream2022film.jpeg/220px-Scream2022film.jpeg" filmName="Scream" timeDuration="1 hrs 36 min" filmType="thriller" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Identity_poster.jpg/220px-Identity_poster.jpg" filmName="Identity" timeDuration="1 hrs 60 min" filmType="thriller" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Smile_%282022_film%29.jpg/220px-Smile_%282022_film%29.jpg" filmName="Smile" timeDuration="1 hrs 55 min" filmType="thriller" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/3/34/The_Girl_on_The_Train.jpg" filmName="The Girl on the Train " timeDuration="1 hrs 26 min" filmType="thriller" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Midsommar_%282019_film_poster%29.png/220px-Midsommar_%282019_film_poster%29.png" filmName="midsommar" timeDuration="2 hr 18 min min" filmType="thriller" />
          </div>

          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Don%27t_Breathe_%282016_film%29.png/220px-Don%27t_Breathe_%282016_film%29.png" filmName="Don't Breathe" timeDuration="1 hrs 28 min" filmType="thriller" />
          </div>


          <div class="col-md-3">
            <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/The_Contractor_%282022_film%29.jpg/220px-The_Contractor_%282022_film%29.jpg" filmName="Scream" timeDuration="1 hrs 36 min" filmType="thriller" />
          </div>

        </div>

      </section>

    </div>
  )
}
export default English;
