import React from 'react'
import Carousel from 'react-multi-carousel'

import SelectionRoomCard from '../Product/SelectionRoomCard';

import dapur1 from "../assets/image/dapur-1.png";
import dapur2 from "../assets/image/dapur-2.png";
import kamar from "../assets/image/kamar.png";
import ruangtamu from "../assets/image/ruang-tamu.png";

import "./assets/style/selection-room-container.css"

export default function SelectionRoomContainer() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            paritialVisibilityGutter: -10,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            paritialVisibilityGutter: 50
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 30
        }
    };

    return (
        <Carousel
            responsive={responsive}
            draggable={false}
            ssr
            partialVisible={true}
            // centerMode={true}
            className="room-lists-carousel"
        >
            <SelectionRoomCard picture={dapur1} name="Ruang Dapur" />
            <SelectionRoomCard picture={kamar} name="Kamar Tidur" />
            <SelectionRoomCard picture={dapur2} name="Ruang Dapur" />
            <SelectionRoomCard picture={ruangtamu} name="Ruang Keluarga" />
            <SelectionRoomCard picture={dapur1} name="Ruang Dapur" />
            <SelectionRoomCard picture={kamar} name="Kamar Tidur" />
            <SelectionRoomCard picture={dapur2} name="Ruang Dapur" />
            <SelectionRoomCard picture={ruangtamu} name="Ruang Keluarga" />
        </Carousel>
    )
}
