import React, { useEffect, useRef } from "react";
import { TextInputProps } from "react-native";

import { Container, TextInput, Icon } from "./styles";
import { useField } from "@unform/core";

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  const { registerField, defaultValue = "", fieldName, error } = useField(name);
  const inputValuRef = useRef<InputValueReference>({ value: defaultValue });
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValuRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);
  return (
    <Container>
      <Icon name={icon} size={20} color="#666360" />
      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        defaultValue={defaultValue}
        onChangeText={(value) => (inputValuRef.current.value = value)}
        {...rest}
      />
    </Container>
  );
};

export default Input;
