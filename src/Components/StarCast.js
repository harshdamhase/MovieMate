import React from 'react';
import "./StarCast.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function StarCast({imgURl,StarName,StarMovieName,Episode}) {
  return (
    <>
    <div class="cards mb-1 col-lg-3 ms-5" >
        <div class="row g-0">
            <div class="col-md-4">
            <img src={imgURl} class="img-fluid imgRound rounded-start" alt="..."/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">{StarName}</h5>
                <p class="card-text">{StarMovieName}</p>
                <p class="card-text"><small class="text-body-secondary">{Episode}</small></p>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}


export default StarCast


