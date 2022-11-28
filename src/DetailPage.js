import styled from "styled-components";
import clothes1 from "./images/clothes1.jpg";
import heart from "./images/heart.svg";
import filledHeart from "./images/filledHeart.svg";
import back from "./images/back.svg";
import cart from "./images/cart.svg";
import Swal from "sweetalert2";
import minus from "./images/minus.svg";
import plus from "./images/plus.svg";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import API_BASE_URL from "./assets/constants";
import { userContext } from "./App";
import axios from "axios";

export default function DetailPage({productDetails}) {
    const navigate = useNavigate();
    const [user] = useContext(userContext);
    const {image, name, rate, price, _id} = productDetails;
    const [amount, setAmount] = useState(1);
    const [size, setSize] = useState(null);
    const [color, setColor] = useState(null);
    const value = price === null ? 0 : (Number(price) * amount).toFixed(2);

    function handleAmount(quantity) {
        if (amount + quantity > 0) {
            setAmount(amount + quantity);
        }
    }

    React.useEffect(() => {
        if(!productDetails.image)
            navigate("/")
    }, [])

    function addToCart() {
        if(!user) {
            Swal.fire({
                'title': 'Antes de ter um carrinho, crie uma conta',
                'text': 'É fácil, é gratis!',
                "icon": 'error',
                "confirmButtonText": '<i className="fa fa-thumbs-up"></i> Vamos lá!',
                "showCancelButton": true
            }).then(result => {
                if(result.isConfirmed)
                    navigate('/sign-up')
            })
        }else if (size === null) {
            Swal.fire({
                'title': 'Selecione todas as opções primeiro',
                'text': 'Falta escolher o tamanho',
                "icon": 'error',
            })
        } else if (color === null) {
            Swal.fire({
                'title': 'Selecione todas as opções primeiro',
                'text': 'Falta escolher a cor do produto',
                "icon": 'error',
            })
        } 
        else {
            const config = {headers: {"Authorization": "Bearer " + user.sessionId}};
            const body = {amount, color, size};

            axios.post(API_BASE_URL + `/products/${_id}`, body, config)
                .then(() => navigate("/"));
        }
    }

    return (
        <DetailStyles size={size} color={color}>
            <section>
                <img src={image} alt=""/>
                <div>
                    <img onClick={() => navigate("/")} src={back} alt=""/>
                </div>
            </section>
            <section>
                <h1>{name}</h1>
                <div>
                    <button onClick={() => handleAmount(-1)}><img src={minus} alt="Adicionar uma unidade"/></button>
                    <div><span>{amount}</span></div>
                    <button onClick={() => handleAmount(1)}><img src={plus} alt="Remover uma unidade"/></button>
                </div>
            </section>
            <p>Avaliação: {rate}/5</p>
            <hr/>
            <section>
                <div>
                    <span>Tamanho</span>
                    <div>
                        <div className="P" onClick={() => setSize("P")}>P</div>
                        <div className="M" onClick={() => setSize("M")}>M</div>
                        <div className="G" onClick={() => setSize("G")}>G</div>
                        <div className="XG" onClick={() => setSize("XG")}>XG</div>
                    </div>
                </div>
                <div>
                    <span>Cor</span>
                    <div>
                        <div className="cinza-claro" onClick={() => setColor("cinza claro")}></div>
                        <div className="preto" onClick={() => setColor("preto")}></div>
                        <div className="cinza-escuro" onClick={() => setColor("cinza escuro")}></div>
                    </div>
                </div>
            </section>
            <footer onClick={addToCart}>
                <img src={cart} alt="Adicionar ao carrinho"/>
                <span>Adicionar ao carrinho | R${value}</span>
            </footer>
        </DetailStyles>
    );
}

const DetailStyles = styled.main`
    margin-bottom: 84px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .preto {
        border: ${props => props.color == "preto" ? "6px solid white" : "0px"} !important;
    }
    .cinza-claro {
        border: ${props => props.color == "cinza claro" ? "6px solid white" : "0px"} !important;
    }
    .cinza-escuro {
        border: ${props => props.color == "cinza escuro" ? "6px solid white" : "0px"} !important;
    }
    .P {
        background-color: ${props => props.size == "P" ? "#222" : "white"} !important;
        color: ${props => props.size == "P" ? "white" : "#222"} !important;
    }
    .M {
        background-color: ${props => props.size == "M" ? "#222" : "white"} !important;
        color: ${props => props.size == "M" ? "white" : "#222"} !important;
    }
    .G {
        background-color: ${props => props.size == "G" ? "#222" : "white"} !important;
        color: ${props => props.size == "G" ? "white" : "#222"} !important;
    }
    .XG {
        background-color: ${props => props.size == "XG" ? "#222" : "white"} !important;
        color: ${props => props.size == "XG" ? "white" : "#222"} !important;
    }
    

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
            left: calc(12px + (100% - 327px)/2);
            width: 44px;
            height: 44px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #292526;

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
            width: 207px;
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
        width: 100%;
        margin-bottom: 16px;
        padding: 0 calc((100% - 327px)/2) 0;
        font-family: "Encode Sans", sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #878787;
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