import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./DetailPage";
import GlobalStyle from "./GlobalStyle";
import HomePage from "./HomePage";
import SignUpPage from "./SignUpPage";
import CartPage from "./CartPage";

export default function App() {
    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/sign-up" element={<SignUpPage/>}/>
                    <Route path="/detail" element={<DetailPage/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}