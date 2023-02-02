import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  TextInput,
  Dimensions,
  Alert,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { MaterialIcons } from "@expo/vector-icons";
import { GOOGLE_API_KEY } from "../../../environments";
import AddressComponents from "./AddressComponents";
import MapViewDirections from "react-native-maps-directions";
import imagePath from "./imagePath";
import CircularProgress from "react-native-circular-progress-indicator";
import axios from "axios";

const { height, width } = Dimensions.get("window");

const RoadMap = ({ navigation }) => {
  const [driverId, setDriverId] = useState("63d6a0da4418965ae9d54267");
  const [mapRegion, setMapRegion] = useState({
    pickupCords: {
      latitude: 6.1724812,
      longitude: 80.1779163,
    },
    destinationCords: {
      latitude: 6.140753,
      longitude: 80.1028181,
    },
  });
  const [newLocation, setNewLocation] = useState({
    pickupLocationCords: {},
    destinationLocationCords: {},
  });

  const mapRef = useRef("");
  const { pickupCords, destinationCords } = mapRegion;
  const { pickupLocationCords, destinationLocationCords } = newLocation;
  const [isDestinationEntered, setIsDestinationEntered] = useState(false);
  const [direcetionClicked, setDirecetionClicked] = useState(false);
  const [display, setDisplay] = useState(false);
  const [closeStartButton, setCloseStartButton] = useState(false);
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");

  const fetchOrginData = (lat, lng, zipCode, cityText) => {
    // console.log("Orinelat ", lat);
    // console.log("Orine lng ", lng);
    setStartLocation(cityText);
    setNewLocation({
      ...newLocation,
      pickupLocationCords: {
        latitude: lat,
        longitude: lng,
      },
    });
  };

  const fetchDestinationData = (lat, lng, zipCode, cityText) => {
    // console.log("Des lat ", lat);
    // console.log("Des lng ", lng);
    setIsDestinationEntered(true);
    setEndLocation(cityText);
    setNewLocation({
      ...newLocation,
      destinationLocationCords: {
        latitude: lat,
        longitude: lng,
      },
    });
  };

  const onDirection = () => {
    setDirecetionClicked(true);
    setMapRegion({
      pickupCords: {
        latitude: pickupLocationCords.latitude,
        longitude: pickupLocationCords.longitude,
      },
      destinationCords: {
        latitude: destinationLocationCords.latitude,
        longitude: destinationLocationCords.longitude,
      },
    });

    // console.log("Lat ", lat);
    // console.log("Lng ", lng);
    // console.log("ZipCode ", zipCode);
    // console.log("CityText ", cityText);
  };

  const enableMeter = () => {
    setDisplay(true);
    setCloseStartButton(false);
    setDirecetionClicked(false);
  };

  const saveTourHistory = async () => {
    setIsDestinationEntered(false);
    setCloseStartButton(true);
    setDisplay(false);

    try {
      const formData = {
        driverId: driverId,
        rideOrigin: startLocation,
        rideDestination: endLocation,
        distance: "3.1 Km",
        duration: "5 min",
      };
      const response = await axios.post("http:/10.0.2.2:5000/taxiRides", formData);
      if(response.status === 201){
        navigation.navigate("TaxiRides");
      }
    } catch (error) {
      Alert("Somthing when wrong!");
    }
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.topCard}></View> */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          ref={mapRef}
          // style={StyleSheet.absoluteFill}
          provider={PROVIDER_GOOGLE}
          region={pickupCords}
        >
          <MapViewDirections
            origin={pickupCords}
            destination={destinationCords}
            apikey={GOOGLE_API_KEY}
            strokeWidth={4}
            strokeColor="#0057e7"
            optimizeWaypoints={true}
            onReady={(result) => {
              mapRef.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: 30,
                  bottom: 300,
                  left: 30,
                  top: 200,
                },
              });
            }}
          />
          <Marker
            coordinate={pickupCords}
            title="Marker"
            image={imagePath.iconCurrentLocation}
          />
          <Marker
            coordinate={destinationCords}
            image={imagePath.iconDestinationLocation}
          />
        </MapView>
        {!display && (
          <View style={styles.searchField}>
            <AddressComponents
              placheholderText="Start Location"
              fetchAddress={(lat, lng, zipCode, cityText) =>
                fetchOrginData(lat, lng, zipCode, cityText)
              }
            />
            <AddressComponents
              placheholderText="Destination"
              fetchAddress={(lat, lng, zipCode, cityText) =>
                fetchDestinationData(lat, lng, zipCode, cityText)
              }
            />
            {isDestinationEntered && (
              <View style={styles.searchButtonRow}>
                <View style={styles.directionView}>
                  <TouchableOpacity
                    style={styles.directionButton}
                    onPress={onDirection}
                  >
                    <MaterialIcons
                      name={"near-me"}
                      size={20}
                      color={"#5b5b5b"}
                      style={styles.directionIcon}
                    />
                    <Text style={styles.directionButtonText}>Direction</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.closeBtnView}>
                  {/* <TouchableOpacity style={styles.closeButton} onPress={() => {}}>
                <MaterialIcons name={"close"} size={20} color={"#5b5b5b"} />
              </TouchableOpacity> */}
                </View>
              </View>
            )}
          </View>
        )}
        {display && <View style={styles.topView}></View>}
      </View>

      {display && (
        <View style={styles.endButtonView}>
          <TouchableOpacity style={styles.endButton} onPress={saveTourHistory}>
            <Text style={styles.startButtonText}>End Tour</Text>
          </TouchableOpacity>
        </View>
      )}

      {display && (
        <View style={styles.sidePannel}>
          <CircularProgress
            value={0}
            radius={50}
            duration={500}
            rotation={90}
            // progressValueColor={"#ecf0f1"}
            maxValue={120}
            title={"KM/H"}
            // titleColor={"#ecf0f1"}
            titleStyle={{ fontWeight: "bold", padding: 0 }}
          />
        </View>
      )}

      {direcetionClicked && !closeStartButton && (
        <View style={styles.startButtonView}>
          <TouchableOpacity style={styles.startButton} onPress={enableMeter}>
            <MaterialIcons name={"navigation"} size={20} color={"white"} />
            <Text style={styles.startButtonText}>Start Tour</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topCard: {
    backgroundColor: "#fff",
    width: "100%",
    marginTop: 50,
    paddingTop: 20,
    paddingBottom: 20,
  },
  bottomCard: {
    backgroundColor: "white",
    width: "100%",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  lable: {
    marginBottom: 8,
  },
  inputStyle: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    height: 40,
    justifyContent: "center",
  },
  mapContainer: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  map: {
    width: width,
    height: height,
  },
  searchField: {
    position: "absolute",
    width: "100%",
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  topView: {
    position: "absolute",
    width: "100%",
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  searchButtonRow: {
    flexDirection: "row",
  },
  input: {
    borderColor: "#f3f6f4",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
    elevation: 2,
  },
  searchBox: {
    position: "absolute",
    marginTop: Platform.OS === "ios" ? 40 : height / 4,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  directionView: {
    width: width / 3,
    marginTop: 20,
    marginBottom: 10,
  },
  directionButton: {
    flexDirection: "row",
    backgroundColor: "#f3f6f4",
    width: "100%",
    alignSelf: "center",
    borderRadius: 20,
    padding: 5,
    elevation: 4,
  },
  closeBtnView: {
    width: width / 6,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
  },
  closeButton: {
    backgroundColor: "#f3f6f4",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    padding: 5,
    elevation: 4,
  },
  directionIcon: {
    marginLeft: 5,
  },
  directionButtonText: {
    color: "#5b5b5b",
    paddingRight: 10,
    paddingLeft: 10,
  },
  startButtonView: {
    justifyContent: "center",
    alignItems: "center",
  },
  startButton: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    width: 140,
    position: "absolute",
    bottom: 120,
    height: 50,
    backgroundColor: "#5588ff",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 9,
  },
  startButtonText: {
    color: "#fff",
    fontSize: 18,
    paddingLeft: 5,
  },
  endButtonView: {
    justifyContent: "center",
    alignItems: "center",
  },
  endButton: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    width: 100,
    position: "relative",
    bottom: 600,
    height: 50,
    backgroundColor: "#f44336",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 9,
  },
  sidePannel: {
    position: "absolute",
    top: 120,
    right: 20,
    // width: 150,
    // height: 150,
    borderRadius: Math.round((width + height) / 2),
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eeeeee",
    elevation: 5,
  },
  meterView: {},
});

export default RoadMap;
