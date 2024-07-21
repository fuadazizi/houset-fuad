import React, { useState, useEffect } from 'react'
import { Col, Container, Modal, Row } from 'react-bootstrap'

import "./assets/style/product-thumbnail.scss"
import ProductThreeD from './ProductThreeD';

import assetFbx from "./assets/3d/nakas-1.fbx"
import kursi from "./assets/image/kursi.png"

function MakeThumbnail({ thumbnails, setShowExpand }) {
    const [nowPreview, setNowPreview] = useState(thumbnails[0]);
    let indexPhoto = 0;
    const nPhoto = thumbnails.length;

    const thumbnailList = () => {
        let photoList = [];

        thumbnails.map((thumbnail) => {
            if (indexPhoto < 3) {
                photoList.push(
                    <Row className="thumbnail-list-item">
                        <img src={thumbnail} alt="product-mini-thumbnail" onClick={() => setNowPreview(thumbnail)} />
                    </Row>
                )
            }

            // check if the product contains exact 4 photos
            if (indexPhoto == 3 && thumbnails.length == 4) {
                photoList.push(
                    <Row className="thumbnail-list-item">
                        <img src={thumbnail} alt="product-mini-thumbnail" onClick={() => setNowPreview(thumbnail)} />
                    </Row>
                )
            }
            indexPhoto++;
        })

        if (thumbnails.length != 4 && indexPhoto > 3) {
            photoList.push(
                <Row className="thumbnail-list-item thumbnail-list-expand">
                    <img src={thumbnails[3]} alt="product-mini-thumbnail" onClick={() => setShowExpand(true)} />
                    <p onClick={() => setShowExpand(true)} > +{nPhoto - 3} Photos </p>
                </Row>
            )
        }
        return photoList
    }

    return (
        <>
            <Col className="thumbnail-360">
                <img src={nowPreview || thumbnails[0]} alt="thumbnail" />
                {/* <ProductThreeD asset={assetFbx} /> */}
            </Col>
            <Col className="thumbnail-list">
                {thumbnailList()}
            </Col>
        </>
    )
}

export default function ProductThumbnail({ images }) {
    const baseImage = process.env.REACT_APP_URL +'/';
    const [thumbnails, setThumbnails] = useState([]);

    useEffect(() => {
        if (images !== null) {
            setThumbnails(
                images.map((image) => baseImage + image.location)
            );
        }
    }, [images])

    const [showExpand, setShowExpand] = useState(false);
    const closeExpand = () => setShowExpand(false);

    function ModalExpand() {
        const photoList = [];

        thumbnails.slice(3, thumbnails.length).map((thumbnail) => {
            photoList.push(
                <Col>
                    <img src={thumbnail} alt="image not found" />
                </Col>
            )
        })

        return (
            <Modal
                show={showExpand}
                onHide={closeExpand}
                className="thumbnail-modal-expand"
            >
                <Row>
                    {photoList}
                </Row>
            </Modal>
        )
    }

    return (
        <>
            <Container className="thumbnail-container">
                <Row>
                    <MakeThumbnail thumbnails={thumbnails} setShowExpand={setShowExpand} />
                </Row>
            </Container>
            <ModalExpand />
        </>
    )
}
