import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import DetailPage from "./DetailPage";
import GlobalStyle from "./GlobalStyle";
import HomePage from "./HomePage";
import SignUpPage from "./SignUpPage";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import LoginPage from "./LoginPage";
import { createContext, useState } from "react";
import SupportPage from "./SupportPage";

export const userContext = createContext(null);

export default function App() {

    const userState = React.useState(JSON.parse(localStorage.getItem("userData")))
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [productDetails, setProductDetails] = useState({});

    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <userContext.Provider value={userState}>
                    <Routes>
                        <Route path="/" element={<HomePage setProductDetails={setProductDetails}/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/sign-up" element={<SignUpPage/>}/>
                        <Route path="/detail" element={<DetailPage/>}/>
                        <Route path="/cart" element={<CartPage
                                                        selectedProducts={selectedProducts}
                                                        setSelectedProducts={setSelectedProducts}
                                                        totalPrice={totalPrice}
                                                        setTotalPrice={setTotalPrice}
                                                    />}/>
                        <Route path="/checkout" element={<CheckoutPage selectedProducts={selectedProducts} totalPrice={totalPrice}/>}/>
                        <Route path="/support" element={<SupportPage/>}/>
                    </Routes>
                </userContext.Provider>
            </BrowserRouter>
        </>
    );
}
