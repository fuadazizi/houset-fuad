import React, { useContext } from 'react'
import RoomPreview from "./assets/image/room.png";

import "./assets/style/room-card.css";
import ModalContext from '../context/modal';
// import GetRoomDataContext from "../context/roomAPI";

const Wishlist = ({ stroke = "black", fill = "none", id ,fav}) => {
    // const { changeWishlist } = useContext(GetRoomDataContext);
    return (
        <div
            // onClick={() => {
            //     id
            //         ? changeWishlist("room", id, fav )
            //         : alert("Please login to add to wishlist");
            // }}
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M5 12L2 6.5L5 3L10 4.5L12.5 3L16 3.5L17.5 6.5L16 11L10 16L8 15L5 12Z"
                    fill={fill}
                />
                <path
                    d="M8.87496 16.5002L7.43746 15.1877C5.96524 13.8404 4.63551 12.5035 3.44829 11.1768C2.26051 9.85072 1.66663 8.38905 1.66663 6.79183C1.66663 5.48627 2.10413 4.396 2.97913 3.521C3.85413 2.646 4.9444 2.2085 6.24996 2.2085C6.98607 2.2085 7.68051 2.36461 8.33329 2.67683C8.98607 2.98961 9.54163 3.41683 9.99996 3.9585C10.4583 3.41683 11.0138 2.98961 11.6666 2.67683C12.3194 2.36461 13.0138 2.2085 13.75 2.2085C15.0555 2.2085 16.1458 2.646 17.0208 3.521C17.8958 4.396 18.3333 5.48627 18.3333 6.79183C18.3333 8.38905 17.743 9.85433 16.5625 11.1877C15.3819 12.521 14.0416 13.8613 12.5416 15.2085L11.125 16.5002C10.8055 16.8057 10.4305 16.9585 9.99996 16.9585C9.5694 16.9585 9.1944 16.8057 8.87496 16.5002ZM9.20829 5.62516C8.80551 5.05572 8.37496 4.62155 7.91663 4.32266C7.45829 4.02433 6.90274 3.87516 6.24996 3.87516C5.41663 3.87516 4.72218 4.15294 4.16663 4.7085C3.61107 5.26405 3.33329 5.9585 3.33329 6.79183C3.33329 7.51405 3.59024 8.28127 4.10413 9.0935C4.61801 9.90627 5.23274 10.6946 5.94829 11.4585C6.66329 12.2224 7.3994 12.9377 8.15663 13.6043C8.91329 14.271 9.52774 14.8196 9.99996 15.2502C10.4722 14.8196 11.0869 14.271 11.8441 13.6043C12.6008 12.9377 13.3369 12.2224 14.0525 11.4585C14.7675 10.6946 15.3819 9.90627 15.8958 9.0935C16.4097 8.28127 16.6666 7.51405 16.6666 6.79183C16.6666 5.9585 16.3888 5.26405 15.8333 4.7085C15.2777 4.15294 14.5833 3.87516 13.75 3.87516C13.0972 3.87516 12.5416 4.02433 12.0833 4.32266C11.625 4.62155 11.1944 5.05572 10.7916 5.62516C10.6944 5.76405 10.5763 5.86822 10.4375 5.93766C10.2986 6.00711 10.1527 6.04183 9.99996 6.04183C9.84718 6.04183 9.70135 6.00711 9.56246 5.93766C9.42357 5.86822 9.30551 5.76405 9.20829 5.62516Z"
                    fill={stroke}
                />
            </svg>
        </div>
    );
};

export default function RoomCard({ room }) {
    // function to return the room card of the room page
    const { openRoomModal } = useContext(ModalContext);
    const showModal = (room) => {
        openRoomModal(room);
    };
    // const { changeWishlist } = useContext(GetRoomDataContext);
    return (
        <>
            <div
                className="product-room-item"
                onClick={() => showModal(room)}
            >
                <div className="room-pict">
                    <img
                        src="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                        alt={room !== undefined ? room.name : ""}
                    />
                </div>
                <div className="room-card-info">
                    <div className="room-desc">
                        <p className="room-type">
                            {room !== undefined ? room.type : ""}
                        </p>
                        <p className="room-name">
                            {room !== undefined ? room.name : ""}
                        </p>
                    </div>
                    <div className="room-action">
                        {/* love icon wishlist status*/}
                        {room !== undefined ? (
                            room.fav ? (
                                <Wishlist
                                    stroke="red"
                                    fill="red"
                                    id={room.id}
                                    fav={room.fav}
                                />
                            ) : (
                                <Wishlist id={room.id} fav={room.fav} />
                            )
                        ) : (
                            <Wishlist />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}