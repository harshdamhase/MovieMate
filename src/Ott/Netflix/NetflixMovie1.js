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


function NetflixMovie1() {
  return (
    <>
      <div>
        <NavbarComp/>
        <div className='Headline'>
          <font className='PosterTitle' >
              Squid Game
          </font>
        </div>
        <div>
          <MovieReviewCard ImgUrl="https://c4.wallpaperflare.com/wallpaper/529/888/855/squid-game-tv-hd-wallpaper-preview.jpg" />
        </div>
      </div>

      <div className='row mt-2'>
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
              <font className='ReleaseDateFont'>Release Date: 17 September 2021</font>
              <br/><br/>
            Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whopping 45.6 billion-won prize at stake.
            </h5>
            <div className='Genre col-lg-8 col-md-9 col-sm-9 col-xs-9 mt-5 '>
              <span className='ms-1 mb-3'>
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
          <StarCast imgURl="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSpYPqokHLCQA3cQCvv1szjHw_uaHk5h0gPKaeio-kpsw7aitTQdQEEell9OIyiUlUrXfo4FGywM7Prz7g" StarName="
          Lee Jung-jae" StarMovieName="Seong Gi-hun" Episode="10 Episodes" className="Col-lg-3 col-md-9 col-sm-9 col-xs-9" />

          <StarCast imgURl="https://m.media-amazon.com/images/M/MV5BOTAzYjFiN2EtOTc5YS00NzY4LTg5MWItMTU1YmFkZDdjZGMyXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_.jpg" StarName="Park Hae-soo" StarMovieName="Cho Sang-woo" Episode="09 Episodes" className="col-lg-3 col-md-9 col-sm-9 col-xs-9" />

          <StarCast imgURl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkItyoINoD_sqUVtkCMaOSPfFpBLA_pfwO1vq81DeEIhR_nC4b7--MQXcha9StDAnXvig&usqp=CAU" StarName="Hoyeon" StarMovieName="Kang Sae-byeok" Episode="8 Episodes" className="Col-lg-3 col-md-9 col-sm-9 col-xs-9" />

          <StarCast imgURl="https://upload.wikimedia.org/wikipedia/commons/f/f8/O_Yeong-su_%28%EC%98%A4%EC%98%81%EC%88%98%29%2C_interview%2C_screenshot_1.png" StarName="Oh Yeong-su" StarMovieName="Oh Il-nam" Episode="08 Episodes" className=" Col-lg-3 col-md-6 col-sm-9 col-xs-9" />

          <StarCast imgURl="https://i.pinimg.com/originals/86/e0/83/86e08356cd8036731b644815f6f927ea.jpg" StarName="
          Wi Ha-joon" StarMovieName="Hwang Jun-ho" Episode="07 Episodes" className=" Col-lg-3 col-md-9 col-sm-9 col-xs-9" />

          <StarCast imgURl="https://asianwiki.com/images/d/d3/Heo_Sung-Tae-1977-p1.jpg" StarName="Heo Sung-tae" StarMovieName="Jang Deok-su" Episode="07 Episodes" className=" Col-lg-3 col-md-9 col-sm-9 col-xs-9" />
        </div>
      </div>

      <hr className='HRow'/>

      <div className='row ReactionCardDiv ms-5'>
      <font className="CastName ms-5 mt-2">
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



    </>
  )
}

export default NetflixMovie1
