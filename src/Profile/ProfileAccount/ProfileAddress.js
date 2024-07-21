import React, { useContext } from "react";
import { AddIcon } from "../assets/Icon";
import "./assets/style/profile-address.css";
import ModalContext from "../../context/modal";

const AddressBuilder = ({ main }) => {
  // component for list address

  return (
    <div className={`address-list ${main ? "main" : ""}`}>
      <div className="address-info">
        <div className="address-info-name">
          <label>Nama Lengkap</label>
          <h4>Muhammad Juno</h4> {/* address name */}
          <span className="main-address">Utama</span>
        </div>
        <div className="address-info-phone">
          <label>Nomor Telepon</label>
          <p>082249128412</p> {/* phone number */}
        </div>
        <div className="address-info-alamat">
          <label>Alamat</label>
          <p>
            Perumahan Permata Buah Batu, Blok. C, No. 146, Lengkong,
            Bojongsoang, Bandung,40287
          </p>
          {/* address */}
        </div>
      </div>
      <div className="address-action">
        <button className="address-action-edit">Edit</button>
        <button className="address-action-delete">hapus</button>
      </div>
    </div>
  );
};

export default function ProfileAddress() {
  // component for showing list of address
  const { openAddAddressModal } = useContext(ModalContext);
  return (
    <>
      <div className="profile-container-header address">
        <h1 className="header-title">Daftar Alamat</h1>
        <button className="header-button" onClick={openAddAddressModal}>
          <span> Tambah Alamat</span>
          <AddIcon />
        </button>
      </div>
      <div className="profile-container-body address">
        <AddressBuilder main={true} />
        <AddressBuilder />
        <AddressBuilder />
      </div>
    </>
  );
}
