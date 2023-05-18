import React from 'react'
import "./StarCast.css"

function TamilTrailer({Thrillerimg,ThrillerTitle,ThrillerDesc }) {
  return (
    <>
      <div class="card col-lg-3 col-md-2 col-sm-4 col-xs-4 m-4 Tamilcardpic">
  <div className='Thrillerimg'>
  <img src={Thrillerimg} class="card-img-top mt-2" alt="..."/>
  </div>
  <div class="card-body ">
    <h5 class="card-title">{ThrillerTitle}</h5>
    <p class="card-text ThrillerDesc">{ThrillerDesc}</p>
    <div className='ThrillerText'>
    <button class="btn btn-primary">Know More</button>
    </div>
  </div>
</div>  
    </> 
  )
}

export default TamilTrailer
