import React from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { TERTIARY_COLOR } from "../commons/constans";

interface Props {
  title: string;
}
export const TittleComponent = ({ title }: Props) => {
  const { height } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.title, height: height * 0.14 }}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: TERTIARY_COLOR,
    fontSize: 36,
    fontWeight: "bold",
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
});
