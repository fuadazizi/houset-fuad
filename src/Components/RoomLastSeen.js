import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import RoomCard from './RoomCard';

import "./assets/style/auto-suggest-item.css";
import LinkSeeMore from './LinkSeeMore';

const ProductList = () => {
    let Products = [];
    let row = 1;
    let col = 4;
    for (var i = 0; i < row; i++) {
        Products.push(
            <Row key={i}>
                {
                    [...Array(col)].map((e, index) => {
                        return (
                            <Col xl={3} key={index}>
                                <RoomCard />
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

export default function ProductLastSeen() {
    return (
        <Container className="product-auto-suggest">
        <Row>
            <LinkSeeMore title="Desain ruangan terakhir Anda lihat" links="/ruangan" text="Lihat Semua" />
        </Row>
        <Row xl={12} className="product-auto-list">
            {ProductList()}
        </Row>
    </Container>
    )
}
