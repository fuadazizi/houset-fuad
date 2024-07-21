import React, { useContext } from "react";
import ReactModal from "react-modal";
import ModalContext from "../context/modal";
import { SuccessIcon } from "./assets/svg";
import "./assets/style/success-modal.css";

export const ChangePasswordSuccess = () => {
    const { changePasswordSuccessModalIsOpen, closeChangePasswordSuccesModal } =
        useContext(ModalContext);

    return (
        <ReactModal
            isOpen={changePasswordSuccessModalIsOpen}
            shouldCloseOnOverlayClick={false}
            onRequestClose={closeChangePasswordSuccesModal}
        >
            <div className="success-modal">
                <div className="desc-wrapper">
                    <div className="success-icon">
                        <SuccessIcon />
                    </div>
                    <div className="success-title">
                        <h2>Password Berhasil Diubah!</h2>
                    </div>
                    <div className="success-text">
                        <p>
                            Gunakan password baru untuk masuk kembali. Selalu
                            jaga kerahasiaan password untuk keamanan akun.
                        </p>
                    </div>
                </div>
                <div className="modal-action">
                    <button
                        onClick={closeChangePasswordSuccesModal}
                        className="primary-button"
                    >
                        OK
                    </button>
                </div>
            </div>
        </ReactModal>
    );
};
export const TransactionSuccess = () => {
    const { transactionSuccessModalIsOpen, closeTransactionSuccesModal } =
        useContext(ModalContext);

    return (
        <ReactModal
            isOpen={transactionSuccessModalIsOpen}
            shouldCloseOnOverlayClick={false}
            onRequestClose={closeTransactionSuccesModal}
        >
            <div className="success-modal">
                <div className="desc-wrapper">
                    <div className="success-icon">
                        <SuccessIcon />
                    </div>
                    <div className="success-title">
                        <h2>Transaksi Berhasil!</h2>
                    </div>
                    <div className="success-text">
                        <p>
                            Selamat! Pembelian paket member premium anda telah
                            berhasil dan akun telah aktif. Silakan cek email
                            untuk mendownload bukti pembayaran.
                        </p>
                    </div>
                </div>
                <div className="modal-action">
                    <button
                        onClick={closeTransactionSuccesModal}
                        className="primary-button"
                    >
                        Lanjut Belanja
                    </button>
                </div>
            </div>
        </ReactModal>
    );
};
