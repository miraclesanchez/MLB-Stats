import React from "react";
import {Route, Routes} from "react-router-dom";
import Standings from "./Components/Standings.js";
import Navbar from "./Components/Navbar.js";

export default function App () {
  return (
        <div>
          <Navbar/>
          <main>
            <Standings/>
          </main>
        </div>
        
  );
}