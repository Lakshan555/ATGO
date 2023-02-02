import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./app/navigation/TabNavigator";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
const Stack = createNativeStackNavigator();
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./app/store/index";
import Login from "./app/components/LoginScreen";
import Registration from "./app/components/Registration";
import VehicleDetails from "./app/components/VehicleDetails";
import AccountTypeSelection from "./app/components/AccountTypeSelection";
import PoliceOfficerLogin from "./app/components/PoliceOfficerLogin";
import TabNavigatorPolice from "./app/navigation/TabNavigatorPolice";
import ReportDetails from "./app/components/Reports/ReportDetails";

const MyStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        options={{ headerShown: false }}
        component={AccountTypeSelection}
        name="AccountTypeSelection"
      />
      <Stack.Screen
        options={{ headerShown: false }}
        component={Login}
        name="Login"
      />
      <Stack.Screen
        options={{ headerShown: false }}
        component={PoliceOfficerLogin}
        name="PoliceOfficerLogin"
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="register"
        component={Registration}
      />
      <Stack.Screen
        name="tabNavigator"
        options={{ headerShown: false }}
        component={TabNavigator}
      />
      <Stack.Screen
        name="tabNavigatorPolice"
        options={{ headerShown: false }}
        component={TabNavigatorPolice}
      />
      <Stack.Screen
        name="vehicleRegister"
        options={{ headerShown: false }}
        component={VehicleDetails}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="reportDetails"
        component={ReportDetails}
      />
    
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        component={AccountTypeSelection}
        name="AccountTypeSelection"
      />
      <Stack.Screen
        options={{ headerShown: false }}
        component={Login}
        name="Login"
      />
      <Stack.Screen
        options={{ headerShown: false }}
        component={PoliceOfficerLogin}
        name="PoliceOfficerLogin"
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="register"
        component={Registration}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="vehicleRegister"
        component={VehicleDetails}
      />
    </Stack.Navigator>
  );
};

const RootNavigation = () => {
  const token = useSelector((state) => state.AuthReducers.authToken);
  console.log("authToken", token);

  return (
    <NavigationContainer>
      {token === null ? <AuthStack /> : <MyStack />}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
