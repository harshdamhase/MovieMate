import React from 'react'
import "./SeasonBtn.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      
    <div class=" FooterDiv ">
    <footer class="text-center text-lg-start border border-white mt-xl-5 pt-4">
    <div class="container p-4">
      <div class="row">
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <h5 class="text-uppercase Headline1 mb-4">OTT Platforms</h5>

          <ul class="list-unstyled mb-4">
            <li>
            <Link to="" className='text-white textNames'>Netflix</Link>
            </li>
            <li>
            <Link to="" className='text-white textNames'>Amazon Prime</Link>
            </li>
            <li>
            <Link to="" className='text-white textNames'>Disney & Hotstar</Link>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <h5 class="text-uppercase Headline1 mb-4">Assistance</h5>

          <ul class="list-unstyled">
            <li>
            <Link to="" className='text-white'>Contact us</Link>
            </li>
            <li>
            <Link to="" className='text-white'>Size Guide</Link>
            </li>
            <li>
            <Link to="" className='text-white'>Shipping Information</Link>
            </li>
            <li>
            <Link to="" className='text-white'>Returns & Exchanges</Link>
            </li>
            <li>
            <Link to="" className='text-white'>Payment</Link>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <h5 class="text-uppercase Headline1 mb-4">Careers</h5>

          <ul class="list-unstyled">
            <li>
              <Link to="" className='text-white'>Jobs</Link>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 Headline1 col-md-6 mb-4 mb-lg-0">
          <h5 class="text-uppercase mb-4">Sign up to our newsletter</h5>

          <div class="form-outline form-white mb-4">
            <input type="email" id="form5Example2" class="form-control" />
            <label class="form-label" for="form5Example2">Email address</label>
          </div>

          <button type="submit" class="btn Headline1 btn-outline-danger btn-block">Subscribe</button>
        </div>
      </div>

    </div>
    <div class="text-center Headline1 p-3 border-top border-white">
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
  </footer>
  
</div>
    </>
  )
}

export default Footer
