import React from 'react'
import { Container } from 'react-bootstrap'
import Button from '../Components/Button'
import NavigationBar from '../Components/NavigationBar'

import Error404 from './assets/image/error-404.png'

import './assets/style/error.css'

export default function Error() {
    return (
        <>
            <NavigationBar />
            <div className="error">
                <img src={Error404} className="error-image" />
                <p className="error-info">
                    Maaf, sepertinya halaman yang Anda cari sedang tidak tersedia!
                    Silakan coba refresh halaman ini atau kembali ke home.
                </p>
                <div className="error-btn">
                    <Button type="primary-button" text="Kembali ke Homepage" toPage="/" />
                </div>
            </div>
        </>
    )
}
