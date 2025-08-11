import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { PRIMARY_COLOR } from "../commons/constans";
import { TittleComponent } from "../components/TittleComponent";
import { styles } from "../theme/appTheme";
import { StackScreenProps } from "@react-navigation/stack";
import { ButtonComponent } from "../components/ButtonRegister";
import { InputComponent } from "../components/InputRegister";
import Icon from "react-native-vector-icons/MaterialIcons";

interface RegisterForm {
  username: string;
  password: string;
  name: string;
  email: string;
  phone: string;
}

type Props = StackScreenProps<any, any>;

export const RegisterScreen = ({ navigation }: Props) => {
  const insets = useSafeAreaInsets();
  const [registerForm, setRegisterForm] = useState<RegisterForm>({
    username: "",
    password: "",
    name: "",
    email: "",
    phone: "",
  });

  const [hiddenPassword, setHiddenPassword] = useState(true);

  const changeForm = (property: string, value: string): void => {
    setRegisterForm({ ...registerForm, [property]: value });
  };

  const handleRegister = (): void => {
    if (registerForm.username == "" || registerForm.password == "") {
      Alert.alert("Error", "Por favor complete todos los campos.");
      return;
    }
    console.log(registerForm);
    navigation.navigate("Login");
  };

  return (
    <View>
      <View style={{ height: insets.top, backgroundColor: PRIMARY_COLOR }} />
      <StatusBar />
      <TittleComponent title="Register" />
      <View style={styles.containerForm}>
        <InputComponent placeholder="Username" keyboardType="default" changeForm={changeForm} property="username" />
        <InputComponent placeholder="Password" keyboardType="default" changeForm={changeForm} property="password" isPassword={hiddenPassword} />
        <Icon name={hiddenPassword ? "visibility" : "visibility-off"} size={20} style={style.icon} onPress={() => setHiddenPassword(!hiddenPassword)} />
        <InputComponent placeholder="Name" keyboardType="default" changeForm={changeForm} property="name" />
        <InputComponent placeholder="Email" keyboardType="email-address" changeForm={changeForm} property="email" />
        <InputComponent placeholder="Phone" keyboardType="phone-pad" changeForm={changeForm} property="phone" />
        <ButtonComponent textButton="Registrarse" handleRegister={handleRegister} />
        <TouchableOpacity>
          <Text style={styles.textRegister} onPress={() => navigation.navigate("Login")}>
            Ya tengo una cuenta
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
