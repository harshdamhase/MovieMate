import React from 'react'
import "./SeasonBtn.css"

function DetailsNetflix({DetailsInfo, Details}) {
  return (
    <>
      <div className='ms-5 ps-5 mt-3'>
            <font className="ReleaseDateinfo">
                {DetailsInfo} <font className='Details'>{Details}</font>
            </font>
        </div>
        <hr/>
    </>
  )
}

export default DetailsNetflix
