import React, { useState, useEffect, useContext } from "react";
import ReactPaginate from "react-paginate";
import { Container, Row, Col } from "react-bootstrap";

import NavigationBar from "../Components/NavigationBar";
import ProductCardContainer from "./ProductCardContainer";
import SelectionRoomContainer from "./SelectionRoomContainer";
import CategorySidebar from "./CategorySidebar";
import Footer from "../Components/Footer";
import Button from "../Components/Button";

import "./assets/style/product.scss";
import Search from "../Components/Search";
// import GetRoomDataContext from "../context/roomAPI";
// import GetProductDataContext from "../context/ProductAPI";

import products from "../db/products.json";

const prevPageIcon = () => {
    return (
        <svg className="product-paginate-arrow-prev" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.71047 9.87998L2.83047 5.99998L6.71047 2.11998C7.10047 1.72998 7.10047 1.09998 6.71047 0.70998C6.32047 0.31998 5.69047 0.31998 5.30047 0.70998L0.710469 5.29998C0.320469 5.68998 0.320469 6.31998 0.710469 6.70998L5.30047 11.3C5.69047 11.69 6.32047 11.69 6.71047 11.3C7.09047 10.91 7.10047 10.27 6.71047 9.87998Z" fill="#98A2B3" />
        </svg>
    )
}

const nextPageIcon = () => {
    return (
        <svg className="product-paginate-arrow-next" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.28953 9.87998L5.16953 5.99998L1.28953 2.11998C0.899531 1.72998 0.899531 1.09998 1.28953 0.70998C1.67953 0.31998 2.30953 0.31998 2.69953 0.70998L7.28953 5.29998C7.67953 5.68998 7.67953 6.31998 7.28953 6.70998L2.69953 11.3C2.30953 11.69 1.67953 11.69 1.28953 11.3C0.909531 10.91 0.899531 10.27 1.28953 9.87998Z" fill="#98A2B3" />
        </svg>
    )
}

function Product({ variant }) {
    // initiate pagination system
    // const { products } = useContext(GetProductDataContext);
    // const products = [
	// 		{
	// 			id: "1",
	// 			variant: [{
    //                 id: "1",
	// 				color: "red",
	// 				image_gallery: [{
    //                     location: ["../assets/image/kamar.png"],
    //                 }]
	// 			}],
	// 			type: "Classic",
	// 			name: "Shabby Chic",
	// 			price: "1000000",
	// 		},
	// 	];

    const [currentProducts, setCurrentProducts] = useState(products);
    const [pageCount, setPageCount] = useState(0);
    const [productOffset, setProductOffset] = useState(0);
    const productsPerPage = 8;

    useEffect(() => {
        if (products !== undefined) {
            const endOffset = productOffset + productsPerPage;
            setCurrentProducts(products.slice(productOffset, endOffset));
            setPageCount(Math.ceil(products.length / productsPerPage));
        }
    }, [productOffset, productsPerPage, products]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * productsPerPage) % products.length;
        setProductOffset(newOffset);
    };
    // end of pagination system
    return (
        <>
            <NavigationBar />
            <Container fluid>
                <Row className="product-hero">
                    <Col className="product-hero-content">
                        <Row>
                            <p>
                                Desain ruangan dengan <br /> kreasi mu sekarang
                                juga!
                            </p>
                        </Row>

                        <Row className="product-hero-start">
                            <Button
                                text="Mulai Design"
                                type="secondary-button"
                                toPage="/canvas"
                            />
                        </Row>
                    </Col>
                </Row>

                <Row className="product-selection">
                    <SelectionRoomContainer />
                </Row>

                <Row className="product-list-search">
                    <Search placeHolder="Cari produk, kategori, atau ruangan" />
                    <ul className="product-list-quick">
                        <li>
                            <button> Dekorasi </button>
                        </li>
                        <li>
                            <button> Peralatan Dapur </button>
                        </li>
                        <li>
                            <button> Perlengkapan Kamar Mandi </button>
                        </li>
                        <li>
                            <button> Perlengkapan Kantor </button>
                        </li>
                        <li>
                            <button> Aksesoris Penyimpanan </button>
                        </li>
                        <li>
                            <button> Aksesoris Kamar Anak </button>
                        </li>
                        <li>
                            <button> Boneka Bebek </button>
                        </li>
                    </ul>
                </Row>

                <Row className="product-list-content">
                    <Col className="product-list-sidebar">
                        <CategorySidebar />
                    </Col>

                    <Col className="product-list-preview">
                        <ProductCardContainer
                            variant={variant}
                            products={currentProducts}
                        />
                    </Col>
                    {/* {CardContainer} */}
                </Row>

                <Row>
                    <Col>
                        <ReactPaginate
                            breaklabel="..."
                            nextLabel={nextPageIcon()}
                            previousLabel={prevPageIcon()}
                            onPageChange={handlePageClick}
                            // pageRangeDisplayed={16}
                            pageCount={pageCount}
                            renderOnZeroPageCount={null}
                            containerClassName="product-pagination"
                        />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Product;
