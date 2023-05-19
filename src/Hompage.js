import React from 'react';
import './Homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../src/Components/NavbarComp';
import vid1 from '../src/video/vid1.mp4';
import vid2 from '../src/video/vid2.mp4';
import vid3 from '../src/video/vid3.mp4';
import vid4 from '../src/video/vid4.mp4';
import vid5 from '../src/video/vid5.mp4';
import vid6 from '../src/video/vid6.mp4';
import vid7 from '../src/video/vid7.mp4';

import vid8 from '../src/video/vid8.mp4';
import vid9 from '../src/video/vid9.mp4';
import vid10 from '../src/video/vid10.mp4';
import vid11 from '../src/video/vid11.mp4';
import vid12 from '../src/video/vid12.mp4';

import vid13 from '../src/video/vid13.mp4';
import vid14 from '../src/video/vid14.mp4';
import vid15 from '../src/video/vid15.mp4';
import vid16 from '../src/video/vid16.mp4';
import vid17 from '../src/video/vid17.mp4';
import vid18 from '../src/video/vid18.mp4';
import vid19 from '../src/video/vid19.mp4';
import ReviewCard from '../src/Components/ReviewCard';
import TrailerCard from './Components/TrailerCard';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Subscribe from '../src/Components/Footer';

function Hompage() {
  return (
    <>
    <NavbarComp/>
      <div className="row video-container " >
        <video className="col-lg-7 col-sm-10 col-md-10 ms-5 mb-2 video-height"autoPlay loop controls muted>
          <source src={vid1} type="video/mp4" />
        </video>

          <div className=' col-lg-4 col-sm-8 col-md-8 ms-5 info '>
            <img className="img-fluid elementalimg " src="https://mickeyblog.com/wp-content/uploads/2023/04/Elemental-Main-720x340.jpg"/>
            <font className="also-like">Upcoming Movie</font>
            <div >
              <span className='title-style'>Release:</span><span className='inside'>Date:16 June 2023 (India)</span>
            </div>
            <div>
              <span className='title-style'>Director: </span>
              <span  className='inside'> Peter Sohn</span>
            </div>
            <div>
              <span className='title-style'>Distributed by: </span>
              <span  className='inside'>  Walt Disney Studios Motion Pictures</span>
            </div>
            <div>
              <span className='title-style'>Language: </span>
              <span  className='inside'>English</span>
            </div>
            <div>
                <span className='title-style mt-2'>Genres: </span>
                <span className='geners-style mt-2'>Animation </span>
                <span className='geners-style mt-2'>Comedy</span>
                <span className='geners-style mt-2'>Adventure </span>
                <span className='geners-style mt-2'>Fantasy</span>
              <div>
                <span className='title-style mt-10'>Storyline: </span>
              </div>
            </div>
          </div>
        <div className='storyline-container me-5 row'>
          <div className='col-lg-12 col-sm-8 col-md-12  title-style me-5 ms-5 mt-2 inside textalign '>
           In a city where fire, water, land, and air residents live together, a fiery young woman and a go-with-the-flow guy discover something elemental: how much they actually have in common.<br/>
           The film journeys alongside an unlikely pair, Ember and Wade, in a city where fire-, water-, land- and air-residents live together. The fiery young woman and the go-with-the-flow guy<br/> are about to discover something elemental: how much they actually have in common. 
          </div>
        </div>
      </div> 

    <div className='row trailer-name col-lg-12 ms-5 ps-5 mt-5 '>
        <font className="also-like">
         More LIke This
        </font>
        <TrailerCard ImgUrl="https://www.amadorvalleytoday.org/wp-content/uploads/2023/04/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_FMjpg_UX1000_-609x900.jpg" Rating="7.8/10" Starimg="https://cdn-icons-png.flaticon.com/128/9796/9796698.png" title="Mario Brows" link="https://youtu.be/TnGl01FkMMo" WatchTriler="Watch Trailer" className="TrailerCard" />

        <TrailerCard ImgUrl="https://m.media-amazon.com/images/M/MV5BMGIxMmJjZDctOGQwOC00OTNkLWJiNmItN2M3M2M2NmExYWQ1XkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_.jpg" Rating="7.8/10" Starimg="https://cdn-icons-png.flaticon.com/128/9796/9796698.png" title="Fulrani" link="https://youtu.be/p-au4yC6OhY" WatchTriler="Watch Trailer" className="TrailerCard" />

        <TrailerCard ImgUrl="https://assetscdn1.paytm.com/images/cinema/adipurush2-min-c8528ea0-e671-11ed-82e8-cf24b6293ec4.jpg" Rating="6.0/10" Starimg="https://cdn-icons-png.flaticon.com/128/9796/9796698.png" title="Adipurush" link="https://youtu.be/scNmYjoR-qM" WatchTriler="Watch Trailrt" className="TrailerCard" />

        <TrailerCard ImgUrl="https://static.toiimg.com/thumb/msid-96573171,width-219,height-317,imgsize-19520/96573171.jpg" Rating="8.8/10" Starimg="https://cdn-icons-png.flaticon.com/128/9796/9796698.png" title="Ps-2" link="" WatchTriler="Watch Trailer" className="TrailerCard" />

        <TrailerCard ImgUrl="https://lumiere-a.akamaihd.net/v1/images/p_thelittlemermaid_2023_final_796_94759fcc.jpeg?region=0%2C0%2C540%2C810" Rating="7.1/10" Starimg="https://cdn-icons-png.flaticon.com/128/9796/9796698.png" title="Little Mermaid" link="https://youtu.be/kpGo2_d3oYE" WatchTriler="Watch Trailer" className="TrailerCard" />

        
    </div>

      <div className=' row mt-5 ms-5 ps-5 col-lg-12 '>
      <div className='also-likee mb-3 '>
        Recommended Hindi Movies  <span ><Link className='see-More' to = "/Hindi"> See All › </Link></span>
      </div>
      <div className='row poster-container'>
        <div className='img-box'>
          <img className='poster-img m-2 ' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgMTQ5LjdLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00343918-bcrtrqpgtc-portrait.jpg'/>

          <img className='poster-img  m-2' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni40LzEwICA3Ny45SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00339118-gvcavdpszx-portrait.jpg'/>

          <img className='poster-img  m-2' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny43LzEwICA4OUsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00347237-bgdrxtrhxz-portrait.jpg'/>

           <img className='poster-img m-2 ' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC41LzEwICAxMjFLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00025234-nlvefwacwu-portrait.jpg'/>

          <img className='poster-img m-2 ' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny43LzEwICA0LjhLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00118776-mywkpmneqt-portrait.jpg'/>

        </div>
      </div>
    </div>




    <div className='row mt-5 ms-5 ps-5 col-lg-12 '>
      <div className='also-likee mb-3  '>
        Recommended English Movies  <span ><Link className='see-More' to = "/English"> See All › </Link></span>
      </div>
      <div className='row poster-container '>
        <div className='img-box'>
          <img className='poster-img m-2  ' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4zLzEwICAzNS45SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310794-nmwukaluxy-portrait.jpg'/>

          <img className='poster-img  m-2' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS41LzEwICAxOC44SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00352085-aghrdlnkqp-portrait.jpg'/>

          <img className='poster-img  m-2' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICA3LjdLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00337077-hpdszpszml-portrait.jpg'/>

          <img className='poster-img m-2' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4xLzEwICAyNi45SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00349309-ynqvrxxagk-portrait.jpg'/>

          <img className='poster-img m-2 ' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny40LzEwICAxLjFLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00352714-lzrvetqava-portrait.jpg'/>

        

        </div>
      </div>
    </div>

    <div className=' row mt-5 ms-5 ps-5 col-lg-12 '>
        <div className='also-likee mb-3  '>
          Recommended Marathi Movies  <span ><Link className='see-More' to = "/Marathi"> See All › </Link></span>
        </div>
       <div className='row poster-container '>
      <div className='img-box'>
          <img className='poster-img m-2  ' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC8xMCAgMS4zSyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00357451-jgmzaupytp-portrait.jpg'/>

          <img className='poster-img  m-2' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4zLzEwICA1LjJLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00339859-uqynzgmzes-portrait.jpg'/>

          <img className='poster-img  m-2' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4yLzEwICAxLjNLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00327818-vzqxqbhjwf-portrait.jpg'/>

          <img className='poster-img m-2' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-MTgsIE1heSAyMDIz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00341806-qkhkpavfjf-portrait.jpg'/>

          <img className='poster-img m-2 ' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny44LzEwICA4MjUgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00354758-fvglzdurbt-portrait.jpg'/>

        

        </div>
      </div>
   </div>


   <div className=' row mt-5 ms-5 ps-5 col-lg-12 '>
        <div className='also-likee mb-3  '>
          Recommended Tamil Movies  <span ><Link className='see-More' to = "/Tamil"> See All › </Link></span>
        </div>
       <div className='row poster-container '>
      <div className='img-box'>
          <img className='poster-img m-2  ' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4xLzEwICAxMC4zSyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00355873-ykrbqmsrdb-portrait.jpg'/>

          <img className='poster-img  m-2' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICA3My4ySyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00348725-qjtqfsmnqa-portrait.jpg'/>

          <img className='poster-img  m-2' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS40LzEwICAyLjdLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00358164-sspcbkdhdj-portrait.jpg'/>

          <img className='poster-img m-2' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni44LzEwICBsaW1pdGVkIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00311948-cbhbcyscuc-portrait.jpg'/>

          <img className='poster-img m-2 ' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC42LzEwICAxOC4zSyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00354148-pzgjgeztnl-portrait.jpg'/>

       </div>
      </div>
   </div>

   <div className=' row mt-5 ms-5 ps-5 col-lg-12 '>
        <div className='also-likee mb-3  '>
          Here Are The OTT Orignals
        </div>
       <div className='poster-container '>
      
      </div>
   </div>


   <div className='CarouselDiv'>
      <Carousel className='col-lg-10 '>
      <Carousel.Item>
        <img  style={{height:'350px' , width:'500px' }}
          className="d-block w-100 carousel-container"
          src="https://www.whats-on-netflix.com/wp-content/uploads/2022/07/netflix-category-codes-2023.png "
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Latest Thriller Movies</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'350px'}}
          className="d-block w-100 carousel-container"
          src="
          https://www.nylonthailand.com/wp-content/uploads/2021/06/For-Web-Nylon__3-1210x423.jpg
         "
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Latest Horror Movies </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'350px'}}
          className="d-block w-100 carousel-container"
          src="https://satkurier.pl/uploads/95315.jpg"
           alt="Third slide"
        />



        <Carousel.Caption>
          <h3>Latest Comedy Movies</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

    <div className=' row mt-5 ms-5 ps-5 col-lg-12 '>
        <div className='NetLogoDiv'>
         <img className='netflix-logo center'  src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'/> 
        </div>
    </div>
      <div className='row mt-5 MagicDiv' >  
          <ReviewCard video={vid2}
          Title="The Sound Of Magic"
          link=""/>

          <ReviewCard video={vid3}
          Title="Wensday"
          link="/Wednesday" />

          <ReviewCard video={vid4}
          Title="Squid Game"
          link="/Squid_Game"/>
          
          <ReviewCard video={vid5}
          Title="The Sandman"
          link="" />

         <ReviewCard video={vid6}
          Title="Lock&key"
          link="" />

        <ReviewCard video={vid7}
          Title="Fate:The wing Saga"
          link="" />

      </div>


      <div className=' row mt-5 ms-5 ps-5 col-lg-12 '>
        <div className='NetLogoDiv '>
         <img className='hotstar-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Disney%2B_Hotstar_logo.svg/2560px-Disney%2B_Hotstar_logo.svg.png'/>
        </div>
    </div>

    <div className='row mt-5 MagicDiv' >  
          <ReviewCard video={vid8}
          Title="Beauty and the Beast "
          link=""/>

          <ReviewCard video={vid9}
          Title=" The Nutcracker and the Four Realms "
          link="/HotstarMovie2" />

          <ReviewCard video={vid10}
          Title="Haunted Mansion"
          link="/HotstarMovie2"/>
          
          <ReviewCard video={vid11}
          Title= "Disenchanted "
          link= "" />

         <ReviewCard video={vid12}
          Title="Upside Down"
          link="" />

        <ReviewCard video={vid13}
          Title="Godmothered"
          link="" />

      </div>

        
      <div className=' row mt-5 ms-5 ps-5 col-lg-12 '>
        <div className='NetLogoDiv'>
         <img className='netflix-logo center'  src= 'https://www.pngplay.com/wp-content/uploads/3/Amazon-Prime-Logo-Free-PNG.png'/> 
        </div>
    </div>

                
      <div className='row mt-5 MagicDiv' >  
          <ReviewCard video={vid14}
          Title="The Family Man "
          link="AmazonMovie1"/>

          <ReviewCard video={vid15}
          Title=" Sonic The Hedgehog (2020)"
          link="AmazonMovie2"/>

          <ReviewCard video={vid16}
          Title="Just Add Magic_ Mystery City"
          link=""/>
          
          <ReviewCard video={vid17}
          Title= "Shaakuntalam  "
          link= "" />

         <ReviewCard video={vid18}
          Title="Cinderella"
          link="" />

        <ReviewCard video={vid19}
          Title="Clifford the Big Red Dog"
          link="" />

      </div>

        <Subscribe/>
     

         
         
      


    

   </>
   

  
  )
}
export default Hompage