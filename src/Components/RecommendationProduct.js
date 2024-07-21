import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FurnitureCard from './FurnitureCard';
import LinkSeeMore from './LinkSeeMore';

import axios from '../api/axios';

// import products from '../db/furniture.json';

import "./assets/style/auto-suggest-item.css";

export default function RecommendationProduct(props) {
    const [ products, setProducts ] = useState([]);

    useEffect(()=> {
        const getData = async () => {
            await axios
                .get(`/public/api/product/all`, {})
                .then((res) => setProducts(res.data?.data?.data
                    .filter(product => product.quantity > 0)))
                .catch((error) => console.log(error));
        };
        getData();
        return () => {
            setProducts([]);
        };
    }, [])

    const productList = (count) => {
        let Products = [];
        let tempList=[];
        products.slice(0, count).map((product) => {
            tempList.push(
                <Col xl={3}>
                    <FurnitureCard product={product} />
                </Col>
            )
            
        });
        Products.push(
            <Row> {tempList} </Row>
        )
    
        return (
            Products
        )
    };

    return (
        <Container className="product-auto-suggest" style={{marginBottom: "60px"}}>
            <Row>
                <LinkSeeMore title="Produk yang mungkin Anda suka" links="/furnitur" text="Lihat Semua" />
            </Row>
            <Row xl={12} className="product-auto-list">
                {productList(props.count)}
            </Row>
        </Container>
    )
}
