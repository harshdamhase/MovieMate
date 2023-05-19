import React from 'react'
import NavbarComp from '../../Components/NavbarComp'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tamilcards from '../../Components/Tamilcards';
import img1 from '../TamilMovie/Images/Hit Tamil.jpg';
import img2 from "../TamilMovie/Images/lidsa.jpg";
import img3 from "../TamilMovie/Images/patro.webp";
import TamilCarousel from '../../Components/TamilCarousel';
import "./Tamil.css";
import TamilTrailer from '../../Components/TamilTrailer';

function Tamil() {
  return (
    <>
      <NavbarComp/>
      <div className='TamilCarousel'>
      <TamilCarousel img1={img1} img2={img2} img3={img3}/>
      </div>
      <hr className='HRow'/>
      <div >
        <p className='CastName ms-5'>
          Popular Tamil Movies:
        </p>
        <div className='row TamilcardsDiv'>
          <Tamilcards img="https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Pariyerum_Perumal.jpg/220px-Pariyerum_Perumal.jpg" Title="Pariyerum Perumal"/>
          <Tamilcards img="https://m.media-amazon.com/images/M/MV5BNDExN2FlYWUtMDUyNi00YTQ2LTljOTMtYjc1MWY4YjMyNTQxXkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_.jpg" Title="Anbe Sivam"/>
          <Tamilcards img="https://m.media-amazon.com/images/I/91dTdypmIpL._RI_.jpg" Title="Jai Bhim"/>
          <Tamilcards img="https://m.media-amazon.com/images/M/MV5BOThkNjFiMzMtNGY5Yi00MDAxLTgxYjItMTZiN2RiMGNiOTA4XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_FMjpg_UX1000_.jpg" Title="Soorarai Pottru"/>
          <Tamilcards img="https://images.moviebuff.com/7e0e3b3d-08df-4b0d-a459-83d0771326b5?w=1000" Title="Thevar Magan"/>
          <Tamilcards img="https://m.media-amazon.com/images/M/MV5BMGMwM2ZjNDEtNDE3Mi00ODg5LTk3ZjMtMTlmYzA3NjAwZTY4XkEyXkFqcGdeQXVyMTY0MDk0NjE3._V1_FMjpg_UX1000_.jpg" Title="Soppana Sundari" />
          <Tamilcards img="https://m.media-amazon.com/images/M/MV5BNmQ3NGM5ODMtNDhjYS00MDQwLWEwNjItNjZiNjdkMmQ3NjQzXkEyXkFqcGdeQXVyMTY0MDk0NjE3._V1_.jpg" Title="Ponniyin Selvan: Part Two" />
          <Tamilcards img="https://m.media-amazon.com/images/M/MV5BYzAyNGMwYzItZDc2Zi00MjUwLWJjZmItZmQwMWIzMDIxNTdmXkEyXkFqcGdeQXVyMTQ4NzY3NjA2._V1_.jpg" Title="Tamil Rockers" />
          <Tamilcards img="https://m.media-amazon.com/images/M/MV5BN2ZkN2YwNmQtNzg4Ni00NGU1LTkwNGUtYjQ5ZjA1ZDRlMDA5XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg" Title="Yaathisai" />
          <Tamilcards img="https://m.media-amazon.com/images/M/MV5BYWJmYmZmMmItMjllNC00YTRkLWIyNjctMjYwNTc5YjYzYWQwXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_.jpg" Title="Viduthalai: Part 1" />
          <Tamilcards img="https://m.media-amazon.com/images/M/MV5BYzMwNjFiMzUtMWM5My00MzE5LTliMDUtY2Y4Y2VmYzE3OTExXkEyXkFqcGdeQXVyMTY0MDk0NjE3._V1_FMjpg_UX1000_.jpg" Title="ThiruvinKural" />
          <Tamilcards img="https://m.media-amazon.com/images/M/MV5BZjZlNGRhNTQtZTY1Ni00MjdhLWJhYjEtN2NkMjVmNTAwMjZmXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg" Title="Ponniyin Selvan: Part I" />
          <Tamilcards img="https://m.media-amazon.com/images/M/MV5BZTkzMjJiMTMtNDU4Yy00YmRiLWE1OTEtNjQ0NDljMjMxNzhiXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_FMjpg_UX1000_.jpg" Title="Pathu Thala" />
          <Tamilcards img="https://m.media-amazon.com/images/M/MV5BNjE0OWNlYjEtNTNlNi00MDBkLTg3MDEtYjYxMWE4MWMyYTRmXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg" Title="Dada" />
          <Tamilcards img="https://m.media-amazon.com/images/M/MV5BODQ0ZGRmYzYtYmViOC00Y2Y0LThiYWEtMTg0YjI0ZmM1MjUyXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg" Title="Farhana" />
        </div>
      </div>
      <hr className='HRow'/>

      <div id='Thriller'>
        <p className='CastName ms-5'>
          Thriller Movies:
        </p>
        <div className='row'>
        <TamilTrailer Thrillerimg="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT27-2Cx2HY-7sneYNNzWf9ej3wL3Q2zWmpiLcu9bXd2A4djqZB" ThrillerTitle="Vikram Vedha" />
        <TamilTrailer Thrillerimg="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT27-2Cx2HY-7sneYNNzWf9ej3wL3Q2zWmpiLcu9bXd2A4djqZB" ThrillerTitle="Vikram Vedha" />
        <TamilTrailer Thrillerimg="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT27-2Cx2HY-7sneYNNzWf9ej3wL3Q2zWmpiLcu9bXd2A4djqZB" ThrillerTitle="Vikram Vedha" />
        <TamilTrailer Thrillerimg="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT27-2Cx2HY-7sneYNNzWf9ej3wL3Q2zWmpiLcu9bXd2A4djqZB" ThrillerTitle="Vikram Vedha" />
        <TamilTrailer Thrillerimg="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT27-2Cx2HY-7sneYNNzWf9ej3wL3Q2zWmpiLcu9bXd2A4djqZB" ThrillerTitle="Vikram Vedha" />
        <TamilTrailer Thrillerimg="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT27-2Cx2HY-7sneYNNzWf9ej3wL3Q2zWmpiLcu9bXd2A4djqZB" ThrillerTitle="Vikram Vedha" />
        <TamilTrailer Thrillerimg="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT27-2Cx2HY-7sneYNNzWf9ej3wL3Q2zWmpiLcu9bXd2A4djqZB" ThrillerTitle="Vikram Vedha" />
        <TamilTrailer Thrillerimg="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT27-2Cx2HY-7sneYNNzWf9ej3wL3Q2zWmpiLcu9bXd2A4djqZB" ThrillerTitle="Vikram Vedha" />
        </div>
      </div>


    </>
  )
}

export default Tamil