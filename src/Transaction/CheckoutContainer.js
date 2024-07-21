import { Col, Container, Row } from 'react-bootstrap'
// import { product } from "../db/product"
// import { Plus, Minus } from '../Components/Element'
import CartPictureProduct from './CartPictureProduct'
import PriceFormatter from '../Components/PriceFormatter'

import "./assets/style/cart-container.css"

export default function CheckoutContainer({ product, total }) {
    return (
        <Container className="cart-container">
            <Row className="cart-container-header">
                <Col xl={{ order: 1, span: 5 }} style={{ width: "300px", textAlign: "left" }} > Produk </Col>
                <Col xl={{ order: 2 }}> Harga </Col>
                <Col xl={{ order: 3 }}> Jumlah </Col>
                <Col xl={{ order: 4 }}> Total </Col>
            </Row>
            <Row className="cart-container-elm">
                <Col xl={{ order: 1, span: 5 }} lg={{ order: 1, span: 6 }} style={{ width: "300px" }} >
                    <CartPictureProduct product={product} />
                </Col>

                <Col xl={{ order: 2 }} lg={{ order: 2 }} className="cart-container-info">
                    <p> <PriceFormatter value={product?.price} /> </p>
                </Col>

                <Col xl={{ order: 3 }} lg={{ order: 3 }} className="cart-container-info">
                    <p> {product?.qty} </p>
                </Col>

                <Col xl={{ order: 4 }} lg={{ order: 4 }} className="cart-container-info">
                    <p> <PriceFormatter value={total} /> </p>
                </Col>
            </Row>
            <Row>
                <p className="cart-subtotal"> Total bayar <PriceFormatter value={total} /> </p>
            </Row>
        </Container>
    )
}
