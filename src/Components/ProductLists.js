import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel'
import FurnitureCard from './FurnitureCard';
import LinkSeeMore from './LinkSeeMore';

// import products from '../db/furniture.json';

import "./assets/style/product-list.css"
import axios from '../api/axios';

import products from "../db/products.json";

export default function ProductLists() {
    // const [ products, setProducts ] = useState([]);

    // useEffect(()=> {
    //     const getData = async () => {
    //         await axios
    //             .get(`/public/api/product/all`, {})
    //             .then((res) => setProducts(res.data?.data?.data
    //                 .filter(product => product.quantity > 0)))
    //             .catch((error) => console.log(error));
    //     };
    //     getData();
    //     return () => {
    //         setProducts([]);
    //     };
    // }, [])

    // const productList = (count) => {
    //     let ProductsCard = [];
    //     products.slice(0, count)?.map((product) => {
    //         ProductsCard.push(
    //             <FurnitureCard product={product} key={product.id}/>
    //         )
    //     })
    //     return (
    //         ProductsCard
    //     )
    // };

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            partialVisibilityGutter: -10,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 50
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30
        }
    };

    return (
			<div>
				<LinkSeeMore
					title="Produk Terbaik"
					links="/furnitur"
					text="Lihat Semua"
				/>
				<Carousel
					responsive={responsive}
					draggable={false}
					ssr
					partialVisible={true}
					// centerMode={true}
					className="product-list-carousel"
				>
					{products.slice(0, 8).map((product) => (
						<FurnitureCard product={product} key={product.id} className="m-auto"/>
					))}
				</Carousel>
			</div>
		);
}
