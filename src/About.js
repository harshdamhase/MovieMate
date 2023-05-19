import React from 'react'
import NavbarComp from './Components/NavbarComp';
import AboutComp from './Components/AboutComp';

function About() {
  return (
   <>
     <NavbarComp/>
     <h1 className='text-center' style={{marginTop:'15px'}}>Our Team</h1>
     <div class="row my-3 mx-3 p-5">
     <div class="col-md-3">
     <AboutComp urlImg="https://github.com/Neeha0824.png" membName="Neeha" instagramUrl="https://instagram.com/its_nehu123?igshid=OGQ5ZDc2ODk2ZA== " githubUrl="https://github.com/Neeha0824"linkedinUrl="https://www.linkedin.com/in/neha-pawar-871a3a241"/>
     </div>
     <div class="col-md-3">
     <AboutComp urlImg="https://github.com/harshdamhase.png" membName="Harshda Mhase" instagramUrl="http://intagram.com/harshda_mhase" githubUrl="https://github.com/harshdamhase"linkedinUrl="https://www.linkedin.com/in/harshda-mhase-185504252/"/>
     </div>
     <div class="col-md-3">
     <AboutComp urlImg="https://github.com/Mr-Siddhant-Bagul.png" membName="Siddhant Bagul" instagramUrl="https://instagram.com/mr_siddhant_bagul?igshid=MzNlNGNkZWQ4Mg== " githubUrl="https://github.com/Mr-Siddhant-Bagul"linkedinUrl="https://www.linkedin.com/in/siddhant-bagul-6878501a0"/>
     </div>
     <div class="col-md-3">
     <AboutComp urlImg="https://github.com/pawan85074.png" membName="Pawan Raj" instagramUrl="https://instagram.com/pawanraj85074?igshid=ZDdkNTZiNTM=" githubUrl="https://github.com/pawan85074"linkedinUrl="https://www.linkedin.com/in/pawan-raj-7b8a9b217"/>
     </div>
     
    
     </div>
   </>
    
  )
}

export default About