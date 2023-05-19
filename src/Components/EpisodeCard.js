import React from 'react'
import "./EpisodeCard.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function EpisodeCard({EpisodeName,EpisodeKeyword,EpisodeContent}) {
  return (
    <>
    <div class="card float-left col-lg m-4 mb-3 EpisodeCard p-3" >
        <div class="card-header col-lg-3">{EpisodeName}</div>
        <div class="card-body  col-lg">
            <h5 class="card-title EpisodeText">{EpisodeKeyword}</h5>
            <p class="card-text EpisodeText">{EpisodeContent}</p>
        </div>
    </div>
      
    </>
  )
}

export default EpisodeCard
