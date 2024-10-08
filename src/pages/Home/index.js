// src/pages/Home/index.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
  const { user, signout } = useAuth(); // Acessa 'user' e 'signout' do contexto
  const navigate = useNavigate();

  const handleSignout = () => {
    signout();
    navigate("/");
  };

  return (
    <C.Container>
      <C.Title>Bem-vindo, {user?.name}!</C.Title> {/* Exibe o nome do usuário */}
      <C.Subtitle>Email: {user?.email}</C.Subtitle> {/* Exibe o email do usuário */}
      <Button Text="Sair" onClick={handleSignout}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;
