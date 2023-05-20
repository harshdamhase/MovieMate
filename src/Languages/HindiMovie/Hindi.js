import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComp from '../../Components/NavbarComp';
import Carousel from 'react-bootstrap/Carousel'
import './Hindi.css'
import HindiMovieCard from '../../Components/HindiMovieCard';
import img1 from '../../images/banner.png'
import img2 from '../../images/banner-2.jpg'
import img3 from '../../images/banner-3.jpg'
import AboutComp from '../../Components/AboutComp';
import Footer from '../../Components/Footer';


function Hindi() {
  return (
    
    <div>
      <NavbarComp/>
      {/* <section class="catogries-container">
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
        </section>    */}
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
        <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzVj0vBbh4SQmHJQNfHjYB6RjM7ESzXVW8dg&usqp=CAU" filmName="Adipurush" timeDuration="1hrs 40mins" filmType="Action"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWLYsCxa-zkR2AWUdF0MNQ-LR1EwFMCeyj2w&usqp=CAU" filmName="GasLight" timeDuration="1hrs 55mins" filmType="Action"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8mdQXLwEvjk7saSx7qwDcTGlIjVBYvBPdYg&usqp=CAU" filmName="Kuttey" timeDuration="1hrs 40mins" filmType="Action"/>
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
        <div className="row  mx-2 px-5" style={{marginBottom:'10px',}}>
        <div class="col-md-3" >
            <HindiMovieCard imgUrl="https://m.media-amazon.com/images/M/MV5BZTZlNmM3MmQtM2U5NS00MTkzLWI5MGYtYTQ3OWM0OGUwYTk3XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg" filmName="Naina" timeDuration="1hrs 35mins" filmType="Horror"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAn9Tqey7XeNdrk8dzCsGKV8rr3XI-6TAXHg&usqp=CAU" filmName=" Raaz" timeDuration="1hrs 30mins" filmType="Horror"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBCa079OgC06sXSmwwPF-gBEMmNePWeP0zPQ&usqp=CAU" filmName=" Ragini MMS" timeDuration="1hrs 55mins" filmType="Horror"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcOhxgKsZPlujdeTGExxPzXWgWLj5W8KGq6w&usqp=CAU" filmName="Laxmii" timeDuration="1hrs 40mins" filmType="Horror"/>
            </div>


            </div>
            <div className="row  mx-3 px-5" style={{marginBottom:'10px',}}>
        <div class="col-md-3" >
        <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfLjSCp48ZKEmB8zImHvNGavfhK4pTMqOIhA&usqp=CAU" filmName="1920 " timeDuration="1hrs 40mins" filmType="Horror"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMzXCyGJzq0izVvlEk2FuQX3UdSAKO2cp-w&usqp=CAU" filmName="Bhoot Return" timeDuration="1hrs 55mins" filmType="Horror"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmnZEfsKzNROKFcx-IZUB_O2uP1FwuixCNJg&usqp=CAU" filmName="1920: Evil Returns" timeDuration="1hrs 40mins" filmType="Horror"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_nFqfrHriVXnmLukzXv_KhHtwiWcgybRjXQ&usqp=CAU" filmName="Aatma" timeDuration="1hrs 30mins" filmType="Horror"/>
            </div>
            </div>
            </section>

            
            <section class="features" id='comdey' >
            <div class="dis-movie">
        <h1>Comedy Movie</h1>
    </div>
        <div className="row  mx-3 px-5" style={{marginBottom:'10px',}}>
        <div class="col-md-3" >
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaftbMi2JnPNbiTDmMVh5dZYTKWd3y96Lqyw&usqp=CAU" filmName=" 3 Idiots " timeDuration="1hrs 35mins" filmType="Comedy"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxovN_1XZmvtYFDfHX6ch2bWTKwgpTElFiPg&usqp=CAU" filmName="Phir Hera Pheri" timeDuration="1hrs 30mins" filmType="Comedy"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_NzO0-kmtIuhd9haVsllIdfXhUR8nqoZpw&usqp=CAU" filmName="Golmaal Fun Unlimited" timeDuration="1hrs 55mins" filmType="Comedy"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdS9lAkURRNkPuSht5xfhMlKYDHHU-IBzufA&usqp=CAU" filmName="Hungama" timeDuration="1hrs 40mins" filmType="Comedy"/>
            </div>


            </div>
            <div className="row  mx-3 px-5" style={{marginBottom:'10px',}}>
        <div class="col-md-3" >
        <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ355Lh22XZNorp9Ab_LxCE4-80Ev9ASa05iw&usqp=CAU" filmName="Heyy Babyy " timeDuration="1hrs 40mins" filmType="Comedy"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32oqWGNBBuItvpEgjxvsbqba_DMFe1wR81g&usqp=CAU" filmName="Carry On, Munna Bhai" timeDuration="1hrs 55mins" filmType="Comedy"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTbKxx4MowBqpHXNsfe06kPW_kGLGElVlMOA&usqp=CAU" filmName="Welcome" timeDuration="1hrs 40mins" filmType="Comedy"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9DllwXazTnswY28dSjdvoh9K9wKltrJBbZg&usqp=CAU" filmName="Housefull " timeDuration="1hrs 30mins" filmType="Comedy"/>
            </div>
            </div>
            </section>

            <section class="features"id='romantic' >
            <div class="dis-movie">
        <h1>Romantic Movie</h1>
    </div>
        <div className="row  mx-3 px-5" style={{marginBottom:'10px',}}>
        <div class="col-md-3" >
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4EajiDRMhCBuiuDTQRddseTs4Jcci2qFxAg&usqp=CAU" filmName="Shuddh Desi Romance" timeDuration="1hrs 35mins" filmType="Rommantic"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjlgcBo9vP--MwdxY9R1LaMLiJrOX65QWxMQ&usqp=CAU" filmName="Aashiqui 2" timeDuration="1hrs 30mins" filmType="Romantic"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7R5LbOMj2M24Y2Mk_v0W2zKelgBYook1qg&usqp=CAU" filmName="Raanjhanaa" timeDuration="1hrs 55mins" filmType="Romantic"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYR6kEE_pmuL53UiAZpo7whGvMHFIV5ifPBQ&usqp=CAU" filmName="Jannat 2" timeDuration="1hrs 40mins" filmType="Romantic"/>
            </div>


            </div>
            <div className="row  mx-3 px-5" style={{marginBottom:'10px',}}>
        <div class="col-md-3" >
        <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCW4TRPFI32QKqxEITdTCpf325NizpcORwQg&usqp=CAU" filmName="Kuch Kuch Hota Hai" timeDuration="1hrs 40mins" filmType="Romantic"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaigJ6SCBhppkO3hbrZi-eyGpTJ6VwKAzfqA&usqp=CAU" filmName="Dilwale Dulhania Le Jayenge " timeDuration="1hrs 55mins" filmType="Romantic"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShMD1CIG0nJ7yVuDK5y8ttK5tP-gpWVTPfGg&usqp=CAU" filmName="Pyaar to Hona Hi Tha" timeDuration="1hrs 40mins" filmType="Romantic"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvpeNyzJN3dmtd7bmFEOEbaitwuY_nTg9N1A&usqp=CAU" filmName=" Love Aaj Kal" timeDuration="1hrs 30mins" filmType="Romantic"/>
            </div>
            </div>
            </section>

            <section class="features" id='thriller' >
            <div class="dis-movie">
        <h1>Thriller Movie</h1>
    </div>
        <div className="row  mx-3 px-5" style={{marginBottom:'10px',}}>
        <div class="col-md-3" >
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-fZMtvW9UWHt0rlncUJL3vAjysr6P53RCA&usqp=CAU" filmName="Dahaad" timeDuration="1hrs 35mins" filmType="Thriller"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGilNHjNCpYj8OpgjKxwQZ3B-DfBBeBwQ3aA&usqp=CAU" filmName="Pathaan" timeDuration="1hrs 30mins" filmType="Thriller"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRETjUDUCKpO7t2KADs0v1f-IwJy10pLtdMHA&usqp=CAU" filmName="Vikram Vedha" timeDuration="1hrs 55mins" filmType="Thriller"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfbIohDkRf_vD7bXSAbz3_PLgX0T__yxvwCQ&usqp=CAU" filmName="Drishyam 2" timeDuration="1hrs 40mins" filmType="thriller"/>
            </div>


            </div>
            <div className="row  mx-3 px-5" style={{marginBottom:'10px',}}>
        <div class="col-md-3" >
        <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgkcTZif3stQ1NXcrWVgihtPbjrMcuxcAkaA&usqp=CAU" filmName="Gumraah" timeDuration="1hrs 40mins" filmType="Thiller"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDftzstQpRlSD8wwrcwflZ8J_HVvhE2Ht-Xw&usqp=CAU" filmName="Ittefaq " timeDuration="1hrs 55mins" filmType="Thiller"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEte93DyRsnQaqiwecUTCpHOyMGM4RLtM8PA&usqp=CAU" filmName="Wazir" timeDuration="1hrs 40mins" filmType="Thiller"/>
            </div>
            <div class="col-md-3">
            <HindiMovieCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShQOycpEXbVJ199W5IUapv2sKB8ZLYwGXwEg&usqp=CAU" filmName=" Baby" timeDuration="1hrs 30mins" filmType="Romantic"/>
            </div>
            </div>
            </section>
            <Footer/>

      </div>
  )
}

export default Hindi