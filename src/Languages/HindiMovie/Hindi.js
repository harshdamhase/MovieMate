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
       <h2 className="my-3" style={{color:'goldenrod',marginLeft:'90px',marginBottom:'10px'}}>Most Popular</h2>
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


      </div>
  )
}

export default Hindi