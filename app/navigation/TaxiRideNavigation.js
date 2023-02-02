import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaxiRides from "../components/mapComponent/TaxiRides";
import RideHistory from "../components/mapComponent/RideHistory";
import RoadMap from "../components/mapComponent/RoadMap";

const Stack = createNativeStackNavigator();

const TaxiRideNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true, title: "" }}>
      <Stack.Screen
        name="TaxiRides"
        component={TaxiRides}
        options={{
          title: "Taxi Prescription",
          headerTintColor: "#343b24",
          headerStyle: { backgroundColor: "#d4f0c0" },
        }}
      />
      <Stack.Screen
        name="RideHistory"
        component={RideHistory}
        options={{
          title: "Ride History",
          headerTintColor: "#343b24",
          headerStyle: { backgroundColor: "#d4f0c0" },
        }}
      />
      <Stack.Screen
        name="RoadMap"
        component={RoadMap}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default TaxiRideNavigation;
