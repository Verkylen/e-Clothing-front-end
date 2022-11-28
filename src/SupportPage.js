import UsualFormPage from "./assets/styles/UsualFormPage";
import React, {useContext} from "react";
import back from "./images/back.svg"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { userContext } from "./App";

export default function SupportPage() {

    const user = useContext(userContext)[0];
    const [formValue, setFormValue] = React.useState({
        "email": user.email,
        "subject": "",
        "text": ""
     })

    const navigate = useNavigate();

    function handleChange(e) {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        Swal.fire({
            title: 'Recebemos sua solicitação!',
            icon: 'success',
            timer: 1000
        })
        setFormValue({
            "email": user.email,
            "subject": "",
            "text": ""
        })
    }

    return (
        <UsualFormPage>
             <header>
                <div onClick={() => navigate("/")}>
                    <img src={back} alt="paçoca"/>
                </div>
                <h1>Suporte</h1>
            </header>
            <div>
                <h1>Olá, esse é o formulário para entrar em contato com nosso time!</h1>
                <h2>Descreva o seu problema a seguir</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Seu email" type="email" name="email" value={formValue.email} onChange={handleChange} required/>
                <input placeholder="Assunto" type="text" name="subject" value={formValue.subject} onChange={handleChange} required/>
                <textarea placeholder="Descrição do problema" name="text" value={formValue.text} onChange={handleChange} required/>
                <button className="button-31" type="submit">Enviar</button>
            </form>
        </UsualFormPage>
    )
}