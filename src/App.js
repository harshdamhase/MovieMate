import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";


import Hompage from "./Hompage";
import English from './Languages/EnglishMovie/English';
import Hindi from './Languages/HindiMovie/Hindi';
import Marathi from './Languages/MarathiMovie/Marathi';
import Tamil from './Languages/TamilMovie/Tamil';
import NetflixMovie1 from './Ott/Netflix/NetflixMovie1';
import NetflixMovie2 from './Ott/Netflix/NetflixMovie2';
import HotstartMovie1 from './Ott/Hotstar/HotstartMovie1';
import HotstarMovie2 from './Ott/Hotstar/HotstarMovie2';
import AmazonMovie1 from './Ott/Amazon/AmazonMovie1';
import AmazonMovie2 from './Ott/Amazon/AmazonMovie2';
import Ticket from './Other/TicketBooking/Ticket';
import Theinvitation from './Languages/EnglishMovie/TheInvitation';
import GoodNight from './Languages/TamilMovie/GoodNight';
import About from './About';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hompage/>}/>
      <Route path="/English" element={<English/>}/>
      <Route path="/Marathi" element={<Marathi/>}/>
      <Route path="/Hindi" element={<Hindi/>}/>
      <Route path="/Tamil" element={<Tamil/>}/>
      <Route path="/Squid_Game" element={<NetflixMovie1/>}/>
      <Route path="/Wednesday" element={<NetflixMovie2/>}/>
      <Route path="/The_Nutcracker" element={<HotstartMovie1/>}/>
      <Route path="/Haunted_Mansion" element={<HotstarMovie2/>}/>
      <Route path="/The_Family_Man" element={<AmazonMovie1/>}/>
      <Route path="/Sonic" element={<AmazonMovie2/>}/>
      <Route path="/BookTicket" element ={<Ticket/>}/>
      <Route path="/The_Invitation" element={<Theinvitation/>}/>
      <Route path="/Good_Night" element={<GoodNight/>}/>
      <Route path="/About" element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )

}

export default App

