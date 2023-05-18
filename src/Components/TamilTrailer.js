import React from 'react'
import "./SeasonBtn.css"

function TamilTrailer({Thrillerimg,ThrillerTitle,ThrillerDesc }) {
  return (
    <>
      <div class="card col-lg-2 col-md-2 col-sm-4 col-xs-4 m-4 Tamilcardpic">
  <img src={Thrillerimg} class="card-img-top mt-2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{ThrillerTitle}</h5>
    <p class="card-text">{ThrillerDesc}</p>
    <button class="btn btn-primary">Know More</button>
  </div>
</div>  
    </> 
  )
}

export default TamilTrailer
