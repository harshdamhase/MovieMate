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

function AmazonMovie2() {
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
          <MovieReviewCard ImgUrl="https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2020/03/13050006/lrDyljrQ.jpeg" />
        </div>
      </div>

      <div className='row mt-2'>
        <div className='row PostDesc p-3'>
          <img src='https://www.themoviedb.org/t/p/original/a1KFPJtTmT5VlCvANsTQF7IA5y.jpg' alt="img" className='Poster ms-5 col-lg-3 col-md-3 col-sm-3 col-xs-3'/>
          <font className='DescTitle col-lg-8 col-md-8 col-sm-8 col-xs-8 ms-3' >
            <h1 className='ms-2 PosterName'>
            Sonic The Hedgehog
            </h1>
            <br/><br/>
            <span className='ms-5'>
              <SeasonBtn SeasonNum="Sonic Part-1"/>
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
          <AmazonStarCasts imgURl="#" StarName={<a href='#' className='StarCastText'>Ben Schwartz</a>} StarMovieName="Sonic (Voice)"  className="Col-lg-3 col-md-9 col-sm-9 col-xs-9" />

          <AmazonStarCasts imgURl="#" StarName={<a href='#' className='StarCastText' >James Marsden</a>} StarMovieName="Tom" className="col-lg-3 col-md-9 col-sm-9 col-xs-9" />

          <AmazonStarCasts imgURl="#" StarName={<a href='#' className='StarCastText'>Jim Carrey</a>} StarMovieName="Dr. Robotnik"  className="Col-lg-3 col-md-9 col-sm-9 col-xs-9" />

          <AmazonStarCasts imgURl="#" StarName={<a href='#' className='StarCastText' >Tika Sumpter</a>} StarMovieName="Maddie"  className=" Col-lg-3 col-md-6 col-sm-9 col-xs-9" />

          <AmazonStarCasts imgURl="#" StarName={<a href='#' className='StarCastText'>Natasha Rothwell</a>} StarMovieName="Rachel"  className=" Col-lg-3 col-md-9 col-sm-9 col-xs-9" />

          <AmazonStarCasts imgURl="#" StarName={<a href='#' className='StarCastText'>Adam Polly</a>} StarMovieName="Wade"  className=" Col-lg-3 col-md-9 col-sm-9 col-xs-9" />
        </div>
      </div>

      <hr className='HRow'/>

      <div className='row EpisodeCardDiv ms-5'>
      <font className="CastName ms-5 mt-2 ps-5">
          Movie Series list
        </font>
        <div >
          <EpisodeCard EpisodeName="Part-1" EpisodeKeyword="Sonic the Hedgehog (2020) " EpisodeContent="Powered with incredible speed, Sonic The Hedgehog embraces his new home on Earth. That is, until Sonic sparks the attention of super-uncool evil genius Dr. Robotnik. Now it's super-villain vs. super-sonic in an all-out race across the globe to stop Robotnik from using Sonic's unique power for world domination." />
        </div>

        <div >
        <EpisodeCard EpisodeName="Part-2" EpisodeKeyword="Sonic the Hedgehog 2(2022)" EpisodeContent="After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands." />
        </div>

        <div>
        <EpisodeCard EpisodeName="Part-3" EpisodeKeyword="Sonic the Hedgehog 3 (2024) [Upcoming....]" EpisodeContent="After defeating Robotnik, Sonic discovers that a project named “Project Shadow” has escaped from the military and started wrecking havoc in town, Sonic, Tails and Knuckles team up to defeat Shadow, Shadow desires to honor the legacy of Maria and demands the location of the legendary “Fleetway Emerald,, an ancient relic that allows its possessor to unleash ultimate power." />
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
        <DetailsNetflix DetailsInfo="Directed by	:" Details="Jeff Fowler"/>
        <DetailsNetflix DetailsInfo="Written by :" Details="Pat Casey  Josh Miller"/>
        <DetailsNetflix DetailsInfo="Runtime :" Details="1H 40Min"/>
        <DetailsNetflix DetailsInfo="Languages :" Details="English"/>
        <DetailsNetflix DetailsInfo="Original release :" Details="25 January 2020"/>
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

export default AmazonMovie2
