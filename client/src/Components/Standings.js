import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

    export default function Standings() {
    const [standings, setStandings] = useState([]);
    const [aLDivision,setALDivision] = useState("East")
    const [nLDivision,setNLDivision] = useState("East")
   
    useEffect(function(){
        const fetchStandings = async ()=>{
                    try {
                        const response = await fetch ('http://localhost:3002/api/standings');
                        const data = await response.json();
                        console.log(data); 
                        setStandings(data);
                    } catch (error) {
                        console.error('Error fetching standings:', error)
                        }
                };
                
            fetchStandings()
    }, []);

    const handleALDivisionChange = (event) => {
        const divisionValue = document.getElementById('al-division');
        console.log("AL", divisionValue.value);
        setALDivision(divisionValue.value);
    };
    const handleNLDivisionChange = (event) => {
        const divisionValue = document.getElementById('nl-division');
        console.log("NL", divisionValue.value);
        setNLDivision(divisionValue.value);
    };

    const standingELementsAL = standings.map(stats => {
        //console.log(league) -- why is this rendering in a loop like the top one used to. 
        
        if(stats.League === "AL" && aLDivision === stats.Division)
        return (
                 <tr key={stats.Name} className="standings-table-body">
                    <td><Link to="/Teams-Specific">{stats.City} {stats.Name}</Link></td>
                    <td>{stats.Wins}</td>
                    <td>{stats.Losses}</td>
                </tr>
                )
    })    
    const standingELementsNL = standings.map(stats => {
        //console.log(league) -- why is this rendering in a loop like the top one used to. 
        
        if(stats.League === "NL" && nLDivision === stats.Division)
        return (
                 <tr key={stats.Name} className="standings-table-body">
                    <td><Link to="/Teams-Specific">{stats.City} {stats.Name}</Link></td>

                    <td>{stats.Wins}</td>
                    <td>{stats.Losses}</td>
                </tr>
                )
    })    
    

    return (
        <div>
            <h1 className="standings-title">MLB Standings</h1>
            <div className="standings-tables">
                <table className="AL-standings-table">
                    <thead>
                        <tr>
                            <th id="standings-table-title" colSpan={3}>American League</th>
                        </tr>
                        <tr>
                            <th colSpan={3}>
                                <select id="al-division" onChange={handleALDivisionChange}>
                                    <option value="East">East</option>
                                    <option value="Central">Central</option>
                                    <option value="West">West</option>
                                </select>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Team</th>
                            <th>Wins</th>
                            <th>Losses</th>
                        </tr>
                        {standingELementsAL}
                    </tbody>
                </table>

                <table className="NL-standings-table">
                    <thead>
                        <tr>
                            <th id="standings-table-title" colSpan={3}>National League</th>
                        </tr>
                        <tr>
                            <th colSpan={3}>
                                <select id="nl-division" onChange={handleNLDivisionChange}>
                                    <option value="East">East</option>
                                    <option value="Central">Central</option>
                                    <option value="West">West</option>
                                </select>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Team</th>
                            <th>Wins</th>
                            <th>Losses</th>
                        </tr>
                        {standingELementsNL}
                    </tbody>
                </table>
            </div>
        </div>
    );
} 

// ADD TEAM LOGO PICTURES
 
