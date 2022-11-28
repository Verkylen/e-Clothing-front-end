import styled from "styled-components";
import logo from "./images/logo.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userContext } from "./App";
import { useContext } from "react";
import API_BASE_URL from "./assets/constants";

export default function CheckoutPage({selectedProducts, totalPrice}) {
    const navigate = useNavigate();
    const [user] = useContext(userContext);

    function BoughtProduct({image, name, amount, price}, index) {
        const value = (Number(amount) * Number(price)).toFixed(2);

        return (
            <section key={index}>
                <img src={image} alt=""/>
                <div>
                    <p>{name}</p>
                    <div>
                        <p>Quantidade: <strong>{amount}</strong></p>
                        <p>Valor: <strong>{amount} × R${Number(price).toFixed(2)} = R${value}</strong></p>
                    </div>
                </div>
            </section>
        );
    }

    function navigateToHome() {
        const config = {headers: {"Authorization": "Bearer " + user.sessionId}};
        
        axios.post(API_BASE_URL + "/finish-buy", {}, config)
            .then(() => navigate("/"));
    }

    return (
        <CheckoutStyles>
            <header>
                <h1>e-Clothing</h1>
            </header>
            <h2>Detalhes da compra</h2>
            <section>
                <span>Total</span>
                <span>R${totalPrice}</span>
            </section>
            <main>
                <div>
                    {selectedProducts.map(BoughtProduct)}
                </div>
            </main>
            <footer onClick={navigateToHome}>Página inicial</footer>
        </CheckoutStyles>
    );
}

const CheckoutStyles = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    header {
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url(${logo});
        background-repeat: no-repeat;
        background-position: center;

        h1 {
            font-family: "Encode sans", sans-serif;
            font-weight: 700;
            font-size: 50px;
            color: #1B2028;
            opacity: 0.9;
            filter: drop-shadow(0 0 10px pink);
        }
    }

    h2 {
        width: 327px;
        border-bottom: 1px solid #EDEDED;
        padding-bottom: 10px;
        text-align: center;
        font-family: "Encode Sans", sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: #1B2028;
    }

    &>section {
        width: 327px;
        display: flex;
        padding: 10px 0;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #EDEDED;

        span:nth-of-type(1) {
            font-family: "Encode sans", sans-serif;
            font-weight: 600;
            font-size: 14px;
            line-height: 18px;
            color: #1B2028;
        }

        span:nth-of-type(2) {
            font-family: "Encode sans", sans-serif;
            font-weight: 600;
            font-size: 14px;
            line-height: 18px;
            color: #1B2028;
        }
    }

    main {
        width: 100%;
        height: calc(100vh - 231px);
        padding-top: 24px;
        padding-bottom: 84px;
        overflow-y: auto;

        &>div {
            display: flex;
            flex-direction: column;
            row-gap: 24px;

            section {
                padding: 0 calc((100% - 327px)/2) 0;
                display: flex;
                column-gap: 15px;

                img {
                    width: 70px;
                    height: 70px;
                    border-radius: 14px;
                    object-fit: cover;
                }

                &>div {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    flex-shrink: 0;

                    &>p {
                        font-family: "Encode sans", sans-serif;
                        font-weight: 560;
                        font-size: 14px;
                    }

                    div {
                        display: flex;
                        flex-direction: column;
                        row-gap: 4px;

                        p {
                            font-family: "Encode Sans", sans-serif;
                            font-weight: 500;
                            font-size: 12px;
                            color: #1B2028;

                            strong {
                                font-weight: 600;
                            }
                        }
                    }
                }
            }
        }
    }

    footer {
        position: fixed;
        bottom: 10px;
        z-index: 1;
        width: 327px;
        height: 64px;
        border-radius: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #292526;
        font-family: "Encode Sans", sans-serif;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
    }
`