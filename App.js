import "./gesture-handler";

import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useCallback } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import AppNavigator from "./navigation/AppNavigator";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MenuProvider } from 'react-native-popup-menu';

// AsyncStorage.clear();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  useEffect(() => {
    //Load Fonts

    const prepare = async () => {
      try {
        await Font.loadAsync({
          black: require("./assets/fonts//Roboto-Black.ttf"),
          blackItalic: require("./assets/fonts/Roboto-BlackItalic.ttf"),
          bold: require("./assets/fonts/Roboto-Bold.ttf"),
          boldItalic: require("./assets/fonts/Roboto-BoldItalic.ttf"),
          italic: require("./assets/fonts/Roboto-Italic.ttf"),
          light: require("./assets/fonts/Roboto-Light.ttf"),
          lightItalic: require("./assets/fonts/Roboto-LightItalic.ttf"),
          medium: require("./assets/fonts/Roboto-Medium.ttf"),
          mediumItalic: require("./assets/fonts/Roboto-MediumItalic.ttf"),
          regular: require("./assets/fonts/Roboto-Regular.ttf"),
          thin: require("./assets/fonts/Roboto-Thin.ttf"),
          thinItalic: require("./assets/fonts/Roboto-ThinItalic.ttf"),
        });
      } catch (error) {
        console.error(error);
      } finally {
        setIsAppLoaded(true);
      }
    };

    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (isAppLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isAppLoaded]);

  if (!isAppLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider style={styles.container} onLayout={onLayout}>
        <MenuProvider>
          <AppNavigator />
        </MenuProvider>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  label: { color: "black", fontSize: 32, fontFamily: "black" },
});
