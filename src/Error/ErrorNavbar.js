import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HousetLogo from "../assets/image/houset-logo2.png";
import Button from './Button';
import ProfilePicture from './assets/image/profile-picture.png';

import "./assets/style/error-navbar.css";

function ErrorNavbar() {
    const token = localStorage.getItem('token')
    let profile = (<> </>)

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload()
    }

    if (!token) {
        profile = (
            <div className="navbar-login-register">
                <Button text="Register" type="secondary-button" toPage={"/register"} />
                <Button text="Login" type="primary-button" toPage={"/login"} />
            </div>
        )
    } else {
        profile = (
            <div className="navbar-profile">
                <button onClick={handleLogout} className="navbar-logout-btn">
                    Logout
                </button>
            </div>
        )
    }

    return (
        <>
            <nav className="navbar-nav">
                <div className="navbar-div">
                    <Link to="/"> <img src={HousetLogo} className="houset-logo" alt="image not found" /> </Link>
                    <ul className="navbar-ul">
                        <li> <Link to="/product"> Furniture </Link> </li>
                        <li> <Link to="/ruangan"> Ruangan </Link> </li>
                        <li> <Link to="/canvas"> Kanvas Desain </Link> </li>
                        <li> <Link to="/consult"> Jasa Konsultasi </Link> </li>
                    </ul>
                </div>
                {profile}
            </nav>
        </>
    );
}

export default ErrorNavbar;