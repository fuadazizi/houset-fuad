import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
// import { useHistory,useLocation } from "react-router-dom";
// import { Tab, Tabs } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
// import RecommendationProduct from "../Components/RecommendationProduct";
// import ProductLastSeen from "../Components/ProductLastSeen";
import ProductDescription from "./ProductDescription";
import ProductContainerSide from "./ProductContainerSide";

import ProductThumbnail from "./ProductThumbnail";

import "./assets/style/product-detailed.css";
import useCheckout from "../hooks/useCheckout";
import BorderLine from "../Components/BorderLine";

import products from "../db/products.json";

export default function ProductDetailed() {
	// initialize data needed for checkout
	const [qty, setQty] = useState(1);
	// const [color, setColor] = useState();

	const { updateCheckoutCart } = useCheckout();

	const doUpdateCheckout = (data) => {
		updateCheckoutCart({ id: data.id });
		updateCheckoutCart({ name: data.name });
		updateCheckoutCart({ type: data.type });
		updateCheckoutCart({ price: data.price });
		updateCheckoutCart({ image_gallery: data.variant[0].image_gallery });
		updateCheckoutCart({ color: data.variant[0].color });
	};

	useEffect(() => {
		updateCheckoutCart({ qty: qty });
	}, [qty]);
	// end fetch data for checkout

	const [selectedProduct, setSelectedProduct] = useState({});
	const [imageList, setImageList] = useState(null);
	const { productId } = useParams();

	const product = products.find(
		(product) => product.id === parseInt(productId)
	);

	useEffect(() => {
		doUpdateCheckout(product);
		setImageList(product.variant[0].image_gallery);
	}, []);

	useEffect(() => {
		const getData = async () => {
			await axios
			    .get(`/public/api/product/${productId}`, {})
			    .then((res) => {
			        setSelectedProduct(res.data?.data);
			        doUpdateCheckout(res.data?.data);
			        setImageList(res.data?.data?.variant[0].image_gallery);
			    })
			    .catch((error) => console.log(error));
		};
		getData();
		return () => {
			setSelectedProduct({});
			updateCheckoutCart({});
		};
	}, [productId]);

	return (
		<>
			<NavigationBar />
			<Container fluid>
				<Row>
					<Col xl={5}>
						<ProductContainerSide
							product={product}
							qty={qty}
							setQty={setQty}
							setImageList={setImageList}
						/>
					</Col>
					<Col xl={7}>
						<ProductThumbnail images={imageList} />
					</Col>
				</Row>

				<Row xl={12}>
					<Col xl={10} className="product-desc-col">
						<ProductDescription product={product} images={imageList} />
					</Col>
				</Row>

			</Container>
			<Footer />
		</>
	);
}
