import styled from "styled-components"

const UsualFormPage = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    header {
        margin-bottom: 50px;
        z-index: 1;
        width: 327px;
        height: 64px;
        border-bottom: 1px solid #EDEDED;
        display: flex;
        align-items: center;
        column-gap: 88.5px;
        background-color: #FFFFFF;

        div {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #292526;
        }

        h1 {
            font-family: "Encode Sans", sans-serif;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            color: #1B2028;
        }
    }

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
        display: flex;
        align-items: center;
        justify-content: center;
        max-height: 40px;
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
    a {
        text-decoration: none;
        margin-top: 15px;
        color: gray;
    }
    input[type=file] {
        display: none;
    }
    input[type=checkbox] {
        height: 25px;
        display: inline;
        background-color: red;
        width: 25px;
        margin: 30px;
        margin-left: 0px;
        accent-color: #222;
        margin-right: 15px;
    }

    .checkboxInputContainer {
        margin-top: 15px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    label {
        display: block;
    }
    .checkboxLabel {
        display: inline;
    }

    .button-31:hover,
    .button-31:focus {
    opacity: .75;
    }



`

export default UsualFormPage;