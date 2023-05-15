import React from 'react'
import "./Netflix.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Netflix.css"
import NavbarComp from '../../Components/NavbarComp'
import MovieReviewCard from '../../Components/MovieReviewCard';
import SeasonBtn from '../../Components/SeasonBtn';
import StarCast from '../../Components/StarCast';
import Photos from '../../Components/Photos';


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
        <div className='row PostDesc p-3'>
          <img src='https://www.pinkvilla.com/images/2022-09/squid_game_poster_main.jpg?width=752&t=pvorg' alt="img" className='Poster ms-5 col-lg-3 col-md-3 col-sm-3 col-xs-3'/>
          <font className='DescTitle col-lg-8 col-md-8 col-sm-8 col-xs-8 ms-3' >
            <h1 className='ms-2 PosterName'>
            Squid Games
            </h1>
            <br/><br/>
            <span className='ms-5'>
              <SeasonBtn SeasonNum="Season 1"/>
            </span>
            <h5 className='Desc mt-3 ms-5'>
            Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whopping 45.6 billion-won prize at stake.
            </h5>
          </font>
        </div>
      </div>
      <div className='Genre col-lg-6 col-md-9 col-sm-9 col-xs-9 mt-5 ms-5'>
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
      <div className='row ms-5'>
        <font className="CastName ms-5 mt-5">
          Star Cast:
        </font>
        <div className='row StarCastDiv ms-5 '>
        <StarCast imgURl="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSpYPqokHLCQA3cQCvv1szjHw_uaHk5h0gPKaeio-kpsw7aitTQdQEEell9OIyiUlUrXfo4FGywM7Prz7g" StarName="
        Lee Jung-jae" StarMovieName="Seong Gi-hun" Episode="10 Episodes" className="Col-lg-3 col-md-6 col-sm-9 col-xs-9" />

        <StarCast imgURl="https://m.media-amazon.com/images/M/MV5BOTAzYjFiN2EtOTc5YS00NzY4LTg5MWItMTU1YmFkZDdjZGMyXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_.jpg" StarName="Park Hae-soo" StarMovieName="Cho Sang-woo" Episode="09 Episodes" className="Col-lg-3 col-md-6 col-sm-9 col-xs-9" />

        <StarCast imgURl="https://media1.popsugar-assets.com/files/thumbor/eBNmC4LmKBdr0rd8UW0YGkLQ-Mc/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2022/07/20/683/n/1922153/tmp_J4BaOJ_511ccd25b956cac1_Hung_Theo_Wargo_Staff.jpg" StarName="Hoyeon" StarMovieName="Kang Sae-byeok" Episode="8 Episodes" className="Col-lg-3 col-md-6 col-sm-9 col-xs-9" />

        <StarCast imgURl="https://upload.wikimedia.org/wikipedia/commons/f/f8/O_Yeong-su_%28%EC%98%A4%EC%98%81%EC%88%98%29%2C_interview%2C_screenshot_1.png" StarName="Oh Yeong-su" StarMovieName="Oh Il-nam" Episode="08 Episodes" className="Col-lg-3 col-md-6 col-sm-9 col-xs-9" />

        <StarCast imgURl="https://i.pinimg.com/originals/86/e0/83/86e08356cd8036731b644815f6f927ea.jpg" StarName="
        Wi Ha-joon" StarMovieName="Hwang Jun-ho" Episode="07 Episodes" className="Col-lg-3 col-md-6 col-sm-9 col-xs-9" />

        <StarCast imgURl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4BpBJg1Idxxe6wK68JwZbnhxSG5S6NlWn3sQGAmAANw6nbIR4eOfKUM8uVMaQchbi_M&usqp=CAU" StarName="Heo Sung-tae" StarMovieName="Jang Deok-su" Episode="07 Episodes" className="Col-lg-3 col-md-6 col-sm-9 col-xs-9" />
      </div>
      </div>

      <hr className='HRow'/>

      <div>
        <div className='Photos'>
          Photos
        </div>

        <div>
          <Photos imgURl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFRGByRxYb38LD6tOAMdzkdaPwmhX0jJdD3mIOlFd_m0CyFIBDDlOw1NjOTGLtM0RYnmE&usqp=CAU"/>
        </div>
      </div>
    </>
  )
}

export default NetflixMovie1
