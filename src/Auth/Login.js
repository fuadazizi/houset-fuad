import React from 'react';
import { useRef, useState, useEffect, useContext } from "react";
import PropTypes from 'prop-types';
// import axios from 'axios';
import axios from '../api/axios';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import NavbarAuth from './NavbarAuth';
import AlternateLogin from './AlternateLogin'
import useAuth from '../hooks/useAuth';

import "./assets/style/auth.scss"
import "./assets/style/login.css";

import EyeIcon from "./assets/image/eye-icon.svg";

const LOGIN_URL = '/public/api/user/login';

export default function Login() {
    const { saveToken, rememberLogin } = useAuth();
    // const { token, setToken } = useToken();

    // this will navigate back to homepage after login success
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const userRef = useRef();
    const rememberRef = useRef(null);
    const errRef = useRef();

    useEffect(() => {
        userRef.current.focus();
    }, []);


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {
        setErrMsg("");
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password.length < 8) {
            setErrMsg("Password length at least 8 character")
        } else {
            try {
                const response = await axios.post(
                    LOGIN_URL,
                    JSON.stringify({ email, password }),
                    {
                        headers: { "Content-Type": "application/json" }
                    },
                )
                const accessToken = response?.data?.data?.token;
                if (rememberRef.current.checked) {
                    rememberLogin(email, password);
                }
                saveToken(accessToken);
                navigate("/");
            } catch (err) {
                if (!err?.response) {
                    setErrMsg("No Server Response");
                } else if (err.response?.status === 400) {
                    setErrMsg("Wrong Email or Password");
                } else if (err.response?.status === 401) {
                    setErrMsg("Unauthorized");
                } else if (err.response?.status === 429) {
                    setErrMsg("Too many request attempt. Try again later.");
                } else {
                    setErrMsg("Login Failed");
                }
                errRef.current.focus();
            }
        }
    }
    return (
        <>
            <div className='login-register-body'>
                <NavbarAuth />
                <div className="container-form">
                    <p
                        ref={errRef}
                        className={errMsg ? "login-alert-errMsg" : "login-alert-offScreen"}
                        aria-live="assertive"
                    >
                        {errMsg}
                    </p>

                    <h2 className="header-form"> Login </h2>

                    <form onSubmit={handleSubmit}>
                        <label className="text-label" htmlFor="email"> Email </label> <br />
                        <input className="box-input"
                            type="email"
                            name="email"
                            ref={userRef}
                            autoComplete="off"
                            placeholder="Masukkan alamat email anda"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                        <br />

                        <div className="auth-input-field">
                            <label className="text-label" htmlFor="password"> Password </label> <br />
                            <input className="box-input"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                ref={userRef}
                                placeholder="Masukkan password anda"
                                onChange={e => setPassword(e.target.value)}
                                // value={password}
                                autoComplete="on"
                                required
                            />
                            <img src={EyeIcon} onClick={() => setShowPassword(!showPassword)} className="show-password" />
                            <br />
                        </div>

                        <p>
                            <input type="checkbox" ref={rememberRef} name="rememberMe" /> Ingat saya
                            <Link className="forget-pass" to="/forget-password" > Lupa password? </Link>
                        </p>

                        <button type="submit"> Masuk </button>

                        <div className="login-option">
                            {/* <AlternateLogin /> */}
                        </div>

                        <div className="form-footer">
                            <p className="switch-method"> Belum punya akun? <Link to="/register"> Register </Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}