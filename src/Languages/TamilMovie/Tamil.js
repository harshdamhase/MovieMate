import React from 'react'
import NavbarComp from '../../Components/NavbarComp'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tamilcards from '../../Components/Tamilcards';
import img1 from '../TamilMovie/Images/Hit Tamil.jpg';
import img2 from "../TamilMovie/Images/lidsa.jpg";
import img3 from "../TamilMovie/Images/patro.webp";
import TamilCarousel from '../../Components/TamilCarousel';
import "./Tamil.css";
import Footer from '../../Components/Footer';
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
        <div className='row TamilcardsDiv'>
        <TamilTrailer Thrillerimg="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT27-2Cx2HY-7sneYNNzWf9ej3wL3Q2zWmpiLcu9bXd2A4djqZB" ThrillerTitle="Vikram Vedha" ThrillerDesc="Nno-nonsense police officer Vikram and his partner Simon are on the hunt to capture a smuggler and murderer called Vedha."/>
        <TamilTrailer Thrillerimg="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSu0G-X_dMNKDp89q0Outh9g0i2S1_d8x1VgHnqxG6IxiBTVlmI" ThrillerTitle="Vishwaroopam" ThrillerDesc="Nirupama (Pooja Kumar) marries a dance instructor (Kamal Hassan) and she wants to end the marriage after three years to pursue her higher education." />
        <TamilTrailer Thrillerimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdh8K7C1o0av-JkACdDMDyPAMk5EcOCFVJIBl9gIbjcrWcuy9C" ThrillerTitle="Aaranya Kaandam" ThrillerDesc="Singam Perumal is old and useless for his wife, but he still is a mighty criminal. When he tries to beat his arch enemy Gajendran with a perfect plan, a series of incidents expose a dog-eat-dog world." />
        <TamilTrailer Thrillerimg="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQk3ltBykgvlKZcHapUHI7zsqJgJytFX__Fh6zq1VkF7s1GO18Q" ThrillerTitle="Pizza" ThrillerDesc="A man fears the supernatural when he returns from a pizza delivery covered in blood; he recounts what happened at the house." />
        <TamilTrailer Thrillerimg="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTeXiagBjEdidtap9KpxBpRo0Qe2UcvmHllC54OR6MM2XMQbLAh" ThrillerTitle="Visaranai" ThrillerDesc="A group of immigrants are tortured to plead guilty for a crime they didn't commit. When a policeman from their hometown helps to set them free, they agree to do him a favour in return, unaware of the trouble they are getting themselves into." />
        <TamilTrailer Thrillerimg="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRaA7W_dCpCeQa4ENgWkO0TocdjBs6FKF99F3BIdilSJOhIk3n0" ThrillerTitle="Sigappu Rojakkal" ThrillerDesc="Dileep is a successful businessman with a dark side. He prey on nubile girls, assaults and kills them. These proceedings are video-recorded and watched by his adoptive father and mentor. He meets Sarada, and is attracted to her." />
        <TamilTrailer Thrillerimg="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSzsPD1v5uZIrKWdnuwzVTVTBYQpPQmL77CzTBJhteR6N4bhnYl" ThrillerTitle="Thadam" ThrillerDesc="The murder of a young child creates some confusion among the police when they discover that the suspect has a twin." />
        <TamilTrailer Thrillerimg="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTbXvbQXrdMX6jC5fY2NEwuf8NOUtNJUfQm889ZURCPxZlSrBjq" ThrillerTitle="Maanagaram" ThrillerDesc="A man who comes to Chennai for an interview is beaten brutally; a gang of small-time criminals kidnaps the son of a local gangster from his school for a ransom." />
        <TamilTrailer Thrillerimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaLG7uY4WzDDeHvtyxJ2nNnO9VWzH6FJWb1BR_y_H8mo2fjYBC" ThrillerTitle="U Turn" ThrillerDesc="Rachana, a newspaper intern, and a police inspector investigate the death of motorists who died in an accident." />
        </div>
      </div>

      <hr className='HRow'/>

      <div id='Comedy'>
        <p className='CastName ms-5'>
          Comedy Movies:
        </p>
        <div className='row TamilcardsDiv'>
          <TamilTrailer Thrillerimg="https://assets.gadgets360cdn.com/pricee/assets/product/202305/Good-Night_1683788530.jpg" ThrillerTitle="Good Night" ThrillerDesc="Good Night is an example of how feel-good films can be made with simpler-yet-effective conflict. It's definitely worth watching." />
          <TamilTrailer Thrillerimg="https://m.media-amazon.com/images/M/MV5BMWM5M2Q0MzktMjBiZC00MmMxLWE5NjktNzRlZGE4ZDk5OGJjXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_FMjpg_UX1000_.jpg" ThrillerTitle="Deiva Machan" ThrillerDesc="A youngster from a small town believes that his only responsibility in life is to find a suitable groom for his sister. However, when things fall into place." />
          <TamilTrailer Thrillerimg="https://m.media-amazon.com/images/M/MV5BMGMwM2ZjNDEtNDE3Mi00ODg5LTk3ZjMtMTlmYzA3NjAwZTY4XkEyXkFqcGdeQXVyMTY0MDk0NjE3._V1_FMjpg_UX1000_.jpg" ThrillerTitle="Soppana Sundari" ThrillerDesc="A young woman from a lower-middle class family wins a car in a lucky draw unaware of the trouble it's going to bring her." />
          <TamilTrailer Thrillerimg="https://m.media-amazon.com/images/M/MV5BMzY0ZThiNTctZmE4My00Y2EwLTg2YWUtMzNiY2U3Y2NjY2E0XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_FMjpg_UX1000_.jpg" ThrillerTitle="Ripupbury" ThrillerDesc="Three young men set out to capture a ghost believed to be a casteist. Will they succeed in trapping it or fall victim to its wrath like so many others in the village?" />
          <TamilTrailer Thrillerimg="https://m.media-amazon.com/images/M/MV5BMmVjNzRhMTctYmU4Ni00ZGMxLTkzNTQtNDg3MjRiMTI1NjEyXkEyXkFqcGdeQXVyNTMzMTE2NTg@._V1_.jpg" ThrillerTitle="Kudimahaan" ThrillerDesc="A man, whose job is to help banks with the ATM replenishment process, gets entangled in an issue due to a rare health syndrome. Can he resolve this and win his job back?" />
          <TamilTrailer Thrillerimg="https://m.media-amazon.com/images/M/MV5BYTU4MjlmYTUtMmFjNy00NzNiLTg4NmYtN2VlMWQ0YTBiZGRmXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg" ThrillerTitle="Ghosty" ThrillerDesc="Ghosty is another Tamil film that fails to do justice to the horror-comedy genre, and it's high time the industry realises the need for fresh talent to revive the genre." />
          <TamilTrailer Thrillerimg="https://m.media-amazon.com/images/M/MV5BMDQ2MzBkNjItOWRhYy00YTc1LWEzMmUtNjliMmY3MzczZTM0XkEyXkFqcGdeQXVyMTU3Nzk4NjM3._V1_FMjpg_UX1000_.jpg" ThrillerTitle="Kodai" ThrillerDesc="A boy in a village in southern Tamil Nadu hopes to get a cricket bat by collecting trump cards. How does this obsession impact his life and that of those around him?" />
          <TamilTrailer Thrillerimg="https://m.media-amazon.com/images/M/MV5BMDMzZjIyZGQtMzZlYi00OWRlLWI5M2ItY2U1ZDczM2YwYThiXkEyXkFqcGdeQXVyMTIyNzY0NTMx._V1_.jpg" ThrillerTitle="Coffee With Kadhal" ThrillerDesc="Coffee With Kadhal is a Tamil movie released on 4 Nov, 2022. The movie is directed by Sundar C and featured Jiiva, Jai, Srikanth and Yogi Babu as lead characters." />
          <TamilTrailer Thrillerimg="https://i.ytimg.com/vi/2i6oL2Xx32Y/movieposter_en.jpg" ThrillerTitle="Aattral" ThrillerDesc="Aattral is a Tamil movie released on 14 Oct, 2022. The movie is directed by K.L Kannan and featured Shrita Rao, Vidharth, Charlie and Vicky as lead characters. Other popular actor who was roped in for Aattral is Vidyu Raman." />
        </div>
      </div>

      <hr className='HRow'/>

      <div id='Horror'>
        <p className='CastName ms-5'>
          Horror Movies:
        </p>
        <div className='row TamilcardsDiv'>
          <TamilTrailer Thrillerimg="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTTnj5bm4gi953JAO6SioUTJY7uarWp03nkBFZ30-QASRskzwus" ThrillerTitle="Demonte Colony" ThrillerDesc="Four friends have no idea what awaits them when they enter a derelict house, which turns their lives upside down." />
          <TamilTrailer Thrillerimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgw3Ab3qpRXnGMdxutoGPX5vA9B32aUuxxQL84BpOB4fINwvxm" ThrillerTitle="Petromax" ThrillerDesc="Meera and her foster family of three live in a bungalow and start to doubt that it's haunted. Four strangers strike a deal with the owner, Shankar, to stay there for four nights to unravel the mystery." />
          <TamilTrailer Thrillerimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa6SaKrQzeojdLoon4EXN-HcsF5cMBJfWCb1yNEfsXnDjtHKj5" ThrillerTitle="Eeram" ThrillerDesc="A man investigates the suicide of a woman as he's not convinced that she killed herself. The main suspects are her husband and neighbours. As the death toll rises, the man deals with his own secret past." />
          <TamilTrailer Thrillerimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1rkn8g5v5-3SAegn4mIk2shAFiaOKJBqjXyswhhQeL-TFGRhG" ThrillerTitle="Yaamirukka Bayamey" ThrillerDesc="A couple of con artists decide to move into an eerie-looking, run-down mansion and run it as a hotel. However, when their customers start dying mysteriously, they begin to think something supernatural is to blame." />
          <TamilTrailer Thrillerimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-zGut_okwPHJ0Lv0GE2xuLUHdHY746TAzyUNtPr4mIeeNWqqe" ThrillerTitle="13B: Fear Has a New Address" ThrillerDesc="When Manohar (Neetu Chandra) moves into 13B, he notices a bunch of quirks in his building, like the lift operating for others but not him. The strangest thing of all is a TV show, Yavarum Nalam, that reflects what is happening in Manohar's own life -- like his wife (R. Madhavan) miscarrying." />
          <TamilTrailer Thrillerimg="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQNuxFZj4SWpInReEfJiOwb30C-UzRRHj_-T0pwBZXcx5UvmSNa" ThrillerTitle="Maya" ThrillerDesc="Maya is one of the most well-written horror dramas. Its storyline revolves around how a single mother struggles to make a living and eventually encounters " />
          <TamilTrailer Thrillerimg="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTlFKRHUJGxY2dTyYEA3NOqbKWx4sDDc18RCQSTTJqQDf70H8Rf" ThrillerTitle="Airaa" ThrillerDesc="A woman is on holiday at her grandma's village bungalow when she strikes upon the genius idea of shooting and uploading real-ghost videos; while shooting, she chances upon real ghost experiences." />
          <TamilTrailer Thrillerimg="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTaRAa4TSzIClwWAaQS54FBOs5r3n9nZNnv777GUeOrxqwmLbfY" ThrillerTitle="Aval" ThrillerDesc="A neurosurgeon (played by Siddharth) and his wife (played by Andrea Jeremiah), a newly-wed couple move into a new neighbourhood and soon realise that the house next door, inhabiting a little girl and her mother, is haunted." />
          <TamilTrailer Thrillerimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs4CqKzOUHjhp0S1yuM90s1FgEAUub1IdLzc7xneF1miJVdA7o" ThrillerTitle="Kanchana" ThrillerDesc="Raghava is a typical jobless youth who spends his days playing cricket with friends. Raghava and his friends switch to an abandoned ground that is supposedly haunted to play cricket." />
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default Tamil