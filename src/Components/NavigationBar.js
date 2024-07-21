import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import HousetLogo from "../assets/image/houset-logo2.png";
import Button from './Button';
import ProfilePicture from './assets/image/profile-picture.png';

import "./assets/style/navigation-bar.css";
import Search from './Search';

import useAuth from '../hooks/useAuth';

function NavigationBar() {
    const { getToken, removeToken } = useAuth();
    // const token = localStorage.getItem('token')
    let profile = (<> </>);
    const navigate = useNavigate();

    const handleLogout = () => {
        const logout = removeToken();
        // navigate('/');
        window.location.reload();
    }

    if (!getToken()) {
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

export default NavigationBar;