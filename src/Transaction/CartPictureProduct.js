import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import "./assets/style/cart-picture-product.css";

export default function CartPictureProduct({ product }) {
    const baseImage = process.env.REACT_APP_URL + "/";
    // const [productImage, setProductImage] = useState();
    const productImage = product.image_gallery[0].location;

    // useEffect(() => {
    //     if (Object.keys(product).length !== 0 && product.image_gallery.length !== 0) {
    //         setProductImage(product.image_gallery[0].location);
    //     }
    // }, [product])

    return (
        <Container className="cart-item-container">
            <Row xl={4,"auto"} >
                {/* <input type="checkbox" /> */}
                <Col className="cart-item-picture" xl={5}>
                    <img className="cart-item-pict" src={baseImage + productImage} alt="product" />
                </Col>
                <Col className="cart-item-info" xl={3}>
                    <p className="cart-item-type"> {product.type} </p>
                    <p className="cart-item-name"> {product.name} </p>
                    <p className="cart-item-color" style={{ backgroundColor: product.color }}></p>
                </Col>
            </Row>
        </Container>
    )
}

