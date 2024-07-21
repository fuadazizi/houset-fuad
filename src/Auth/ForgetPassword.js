import React from "react";
import NavbarAuth from "./NavbarAuth";
import { Container } from "react-bootstrap";
import { useState, useRef } from "react";
import "./assets/style/forget-password.css";
import { EyeIcon } from "../Profile/assets/Icon";
import { PasswordInput } from "../Profile/ProfileAccount/UpdatePassword";
import { useInRouterContext } from "react-router-dom";
import { useEffect } from "react";
import axios from "../api/axios";
import { useContext } from "react";
import ModalContext from "../context/modal";

const REQUEST_OTP_URL = "/user/create-otp";

const ForgetPassword = () => {
    const [status, setStatus] = useState("change-password");
    const [inputVal, setInputVal] = useState("");
    const [otpFromServer, setOtpFromServer] = useState(null);

    const sendCode = async (email) => {
        // send code to user
        try {
            const response = await axios.post(
                REQUEST_OTP_URL,
                JSON.stringify({ email: inputVal, otp_type: 1 }),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: false,
                },
            );
            setOtpFromServer(response.data.data.otp);
            console.log(response.data.data.otp);
        } catch (err) {
            console.log(err);
        }
    };
    // if (!err?.response) {
    //     setErrMsg({...errMsg , email : "No Server Response"});
    // } else if (err.response?.status === 400) {
    //     setErrMsg({...errMsg , email : "Wrong Email or Password"});
    // } else if (err.response?.status === 401) {
    //     setErrMsg({...errMsg , email : "Unauthorized"});
    // } else {
    //     setErrMsg({...errMsg , email : "Change Password Failed"});
    // }
    const renderComponent = (status) => {
        switch (status) {
            case "change-password":
                return (
                    <ChangePassword
                        inputVal={inputVal}
                        setInputVal={setInputVal}
                        setStatus={setStatus}
                        status={status}
                        sendCode={sendCode}
                    />
                );
            case "code-verification":
                return (
                    <VerificationStep
                        inputVal={inputVal}
                        setInputVal={setInputVal}
                        setStatus={setStatus}
                        status={status}
                        sendCode={sendCode}
                        otpFromServer={otpFromServer}
                    />
                );
            case "set-new-password":
                return (
                    <SetNewPassword inputVal={inputVal} setStatus={setStatus} 
                    status={status}
                    
                    />
                );
            default:
                break;
        }
    };

    return (
        <>
            <NavbarAuth />
            <Container fluid className="forget-password-body">
                <div className="forget-password-card">
                    {renderComponent(status)}
                </div>
            </Container>
        </>
    );
};

export default ForgetPassword;

const ChangePassword = ({
    inputVal,
    setInputVal,
    status,
    setStatus,
    sendCode,
}) => {
    const [errorStatus, setErrorStatus] = useState(true);
    const [errMsg, setErrMsg] = useState("");
    const btnRefChangePassword = useRef(null);

    const inputValidation = (inputVal) => {
        const phoneFormat = /^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/g;
        const mailFormat =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (phoneFormat.test(inputVal) || mailFormat.test(inputVal)) {
            setErrorStatus(false);
        } else {
            setErrorStatus(true);
        }
    };

    useEffect(() => {
        const enterHandle = (e) => {
            if (e.key === "Enter") {
                if (
                    status === "change-password" &&
                    btnRefChangePassword.current !== null
                ) {
                    btnRefChangePassword.current.click();
                }
            } else {
                return;
            }
        };
        window.addEventListener("keypress", (e) => enterHandle(e));
        return window.removeEventListener("keypress", (e) => enterHandle(e));
    }, []);

    const submitHandler = () => {
        sendCode(inputVal);
        setStatus("code-verification");
    };
    const changeHandler = (value) => {
        setInputVal(value);
        inputValidation(value);
    };

    return (
        <>
            <div className="card-information">
                <h1>Ubah Password</h1>
                <div className="card-description">
                    <p>
                        Silakan masukkan email
                        {/* atau nomor HP */ " "}
                        yang terdaftar.
                    </p>
                    <p>
                        Kode verifikasi akan dikirimkan untuk mengubah password.
                    </p>
                </div>
            </div>
            <div className="card-input">
                <div className="input-email">
                    <label htmlFor="email-password">
                        Email
                        {/* atau Nomor Telepon */}
                    </label>
                    <input
                        type="email"
                        name="email-password"
                        value={inputVal}
                        onChange={(e) => changeHandler(e.target.value)}
                        placeholder="Masukan email anda"
                        autoComplete="on"
                    />
                    {errMsg !== "" ? (
                        <p className="error-message active">{errMsg}</p>
                    ) : null}
                </div>
            </div>
            <div className="card-action">
                <button
                    className="primary-button"
                    disabled={errorStatus}
                    onClick={submitHandler}
                    ref={btnRefChangePassword}
                >
                    Lanjut
                </button>
            </div>
        </>
    );
};
const VerificationStep = ({
    inputVal,
    setStatus,
    status,
    sendCode,
    otpFromServer,
}) => {
    const [code, setCode] = useState(new Array(4).fill(""));
    const [resendTime, setResendTime] = useState(0);
    const [otpExpiredTime, setOtpExpiredTime] = useState(300);
    const [errMsg, setErrMsg] = useState("");
    const btnRefVerification = useRef(null);

    const submitHandler = () => {
        // check code is valid
        if (otpFromServer === Number(code.join(""))) {
            setStatus("set-new-password");
        } else {
            setErrMsg("OTP code is wrong");
        }
    };

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setCode([...code.map((d, i) => (i === index ? element.value : d))]);

        if (element.nextSibling) {
            element.nextSibling.focus();
            setErrMsg("");
        }
    };

    const resendCode = () => {
        setResendTime(60);
        setOtpExpiredTime(300);
        sendCode(inputVal);
    };

    useEffect(() => {
        const enterHandler = (e) => {
            if (e.key === "Enter") {
                if (
                    status === "code-verification" &&
                    btnRefVerification.current !== null
                ) {
                    btnRefVerification.current.click();
                }
            } else {
                return;
            }
        };
        window.addEventListener("keypress", (e) => enterHandler(e));
        return window.removeEventListener("keypress", (e) => enterHandler(e));
    }, []);

    return (
        <>
            <div className="card-information">
                <h1>Masukkan Kode Verifikasi</h1>
                <div className="card-description">
                    <p>
                        Kode verifikasi telah dikirimkan ke email{" "}
                        <b>{inputVal} </b>
                    </p>
                    <p>Silakan masukan kode verifikasi dibawah ini.</p>
                </div>
            </div>
            <div className="card-input">
                <div className="otp-status">
                    {otpExpiredTime > 0 ? (
                        <ExpiredOtpTime
                            otpExpiredTime={otpExpiredTime}
                            setOtpExpiredTime={setOtpExpiredTime}
                        />
                    ) : (
                        <p>OTP telah expired. Harap kirim ulang</p>
                    )}
                </div>
                <div className="card-input-otp">
                    {code.map((item, index) => (
                        <input
                            type="text"
                            name="otp"
                            className={`otp-input ${
                                errMsg !== "" ? "error" : ""
                            }`}
                            maxLength={1}
                            key={index}
                            value={item}
                            onChange={(e) => handleChange(e.target, index)}
                            onFocus={(e) => e.target.select()}
                        />
                    ))}
                </div>
                {errMsg !== "" ? (
                    <p className="error-message active">{errMsg}</p>
                ) : null}
                <div className="resend-otp">
                    {resendTime > 0 ? (
                        <ResendOtpInterval
                            resendTime={resendTime}
                            setResendTime={setResendTime}
                        />
                    ) : (
                        <>
                            <p>
                                Tidak menerima kode verifikasi?{" "}
                                <span
                                    onClick={() => resendCode()}
                                    className="resend-button"
                                >
                                    Kirim Ulang
                                </span>{" "}
                            </p>
                        </>
                    )}
                </div>
            </div>
            {/* error message */}
            <div className="card-action">
                <button
                    className="primary-button"
                    disabled={
                        otpExpiredTime === 0 || code.includes("") || errMsg
                    }
                    onClick={submitHandler}
                    ref={btnRefVerification}
                >
                    Verifikasi
                </button>
            </div>
        </>
    );
};

const ResendOtpInterval = ({ resendTime, setResendTime }) => {
    useEffect(() => {
        const interval = setInterval(() => {
            setResendTime((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <p>
            Mohon tunggu dalam <b>{resendTime} detik </b> untuk kirim ulang
        </p>
    );
};
const ExpiredOtpTime = ({ otpExpiredTime, setOtpExpiredTime }) => {
    useEffect(() => {
        const interval = setInterval(() => {
            setOtpExpiredTime((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const getMinutes = (otpExpiredTime) => {
        const min = Math.floor(otpExpiredTime / 60);
        if (min < 10) {
            return `0${min}`;
        } else {
            return min;
        }
    };
    const getSeconds = (otpExpiredTime) => {
        const sec = otpExpiredTime % 60;
        if (sec < 10) {
            return `0${sec}`;
        } else {
            return sec;
        }
    };

    return (
        <p>
            (OTP akan expired dalam{" "}
            <b>
                {getMinutes(otpExpiredTime)}:{getSeconds(otpExpiredTime)}
            </b>
            )
        </p>
    );
};

const SetNewPassword = ({ inputVal ,status}) => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const { openChangePasswordSuccesModal } = useContext(ModalContext);
    const btnNewPasswordRef = useRef(null);
    const [errMsg,setErrMsg] = useState("")
    const submitHandler = () => {
        // check password is same
        if (newPassword === confirmNewPassword) {
            if (newPassword.length >= 8) {
                openChangePasswordSuccesModal();
                setErrMsg("");
            }else {
                setErrMsg("Password harus lebih dari 8 karakter");
            }
        } else {
            setErrMsg("Password tidak sama");
        }
        // send new password to server
        // redirect to login page
    };

    useEffect(() => {
        const enterHandler = (e) => {
            if (e.key === "Enter") {
                if (
                    status === "set-new-password" &&
                    btnNewPasswordRef.current !== null
                ) {
                    btnNewPasswordRef.current.click();
                }
            } else {
                return;
            }
        };
        window.addEventListener("keypress", (e) => enterHandler(e));
        return window.removeEventListener("keypress", (e) => enterHandler(e));
    }, []);
    return (
        <>
            <div className="card-information">
                <h1>Buat Password Baru</h1>
                <p>
                    Buatlah password baru dengan email <b>{inputVal} </b>
                </p>
            </div>
            <div className="card-input">
                <div className="input-password">
                    <label htmlFor="password">Password Baru</label>
                    <div className={`input-wrapper ${errMsg !== "" ?"err" :""}`}>
                        <PasswordInput
                            name="password"
                            placeholder={""}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        {errMsg !== "" ? (
                            <div className="error-message active">{errMsg}</div>
                        ):null}
                    </div>
                </div>
                <div className="input-confirm-password">
                    <label htmlFor="confirm-password">
                        Konfirmasi Password
                    </label>
                    <div className={`input-wrapper ${errMsg !== "" ?"err" :""}`}>
                        <PasswordInput
                            name="confirm-password"
                            placeholder={""}
                            onChange={(e) =>
                                setConfirmNewPassword(e.target.value)
                            }
                        />
                        {errMsg !== "" ? (
                            <div className="error-message active">{errMsg}</div>
                        ):null}
                    </div>
                </div>
            </div>
            <div className="card-action">
                <button
                    className="primary-button"
                    // disabled={}
                    onClick={submitHandler}
                    ref={btnNewPasswordRef}
                >
                    Buat Password
                </button>
            </div>
        </>
    );
};
