import React from 'react'
import "./Netflix.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import "./Netflix.css"
import NavbarComp from '../../Components/NavbarComp'
import MovieReviewCard from '../../Components/MovieReviewCard';
import SeasonBtn from '../../Components/SeasonBtn';
import StarCast from '../../Components/StarCast';
import ReactionCard from '../../Components/ReactionCard';
import Keybtn from '../../Components/Keybtn';
import DetailsNetflix from '../../Components/DetailsNetflix';
import Footer from '../../Components/Footer';

function NetflixMovie2() {
  return (
    <>
      <>
      <div id='NavBarDiv'>
        <NavbarComp/>
        <div className='Headline'>
          <font className='NetPosterTitle' >
          Netflix | Wednesday  
          </font>
        </div>
        <div>
          <MovieReviewCard ImgUrl="https://w0.peakpx.com/wallpaper/257/365/HD-wallpaper-jenna-ortega-as-wednesday-addams-netflix-series-movies.jpg" />
        </div>
      </div>

      <div className='row mt-2'>
        <div className='row PostDesc p-3'>
          <img src='https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQePzTRUAxVRh2HMZ_e-VveoJ8aiePGkgnvruipwpBy0LUhMQhKHBDVrjXbcdsSeVcQHqtNCkJcPCAZMpqHoVmxItrAAILt7xtq25abqmWZrTY7vFQEiDK-rjaq4t63GdPEb_TOFpLDwLPeW_PkLhaGx2.jpg?r=93e' alt="img" className='Poster ms-5 col-lg-3 col-md-3 col-sm-3 col-xs-3'/>
          <font className='DescTitle col-lg-8 col-md-8 col-sm-8 col-xs-8 ms-3' >
            <h1 className='ms-2 PosterName'>
            Wednesday
            </h1>
            <br/><br/>
            <span className='ms-5'>
              <SeasonBtn SeasonNum="Season 1"/>
            </span>
            <h5 className='Desc mt-3 ms-5'>
              <font className='ReleaseDateFont'>Release Date: November 23, 2022</font>
              <br/><br/>
              Follows Wednesday Addams' years as a student, when she attempts to master her emerging psychic ability, thwart a killing spree, and solve the mystery that embroiled her parents.
            </h5>
            <div className='Genre col-lg-8 col-md-9 col-sm-9 col-xs-9 mt-5 '>
              <span className='ms-1 mb-3'>
                <SeasonBtn SeasonNum="Comedy"/>
              </span>
              <span className='ms-1'>
                <SeasonBtn SeasonNum="Crime"/>
              </span>
              <span className='ms-1'>
                <SeasonBtn SeasonNum="Fantasy"/>
              </span>
              <span className='ms-1'>
                <SeasonBtn SeasonNum="Thriller"/>
              </span>
            </div>
          </font>
        </div>
      </div>

      <div className='row WatchTrailerDiv'>
        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-8'>
        <Link to="https://youtu.be/Di310WS8zLk" className='WatchTrailer mt-3 ms-5'>Watch Now ▶️</Link>
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
          <StarCast imgURl="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Jenna_Ortega_2022_%28cropped%29.jpg/330px-Jenna_Ortega_2022_%28cropped%29.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Jenna_Ortega' className='StarCastText'>Jenna Ortega</a>} StarMovieName="Wednesday Addams" Episode="09 Episodes" className="" />

          <StarCast imgURl="https://m.media-amazon.com/images/M/MV5BMGFmYWJmMjktZDNkYi00MTYzLWFhMjQtY2FkMmUzNTdlNTRhXkEyXkFqcGdeQXVyNDI5NzQ2Mzc@._V1_.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Hunter_Doohan' className='StarCastText' >Hunter Doohan</a>} StarMovieName="Tyler Galpin" Episode="09 Episodes" className="" />

          <StarCast imgURl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOOWvW0HxOV2ubbep6EMww9aw5OKSnODqh3PBP9UBITL_6MQFHzf2uLHz-dsO_73XgGNw&usqp=CAU" StarName={<a href='https://en.wikipedia.org/wiki/Percy_Hynes_White' className='StarCastText'>Percy Hynes White</a>} StarMovieName="Xavier Thorpe" Episode="09 Episodes" className="" />

          <StarCast imgURl="https://m.media-amazon.com/images/M/MV5BODZjYzhlMDEtZmYyMS00ZjY2LTkxNjQtYmVjMGE3MDJlZGJjXkEyXkFqcGdeQXVyMTAwODQyMDE1._V1_.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Emma_Myers' className='StarCastText' >Emma Myers</a>} StarMovieName="Enid Sinclair" Episode="08 Episodes" className="" />

          <StarCast imgURl="https://fwcdn.pl/ppo/92/55/2759255/467866.3.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Joy_Sunday' className='StarCastText'>Joy Sunday</a>} StarMovieName="Hwang Jun-ho" Episode="09 Episodes" className="" />

          <StarCast imgURl="https://upload.wikimedia.org/wikipedia/commons/6/6e/Gwendoline_christie_by_sachyn_mital_%28cropped2%29.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Gwendoline_Christie' className='StarCastText'>Gwendoline Christie</a>} StarMovieName="Jang Deok-su" Episode="08 Episodes" className="" />
        </div>
      </div>

      <hr className='HRow'/>

      <div className='row ReactionCardDiv ms-5'>
        <font className="CastName ms-5 mt-2 ps-5">
          Reviews:
        </font>

        <ReactionCard RevieName="KOOLAIDBRO" ReviewDate="24 November 2022" ReviewKeyword="Was not expecting this at all" ReviewContent="So I thought this was going to be God awful like most Netflix adaptations, but I found myself laughing and appreciating the camerawork, the clothes, the colors, the acting etc. The way everything is colorful and vibrant while Wednesday is just colorless and unemotional makes Wednesday stick out so much from being so out of place. You almost can feel how much she dislikes almost everything. She's smart, witty, and honestly kind of scary. Catherine Zeta Jones made me a believer in her from her performance. From start to finish this was a easy and fun watch. It almost flew by too fast and now I want more." />

        <ReactionCard RevieName="trimblecali"  ReviewDate="3 December 2022" ReviewKeyword="I feel like I'm the minority here" ReviewContent="Don't get me wrong, Jenna Ortega's performance was absolutely fantastic. She captures Wednesday's essence perfectly. Pretty much everything else about the show falls flat for me. The plot really doesn't work for me. It reminds me of the Chilling Adventures of Sabrina and Riverdale. It doesn't feel creative or inventive at all and just doesn't work for me. The whole school for outsiders thing plus murder mystery just wasn't a hit in my opinion. I also wasn't impressed with the casting of Morticia and Gomez and their relationship with Wednesday. Overall, it feels very YA so maybe it's just meant for a younger crowd." />

        <ReactionCard RevieName="zaywhat"  ReviewDate="27 November 2022" ReviewKeyword="Jenna Ortega Kills It As Wednesday" ReviewContent="Loved the show. Didn't care much for Uncle Fester as he seemed like an unnecessary distraction. There were a few moments where her attitude felt tedious but overall, a perfect rendition of the wit, ability and fearlessness of the Wednesday Addams character. Jenna Ortega did a masterful job as the stoic young woman where slight nuances of facial expression were subtle but expressive moments of character development. I enjoyed all the performances and the story line was engaging enough. I remember watching the original Addams Family TV show and this in depth story on Wednesday was a worthy rendition of those characters and a lot of fun to watch." />

        <ReactionCard  RevieName="marzy-83675"  ReviewDate="23 November 2022" ReviewKeyword="Unexpected" ReviewContent="I don't usually make reviews, part of the reason is that i'm bad at it. But the last time i was so hooked on a Netflix series was Arcane and i felt like it was due, taking all 8 episodes in one go. No doubt that Jenna Ortega carries the show, but the show is supposed to be about Wednesday, so that is not necessarily a bad thing. This show won't be for everyone, especially fans of the original Addams Family universe, but for anyone who is just expecting an entertaining show, with a sprinkle of mystery and melancholic feel over it, then you'll enjoy it.Looking forward to a possible season 2." />

        <ReactionCard  RevieName="UniqueParticle"  ReviewDate="27 November 2022" ReviewKeyword="Jenna Ortega is exceptional so is the directing" ReviewContent="Perfectly morbid, superb acting throughout and smooth! I enjoy anything with Jenna Ortega is quite talented and she's great as Wednesday based on Adam's Family. Tim Burton is masterful at weird/intriguing characters that are excellent to watch. The bulk of the time I use other services, this is a perfect reason to use Netflix. I love that this is focused on young folks, anything bizarre and beautiful 4K quality colors. Quite surprise form Tim Burton a lot of his projects didn't have much horror, mostly Sci-Fi, adventure, and drama. Wednesday is a pleasant surprise after all the promotions I've seen I highly recommend it!" />

        <ReactionCard RevieName="Idle_Hands08"  ReviewDate="23 November 2022" ReviewKeyword="Soooo Good...!" ReviewContent="Directed by Tim Burton... Music by Danny Elfan... The look of the frame, the acting and story all remind me of the two now classic 90s Adam's Family Feature Films... Wednesday was my favourite character in the films, especially the second one when she and Pugsley got sent to Summer Camp... Christina Ricci in those films as Wednesday was floorless, and it was great to see her appear in this too. Ortega's turn as the main character was excellent she is quickly becoming a great actress. I think you need to give the series time to develop and remember that it's target audience is quite wide, I don't think it's meant to be too dark. Just like the 90s films it plays on the dark and morbid humour, but with the teen angst mixed in." />
      </div>

      <hr className='HRow'/>

      <div className=''>
        <div className="CastName ms-5 ps-5">
          StoryLine:
        </div>
        <div className=' ms-5 ps-5 col-lg-10 col-md-8 col-sm-8 col-xs-8 Storyline'>
        A sleuthing, supernaturally infused mystery charting Wednesday Addams' years as a student at Nevermore Academy. Wednesday's attempts to master her emerging psychic ability, thwart a monstrous killing spree that has terrorized the local town, and solve the supernatural mystery that embroiled her parents 25 years ago - all while navigating her new and very tangled relationships at Nevermore.
        </div>
        <div className='row ms-5 ps-5 mt-3'>
        <Keybtn Keywords="Anti-Heroine"/>
        <Keybtn Keywords="Dark Fantasy"/>
        <Keybtn Keywords="Dark Comedy"/>
        <Keybtn Keywords="Addams Family Characters"/>
        <Keybtn Keywords="Reference to Wednesday Addams"/>
        <Keybtn Keywords="psychic"/>
        </div>
        <div className='ms-5 ps-5 mt-3 '>
          <Link to="https://www.imdb.com/title/tt13443470/plotsummary/" className='PlotSummary'>Plot Summary</Link>
        </div>
      </div>

      <hr className='HRow'/>

      <div>
        <div className="CastName ms-5 ps-5">
          Details:
        </div>
        <DetailsNetflix DetailsInfo="Release Date:" Details="November 23, 2022 (United States)"/>
        <DetailsNetflix DetailsInfo="Country of Origin:" Details="United States"/>
        <DetailsNetflix DetailsInfo="Languages:" Details="English"/>
        <DetailsNetflix DetailsInfo="Also known as:" Details="Uenzdey"/>
        <DetailsNetflix DetailsInfo="Filming locations:" Details="Romania"/>
        <DetailsNetflix DetailsInfo="Production company:" Details="MGM Television, Millar Gough Ink, Tim Burton Productions"/>
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
    </>
  )
}

export default NetflixMovie2
