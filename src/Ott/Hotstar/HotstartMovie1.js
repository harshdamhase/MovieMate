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


function HotstartMovie1() {
  return (
    <>
      <div id='NavBarDiv'>
        <NavbarComp/>
        <div className='Headline'>
          <font className='HotPosterTitle' >
              Hotstar | The Nutcracker and the Four Realms
          </font>
        </div>
        <div>
          <MovieReviewCard ImgUrl="https://www.indiewire.com/wp-content/uploads/2018/10/1533732394498.jpeg?w=1920&h=1080&crop=1" />
        </div>
      </div>

      <div className='row mt-2'>
        <div className='row PostDesc p-3'>
          <img src='https://m.media-amazon.com/images/M/MV5BOTg1NDI1MjEyMl5BMl5BanBnXkFtZTgwOTA5MTgwNjM@._V1_.jpg' alt="img" className='Poster ms-5 col-lg-3 col-md-3 col-sm-3 col-xs-3'/>
          <font className='DescTitle col-lg-8 col-md-8 col-sm-8 col-xs-8 ms-3' >
            <h1 className='ms-2 PosterName'>
            The Nutcracker and the Four Realms
            </h1>
            <br/><br/>
            <span className='ms-5'>
              <SeasonBtn SeasonNum="Only 1 Part Available"/>
            </span>
            <h5 className='Desc mt-3 ms-5'>
              <font className='ReleaseDateFont'>Release Date: 2 November 2018</font>
              <br/><br/>
              A young girl is transported into a magical world of gingerbread soldiers and an army of mice.
            </h5>
            <div className='Genre col-lg-8 col-md-9 col-sm-9 col-xs-9 mt-5 '>
              <span className='ms-1 mb-3'>
                <SeasonBtn SeasonNum="Adventure"/>
              </span>
              <span className='ms-1'>
                <SeasonBtn SeasonNum="Family"/>
              </span>
              <span className='ms-1'>
                <SeasonBtn SeasonNum="Fantasy"/>
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
        <Link to="https://youtu.be/BXfxLIuNJvw" className='WatchTrailer mt-3 ms-5'>Watch Now ▶️</Link>
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
          <StarCast imgURl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Mackenzie_Foy_Cannes_2015.jpg/330px-Mackenzie_Foy_Cannes_2015.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Mackenzie_Foy' className='StarCastText'>Mackenzie Foy</a>} StarMovieName="Clara" className="Col-lg-3 col-md-9 col-sm-9 col-xs-9" />

          <StarCast imgURl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/KeiraKnightleyByAndreaRaffin2011_%28cropped%29.jpg/330px-KeiraKnightleyByAndreaRaffin2011_%28cropped%29.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Keira_Knightley' className='StarCastText' >Keira Knightley</a>} StarMovieName="Sugar Plum" className="col-lg-3 col-md-9 col-sm-9 col-xs-9" />

          <StarCast imgURl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Morgan_Freeman_Deauville_2018.jpg/330px-Morgan_Freeman_Deauville_2018.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Morgan_Freeman' className='StarCastText'>Morgan Freeman</a>} StarMovieName="Drosselmeyer" className="Col-lg-3 col-md-9 col-sm-9 col-xs-9" />

          <StarCast imgURl="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Helen_Mirren-2208_%28cropped%29.jpg/330px-Helen_Mirren-2208_%28cropped%29.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Helen_Mirren' className='StarCastText' >Helen Mirren</a>} StarMovieName="Mother Ginger" className=" Col-lg-3 col-md-6 col-sm-9 col-xs-9" />

          <StarCast imgURl="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Ellie_bamber_2022_1.jpg/330px-Ellie_bamber_2022_1.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Ellie_Bamber' className='StarCastText'>Ellie Bamber</a>} StarMovieName="Louise" className=" Col-lg-3 col-md-9 col-sm-9 col-xs-9" />

          <StarCast imgURl="https://m.media-amazon.com/images/M/MV5BMTU5MjMxNjgzM15BMl5BanBnXkFtZTgwNjM5OTEzNjM@._V1_.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Misty_Copeland' className='StarCastText'>Misty Copeland</a>} StarMovieName="Ballerina Princess"  className=" Col-lg-3 col-md-9 col-sm-9 col-xs-9" />
        </div>
      </div>

      <hr className='HRow'/>

      <div className='row ReactionCardDiv ms-5'>
      <font className="CastName ms-5 mt-2 ps-5">
          Reviews:
        </font>
        <div className='col-lg-3 p-2 ms-3 mb-5 col-md-10 col-sm-10 col-xs-10'>
          <ReactionCard RevieName="crybabydollhouse" ReviewDate="25 September 2019" ReviewKeyword="Not everyone will like it, but I did" ReviewContent="A good movie in my opinion. I know not everyone will like it, and I know a lot of people hate it (is it just because it's live action?), but it has a beautiful atmosphere, the costumes are amazing, and I feel happy whenever I watch it. Not my favourite Disney movie, but it's not the worst." />
        </div>

        <div className='col-lg-3 p-2 ms-3 mb-5 col-md-10 col-sm-10 col-xs-10'>
        <ReactionCard RevieName="mindyfrostbite"  ReviewDate="1 June 2019" ReviewKeyword="Delightfully weird and wonderful" ReviewContent="It is NOT the story of the girl in the original Nutcracker story; rather, it is the story of one of her daughters. If people go into this movie expecting the original Nutcracker, they will likely end up disappointed; head into it with an open mind and the knowledge that this is a different story altogether, and you might just enjoy it as much as I did!" />
        </div>


        <div className='col-lg-3 p-2 ms-3 mb-5 col-md-10 col-sm-10 col-xs-10'>
        <ReactionCard RevieName="VintageSoul56"  ReviewDate="17 November 2018" ReviewKeyword="Stunningly Spectacular" ReviewContent="I saw this today. I understood the story just fine. Apparently, it was a mix of the ballet and a short story. I loved every minute of it. I was transformed to a fantasy world that I would like to see! The sets, costumes, hair, dancing, CGI was absolutely brilliant. I recommend this to anyone, especially the little ones. They will be mesmerized. Thrilling comes to mind." />
        </div>

        <div className='col-lg-3 p-2 ms-3 mb-5 col-md-10 col-sm-10 col-xs-10'>
        <ReactionCard  RevieName="homercol"  ReviewDate="2 June 2019" ReviewKeyword="I finally managed to watch it and love it" ReviewContent="I have a hard time understanding people's hate of this movie. They did a fantastic job of blending the music, ballet and storyline together.... and for those calling this slow and boring, go see the actual ballet. I have... I truly appreciate the music and they way this was done.." />
        </div>

        <div className='col-lg-3 p-2 ms-3 mb-5 col-md-10 col-sm-10 col-xs-10'>
        <ReactionCard  RevieName="consumer-netherlands"  ReviewDate="3 November 2018" ReviewKeyword="one of the most boring movie from Disney Studios" ReviewContent="One of the most boring movie from Disney Studios. Give impression of a low budget, cheap movie made in hurry I was watching the movie with my children, but they told me they were very disappointed. The film is very boring. A complete weekend evening wasted. boring story, predictable, not funny," />
        </div>

        <div className='col-lg-3 p-2 ms-3 mb-5 col-md-10 col-sm-10 col-xs-10'>
        <ReactionCard className="col-lg-4 col-md-6 col-sm-8 col-xs-8" RevieName="calisparkz2"  ReviewDate="4 November 2018" ReviewKeyword="Worst Disney movie of all time" ReviewContent="Do not believe all these paid for reviews that are glowing, giving 9 and 10 stars, this movie was terrible, storyline all over the place, mediocre acting all around special effects like a high school play! We couldn't wait to get out of there! Do yourself a favor and watch the trailer, all the best bits (and that's a stretch) were all there!" />
        </div>
      </div>

      <hr className='HRow'/>

      <div className=''>
        <div className="CastName ms-5 ps-5">
          StoryLine:
        </div>
        <div className=' ms-5 ps-5 col-lg-10 col-md-8 col-sm-8 col-xs-8 Storyline'>
        All Clara (Mackenzie Foy) wants is a one-of-a-kind key that will unlock a box that holds a priceless gift from her late mother. A golden thread presented to her at godfather Drosselmeyer's (Morgan Freeman's) annual holiday party, leads her to the coveted key which promptly disappears into a strange and mysterious parallel world. It's there that Clara encounters a soldier named Phillip (Jayden Fowora-Knight), a gang of mice, and the regents who preside over three Realms: Land of Snowflakes, Land of Flowers, and Land of Sweets. Clara and Phillip must brave the ominous Fourth Realm, home to the tyrant Mother Ginger (Dame Helen Mirren), to retrieve Clara's key and hopefully return harmony to the unstable world.
        </div>
        <div className='row ms-5 ps-5 mt-3'>
        <Keybtn Keywords="Female Villain"/>
        <Keybtn Keywords="Female Protagonist"/>
        <Keybtn Keywords="Fairy Tale"/>
        <Keybtn Keywords="Fairy"/>
        <Keybtn Keywords="Magical Object"/>
        <Keybtn Keywords="Snow"/>
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
        <DetailsNetflix DetailsInfo="Release Date:" Details="November 2, 2018 (United States)"/>
        <DetailsNetflix DetailsInfo="Country of Origin:" Details="Canada, United States"/>
        <DetailsNetflix DetailsInfo="Languages:" Details="English, French"/>
        <DetailsNetflix DetailsInfo="Also known as:" Details="Kẹp Hạt Dẻ và Bốn Vương Quốc"/>
        <DetailsNetflix DetailsInfo="Filming locations:" Details="South Kensington, London, England, UK(Exterior shot)"/>
        <DetailsNetflix DetailsInfo="Production company:" Details="Walt Disney Pictures, Canadian Film or Video Production Services Tax Credit (PSTC), Entertainment One"/>
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

export default HotstartMovie1
