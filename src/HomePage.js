import styled from "styled-components";
import search from "./images/search.svg";
import filter from "./images/filter.svg";
import grid from "./images/grid.svg";
import sweatshirt from "./images/sweatshirt.svg";
import shirt from "./images/shirt.svg";
import sneakers from "./images/sneakers.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useState } from "react";
import axios from "axios";
import clothes1 from "./images/clothes1.jpg";
import clothes2 from "./images/clothes2.jpg";
import clothes3 from "./images/clothes3.jpg";
import clothes4 from "./images/clothes4.jpg";
import clothes5 from "./images/clothes5.jpg";
import clothes6 from "./images/clothes6.jpg";
import clothes7 from "./images/clothes7.jpg";
import clothes8 from "./images/clothes8.jpg";
import filledHeart from "./images/filledHeart.svg";
import heart from "./images/heart.svg";
import API_BASE_URL from "./assets/constants";
import Product from "./components/Product";

const options = ["Todos os itens", "Moletom", "Tênis", "Camisa"];
const optionsImgs = [grid, sweatshirt, sneakers, shirt];
const clothes = [clothes1, clothes2, clothes3, clothes4, clothes5, clothes6, clothes7, clothes8];

export default function HomePage() {
    const [products, setProducts] = useState([]);
    const [hidden, setHidden] = useState(true);
    const [selected, setSelected] = useState("Todos os itens")

    React.useEffect(() => {
        axios.get(API_BASE_URL + "/products")
        .then(response => console.log(response))
        .catch(e => console.log(e))
    }, []);

    return (
        <HomeStyles hidden={hidden}>
            <section>
                <Header/>
                <section>
                    <input placeholder="Pesquisar roupa. . . "/>
                    <img onClick={() => setHidden(!hidden)} src={filter} alt="Filtro"/>
                </section>
                <nav>
                    {optionsImgs.map((value, index) => <div key={index}><img src={value} alt={value}/>{options[index]}</div>)}
                </nav>
            </section>
            <main>
                <div>
                    <div>
                        <img src={clothes1} alt=""/>
                        <div>
                            <p>Camisa lisa preta</p>
                            <span>Básico</span>
                            <span>BRL212.99</span>
                        </div>
                        <div>
                            <img src={heart} alt="Favorito"/>
                        </div>
                    </div>
                    {clothes.map(Product)}
                </div>
            </main>
            <Footer/>
        </HomeStyles>
    );
}

const FilterButton = styled.div`
    background-color: ${props => props.selected ? "#292526" : "white"};
    color: ${props => props.selected ? "white" :"black"} !important;
`

const HomeStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    &>section {
        top: 0;
        z-index: 1;
        width: 100%;
        padding-bottom: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #FFFFFF;
        row-gap: 24px;

        &>section {
            width: 100%;
            padding: 0 calc((100% - 327px)/2);
            display: flex;
            justify-content: center;
            align-items: center;
            column-gap: 16px;

            input {
                width: 100%;
                height: 49px;
                border: 1px solid #EDEDED;
                border-radius: 12px;
                background-image: url(${search});
                background-position: 16px 50%;
                background-repeat: no-repeat;
                outline: none;
                padding-left: 44px;
                font-family: "Encode Sans", sans-serif;
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;

                ::placeholder {
                    color: #878787;
                }
            }
        }

        nav:nth-of-type(1) {
            width: 327px;
            display: ${({hidden}) => hidden ? "none" : "flex"};
            margin: 0 24px;
            column-gap: 15px;
            overflow: hidden;
            overflow-x: scroll;

            div {
                height: 36px;
                padding: 8px 12px;
                border: 1px solid #EDEDED;
                border-radius: 8px;
                display: flex;
                align-items: center;
                column-gap: 4px;
                flex-shrink: 0;
                font-family: "Encode Sans", sans-serif;
                font-weight: 500;
                font-size: 12px;
                line-height: 21px;
                color: #1B2028;

                img {
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }

    main {
        width: 100%;
        height: calc(100vh - ${({hidden}) => hidden ? "146px" : "206px"});
        overflow: hidden;
        overflow-y: scroll;

        &>div {
            width: 100%;
            padding: 24px calc((100% - 327px)/2) 84px;
            background-color: #292526;
            column-gap: 20px;
            column-count: 2;

            &>div {
                position: relative;
                margin-bottom: 23px;
                padding-bottom: 69px;
                width: 153px;
                display: flex;
                flex-direction: column;

                &>img {
                    width: 100%;
                    border-radius: 14px;
                }

                &>div:nth-of-type(1) {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    display: flex;
                    flex-direction: column;

                    p {
                        margin-bottom: 4px;
                        font-family: "Encode Sans", sans-serif;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 150%;
                        color: #E4DFD7;
                    }

                    span:nth-of-type(1) {
                        font-family: "Encode Sans", sans-serif;
                        font-weight: 400;
                        font-size: 10px;
                        line-height: 150%;
                        color: gray;
                    }

                    span:nth-of-type(2) {
                        font-family: "Encode Sans", sans-serif;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 150%;
                        color: #E4DFD7;
                    }
                }

                div:nth-of-type(2) {
                    position: absolute;
                    top: 12px;
                    right: 12px;
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #292526;

                    img {
                        width: 16px;
                        height: 16px;
                    }
                }
            }
        }
    }
`;