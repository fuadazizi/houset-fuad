import React, { useContext } from "react";
import { Tab, Tabs } from "react-bootstrap";
import "./assets/style/item-room-description.css";

import FurnitureCard from "../Components/FurnitureCard";
import GetProductDataContext from "../context/ProductAPI";

const ItemDescription = ({ room }) => {
  // function to return "deskripsi" tab
  return (
    <div className="tab-content-list">
      <h4 className="tab-title">Deskripsi Ruangan</h4>
      <p>{room.details.desc}</p>
    </div>
  );
};

const ItemDetails = ({ room }) => {
  // function to return "detail and spec" tab

  return (
    <div className="tab-content-list two-col">
      <div className="tab-item-detail">
        <h4 className="tab-title">Detail</h4>
        <ul>
          {Object.keys(room.details.detail).map((key,indeks) => {
            return (
              <li key={indeks}>
                <span className="detail-key">{key}</span>
                <span className="detail-val">{room.details.detail[key]}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="tab-item-specs">
        <h4 className="tab-title">Spesifikasi</h4>
        <ul>
          {Object.keys(room.details.spesifikasi).map((key,indeks) => {
            return (
              <li key={indeks}>
                <span className="detail-key">{key}</span>
                <span className="detail-val">{room.details.spesifikasi[key]}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
const ItemGallery = ({ images }) => {
  // function to return "gallery" tab

  return (
    <div className="tab-content-list">
      <h4 className="tab-title">Tampilan Ruangan</h4>
      <div className="room-gallery">
        {/* looping the image from product */}
        {images.map((image, i) => {
          return (
            <div className="gallery-image" key={i}>
              <img src={image} alt="product" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ItemRoomRecommendation = ({ linkedId }) => {
  // function to return "Interior Ruangan" tab
  const {products} = useContext(GetProductDataContext)
  return (
    <div className="tab-content-list">
      <h4 className="tab-title">Produk yang melengkapi Ruangan</h4>
      <div className="room-related-product">
        {products.map((product) => {
          if (linkedId.includes(product.id)) {
            return <FurnitureCard product={product} key={product.id} />;
          }else {
            return null
          }
        })}
      </div>
    </div>
  );
};

const RoomItemDescription = ({ room }) => {
  // function to return the tabs view of room information

  return (
    <>
      <Tabs>
        <Tab eventKey="description" title="Deskripsi">
          <ItemDescription room={room} />
        </Tab>
        <Tab eventKey="detail" title="Detail dan Spesifikasi">
          <ItemDetails room={room} />
        </Tab>
        <Tab eventKey="gallery" title="Galeri">
          <ItemGallery images={room.details.gallery} />
        </Tab>
        <Tab eventKey="room-interior" title="Interior Ruangan">
          <ItemRoomRecommendation linkedId={room.details.interior} />
        </Tab>
      </Tabs>
    </>
  );
};

export default RoomItemDescription;
