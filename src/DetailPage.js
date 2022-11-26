import styled from "styled-components";
import clothes1 from "./images/clothes1.jpg";
import heart from "./images/heart.svg";
import filledHeart from "./images/filledHeart.svg";
import back from "./images/back.svg";
import cart from "./images/cart.svg";

export default function DetailPage() {
    return (
        <DetailStyles>
            <section>
                <img src={clothes1} alt=""/>
                <div>
                    <img src={back} alt=""/>
                </div>
                <div>
                    <img src={filledHeart} alt=""/>
                </div>
            </section>
            <section>
                <h1>Modern light clothes</h1>
                <button><ion-icon name="remove-outline"/></button>
                <span>1</span>
                <button><ion-icon name="add-outline"/></button>
            </section>
            <p>
                Its simple and elegant shape makes it perfect for those of you who like you who want minimalist clothes
            </p>
            <span>Leia mais. . .</span>
            <hr/>
            <section>
                <div>
                    <span>Tamanho</span>
                    <div>P</div>
                    <div>M</div>
                    <div>G</div>
                    <div>XG</div>
                </div>
                <div>
                    <span>Cor</span>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </section>
            <footer>
                <img src="" alt=""/>
                <span>Adicionar ao carrinho | BRL212.99</span>
            </footer>
        </DetailStyles>
    );
}

const DetailStyles = styled.main`
    display: flex;
    justify-content: center;

    section {
        padding: 0 calc((100% - 327px)/2) 0;

        img {
            width: 100%;
            border-radius: 24px;
        }


    }
`