import { createContext, useEffect, useState } from "react";
import axios from "../api/axios";

const AuthContext = createContext({});

// NOTE !!!
// Token is tkJowddv88
// Timout is tmDiwgnF29

export const AuthProvider = ({ children }) => {

    // 2 hour = 7200000 ms
    const sessionDuration = 7200000;

    // useEffect(() => {
    //     const currentTime = new Date();
    //     const timeRemaining = localStorage.getItem('tmDiwgnF29') - currentTime.getTime();

    //     if (timeRemaining > 0) {
    //         let userToken = localStorage.getItem('tkJowddv88');
    //         setTimeout(() => {
    //             removeToken();
    //             alert('Your session ended, you will need to login');
    //             window.location.reload();
    //         }, timeRemaining);
    //     }
    // }, [localStorage.getItem('tmDiwgnF29')])

    const relogin = async (email, password) => {
        // e.preventDefault();
        try {
            const response = await axios.post(
                '/public/api/user/login',
                JSON.stringify({ email, password }),
                {
                    headers: { "Content-Type": "application/json" }
                },
            )
            const accessToken = response?.data?.data?.token;
            saveToken(accessToken);
            // return getToken();
            return accessToken;
        } catch (err) {
            console.log("relogin failed");
        }
    }

    const getToken = () => {
        // check the session time remaining
        // if the session timeout, stored token should remove, then user need to login
        const currentTime = new Date();
        const timeRemaining = localStorage.getItem('tmDiwgnF29') - currentTime.getTime();

        if (timeRemaining > 0) {
            let userToken = localStorage.getItem('tkJowddv88');
            setTimeout(() => {
                // const email = localStorage.getItem('rmmbrEmailInfo');
                // const password = localStorage.getItem('rmmbrPswrdInfo');
                // this is to check if user checked "Ingat saya" option from login page
                // if (email != null && password != null) {
                //     return relogin(email,password);
                // } else {
                removeToken();
                // alert('Your session ended, you will need to login');
                // console.log('repeat')
                window.location.reload();
                // }
            }, timeRemaining);
            return userToken;
        } else {
            removeToken();
            return null;
        }
    };

    const saveToken = (userToken) => {
        // init expired time logged in token
        const timeExpired = new Date().getTime() + sessionDuration;
        localStorage.setItem('tmDiwgnF29', timeExpired);
        localStorage.setItem('tkJowddv88', userToken);
    };

    const removeToken = () => {
        // remove all stored info from device
        // localStorage.removeItem('tmDiwgnF29');
        // localStorage.removeItem('tkJowddv88');
        localStorage.clear();
    };

    const rememberLogin = (email, password) => {
        // localStorage.setItem('rmmbrEmailInfo', email);
        // localStorage.setItem('rmmbrPswrdInfo', password);
    }

    return (
        <AuthContext.Provider value={{
            getToken, saveToken, removeToken, rememberLogin
            // persist, setPersist 
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;