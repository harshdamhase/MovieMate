import React from 'react';
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function TrailerCard({ImgUrl,Rating, Starimg, title, WatchTriler }) {
  return (
    <>
        <div class="cards">
            <img src={ImgUrl} class="card-img-top" alt="..."/>
            <div class="card-body">
            <p class="card-text">{Rating} <img src={Starimg} class="Starimg" alt="..."/></p>
            <h5 class="card-title">{title}</h5>
            <a href="#" class="btn btn-primary">{WatchTriler}</a>
            </div>
        </div>
    </>
  )
}

export default TrailerCard
