import React from 'react';
import image from '../images/baseball.png'
import { Link } from 'react-router-dom';

export default function Navbar(){
    return (
        <nav className='navbar'>
            <img src={image} alt=""></img>
            <ul className='navbar-list'>
                <li><Link to="/Scores">Scores</Link></li>
                <li><Link to="/Standings">Standings</Link></li>
                <li><Link to="/Teams">Teams</Link></li>
            </ul>
            <form className='navbar-form'>
                <input type='text' placeholder='search'></input>
                <button>GO</button>
            </form>
        </nav>
    )

}
