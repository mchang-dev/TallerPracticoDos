import { StyleSheet } from "react-native";
import { INPUT_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from "../commons/constans";

export const styles = StyleSheet.create({
  containerForm: {
    marginVertical: 10,
    alignItems: "center",
    height: "80%",

  },
    textRegister: {
      marginTop: 20,
      color: TERTIARY_COLOR,
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
    },
  button: {
    marginTop: 20,
    backgroundColor: INPUT_COLOR,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    width: "40%",
  },
  buttonText: {
    color: TERTIARY_COLOR,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputText: {
    backgroundColor: SECONDARY_COLOR,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: INPUT_COLOR,
    marginTop: 20,
    marginVertical: 7,
    width: 300,
  },
});
