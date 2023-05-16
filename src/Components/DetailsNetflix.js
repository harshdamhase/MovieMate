import React from 'react'

function DetailsNetflix({DetailsInfo}) {
  return (
    <>
      <div className='ms-5 ps-5 mt-3'>
            <font className="ReleaseDateinfo">
                {DetailsInfo}
            </font>
            <hr/>
        </div>
    </>
  )
}

export default DetailsNetflix
