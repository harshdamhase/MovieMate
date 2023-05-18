import React from 'react'
import "./StarCast.css"

function TamilTrailer({Thrillerimg,ThrillerTitle,ThrillerDesc }) {
  return (
    <>
      <div class="card col-lg-3 col-md-3 col-sm-6 col-xs-6 m-4 Tamilcardpic">
        <img src={Thrillerimg} class="card-img-top mt-2 " alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{ThrillerTitle}</h5>
          <p class="card-text">{ThrillerDesc}</p>
          <div className='Thrillerbtn'>
          <button class="btn btn-primary">Know More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TamilTrailer
