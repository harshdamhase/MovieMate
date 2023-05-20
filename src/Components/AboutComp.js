import React from 'react'
import "./AboutComp.css"

function AboutComp({urlImg,membName,instagramUrl,linkedinUrl,githubUrl}) {
  return (
    <>
      <div class="card shadow-lg bg-body-secondary">
                <div>
                    <img src={urlImg} class="cards-img-top mt-5"/>
                    <div class="card-body">
                        <h4 class="text-center">{membName}</h4>
                      <a href={instagramUrl}>
                        <img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" class="socialmed-logo"/> </a>
                        <a href={githubUrl}>
                        <img src="https://cdn-icons-png.flaticon.com/128/733/733553.png" class="socialmed-logo"/> </a>
                        <a href={linkedinUrl}>
                            <img src="https://cdn-icons-png.flaticon.com/128/145/145807.png" class="socialmed-logo"/>
                      </a>
                    </div>
                  </div>
    
            </div>

    </>
  )
}

export default AboutComp