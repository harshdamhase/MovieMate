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
      <Route path="/HotstarMovie1" element={<HotstartMovie1/>}/>
      <Route path="/HotstarMovie2" element={<HotstarMovie2/>}/>
      <Route path="/AmazonMovie1" element={<AmazonMovie1/>}/>
      <Route path="/AmazonMovie2" element={<AmazonMovie2/>}/>
      <Route path="/Ticket" element ={<Ticket/>}/>
      <Route path="/The_Invitation" element={<Theinvitation/>}/>
      <Route path="/Good_Night" element={<GoodNight/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )

}

export default App

