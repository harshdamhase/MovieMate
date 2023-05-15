import React from 'react';
import './MovieReviewCard.css';

function MovieReviewCard({ImgUrl}) {
  return (
    <>
      <div className=' DivPoster'>
        <img src={ImgUrl} className='col-lg-9 col-md-9 col-sm-9 col-xs-9 mt-3 posterImg img-fluid'/>
      </div>
    </>
  )
}

export default MovieReviewCard
