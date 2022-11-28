import { useNavigate } from "react-router-dom";
import heart from "../images/heart.svg";
import filledHeart from "../images/filledHeart.svg";
import { useState } from "react";

export default function Product({product, setProductDetails}) {
    const {image, name, rate, price} = product;
    const navigate = useNavigate();
    
    return (
        <div onClick={() => {setProductDetails(product); navigate("/detail");}}>
            <img src={image} alt=""/>
            <div>
                <p>{name}</p>
                <span>Avaliação: {rate}/5</span>
                <span>R${price.toFixed(2)}</span>
            </div>
        </div>
    );
}