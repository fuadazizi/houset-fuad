// import { Tab } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Tabs, Tab } from 'react-bootstrap'

import "./assets/style/product-description.scss"

export default function ProductDescription({ product, images }) {

    const description = (desc) => {
        return (
            <div>
                <h4 className="product-tab-subtitle"> Deskripsi Produk </h4>
                <p className="product-tab-information"> {desc} </p>
            </div>
        )
    }

    const detailSpecs = (specs) => {
        // const detail = product.details;
        // const specification = product.specifications;
        return (
            <>
                <Row xs={1} sm={2}>
                    <Col>
                        <p className="product-tab-subtitle"> Detail </p>
                        <Container className="product-tab-information">
                            <Row> <Col> Brand </Col> <Col> {specs.brand} </Col> </Row>
                            <Row> <Col> Warna </Col> <Col> {specs.color} </Col> </Row>
                            <Row> <Col> Kondisi Produk </Col> <Col> {specs.condition} </Col> </Row>
                            <Row> <Col> Style </Col> <Col> {specs.style} </Col> </Row>
                            <Row> <Col> Material Dudukan </Col> <Col> {specs.material_1} </Col> </Row>
                            <Row> <Col> Material Frame </Col> <Col> {specs.material_2} </Col> </Row>
                            <Row> <Col> Tipe Produk </Col> <Col> {specs.type} </Col> </Row>
                            <Row> <Col> Material </Col> <Col> {specs.material_3} </Col> </Row>
                        </Container>
                    </Col>
                    <Col>
                        <p className="product-tab-subtitle"> Spesifikasi </p>
                        <Container className="product-tab-information">
                            <Row> <Col> Ukuran Barang </Col> <Col> {specs.length}cm x {specs.width}cm x {specs.height}cm </Col> </Row>
                            <Row> <Col> Ukuran Kemasan </Col> <Col> {parseInt(specs.length,10) + 5}cm x {parseInt(specs.width,10) + 5}cm x {parseInt(specs.height,10) + 5}cm </Col> </Row>
                            <Row> <Col> Berat </Col> <Col> {specs.weight} Kg </Col> </Row>
                        </Container>
                    </Col>
                </Row>
            </>
        )
    }

    const [thumbnails, setThumbnails] = useState([]);
    const baseImage = process.env.REACT_APP_URL + "/";
    useEffect(() => {
        if (images !== null) {
            setThumbnails(
                images.map((image) => baseImage + image.location)
            );
        }
    }, [images])

    const gallery = (thumbnails) => {
			const galleryList = () => {
				let photoList = [];

				thumbnails.map((image) => {
					const baseImage = process.env.REACT_APP_URL + "/";
					photoList.push(
						<div className="product-gallery-card">
							<img
								src={image}
								alt="product-mini-thumbnail"
							/>
						</div>
					);
				});
				return photoList;
			};
			return (
				<>
					<p className="product-tab-subtitle"> Tampilan Produk </p>
					<div className="product-tab-gallery">{galleryList()}</div>
				</>
			);
		};

    const review = () => {
        return (
            <>
                <Row>
                    <Col>
                        <p className="product-tab-subtitle"> Penilaian Produk </p>
                    </Col>
                    <Col>
                        <p className="product-tab-subtitle"> Ulasan Pelanggan </p>
                    </Col>
                </Row>
            </>
        )
    }

    return (
        <div className="product-description">
            <Tabs defaultActiveKey="description" id="uncontrolled-tab-example" className="product-tab-header">
                <Tab className="product-desc-tab" eventKey="description" title="Deskripsi">
                    {description(product.description)}
                </Tab>
                <Tab className="product-desc-tab" eventKey="detail" title="Detail dan Spesifikasi">
                    {detailSpecs(product.specification[0])}
                </Tab>
                <Tab className="product-desc-tab" eventKey="gallery" title="Galeri">
                    {gallery(thumbnails)}
                </Tab>
                <Tab className="product-desc-tab" eventKey="review" title="Ulasan">
                    {review()}
                </Tab>
            </Tabs>
        </div>
    )
}
