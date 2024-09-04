import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Teams () {
    const [teams, setTeams] = useState ([]);

    useEffect(function (){
        const fetchTeams = async () => {
            try {
                const response = await fetch (`http://localhost:3002/api/teams`);
                const data = await response.json();
                setTeams(data);
            }catch (error) {
                console.error('Error fetching teams', error)
            }
        }

        fetchTeams();
    }, []);

    const teamsList = teams.map (teams => {
        return (
            <tr key={teams.Key}> 
                {/* <td><Link to={`/Team-${teams.Key}`}>{teams.Name}</Link></td> */}
                <td><Link to="/Teams-Specific">{teams.Name}</Link></td>
                <td>{teams.Key}</td>
            </tr>
        )
    })

    return (
        <div className="teams-table">
            <h1>Teams Page</h1>
            <table>
                <thead>
                    <tr>
                        <th id="teams-table-title">Teams</th>
                    </tr>
                </thead>
                <tbody>
                    {teamsList}
                </tbody>
            </table>
        </div>
    )
}