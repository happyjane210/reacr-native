import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Detail() {
  return (
    <View style={styles.container}>
      <Text>This is Detail Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
