import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/policeOfficer/Home";

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#ffbf00" },
        }}
      />
      {/* <Stack.Screen
        name="HandOverVehicle"
        component={HandOverVehicle}
        options={{
          title: "Hand-Over Details",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#39367e" },
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default HomeNavigation;


