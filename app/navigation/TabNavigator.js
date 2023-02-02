import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/Home";
import Profile from "../components/Profile";
import TabBar from "../components/TabBar";
import ProfileNavigation from "./ProfileNavigation";
import HomeNavigation from "./HomeNavigation";
import TaxiRideNavigation from "./TaxiRideNavigation";
import MoreOptinsNavigation from "./MoreOptinsNavigation";
import Reports from "../components/Reports/Reports";
import Prescription from "../components/Reports copy/Prescription";

//invoke navigation function. it will return a component
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
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
        options={{ headerShown: false }}
        initialParams={{ tabIcon: "prescription" }}
      />
      {/* <Tab.Screen
        name="Alerts"
        component={ProfileNavigation}
        initialParams={{ icon: "exclamationcircle" }}
      /> */}
      {/* <Tab.Screen
        options={{ headerShown: false }}
        name="More"
        component={MoreOptinsNavigation}
        initialParams={{ icon: "database" }}
      /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;
