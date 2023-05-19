import React from 'react'
import "./Theinvitation.css"
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


function Theinvitation() {
  return (
    <>
      <div id='NavBarDiv'>
        <NavbarComp/>
        <div className='Headline'>
          <font className='EngPosterTitle' >
              The Invitation
          </font>
        </div>
        <div>
          <MovieReviewCard ImgUrl="https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2022/07/Screen-Shot-2022-07-20-at-9.06.00-AM.png?fit=1200%2C663&ssl=1" />
        </div>
      </div>

      <div className='row mt-2'>
        <div className='row PostDesc p-3'>
          <img src='https://m.media-amazon.com/images/M/MV5BMTkzODMwNDkzOF5BMl5BanBnXkFtZTgwNDA4NzA1ODE@._V1_FMjpg_UX1000_.jpg' alt="img" className='Poster ms-5 col-lg-3 col-md-3 col-sm-3 col-xs-3'/>
          <font className='DescTitle col-lg-8 col-md-8 col-sm-8 col-xs-8 ms-3' >
            <h1 className='ms-2 PosterName'>
            The Invitation
            </h1>
            <br/><br/>
            <span className='ms-5'>
              <SeasonBtn SeasonNum="Only 1 Part Available"/>
            </span>
            <h5 className='Desc mt-3 ms-5'>
              <font className='ReleaseDateFont'>Release Date: August 26, 2022</font>
              <br/><br/>
              A young woman is courted and swept off her feet, only to realize a gothic conspiracy is a foot.
            </h5>
            <div className='Genre col-lg-8 col-md-9 col-sm-9 col-xs-9 mt-5 '>
              <span className='ms-1 mb-3'>
                <SeasonBtn SeasonNum="Horror"/>
              </span>
              <span className='ms-1'>
                <SeasonBtn SeasonNum="Thriller"/>
              </span>
              {/* <span className='ms-1'>
                <SeasonBtn SeasonNum="Fantasy"/>
              </span> */}
              {/* <span className='ms-1'>
                <SeasonBtn SeasonNum="Thriller"/>
              </span> */}
            </div>
          </font>
        </div>
      </div>

      <div className='row WatchTrailerDiv'>
        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-8'>
        <Link to="https://youtu.be/5bL1ftuxgOE" className='WatchTrailer mt-3 ms-5'>Watch Now ▶️</Link>
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
              <StarCast imgURl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Nathalie_Emmanuel_by_Gage_Skidmore.jpg/330px-Nathalie_Emmanuel_by_Gage_Skidmore.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Nathalie_Emmanuel' className='StarCastText' >Nathalie Emmanuel</a> } StarMovieName="Evie" className="col-lg-3 col-md-9 col-sm-9 col-xs-9" />

              <StarCast imgURl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Thomas_Doherty_2019_by_Glenn_Francis.jpg/330px-Thomas_Doherty_2019_by_Glenn_Francis.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Thomas_Doherty_(actor)' className='StarCastText' >Thomas Doherty</a> } StarMovieName="De Ville" className="col-lg-3 col-md-9 col-sm-9 col-xs-9" />

              <StarCast imgURl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Stephanie_Corneliussen_by_Gage_Skidmore.jpg/330px-Stephanie_Corneliussen_by_Gage_Skidmore.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Stephanie_Corneliussen' className='StarCastText' >Stephanie Corneliussen</a> } StarMovieName="Viktoria" className="col-lg-3 col-md-9 col-sm-9 col-xs-9" />

              <StarCast imgURl="https://www.olivia-bell.co.uk/wp-content/uploads/2019/02/unnamed.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Alana_Boden' className='StarCastText' >Alana Boden</a> } StarMovieName="Lucy" className="col-lg-3 col-md-9 col-sm-9 col-xs-9" />

              <StarCast imgURl="https://m.media-amazon.com/images/M/MV5BNDI5OGE3NzQtOTFlNS00MGJiLThiYzktNTQ5ZDk0ZGE3MDRlXkEyXkFqcGdeQXVyMjM3NzI5OTM@._V1_FMjpg_UX1000_.jpg" StarName={<a href='https://the-last-kingdom.fandom.com/wiki/Vir%C3%A1g_B%C3%A1r%C3%A1ny' className='StarCastText' >Virág Bárány</a> } StarMovieName="Emmaline" className="col-lg-3 col-md-9 col-sm-9 col-xs-9" />

              <StarCast imgURl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Sean_Pertwee_2017.jpg/330px-Sean_Pertwee_2017.jpg" StarName={<a href='https://en.wikipedia.org/wiki/Sean_Pertwee' className='StarCastText' >Sean Pertwee</a> } StarMovieName="Renfield" className="col-lg-3 col-md-9 col-sm-9 col-xs-9" />
        </div>
      </div>

      <hr className='HRow'/>

      <div className='row ReactionCardDiv ms-5'>
      <font className="CastName ms-5 mt-2 ps-5">
          Reviews:
        </font>
        <ReactionCard RevieName="rgkarim" ReviewDate="27 August 2022" ReviewKeyword="You might want to decline this invitation until home release" ReviewContent="It's fast, it doesn't get stuck too much in trivial world building, and it gets to the antics very quickly to start getting into the thrills. The Invitation has a lot of things to decipher in the short run time, but it's always moving and seldom slowing down to get bogged in higher order thinking. For those looking for just a way to turn off the mind, this can be a giant plus alongside the appeal of one component of the story." />

        <ReactionCard RevieName="Benslie" ReviewDate="28 August 2022" ReviewKeyword="Just don't watch the trailer" ReviewContent="One of the biggest faults of this movie, funny enough, isn't anything to do with the movie itself but the promotions for it. If you have seen the trailer for this movie then you've pretty much seen the entire movie, including the big twist reveal, which sucks as the story has so much potential. In the right capable hands, a story of someone trying to find their long-lost family and then ending up in a horror situation can be pretty good but here, it falls flat. The story takes forever to get going and once it does start to pick up the pace the movie was almost over" />

        <ReactionCard RevieName="kaefab" ReviewDate="17 September 2022" ReviewKeyword="sadly it is that bad" ReviewContent="Well needless to say this movie sadly brings absolutely nothing and i do mean nothing ditto to the gender of vampire movies. In fact its been done a zillion million times before and so so so much better.From the trailer which does not show a lot this movie looked like it had potential, but sadly nothing happens the gore or horror is way too far between and at some point you lose intensest." />

        <ReactionCard RevieName="sbweightman" ReviewDate="3 September 2022" ReviewKeyword="Good build up, but not enough bite with its horror" ReviewContent="It has an enjoyable build up thanks to the likeable leads, but it took far too long and after the big reveal, it was over all too quickly. There wasn't really any horror or mystery, just a few jump scares and glimpses of the monster, although the awkward social engagements might tap into modern horror. The action packed finale was ridiculous and along with the lack of originality, completely spoiled the whole film" />

        <ReactionCard RevieName="Sleepin_Dragon" ReviewDate="3 March 2023" ReviewKeyword="An interesting start, but soon disappoints." ReviewContent="Evie traces back her family tree, and travels to England to meet her relatives, it isn't long before she discovered her family's dark secrets.Wasted potential, that's the first thought I had a jury this movie, it could and should have been a good watch, but ultimately it disappointed.First off, this ridiculous portrayal of The Brits, how come Americans ways get it so wrong, Britain felt like a strange setting for this vampire story, but the first stumbling block, the setting. " />

        <ReactionCard RevieName="nolanroshto" ReviewDate="25 August 2022" ReviewKeyword="I sure did watch this" ReviewContent="That's about the most I can say about this. It was in fact something I watched.It fails at being a horror It fails at being a romance It could've been a passable mystery, but the trailer spoiled it.It wasn't bombastic enough to be fun, but it wasn't well-written enough to justify its dullness.At best it's a way to spend an evening. Although, personally, if it wasn't for the fact that I got to watch it for free (I work at a movie theater), then I would've been dissatisfied with my purchase." />

      </div>

      <hr className='HRow'/>

      <div className=''>
        <div className="CastName ms-5 ps-5">
          StoryLine:
        </div>
        <div className=' ms-5 ps-5 col-lg-10 col-md-8 col-sm-8 col-xs-8 Storyline'>
        After the death of her mother and having no other known relatives, Evie (Nathalie Emmanuel) takes a DNA test...and discovers a long-lost cousin she never knew she had. Invited by her newfound family to a lavish wedding in the English countryside, she's at first seduced by the sexy aristocrat host but is soon thrust into a nightmare of survival as she uncovers twisted secrets in her family's history and the unsettling intentions behind their sinful generosity
        </div>
        <div className='row ms-5 ps-5 mt-3'>
        <Keybtn Keywords="Vampire"/>
        <Keybtn Keywords="Gothic"/>
        <Keybtn Keywords="Feminism"/>
        <Keybtn Keywords="Suicide"/>
        <Keybtn Keywords="Suicide By Hanging"/>
        <Keybtn Keywords="Death"/>
        </div>
        <div className='ms-5 ps-5 mt-3 '>
          <Link to="https://www.imdb.com/title/tt12873562/plotsummary/" className='PlotSummary'>Plot Summary</Link>
        </div>
      </div>

      <hr className='HRow'/>

      <div>
        <div className="CastName ms-5 ps-5">
          Details:
        </div>
        <DetailsNetflix DetailsInfo="Release Date:" Details="August 26, 2022 (United States)"/>
        <DetailsNetflix DetailsInfo="Country of Origin:" Details="United States, Hungary"/>
        <DetailsNetflix DetailsInfo="Languages:" Details="English"/>
        <DetailsNetflix DetailsInfo="Also known as:" Details="The Bride"/>
        <DetailsNetflix DetailsInfo="Filming locations:" Details="Nádasdy Mansion in Nádasladány, Hungary(exterior of the castle where Evie meets Walter)"/>
        <DetailsNetflix DetailsInfo="Production company:" Details="Screen Gems, Mid Atlantic Films"/>
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

export default Theinvitation
