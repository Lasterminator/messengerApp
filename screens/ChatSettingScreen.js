import { react } from "react";
import { View, Text, StyleSheet } from "react-native";
const ChatSettingScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Chat Setting Screen</Text>
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

export default ChatSettingScreen;
