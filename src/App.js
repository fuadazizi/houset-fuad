import React, { useContext, useEffect, useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Register from './Auth/Register';
import Login from './Auth/Login';
import Product from './Product/Product';
import Canvas from './Canvas/Canvas';
import Consult from './Consult/Consult';
import ProductDetailed from './ProductDetailed/ProductDetailed';
import Profile from './Profile/Profile';
import Error from './Error/Error'
import ContactUs from './ContactUs/ContactUs';
import ForgetPassword from './Auth/ForgetPassword';

import ScrollToTop from './Components/ScrollToTop';
import { ModalProvider } from './context/modal';
import { CheckoutProvider } from './context/CheckoutProvider';

import useAuth from './hooks/useAuth';

function App() {
  const { getToken } = useAuth();

  // check if there is no token stored
  if (!getToken()) {
    return (
      <div className="homepage-body">
        <Router>
          <CheckoutProvider>
            <ModalProvider>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forget-password" element={<ForgetPassword />} />
              </Routes>

              <Routes>
                <Route
                  path="/product"
                  element={<Product variant="furniture" />}
                />
                <Route
                  path="/product/:productId"
                  element={<ProductDetailed />}
                />

                <Route
                  path="/ruangan"
                  element={<Product variant="room" />}
                />

                <Route path="/canvas" element={<Canvas />} />
                <Route path="/consult" element={<Consult />} />

                <Route path="/contact-us" element={<ContactUs />} />

                {/* Check if the requested url error */}
                {/* <Route path="*" element={<Error />} /> */}
              </Routes>
            </ModalProvider>
          </CheckoutProvider>
        </Router>
      </div>
    )
  } else {
    return (
      <div className="homepage-body">
        <Router>
          <CheckoutProvider>
            <ModalProvider>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>

              <Routes>
                <Route
                  path="/product"
                  element={<Product variant="furniture" />}
                />
                <Route
                  path="/product/:productId"
                  element={<ProductDetailed />}
                />

                <Route
                  path="/ruangan"
                  element={<Product variant="room" />}
                />

                {/* <Route path="/furnitur/product-page" element={<RoomPage />} /> */}
                <Route path="/canvas" element={<Canvas />} />
                <Route path="/consult" element={<Consult />} />

                {/* <Route path="/cart" element={<Cart />} /> 
                <Route path="/checkout" element={<Checkout />} /> 
                <Route path="/invoice" element={<Invoice />} />*/}

                <Route path="/contact-us" element={<ContactUs />} />
                {/* <Route path="/profile" element={<Profile />} /> */}

                {/* Check if the requested url error */}
                {/* <Route path="*" element={<Error />} /> */}
              </Routes>
            </ModalProvider>
          </CheckoutProvider>
        </Router>
        {/* {authRoute} */}
      </div>
    )
  }
}

export default App;