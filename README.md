# Messenger App

A React Native messenger application built with Expo, featuring real-time chat functionality, group messaging, image sharing, and push notifications.

## Features

- **Authentication**: User signup and signin with Firebase Auth
- **Real-time Messaging**: Send and receive text messages instantly
- **Group Chats**: Create and manage group conversations
- **Image Sharing**: Share images from camera or photo library
- **Message Actions**: Star messages, reply to messages, copy to clipboard
- **Push Notifications**: Receive notifications for new messages
- **User Search**: Find and add users to chats
- **Profile Management**: Update profile information and profile pictures
- **Message History**: View starred messages and chat participants

## Tech Stack

- **React Native** with Expo
- **Firebase** (Authentication, Realtime Database, Storage)
- **Redux Toolkit** for state management
- **React Navigation** for navigation
- **Expo Notifications** for push notifications
- **Expo Image Picker** for image handling

## Project Structure

```
├── assets/                  # Images, fonts, and other static assets
├── components/              # Reusable React components
├── constants/               # App constants (colors, styles)
├── navigation/              # Navigation configuration
├── screens/                 # Screen components
├── store/                   # Redux store and slices
└── utils/                   # Utility functions and helpers
    ├── actions/             # API actions for Firebase
    ├── reducers/            # Redux reducers
    └── validationConstraints.js
```

## Key Components

### Screens
- **AuthScreen**: Login and signup interface
- **ChatListScreen**: List of user's chats
- **ChatScreen**: Individual chat interface
- **ChatSettingsScreen**: Group chat management
- **SettingsScreen**: User profile settings
- **NewChatScreen**: Create new chats or groups
- **ContactScreen**: View contact information

### Core Features
- **Real-time Data**: Firebase Realtime Database integration
- **State Management**: Redux with slices for auth, chats, messages, and users
- **Form Validation**: Custom validation for user inputs
- **Image Upload**: Firebase Storage integration for profile pictures and chat images

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Firebase:
   - Create a Firebase project
   - Add your Firebase configuration to `utils/firebaseHelper.js`
   - Enable Authentication, Realtime Database, and Storage

4. Start the development server:
   ```bash
   npm start
   ```

## Firebase Configuration

Update the `firebaseConfig` object in `utils/firebaseHelper.js` with your Firebase project credentials:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  databaseURL: "your-database-url",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

## Key Files

- `App.js` - Main app component with font loading and Redux provider
- `navigation/AppNavigator.js` - Main navigation logic
- `navigation/MainNavigator.js` - Tab and stack navigation
- `store/store.js` - Redux store configuration
- `utils/actions` - Firebase integration functions
- `utils/validationConstraints.js` - Form validation rules

## Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run in web browser

## Dependencies

Key dependencies include:
- `expo` - Expo SDK
- `react-native` - React Native framework
- `firebase` - Firebase SDK
- `@reduxjs/toolkit` - Redux state management
- `@react-navigation/native` - Navigation
- `expo-image-picker` - Image selection
- `expo-notifications` - Push notifications
- `validate.js` - Form validation