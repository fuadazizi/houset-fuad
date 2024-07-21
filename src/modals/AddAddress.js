import React, { useContext } from "react";
import ReactModal from "react-modal";
import ModalContext from "../context/modal";
import { CloseIcon } from "../Profile/assets/Icon";
import './assets/style/modal.css'


const AddAddress = () => {
  // function to return the add address modal on the profile page

  const { addAddressModalIsOpen, closeAddAddressModal } = useContext(ModalContext);

  const labelAddressHandle = (e) => {
    // function to not re-render when label is click
    e.preventDefault()
  }
  
  return (
    <ReactModal
      isOpen={addAddressModalIsOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeAddAddressModal}
      
    >
      <form className="add-address">
        <div className="form-add-address-header">
          <h1 className="form-title">Tambah Alamat</h1>
          <button className="form-close-button" onClick={closeAddAddressModal}>
            <CloseIcon />
          </button>
        </div>
        <div className="form-add-address-body">
          <div className="two-col-section">
            <div className="label-input-field">
              <label>Nama Lengkap</label>
              <input type="text" placeholder="Masukan nama anda" />
            </div>
            <div className="label-input-field">
              <label>Nomor Telepon</label>
              <input type="text" placeholder="Masukkan nomor telepon anda" />
            </div>
          </div>
          <div className="two-col-section">
            <div className="label-input-field">
              <label>Kota & Kecamatan</label>
              <input type="text" placeholder="Masukan kota & kecamatan anda" />
            </div>
            <div className="label-input-field">
              <label>Label</label>
              <div className="button-label-address">
                <button className="active" onClick={(e)=>labelAddressHandle(e)}>Rumah</button>
                <button className="" onClick={(e)=>labelAddressHandle(e)}>kantor</button>
              </div>
            </div>
          </div>
          <div className="label-input-field">
            <label>Alamat Lengkap</label>
            <textarea  placeholder="Masukan alamat lengkap anda" />
          </div>
          <div className="label-input-field">
            <label>Catatan untuk kurir (optional)</label>
            <input
              type="text"
              placeholder="Masukan detail lainnya (cth: patokan / blok / pesan khusus,dll)"
            />
          </div>
          <div className="main-address-settings">
            <input type="checkbox" name="main-address" />
            <label htmlFor="main-address">Jadikan alamat utama</label>
          </div>
        </div>
        <div className="form-add-address-footer">
          <button className="form-save-button" >Simpan</button>
        </div>
      </form>
    </ReactModal>
  );
};
export default AddAddress;
