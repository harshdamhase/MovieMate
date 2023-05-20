import React from 'react';
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function TrailerCard({ImgUrl,Rating, Starimg, title,link, WatchTriler }) {
  return (
    <>
        <div class= "card trailer-box">
            <img src={ImgUrl} class="card-img-top mt-2" alt="..."/>
            <div class="card-body">
            <p class="card-text">{Rating} <img src={Starimg} class="Starimg" alt="..."/></p>
            <h5 class="card-title">{title}</h5>
            <a href={link} class= "btn btn-primary border-custom">{WatchTriler}</a>
            </div>
        </div>
    </>
  )
}

export default TrailerCard
