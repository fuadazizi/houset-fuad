import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './FurnitureCard';

import "./assets/style/auto-suggest-item.css";
import LinkSeeMore from './LinkSeeMore';

const ProductList = (count) => {
    let Products = [];
    let row = count;
    let col = 4;
    for (var i = 0; i < row; i++) {
        Products.push(
            <Row key={i}>
                {
                    [...Array(col)].map((e, index) => {
                        return (
                            <Col xl={3} key={index}>
                                <ProductCard />
                            </Col>
                        )
                    })
                }
            </Row>
        )
    }
    // for (var i = 0; i < col; i++) {
    //     Products.push(
    //         <Col xl={3}>
    //             <ProductCard />
    //         </Col>
    //     );
    // }

    return (
        Products
    )
};

export default function Recommendation(props) {
    return (
        <Container className="product-auto-suggest">
            <Row>
                <LinkSeeMore title="Produk yang mungkin cocok" links="/furnitur" text="Lihat Semua" />
            </Row>
            <Row xl={12} className="product-auto-list">
                {ProductList(props.count)}
            </Row>
        </Container>
    )
}
