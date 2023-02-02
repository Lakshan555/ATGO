import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome5, Feather, Fontisto } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

export default function Home({navigation}) {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.header}>Arthritis Go</Text>
          <Text style={styles.welcomeText}>Welcome</Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardView}>
            <TouchableOpacity onPress={() => {navigation.navigate("NewPrescription");}}>
              <View style={styles.cardTopLeft}>
                <Fontisto name="prescription" size={40} color="black" />
                <Text style={{ marginTop: 10 }}>New Prescription</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("PastPrescription");}}>
              <View style={styles.cardTopRight}>
                <Fontisto name="prescription" size={40} color="black" />
                <Text style={{ marginTop: 10 }}>Past Prescription</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.cardView}>
            <TouchableOpacity onPress={() => {navigation.navigate("MedicalAssistance");}}>
              <View style={styles.cardBottomLeft}>
                <FontAwesome5 name="hand-holding-medical" size={40} color="black" />
                <Text style={{ marginTop: 10 }}>Medical Assistance</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("AboutMe");}}>
              <View style={styles.cardBottomRight}>
                <FontAwesome5 name="user" size={40} color="black" />
                <Text style={{ marginTop: 10 }}>About Me</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerView: {
    justifyContent: "center",
    alignItems: "center",
    padding: Math.round(height / 10),
  },
  header: {
    fontSize: 28,
    marginBottom: "10%",
    fontWeight: "700",
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 16,
  },
  cardContainer: {
    backgroundColor: "#fff",
    height: Math.round(height / 2),
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: Math.round(height / 25),
  },
  cardView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: Math.round(height / 50),
    paddingBottom: Math.round(height / 25),
  },
  cardTopLeft: {
    height: Math.round(width / 3),
    width: Math.round(width / 3),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
    borderRadius: 15,
    shadowColor: "#bcbcbc",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 5.6,
    elevation: 8,
  },
  cardTopRight: {
    height: Math.round(width / 3),
    width: Math.round(width / 3),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
    borderRadius: 15,
    shadowColor: "#bcbcbc",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 5.6,
    elevation: 8,
  },
  cardBottomLeft: {
    height: Math.round(width / 3),
    width: Math.round(width / 3),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
    borderRadius: 15,
    shadowColor: "#bcbcbc",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 5.6,
    elevation: 8,
  },
  cardBottomRight: {
    height: Math.round(width / 3),
    width: Math.round(width / 3),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
    borderRadius: 15,
    shadowColor: "#bcbcbc",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 5.6,
    elevation: 8,
  },
});
