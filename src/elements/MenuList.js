import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

function MenuOption(props) {
    var path = '../scenes/' + props.pathname;
    let navigate = useNavigate();

    function handleNavigate() {
        navigate(props.pathname);
    }

    return(
        <>
            {/* <Link to={props.pathname}> {props.feature} </Link> */}
            <button type="button" onClick={handleNavigate}> {props.feature} </button>
        </>
    );
}

export default MenuOption;