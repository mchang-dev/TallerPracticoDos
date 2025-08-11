import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { PRIMARY_COLOR, TERTIARY_COLOR } from "../commons/constans";
import { TittleComponent } from "../components/TittleComponent";
import { styles } from "../theme/appTheme";
import { InputComponent } from "../components/InputLogin";
import { ButtonComponent } from "../components/ButtonLogin";
import { StackScreenProps } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialIcons";

interface LoginForm {
  username: string;
  password: string;
}

type Props = StackScreenProps<any, any>;

export const LoginScreen = ({ navigation }: Props) => {
  const insets = useSafeAreaInsets();

  const [loginForm, setLoginForm] = useState<LoginForm>({
    username: "",
    password: "",
  });

  const [hiddenPassword, setHiddenPassword] = useState(true);

  const changeForm = (property: string, value: string): void => {
    setLoginForm({ ...loginForm, [property]: value });
  };

  const handleLogin = (): void => {
    if (loginForm.username == "" || loginForm.password == "") {
        Alert.alert("Error", "Por favor complete todos los campos.");
      return;
    }
    console.log(loginForm);
  };

  return (
    <View>
      <View style={{ height: insets.top, backgroundColor: PRIMARY_COLOR }} />
      <StatusBar />
      <TittleComponent title="Login" />
      <View style={styles.containerForm}>
        <InputComponent placeholder="Username" keyboardType="default" changeForm={changeForm} property="username" />
        <InputComponent placeholder="Password" keyboardType="default" changeForm={changeForm} property="password" isPassword={hiddenPassword} />
        <Icon name={hiddenPassword ? "visibility" : "visibility-off"} size={20} style={style.icon} onPress={() => setHiddenPassword(!hiddenPassword)} />
        <ButtonComponent textButton="Iniciar" handleLogin={handleLogin} />
        <TouchableOpacity>
          <Text style={styles.textRegister} onPress={() => navigation.navigate("Register")}>
            Click aqui para registrarse
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  icon: {
    position: "absolute",
    right: 70,
    top: 100,
    zIndex: 1,
  },
});
