import heart from "../images/heart.svg";

export default function Product({image, name, rate, price}, index) {

    return (
        <div key={index}>
            <img src={image} alt=""/>
            <div>
                <p>{name}</p>
                <span>Avaliação: {rate}/5</span>
                <span>BRL{price.toFixed(2)}</span>
            </div>
            <div>
                <img src={heart} alt=""/>
            </div>
        </div>
    );
}