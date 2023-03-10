import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/Home";
import Profile from "../components/Profile";
import TabBar from "../components/TabBar";
import ProfileNavigation from "./ProfileNavigation";
import HomeNavigation from "./HomeNavigation";
import MoreOptinsNavigation from "./MoreOptinsNavigation";
import Reports from "../components/Reports/Reports";
import Prescription from "../components/Prescription/Prescription";
import SuggestLocation from "../components/SuggestLocation/SuggestLocation";

//invoke navigation function. it will return a component
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={SuggestLocation}
        initialParams={{ icon: "home" }}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Report"
        component={Reports}
        initialParams={{ icon: "upload" }}
      />

      <Tab.Screen
        name="Prescription"
        component={Prescription}
    
        initialParams={{ tabIcon: "prescription" }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
