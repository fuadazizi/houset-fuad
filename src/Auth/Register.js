import React from 'react'
import { useRef, useState, useEffect, useContext } from "react";
import axios from "../api/axios"
import { Link, useNavigate } from 'react-router-dom';
import NavbarAuth from './NavbarAuth';
import AlternateLogin from './AlternateLogin';

import "./assets/style/auth.scss"
import "./assets/style/register.css";
import "./assets/style/login.css";

import EyeIcon from "./assets/image/eye-icon.svg";

const REGISTER_URL = '/public/api/user/register';

export default function Register() {
    const navigate = useNavigate('');

    const userRef = useRef();
    const errRef = useRef();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // check length
        if (password.length < 8) {
            setErrMsg("Password must at least 8 character");
            return;
        }

        try {
            const response = await axios.post(
                REGISTER_URL,
                JSON.stringify({ email, password, name }),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: false,
                }
            );
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 409) {
                setErrMsg("Username Taken");
            } else {
                setErrMsg("Registration Failed");
            }
            errRef.current.focus();
        }
    };

    if (success) {
        navigate('/login');
        alert("succeeded");
        setSuccess(false);
    } else {
        return (
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
                    <h2 className="header-form"> Register </h2>
                    <form onSubmit={handleSubmit}>
                        <label className="text-label" htmlFor="email"> Nama </label> <br />
                        <input className="box-input"
                            type="text"
                            name="name"
                            ref={userRef}
                            placeholder="Masukkan nama lengkap anda"
                            onChange={e => setName(e.target.value)}
                            value={name}
                            required
                        />
                        <br />
                        
                        <label className="text-label" htmlFor="email"> Email </label> <br />
                        <input className="box-input"
                            type="text"
                            name="email"
                            placeholder="Masukkan alamat email anda"
                            onChange={e => setEmail(e.target.value)}
                            required />
                        <br />

                        <div className="auth-input-field">
                            <label className="text-label" htmlFor="password"> Password </label> <br />
                            <input className="box-input"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Masukkan password anda"
                                onChange={e => setPassword(e.target.value)}
                                autoComplete="on"
                                required />
                            {/* eye icon can show password if user clicked */}
                            <img src={EyeIcon} onClick={() => setShowPassword(!showPassword)} className="show-password" />
                        </div>

                        <div className="agreement-box">
                            <input className="bottom-info" type="checkbox" required/> Saya setuju dengan <strong> syarat & ketentuan </strong>
                            serta <strong>Kebijakan Privasi</strong> di Houset <br />
                        </div>
                        <button type="submit"> Register </button>

                        <div className="login-option">
                            {/* <AlternateLogin /> */}
                        </div>

                        <div className="form-footer">
                            <p className="switch-method"> Sudah punya akun? <Link to="/login"> Masuk </Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
