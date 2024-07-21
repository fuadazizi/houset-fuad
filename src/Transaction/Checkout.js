import { useState, useReducer } from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'
import { ButtonWithHandle } from '../Components/Button'
import CheckoutContainer from './CheckoutContainer'
import CartSummary from "./CartSummary.js"

import "./assets/style/checkout.css"

export default function Checkout({ checkoutItem }) {
    const totalPrice = checkoutItem.qty * checkoutItem.price;
    const [editAdr, setEditAdr] = useState(false);
    const initAdr = {
        adrName: "Muhammad Juno",
        adrNumber: "082249128412",
        adrDetail: "Perumahan Permata Buah Batu, Blok. C, No. 146, Lengkong, Bojongsoang, Bandung,40287"
    }

    const [address, updateAddress] = useReducer(
        (state, updates) => ({ ...state, ...updates }),
        initAdr
    );
    
    return (
        <>
            <NavigationBar />
            <Container className="transaction-container-main">
                <Row>
                    <p className="transaction-title"> Checkout </p>
                    <p className="checkout-subtitle"> Mohon selesaikan pembelian anda dengan melengkapi detail pembayaran </p>
                </Row>

                <Row>
                    <p className="checkout-loc"> Alamat Pengiriman </p>
                </Row>

                <Row xl={12} sm={2} >
                    {/* <hr /> */}
                    <Col xl={{ span: 7 }} sm={{ span: 10 }}>
                        <Row className="checkout-details">
                            <Col>
                                {editAdr ? (
                                    <table>
                                        <tr>
                                            <td> <label className="checkout-details-text">Nama</label> </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    className="checkout-details-input"
                                                    // onChange={(e) => (updateAddress({ type: 'name', value: e.target.value }))}
                                                    onChange={(e) => (updateAddress({ adrName: e.target.value }))}
                                                    value={address.adrName}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label className="checkout-details-text">Nomor Telepon</label> </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    className="checkout-details-input"
                                                    // onChange={(e) => (updateAddress({ type: 'number', value: e.target.value }))}
                                                    onChange={(e) => (updateAddress({ adrNumber: e.target.value }))}
                                                    value={address.adrNumber}
                                                />
                                            </td>

                                        </tr>
                                        <tr>
                                            <td> <label className="checkout-details-text">Detail Alamat</label> </td>
                                            <td>
                                                <textarea
                                                    type="text"
                                                    className="checkout-details-input"
                                                    // onChange={(e) => (updateAddress({ type: 'detail', value: e.target.value }))}
                                                    onChange={(e) => (updateAddress({ adrDetail: e.target.value }))}
                                                    value={address.adrDetail}
                                                    style={{ height: "100px" }}
                                                />
                                            </td>
                                            <br />
                                        </tr>
                                    </table>
                                ) : (
                                    <>
                                        <p className="checkout-details-text"> {address.adrName} <span> (Rumah) </span> </p>
                                        <p className="checkout-details-text"> {address.adrNumber} </p>
                                        <p className="checkout-details-text"> {address.adrDetail} </p>
                                    </>
                                )}
                            </Col>

                            <Col xl={{ span: 1 }} sm={{ span: 1 }} className="checkout-details-edit justify-content-end">
                                {editAdr ?
                                    <ButtonWithHandle type="primary-button" text="Save" onClick={() => (setEditAdr(!editAdr))} />
                                    :
                                    <ButtonWithHandle type="action-button" text="Edit" onClick={() => (setEditAdr(!editAdr))} />
                                }
                            </Col>
                        </Row>
                        <Row>
                            <CheckoutContainer product={checkoutItem} total={totalPrice} />
                        </Row>
                    </Col>

                    <Col xl={{ span: 3, offset: 1 }} sm={{ span: 10 }}>
                        <CartSummary product={checkoutItem} total={totalPrice} />
                    </Col>
                    {/* <hr /> */}
                </Row>
            </Container>
            <Footer />
        </>
    )
}
