import { createGlobalStyle } from "styled-components";
import { backgroundColor, contrastColor } from "../colors/colors";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        color:${backgroundColor};
    }
    button {
        outline: none;
        border: none;
        border-radius: 20px;
        font-size: 20px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        width: 100%;
        padding: 12px;
    }
    h1 {
        font-weight: 700;
        font-size: 26px;
        color: ${backgroundColor};
    }
    input {
        font-size: 20px;
        width: calc(100% - 1000px);
        border-radius: 20px;
        outline: none;
        border: 1px solid #ccc;
        padding: 15px;
        margin: 1px;
        :focus {
            border: 2px solid #ffb6b6;
            margin: 0px;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 100%;
        border-radius: 5px;
    }
    a {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: ${contrastColor};
        text-decoration: none;
        padding-top: 30px;
    }
    .disabled{
        opacity: 0.6;
    }
`

export default GlobalStyle