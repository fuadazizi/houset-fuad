import { useNavigate } from 'react-router-dom'
import { Row, Col, Container, Navbar } from 'react-bootstrap'
import Button, { ButtonWithHandle } from '../Components/Button'

import LogoCanvas from './assets/image/logo-houset-canvas.png'
import "./assets/style/navbar-canvas.css"
import { useState } from 'react'

const DownloadIcon = () => {
    return (
        <div className="canvas-download-icon">
            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.59 6H10V1C10 0.45 9.55 0 9 0H5C4.45 0 4 0.45 4 1V6H2.41C1.52 6 1.07 7.08 1.7 7.71L6.29 12.3C6.68 12.69 7.31 12.69 7.7 12.3L12.29 7.71C12.92 7.08 12.48 6 11.59 6ZM0 16C0 16.55 0.45 17 1 17H13C13.55 17 14 16.55 14 16C14 15.45 13.55 15 13 15H1C0.45 15 0 15.45 0 16Z" fill="white" />
            </svg>
        </div>
    )
}

const AddPhotoIcon = () => {
    return (
        <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.02 5H19V2.98C19 2.44 18.56 2 18.02 2H17.99C17.44 2 17 2.44 17 2.98V5H14.99C14.45 5 14.01 5.44 14 5.98V6.01C14 6.56 14.44 7 14.99 7H17V9.01C17 9.55 17.44 10 17.99 9.99H18.02C18.56 9.99 19 9.55 19 9.01V7H21.02C21.56 7 22 6.56 22 6.02V5.98C22 5.44 21.56 5 21.02 5ZM16 9.01V8H14.99C14.46 8 13.96 7.79 13.58 7.42C13.21 7.04 13 6.54 13 5.98C13 5.62 13.1 5.29 13.27 5H5C3.9 5 3 5.9 3 7V19C3 20.1 3.9 21 5 21H17C18.1 21 19 20.1 19 19V10.72C18.7 10.89 18.36 11 17.98 11C16.89 10.99 16 10.1 16 9.01ZM15.96 19H6C5.59 19 5.35 18.53 5.6 18.2L7.58 15.57C7.79 15.29 8.2 15.31 8.4 15.59L10 18L12.61 14.52C12.81 14.26 13.2 14.25 13.4 14.51L16.35 18.19C16.61 18.52 16.38 19 15.96 19Z" fill="#055053" />
            </svg>
        </span>
    )
}

const CopyIcon = () => {
    return (
        <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" fill="#055053" />
            </svg>
        </span>
    )
}

const UndoIcon = () => {
    return (
        <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 8C9.85 8 7.45 8.99 5.6 10.6L3.71 8.71C3.08 8.08 2 8.52 2 9.41V15C2 15.55 2.45 16 3 16H8.59C9.48 16 9.93 14.92 9.3 14.29L7.39 12.38C8.78 11.22 10.55 10.5 12.51 10.5C15.67 10.5 18.4 12.34 19.7 15C19.97 15.56 20.61 15.84 21.2 15.64C21.91 15.41 22.27 14.6 21.95 13.92C20.23 10.42 16.65 8 12.5 8Z" fill="#055053" />
            </svg>
        </span>
    )
}

const RedoIcon = () => {
    return (
        <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8C7.34004 8 3.76004 10.42 2.06004 13.93C1.74004 14.6 2.10004 15.4 2.81004 15.64C3.40004 15.84 4.04004 15.56 4.31004 15C5.61004 12.34 8.34004 10.5 11.5 10.5C13.45 10.5 15.23 11.22 16.62 12.38L14.71 14.29C14.08 14.92 14.52 16 15.41 16H21C21.55 16 22 15.55 22 15V9.41C22 8.52 20.92 8.07 20.29 8.7L18.4 10.6Z" fill="#055053" />
            </svg>
        </span>
    )
}

const DeleteIcon = () => {
    return (
        <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V9C18 7.9 17.1 7 16 7H8C6.9 7 6 7.9 6 9V19ZM9 9H15C15.55 9 16 9.45 16 10V18C16 18.55 15.55 19 15 19H9C8.45 19 8 18.55 8 18V10C8 9.45 8.45 9 9 9ZM15.5 4L14.79 3.29C14.61 3.11 14.35 3 14.09 3H9.91C9.65 3 9.39 3.11 9.21 3.29L8.5 4H6C5.45 4 5 4.45 5 5C5 5.55 5.45 6 6 6H18C18.55 6 19 5.55 19 5C19 4.45 18.55 4 18 4H15.5Z" fill="#055053" />
            </svg>
        </span>
    )
}

export default function NavbarCanvas({ setActiveCanvas }) {
    const [isActive, setIsActive] = useState("template");
    const navigate = useNavigate();
    const handleHome = () => {
        setActiveCanvas(false);
        // navigate('/');
        window.location.href = "https://www.google.com";
    }

    return (
        <Navbar>
            <Container fluid className="navbar-canvas">
                <Navbar.Collapse>
                    <img src={LogoCanvas} alt="logo" className="navbar-canvas-logo" />
                    {/* <ButtonWithHandle text="Home" type="secondary-button" onClick={handleHome} /> */}
                    <Button text="Home" type="secondary-button" toPage="/" />
                </Navbar.Collapse>

                <Navbar.Collapse className="justify-content-center">
                    <input type="text" className="canvas-name" placeholder="Untitled Design" />
                </Navbar.Collapse>

                <Navbar.Collapse className="justify-content-end">
                    {/* <DownloadIcon />
                    <button className="navbar-button"> Share </button> */}
                </Navbar.Collapse>
            </Container>
            {/* <Container fluid className="control-navbar-canvas">
                <div className="control-navbar-type">
                    <button
                        className={(isActive === "template") ? "control-navbar-active" : "control-navbar-inactive"}
                        onClick={() => setIsActive("template")}
                    >
                        Template Ruangan
                    </button>
                    <button
                        className={(isActive === "furniture") ? "control-navbar-active" : "control-navbar-inactive"}
                        onClick={() => setIsActive("furniture")}
                    >
                        Furniture
                    </button>
                </div>
                <div className="control-navbar-icon">
                    <AddPhotoIcon />
                    <CopyIcon />
                    <UndoIcon />
                    <RedoIcon />
                    <DeleteIcon />
                </div>
                <div className="control-navbar-checkout justify-content-end">
                    <p> Total Rp 1.500.000 </p>
                    <button> Checkout </button>
                </div>
            </Container> */}
        </Navbar>
    )
    // <nav className="navbar-canvas">
    //     <img src={LogoCanvas} alt="logo" className="navbar-canvas-logo d-flex justify-content-md-center" />
    //     <button className="navbar-button"> Home </button>
    //     <input className="canvas-name" placeholder="Untitled Design" />
    //     <DownloadIcon className="canvas-download" />
    //     <button className="navbar-button"> Share </button>
    // </nav>
}
