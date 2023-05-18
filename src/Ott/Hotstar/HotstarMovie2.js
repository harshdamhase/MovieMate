import React from 'react'
import "./Hotstar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import NavbarComp from '../../Components/NavbarComp'
import MovieReviewCard from '../../Components/MovieReviewCard';
import SeasonBtn from '../../Components/SeasonBtn';
import StarCast from '../../Components/StarCast';
import ReactionCard from '../../Components/ReactionCard';
import Keybtn from '../../Components/Keybtn';
import DetailsNetflix from '../../Components/DetailsNetflix';
import Footer from '../../Components/Footer';


function HotstartMovie2() {
  return (
    <>
      <div id='NavBarDiv'>
        <NavbarComp/>
        <div className='Headline'>
          <font className='HotPosterTitle' >
              Hotstar | Haunted Mansion
          </font>
        </div>
        <div>
          <MovieReviewCard ImgUrl="https://bloody-disgusting.com/wp-content/uploads/2023/04/mansion-44.png" />
        </div>
      </div>

      <div className='row mt-2'>
        <div className='row PostDesc p-3'>
          <img src='https://i.imgur.com/IYXFMHY.webp' alt="img" className='Poster ms-5 col-lg-3 col-md-3 col-sm-3 col-xs-3'/>
          <font className='DescTitle col-lg-8 col-md-8 col-sm-8 col-xs-8 ms-3' >
            <h1 className='ms-2 PosterName'>
            Haunted Mansion
            </h1>
            <br/><br/>
            <span className='ms-5'>
              <SeasonBtn SeasonNum="Only 1 Part Available"/>
            </span>
            <h5 className='Desc mt-3 ms-5'>
              <font className='ReleaseDateFont'>Release Date: July 28, 2023</font>
              <br/><br/>
              A single mom named Gabbie hires a tour guide, a psychic, a priest, and a historian to help exorcise their newly bought mansion; after discovering it is inhabited by ghosts.
            </h5>
            <div className='Genre col-lg-8 col-md-9 col-sm-9 col-xs-9 mt-5 '>
              <span className='ms-1 mb-3'>
                <SeasonBtn SeasonNum="Comedy"/>
              </span>
              <span className='ms-1'>
                <SeasonBtn SeasonNum="Family"/>
              </span>
              <span className='ms-1'>
                <SeasonBtn SeasonNum="Drama"/>
              </span>
              <span className='ms-1'>
                <SeasonBtn SeasonNum="Horror"/>
              </span>
            </div>
          </font>
        </div>
      </div>

      <div className='row WatchTrailerDiv'>
        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-8'>
        <Link to="https://youtu.be/AjLKTz81bj8" className='WatchTrailer mt-3 ms-5'>Watch Now ▶️</Link>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-8'>
        <Link to="/BookTicket" className='WatchTrailer mt-3 ms-5'>Book Your Ticket 🎟️</Link>
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
          <StarCast imgURl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Rosario_Dawson_SXSW_2022.jpg/330px-Rosario_Dawson_SXSW_2022.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Rosario_Dawson'className='StarCastText'>Rosario Dawson</a>} StarMovieName="Gabbie"  className="Col-lg-3 col-md-9 col-sm-9 col-xs-9"/>

          <StarCast imgURl="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jamie_Lee_Curtis_%2841851191720%29_%28cropped%29.jpg/330px-Jamie_Lee_Curtis_%2841851191720%29_%28cropped%29.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Jamie_Lee_Curtis' className='StarCastText' >Jamie Lee Curtis</a> } StarMovieName="Madame Leota"  className="Col-lg-3 col-md-9 col-sm-9 col-xs-9"/>

          <StarCast imgURl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Owen_Wilson_Cannes_2011.jpg/330px-Owen_Wilson_Cannes_2011.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Owen_Wilson' className='StarCastText' >Owen Wilson</a> } StarMovieName="Kent"  className="Col-lg-3 col-md-9 col-sm-9 col-xs-9"/>

          <StarCast imgURl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Keith_Stanfield_by_Gage_Skidmore.jpg/330px-Keith_Stanfield_by_Gage_Skidmore.jpg" StarName={<a href='https://en.wikipedia.org/wiki/LaKeith_Stanfield' className='StarCastText' >LaKeith Stanfield</a> } StarMovieName="Ben Matthias"  className="Col-lg-3 col-md-9 col-sm-9 col-xs-9"/>

          <StarCast imgURl="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS24c7yT6zD8_B0ksbm-XHvTf4wF9rU0P2jN7Sn8iF-EM8S_qpT" StarName={<a href='https://www.imdb.com/name/nm2901078/' className='StarCastText' >Bryan McClure</a> } StarMovieName="The Headless Knight"  className="Col-lg-3 col-md-9 col-sm-9 col-xs-9"/>

          <StarCast imgURl="https://m.media-amazon.com/images/M/MV5BNWVjYmMzY2YtZTNiYy00OGY4LWIxMDktYTY4MWFhMjg1ZDA3XkEyXkFqcGdeQXVyNjA5ODUzOTc@._V1_.jpg" StarName={<a href='https://www.imdb.com/name/nm7396726/' className='StarCastText' >Kamran Shaikh</a> } StarMovieName="Suited Man"  className="Col-lg-3 col-md-9 col-sm-9 col-xs-9"/>


        </div>
      </div>

      <hr className='HRow'/>

      <div className='row ReactionCardDiv ms-5'>
      <font className="CastName ms-5 mt-2 ps-5">
          News:
        </font>
          <ReactionCard  ReviewKeyword={<a className='NewsText' href='https://screenrant.com/haunted-mansion-movie-owen-wilson-ghosts-the-haunting/' >"Haunted Mansion Can Give Owen Wilson Revenge On Ghosts 24 Years Later"</a>} ReviewContent="24 years after The Haunting, Owen Wilson can defeat ghosts in Haunted Mansion. Eddie Murphy starred in 2003's The Haunted Mansion, based on the ride at the Disney parks. According to the trailer, the reboot follows a similar concept of a guest arriving at the mansion and being greeted by its many ghostly inhabitants. However, most characters are different from the first film other than Madame Leota, who Jennifer Tilly portrayed in the 2003 film, and Jamie Lee Curtis portrays in the reboot." />

        <ReactionCard  ReviewKeyword={<a className='NewsText' href='https://www.joblo.com/haunted-mansion-director-has-beef-with-the-2003-version/' >"Haunted Mansion director has “beef” with the 2003 version"</a>} ReviewContent="Speaking with Entertainment Weekly, Justin Simien said he has just as many issues with the 2003's The Haunted Mansion as most others. “I had a little bit of beef with the first film, because the first thing you've got to give the kids is the candy of the mansion that they know and love,” adding he “looked at [the film] a lot, mostly to see how easy it would be to go awry in certain spots.” But Simien did backtrack a bit, saying, “Not to dunk on the movie…It's a movie of its time, and it's also a movie that, frankly, a lot of..." />

        <ReactionCard  ReviewKeyword={<a className='NewsText' href='https://www.cbr.com/haunted-mansion-reboot-avoid-eddie-murphy-movie-mistakes/' >"Haunted Mansion Reboot Looked to Eddie Murphy's Version to Avoid Its Mistakes"</a> }ReviewContent="Haunted Mansion director Justin Simien prepared for the reboot by avoiding the mistakes of the Eddie Murphy version from 2003. In an interview with Entertainment Weekly, Simien explained how he wanted to differentiate his take on the classic Disney ride by rewatching the notorious flop that starred Murphy and was directed by The Lion King's Rob Minkoff. Though the filmmaker saw positives in the original film, Simien had issues similar to the ones that critics raised in 2003." />
      </div>

      <hr className='HRow'/>

      <div className=''>
        <div className="CastName ms-5 ps-5">
          StoryLine:
        </div>
        <div className=' ms-5 ps-5 col-lg-10 col-md-8 col-sm-8 col-xs-8 Storyline'>
        A single mom named Gabbie hires a tour guide, a psychic, a priest, and a historian to help exorcise their newly bought mansion; after discovering it is inhabited by ghosts.
        </div>
        <div className='row ms-5 ps-5 mt-3'>
        <Keybtn Keywords="Based on Theme Park Attraction"/>
        <Keybtn Keywords="Curse"/>
        <Keybtn Keywords="Children"/>
        <Keybtn Keywords="Reboot"/>
        <Keybtn Keywords="Mansion"/>
        <Keybtn Keywords="Disney"/>
        </div>
        <div className='ms-5 ps-5 mt-3 '>
          <Link to="https://www.imdb.com/title/tt1695843/plotsummary/" className='PlotSummary'>Plot Summary</Link>
        </div>
      </div>

      <hr className='HRow'/>

      <div>
        <div className="CastName ms-5 ps-5">
          Details:
        </div>
        <DetailsNetflix DetailsInfo="Release Date:" Details="NJuly 28, 2023 (United States)"/>
        <DetailsNetflix DetailsInfo="Country of Origin:" Details="United States"/>
        <DetailsNetflix DetailsInfo="Languages:" Details="English, French, Spanish"/>
        <DetailsNetflix DetailsInfo="Also known as:" Details="Dinh Thự Ma Ám"/>
        <DetailsNetflix DetailsInfo="Filming locations:" Details="New Orleans, Louisiana, USA"/>
        <DetailsNetflix DetailsInfo="Production company:" Details="Walt Disney Productions, Rideback, Walt Disney Pictures"/>
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

export default HotstartMovie2