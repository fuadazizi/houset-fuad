import React, { useContext } from "react";
import { Link } from "react-router-dom";

import ReactModal from "react-modal";
import ModalContext from "../context/modal";
import RecommendationProduct from "../Components/RecommendationProduct";
import Button from "../Components/Button";
import RoomItemDescription from "./RoomItemDescription";
import RecommendationRoom from "../Components/RecommendationRoom";
// import ProductLastSeen from "../Components/RoomLastSeen";

import "./assets/style/item-room-recommendation.css";
import "./assets/style/room-detailed.css";

export default function RoomDetailedModal({ room }) {
// function to return the room modal that has information related to the room design

  // import room settings modal
  const { roomModalIsOpen, closeRoomModal } = useContext(ModalContext);

  return (
    <ReactModal
      isOpen={roomModalIsOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeRoomModal}
      className="room-detailed"
    >
      <div className="room-container">
        <div className="room-detailed-heading">
          {room !== undefined ? (
            <ProductContainerLeft
              room={room}
              closeRoomModal={closeRoomModal}
            />
          ) : (
            ""
          )}
          <div className="room-heading-right">
            <RoomThumbnail />
          </div>
        </div>
        <div className="room-detailed-body">
          <div className="room-product-description">
            <RoomItemDescription room={room} />
          </div>
          <div className="room-design-recommendation">
            {/* Desain ruangan yang mungkin Anda suka */}
            <RecommendationRoom count="1" />
          </div>
          <div className="room-product-recommendation">
            {/* Produk yang mungkin cocok */}
            <RecommendationProduct count="4" />
          </div>
          <div className="room-design-latest">
            {/* Desain ruangan yang terakhir Anda lihat */}
            {/* <ProductLastSeen /> */}
          </div>
        </div>
      </div>
    </ReactModal>
  );
}
const RoomThumbnail = () => {
  // function to return the image on the header of room design modal
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
        alt="room design"
      />
    </>
  );
};

const ProductContainerLeft = ({ room,closeRoomModal }) => {
  // function to return room design information on the header

  return (
    <div className="room-heading-left">
      <div className="room-info">
        <p className="room-info-room">{room.loc}</p>
        <p className="room-info-name">{room.name}</p>
        <p className="room-info-description">
          {room.desc}
        </p>
      </div>

      <div className="start-design">
        <Link to="/canvas" onClick={closeRoomModal}>
          <Button text="Mulai Design" type="primary-button" />
        </Link>
      </div>
    </div>
  );
};
