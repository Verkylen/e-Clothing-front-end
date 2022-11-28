import styled from "styled-components";
import logo from "./images/logo.svg";
import clothes1 from "./images/clothes1.jpg";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
    const navigate = useNavigate();

    return (
        <CheckoutStyles>
            <header>
                <h1>e-Clothing</h1>
            </header>
            <h2>Detalhes da compra</h2>
            <section>
                <span>Total</span>
                <span>BRL212.99</span>
            </section>
            <main>
                <div>
                    <section>
                        <img src={clothes1} alt=""/>
                        <div>
                            <p>Modern light clothes</p>
                            <div>
                                <p>Quantidade: <strong>1</strong></p>
                                <p>Valor: <strong>1 × BRL212.99 = BRL212.99</strong></p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <img src={clothes1} alt=""/>
                        <div>
                            <p>Modern light clothes</p>
                            <div>
                                <p>Quantidade: 1</p>
                                <p>Valor: 1 × BRL212.99 = BRL212.99</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <img src={clothes1} alt=""/>
                        <div>
                            <p>Modern light clothes</p>
                            <div>
                                <p>Quantidade: 1</p>
                                <p>Valor: 1 × BRL212.99 = BRL212.99</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <img src={clothes1} alt=""/>
                        <div>
                            <p>Modern light clothes</p>
                            <div>
                                <p>Quantidade: 1</p>
                                <p>Valor: 1 × BRL212.99 = BRL212.99</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <img src={clothes1} alt=""/>
                        <div>
                            <p>Modern light clothes</p>
                            <div>
                                <p>Quantidade: 1</p>
                                <p>Valor: 1 × BRL212.99 = BRL212.99</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <img src={clothes1} alt=""/>
                        <div>
                            <p>Modern light clothes</p>
                            <div>
                                <p>Quantidade: 1</p>
                                <p>Valor: 1 × BRL212.99 = BRL212.99</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <img src={clothes1} alt=""/>
                        <div>
                            <p>Modern light clothes</p>
                            <div>
                                <p>Quantidade: 1</p>
                                <p>Valor: 1 × BRL212.99 = BRL212.99</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <footer onClick={() => navigate('/')}>Página inicial</footer>
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