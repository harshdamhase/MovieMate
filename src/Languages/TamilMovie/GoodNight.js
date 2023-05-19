import React from 'react'
import "./GoodNight.css"
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


function GoodNight() {
  return (
    <>
      <div id='NavBarDiv'>
        <NavbarComp/>
        <div className='Headline'>
          <font className='TamPosterTitle' >
              Good Night
          </font>
        </div>
        <div>
          <MovieReviewCard ImgUrl="https://i.ytimg.com/vi/96CgTFsdjJQ/maxresdefault.jpg" />
        </div>
      </div>

      <div className='row mt-2'>
        <div className='row PostDesc p-3'>
          <img src='https://m.media-amazon.com/images/M/MV5BMTJjN2NhY2EtYzZkOC00NDQ0LWFhMzEtNWZhYTFhNzNhNjllXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg' alt="img" className='Poster ms-5 col-lg-3 col-md-3 col-sm-3 col-xs-3'/>
          <font className='DescTitle col-lg-8 col-md-8 col-sm-8 col-xs-8 ms-3' >
            <h1 className='ms-2 PosterName'>
            Good Night
            </h1>
            <br/><br/>
            <span className='ms-5'>
              <SeasonBtn SeasonNum="Only 1 Part Available"/>
            </span>
            <h5 className='Desc mt-3 ms-5'>
              <font className='ReleaseDateFont'>Release Date: May 12, 2023</font>
              <br/><br/>
              A simple boy-next-door character whose biggest problem in life is his snoring.He falls in love with a girl and how the couple overcome his sleeping problem while living together.
            </h5>
            <div className='Genre col-lg-8 col-md-9 col-sm-9 col-xs-9 mt-5 '>
              <span className='ms-1 mb-3'>
                <SeasonBtn SeasonNum="Comedy"/>
              </span>
              <span className='ms-1'>
                <SeasonBtn SeasonNum="Drama"/>
              </span>
              <span className='ms-1'>
                <SeasonBtn SeasonNum="Romance"/>
              </span>
              {/* <span className='ms-1'>
                <SeasonBtn SeasonNum="Thriller"/>
              </span> */}
            </div>
          </font>
        </div>
      </div>

      <div className='row WatchTrailerDiv'>
        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-8'>
        <Link to="https://youtu.be/eLPePlnFoho" className='WatchTrailer mt-3 ms-5'>Watch Now ▶️</Link>
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
              <StarCast imgURl="https://wikibio.in/wp-content/uploads/2021/11/K.-Manikandan.jpg" StarName={<a href='https://en.wikipedia.org/wiki/K._Manikandan' className='StarCastText' >Manikandan K.</a> } StarMovieName="" className="col-lg-3 col-md-9 col-sm-9 col-xs-9" />

              <StarCast imgURl="https://images.moviebuff.com/718af41a-a0e0-4528-b723-5ae64f14f848?w=600" StarName={<a href='https://www.imdb.com/name/nm11054682/' className='StarCastText' >Raichal Rabecca</a> } StarMovieName="" className="col-lg-3 col-md-9 col-sm-9 col-xs-9" />

              <StarCast imgURl="https://www.mixindia.com/wp-content/uploads/2022/01/Meetha-Raghunath-9.jpg" StarName={<a href='https://www.imdb.com/name/nm13565797/' className='StarCastText' >Meetha Raghunath</a> } StarMovieName="" className="col-lg-3 col-md-9 col-sm-9 col-xs-9" />

              <StarCast imgURl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJvkmVrJe57xxeI8Ed_cUo9gbNs_3_4d9DEQ&usqp=CAU" StarName={<a href='https://en.wikipedia.org/wiki/Ramesh_Thilak' className='StarCastText' >Ramesh Thilak</a> } StarMovieName="" className="col-lg-3 col-md-9 col-sm-9 col-xs-9" />

              <StarCast imgURl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Balaji_Sakthivel_At_The_%E2%80%98Vaanam_Kottatum%E2%80%99_Audio_Launch.jpg/330px-Balaji_Sakthivel_At_The_%E2%80%98Vaanam_Kottatum%E2%80%99_Audio_Launch.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Balaji_Sakthivel' className='StarCastText' >Balaji Sakthivel</a> } StarMovieName="" className="col-lg-3 col-md-9 col-sm-9 col-xs-9" />

              <StarCast imgURl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bagavathi_Perumal.jpg/330px-Bagavathi_Perumal.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Bagavathi_Perumal' className='StarCastText' >Bagavathi Perumal</a> } StarMovieName="" className="col-lg-3 col-md-9 col-sm-9 col-xs-9" />
              
        </div>
      </div>

      <hr className='HRow'/>

      <div className='row ReactionCardDiv ms-5'>
      <font className="CastName ms-5 mt-2 ps-5">
          Reviews:
        </font>
              <ReactionCard RevieName="vabinandha" ReviewDate="14 May 2023" ReviewKeyword="A Tremendously Wholesome Movie" ReviewContent="Watching this was great fun! It's not often that one can use a down-to-earth plot device to craft a funny and humorous screenplay like this. The simple nature of the plot and the way it manages to jump over hurdles make it a greatly engaging story for people of most backgrounds and classes. especially that of Meetha Raghunath in her role as Anu. She gives the film a whole other dimension with her genuine character and humble nature. Manikandan and Ramesh Thilak were also absolutely incredible in their roles." />

              <ReactionCard RevieName="saru2020" ReviewDate="14 May 2023" ReviewKeyword="a spin-off of Selvaraghavan's film scenes" ReviewContent="The core plot of the film is just based on these 2 scenes and nothing else and I couldn't help but think only of Selvaraghavan films, both these scenes/concepts are shown as just one of the scenes in his 3 hour long movies. I'm trying to highlight this because I really want people to understand the MAGNIFICENCE of Selvaraghavan's writings and we've missed celebrating the genius and pushing him into the acting field denoting how miserable we are as the audience." />

              <ReactionCard RevieName="shwetank-54723" ReviewDate="17 May 2023" ReviewKeyword="Light-hearted feel good movie" ReviewContent="Except being a tiny bit stretched in second half, this movie is a delight to watch. The screenplay, cinematography, art, direction, characters are fantastically done. Manikandan is such a natural actor and the movie is shot so beautifully that one can't help comparing it with the fine movies in malayalam cinema that portrays the plight of a common man in a manner that you feel you are there in it, next to them, and see it happening. Very immersive story with a great acting and portrayal of characters by all the actors. " />
              

      </div>

      <hr className='HRow'/>

      <div className=''>
        <div className="CastName ms-5 ps-5">
          StoryLine:
        </div>
        <div className=' ms-5 ps-5 col-lg-10 col-md-8 col-sm-8 col-xs-8 Storyline'>
        A simple boy-next-door character whose biggest problem in life is his snoring.He falls in love with a girl and how the couple overcome his sleeping problem while living together.
        </div>
        <div className='row ms-5 ps-5 mt-3'>
        <Keybtn Keywords="Love"/>
        </div>
        <div className='ms-5 ps-5 mt-3 '>
          <Link to="https://www.imdb.com/title/tt26691319/plotsummary/" className='PlotSummary'>Plot Summary</Link>
        </div>
      </div>

      <hr className='HRow'/>

      <div>
        <div className="CastName ms-5 ps-5">
          Details:
        </div>
        <DetailsNetflix DetailsInfo="Release Date:" Details="May 12, 2023 (India)"/>
        <DetailsNetflix DetailsInfo="Country of Origin:" Details="Tamil Nadu, India"/>
        <DetailsNetflix DetailsInfo="Languages:" Details="Tamil, Telugu, Kannada, Hindi"/>
        <DetailsNetflix DetailsInfo="Also known as:" Details="Good Night"/>
        <DetailsNetflix DetailsInfo="Filming locations:" Details="Hydrabad"/>
        <DetailsNetflix DetailsInfo="Production company:" Details="MRP Entertainment, Million Dollar Studios"/>
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

export default GoodNight
