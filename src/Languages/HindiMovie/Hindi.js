import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComp from '../../Components/NavbarComp';
import Carousel from 'react-bootstrap/Carousel'
import './Hindi.css'
import HindiMovieCard from '../../Components/HindiMovieCard';
import img1 from '../../images/banner.png'
import img2 from '../../images/banner-2.jpg'
import img3 from '../../images/banner-3.jpg'


function Hindi() {
  return (
    
    <div>
      <NavbarComp/>
      <section class="catogries-container">
            <div class="catogries">
               <a href='#thriller'> <img class="catogries-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbegz-CSesxeX5SzVbc79N4Hm6myseoQ_4ig&usqp=CAU" alt=""/></a>
              <h4 class="catogries-name">Thiller 
              </h4>
            </div>
            <div class="catogries">
               <a href='#comdey'><img class="catogries-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTthNBisieHdjzuEHIiedHBYEjNH16-lXCNwA&usqp=CAU" alt=""/></a> 
                <h4 class="catogries-name">Comedy 
                </h4>
            </div>
            <div class="catogries">
               <a href='#horror'> <img class="catogries-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSECGfAJ6I81wkrTl6xtoqLZfU3TJULQl6KbA&usqp=CAU" alt=""/></a>
                <h4 class="catogries-name">Horror
                </h4>
            </div>

            <div class="catogries" >
               <a href='#romantic'><img class="catogries-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48X6lXCoeFedPDsUBJvAf45HZgerIIxyS-g&usqp=CAU" alt=""/></a> 
                <h4 class="catogries-name">Romantic
                </h4>
            </div>
            <div class="catogries">
               <a href='#action'> <img class="catogries-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAIYWoiZzKYtCT1ywl0KMxDRaZKwg898tioQ&usqp=CAU" alt=""/></a>
                <h4 class="catogries-name">Action
                </h4>
            </div>
        </section>   
    <div>
    <Carousel>
      <Carousel.Item>
        <img  style={{height:'350px'}}
          className="d-block w-100 carousel-container"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Latest Thriller Movies</h3>
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
          <h3>Latest Comedy Movies</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <section class="features" id='action' >
    <div class="dis-movie">
        <h1>Popular Movie</h1>
    </div>
    
        <div className="row  mx-3 px-5 " style={{marginBottom:'10px'}}>
        <div class="col-md-3" >
            <HindiMovieCard imgUrl="https://dotmovies.bio/wp-content/uploads/2023/05/The-Kerala-Story.jpg" filmName="The Kerala Story" timeDuration="1hrs 35mins" filmType="Action"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://dotmovies.bio/wp-content/uploads/2023/05/IB-71-2023-poster.jpeg" filmName="IB71" timeDuration="1hrs 30mins" filmType="Action"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://dotmovies.bio/wp-content/uploads/2023/01/Mission-Majnu-2023.jpg" filmName="Mission Majnu" timeDuration="1hrs 55mins" filmType="Love story"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://dotmovies.bio/wp-content/uploads/2023/04/Bholaa.jpg" filmName="Bholaa" timeDuration="1hrs 40mins" filmType="Action"/>
            </div>


            </div>
            <div className="row  mx-3 px-5" style={{marginBottom:'10px',}}>
        <div class="col-md-3" >
        <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEg1j96OAY3jKHDIec3bkBhU4tBYnOkfRb_w&usqp=CAU" filmName="Adipurush" timeDuration="1hrs 40mins" filmType="Action"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://dotmovies.bio/wp-content/uploads/2023/03/Gaslight-Poster-165x248.jpg" filmName="GasLight" timeDuration="1hrs 55mins" filmType="Action"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqXWurJYHBef-vtNkFIsaHAHgw_G7B3ZW7PA&usqp=CAU" filmName="Kuttey" timeDuration="1hrs 40mins" filmType="Action"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDj28IvSemw0mWHWK1vwG1VxoT2_v4xXZC4g&usqp=CAU" filmName="Shehzada" timeDuration="1hrs 30mins" filmType="Love story"/>
            </div>
            </div>
            </section>

            <section class="features" id='horror' >
            <div class="dis-movie">
        <h1>Horror Movie</h1>
    </div>
        <div className="row  mx-3 px-5" style={{marginBottom:'10px',}}>
        <div class="col-md-3" >
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BZTZlNmM3MmQtM2U5NS00MTkzLWI5MGYtYTQ3OWM0OGUwYTk3XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR2,0,140,209_AL_.jpg" filmName="Naina" timeDuration="1hrs 35mins" filmType="Horror"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BM2JkYTJjODAtZjYwZS00NTU0LTg1YjAtYzY4YTYxN2VkMTk3XkEyXkFqcGdeQXVyMzc0NzU5MTc@._V1_UY209_CR2,0,140,209_AL_.jpg" filmName=" Raaz" timeDuration="1hrs 30mins" filmType="Horror"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BODk1NzZiNTktZmIzMi00NzM1LTllMGEtOTg1NWE4NTUwZmIxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR3,0,140,209_AL_.jpg" filmName=" Ragini MMS" timeDuration="1hrs 55mins" filmType="Horror"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BZWE3Nzc1MWMtMTczZS00M2Q4LTgyYTMtODE2MzY2NTkzZTA3XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR3,0,140,209_AL_.jpg" filmName="Ragini MMS 2" timeDuration="1hrs 40mins" filmType="Horror"/>
            </div>


            </div>
            <div className="row  mx-3 px-5" style={{marginBottom:'10px',}}>
        <div class="col-md-3" >
        <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BNjQ2N2QzYzktZGNjYy00ZTUyLWE2ZjYtMTEzZGY4YzIwNTJlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR3,0,140,209_AL_.jpg" filmName="1920 " timeDuration="1hrs 40mins" filmType="Horror"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BYzg3ZjRlYjgtOGJkNy00MThkLThhY2UtMDdhMDZhMTc2NDFlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR3,0,140,209_AL_.jpg" filmName="Raaz 3" timeDuration="1hrs 55mins" filmType="Horror"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BNjEwYTBlZjktYjczZS00ZGQ0LWJlNWItMDE1YjMzNmFhNWIxXkEyXkFqcGdeQXVyNDMxMjY3NDA@._V1_UY209_CR69,0,140,209_AL_.jpg" filmName="1920: Evil Returns" timeDuration="1hrs 40mins" filmType="Horror"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BYzYwYjg1NTctODRlNC00YzQ3LWJjNmItMWI4ODkyOGY3ZWZiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY209_CR2,0,140,209_AL_.jpg" filmName="Aatma" timeDuration="1hrs 30mins" filmType="Horror"/>
            </div>
            </div>
            </section>

            
            <section class="features" id='comdey' >
            <div class="dis-movie">
        <h1>Comedy Movie</h1>
    </div>
        <div className="row  mx-3 px-5" style={{marginBottom:'10px',}}>
        <div class="col-md-3" >
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR2,0,140,209_AL_.jpg" filmName=" 3 Idiots " timeDuration="1hrs 35mins" filmType="Comedy"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BNzgzYjZjYzMtNjcyYy00NWI3LTg1NDItOTMzMzdhMjhjNWExXkEyXkFqcGdeQXVyNjA3OTI5MjA@._V1_UY209_CR0,0,140,209_AL_.jpg" filmName="Phir Hera Pheri" timeDuration="1hrs 30mins" filmType="Comedy"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BYmE3YmNiM2YtM2MxMi00ZDhmLTk1ZTQtODdjOWY4YjVkYThmXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY209_CR6,0,140,209_AL_.jpg" filmName="Golmaal Fun Unlimited" timeDuration="1hrs 55mins" filmType="Comedy"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BNTVjMWY5MGUtNjU2MS00NzgxLWJhZWUtM2VjMDE4YWRkOWFjXkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_UY209_CR2,0,140,209_AL_.jpg" filmName="Hungama" timeDuration="1hrs 40mins" filmType="Comedy"/>
            </div>


            </div>
            <div className="row  mx-3 px-5" style={{marginBottom:'10px',}}>
        <div class="col-md-3" >
        <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BMTY1OTc2MTY3M15BMl5BanBnXkFtZTgwMDgxMTA2MDE@._V1_UY209_CR2,0,140,209_AL_.jpg" filmName="Heyy Babyy " timeDuration="1hrs 40mins" filmType="Comedy"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BN2ZmMDMwODgtMzA5MS00MGU0LWEyYTgtYzQ5MmQzMzU2NTVkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR2,0,140,209_AL_.jpg" filmName="Carry On, Munna Bhai" timeDuration="1hrs 55mins" filmType="Comedy"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BZjcyOTViMzUtOWQ5Yy00ZTVmLWJmYzctN2U2OGVlN2ZjNTA0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR2,0,140,209_AL_.jpg" filmName="Welcome" timeDuration="1hrs 40mins" filmType="Comedy"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BMDlkMmRkM2QtYmZiMi00NWYzLThmMjEtN2IwMTNhMDFkODA0XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_UY209_CR2,0,140,209_AL_.jpg" filmName="Housefull " timeDuration="1hrs 30mins" filmType="Comedy"/>
            </div>
            </div>
            </section>

            <section class="features"id='romantic' >
            <div class="dis-movie">
        <h1>Romantic Movie</h1>
    </div>
        <div className="row  mx-3 px-5" style={{marginBottom:'10px',}}>
        <div class="col-md-3" >
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BMTU0NjI2MTI0Ml5BMl5BanBnXkFtZTcwNjI4MzY5OQ@@._V1_UY209_CR6,0,140,209_AL_.jpg" filmName="Shuddh Desi Romance" timeDuration="1hrs 35mins" filmType="Rommantic"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BMjEzNzczNTg2M15BMl5BanBnXkFtZTcwMjUxNjk0OQ@@._V1_UY209_CR3,0,140,209_AL_.jpg" filmName="Aashiqui 2" timeDuration="1hrs 30mins" filmType="Romantic"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BN2MzYWI2OGQtNzgxNi00ZjNiLWI1NTQtZWUyNWNiZDEyODFmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR2,0,140,209_AL_.jpg" filmName="Raanjhanaa" timeDuration="1hrs 55mins" filmType="Romantic"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BMmI5MTY0OWQtN2RmYi00NjA0LTg3NTYtYjgwZTJmMWNmNmFjXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_UY209_CR8,0,140,209_AL_.jpg" filmName="Jannat 2" timeDuration="1hrs 40mins" filmType="Romantic"/>
            </div>


            </div>
            <div className="row  mx-3 px-5" style={{marginBottom:'10px',}}>
        <div class="col-md-3" >
        <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BNGNhNWMwNTgtZmNlOS00OGM3LWIxYzItOWQwZDJjMzQ3MzRlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR3,0,140,209_AL_.jpg" filmName="Kuch Kuch Hota Hai" timeDuration="1hrs 40mins" filmType="Romantic"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BMDQ2ZmE2NTMtZDE3NC00YzFjLWJhNmEtMDEzMTI5ZjU2ZGM0XkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_UY209_CR8,0,140,209_AL_.jpg" filmName="Dilwale Dulhania Le Jayenge " timeDuration="1hrs 55mins" filmType="Romantic"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BYTExZWIwNzAtODg2Ny00NGFiLTgxN2ItMmRiYTM2ZTcwYmM4XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR1,0,140,209_AL_.jpg" filmName="Pyaar to Hona Hi Tha" timeDuration="1hrs 40mins" filmType="Romantic"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BODVhZWEyOGYtN2E4MC00MTMyLWJmM2ItNTFlNWVlZmYyMTg4XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_UY209_CR2,0,140,209_AL_.jpg" filmName=" Love Aaj Kal" timeDuration="1hrs 30mins" filmType="Romantic"/>
            </div>
            </div>
            </section>

            <section class="features" id='thriller' >
            <div class="dis-movie">
        <h1>Thriller Movie</h1>
    </div>
        <div className="row  mx-3 px-5" style={{marginBottom:'10px',}}>
        <div class="col-md-3" >
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BMmI4ODI4ZTQtMzVlMS00YTcxLTlkYmMtZGFmYWFiYTA3ZDM5XkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_UY98_CR6,0,67,98_AL_.jpg" filmName="Dahaad" timeDuration="1hrs 35mins" filmType="Thriller"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BMThkZmNlMzQtZmU4Ny00YzhkLWE5YWYtOGJjNjRjODNjMzZkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY98_CR2,0,67,98_AL_.jpg" filmName="Pathaan" timeDuration="1hrs 30mins" filmType="Thriller"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BYTEyYjgzNmUtM2QyYi00MWMwLWExMDctZmY1NmZhNGY5MWNiXkEyXkFqcGdeQXVyOTcwMTQxMTM@._V1_UY98_CR5,0,67,98_AL_.jpg" filmName="Vikram Vedha" timeDuration="1hrs 55mins" filmType="Thriller"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BYmY2ZDUxNzUtYWZlYy00MThhLWI5NjktZDhjZTU3MDY5YTM3XkEyXkFqcGdeQXVyNTYxMDgzODI@._V1_UY98_CR5,0,67,98_AL_.jpg" filmName="Drishyam 2" timeDuration="1hrs 40mins" filmType="thriller"/>
            </div>


            </div>
            <div className="row  mx-3 px-5" style={{marginBottom:'10px',}}>
        <div class="col-md-3" >
        <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BNGNhNWMwNTgtZmNlOS00OGM3LWIxYzItOWQwZDJjMzQ3MzRlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR3,0,140,209_AL_.jpg" filmName="Kuch Kuch Hota Hai" timeDuration="1hrs 40mins" filmType="Romantic"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BMDQ2ZmE2NTMtZDE3NC00YzFjLWJhNmEtMDEzMTI5ZjU2ZGM0XkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_UY209_CR8,0,140,209_AL_.jpg" filmName="Dilwale Dulhania Le Jayenge " timeDuration="1hrs 55mins" filmType="Romantic"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BYTExZWIwNzAtODg2Ny00NGFiLTgxN2ItMmRiYTM2ZTcwYmM4XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR1,0,140,209_AL_.jpg" filmName="Pyaar to Hona Hi Tha" timeDuration="1hrs 40mins" filmType="Romantic"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BODVhZWEyOGYtN2E4MC00MTMyLWJmM2ItNTFlNWVlZmYyMTg4XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_UY209_CR2,0,140,209_AL_.jpg" filmName=" Love Aaj Kal" timeDuration="1hrs 30mins" filmType="Romantic"/>
            </div>
            </div>
            </section>



      </div>
  )
}

export default Hindi