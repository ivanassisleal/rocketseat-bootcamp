import React, { useRef, useCallback } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  TextInput,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

import * as Yup from "yup";

import { ScrollView } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";

import { Form } from "@unform/mobile";

import { FormHandles } from "@unform/core";

import Input from "../../components/Input";

import Button from "../../components/Button";

import logoImg from "../../assets/logo.png";

import getValidationErros from "../../utils/getValidationErrors";

import {
  Container,
  Title,
  BackToSignInButton,
  BackToSignInButtonText,
} from "./styles";

import api from "../../services/api";

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const mailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const handleSignUp = useCallback(
    async (data: object) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required("Nome obrigatório"),
          email: Yup.string().required("E-mail obrigatório").email(),
          password: Yup.string().min(6),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post("users", data);

        Alert.alert(
          "Cadastro realizado com sucesso",
          "Você ja pode fazer o login na aplicação"
        );

        navigation.goBack();
      } catch (err) {
        const errors = getValidationErros(err);

        formRef.current?.setErrors(errors);

        Alert.alert("Erro na autenticação", "Ocorreu um erro ao fazer login");

        return;
      }
    },
    [navigation]
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />

            <View>
              <Title>Crie sua Conta</Title>
            </View>
            <Form
              ref={formRef}
              onSubmit={handleSignUp}
              style={{ width: "100%" }}
            >
              <Input
                name="name"
                icon="user"
                placeholder="Name"
                autoCorrect={true}
                autoCapitalize="words"
                returnKeyType="next"
                onSubmitEditing={() => mailInputRef.current?.focus()}
              />

              <Input
                ref={mailInputRef}
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCorrect={false}
                autoCapitalize={"none"}
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current?.focus()}
              />

              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Password"
                secureTextEntry
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <Button onPress={() => formRef.current?.submitForm()}>
                Entrar
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignInButton onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackToSignInButtonText>Voltar para Logon</BackToSignInButtonText>
      </BackToSignInButton>
    </>
  );
};

export default SignUp;
