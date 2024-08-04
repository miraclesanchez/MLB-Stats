import React from "react";
import {Route, Routes} from "react-router-dom";
import Standings from "./Components/Standings.js";
import Navbar from "./Components/Navbar.js";
import Teams from "./Components/Teams.js";
import { Scores } from "./Components/Scores.js";

export default function App () {
  return (
        <div>
          <Navbar/>
          <main>
            <Routes>
            <Route exact path="/Teams" element={<Teams/>}></Route>
            <Route exact path ="/Standings" element={ <Standings/>}></Route>
            <Route exact path ="/Scores" element={ <Scores/>}></Route>
           
            </Routes>
          </main>
        </div>
        
  );
}