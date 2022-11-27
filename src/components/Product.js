import heart from "../images/heart.svg";

export default function Product({data}) {
    const isFavorite = heart;
    return (
        <div>
            <img src={data.image} alt="product picture"/>
            <p>{data.name}</p>
            <span>Básico</span>
            <span>BRL{data.price}</span>
            <div>
                <img src={isFavorite} alt="Favorito"/>
            </div>
        </div>
    );
}