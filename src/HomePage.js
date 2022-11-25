import logo from "./images/logo.svg"
import styled from "styled-components";
import filter from "./images/filter.svg";
import search from "./images/search.svg";
import grid from "./images/grid.svg";
import sweatshirt from "./images/sweatshirt.svg";
import shirt from "./images/shirt.svg";
import sneakers from "./images/sneakers.svg";
import clothes1 from "./images/clothes1.jpg";
import clothes2 from "./images/clothes2.jpg";
import clothes3 from "./images/clothes3.jpg";
import clothes4 from "./images/clothes4.jpg";
import clothes5 from "./images/clothes5.jpg";
import clothes6 from "./images/clothes6.jpg";
import clothes7 from "./images/clothes7.jpg";
import clothes8 from "./images/clothes8.jpg";
import Header from "./components/Header";


export default function HomePage() {
    
    const imgs = [grid, sweatshirt, sneakers, shirt]
    const values = ["Todos os itens", "Moletom", "Tênis", "Camisa"]

    return (
        <HomeStyles>
            <Header>
                <section>
                        <input placeholder="Pesquisar roupa. . . "/>
                        <img src={filter} alt="Filtro"/>
                    </section>
                    <nav>
                        {imgs.map((value, index) => <div><img src={value} alt={value}/>{values[index]}</div>)}
                    </nav>
            </Header>
            <main>
                <div>
                    <img src={clothes1} alt=""/>
                    <p>Camisa lisa preta</p>
                    <span>Básico</span>
                    <span>BRL212.99</span>
                </div>
                <div>
                    <img src={clothes2} alt=""/>
                    <p>Camisa lisa preta</p>
                    <span>Básico</span>
                    <span>BRL212.99</span>
                </div>
                <div>
                    <img src={clothes3} alt=""/>
                    <p>Camisa lisa preta</p>
                    <span>Básico</span>
                    <span>BRL212.99</span>
                </div>
                <div>
                    <img src={clothes4} alt=""/>
                    <p>Camisa lisa preta</p>
                    <span>Básico</span>
                    <span>BRL212.99</span>
                </div>
                <div>
                    <img src={clothes5} alt=""/>
                    <p>Camisa lisa preta</p>
                    <span>Básico</span>
                    <span>BRL212.99</span>
                </div>
                <div>
                    <img src={clothes6} alt=""/>
                    <p>Camisa lisa preta</p>
                    <span>Básico</span>
                    <span>BRL212.99</span>
                </div>
                <div>
                    <img src={clothes7} alt=""/>
                    <p>Camisa lisa preta</p>
                    <span>Básico</span>
                    <span>BRL212.99</span>
                </div>
                <div>
                    <img src={clothes8} alt=""/>
                    <p>Camisa lisa preta</p>
                    <span>Básico</span>
                    <span>BRL212.99</span>
                </div>
            </main>
        </HomeStyles>
    );
}

const HomeStyles = styled.div`
    display: flex;
    justify-content: center;
        nav {
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
        width: 100%;
        height: 1600px;
        padding: 230px calc((100% - 327px)/2) 0;
        background-color: black;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        row-gap: 23px;
        column-gap: 20px;

        div {
            width: 153px;
            display: flex;
            flex-direction: column;

            img {
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

            &>span:nth-of-type(1) {
                font-family: "Encode Sans", sans-serif;
                font-weight: 400;
                font-size: 10px;
                line-height: 150%;
                /* color: #5B5552; */
                color: gray;
            }

            &>span:nth-of-type(2) {
                font-family: "Encode Sans", sans-serif;
                font-weight: 600;
                font-size: 14px;
                line-height: 150%;
                color: #E4DFD7;
            }
        }
    }
`