import React from "react";
import{Routes, Route, BrowserRouter} from 'react-router-dom'

import Landingpage from "./pages/Landingpage";
//import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landingpage />} />
        <Route path="login" element={<Landingpage />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
