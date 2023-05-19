import React from 'react'
import "./Amazon.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import NavbarComp from '../../Components/NavbarComp'
import MovieReviewCard from '../../Components/MovieReviewCard';
import SeasonBtn from '../../Components/SeasonBtn';
import AmazonStarCasts from '../../Components/AmazonStarCasts';
import EpisodeCard from '../../Components/EpisodeCard';
import Keybtn from '../../Components/Keybtn';
import DetailsNetflix from '../../Components/DetailsNetflix';
import Footer from '../../Components/Footer';

function AmazonMovie1() {
  return (
    <>
    <div id='NavBarDiv'>
        <NavbarComp/>
        <div className='Headline'>
          <font className='PosterTitle' >
              Amazon Prime | Sonic The Hedgehog
          </font>
        </div>
        <div>
          <MovieReviewCard ImgUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgamingtrend.com%2Fnews%2Fstuck-at-home-sonic-the-hedgehog-movie-gets-an-early-home-video-release-this-month%2F&psig=AOvVaw17CNf54Twz6EevU_rAAGGr&ust=1684585710692000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNiepvmwgf8CFQAAAAAdAAAAABAE" />
        </div>
      </div>

      <div className='row mt-2'>
        <div className='row PostDesc p-3'>
          <img src='https://m.media-amazon.com/images/M/MV5BZjZkY2YxYTgtYmVkOC00NTgwLThjY2YtN2Y1ZWFlZmVhOTQ5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg' alt="img" className='Poster ms-5 col-lg-3 col-md-3 col-sm-3 col-xs-3'/>
          <font className='DescTitle col-lg-8 col-md-8 col-sm-8 col-xs-8 ms-3' >
            <h1 className='ms-2 PosterName'>
            Sonic The Hedgehog
            </h1>
            <br/><br/>
            <span className='ms-5'>
              <SeasonBtn SeasonNum="Season 1"/>
            </span>
            <h5 className='Desc mt-3 ms-5'>
              <font className='ReleaseDateFont'>Release Date: 25 January 2020</font>
              <br/><br/>
              Powered with incredible speed, Sonic The Hedgehog embraces his new home on Earth. 
              That is, until Sonic sparks the attention of super-uncool evil genius Dr. Robotnik.
               Now it's super-villain vs. super-sonic in an all-out race across the globe to stop Robotnik from using Sonic's 
               unique power for world domination.
            </h5>
            <div className='Genre col-lg-8 col-md-9 col-sm-9 col-xs-9 mt-5 '>
              <span className='ms-1 mb-3'>
                <SeasonBtn SeasonNum="Action"/>
              </span>
              <span className='ms-1'>
                <SeasonBtn SeasonNum="Drama"/>
              </span>
              <span className='ms-1'>
                <SeasonBtn SeasonNum="Comedy"/>
              </span>
              <span className='ms-1'>
                <SeasonBtn SeasonNum="Adventure"/>
              </span>
            </div>
          </font>
        </div>
      </div>

      <div className='row WatchTrailerDiv'>
        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-8'>
        <Link to="https://youtu.be/szby7ZHLnkA" className='WatchTrailer mt-3 ms-5'>Watch Now ▶️ Trailer </Link>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-8'>
        <Link to="/BookTicket" className='WatchTrailer mt-3 ms-5'> Amazon Prime Video</Link>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-8'>
        <Link to="/" className='WatchTrailer mt-3 ms-5'>Add To Watchlist 📃</Link>
        </div>
        {/* // <WatchTrailer WatchTrailerBtn="Season 1"/> */}
      </div>
      

      <hr className='HRow'/>
      
      <div className='row ms-5'>
        <font className="CastName ms-5 mt-2">
          Star Cast:
        </font>
        <div className='row StarCastDiv'>
          <AmazonStarCasts imgURl="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Manoj_Bajpai_at_52nd_IFFI.jpg/344px-Manoj_Bajpai_at_52nd_IFFI.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Manoj_Bajpayee' className='StarCastText'>Manoj Bajpayee</a>} StarMovieName="Srikant Tiwari (Sri)"  className="Col-lg-3 col-md-9 col-sm-9 col-xs-9" />

          <AmazonStarCasts imgURl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Sharib_Hashmi.jpg/381px-Sharib_Hashmi.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Park_Hae-soo' className='StarCastText' >Sharib Hashmi</a>} StarMovieName="Jayavant Kashinath JK Talpade" className="col-lg-3 col-md-9 col-sm-9 col-xs-9" />

          <AmazonStarCasts imgURl="https://upload.wikimedia.org/wikipedia/commons/2/20/Priyamani_at_Filmfare_Awards_South_%28cropped%29.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Priyamani' className='StarCastText'>Priyamani</a>} StarMovieName="Suchitra Tiwari (Suchi)"  className="Col-lg-3 col-md-9 col-sm-9 col-xs-9" />

          <AmazonStarCasts imgURl="https://upload.wikimedia.org/wikipedia/commons/d/d9/Dalip_Tahil_still7_%28cropped%29_%28cropped%29.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Dalip_Tahil' className='StarCastText' >Dalip Tahil</a>} StarMovieName="Kulkarni"  className=" Col-lg-3 col-md-6 col-sm-9 col-xs-9" />

          <AmazonStarCasts imgURl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Sharad_Kelkar_at_Zee_Rishtey_Awards_2012.jpg/392px-Sharad_Kelkar_at_Zee_Rishtey_Awards_2012.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Sharad_Kelkar' className='StarCastText'>Sharad Kelkar</a>} StarMovieName="Arvind"  className=" Col-lg-3 col-md-9 col-sm-9 col-xs-9" />

          <AmazonStarCasts imgURl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Darshan_at_61st_Filmfare_Awards.jpg/318px-Darshan_at_61st_Filmfare_Awards.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Darshan_Kumar' className='StarCastText'>Darshan Kumar</a>} StarMovieName="Major Sameer"  className=" Col-lg-3 col-md-9 col-sm-9 col-xs-9" />
        </div>
      </div>

      <hr className='HRow'/>

      <div className='row EpisodeCardDiv ms-5'>
      <font className="CastName ms-5 mt-2 ps-5">
          10 EPISODES
        </font>
        <div >
          <EpisodeCard EpisodeName="Movie Series" EpisodeKeyword="Sonic the Hedgehog (2020) " EpisodeContent="Powered with incredible speed, Sonic The Hedgehog embraces his new home on Earth. That is, until Sonic sparks the attention of super-uncool evil genius Dr. Robotnik. Now it's super-villain vs. super-sonic in an all-out race across the globe to stop Robotnik from using Sonic's unique power for world domination." />
        </div>

        <div >
        <EpisodeCard EpisodeName="Movie Series"   EpisodeKeyword="Sonic the Hedgehog 2(2022)" EpisodeContent="After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands." />
        </div>

        <div>
        <EpisodeCard EpisodeName="Movie Series"   EpisodeKeyword="Sonic the Hedgehog 3 (2024) [Upcoming....]" EpisodeContent="After defeating Robotnik, Sonic discovers that a project named “Project Shadow” has escaped from the military and started wrecking havoc in town, Sonic, Tails and Knuckles team up to defeat Shadow, Shadow desires to honor the legacy of Maria and demands the location of the legendary “Fleetway Emerald,, an ancient relic that allows its possessor to unleash ultimate power." />
        </div>

      </div>

      <hr className='HRow'/>

      <div className=''>
        <div className="CastName ms-5 ps-5">
          Storyline
        </div>
        <div className=' ms-5 ps-5 col-lg-10 col-md-8 col-sm-8 col-xs-8 Storyline'>
        Sonic the Hedgehog is the titular character and primary protagonist of the Sonic the Hedgehog video game 
        series published by Sega, as well as numerous spin-off comics, animations and other sources of media. Sonic 
        is a blue anthropomorphic hedgehog who can run at supersonic speeds and curl into a ball, primarily to attack
         enemies. In most games, Sonic must race through levels, collecting power-up rings and avoiding obstacles and 
         enemies. Programmer Yuji Naka and artist Naoto Ohshima are generally credited with creating Sonic. Most of the
          games are developed by Sonic Team. The original Sonic the Hedgehog 1991 was released to provide Sega with a 
          mascot to rival Nintendo's flagship character Mario. Sonic was redesigned by Yuji Uekawa for Sonic Adventure 
          1998, with a more mature look designed to appeal to older players. Sonic is one of the world's best-known video 
          game characters and a gaming icon. His series had sold more than 80 million copies by 2011. In 2005, Sonic was one 
          of the first game character inductees into the Walk of Game alongside Mario, Link, and Master Chief.
        </div>
        <div className='ms-5 ps-5 mt-3 '>
          <Link to="#" className='PlotSummary'></Link>
        </div>
      </div>

      <hr className='HRow'/>

      <div>
        <div className="CastName ms-5 ps-5">
          Details:
        </div>
        <DetailsNetflix DetailsInfo="Created by	:" Details="Raj & DK"/>
        <DetailsNetflix DetailsInfo="Written by :" Details="Raj & DK, Suman Kumar"/>
        <DetailsNetflix DetailsInfo="Languages :" Details="Hindi"/>
        <DetailsNetflix DetailsInfo="Original release :" Details="20 September 2019"/>
      </div>

      <div>
        <Footer/>
      </div>
      

      <div className=" fixed-bottom" >
        <a href='#NavBarDiv' className='BacktoTop' >
        <Keybtn Keywords="Back To Top" />
        </a>
      </div>
    </>

  )
}

export default AmazonMovie1
