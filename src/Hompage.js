import React from 'react'
import './Homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../src/Components/NavbarComp';
import vid1 from '../src/video/vid1.mp4'




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
            <div ><span className='title-style'>Release:</span><span className='inside'>Date:16 June 2023 (India)</span></div>
            <div><span className='title-style'>Director: </span><span  className='inside'> Peter Sohn</span></div>
            <div><span className='title-style'>Distributed by: </span><span  className='inside'>  Walt Disney Studios Motion Pictures</span></div>
            <div><span className='title-style'>Language: </span><span  className='inside'>English</span></div>
            <div><span className='title-style mt-2'>Genres: </span>

                  <span className='geners-style mt-2'>Animation </span>
                  <span className='geners-style mt-2'>Comedy</span>
                  <span className='geners-style mt-2'>Adventure </span>
                  <span className='geners-style mt-2'>Fantasy</span>
            
                  <div><span className='title-style mt-10'>Storyline: </span></div>
                  {/* <div ><span className='title-style mt-2 '>Release:</span><span className='inside'> In a city where fire, water, land, and air residents live together, a fiery young woman and a go-with-the-flow guy discover something elemental: how much they actually have in common.</span></div>   
                 */}
          
                  
            </div>
          </div>
          <div className='storyline-container ms-5 me-5 row'>
          <div className='col-lg-12 col-sm-12 col-md-12  title-style me-5 ms-5 mt-2 justify-content '><span  className='inside me-5'>
           In a city where fire, water, land, and air residents live together, a fiery young woman and a go-with-the-flow guy discover something elemental: how much they actually have in common.
           The film journeys alongside an unlikely pair, Ember and Wade, in a city where fire-, water-, land- and air-residents live together. The fiery young woman and the go-with-the-flow guy are about to discover something elemental: how much they actually have in common.</span> </div>
          </div>
          

    </div>  

    

   </>
   

  
  )
}


export default Hompage