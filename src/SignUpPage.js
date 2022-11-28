import React, { useRef } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import API_BASE_URL from "./assets/constants"
import { ThreeDots } from "react-loader-spinner"
import styled from "styled-components"
import { Link } from "react-router-dom"
import back from "./images/back.svg";
import UsualFormPage from "./assets/styles/UsualFormPage"

export default function SignUpPage() {

    const [inputOpacity, setInputOpacity] = React.useState(1);
    const [loading, setLoading] = React.useState(false);

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
        
        const formData = new FormData();
        for(const key in formValue) {
            formData.append(key, formValue[key]);
        }
        axios.post(API_BASE_URL + "/sign-up", formData)
        .then(() => {
            setLoading(false);
            Swal.fire(
                'Cadastro realizado com sucesso',
                'Parabéns! O seu cadastro foi realizado, faça login!',
                'success'
            )
            navigate("/login")
        })
        .catch(e => {
            setLoading(false);
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
        if(file.type !== "image/png" && file.type !== "image/jpeg" && file.type !== "image/jpg")
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
        
        if(file.type !== "image/png" && file.type !== "image/jpeg" && file.type !== "image/jpg")
            return;

        setFormValue({
            ...formValue,
            "profilePicture": file
        });
        
    }

    const handleDrag = (event, amount) => {
        event.preventDefault();
        event.stopPropagation();
        setInputOpacity(amount)
    }

    return (
        <UsualFormPage>
            <header>
                <div onClick={() => navigate("/")}>
                    <img src={back} alt="paçoca"/>
                </div>
                <h1>Cadastro</h1>
            </header>
            <div>
                <h1>Olá, seja bem-vindo!</h1>
                <h2>Vamos fazer o seu registro!</h2>
            </div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                <button disabled={loading} className="button-31" type="submit">{loading ? <ThreeDots color="white"/> : "Confirmar" }</button>
            </form>
            <Link to="/login">Já tem uma conta? Faça login!</Link>
        </UsualFormPage>
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