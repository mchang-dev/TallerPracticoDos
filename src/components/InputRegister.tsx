import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { INPUT_COLOR, SECONDARY_COLOR } from "../commons/constans";
import { styles } from "../theme/appTheme";

interface Props {
  placeholder: string;
  keyboardType: "default" | "numeric" | "email-address" | "phone-pad";
  property: string;
  changeForm: (property: string, value: string) => void;
  isPassword?: boolean;
}

export const InputComponent = ({ placeholder, keyboardType, property, isPassword, changeForm }: Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={isPassword}
      onChangeText={(value) => changeForm(property, value)}
      style={styles.inputText}
    />
  );
};
