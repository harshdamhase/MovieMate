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
              Amazon Prime | The Family Man
          </font>
        </div>
        <div>
          <MovieReviewCard ImgUrl="https://sm.ign.com/t/ign_in/screenshot/default/thefamilyman-launch-date-poster-apv1_5m4b.1200.jpg" />
        </div>
      </div>

      <div className='row mt-2'>
        <div className='row PostDesc p-3'>
          <img src='https://m.media-amazon.com/images/M/MV5BZjZkY2YxYTgtYmVkOC00NTgwLThjY2YtN2Y1ZWFlZmVhOTQ5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg' alt="img" className='Poster ms-5 col-lg-3 col-md-3 col-sm-3 col-xs-3'/>
          <font className='DescTitle col-lg-8 col-md-8 col-sm-8 col-xs-8 ms-3' >
            <h1 className='ms-2 PosterName'>
            The Family Man
            </h1>
            <br/><br/>
            <span className='ms-5'>
              <SeasonBtn SeasonNum="Season 1"/>
            </span>
            <h5 className='Desc mt-3 ms-5'>
              <font className='ReleaseDateFont'>Release Date: 20 September 2019</font>
              <br/><br/>
              The Family Man follows the story of Srikant Tiwari, who works as a senior officer in the Threat 
              Analysis and Surveillance Cell (TASC), along with his best friend and colleague JK Talpade, which 
              is a part of the National Investigation Agency (NIA) of India.
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
        <Link to="https://youtu.be/XatRGut65VI" className='WatchTrailer mt-3 ms-5'>Watch Now ▶️ Trailer </Link>
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
          <EpisodeCard EpisodeName="Season-1 Episode-1" EpisodeKeyword="The Family Man" EpisodeContent="Middle-class man working for the National Investigation Agency. While he tries to protect the nation from terrorists, he also has to protect his family from the impact of his secretive, high-pressure, and low paying job." />
        </div>

        <div >
        <EpisodeCard EpisodeName="Season-1 Episode-2"   EpisodeKeyword="Sleeper" EpisodeContent="A scooter bomb goes off at Kala Ghoda. Srikant learns about a mission called Zulfiqar. Suspects in the blast case tell him about a drop box near Victoria College. He arranges for round-the-clock surveillance at the drop box location." />
        </div>


        <div>
        <EpisodeCard EpisodeName="Season-1 Episode-3"   EpisodeKeyword="The Anti-National" EpisodeContent="When he finds out that one of the hospitalised prisoners is part of Mission Zulfiqar, Srikant interrogates the prisoner's friend, Moosa, about it. Someone called Kareem has used the dropbox. TASC monitors Kareem's hostel room, but Kareem gives them the slip." />
        </div>

        <div>
        <EpisodeCard EpisodeName="Season-1 Episode-4"   EpisodeKeyword="The Patriot" EpisodeContent="TASC is in a quandary. They fear Kareem and his men have a devious plan. They get to Kareem's car, only to realise that things are not what they seem." />
        </div>

        <div>
        <EpisodeCard EpisodeName="Season-1 Episode-5"   EpisodeKeyword="Pariah" EpisodeContent="ISI agent Sameer sends the Kala Ghoda bomber to Kashmir to execute Mission Zulfiqar. Srikant is 'punished' and sent to Kashmir, but when his boss, Kulkarni, tells him it was planned, Srikant starts digging into Zulfiqar." />
        </div>

        <div>
        <EpisodeCard EpisodeName="Season-1 Episode-6"   EpisodeKeyword="Dance of Death" EpisodeContent="Srikant discovers that he's been after the wrong suspect all this time." />
        </div>

        <div>
        <EpisodeCard EpisodeName="Season-1 Episode-7"   EpisodeKeyword="Paradise" EpisodeContent="Srikant searches for Sajid at a wedding in Baramulla, against Saloni and Vikram's wishes." />
        </div>

        <div>
        <EpisodeCard EpisodeName="Season-1 Episode-8"   EpisodeKeyword="Act of War" EpisodeContent="Srikant helps CIA locate Faizan, a wanted man hiding in Balochistan. Srikant slips into Pakistan to interrogate Faizan. Pakistan's Prime Minister finds out about Zulfiqar and tries to stop it." />
        </div>

        <div>
        <EpisodeCard EpisodeName="Season-1 Episode-9"   EpisodeKeyword="Fighting Dirty" EpisodeContent="Srikant tries to thwart a plan to smuggle nerve gas canisters from Kashmir into Delhi." />
        </div>

        <div>
        <EpisodeCard  EpisodeName="Season-1 Episode-10"  EpisodeKeyword="The Bomb" EpisodeContent="Srikant learns that a plan B of Zulfiqar is in motion. Zoya and Milind reach Orion Chemicals. The devious plan of Zulfiqar may already be underway. Zoya and Milind are cornered and incapacitated, with no reinforcements around, as Srikant and JK rush to help them." />
        </div>

      </div>

      <hr className='HRow'/>

      <div className=''>
        <div className="CastName ms-5 ps-5">
          Storyline
        </div>
        <div className=' ms-5 ps-5 col-lg-10 col-md-8 col-sm-8 col-xs-8 Storyline'>
        The Family Man follows the story of Srikant Tiwari, who works as a senior officer in the Threat Analysis and Surveillance Cell (TASC), along with his best friend and colleague JK Talpade, which is a part of the National Investigation Agency (NIA) of India. He is a married man with two kids. The first season follows an investigation of a potential terrorist attack, while simultaneously following his slightly unsettled family life. Srikant and JK, along with their subordinates Zoya, Milind and Jayesh, and Force One officer Imran Pasha work on stopping Mission Zulfiqar from succeeding. The show is inspired by real life newspaper articles.
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
