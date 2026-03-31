import React from "react";
import './Menubar.css';
import { NavLink } from "react-router-dom";
function Menubar() {
    return (
        <nav className='menu-bar'>
            <NavLink to='/SE183894/all-games'>All Games</NavLink>
            <NavLink to='/SE183894/played-games'>Played Games</NavLink>
            <NavLink to='/SE183894/game-management'>Games Managerment</NavLink>
        </nav>
    );
}

export default Menubar;
