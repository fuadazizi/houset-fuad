import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Link } from 'react-router-dom';
import ModalContext from '../context/modal';
import KursiPreview from "./assets/image/kursi.png";

import "./assets/style/furniture-card.css";
import PriceFormatter from './PriceFormatter';

export default function FurnitureCard({ className = "", product }) {
    const { closeAllModal } = useContext(ModalContext)
    // const baseImage = "https://houset.my.id/storage/app/public/";
    const productImage = product.variant[0].image_gallery[0].location;
    // console.log(Object.keys(product).length)

    // useEffect(() => {
    // try {
    //     setProductImage(product.image_gallery[0].location);
    // } catch(err) {
    //     if (err?.response?.status === 404) {
    //         setProductImage("Image not found");
    //         console.log("Not found");
    //     }
    // }
    // if (Object.keys(product).length !== 0
    //     &&
    //     product.variant.image_gallery.length !== 0) {
    //     setProductImage(product.variant.image_gallery[0].location);
    // }
    // }, [])

    const ProductColor = ({ variants }) => {
        return (
            <div className="item-color-box">
                {variants.map((variant) =>
                    <div
                        className="item-color-dot"
                        style={{ backgroundColor: variant.color }}
                    >

                    </div>
                )}
            </div>
        )
    }

    return (
        <div className={`product-item ${className}`} onClick={closeAllModal}>
            <Link to={`/product/${product.id}`} >
                <Row className='m-auto'>
                    <div className="product-pict"> <img src={ productImage} alt="Image not found" /> </div>
                </Row>
                <Row>
                    <Col>
                        <p className="item-type"> {product.type} </p>
                        <p className="item-name"> {product.name} </p>
                        <p className="item-price"> <PriceFormatter value={product.price} /> </p>

                        <p className="item-price-discounted">  <PriceFormatter value={product.priceDiscounted} /> </p>
                    </Col>
                    <Col>
                        <ProductColor variants={product.variant} />
                    </Col>
                </Row>
            </Link>
        </div>

    )
}

// FurnitureCard.propTypes = {
//     image: propTypes.string,
//     type: propTypes.string,
//     name: propTypes.string,
//     price: propTypes.string,
//     priceDiscounted: propTypes.string
// };