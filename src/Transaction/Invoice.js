import { Col, Container, Row } from 'react-bootstrap'
import Countdown from 'react-countdown';

import Footer from '../Components/Footer'
import NavigationBar from '../Components/NavigationBar'
import { ButtonWithHandle } from '../Components/Button'

import Mandiri from './assets/image/logo-mandiri.png'

import "./assets/style/invoice.css"
import DateFormatter from '../Components/DateFormatter'
import PriceFormatter from '../Components/PriceFormatter';

export default function Invoice({ invData }) {

    return (
        <>
            <NavigationBar />

            <Container className="invoice-container">
                <Row className="invoice-deadline">
                    <Col className="invoice-deadline-container">
                        <p className="inv-deadline-text"> Selesaikan pembayaran dalam </p>
                        <p className="inv-deadline-time">
                            <Countdown date={Date.now() + 86400000} />
                        </p>
                        <p className="inv-deadline-text2"> Batas akhir pembayaran </p>
                        <p className="inv-deadline-text"> <DateFormatter dayAddition={1} /> </p>
                    </Col>
                </Row>

                <Row className="invoice-payment">
                    <Row>
                        <Col className="inv-part-title"> Transfer Pembayaran </Col>
                    </Row>

                    <hr />

                    <Row>
                        <Col>
                            <p classname="inv-part-subtitle" style={{ marginBottom: "2px" }}> Fakhrurezi Maindra </p>
                            <p className="inv-part-content"> 1300020939909 </p>
                        </Col>
                        <Col className="inv-payment-action"> <img src={Mandiri} alt="logo-bank" /> </Col>
                    </Row>

                    <Row>
                        <Col>
                            <p className="inv-part-subtitle" style={{ marginBottom: "2px" }}> Total Pembayaran </p>
                            <p className="inv-part-content"> <PriceFormatter value={invData.total_amount} /> </p>
                        </Col>
                        <Col className="inv-payment-action"> Lihat Detail </Col>
                    </Row>

                    <Row>
                        <Col>
                            {/* <p className="inv-part-subtitle" style={{ marginBottom: "2px" }}> Berita Transfer </p>
                            <p className="inv-part-content">  </p> */}
                        </Col>
                    </Row>
                </Row>

                <Row md={8} sm={12} className="invoice-button-col">
                    <div className="invoice-button-confirm">
                        <ButtonWithHandle type="primary-button" text="Konfirmasi Pembayaran" onClick={() => window.open('http://wa.me/6282218585101', '_blank')} />
                    </div>
                </Row>

                <Row className="invoice-info">
                    <p className="inv-part-title" style={{ marginTop: "32px" }}> Informasi Penting </p>
                    <hr />
                    <p className="inv-info-subtitle"> Proses konfirmasi pembayaran akan membutuhkan waktu sekitar 20 menit (dari pesan WhatsApp dikirim). Mohon menunggu dengan sabar dan terima kasih. </p>

                    <p className="inv-part-title"> Butuh bantuan? Hubungi kami </p>
                    <hr />
                    <Row>
                        <Col className="inv-info-subtitle" style={{ marginBottom: "32px" }}> Admin </Col>
                        <Col className="inv-info-subtitle" style={{ textAlign: "right" }}> Rexy Regina </Col>
                    </Row>
                    <Row style={{ marginBottom: "32px" }}>
                        <Col className="inv-info-subtitle" style={{ marginBottom: "32px" }}> No. WhatsApp </Col>
                        <Col className="inv-info-subtitle-alt" style={{ textAlign: "right" }}> 082218585101 </Col>
                    </Row>
                </Row>
            </Container>

            <Footer />
        </>
    )
}
