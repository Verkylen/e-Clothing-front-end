import styled from "styled-components";
import filter from "./images/filter.svg";
import grid from "./images/grid.svg";
import sweatshirt from "./images/sweatshirt.svg";
import shirt from "./images/shirt.svg";
import sneakers from "./images/sneakers.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import axios from "axios";
import API_BASE_URL from "./assets/constants";
import Product from "./components/Product";

const options = ["Todos os itens", "Moletom", "Tênis", "Camisa"];
const optionsImgs = [grid, sweatshirt, sneakers, shirt];

export default function HomePage() {

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        axios.get(API_BASE_URL + "/products")
        .then(response => {
            setProducts(response.data)
        })
        .catch(e => console.log(e))
    }, [])

    return (
        <HomeStyles>
            <Header>
                <section>
                        <input placeholder="Pesquisar roupa. . . "/>
                        <img src={filter} alt="Filtro"/>
                    </section>
                    <nav>
                        {optionsImgs.map((value, index) => <div key={index}><img src={value} alt={value}/>{options[index]}</div>)}
                    </nav>
            </Header>
            <main>
                <div>
                    {products.map((value, index) =><Product key={index} data={value}/>)}
                </div>
            </main>
            <Footer/>
        </HomeStyles>
    );
}

const HomeStyles = styled.div`
    display: flex;
    justify-content: center;

        nav:nth-of-type(1) {
            width: 327px;
            display: flex;
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
                font-family: 'Encode Sans', sans-serif;
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
    

    main {
        margin-top: 206px;
        width: 100%;
        height: calc(100vh - 206px);
        overflow: hidden;
        overflow-y: auto;

        &>div {
            width: 100%;
            padding: 24px calc((100% - 327px)/2) 74px;
            background-color: #292526;
            column-gap: 20px;
            column-count: 2;

            &>div {
                position: relative;
                margin-bottom: 23px;
                width: 153px;
                display: flex;
                flex-direction: column;

                &>img:nth-of-type(1) {
                    margin-bottom: 8px;
                    width: 100%;
                    border-radius: 14px;
                }

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

                div {
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
`