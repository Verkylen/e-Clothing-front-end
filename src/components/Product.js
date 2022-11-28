import heart from "../images/heart.svg";

export default function Product(clothes, index) {
    return (
        <div key={index}>
            <img src={clothes} alt=""/>
            <div>
                <p>Camisa lisa preta</p>
                <span>Básico</span>
                <span>BRL212.99</span>
            </div>
            <div>
                <img src={heart} alt=""/>
            </div>
        </div>
    );
}