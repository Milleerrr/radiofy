import React from "react";
import './NavBar.css'
import Spotify from "../../util/Spotify";

export const NavBar = (props) => {
    return (
        <nav>
            <button className="button" placeholder="Sign in" aria-label="Sign in">Pricing</button>
            <button className="button" placeholder="Sign in" aria-label="Sign in" >Sign in</button>
        </nav>
    )
};