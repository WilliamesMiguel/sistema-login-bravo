// src/styles/global.js
import { createGlobalStyle } from "styled-components";
import bgImage from "../components/bg.webp"; // Importe a imagem para o plano de fundo

const GlobalStyle = createGlobalStyle`
  /* Importando a fonte "Poppins" do Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;
    background: url(${bgImage}) no-repeat center center fixed, linear-gradient(135deg, #1e3c72, #2a5298);
    background-size: cover;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input, button {
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
