import React from 'react'
import "./ReactionCard.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function ReactionCard({RevieName,ReviewDate,ReviewKeyword,ReviewContent}) {
  return (
    <>
    <div class="card mb-3 ReactionCard p-3" >
        <div class="card-header">{RevieName}</div>
        <p class="card-Date">{ReviewDate}</p>
        <div class="card-body">
            <h5 class="card-title">{ReviewKeyword}</h5>
            <p class="card-text">{ReviewContent}</p>
        </div>
    </div>
      
    </>
  )
}

export default ReactionCard
