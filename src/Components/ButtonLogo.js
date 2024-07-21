import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import HousetLogo from "../assets/image/houset-logo2.png";

function ButtonLogo(props) {
    return( 
        <Router>
            <Link to="/home"> <img src={HousetLogo} alt="houset-logo" /> </Link>

            <Routes>
                <Route path="/home" />
            </Routes>
        </Router>
    );
}

export default ButtonLogo;