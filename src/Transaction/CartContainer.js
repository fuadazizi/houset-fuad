import React from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import { product } from "../db/product"
import { Plus, Minus } from '../Components/Element'
import CartItem from './CartItem'

import "./assets/style/cart-container.css"

// export function countPrice() {
//     let price
//     product.map((item, key) => {
//         price += item.subPrice
//     })
//     return price;
// }

export default function CartContainer( {feature, product} ) {
    const [qty, setQty] = useState(1);
    const [subPrice, setSubPrice] = useState();

    const didDelete = (e) => {
        e.preventDefault();
        alert("Produk berhasil dihapus");
        // const navigate = useNavigate();
        // navigate("/cart");
    }

    function countTotalPrice() {
        let price = 0;
        product.map((item) => {
            price += item.subPrice
        })
        return price;
        // return (
        //     <p> 10 </p>
        // )
    }

    return (
        <Container className="cart-container">
            <Row className="cart-container-header">
                <Col xl={{ order: 1, span: 5 }} style={{ width: "300px", textAlign: "left" }} > Produk </Col>
                <Col xl={{ order: 2 }}> Harga </Col>
                <Col xl={{ order: 3 }}> Jumlah </Col>
                <Col xl={{ order: 4 }}> Total </Col>
            </Row>

            {product.map((item, key) => {

                return (feature == "cart") ? (
                    <Row className="cart-container-elm">
                        <Col xl={{ order: 1, span: 5 }} lg={{ order: 1, span: 6 }} style={{ width: "300px" }} >
                            <CartItem type={item.type} name={item.name} />
                        </Col>

                        <Col xl={{ order: 2 }} lg={{ order: 2 }} className="cart-container-info">
                            <p> Rp {item.price} </p>
                        </Col>

                        <Col xl={{ order: 3 }} lg={{ order: 3 }} className="cart-container-info">
                            <button className="operator-button" onClick={() => { setQty(qty - 1) }} disabled={qty == 1} > <Minus /> </button>
                            <span> {qty} </span>
                            <button className="operator-button" onClick={() => { setQty(qty + 1) }}> <Plus /> </button>
                        </Col>

                        <Col xl={{ order: 4 }} lg={{ order: 4 }} className="cart-container-info">
                            <Row xl={2}>
                                Rp {qty * item.price}
                            </Row>
                            <Row>
                                <p className="delete-from-cart" onClick={didDelete}> hapus </p>
                            </Row>
                        </Col>
                    </Row>
                ) : (feature == "checkout") ? (
                    <Row className="cart-container-elm">
                        <Col xl={{ order: 1, span: 5 }} lg={{ order: 1, span: 6 }} style={{ width: "300px" }} >
                            <CartItem type={item.type} name={item.name} />
                        </Col>

                        <Col xl={{ order: 2 }} lg={{ order: 2 }} className="cart-container-info">
                            <p> Rp {item.price} </p>
                        </Col>

                        <Col xl={{ order: 3 }} lg={{ order: 3 }} className="cart-container-info">
                            {item.qty}
                        </Col>

                        <Col xl={{ order: 4 }} lg={{ order: 4 }} className="cart-container-info">
                            <Row xl={2}>
                                Rp {item.subPrice}
                            </Row>
                        </Col>
                    </Row>
                ) : (<div> Wrong feature command </div>)
            }
            )}
            <Row>
                <p className="cart-subtotal"> Subtotal Rp {countTotalPrice()} </p>
            </Row>
        </Container>
    )
}
