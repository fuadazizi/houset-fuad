import React from 'react'
import { GetProductDataProvider } from "./ProductAPI";
// import { GetRoomDataProvider } from "./roomAPI";

const ApiConsumer = ({ children }) => {
    return (
        <GetProductDataProvider>
            {/* <GetRoomDataProvider> */}
                {children}
            {/* </GetRoomDataProvider> */}
        </GetProductDataProvider>
    );
};

export default ApiConsumer