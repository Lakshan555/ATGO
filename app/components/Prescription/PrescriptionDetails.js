import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// import { SelectList } from "react-native-dropdown-select-list";
import Header from "../Common/Header";

const PrescriptionDetails = ({ route, navigation }) => {
  const test = "ssss";
  return (
    <View style={styles.screen}>
      <Header  prop1={"Prescription"} />

      <View style={styles.body}>
        <View>
          <View style={styles.item}>
            <Text>Patient name : </Text>
            <Text>Age : </Text>
            <Text>Gender : </Text>
            <Text>Ref no : </Text>
            <Text>Referred by : </Text>
            <Text>Reported Date and Time :</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PrescriptionDetails;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 8,
    backgroundColor: "#14141405",
    padding: 10,
    width: "100%",
  },
  inputFieldCon: {
    width: "70%",
  },
  //   textInputStyle: {
  //     width: "100%",
  //     height: "55%",
  //     borderRadius: 9,
  //     borderWidth: 1,
  //   },
  input: {
    backgroundColor: "white",
    padding: 15,
    // paddingTop: 10,
    paddingBottom: 100,
    margin: 10,
    marginTop: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  comment: {
    marginBottom: -20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#141414",
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 10,
    marginBottom: 30,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  buttonText: {
    color: "white",
    fontWeight: "900",
  },
  item: {
    margin: 10,
    backgroundColor: "white",
    padding: 25,
    borderTopWidth: 10,
    borderColor: "green",
    borderRadius: 10,
    marginVertical: 8,
    flexDirection: "column",
    justifyContent: "flex-end",
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontWeight: "500",

    alignContent: "center",
    justifyContent: "center",
  },
  accidentVideo: {
    // width: "100%",
    height: 80,
    backgroundColor: "white",
    margin: 10,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 9,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  defaultImage: {
    width: "100%",
    height: "100%",
    borderRadius: 9,
  },
});
