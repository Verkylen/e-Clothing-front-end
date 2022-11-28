import styled from "styled-components";
import clothes1 from "./images/clothes1.jpg";
import heart from "./images/heart.svg";
import filledHeart from "./images/filledHeart.svg";
import back from "./images/back.svg";
import cart from "./images/cart.svg";
import minus from "./images/minus.svg";
import plus from "./images/plus.svg";
import { useNavigate } from "react-router-dom";

export default function DetailPage() {
    const navigate = useNavigate();

    return (
        <DetailStyles>
            <section>
                <img src={clothes1} alt=""/>
                <div>
                    <img onClick={() => navigate("/")} src={back} alt=""/>
                </div>
                <div>
                    <img src={heart} alt=""/>
                </div>
            </section>
            <section>
                <h1>Modern light clothes</h1>
                <div>
                    <button><img src={minus} alt=""/></button>
                    <div><span>1</span></div>
                    <button><img src={plus} alt=""/></button>
                </div>
            </section>
            <p>
                Its simple and elegant shape makes it perfect for those of you who like you who want minimalist clothes
                <span>leia mais. . .</span>
            </p>
            <hr/>
            <section>
                <div>
                    <span>Tamanho</span>
                    <div>
                        <div>P</div>
                        <div>M</div>
                        <div>G</div>
                        <div>XG</div>
                    </div>
                </div>
                <div>
                    <span>Cor</span>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </section>
            <footer>
                <img src={cart} alt=""/>
                <span>Adicionar ao carrinho | BRL212.99</span>
            </footer>
        </DetailStyles>
    );
}

const DetailStyles = styled.main`
    margin-bottom: 84px;
    display: flex;
    flex-direction: column;
    align-items: center;

    section:nth-of-type(1) {
        position: relative;
        margin-bottom: 24px;
        padding: 10px calc((100% - 327px)/2) 0;

        img {
            width: 327px;
            height: 392px;
            border-radius: 24px;
            object-fit: cover;
        }

        div {
            position: absolute;
            top: 22px;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #292526;

            &:nth-of-type(1) {
                left: calc(12px + (100% - 327px)/2);
            }

            &:nth-of-type(2) {
                right: calc(12px + (100% - 327px)/2);
            }

            img {
                width: 24px;
                height: 24px;
            }
        }
    }

    section:nth-of-type(2) {
        margin-bottom: 8px;
        padding: 0 calc((100% - 327px)/2) 0;
        display: flex;
        justify-content: space-between;

        h1 {
            font-family: "Encode Sans", sans-serif;
            font-weight: 600;
            font-size: 24px;
            line-height: 31px;
            color: #1B2028;
        }

        &>div {
            display: flex;

            button {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 1px solid #EAEAEA;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #292526;
            }

            div {
                width: 40px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;

                span {
                    font-family: "Encode Sans", sans-serif;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 19px;
                    color: #1B2028;
                }
            }
        }
    }

    p {
        margin-bottom: 16px;
        padding: 0 calc((100% - 327px)/2) 0;
        font-family: "Encode Sans", sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #878787;

        span {
            margin-left: 5px;
            font-family: "Encode Sans", sans-serif;
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            color: #1B2028;
        }
    }

    hr {
        margin: 0 0 16px 0;
        width: 327px;
        height: 0px;
        border: 1px solid #EDEDED;
    }

    section:nth-of-type(3) {
        width: 100%;
        padding: 0 calc((100% - 327px)/2) 0;
        display: flex;
        justify-content: space-between;

        &>div {
            display: flex;
            flex-direction: column;
            row-gap: 8px;

            span {
                font-family: "Encode Sans", sans-serif;
                font-weight: 700;
                font-size: 12px;
                line-height: 18px;
                color: #1B2028;
            }

            &>div {
                display: flex;
                column-gap: 8px;

                &>div {
                    width: 26px;
                    height: 26px;
                    border: 1px solid #EDEDED;
                    border-radius: 100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: "Encode Sans", sans-serif;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 18px;
                    color: #1B2028;
                }
            }
        }

        &>div:nth-of-type(2) div div:nth-of-type(1) {
            background-color: #BBBCBF;
        }

        &>div:nth-of-type(2) div div:nth-of-type(2) {
            background-color: #1B2028;
        }

        &>div:nth-of-type(2) div div:nth-of-type(3) {
            background-color: #292526;
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
        column-gap: 8px;
        background-color: #292526;
        
        span {
            font-family: "Encode Sans", sans-serif;
            font-weight: 700;
            font-size: 14px;
            line-height: 20px;
            color: #FFFFFF;
        }
    }
`;