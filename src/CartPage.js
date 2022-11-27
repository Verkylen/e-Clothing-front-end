import styled from "styled-components";
import back from "./images/back.svg";
import boldMinus from "./images/boldMinus.svg";
import boldPlus from "./images/boldPlus.svg";
import clothes1 from "./images/clothes1.jpg";
import remove from "./images/remove.svg";

export default function CartPage() {
    return (
        <CartStyles>
            <header>
                <div>
                    <img src={back} alt=""/>
                </div>
                <h1>Carrinho</h1>
            </header>
            <main>
                <div>
                    <div></div>
                    <section>
                        <img src={clothes1} alt=""/>
                        <div>
                            <p>Camisa lisa preta</p>
                            <span>Básica</span>
                            <span>BRL212.99</span>
                        </div>
                        <div>
                            <img src={remove} alt=""/>
                            <div>
                                <img src={boldMinus} alt=""/>
                                <span>1</span>
                                <img src={boldPlus} alt=""/>
                            </div>
                        </div>
                    </section>
                    <div></div>
                    <section>
                        <img src={clothes1} alt=""/>
                        <div>
                            <p>Modern light clothes</p>
                            <span>Dress modern</span>
                            <span>BRL212.99</span>
                        </div>
                        <div>
                            <img src={remove} alt=""/>
                            <div>
                                <img src={boldMinus} alt=""/>
                                <span>1</span>
                                <img src={boldPlus} alt=""/>
                            </div>
                        </div>
                    </section>
                    <div></div>
                    <section>
                        <img src={clothes1} alt=""/>
                        <div>
                            <p>Modern light clothes</p>
                            <span>Dress modern</span>
                            <span>BRL212.99</span>
                        </div>
                        <div>
                            <img src={remove} alt=""/>
                            <div>
                                <img src={boldMinus} alt=""/>
                                <span>1</span>
                                <img src={boldPlus} alt=""/>
                            </div>
                        </div>
                    </section>
                    <div></div>
                    <section>
                        <img src={clothes1} alt=""/>
                        <div>
                            <p>Modern light clothes</p>
                            <span>Dress modern</span>
                            <span>BRL212.99</span>
                        </div>
                        <div>
                            <img src={remove} alt=""/>
                            <div>
                                <img src={boldMinus} alt=""/>
                                <span>1</span>
                                <img src={boldPlus} alt=""/>
                            </div>
                        </div>
                    </section>
                    <div></div>
                    <section>
                        <img src={clothes1} alt=""/>
                        <div>
                            <p>Modern light clothes</p>
                            <span>Dress modern</span>
                            <span>BRL212.99</span>
                        </div>
                        <div>
                            <img src={remove} alt=""/>
                            <div>
                                <img src={boldMinus} alt=""/>
                                <span>1</span>
                                <img src={boldPlus} alt=""/>
                            </div>
                        </div>
                    </section>
                    <div></div>
                    <section>
                        <img src={clothes1} alt=""/>
                        <div>
                            <p>Modern light clothes</p>
                            <span>Dress modern</span>
                            <span>BRL212.99</span>
                        </div>
                        <div>
                            <img src={remove} alt=""/>
                            <div>
                                <img src={boldMinus} alt=""/>
                                <span>1</span>
                                <img src={boldPlus} alt=""/>
                            </div>
                        </div>
                    </section>
                    <div></div>
                    <section>
                        <img src={clothes1} alt=""/>
                        <div>
                            <p>Modern light clothes</p>
                            <span>Dress modern</span>
                            <span>BRL212.99</span>
                        </div>
                        <div>
                            <img src={remove} alt=""/>
                            <div>
                                <img src={boldMinus} alt=""/>
                                <span>1</span>
                                <img src={boldPlus} alt=""/>
                            </div>
                        </div>
                    </section>
                    <div></div>
                    <section>
                        <img src={clothes1} alt=""/>
                        <div>
                            <p>Modern light clothes</p>
                            <span>Dress modern</span>
                            <span>BRL212.99</span>
                        </div>
                        <div>
                            <img src={remove} alt=""/>
                            <div>
                                <img src={boldMinus} alt=""/>
                                <span>1</span>
                                <img src={boldPlus} alt=""/>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <footer>
                Pagar | (1 item) BRL212.99
            </footer>
        </CartStyles>
    );
}

const CartStyles = styled.div`
    display: flex;
    justify-content: center;

    header {
        position: fixed;
        top: 0;
        z-index: 1;
        width: 327px;
        height: 64px;
        border-bottom: 1px solid #EDEDED;
        display: flex;
        align-items: center;
        column-gap: 88.5px;
        background-color: #FFFFFF;

        div {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #292526;
        }

        h1 {
            font-family: "Encode Sans", sans-serif;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            color: #1B2028;
        }
    }

    main {
        margin-top: 64px;
        height: calc(100vh - 64px);
        overflow: hidden;
        overflow-y: scroll;

        &>div {
            padding-bottom: 84px;
            display: flex;
            flex-direction: column;
            align-items: center;

            &>div {
                width: 327px;
                height: 1.5px;
                background-color: #EDEDED;
            }

            &>section {
                width: 100%;
                height: 118px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                &>img {
                    width: 70px;
                    height: 70px;
                    border-radius: 14px;
                    object-fit: cover;
                }

                &>div:nth-of-type(1) {
                    margin-left: 15px;
                    margin-right: auto;
                    width: 135px;
                    height: 66px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    p {
                        font-family: "Encode Sans", sans-serif;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 18px;
                        color: #1B2028;
                    }

                    span:nth-of-type(1) {
                        margin-top: 4px;
                        margin-bottom: auto;
                        font-family: "Encode Sans", sans-serif;
                        font-weight: 400;
                        font-size: 10px;
                        line-height: 12px;
                        color: #A4AAAD;
                    }

                    span:nth-of-type(2) {
                        font-family: "Encode Sans", sans-serif;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 18px;
                        color: #1B2028;
                    }
                }

                &>div:nth-of-type(2) {
                    height: 70px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: flex-end;

                    &>img {
                        width: 20px;
                        height: 20px;
                    }

                    &>div {
                        width: 85px;
                        padding: 4px 6px;
                        display: flex;
                        justify-content: space-between;
                        border-radius: 8px;
                        background-color: #1B2028;

                        span {
                            font-family: "Encode Sans", sans-serif;
                            font-weight: 600;
                            font-size: 14px;
                            line-height: 20px;
                            color: #FFFFFF;
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