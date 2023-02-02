import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "../components/TabBar";
import HomeNavigation from "./HomeNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/policeOfficer/Home";
import NewPrescription from "../components/policeOfficer/NewPrescription";
import PastPrescription from "../components/policeOfficer/PastPrescription";
import MedicalAssistance from "../components/policeOfficer/MedicalAssistance";
import AboutMe from "../components/policeOfficer/AboutMe";
import AddDrugs from "../components/policeOfficer/AddDrugs";

//invoke navigation function. it will return a component
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigatorPolice = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true, title: "" }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="NewPrescription"
        component={NewPrescription}
        options={{
          title: "New Prescription",
          headerTintColor: "black",
          headerStyle: { backgroundColor: "#fff" },
        }}
      />
      <Stack.Screen
        name="PastPrescription"
        component={PastPrescription}
        options={{
          title: "Past Prescription",
          headerTintColor: "black",
          headerStyle: { backgroundColor: "#fff" },
        }}
      />
      <Stack.Screen
        name="MedicalAssistance"
        component={MedicalAssistance}
        options={{
          title: "Medical Assistance",
          headerTintColor: "black",
          headerStyle: { backgroundColor: "#fff" },
        }}
      />
      <Stack.Screen
        name="AboutMe"
        component={AboutMe}
        options={{
          title: "About Me",
          headerTintColor: "black",
          headerStyle: { backgroundColor: "#fff" },
        }}
      />
      <Stack.Screen
        name="AddDrug"
        component={AddDrugs}
        options={{
          title: "Add Drug",
          headerTintColor: "black",
          headerStyle: { backgroundColor: "#fff" },
        }}
      />
    </Stack.Navigator>
  );
};

export default TabNavigatorPolice;
