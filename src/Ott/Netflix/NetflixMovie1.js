import React from 'react'
import "./Netflix.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Netflix.css"
import NavbarComp from '../../Components/NavbarComp'
import MovieReviewCard from '../../Components/MovieReviewCard';
import SeasonBtn from '../../Components/SeasonBtn';
import StarCast from '../../Components/StarCast';


function NetflixMovie1() {
  return (
    <>
      <NavbarComp/>

      <div className='Headline mt-2'>
        <font className='PosterTitle' >
            Squid Game
        </font>
      </div>

      <div>
        <MovieReviewCard ImgUrl="https://c4.wallpaperflare.com/wallpaper/529/888/855/squid-game-tv-hd-wallpaper-preview.jpg" />
      </div>
      <div className='row mt-5'>
        <div className='row PostDesc ms-5  col-lg-10 col-md-10 col-sm-10 col-xs-10'>
          <img src='https://www.pinkvilla.com/images/2022-09/squid_game_poster_main.jpg?width=752&t=pvorg' className='Poster ms-5 col-lg-3 col-md-3 col-sm-3 col-xs-3'/>
          <font className='DescTitle col-lg-8 col-md-8 col-sm-8 col-xs-8 ms-3' >
            <h1 className='ms-2 PosterName'>
            Squid Games
            </h1>
            <br/><br/>
            <span className='ms-5'>
              <SeasonBtn SeasonNum="Season 1"/>
            </span>
            <h5 className='Desc mt-5 ms-5'>
            Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whopping 45.6 billion-won prize at stake.
            </h5>
          </font>
        </div>
      </div>
      <div className='Genre col-lg-6 col-md-4 col-sm-4 col-xs-4 mt-5 ms-5'>
        <span className='ms-1'>
          <SeasonBtn SeasonNum="Action"/>
        </span>
        <span className='ms-1'>
          <SeasonBtn SeasonNum="Drama"/>
        </span>
        <span className='ms-1'>
          <SeasonBtn SeasonNum="Mystery"/>
        </span>
        <span className='ms-1'>
          <SeasonBtn SeasonNum="Thriller"/>
        </span>
      </div>
      <div className='row'>
        <font className="CastName ms-5 mt-5">
          Star Cast:
        </font>
          <StarCast/>
      </div>
    </>
  )
}

export default NetflixMovie1
