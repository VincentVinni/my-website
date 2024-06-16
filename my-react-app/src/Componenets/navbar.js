import '../Styles/navbar.css';
import React from 'react';

const NAVBAR = () => {
    return(
        <nav className='nav-bar'>
                <a href = "#body">ABOUT</a>
                <a href = "#body-education">EDUCATION</a>
                <a href = "#body-projects">PROJECTS</a>
                {/* <a href ="#">PHOTOS</a> */}
        </nav>
    )
}

export default NAVBAR;