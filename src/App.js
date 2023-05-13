import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Hompage from "./Hompage";



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hompage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

