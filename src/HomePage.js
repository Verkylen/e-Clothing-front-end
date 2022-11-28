import styled from "styled-components";
import search from "./images/search.svg";
import filter from "./images/filter.svg";
import blackGrid from "./images/blackGrid.svg";
import whiteGrid from "./images/whiteGrid.svg";
import blackSweatshirt from "./images/blackSweatshirt.svg";
import whiteSweatshirt from "./images/whiteSweatshirt.svg";
import blackShirt from "./images/blackShirt.svg";
import whiteShirt from "./images/whiteShirt.svg";
import blackSneakers from "./images/blackSneakers.svg";
import whiteSneakers from "./images/whiteSneakers.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useState } from "react";
import axios from "axios";
import API_BASE_URL from "./assets/constants";
import Product from "./components/Product";

const categorys = ["Todos os itens", "Moletom", "Tênis", "Camisa"];
const whiteOptions = [whiteGrid, whiteSweatshirt, whiteSneakers, whiteShirt];
const blackOptions = [blackGrid, blackSweatshirt, blackSneakers, blackShirt];

export default function HomePage() {
    const [products, setProducts] = useState([]);
    const [hidden, setHidden] = useState(true);
    const [selected, setSelected] = useState(0);
    const [disabled, setDisabled] = useState(false);
    console.log(products);

    React.useEffect(() => {
        axios.get(API_BASE_URL + "/products")
        .then(({data}) => setProducts(data))
        .catch(e => console.log(e))
    }, []);

    function filterByInputText(e) {
        if (e.key === "Enter" && e.target.value !== "") {
            setDisabled(true);

            const config = {params: {search: e.target.value.trim()}};

            let category = "";

            if (selected !== 0 && selected !== null) {
                category = selected === 3 ? "camisas" : categorys[selected].toLocaleLowerCase();
            }

            axios.get(API_BASE_URL + `/products/${category}`, config)
                .then(({data}) => {
                    setProducts(data);
                    setDisabled(false);
                });
        }
    }

    function FilterOption(category, index) {
        const isSelected = index === selected;

        const image = isSelected ? whiteOptions[index] : blackOptions[index];

        return (
            <FilterOptionStyles
                onClick={() => filterByCategory(index)}
                isSelected={isSelected}
                key={index}
            >
                <img src={image} alt={category}/>
                {category}
            </FilterOptionStyles>
        );
    }

    function filterByCategory(index) {
        let path = index === 3 ? "camisas" : categorys[index].toLocaleLowerCase();

        if (index === 0) {
            path = "";
        }

        axios.get(API_BASE_URL + `/products/${path}`)
            .then(({data}) => {setProducts(data); setSelected(index);});
    }

    return (
        <HomeStyles hidden={hidden}>
            <section>
                <Header/>
                <section>
                    <input
                        onKeyDown={filterByInputText}
                        placeholder="Pesquisar roupa. . . "
                        disabled={disabled}
                    />
                    <img onClick={() => setHidden(!hidden)} src={filter} alt="Filtro"/>
                </section>
                <nav>
                    {categorys.map(FilterOption)}
                </nav>
            </section>
            <main>
                <div>
                    {products.map((product, index) => <Product product={product} key={index}/>)}
                </div>
            </main>
            <Footer/>
        </HomeStyles>
    );
}

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
            overflow-x: auto;
        }
    }

    main {
        width: 100%;
        height: calc(100vh - ${({hidden}) => hidden ? "146px" : "206px"});
        overflow: hidden;
        overflow-y: auto;
        background-color: #292526;

        &>div {
            width: 100%;
            padding: 24px calc((100% - 327px)/2) 84px;
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
                        width: 153px;
                        font-family: "Encode Sans", sans-serif;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 150%;
                        color: #E4DFD7;
                        overflow: hidden;
                        white-space: nowrap;
                        overflow-wrap: break-word;
                        text-overflow: ellipsis;
                    }

                    span:nth-of-type(1) {
                        margin-bottom: 8px;
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

const FilterOptionStyles = styled.div`
    height: 36px;
    padding: 8px 12px;
    border: 1px solid #EDEDED;
    border-radius: 8px;
    display: flex;
    align-items: center;
    column-gap: 4px;
    flex-shrink: 0;
    background-color: ${({isSelected}) => isSelected ? "#292526" : ""};
    font-family: "Encode Sans", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 21px;
    color: ${({isSelected}) => isSelected ? "#FFFFFF" : "#1B2028"};

    img {
        width: 20px;
        height: 20px;
    }
`;