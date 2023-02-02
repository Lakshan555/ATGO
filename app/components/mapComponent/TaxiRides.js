import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Modal,
  Dimensions,
  TextInput,
  Image,
  ScrollView,
} from "react-native";

const { height, width } = Dimensions.get("window");

const TaxiRides = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.heading}>Any Accident Happened To You ?</Text> */}
      <ScrollView keyboardShouldPersistTaps="handled">
        <TouchableOpacity onPress={() => navigation.navigate("RideHistory")}>
          <View style={styles.mainCardView}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.cardImageView}>
                <Image
                  source={require("../../images/historyIcon2.png")}
                  resizeMode="contain"
                  style={styles.cardImage}
                />
              </View>
              <View style={{ marginLeft: 30 }}>
                <Text style={styles.cardText}>My Ride</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("RoadMap")}>
          <View style={styles.mainCardView}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.cardImageView}>
                <Image
                  source={require("../../images/mapIcon.png")}
                  resizeMode="contain"
                  style={styles.cardImage}
                />
              </View>
              <View style={{ marginLeft: 30 }}>
                <Text style={styles.cardText}>Go to Map</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width / 23,
    paddingTop: height / 7,
  },
  heading: {
    fontSize: 19,
    marginBottom: "5%",
  },

  mainCardView: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
    borderRadius: 15,
    shadowColor: "#f3f6f4",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 20,
    marginBottom: 6,
    marginLeft: 10,
    marginRight: 10,
  },
  cardImageView: {
    height: 60,
    width: 60,
    borderRadius: 25,
    backgroundColor: "#00000",
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
  },
  cardImage: {
    // borderRadius: 25,
    borderWidth: 0,
    height: 60,
    width: 60,
    padding: 5,
  },
  cardText: {
    fontSize: 20,
    color: "#00000",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "capitalize",
  },
});

export default TaxiRides;
