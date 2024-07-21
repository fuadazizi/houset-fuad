import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RoomCard from './RoomCard';
// import ProductRelated from './ProductRelated';

import "./assets/style/auto-suggest-item.css";
import LinkSeeMore from './LinkSeeMore';

import rooms from '../db/rooms.json';

const ProductList = (count) => {
    let Products = [];
    let row = count;
    let col = 4;
    for (var i = 0; i < row; i++) {
        Products.push(
            <Row key={i}>
                {
                    rooms.slice(0,col).map((room, index) => {
                        return (
                            <Col xl={3} key={index}>
                                <RoomCard room={room} />
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

export default function RecommendationRoom(props) {
    return (
        <Container className="product-auto-suggest">
            <Row>
                <LinkSeeMore title="Desain ruangan yang mungkin Anda suka" links="/furnitur" text="Lihat Semua" />
            </Row>
            
            <Row xl={12} className="product-auto-list">
                {ProductList(props.count)}
            </Row>
        </Container>
    )
}
