import React from 'react';
import image from '../images/baseball.png'

export default function Navbar(){
    return (
        <nav className='navbar'>
            <img src={image} alt=""></img>
            <ul className='navbar-list'>
                <li>Scores</li>
                <li>Standings</li>
                <li>Teams</li>
            </ul>
            <form className='navbar-form'>
                <input type='text' placeholder='search'></input>
                <button>GO</button>
            </form>
        </nav>
    )

}
