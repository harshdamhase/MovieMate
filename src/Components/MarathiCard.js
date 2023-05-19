import React from 'react'
import '../Components/MarathiCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function EnglishMovieCard({imgUrl,filmName,timeDuration,filmType}) {
  return (
    <>
       <div class="card col-lg-2 col-md-4 col-sm-4 col-xs-4 m-3  Tamilcardpic">
            <img src={imgUrl} class="card-img-top p-2 imgcard" alt="..."/>
            <div class="card-body">       
                <p class="card-text mt-3 cardName">{filmName}</p>
                <p className='timeduration'>{timeDuration} 
<span className='filmtype'>{filmType}</span></p>
            </div>
        </div>   
</>
  )
}

export default EnglishMovieCard



