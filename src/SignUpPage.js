import styled from "styled-components"
import React, { useRef } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import API_BASE_URL from "./assets/constants"

export default function SignUpPage() {

    const [inputOpacity, setInputOpacity] = React.useState(1);

    const [formValue, setFormValue] = React.useState({
        "username": "",
        "email": "",
        "password": "",
        "repeatPassword": "",
        "profilePicture": ""
    })

    const navigate = useNavigate();

    function handleChange(element) {
        setFormValue({
            ...formValue,
            [element.target.name]: element.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post(API_BASE_URL + "/sign-up", formValue)
        .then(() => {
            Swal.fire(
                'Cadastro realizado com sucesso',
                'Parabéns! O seu cadastro foi realizado, faça login!',
                'success'
            )
            navigate("/login")
        })
        .catch(e => {
            Swal.fire(
                'Eita! Algo de errado aconteceu',
                e.response.data,
                'error'
            )
        })
    }

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
    }

    const handleUpload = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const file = event.target.files[0];
        if(file.type != "image/png" && file.type !="image/jpeg" && file.type != "image/jpg")
            return;

        setFormValue({
            ...formValue,
            "profilePicture": event.target.files[0]
        });
        
	};

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setInputOpacity(1)

        const file = event.dataTransfer.files[0];
        if(!file)
            return;
        
        if(file.type != "image/png" && file.type !="image/jpeg" && file.type != "image/jpg")
            return;

        setFormValue({
            ...formValue,
            "profilePicture": event.target.files[0]
        });
        
    }

    const handleDrag = (event, amount) => {
        event.preventDefault();
        event.stopPropagation();
        setInputOpacity(amount)
    }

    return (
        <StyledSignUpPage>
            <div>
                <h1>Olá, seja bem-vindo!</h1>
                <h2>Vamos fazer o seu registro!</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Digite seu nome" name="username" value={formValue.username} onChange={handleChange} required/>
                <input placeholder="Digite seu email" type="email" name="email" value={formValue.email} onChange={handleChange} required/>
                <input placeholder="Escolha uma senha" type="password" name="password" value={formValue.password} onChange={handleChange} required/>
                <input placeholder="Repita a senha escolhida" type="password" name="repeatPassword" value={formValue.repeatPassword} onChange={handleChange} required/>
                <input type="file" id="file" accept="image/*" name="profilePicture" onChange={handleUpload} required/>
                <label htmlFor="file">
                    <StyledFileInput 
                        inputOpacity={inputOpacity} 
                        onDragOver={handleDragOver} 
                        onDragLeave={(e) => handleDrag(e, 1)}
                        onDragEnter={(e) => handleDrag(e, 0.6)}
                        onDrop={handleDrop}
                    >
                        <ion-icon name="cloud-upload-outline"></ion-icon>
                        <h3>{formValue.profilePicture === "" ? "Insira uma foto de perfil!" : formValue.profilePicture.name}</h3>
                    </StyledFileInput>
                </label>
                <button className="button-31" type="submit">Confirmar</button>
            </form>
        </StyledSignUpPage>
    )
}

const StyledFileInput = styled.div`

    height: 100px;
    width: 366px;
    margin-top: 20px; 
    border: dashed 3px black;
    text-align: center;
    padding: 8px;
    
    opacity: ${props => props.inputOpacity};
    
    :hover {
        opacity: 0.6;
    }

    ion-icon {
        font-size: 40px;
    }

`

const StyledSignUpPage = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    font-family: "Encode Sans";
    h1 {
        font-size: 36px;
        font-weight: bold;
    }
    h2 {
        margin-top: 8px;
        margin-bottom: 40px;
        font-size: 24px;
    }

    .button-31 {
        background-color: #222;
        border-radius: 4px;
        border-style: none;
        color: #fff;
        cursor: pointer;
        font-family: "Farfetch Basis","Helvetica Neue",Arial,sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 1.5;
        margin-top: 20px;
        outline: none;
        padding: 9px 20px 8px;
        width: 360px;
    }

    input[type=file] {
        display: none;
    }

    .button-31:hover,
    .button-31:focus {
    opacity: .75;
    }

    label {
        display: block;
    }

    input {
        width: 360px;
        height: 49px;
        border: 1px solid;
        border-radius: 12px;
        outline: none;
        padding-left: 20px;
        display: block;
        font-family: "Encode Sans", sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        margin-bottom: 10px;
        ::placeholder {
            color: #878787;
        }
    }

`