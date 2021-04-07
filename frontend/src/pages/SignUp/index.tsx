import React from "react";
import { FiArrowLeft, FiMail, FiLock, FiUser } from "react-icons/fi";
import { Form } from "@unform/web";
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Logo from "../../assets/images/logo.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, Content, Background } from "./styles";
import getValidationErrors from "../../utils/getValidateErrors";

const SignUp: React.FC = () => {

  const formRef = React.useRef<FormHandles>(null);

  const handleSubmit = React.useCallback( async (data:object)  =>{
    try
    {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name:Yup.string().required("Nome obrigatório"),
        email:Yup.string().required("E-mail obrigatório").email("Formato Inválido"),
        password:Yup.string().min(6),
      });
      await schema.validate(data,{
        abortEarly:false
      });
    }
    catch(err){
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return;
      }
    }
  },[]);

  return (
    <Container>
      <Background />
      <Content>
        <img src={Logo} alt="" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>
          <Input icon={FiUser} name="name" type="text" placeholder="Nome" />
          <Input icon={FiMail} name="email" type="text" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Password"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="forgot">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
