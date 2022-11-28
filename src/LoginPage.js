import React, { useContext, useRef } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import API_BASE_URL from "./assets/constants"
import back from "./images/back.svg";
import { ThreeDots } from "react-loader-spinner"
import { userContext } from "./App"
import { Link } from "react-router-dom"
import UsualFormPage from "./assets/styles/UsualFormPage"

export default function LoginPage() {

    const [loading, setLoading] = React.useState(false);
    const [user, setUser] = useContext(userContext);

    const [formValue, setFormValue] = React.useState({
        "email": "",
        "password": "",
        "keepLogged": false
     })

    const navigate = useNavigate();

    function handleChange(element) {
        if(element.type === "checkbox")
            setFormValue({
                ...formValue,
                keepLogged: element.target.checked ? 1 : 0
            })
        else
            setFormValue({
                ...formValue,
                [element.target.name]: element.target.value
            });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        const body = formValue;
        body.keepLogged = Boolean(formValue.keepLogged);
        axios.post(API_BASE_URL + "/login", body)
        .then(response => {
            setLoading(false);
            Swal.fire({
                title: 'Login realizado com sucesso!',
                icon: 'success',
                timer: 1000
            })
            navigate("/")
            if(body.keepLogged) {
                localStorage.setItem("userData", JSON.stringify(response.data))
                setUser(response.data)
            }
            setUser(response.data)
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

    return (
        <UsualFormPage>
             <header>
                <div onClick={() => navigate("/")}>
                    <img src={back} alt="paçoca"/>
                </div>
                <h1>Login</h1>
            </header>
            <div>
                <h1>Olá, seja bem-vindo de volta!</h1>
                <h2>Vamos fazer o seu login!</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Digite seu email" type="email" name="email" value={formValue.email} onChange={handleChange} required/>
                <input placeholder="Escolha uma senha" type="password" name="password" value={formValue.password} onChange={handleChange} required/>
                <div className="checkboxInputContainer">
                    <input type="checkbox" id="keepLogged" name="keepLogged" onChange={handleChange}/>
                    <label htmlFor="keepLogged" className="checkboxLabel">Manter-me conectado</label>
                </div>
                <button disabled={loading} className="button-31" type="submit">{loading ? <ThreeDots color="white"/> : "Confirmar" }</button>
            </form>
            <Link to="/sign-up">Ainda não tem uma conta? Registre-se!</Link>
        </UsualFormPage>
    )
}