import React from 'react'
import NavbarComp from '../../Components/NavbarComp'
import { NavLink } from 'react-bootstrap';
import Footer from '../../Components/Footer';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/img3.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img1.jpeg'
import MarathiCard from '../../Components/MarathiCard'
import MarathiCarousel from '../../Components/MarathiCarousel'
function Marathi() {
  return (
    <>
      <NavbarComp/>
      <div className='TamilCarousel'>
      <MarathiCarousel img1={img1} img2={img2} img3={img3}/>
      </div>
      <hr className='HRow'/>
      <div >
      <div id='Thriller'>

        <p className='CastName ms-5'>
          Popular Thriller Movies:
        </p>
        <div className='row TamilcardsDiv'>

        <MarathiCard imgUrl="https://i.ytimg.com/vi/CPRjISj0_kc/maxresdefault.jpg" filmName="Dandam" timeDuration="1 hrs 15 min" filmType="Action" />
 <MarathiCard imgUrl="https://static.toiimg.com/thumb/65038807.cms?width=400&height=300&resizemode=4" filmName="Baaji" timeDuration="1 hrs 20 min" filmType="Action" />
 <MarathiCard imgUrl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:q-80/et00327818-vzqxqbhjwf-portrait.jpg" filmName="Baloch" timeDuration="1 hrs 25 min" filmType="Action" />
 <MarathiCard imgUrl="https://img.starbiz.com/resize/480x-/2020/05/19/adham-marathi-movies-2019-92d2.jpg" filmName="Adham" timeDuration="1 hrs 30 min" filmType="Action" />
 <MarathiCard imgUrl="https://i.ytimg.com/vi/8Og5b2wxW4M/maxresdefault.jpg" filmName="Fight" timeDuration="1 hrs 40 min" filmType="Action" />

 <MarathiCard imgUrl="https://static.toiimg.com/photo/msid-66862661/66862661.jpg" filmName="Mauli" timeDuration="1 hrs 40 min" filmType="Action" />
 <MarathiCard imgUrl="https://www.cinefry.co.in/wp-content/uploads/2023/01/Surya-Marathi.jpg" filmName="Suryaa" timeDuration="1 hrs 30 min" filmType="Action" />
 <MarathiCard imgUrl="https://nettv4u.com/fileman/Uploads2/-10-Actresses-who-look-gorgeous-in-Red/Dhanush1/Dagadi_Chawl.jpg" filmName="Dagdi Chaal" timeDuration="1 hrs 60 min" filmType="Action" />
 <MarathiCard imgUrl="https://m.media-amazon.com/images/M/MV5BZTY0ZTI0Y2EtMjhmNy00ODQ0LThkN2YtMWU4OTQwNTFiYjUzXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_FMjpg_UX1000_.jpg" filmName="Mulshi Pattern" timeDuration="1 hrs 55 min" filmType="Action" />
 <MarathiCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUmxVR4QBx5zUUq6MugPBx-txefQitdx75LA&usqp=CAU" filmName="Vrundaavan" timeDuration="1 hrs 30 min" filmType="Action" />

 <MarathiCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsd8f5GjUvtlUYdWfziF94_h5lDokZGJ3ZTQ&usqp=CAU" filmName="Dharmveer" timeDuration="1 hrs 40 min" filmType="Action" />
 <MarathiCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1pUfBCMAywSPL5LkZ10wvnc2svEhT83GeRw&usqp=CAU" filmName="Laii Bharri" timeDuration="1 hrs 40 min" filmType="Action" />
 <MarathiCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjEiKzh3mAqXe0MeTi7kIwcqAWV5THOEpWZQ&usqp=CAU" filmName="Ghoda" timeDuration="1 hrs 44 min" filmType="Action" />
 <MarathiCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqIVs1wfoTLrad54oXyOTXbgi9iPUjM2m-1A&usqp=CAU" filmName="Suryaa" timeDuration="1 hrs 20 min" filmType="Action" />
 <MarathiCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7nDb65SdpsBcLrVQW0XKkV8dX8OfMr384lg&usqp=CAU" filmName="Har har MAhadev" timeDuration="1 hrs 60 min" filmType="Action" />


 </div>
 <hr className='HRow'/>

      <div id='Horror'> 
        <p className='CastName ms-5'>
          Horror Movies:
        </p>
        <div className='row TamilcardsDiv'>

 <MarathiCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Lapachhapi_Movie_Release_Poster.jpg/220px-Lapachhapi_Movie_Release_Poster.jpg" filmName="Lapachapi" timeDuration="1 hrs 25 min" filmType="Horror" />
 <MarathiCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Zombivili_Poster.jpeg/220px-Zombivili_Poster.jpeg" filmName="Zomibivli" timeDuration="1 hrs 40 min" filmType="Horror" />
 <MarathiCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4uIIbHSpAh2WuMTuWq3_priMRa3SGmm7aMGyKrbg&usqp=CAE&s" filmName="Kanika" timeDuration="1 hrs 50 min" filmType="Horror" />
 <MarathiCard imgUrl="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRR-o8GAP4qeXMN6Iow1yO0ypQqnZe0qQgfG8wh1T7KLCawJ_Z5" filmName="Baali" timeDuration="1 hrs 25 min" filmType="Horror" />
 <MarathiCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTyAdrnlNb5eHh7YX-OjrAUNAqzmjcwwUMGv5T_1aB&usqp=CAE&s" filmName="BhayBheet" timeDuration="1 hrs 45 min" filmType="Horro" />

 <MarathiCard imgUrl="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRidGCdURQ6646DhsU_MvviaATKj3mjoziuLL7VYJ022EpNujSB" filmName="Aik" timeDuration="1 hrs 30 min" filmType="Horror" />
 <MarathiCard imgUrl="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRouG3TcKJVYutipU_VyCvziPP0vwmQDWX0TBVzyE4sJAa6Ggm5" filmName="Anaavtt" timeDuration="1 hrs 40 min" filmType="Horror" />
 <MarathiCard imgUrl="https://m.media-amazon.com/images/M/MV5BZjM3Mzk4YjItYmM4Ny00MzgzLTg1MWQtZTQyMzNjY2YxYWZmXkEyXkFqcGdeQXVyNzU5MDU3Mjc@._V1_.jpg" filmName="Benvaad" timeDuration="1 hrs 20 min" filmType="Horror" />
 <MarathiCard imgUrl="https://upload.wikimedia.org/wikipedia/en/7/71/Zapatlela_1.jpg" filmName="Zapatlela" timeDuration="1 hrs 40 min" filmType="Horror" />
 <MarathiCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Rahasya_poster.jpg/220px-Rahasya_poster.jpg" filmName="Rahasyya" timeDuration="1 hrs 25 min" filmType="Horror" />

 <MarathiCard imgUrl="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/gadad-andhar-et00347843-1674035946.jpg" filmName="gadad Aanadhar" timeDuration="1 hrs 15 min" filmType="Horror" />
 <MarathiCard imgUrl="https://timesofindia.indiatimes.com/photo/96709407.cms" filmName="Victoria" timeDuration="1 hrs 35 min" filmType="Horror" />
 <MarathiCard imgUrl="https://i.ytimg.com/vi/9VcKEjkf5Jo/maxresdefault.jpg" filmName="Adrushyy" timeDuration="1 hrs 50 min" filmType="Horror" />
 <MarathiCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMYua5n5uNhUBkaOb3HMrjWr3qKZ9SMe7dmA&usqp=CAU" filmName="Hoori" timeDuration="1 hrs 40 min" filmType="Horror" />
 <MarathiCard imgUrl="https://i.ytimg.com/vi/Muo0XYvlYC0/maxresdefault.jpg" filmName="Kaal" timeDuration="1 hrs 55 min" filmType="Horror" />
 </div>
</div>
<hr className='HRow'/>

<div id='Comedy'>
  <p className='CastName ms-5'>
    Comdey Movies:
  </p>
  <div className='row TamilcardsDiv'>

 <MarathiCard imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Lochya_Zaala_Re_film.jpg/220px-Lochya_Zaala_Re_film.jpg" filmName="Lochya zala re" timeDuration="1 hrs 50 min" filmType="Comedy" />
 <MarathiCard imgUrl="https://m.media-amazon.com/images/M/MV5BMWNiMzMwYzAtYzE0My00MWE1LWE1NDUtMTYxNWY1NmNhYTJiXkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_FMjpg_UX1000_.jpg" filmName="De Dhakka" timeDuration="2 hrs 30 min" filmType="Comedy" />
 <MarathiCard imgUrl="https://images.hungama.com/c/1/415/274/52096616/52096616_180x255.jpg" filmName="DhamDhum" timeDuration="1 hrs 30 min" filmType="Comedy" />
 <MarathiCard imgUrl="https://timesofindia.indiatimes.com/photo/94353527.cms" filmName="Aapdi Thapdi" timeDuration="1 hrs 40 min" filmType="Comedy" />
 <MarathiCard imgUrl="https://i.ytimg.com/vi/lo8n9Y2QlK4/maxresdefault.jpg" filmName="Hawa Hawaii" timeDuration="1 hrs 45 min" filmType="Comedy" />

 <MarathiCard imgUrl="https://qqcdnpictest.mxplay.com/pic/9dd708b0b2ae01fd8d9e64ef2a606817/en/2x3/320x480/test_pic1584082955979.webp" filmName="Gadvach lgn" timeDuration="2 hrs 35 min" filmType="Comedy" />
 <MarathiCard imgUrl="https://akamaividz2.zee5.com/image/upload/w_856,h_482,c_scale,f_webp,q_auto:eco/resources/0-0-1z568055/list/1170x658withlogofb341ef8124545b3b13b04cd121f4951.jpg" filmName="Pandu" timeDuration="1 hrs 35 min" filmType="Comedy" />
 <MarathiCard imgUrl="https://www.wikilistia.com/wp-content/uploads/2020/04/choricha-mamla-marathi-movie-1-528x297.jpg" filmName="Choricha Mamala" timeDuration="1 hrs  min" filmType="Comedy" />
 <MarathiCard imgUrl="https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-yedyanchijatra/portrait/00yedyanchijatracover.jpg" filmName="Yedyanchi Jatra" timeDuration="1 hrs 30 min" filmType="Comedy" />
 <MarathiCard imgUrl="https://upload.wikimedia.org/wikipedia/en/9/92/Timepass_%28film%29.jpg" filmName="Timepass" timeDuration="1 hrs 30 min" filmType="Comedy" />


 <MarathiCard imgUrl="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/phakaat-et00355104-1682314237.jpg" filmName="phakaat" timeDuration="1 hrs 35 min" filmType="Comedy" />
 <MarathiCard imgUrl="https://m.media-amazon.com/images/M/MV5BZjEyNWY4ZWEtNDY3ZC00ZDQwLTgyMGEtMzNlYzNlZjNiYTFhXkEyXkFqcGdeQXVyMzc0ODYyNzk@._V1_.jpg" filmName="Tumch AAcmh jml" timeDuration="1 hrs 22 min" filmType="Comedy" />
 <MarathiCard imgUrl="https://www.wikilistia.com/wp-content/uploads/2020/04/choricha-mamla-marathi-movie-1-528x297.jpg" filmName="Choricha Mamala" timeDuration="1 hrs  min" filmType="Comedy" />
 <MarathiCard imgUrl="https://upload.wikimedia.org/wikipedia/en/5/50/Aga_Bai_Arechyaa_2_-_Marathi_Movie_Poster.jpg" filmName="Yedyanchi Jatra" timeDuration="1 hrs 30 min" filmType="Comedy" />
 <MarathiCard imgUrl="https://images.ottplay.com/posters/Family_420_2022_movie_poster_1.jpg?impolicy=ottplay-20210210" filmName="Family" timeDuration="1 hrs 30 min" filmType="Comedy" />
 </div>
</div>
 </div>
          <Footer />
      </div>
     
      
    </>
    
  )
}

export default Marathi