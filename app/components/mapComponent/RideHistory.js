import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { images } from "./imagesList";
import axios from "axios";
import moment from "moment";

const { height, width } = Dimensions.get("window");

const RideHistory = () => {
  const [driverId, setDriverId] = useState("63d6a0da4418965ae9d54267");
  const [rideHistory, setRideHistory] = useState([]);
  const [loaderEnable, setLoaderEnable] = useState(false);

  const showLoader = () => {
    return (
      <ActivityIndicator
        size={"large"}
        style={{ justifyContent: "center", alignItems: "center" }}
      />
    );
  };

  const fetchData = async () => {
    setLoaderEnable(true);
    try {
      const response = await axios.get(
        `http:/10.0.2.2:5000/taxiRides/${driverId}`
      );
      if (response.status === 200) {
        setRideHistory(response.data);
        setLoaderEnable(false);
      }
    } catch (error) {
      Alert("Somthing when wrong!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const convertDate = (date) => {
    return moment(date).format("YYYY-MM-DD");
  };

  console.log("ride history ", rideHistory);

  return (
    <View style={styles.container}>
      {loaderEnable && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      )}
      {!loaderEnable &&
        rideHistory.length > 0 &&
        rideHistory.map((item, index) => (
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.mainCardView}>
              <View style={styles.cardImageView}>
                <Image
                  source={require("../../images/CardTemplate2.jpg")}
                  resizeMode="contain"
                  style={styles.cardImage}
                />
                <View style={{ position: "absolute", left: 10, top: 5 }}>
                  <Text style={{ fontSize: 10 }}>
                    {convertDate(item.travelStartDate)}
                  </Text>
                </View>
                <View style={{ position: "absolute", left: 70, marginTop: 5 }}>
                  <Text style={{ fontSize: 9, padding: 2, left: 2 }}>
                    Distance: {item.distance}
                  </Text>
                  <Text style={{ fontSize: 9, padding: 2, left: 2 }}>
                    Duration: {item.duration}
                  </Text>
                </View>
                <View style={{ position: "absolute", right: 65, top: 20 }}>
                  <Text style={{ fontSize: 14, padding: 2, left: 2, top: 0 }}>
                    {item.rideOrigin}
                  </Text>
                  <Text style={{ fontSize: 14, padding: 2, left: 2, top: 10 }}>
                    {item.rideDestination}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
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
    marginTop: 10,
    marginBottom: 6,
    marginLeft: 10,
    marginRight: 10,
  },
  cardImageView: {
    height: "100%",
    width: "100%",
    borderRadius: 25,
    backgroundColor: "#00000",
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
  },
  cardImage: {
    // borderRadius: 25,
    borderWidth: 0,
    height: "100%",
    width: "100%",
    padding: 5,
  },
  cardText: {
    fontSize: 20,
    color: "#00000",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "capitalize",
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RideHistory;
