import React from 'react'
import NavbarComp from '../../Components/NavbarComp'
import { NavLink } from 'react-bootstrap';
import Footer from '../../Components/Footer';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/img1.jpg'
import img3 from '../../images/img3.jpg'
import MarathiCard from '../../Components/MarathiCard'
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
              src={"https://qph.cf2.quoracdn.net/main-qimg-41b42610be83aba4bf7bd36fcfc6d145-lq"}
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

 <MarathiCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Lochya_Zaala_Re_film.jpg/220px-Lochya_Zaala_Re_film.jpg" filmName="Lochya zala re" timeDuration="1 hrs 50 min" filmType="Comedy" />
 <MarathiCard imgUrl="https://m.media-amazon.com/images/M/MV5BMWNiMzMwYzAtYzE0My00MWE1LWE1NDUtMTYxNWY1NmNhYTJiXkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_FMjpg_UX1000_.jpg" filmName="De Dhakka" timeDuration="2 hrs 30 min" filmType="Comedy" />
 <MarathiCard imgUrl="https://images.hungama.com/c/1/415/274/52096616/52096616_180x255.jpg" filmName="DhamDhum" timeDuration="1 hrs 30 min" filmType="Comedy" />
 <MarathiCard imgUrl="https://timesofindia.indiatimes.com/photo/94353527.cms" filmName="Aapdi Thapdi" timeDuration="1 hrs 40 min" filmType="Comedy" />
 <MarathiCard imgUrl="https://i.ytimg.com/vi/lo8n9Y2QlK4/maxresdefault.jpg" filmName="Hawa Hawaii" timeDuration="1 hrs 45 min" filmType="Comedy" />

 <MarathiCard imgUrl="https://qqcdnpictest.mxplay.com/pic/9dd708b0b2ae01fd8d9e64ef2a606817/en/2x3/320x480/test_pic1584082955979.webp" filmName="Gadvach lgn" timeDuration="2 hrs 35 min" filmType="Comedy" />
 <MarathiCard imgUrl="https://akamaividz2.zee5.com/image/upload/w_856,h_482,c_scale,f_webp,q_auto:eco/resources/0-0-1z568055/list/1170x658withlogofb341ef8124545b3b13b04cd121f4951.jpg" filmName="Pandu" timeDuration="1 hrs 35 min" filmType="Comedy" />
 <MarathiCard imgUrl="https://www.wikilistia.com/wp-content/uploads/2020/04/choricha-mamla-marathi-movie-1-528x297.jpg" filmName="Choricha Mamala" timeDuration="1 hrs  min" filmType="Comedy" />
 <MarathiCard imgUrl="https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-yedyanchijatra/portrait/00yedyanchijatracover.jpg" filmName="Yedyanchi Jatra" timeDuration="1 hrs 30 min" filmType="Comedy" />
 <MarathiCard imgUrl="https://upload.wikimedia.org/wikipedia/en/9/92/Timepass_%28film%29.jpg" filmName="Timepass" timeDuration="1 hrs 30 min" filmType="Comedy" />

 <MarathiCard imgUrl="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/phakaat-et00355104-1682314237.jpg" filmName="phakaat" timeDuration="1 hrs 35 min" filmType="Comedy" />
 <MarathiCard imgUrl="https://m.media-amazon.com/images/M/MV5BZjEyNWY4ZWEtNDY3ZC00ZDQwLTgyMGEtMzNlYzNlZjNiYTFhXkEyXkFqcGdeQXVyMzc0ODYyNzk@._V1_.jpg" filmName="Tumch AAcmh jml" timeDuration="1 hrs 22 min" filmType="Comedy" />
 <MarathiCard imgUrl="https://www.wikilistia.com/wp-content/uploads/2020/04/choricha-mamla-marathi-movie-1-528x297.jpg" filmName="Choricha Mamala" timeDuration="1 hrs  min" filmType="Comedy" />
 <MarathiCard imgUrl="https://upload.wikimedia.org/wikipedia/en/5/50/Aga_Bai_Arechyaa_2_-_Marathi_Movie_Poster.jpg" filmName="Yedyanchi Jatra" timeDuration="1 hrs 30 min" filmType="Comedy" />
 <MarathiCard imgUrl="https://images.ottplay.com/posters/Family_420_2022_movie_poster_1.jpg?impolicy=ottplay-20210210" filmName="Family" timeDuration="1 hrs 30 min" filmType="Comedy" />


 <h2 className="heading"><ul>Most Popular Horror Movies :</ul></h2>
 <MarathiCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Lapachhapi_Movie_Release_Poster.jpg/220px-Lapachhapi_Movie_Release_Poster.jpg" filmName="Lapachapi" timeDuration="1 hrs 25 min" filmType="Horror" />
 <MarathiCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Zombivili_Poster.jpeg/220px-Zombivili_Poster.jpeg" filmName="Zomibivli" timeDuration="1 hrs 40 min" filmType="Horror" />
 <MarathiCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4uIIbHSpAh2WuMTuWq3_priMRa3SGmm7aMGyKrbg&usqp=CAE&s" filmName="Kanika" timeDuration="1 hrs 50 min" filmType="Horror" />
 <MarathiCard imgUrl="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRR-o8GAP4qeXMN6Iow1yO0ypQqnZe0qQgfG8wh1T7KLCawJ_Z5" filmName="Baali" timeDuration="1 hrs 25 min" filmType="Horror" />
 <MarathiCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTyAdrnlNb5eHh7YX-OjrAUNAqzmjcwwUMGv5T_1aB&usqp=CAE&s" filmName="BhayBheet" timeDuration="1 hrs 45 min" filmType="Horro" />

 <MarathiCard imgUrl="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRidGCdURQ6646DhsU_MvviaATKj3mjoziuLL7VYJ022EpNujSB" filmName="Aik" timeDuration="1 hrs 30 min" filmType="Horror" />
 <MarathiCard imgUrl="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRouG3TcKJVYutipU_VyCvziPP0vwmQDWX0TBVzyE4sJAa6Ggm5" filmName="Anaavtt" timeDuration="1 hrs 40 min" filmType="Horror" />
 <MarathiCard imgUrl="https://m.media-amazon.com/images/M/MV5BZjM3Mzk4YjItYmM4Ny00MzgzLTg1MWQtZTQyMzNjY2YxYWZmXkEyXkFqcGdeQXVyNzU5MDU3Mjc@._V1_.jpg" filmName="Benvaad" timeDuration="1 hrs 20 min" filmType="Horror" />
 <MarathiCard imgUrl="https://upload.wikimedia.org/wikipedia/en/7/71/Zapatlela_1.jpg" filmName="Zapatlela" timeDuration="1 hrs 40 min" filmType="Horror" />
 <MarathiCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Rahasya_poster.jpg/220px-Rahasya_poster.jpg" filmName="Rahasyya" timeDuration="1 hrs 25 min" filmType="Horror" />

          <Footer />
        </div>
      </section>

    </>
  )
}

export default Marathi