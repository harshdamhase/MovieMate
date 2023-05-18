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
    <section class="features" >
       <h2 className="my-3 " style={{color:'goldenrod',marginLeft:'80px',marginBottom:'10px',backgroundColor:'#737373',width:'88%',height:'45px'}}><span style={{color:'goldenrod',marginLeft:'10px'}}>Most Popular</span></h2>
        <div className="row  mx-3 px-5" style={{marginBottom:'10px',}}>
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

            <section class="features" >
       <h2 className="my-3 " style={{marginLeft:'80px',marginBottom:'10px',backgroundColor:'#737373',width:'88%',height:'45px'}}><span style={{color:'goldenrod',marginLeft:'10px'}}>Horror Movies</span></h2>
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

      </div>
  )
}

export default Hindi