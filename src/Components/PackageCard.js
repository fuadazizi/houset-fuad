import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import "./assets/style/package-card.css"
import Button from './Button'

function CheckMark(isAvailable) {
    if (isAvailable) {
        return (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.34 -6.10352e-05C17.73 -6.10352e-05 20 2.37994 20 5.91994V14.0909C20 17.6199 17.73 19.9999 14.34 19.9999H5.67C2.28 19.9999 0 17.6199 0 14.0909V5.91994C0 2.37994 2.28 -6.10352e-05 5.67 -6.10352e-05H14.34ZM14.18 6.99994C13.84 6.65994 13.28 6.65994 12.94 6.99994L8.81 11.1299L7.06 9.37994C6.72 9.03994 6.16 9.03994 5.82 9.37994C5.48 9.71994 5.48 10.2699 5.82 10.6199L8.2 12.9899C8.37 13.1599 8.59 13.2399 8.81 13.2399C9.04 13.2399 9.26 13.1599 9.43 12.9899L14.18 8.23994C14.52 7.89994 14.52 7.34994 14.18 6.99994Z" fill="#389C1A" />
            </svg>

        )
    } else {
        return (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.34 -6.10352e-05C17.73 -6.10352e-05 20 2.37994 20 5.91994V14.0909C20 17.6199 17.73 19.9999 14.34 19.9999H5.67C2.28 19.9999 0 17.6199 0 14.0909V5.91994C0 2.37994 2.28 -6.10352e-05 5.67 -6.10352e-05H14.34ZM14.18 6.99994C13.84 6.65994 13.28 6.65994 12.94 6.99994L8.81 11.1299L7.06 9.37994C6.72 9.03994 6.16 9.03994 5.82 9.37994C5.48 9.71994 5.48 10.2699 5.82 10.6199L8.2 12.9899C8.37 13.1599 8.59 13.2399 8.81 13.2399C9.04 13.2399 9.26 13.1599 9.43 12.9899L14.18 8.23994C14.52 7.89994 14.52 7.34994 14.18 6.99994Z" fill="#98A2B3" />
            </svg>
        )
    }
}

export default function PackageCard({ type }) {
    let content = null;
    if (type === "standard") {
        content = (
            <>
                <Row>
                    <Col>
                        <h1> STANDARD </h1>
                        <h2> Rp 50.000/m² </h2>
                    </Col>
                </Row>

                <Row className="package-benefit-group">
                    <Col className="package-detail">
                        <p className="yes"> {CheckMark(true)} 3D Modelling </p>
                        <p className="yes"> {CheckMark(true)} Layout </p>
                        <p className="no"> {CheckMark(false)} Tampak </p>
                        <p className="no"> {CheckMark(false)} Potongan </p>
                        <p className="no"> {CheckMark(false)} Lembar Kerja Furniture </p>
                        <p className="no"> {CheckMark(false)} Rencana Plafon </p>
                        <p className="no"> {CheckMark(false)} Rencana Lantai </p>
                        <p className="no"> {CheckMark(false)} Mekanikal - Elektrikal </p>
                        <p className="no"> {CheckMark(false)} Detail Furniture </p>
                        <p className="no"> {CheckMark(false)} RAB </p>
                        <p className="yes"> {CheckMark(true)} Rendering View Interior </p>
                    </Col>
                </Row>
            </>
        )
    } else if (type === "premium") {
        content = (
            <>
                <Row>
                    <Col>
                        <h1> PREMIUM </h1>
                        <h2> Rp 85.000/m² </h2>
                    </Col>
                </Row>

                <Row className="package-benefit-group">
                    <Col className="package-detail">
                        <p className="yes"> {CheckMark(true)} 3D Modelling </p>
                        <p className="yes"> {CheckMark(true)} Layout </p>
                        <p className="yes"> {CheckMark(true)} Tampak </p>
                        <p className="yes"> {CheckMark(true)} Potongan </p>
                        <p className="no"> {CheckMark(false)} Lembar Kerja Furniture </p>
                        <p className="yes"> {CheckMark(true)} Rencana Plafon </p>
                        <p className="yes"> {CheckMark(true)} Rencana Lantai </p>
                        <p className="yes"> {CheckMark(true)} Mekanikal - Elektrikal </p>
                        <p className="no"> {CheckMark(false)} Detail Furniture </p>
                        <p className="no"> {CheckMark(false)} RAB </p>
                        <p className="yes"> {CheckMark(true)} Rendering View Interior </p>
                    </Col>
                </Row>
            </>
        )
    } else if (type === "exclusive") {
        content = (
            <>
                <Row>
                    <Col>
                        <h1> EXCLUSIVE </h1>
                        <h2> Rp 100.000/m² </h2>
                    </Col>
                </Row>

                <Row className="package-benefit-group">
                    <Col className="package-detail">
                        <p className="yes"> {CheckMark(true)} 3D Modelling </p>
                        <p className="yes"> {CheckMark(true)} Layout </p>
                        <p className="yes"> {CheckMark(true)} Tampak </p>
                        <p className="yes"> {CheckMark(true)} Potongan </p>
                        <p className="yes"> {CheckMark(true)} Lembar Kerja Furniture </p>
                        <p className="yes"> {CheckMark(true)} Rencana Plafon </p>
                        <p className="yes"> {CheckMark(true)} Rencana Lantai </p>
                        <p className="yes"> {CheckMark(true)} Mekanikal - Elektrikal </p>
                        <p className="yes"> {CheckMark(true)} Detail Furniture </p>
                        <p className="yes"> {CheckMark(true)} RAB </p>
                        <p className="yes"> {CheckMark(true)} Rendering View Interior </p>
                    </Col>
                </Row>
            </>
        )
    }
    return (
        <Container className="package-card-container">
            {content}
            <Row className="package-button-select">
                <Col>
                    <Button type="primary-button" text="Pilih Paket" />
                </Col>
            </Row>
        </Container>
    )
}
