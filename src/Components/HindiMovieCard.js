import React from 'react'



function HindiMovieCard({imgUrl,filmName,timeDuration,filmType}) {
  return (
    <>
     <div className='card shadow-lg mb-2'style={{backgroundColor:'#282A3A'}}>
                <a href="/pages/webdesign.html"><img src={imgUrl} class="card-img-top" alt="..." style={{height:'270px'}}/></a>
                <h6 style={{color:'white',marginLeft:'15px'}} className='mt-3'>{filmName}</h6>
                <p style={{color:'white',marginLeft:'15px'}}>{timeDuration} <span style={{color:'red',marginLeft:'15px'}}>{filmType}</span></p>
     </div>
    </>
  )
}

export default HindiMovieCard