import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ChatListScreen from "../screens/ChatListScreen";
import ChatSettingsScreen from "../screens/ChatSettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ChatScreen from "../screens/ChatScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerTitle: "" }}>
      <Tab.Screen
        name="ChatList"
        component={ChatListScreen}
        options={{
          tabBarLabel: "Chats",
          tabBarIcon: ({color, size}) => {
            return <MaterialIcons name="chat-bubble" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({color, size}) => {
            return <MaterialIcons name="settings" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = (props) => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{
            gestureEnabled: false,
            headerTitle: '',
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen
          name="Settings"
          component={ChatSettingsScreen}
          options={{
            gestureEnabled: false,
            headerTitle: "Settings",
            headerBackTitle: "Back",
          }}
        />
      </Stack.Navigator>
  );
};

export default MainNavigator;
