import { react } from "react";
import { View, Text, StyleSheet } from "react-native";
const SettingScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Setting Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: { color: "black", fontSize: 32, fontFamily: "black" },
});

export default SettingScreen;
