import { createContext, useEffect, useState } from "react";
import AddAddress from "../modals/AddAddress";
import RoomProductModal from "../RoomDetailed/RoomDetailedModal";
import "../modals/reactModalSettings.js";
import {
    ChangePasswordSuccess,
    TransactionSuccess,
} from "../modals/ModalsActionSuccess";

const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [addAddressModalIsOpen, setAddAddressModalIsOpen] = useState(false);
    const [roomModalIsOpen, setRoomModalIsOpen] = useState(false);
    const [currProduct, setCurrProduct] = useState({});
    const [
        changePasswordSuccessModalIsOpen,
        setChangePasswordSuccessModalIsOpen,
    ] = useState(false);
    const [transactionSuccessModalIsOpen, setTransactionSuccessModalIsOpen] =
        useState(false);

    // reusable function when modal open and close the body will give a modal effect
    useEffect(() => {
        if (modalIsOpen) {
            document.querySelector("body").style.overflow = "hidden";
        } else {
            document.querySelector("body").style.overflow = "auto";
        }
    }, [modalIsOpen]);

    // add address modal toggle
    const openAddAddressModal = () => {
        setAddAddressModalIsOpen(true);
        setModalIsOpen(true);
    };
    const closeAddAddressModal = () => {
        setAddAddressModalIsOpen(false);
        setModalIsOpen(false);
    };

    // room modal toggle
    const openRoomModal = (product) => {
        setCurrProduct(product);
        setRoomModalIsOpen(true);
        setModalIsOpen(true);
    };
    const closeRoomModal = () => {
        setRoomModalIsOpen(false);
        setModalIsOpen(false);
    };

    const openChangePasswordSuccesModal = () => {
        setChangePasswordSuccessModalIsOpen(true);
        setModalIsOpen(true);
    };
    const closeChangePasswordSuccesModal = () => {
        setChangePasswordSuccessModalIsOpen(false);
        setModalIsOpen(false);
    };

    const openTransactionSuccesModal = () => {
        setTransactionSuccessModalIsOpen(true);
        setModalIsOpen(true);
    };
    const closeTransactionSuccesModal = () => {
        setTransactionSuccessModalIsOpen(false);
        setModalIsOpen(false);
    };

    // function to close all modal
    const closeAllModal = () => {
        setModalIsOpen(false);
        setAddAddressModalIsOpen(false);
        setRoomModalIsOpen(false);
        setChangePasswordSuccessModalIsOpen(false);
    };

    return (
        <ModalContext.Provider
            value={{
                roomModalIsOpen,
                setRoomModalIsOpen,
                openRoomModal,
                closeRoomModal,
                addAddressModalIsOpen,
                setAddAddressModalIsOpen,
                modalIsOpen,
                openAddAddressModal,
                closeAddAddressModal,
                closeAllModal,
                changePasswordSuccessModalIsOpen,
                setChangePasswordSuccessModalIsOpen,
                closeChangePasswordSuccesModal,
                openChangePasswordSuccesModal,
                openTransactionSuccesModal,
                closeTransactionSuccesModal,
                transactionSuccessModalIsOpen,
                setTransactionSuccessModalIsOpen,
            }}
        >
            {children}
            <AddAddress />
            <ChangePasswordSuccess />
            <TransactionSuccess />
            {currProduct !== {} ? <RoomProductModal room={currProduct} /> : ""}
        </ModalContext.Provider>
    );
}
export default ModalContext;
