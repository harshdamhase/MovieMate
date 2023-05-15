import React from 'react';
import './Homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../src/Components/NavbarComp';
import vid1 from '../src/video/vid1.mp4';
import ReviewCard from '../src/Components/ReviewCard';
import TrailerCard from './Components/TrailerCard';




function Hompage() {
  return (
    <>
    <NavbarComp/>
      <div className="row video-container mt-4 " >
        <video className="col-lg-7 col-sm-10 col-md-10 ms-5 mb-2 video-height" controls autoplay muted>
            <source src={vid1} type="video/mp4" />
        </video>

          <div className=' col-lg-4 col-sm-8 col-md-8 ms-5 info '>
            <img className="img-fluid elementalimg " src="https://mickeyblog.com/wp-content/uploads/2023/04/Elemental-Main-720x340.jpg"/>
            <font className="Desc">Upcoming Movie </font>
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

    <div className='row trailer-name col-lg-12 ms-5 ps-5 '>
        <font className="Desc mb-3">
          Adrak and Lahsan
        </font>
        <TrailerCard ImgUrl="https://www.amadorvalleytoday.org/wp-content/uploads/2023/04/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_FMjpg_UX1000_-609x900.jpg" Rating="7.8/10" Starimg="https://cdn-icons-png.flaticon.com/128/9796/9796698.png" title="bchjakhejeb" WatchTriler="cqjkwebvhjfv" className="TrailerCard" />

        <TrailerCard ImgUrl="https://www.amadorvalleytoday.org/wp-content/uploads/2023/04/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_FMjpg_UX1000_-609x900.jpg" Rating="7.8/10" Starimg="https://cdn-icons-png.flaticon.com/128/9796/9796698.png" title="bchjakhejeb" WatchTriler="cqjkwebvhjfv" className="TrailerCard" />

        <TrailerCard ImgUrl="https://www.amadorvalleytoday.org/wp-content/uploads/2023/04/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_FMjpg_UX1000_-609x900.jpg" Rating="7.8/10" Starimg="https://cdn-icons-png.flaticon.com/128/9796/9796698.png" title="bchjakhejeb" WatchTriler="cqjkwebvhjfv" className="TrailerCard" />

        <TrailerCard ImgUrl="https://www.amadorvalleytoday.org/wp-content/uploads/2023/04/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_FMjpg_UX1000_-609x900.jpg" Rating="7.8/10" Starimg="https://cdn-icons-png.flaticon.com/128/9796/9796698.png" title="bchjakhejeb" WatchTriler="cqjkwebvhjfv" className="TrailerCard" />

        <TrailerCard ImgUrl="https://www.amadorvalleytoday.org/wp-content/uploads/2023/04/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_FMjpg_UX1000_-609x900.jpg" Rating="7.8/10" Starimg="https://cdn-icons-png.flaticon.com/128/9796/9796698.png" title="bchjakhejeb" WatchTriler="cqjkwebvhjfv" className="TrailerCard" />

        <TrailerCard ImgUrl="https://www.amadorvalleytoday.org/wp-content/uploads/2023/04/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_FMjpg_UX1000_-609x900.jpg" Rating="7.8/10" Starimg="https://cdn-icons-png.flaticon.com/128/9796/9796698.png" title="bchjakhejeb" WatchTriler="cqjkwebvhjfv" className="TrailerCard" />
    </div>

    

    
    <div className='mt-5 ms-5 '>
      <div className='also-like '>
        You May Also Like 
      </div>
      <div className='poster-container'>
        <div className='img-box'>
          <img className='poster-img m-2 ' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgMTQ5LjdLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00343918-bcrtrqpgtc-portrait.jpg'/>

          <img className='poster-img   m-2' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4zLzEwICAzNC40SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310794-nmwukaluxy-portrait.jpg'/>

          <img className='poster-img  m-2' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC8xMCAgMS4ySyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00357451-jgmzaupytp-portrait.jpg'/>

          <img className='poster-img m-2' src=''/>

          <img className='poster-img m-2 ' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny41LzEwICAxLjFLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00352714-lzrvetqava-portrait.jpg'/>

          <img className='poster-img m-2 ' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgMTQ5LjdLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00343918-bcrtrqpgtc-portrait.jpg'/>

        </div>
      </div>
    </div>

         
         
      


    

   </>
   

  
  )
}


export default Hompage