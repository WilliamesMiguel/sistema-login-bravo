// src/pages/Home/styles.js (ou src/pages/Signup/styles.js)
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background-color: transparent; /* Alterando o fundo para transparente */
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.8); /* Mantendo o fundo do card branco com opacidade */
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 90%;
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 20px;
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
`;

export const Subtitle = styled.h2`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 15px;
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
