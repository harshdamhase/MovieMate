import React from 'react'
import "./Amazon.css"
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
        <Link to="https://youtu.be/oqxAJKy0ii4" className='WatchTrailer mt-3 ms-5'>Watch Now ▶️</Link>
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
          <StarCast imgURl="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Manoj_Bajpai_at_52nd_IFFI.jpg/344px-Manoj_Bajpai_at_52nd_IFFI.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Lee_Jung-jae' className='StarCastText'>Manoj Bajpayee</a>} StarMovieName="Srikant Tiwari (Sri)"  className="Col-lg-3 col-md-9 col-sm-9 col-xs-9" />

          <StarCast imgURl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Sharib_Hashmi.jpg/381px-Sharib_Hashmi.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Park_Hae-soo' className='StarCastText' >Sharib Hashmi</a>} StarMovieName="Jayavant Kashinath JK Talpade" className="col-lg-3 col-md-9 col-sm-9 col-xs-9" />

          <StarCast imgURl="https://upload.wikimedia.org/wikipedia/commons/2/20/Priyamani_at_Filmfare_Awards_South_%28cropped%29.jpg" StarName={<a href='https://en.wikipedia.org/wiki/HoYeon_Jung' className='StarCastText'>Hoyeon</a>} StarMovieName="Kang Sae-byeok"  className="Col-lg-3 col-md-9 col-sm-9 col-xs-9" />

          <StarCast imgURl="https://upload.wikimedia.org/wikipedia/commons/d/d9/Dalip_Tahil_still7_%28cropped%29_%28cropped%29.jpg" StarName={<a href='https://en.wikipedia.org/wiki/O_Yeong-su_(actor)' className='StarCastText' >Oh Yeong-su</a>} StarMovieName="Oh Il-nam"  className=" Col-lg-3 col-md-6 col-sm-9 col-xs-9" />

          <StarCast imgURl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Sharad_Kelkar_at_Zee_Rishtey_Awards_2012.jpg/392px-Sharad_Kelkar_at_Zee_Rishtey_Awards_2012.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Wi_Ha-joon' className='StarCastText'>Wi Ha-joon</a>} StarMovieName="Hwang Jun-ho"  className=" Col-lg-3 col-md-9 col-sm-9 col-xs-9" />

          <StarCast imgURl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Darshan_at_61st_Filmfare_Awards.jpg/318px-Darshan_at_61st_Filmfare_Awards.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Heo_Sung-tae' className='StarCastText'>Heo Sung-tae</a>} StarMovieName="Jang Deok-su"  className=" Col-lg-3 col-md-9 col-sm-9 col-xs-9" />
        </div>
      </div>

      <hr className='HRow'/>

      <div className='row ReactionCardDiv ms-5'>
      <font className="CastName ms-5 mt-2 ps-5">
          Reviews:
        </font>
        <div className='col-lg-3 p-2 ms-3 mb-5 col-md-10 col-sm-10 col-xs-10'>
          <ReactionCard RevieName="Champaklal" ReviewDate="20 September 2021" ReviewKeyword="Starts off strong then gets pretty weak at the end." ReviewContent="The first couple of episodes a very well done and pack a punch, but by the end it just seems to run out of steam. The marbles episode was the last real swerve, after that it becomes paint by numbers to the point" />
        </div>

        <div className='col-lg-3 p-2 ms-3 mb-5 col-md-10 col-sm-10 col-xs-10'>
        <ReactionCard RevieName="Surfisfun"  ReviewDate="2 November 2021" ReviewKeyword="first half decent, then it feel overstay.the games lost it appeals by 5th one" ReviewContent="Decent set deco .Battle royal flavors.A bit long in runtime, especially after first half.Very bloody and gory at times.Addictive if thats your cup of tv tea." />
        </div>


        <div className='col-lg-3 p-2 ms-3 mb-5 col-md-10 col-sm-10 col-xs-10'>
        <ReactionCard RevieName="Daniel-65836"  ReviewDate="30 September 2021" ReviewKeyword="Strong start, poor finish" ReviewContent="Very compelling opening episodes, but when the actual plot unravels it makes you go, Oh, that's just it? That's kinda lame. Great acting still, amazing sets, overrides the glaring flaws of the series, an enjoyable watch overall." />
        </div>

        <div className='col-lg-3 p-2 ms-3 mb-5 col-md-10 col-sm-10 col-xs-10'>
        <ReactionCard  RevieName="Jiballini64"  ReviewDate="10 October 2021" ReviewKeyword="I don't get all the rave reviews" ReviewContent="I've watched the whole lot and it's just plain silly. The cast bring over-acting to a new level, all the characters are spectacularly annoying (I wanted them all to die by Episode 2) and I don't know why I watched it all. I'm sure there were far better things I could have been doing with my life. Like cleaning my bathroom or cutting my toe nails. It's really woeful." />
        </div>

        <div className='col-lg-3 p-2 ms-3 mb-5 col-md-10 col-sm-10 col-xs-10'>
        <ReactionCard  RevieName="Matthewjleming"  ReviewDate="12 February 2022" ReviewKeyword="Yes, the VIPs sucked, but that didn't ruin the series" ReviewContent="Seriously. All things considered, they're a pretty small and self-contained part. The main characters were brilliant in their roles. I guess good actors figured that having parts where they're wearing masks the whole time wouldn't get them much exposure. The pacing and character development were superb." />
        </div>

        <div className='col-lg-3 p-2 ms-3 mb-5 col-md-10 col-sm-10 col-xs-10'>
        <ReactionCard className="col-lg-4 col-md-6 col-sm-8 col-xs-8" RevieName="Jack_o_hasanov_imdb"  ReviewDate="30 April 2022" ReviewKeyword="Overrated, But Good" ReviewContent="This series is so overrated. But let's be fair, it's a very good series. I've watched a few movies about it. The script was good. Acting was sometimes exaggerated, maybe it's a cultural thing. I did not like the final part. Overall very well done. In the final episode, my expectation was different. But the final scene was disappointing. Season 2 will come." />
        </div>
      </div>

      <hr className='HRow'/>

      <div className=''>
        <div className="CastName ms-5 ps-5">
          StoryLine:
        </div>
        <div className=' ms-5 ps-5 col-lg-10 col-md-8 col-sm-8 col-xs-8 Storyline'>
        A story of people who fail at life for various reasons, but suddenly receive a mysterious invitation to participate in a survival game to win more than 38 million US dollars. The game takes place at an isolated island and the participants are locked up until there is a final winner. The story will incorporate popular children's games from the 1970s and 1980s of Korea, such as squid game, literal translation of its Korean name, which is a type of tag where offense and defense use a squid-shaped board drawn in the dirt.
        </div>
        <div className='row ms-5 ps-5 mt-3'>
        <Keybtn Keywords="Blood"/>
        <Keybtn Keywords="Game of Death"/>
        <Keybtn Keywords="Survival"/>
        <Keybtn Keywords="Death"/>
        <Keybtn Keywords="Game"/>
        <Keybtn Keywords="Cruelty"/>
        </div>
        <div className='ms-5 ps-5 mt-3 '>
          <Link to="https://www.imdb.com/title/tt10919420/plotsummary/" className='PlotSummary'>Plot Summary</Link>
        </div>
      </div>

      <hr className='HRow'/>

      <div>
        <div className="CastName ms-5 ps-5">
          Details:
        </div>
        <DetailsNetflix DetailsInfo="Release Date:" Details="September 17, 2021 (United States)"/>
        <DetailsNetflix DetailsInfo="Country of Origin:" Details="South Korea"/>
        <DetailsNetflix DetailsInfo="Languages:" Details="Korean English Urdu"/>
        <DetailsNetflix DetailsInfo="Also known as:" Details="El juego del calamar"/>
        <DetailsNetflix DetailsInfo="Filming locations:" Details="Seoul, South Korea(contestants' hometown - many scenes)"/>
        <DetailsNetflix DetailsInfo="Production company:" Details="Siren Pictures"/>
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
