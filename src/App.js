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
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

