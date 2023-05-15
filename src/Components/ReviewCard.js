import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'

function ReviewCard({imgUrl,Title,Gener,Overview}) {
  return (
  <>

<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img className='card-size' src={imgUrl} class="img-fluid rounded-start" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{Title}</h5>
        <p class="card-text">{Gener}</p>
        <p class="card-text"><small class="text-body-secondary">{Overview}</small></p>
      </div>
    </div>
  </div>
</div>

  </>
  )
}

export default ReviewCard
