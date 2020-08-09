import React from "react";
import { FiLogIn } from "react-icons/fi";

import Logo from "../../assets/images/logo.svg";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Content, Background } from "./styles";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="" />
        <form>
          <h1>Faça seu Logon</h1>
          <Input name="email" type="text" placeholder="E-mail" />
          <Input name="password" type="password" placeholder="Password" />
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </form>
        <a href="forgot">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
