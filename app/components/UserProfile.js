import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  Linking,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
const { height, width } = Dimensions.get("window");
import { Avatar, Button } from "react-native-paper";
import { useSelector } from "react-redux";
import moment from "moment";
import axios from "axios";

const UserProfile = () => {
  const userDetails = useSelector((state) => state.AuthReducers.userDetails);

  console.log("user", userDetails);

  let age = moment(Date.now()).diff(userDetails.DOB, "years");

  let email = "";
  if (userDetails.email.length > 16) {
    email = userDetails.email.replace(/@/g, "@\n");
  } else {
    email = userDetails.email;
  }

  return (
    <View style={styles.container}>
      <View style={styles.profilePicNameContainer}>
        <View style={styles.profilePicContainer}>
          <Avatar.Image
            source={{ uri: userDetails.image }}
            style={styles.porfileImage}
            size={150}
          />
        </View>
        <Text style={styles.buddyName}>
          {userDetails.fullName} ({age}yrs)
        </Text>
      </View>
      <View style={styles.userDetailssContainer}>
        <View style={styles.contryContainer}>
          <Text style={styles.userDetailsLabel}>Email : </Text>
          <Text style={styles.userDetailsValue}>{email}</Text>
        </View>
        <View style={styles.contryContainer}>
          <Text style={styles.userDetailsLabel}>Contact No : </Text>
          <Text style={styles.userDetailsValue}>{userDetails.phoneNumber}</Text>
        </View>

        <View style={styles.contryContainer}>
          <Text style={styles.userDetailsLabel}>DOB : </Text>
          <Text style={styles.userDetailsValue}>
            {moment(userDetails.DOB).format("YYYY-MM-DD")}{" "}
          </Text>
        </View>
        <View style={styles.contryContainer}>
          <Text style={styles.userDetailsLabel}>License No : </Text>
          <Text style={styles.userDetailsValue}>{userDetails.licenseNo}</Text>
        </View>
      </View>
      <View style={styles.allContent}>
        <View style={styles.vehicleDetails}>
          <View style={styles.reivewStarContainer}>
            <Text style={styles.reviewTxt}>Vehicle Details</Text>
            <View style={styles.hrLine} />

            <View style={{ width: "100%", alignItems: "flex-start" }}>
              <View style={styles.contryContainer}>
                <Text style={styles.userDetailsLabelV}>Vehicle No : </Text>

                <Text style={styles.userDetailsValueV}>
                  {userDetails.VehicleDetailsId.registrationNo}
                </Text>
              </View>
              <View style={styles.contryContainer}>
                <Text style={styles.userDetailsLabelV}>YOM :</Text>
                <Text style={styles.userDetailsValueV}>
                  {moment(userDetails.VehicleDetailsId.yom).format("YYYY")}
                </Text>
              </View>
              <View style={styles.contryContainer}>
                <Text style={styles.userDetailsLabelV}>No Of Air Bags : </Text>
                <Text style={styles.userDetailsValueV}>
                  {userDetails.VehicleDetailsId.noofairbags}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.vehicleDetailsPoints}>
          <Text style={styles.reviewTxt}>Ponits</Text>
          <View style={styles.hrLine} />
          <Text style={styles.points}>70</Text>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width / 23,
    paddingTop: height / 60,
  },
  profilePicNameContainer: {
    width: "100%",
    height: "27%",
    justifyContent: "center",
    alignItems: "center",
  },
  profilePicContainer: {
    width: "45%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  porfileImage: {
    borderRadius: 100,
    overflow: "hidden",
  },
  buddyName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: height / 60,
  },
  userDetailssContainer: {
    width: "100%",
    height: "10%",
    marginTop: height / 90,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginVertical: height / 28,
    alignSelf: "flex-start",
  },
  contryContainer: {
    width: "40%",
    marginVertical: height / 140,
    flexDirection: "row",
  },
  userDetailsLabel: {
    fontSize: 14,
    fontWeight: "bold",
  },
  userDetailsLabelV: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userDetailsValueV: {
    fontSize: 16,
    marginLeft: "1%",
  },
  hrLine: {
    paddingTop: height / 50,
    borderBottomWidth: 0.7,
    marginBottom: height / 70,
    width: "100%",
  },
  hrLineReview: {
    paddingTop: height / 50,
    borderBottomWidth: 0.7,
    marginBottom: height / 70,
    width: "100%",
    borderColor: "#f7797d",
  },
  reviewContainer: {
    width: "100%",
  },

  reviewTxt: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: "3%",
  },
  reviewPersonImg: {
    height: "22%",
    width: "8%",
    borderRadius: 100,
    overflow: "hidden",
    paddingVertical: width / 30,
  },
  buddyReviewContainer: {
    flexDirection: "row",
  },
  reviews: {
    fontSize: 10,
  },
  flatList: {
    marginBottom: 75,
  },
  buttonGredient: {
    borderRadius: 10,
  },
  emailBtntxt: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  emailBtnConatent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: width / 40,
  },
  emailIcon: {
    paddingHorizontal: width / 70,
    color: "white",
  },
  emailstartBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  reivewStarContainer: {
    width: "100%",
  },
  allContent: {
    flexDirection: "row",
    width: "100%",
  },
  vehicleDetails: {
    width: "65%",
  },
  vehicleDetailsPoints: {
    width: "35%",
  },
  points: {
    fontSize: 80,
    fontWeight: "bold",
    textAlign: "center",
  },
});
