import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import backgroundImage from "../assets/images/droplet.jpeg";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../constants/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const ChatScreen = (props) => {
  const [messageText, setMessageText] = useState("");
  const sendMessage = useCallback(() => {
    setMessageText("");
  }, [messageText]);

  return (
    <SafeAreaView edges={["bottom", "left", "right"]} style={styles.container}>
      <KeyboardAvoidingView
        style={styles.screen}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={100}
      >
        <ImageBackground
          source={backgroundImage}
          style={styles.backgroundImage}
        ></ImageBackground>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.mediaButton}
            onPress={() => {
              console.log("Plus button pressed");
            }}
          >
            <FontAwesome name="plus-square" size={24} color={colors.blue} />
          </TouchableOpacity>
          <TextInput
            style={styles.textbox}
            onChangeText={(text) => {
              setMessageText(text);
            }}
            onSubmitEditing={sendMessage}
          />
          {messageText === "" && (
            <TouchableOpacity
              style={styles.mediaButton}
              value={messageText}
              onPress={() => {
                console.log("Camera button pressed");
              }}
            >
              <FontAwesome name="camera" size={24} color={colors.blue} />
            </TouchableOpacity>
          )}
          {messageText === "" && (
            <TouchableOpacity
              style={styles.mediaButton}
              onPress={() => {
                console.log("Mic button pressed");
              }}
            >
              <FontAwesome name="microphone" size={24} color={colors.blue} />
            </TouchableOpacity>
          )}
          {messageText !== "" && (
            <TouchableOpacity
              style={{ ...styles.mediaButton, ...styles.sendButton }}
              onPress={sendMessage}
            >
              <FontAwesome name="send" size={20} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  backgroundImage: {
    flex: 1,
  },
  screen: {
    flex: 1,
  },
  textbox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.lightGrey,
    marginHorizontal: 15,
    paddingHorizontal: 15,
  },
  mediaButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 35,
  },
  sendButton: {
    borderRadius: 50,
    backgroundColor: colors.blue,
  },
  label: { color: "black", fontSize: 32, fontFamily: "black" },
});

export default ChatScreen;
