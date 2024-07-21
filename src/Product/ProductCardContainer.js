import FurnitureCard from "../Components/FurnitureCard";
import RoomCard from "../Components/RoomCard";

import "./assets/style/product-card-container.css";

import { Container, Row, Col } from "react-bootstrap";

import rooms from '../db/rooms.json';

export default function ProductCardContainer({ variant, products }) {
    const BuildProductListRoom = ({ rooms }) => {
        return (
            <>
                {rooms.map((room) => (
                    <Col className="product-card-item" key={room.id}>
                        <RoomCard room={room} />
                    </Col>
                ))}
            </>
        );
    };

    const BuildProductList = ({ products }) => {
        return (
            <>
                {products.map((product) => (
                    <Col className="product-card-item" key={product.id}>
                        <FurnitureCard product={product} />
                    </Col>
                ))}
            </>
        );
    };

    return (
        <Container className="product-card-container">
            {variant === "furniture" ? (
                // buildProductList()
                <Row>
                    <BuildProductList products={products} />
                </Row>
            ) : (
                <Row>
                    <BuildProductListRoom rooms={rooms} />
                </Row>
            )}
            {/* {buildProductList} */}
        </Container>
    );
}
