import { useContext } from "react";
import CheckoutContext from "../context/CheckoutProvider";

export default function useCheckout() {
    const context = useContext(CheckoutContext);
    return context;
}
