import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "../components/TabBar";
import HomeNavigation from "./HomeNavigation";
// import SubmitFine from "../components/ViolationsReport/PoliceOfficer/SubmitFine";


//invoke navigation function. it will return a component
const Tab = createBottomTabNavigator();

const TabNavigatorPolice = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        initialParams={{ icon: "home" }}
        options={{ headerShown: false }}
      />
   
    </Tab.Navigator>
  );
};

export default TabNavigatorPolice;
