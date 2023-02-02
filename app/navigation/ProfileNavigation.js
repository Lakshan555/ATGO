import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Test from "../components/Test";
import Profile from "../components/Profile";

const Stack = createNativeStackNavigator();

export default function ProfileNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true, title: "" }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  );
}
