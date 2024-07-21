import React from 'react';
// import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

import ProductLists from '../Components/ProductLists';
import RoomLists from '../Components/RoomLists';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import StepDesign from './assets/image/svg/StepDesign';
import Button from '../Components/Button';

import SampleRoom from './assets/image/sample-room.png'
import PromoPict from './assets/image/promo-pict.png'
import "./assets/style/homepage.css";
import RecommendationProduct from '../Components/RecommendationProduct';

// import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function Homepage() {

    return (
        <>
            <NavigationBar />
            <Container fluid>
                <Row className="homepage-banner">
                    {/* <div id="nav-bar"></div> */}
                    <Col className="homepage-banner-text">
                        <p className="homepage-banner-subtitle1"> Pilihan terbaik untuk ruangan </p>
                        <h1 className="homepage-banner-title">New Furniture Collection Shabby Chic</h1>
                        <p className="homepage-banner-subtitle2">
                            Manjakan tampilan ruangan mu dengan membeli kursi
                            dari edisi terbaru Shabby Chic yang tentunya akan menambah desain manis dan elegant.
                        </p>
                        <Button text="Belanja Sekarang" type="primary-button" toPage="/product" />
                    </Col>
                    <Col className="homepage-banner-pict">
                        <img src={PromoPict} alt="PromoPict" className="promo-pict" />
                    </Col>
                </Row>

                {/* <Row className="homepage-design-container"> */}
                <Row className="homepage-design-container">
                    <Col className="homepage-design-text">
                        <h2> Mulai dekorasi dengan 3D </h2>
                        
                        <p>
                            Inovasi teknologi 3D Modeling kini telah hadir di Houset untuk memudahkan visualisasi setiap interior pada ruangan dan menyajikan kesan lebih nyata.
                        </p>
                        <Button type="primary-button" text="Klik Disini" toPage="/canvas" />
                    </Col>
                    <Col className="homepage-design-pict">
                        <img src={SampleRoom} alt="" />
                    </Col>
                </Row>

                <Row className="homepage-step-design">
                    <p> Step untuk mendesain ruangan </p>
                    <StepDesign />
                </Row>
                {/* </Row> */}

                <Row className="homepage-product-lists">
                    <ProductLists />
                </Row>

                {/* <br /> */}

                <Row className="homepage-room-lists">
                    <RoomLists />
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Homepage;