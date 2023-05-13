import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Hompage from "./Hompage";
import English from './Languages/EnglishMovie/English';
import Hindi from './Languages/HindiMovie/Hindi';
import Marathi from './Languages/MarathiMovie/Marathi';
import Tamil from './Languages/TamilMovie/Tamil';



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
      <Route path="/NetflixMovie1" element={<NetflixMovie1/>}/>
      <Route path="/NetflixMovie2" element={<NetflixMovie2/>}/>
      <Route path="/HotstarMovie1" element={<HotstartMovie1/>}/>
      <Route path="/HotstarMovie2" element={<HotstarMovie2/>}/>
      <Route path="/AmazonMovie1" element={<AmazonMovie1/>}/>
      <Route path="/AmazonMovie2" element={<AmazonMovie2/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

