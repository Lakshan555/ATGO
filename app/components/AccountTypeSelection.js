import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Button } from "react-native-paper";

const { height, width } = Dimensions.get("window");

const AccountTypeSelection = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.topic}>Select Account Type</Text>
      <View style={styles.accTypeSelection}>
        <View style={styles.optionCon}>
          <TouchableOpacity
            style={styles.optionPress}
            onPress={() => navigation.navigate("Login")}
          >
            <Avatar.Image
              size={120}
              source={require("../images/patient.png")}
            />
          </TouchableOpacity>
          <Text style={styles.accTypeTxt}>Patient</Text>
        </View>
        <View style={styles.optionCon}>
          <TouchableOpacity
            style={styles.optionPress}
            onPress={() => navigation.navigate("PoliceOfficerLogin")}
          >
            <Avatar.Image size={120} source={require("../images/doctor.png")} />
          </TouchableOpacity>
          <Text style={styles.accTypeTxt}>Doctor</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AccountTypeSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width / 17,
    paddingBottom: height / 13,
    justifyContent: "center",
    alignItems: "center",
  },
  topic: {
    fontSize: 30,
    fontWeight: "bold",
    color: "gray",
    marginBottom: "7%",
  },
  accTypeSelection: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  optionCon: {
    margin: "4%",
    justifyContent: "center",
    alignItems: "center",
  },
  optionPress: {
    elevation: 10,
    shadowColor: "gray",
    shadowOffset: 10,
    shadowOpacity: 1,
  },
  accTypeTxt: {
    marginTop: "15%",
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
  },
});
