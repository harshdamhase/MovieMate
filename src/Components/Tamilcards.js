import React from 'react'
import "./SeasonBtn.css"

function Tamilcards({img,Title,}) {
  return (
    <>
        <div class="card col-lg-2 col-md-4 col-sm-4 col-xs-4 m-3 Tamilcardpic">
            <div className='Cardimg'>
            <img src={img} class="card-img-top pe-3 img-fluid " alt="..."/>
            </div>
            <div class="card-body">
                <p class="card-text Titlehead">{Title}</p>
            </div>
        </div>
    </>
  )
}

export default Tamilcards
