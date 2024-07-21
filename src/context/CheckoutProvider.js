import { useReducer, useState } from "react";
import { createContext } from "react"
import { Route, Routes } from "react-router-dom";
import Checkout from "../Transaction/Checkout";
import Invoice from "../Transaction/Invoice";

const CheckoutContext = createContext({});

export const CheckoutProvider = ({ children }) => {

    const [checkoutItem, updateCheckoutItem] = useReducer(
        (state, updates) => ({ ...state, ...updates }),
        {
            id: "",
            name: "",
            type: "",
            qty: "",
            color: "",
            price: "",
            image_gallery: ""
        }
    )
    const [invData, setInvData] = useState();

    const updateCheckoutCart = (dataForUpdate) => {
        updateCheckoutItem(dataForUpdate)
    }

    const saveInvData = (data) => {
        setInvData(data)
    }

    return (
        <CheckoutContext.Provider value={{ updateCheckoutCart, saveInvData }}>
            {children}
            <Routes>
                {/* {checkoutItem !== {} ? <Route path="/checkout" element={<Checkout checkoutItem={checkoutItem} />} /> : ""} */}
                <Route path="/checkout" element={<Checkout checkoutItem={checkoutItem} />} />
                <Route path="/invoice" element={<Invoice invData={invData} />} />
            </Routes>
        </CheckoutContext.Provider>
    )
}

export default CheckoutContext;