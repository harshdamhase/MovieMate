import React from 'react'
import NavbarComp from '../../Components/NavbarComp';
import './English.css'

import Carousel from 'react-bootstrap/Carousel'
import EnglishMovieCard from '../../Components/EnglishMovieCard';
import Footer from '../../Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function English() {
  return (
    <div>
      <NavbarComp />
      <div>
        <Carousel>
          <Carousel.Item>
            <img style={{ height: '350px' }}
              className='d-block w-100 carousel-container'
              src={"https://i.ytimg.com/vi/-Qv6p6pTz5I/maxresdefault.jpg"}
              alt='first slide' />
            <Carousel.Caption>
              <h3>Latest Comedy Movies</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img style={{ height: '350px' }}
              className="d-block w-100 carousel-container"
              src={"https://i.ytimg.com/vi/3eGP6im8AZA/maxresdefault.jpg"}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Latest Horror Movies </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{ height: '350px', width: '300px' }}
              className="d-block w-100 carousel-container"
              src={"https://i.ytimg.com/vi/1gcNGiS8ru0/maxresdefault.jpg"} alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className='headline'>Latest Thriller Movies</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Carousel.Item>
          <img
            className='d-block w-100 carousel-container'

            alt='forth slid' />
          <Carousel.Caption>
            <h3 className='headline'>Latest Action Movies</h3>
          </Carousel.Caption>
        </Carousel.Item>

      </div>
      <section class="features" >
        <h2 className="heading"><ul>Most Popular Comedy Movies :</ul></h2>

        <div className="row cardsDiv">

          <EnglishMovieCard imgUrl="https://www.themanual.com/wp-content/uploads/sites/9/2021/12/4ldpbxicygkkr8fghgjklphrfuc.jpg?p=1" filmName="Dumb-Dumber" timeDuration="1hrs 35mins" filmType="Comedy" />
          <EnglishMovieCard imgUrl="https://filmfare.wwmindia.com/content/2021/aug/best-comedy-movies-hollywood-the-dictator.jpg" filmName="Dictator" timeDuration="1hrs 35mins" filmType="Comedy" />
          <EnglishMovieCard imgUrl="https://imgix.ranker.com/node_img/3140/62793346/original/arthur-films-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=125&w=125" filmName="arthur" timeDuration="1hrs 40mins" filmType="comedy" />
          <EnglishMovieCard imgUrl="https://files.delhievents.com/images/events/2016/june/Central-Intelligence-Movie-Poster.jpg" filmName="Central intelligence" timeDuration="1hrs 20mins" filmType="comedy" />
          <EnglishMovieCard imgUrl="https://c8.alamy.com/comp/PMB8P8/moms-night-out-the-new-family-comedy-from-sony-affirm-and-provident-films-poster-PMB8P8.jpg" filmName="Mom's night out" timeDuration="1hrs 50mins" filmType="comedy" />
          <EnglishMovieCard imgUrl="https://filmfare.wwmindia.com/content/2021/aug/best-comedy-movies-hollywood-the-hangover.jpg" filmName="Hangover" timeDuration="1hrs 60mins" filmType="Comedy" />
          <EnglishMovieCard imgUrl="https://m.media-amazon.com/images/I/51XtWylAzmL.jpg" filmName="Operation-fortune" timeDuration="1hrs 54mins" filmType="comedy" />
          <EnglishMovieCard imgUrl="https://i.ytimg.com/vi/S1Hl8HnxnAM/mqdefault.jpg" filmName="Ticket paradise" timeDuration="1hrs 32mins" filmType="comedy" />
          <EnglishMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlfTsJIEpggkIgOwR-CZNsHfGU8l6irrrVVAYJpzDFQlj5zioC" filmName="Bullet Train" timeDuration="2 hrs 10min" filmType="comedy" />
          <EnglishMovieCard imgUrl="https://timesofindia.indiatimes.com/photo/62017358.cms" filmName="Fighting wih family" timeDuration="1 hrs 30min" filmType="comedy" />

          <EnglishMovieCard imgUrl="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/52/1514482013-the-big-sick-movie-1.jpg?resize=480:*" filmName="The bigsic" timeDuration="1 hrs 45min" filmType="comedy" />
          <EnglishMovieCard imgUrl="https://www.scrolldroll.com/wp-content/uploads/2022/10/the-lost-city-english-comedy-movies-of-2022-scaled.jpg" filmName="the lost-city" timeDuration="1 hrs 35min" filmType="comedy" />
          <EnglishMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2MzY1MjM1._V1_.jpg" filmName="Minions: The Rise of Gru" timeDuration="1 hrs 30min" filmType="comedy" />

          <EnglishMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Trsukoqy1GBfmA9qKkjc6p1a4bXAHekWAA&usqp=CAU" filmName="Mr job e carvolle" timeDuration="1 hrs 25min" filmType="comedy" />

          <EnglishMovieCard imgUrl="https://www.beyoung.in/beyoungistan/wp-content/uploads/2023/03/Due-date-1024x709.jpg" filmName="Due Date" timeDuration="1 hrs 55min" filmType="comedy" />

          <h2 className="heading"><ul>Most Popular Horror Movies :</ul></h2>
          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/The_Invitation_%282022_film%29_poster.jpg/220px-The_Invitation_%282022_film%29_poster.jpg" filmName="The Invitation" timeDuration="1 hrs 30min" filmType="Horror" />

          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/5/56/Creep_%282014_film%29_poster.jpg" filmName="Creep" timeDuration="1 hrs 17min" filmType="Horror" />

          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/9/9b/Ouija_two_xxlg.jpeg" filmName="Ouija: Origin of Evil" timeDuration="1 hrs 34min" filmType="Horror" />
          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/1/18/Under_the_Shadow_%28poster%29.jpg" filmName="under the shadow" timeDuration="1 hrs 24min" filmType="Horror" />

          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/5/5c/Apostle_poster.jpg" filmName="Apostle" timeDuration="1 hrs 40min" filmType="Horror" />

          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Smile_%282022_film%29.jpg/220px-Smile_%282022_film%29.jpg" filmName="smile" timeDuration="1 hrs 30min" filmType="Horror" />

          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/3/34/X_%282022_film%29.jpeg/220px-X_%282022_film%29.jpeg" filmName="X 2022" timeDuration="1 hrs 30min" filmType="Horror" />

          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/3/34/TheNunPoster.jpg" filmName="The nun" timeDuration="1 hrs 24min" filmType="Horror" />

          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/American_Psycho.png/220px-American_Psycho.png" filmName="American Psycho" timeDuration="1 hrs 37min" filmType="Horror" />

          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/9/95/Train_to_Busan.jpg" filmName="Train to busan" timeDuration="1 hrs 55min" filmType="Horror" />

          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png" filmName="get out" timeDuration="1 hrs 43min" filmType="Horror" />

          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Peninsula_poster.jpg/220px-Peninsula_poster.jpg" filmName="Peninsula" timeDuration="1 hrs 24min" filmType="Horror" />
          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/OrphanFirstKillPoster.jpg/220px-OrphanFirstKillPoster.jpg" filmName="orphan" timeDuration="1 hrs 17min" filmType="Horror" />
          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/The_Black_Phone.jpg/220px-The_Black_Phone.jpg" filmName="orphan" timeDuration="1 hrs 17min" filmType="Horror" />
          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Twenty_eight_weeks_later.jpg/220px-Twenty_eight_weeks_later.jpg" filmName="28 weeks later" timeDuration="1 hrs 17min" filmType="Horror" />

          <h2 className="heading"><ul>Most Popular Thriller Movies:</ul></h2>

          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Secret_Window_movie.jpg/220px-Secret_Window_movie.jpg" filmName="Secret Window" timeDuration="1 hrs 36 min" filmType="thriller" />

          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/7/76/Shutterislandposter.jpg" filmName="Shutter Island" timeDuration="1 hrs 36 min" filmType="thriller" />

          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Fall_%282022_film%29.jpg/220px-Fall_%282022_film%29.jpg" filmName="Fall" timeDuration="1 hrs 40 min" filmType="thriller" />

          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/0/03/M3GAN_Poster.jpeg" filmName="M3GAN" timeDuration="1 hrs 36 min" filmType="thriller" />

          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/American_Psycho.png/220px-American_Psycho.png" filmName="American Psycho" timeDuration="1 hrs 60 min" filmType="thriller" />

          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Scream2022film.jpeg/220px-Scream2022film.jpeg" filmName="Scream" timeDuration="1 hrs 36 min" filmType="thriller" />

          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Identity_poster.jpg/220px-Identity_poster.jpg" filmName="Identity" timeDuration="1 hrs 60 min" filmType="thriller" />

          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Smile_%282022_film%29.jpg/220px-Smile_%282022_film%29.jpg" filmName="Smile" timeDuration="1 hrs 55 min" filmType="thriller" />

          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/3/34/The_Girl_on_The_Train.jpg" filmName="The Girl on the Train " timeDuration="1 hrs 26 min" filmType="thriller" />

          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Midsommar_%282019_film_poster%29.png/220px-Midsommar_%282019_film_poster%29.png" filmName="midsommar" timeDuration="2 hr 18 min min" filmType="thriller" />

          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Don%27t_Breathe_%282016_film%29.png/220px-Don%27t_Breathe_%282016_film%29.png" filmName="Don't Breathe" timeDuration="1 hrs 28 min" filmType="thriller" />

          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/The_Contractor_%282022_film%29.jpg/220px-The_Contractor_%282022_film%29.jpg" filmName="Scream" timeDuration="1 hrs 36 min" filmType="thriller" />

          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Unbreakableposterwillis.jpg/220px-Unbreakableposterwillis.jpg" filmName="Unbreakable" timeDuration="1 hrs 28 min" filmType="thriller" />

          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/8/80/The_Girl_with_the_Dragon_Tattoo_Poster.jpg" filmName="Scream" timeDuration="1 hrs 36 min" filmType="thriller" />

          <EnglishMovieCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Now_You_See_Me_Poster.jpg/220px-Now_You_See_Me_Poster.jpg" filmName="now you see me" timeDuration="1 hrs 36 min" filmType="thriller" />
   <Footer/>
      </div>

      </section>

    </div>
  )
}
export default English;
