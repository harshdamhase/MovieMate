import React from 'react'

function EnglishMovieCard({imgUrl,filmName,timeDuration,filmType}) {
  return (
    <>
          <div className='card shadow-lg mb-2'style={{backgroundColor:'#282A3A',border: '4px solid black',height:'400px'}}>
                <a href="/pages/webdesign.html"><img src={imgUrl} class="card-img-top" alt="..." style={{height:'270px'}}/></a>
                <h6 style={{color:'white',marginLeft:'15px'}} className='mt-3'>{filmName}</h6>
                <p style={{color:'white',marginLeft:'15px'}}>{timeDuration} <span style={{color:'grey',marginLeft:'15px'}}>{filmType}</span></p>
     </div>
    </>
  )
}

export default EnglishMovieCard