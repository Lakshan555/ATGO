import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

import RelationDetails from "../components/RelationDetails";
import UserProfile from "../components/UserProfile";
import MoreOptions from "../components/MoreOptions";
const Stack = createNativeStackNavigator();

const MoreOptinsNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "DriveCare-More",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#39367e" },
        }}
        name="MoreOptions"
        component={MoreOptions}
        initialParams={{ icon: "heart" }}
      />
      <Stack.Screen
        options={{
          title: "DriveCare-Profile",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#39367e" },
        }}
        name="UserProfile"
        component={UserProfile}
      />

      <Stack.Screen
        options={{
          title: "Relation Details",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#39367e" },
        }}
        name="RelationDetails"
        component={RelationDetails}
      />
    </Stack.Navigator>
  );
};

export default MoreOptinsNavigation;

const styles = StyleSheet.create({});
