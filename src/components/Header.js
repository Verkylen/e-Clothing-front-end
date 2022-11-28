import logo from "../images/logo.svg"
import styled from "styled-components"
import React from "react"
import { Link } from "react-router-dom"
import { userContext } from "../App"

export default function Header() {
    const [showDropDown, setShowDropDown] = React.useState(false);
    const user = React.useContext(userContext)[0];

    function signOut() {
        localStorage.removeItem("userData")
    }

    return(
        <StyledHeader user={user} showDropDown={showDropDown}>
            <section>
                <div>
                    <h1>Oi! Bem-vindx</h1>
                    <span>{user ? user.username : "Visitante"}</span>
                </div>
                <img src={logo} alt="Logo"/>
                <div onMouseEnter={() => setShowDropDown(true)} onMouseLeave={() => setShowDropDown(false)}>
                    {user ? <img src={`data:image/png;base64,${user.profilePicture.buffer}`} className="profile-picture" alt="user profile picture"/> 
                    : <ion-icon name="person-circle-outline"/>}
                    <div aria-labelledby="dropdownMenuButton">
                        <Link className="unlogged" to="/login">Login</Link>
                        <Link className="unlogged" to="/sign-up">Registre-se!</Link>
                        <Link className="logged" onClick={signOut} to="/login">Deslogar</Link>
                    </div>
                </div>
            </section>
        </StyledHeader>
    )
}



const StyledHeader = styled.header`
        @keyframes slide-top {
        0% {
            -webkit-transform: translateY(0);
                    transform: translateY(0);
        }
        100% {
            -webkit-transform: translateY(-20px);
                    transform: translateY(-20px);
        }
        }

        width: 100%;

        div:nth-of-type(2) {
            position: relative;
            div {
                display: ${props => props.showDropDown ? "initial" : "none"};
                animation: slide-top 0.5s cubic-bezier(0.550, 0.055, 0.675, 0.190) reverse both;
                position: absolute;
                background-color: white;
                right: -30px;
                border: solid 1px;
                top: 35px;
                a {
                    text-decoration: none;
                    border: solid 1px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 40px;
                    font-family: "Encode Sans";
                    width:100px;
                    color: black;
                }
            }
        }

        ion-icon {
            font-size: 36px;
        }

        .profile-picture {
            width: 40px;
            height: 40px;
            border-radius: 100px;
        }

        &>section:nth-of-type(1) {
            width: 100%;
            margin-top: 16px;
            height: 49px;
            padding: 0 calc((100% - 327px)/2);
            display: flex;
            justify-content: space-between;
            align-items: center;

            div {
                row-gap: 4px;

                h1 {
                    font-family: "Encode Sans", sans-serif;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 21px;
                    color: #1B2028;
                }

                span {
                    font-family: "Encode Sans", sans-serif;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 21px;
                    color: #1B2028;
                }
            }

            img {
                width: 40px;
                object-fit: cover;
            }
        }

        .logged {
            display: ${props => props.user ? "flex" : "none"} !important;
        }
        .unlogged {
            display: ${props => !props.user ? "flex" : "none"} !important;
        }
`;