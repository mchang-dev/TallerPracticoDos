import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { INPUT_COLOR, TERTIARY_COLOR } from "../commons/constans";
import { styles } from "../theme/appTheme";

interface Props {
  textButton: string;
  handleLogin: () => void;
}

export const ButtonComponent = ({ textButton, handleLogin }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
      <Text style={styles.buttonText}>{textButton}</Text>
    </TouchableOpacity>
  );
};