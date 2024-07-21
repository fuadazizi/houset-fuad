import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { Modal } from 'react-bootstrap';

import Button from "../Components/Button";
import Footer from '../Components/Footer';
import NavigationBar from '../Components/NavigationBar';
import PackageCard from '../Components/PackageCard';
import SelectionRoomContainer from '../Components/SelectionRoomContainer';

import ConsultOnline from './assets/image/svg/ConsultOnline';
import ReferenceDesign from "./assets/image/svg/ReferenceDesign"
import TipsInsight from "./assets/image/svg/TipsInsight"
import BestPrice from "./assets/image/svg/BestPrice"
import StepConsult from './assets/image/svg/StepConsult';

import dapur1 from "../assets/image/dapur-1.png";
import dapur2 from "../assets/image/dapur-2.png";
import kamar from "../assets/image/kamar.png";
import ruangtamu from "../assets/image/ruang-tamu.png";

import "./assets/style/consult.css"
// Modal.setAppElement('#root');

export default function Consult() {
    const [pictureModal, setPictureModal] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    // const [showModal, setShowModal] = useState({
    //     show: false,
    //     picture: null,
    // });
    // const handleShow = (pict) => {
    //     setShowModal({
    //         show: true,
    //         picture: pict,
    //     });
    // }

    // const handleClose = () => {
    //     setShowModal({
    //         show: false,
    //         picture: null,
    //     });
    // }

    const SelectionRoomCard = ({ picture, name }) => {
        return (
            <div className="selection-card-scrollable">
                <button style={{ border: "none", background: "none" }} onClick={handleShow}>
                    {/* {console.log(picture.path)} */}
                    <img src={picture} alt="picture" />
                    <p> {name} </p>
                </button>
            </div>
        )
    }

    function PortofolioModal() {
        // const { show, picture } = showModal;
        return (
            <Modal
                show={showModal}
                onHide={handleClose}
            >
                <img src={dapur1} alt="dapur1" />
                {/* <button onClick={handleClose}>Close</button> */}
            </Modal>
        )
    }

    return (
        <>
            <NavigationBar />
            <br id="home" />

            <Container fluid className="consult-container">
                <Row className="consult-banner">
                    <Col className="consult-booking-button">
                        <a href="https://wa.me/6282218585101" target={"_blank"}> <Button type="primary-button" text="Booking Konsultasi" /> </a>
                        {/* <Button variant="primary">Primary</Button>{' '} */}
                    </Col>
                </Row>

                <Row>
                    <Col className="consult-aboutus">
                        <Row>
                            <Col className="consult-subtitle">
                                <p> Tentang Kami </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="consult-long-detail" xl={{ span: "auto" }}>
                                <p> Houset merupakan startup yang bergerak di bidang desain interior dan furniture yang memudahkan masyarakat
                                    untuk berimajinasi dan mengaplikasikan ruangan sesuai dengan desain interior yang diinginkan dan juga memudahkan dalam menjual furniture secara online. Visi Houset sendiri adalah "Mewujudkan harapan dan kenyamanan masyarakat Indonesia".
                                    Cara Houset memberikan kemudahan adalah dengan menyediakan website yang menyediakan layanan konsultasi bagi pelanggan terkait dengan kustomisasi desain interior yang diinginkan pelanggan baik dari pemodelan 3D maupun
                                    pembuatan desain yang berbeda sesuai keinginan pelanggan. </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xl={"auto"} className="consult-step-design">
                        <Row className="consult-sd-part">
                            <p className="consult-sd-title"> Step Konsultasi Desain Interior </p>
                            <StepConsult />
                        </Row>
                    </Col>
                </Row>

                <Row xl={12} className="consult-whyus">
                    <Col>
                        <Row>
                            <Col className="consult-subtitle"> <p> Mengapa Harus Kami? </p> </Col>
                        </Row>
                        <Row xl={12} className="consult-superiority">
                            <Col xl={3} className="consult-superiority-card">
                                <ConsultOnline />
                                <h3> Konsultasi Online </h3>
                                <p> Mendapatkan konsultasi langsung dengan spesialis desain interior. </p>
                            </Col>
                            <Col xl={3} className="consult-superiority-card">
                                <ReferenceDesign />
                                <h3> Referensi Desain </h3>
                                <p> Mendapatkan referensi desain interior dan furniture yang cocok dengan ruangan client. </p>
                            </Col>
                            <Col xl={3} className="consult-superiority-card">
                                <TipsInsight />
                                <h3> Tips and Insight </h3>
                                <p> Memberikan berbagai tips dan insight dalam menjawab permasalahan ruangan client. </p>
                            </Col>
                            <Col xl={3} className="consult-superiority-card">
                                <BestPrice />
                                <h3> Harga Terbaik </h3>
                                <p> Memberikan penawaran harga pasti dalam paket konsultasi desain interior. </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <br id="offers" style={{ marginBottom: "30px" }} />

                <Row>
                    <Col>
                        <Row>
                            <Col className="consult-subtitle">
                                <p> Penawaran Konsultasi Desain Interior </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="consult-long-detail" xl={{ span: "auto" }}>
                                <p> Dengan berbagai paket kami, Anda dapat membayar apa yang Anda butuhkan dan meninggalkan apa yang tidak dibutuhkankan.
                                    Cari tahu paket apa yang terbaik untuk ruangan Anda </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row xl={12} className="consult-package-group">
                    <Col>
                        <PackageCard type="standard" />
                    </Col>
                    <Col>
                        <PackageCard type="premium" />
                    </Col>
                    <Col>
                        <PackageCard type="exclusive" />
                    </Col>
                </Row>

                <br id="portofolio" style={{ marginBottom: "30px" }} />

                <Row>
                    <Col className="consult-subtitle">
                        <p> Portofolio Houset </p>
                    </Col>

                    <Row className="consult-portofolio-scrollable">
                        <SelectionRoomContainer />
                    </Row>
                    {/* <SelectionRoomContainer /> */}
                </Row>

                {/* <Row>
                    <Col className="consult-subtitle">
                        <p> Testimonials </p>
                    </Col>
                </Row> */}

                <br id="contact" style={{ marginBottom: "30px" }} />

                <Row>
                    <Container className="consult-bottomer-container">
                        <Row className="consult-bottomer-title">
                            <Col>
                                <h1> KAMI SIAP MELAYANI ANDA </h1>
                                <h2> APAPUN KEBUTUHANNYA </h2>
                            </Col>
                        </Row>
                        <Row className="consult-bottomer-button">
                            <Col>
                                <a href="https://wa.me/6282218585101" target={"_blank"}> <Button type="primary-button" text="Hubungi Kami Sekarang" /> </a>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                
            </Container >
            <Footer />
            <PortofolioModal />
            {/* {console.log(showModal)} */}
        </>
    )
}
