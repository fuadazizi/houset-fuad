import { Col } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import FurnitureCard from './FurnitureCard';
import LinkSeeMore from './LinkSeeMore';
import RoomCard from './RoomCard';

import "./assets/style/product-list.css"

import rooms from '../db/rooms.json';

export default function RoomLists() {
    let product =
    {
        type: "Kursi",
        name: "Kursi Kaki 3",
        price: "Rp. 1.100.000",
        priceDiscounted: "Rp. 1.000.000",
        image: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    };

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

            <LinkSeeMore title="Ruangan Terbaik" links="/ruangan" text="Lihat Semua" />
            <Carousel
                responsive={responsive}
                draggable={false}
                ssr
                partialVisible={true}
                // centerMode={true}
                className="product-list-carousel"
            >
                {rooms.slice(0, 8).map((room) => (
                    <RoomCard room={room} key={room.id} />
                ))}
            </Carousel>
        </div>
    )
}
