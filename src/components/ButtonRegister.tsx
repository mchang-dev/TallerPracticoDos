import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { INPUT_COLOR, TERTIARY_COLOR } from "../commons/constans";
import { styles } from "../theme/appTheme";

interface Props {
  textButton: string;
  handleRegister: () => void;
}

export const ButtonComponent = ({ textButton, handleRegister }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleRegister}>
      <Text style={styles.buttonText}>{textButton}</Text>
    </TouchableOpacity>
  );
};