import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import {NavigationContainer} from "@react-navigation/native";

import DrawerNavigator from "./components/DrawerNavigator"
import LoginScreen from "./screens/LoginScreen"
import LoadingScreen from "./screens/LoadingScreen"
import DashboardScreen from "./screens/DashboardScreen"
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
});
const AppNavigator = createAppContainer(AppSwitchNavigator);
export default function App() {
  return (
    <AppNavigator/>
  );
}

