import React from 'react';
import "./AmazonStarCasts.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function AmazonStarCasts({imgURl,StarName,StarMovieName}) {
  return (
    <>
    <div class="card AmazonStarCasts h-50  ms-4 mb-1 col-lg-3 ms-2 col-sm-5 col-md-5 col-xs-5" >
        <div class="row g-0">
            <div class="col-md-4">
            <img src={imgURl} class="img-fluid starphoto" alt="..."/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">{StarName}</h5>
                <p class="card-text StarName">{StarMovieName}</p>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}


export default AmazonStarCasts

