import { react } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const ChatListScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Chat List Screen</Text>
      <Button
        title="Go to Chat Screen"
        onPress={() => {
          props.navigation.navigate("ChatScreen");
        }}
      />
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

export default ChatListScreen;
