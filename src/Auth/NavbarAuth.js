import React from 'react';
import { Link } from 'react-router-dom';
import HousetLogo from "../assets/image/houset-logo2.png";

import './assets/style/navbar-auth.css';

function NavbarAuth() {
    return (
        <nav className="logo-houset">
            <Link to='/'>
                <img src={HousetLogo}alt="error image not found" />
            </Link>
        </nav>
    )
}

export default NavbarAuth;