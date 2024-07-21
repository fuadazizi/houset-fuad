import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from '../api/axios'

import { ButtonWithHandle } from '../Components/Button'
import PriceFormatter from '../Components/PriceFormatter'
import useAuth from '../hooks/useAuth'
import useCheckout from '../hooks/useCheckout'

import "./assets/style/cart-summary.css"

const TRANSACTION_URL = '/public/api/transaction/create'

export default function CartSummary({ product, total }) {
    const transDetails = [{ "product_id": product.id, "quantity": product.qty, "color": product.color }];
    const { saveInvData } = useCheckout();
    const navigate = useNavigate();
    const { getToken } = useAuth();
    
    const goToCheckout = async (e) => {
        // this will send checkout summary to database and 
        // return transaction code that needed for verify
        e.preventDefault();
        const bToken = getToken();
        try {
            const response = await axios.post(
                TRANSACTION_URL,
                JSON.stringify({ total_amount: total, transaction_details: transDetails, }),
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${bToken}`
                    }
                }
            )
            const invData = response?.data?.data;
            saveInvData(invData);
            navigate('/invoice');
        } catch (err) {
            if (!err?.response) {
                console.log("No Server Response");
            } else if (err.response?.status === 401) {
                alert("Anda belum login, atau session anda telah berakhir");
                // navigate('/login');
            }
        }
    }

    return (
        <>
            {/* <input type="text" className="input-promotion-code" placeholder='Masukkan Kode Promo' /> */}

            <Container className="cart-summary-container">
                <Row className="cart-summary-title">
                    <p> Ringkasan Belanja </p>
                </Row>
                <Row xs={2} className="cart-summary-detail">
                    <Col xl className="cart-summary-product">
                        {product.name}
                    </Col>
                    <Col xl className="cart-summary-price">
                        <p> <PriceFormatter value={total} /> </p>
                    </Col>
                </Row>
                {/* <Row className="cart-summary-disc">
                        <Col xl>
                            <p> Discount </p>
                        </Col>
                        <Col xl style={{ textAlign: "right" }}>
                            <p> - Rp 40.000 </p>
                        </Col>
                    </Row> */}
                <hr />
                <Row xs={2} className="cart-total-price">
                    <Col xl>
                        <p> Total </p>
                    </Col>
                    <Col xl style={{ textAlign: "right" }}>
                        <p> <PriceFormatter value={total} /> </p>
                    </Col>
                </Row>
                <Row className="cart-checkout">
                    <Col>
                        <ButtonWithHandle type="primary-button" text="Checkout" onClick={goToCheckout} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
