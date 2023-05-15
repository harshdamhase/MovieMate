import React from 'react';
import './SeasonBtn.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function SeasonBtn({SeasonNum}) {
  return (
    <>
      <div className='SeasonNum'>
        {SeasonNum}
      </div>
    </>
  )
}

export default SeasonBtn
