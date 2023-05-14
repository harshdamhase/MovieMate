import React from 'react'
import "./Netflix.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Netflix.css"
import NavbarComp from '../../Components/NavbarComp'
import MovieReviewCard from '../../Components/MovieReviewCard';


function NetflixMovie1() {
  return (
    <>
      <NavbarComp/>

      <div className='Headline mt-5'>
        <font className='PosterTitle' >
            Squid Game
        </font>
      </div>

      <div>
        <MovieReviewCard ImgUrl="https://c4.wallpaperflare.com/wallpaper/529/888/855/squid-game-tv-hd-wallpaper-preview.jpg" />
      </div>
      <div className='row mt-5'>
        <div className='col-lg-9'>
          <img src='https://www.pinkvilla.com/images/2022-09/squid_game_poster_main.jpg?width=752&t=pvorg' className='Poster ms-5'/>
          <span>
            
            <br/>
            <font>
              
            </font>
          </span>
        </div>
      </div>
    </>
  )
}

export default NetflixMovie1
