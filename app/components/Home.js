import React from "react";
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
} from "react-native";
import { Avatar } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const Home = ({ navigation, route }) => {
  const [isShow, setIsShow] = useState(false);
  const [vehicleNo, setVehicleNo] = useState(false);
  const [image, setImage] = useState(null);

  const saveVehicleNo = () => {
    setIsShow(false);
  };
  const closeVehicleNo = () => {
    setIsShow(false);
    setImage(null);
  };

  const uploadImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result.assets[0].uri);

    setImage(result.assets[0].uri);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <Modal animationType="fade" transparent={true} visible={isShow}>
          <View style={styles.popup}>
            <View style={styles.noInputCon}>
              <Text style={styles.popupTopic}>
                Enter vehicle registration number
              </Text>

              <TextInput
                style={styles.reviewTxtIn}
                placeholder="CAB-****"
                onChangeText={(val) => setVehicleNo(val)}
              />
              <Text style={styles.popupTopicImage}>
                Enter an image of vehicle that faced to an accident
              </Text>
              <TouchableOpacity
                style={styles.accidentImage}
                onPress={uploadImage}
              >
                {image === null ? (
                  <>
                    <AntDesign name="addfile" size={30} color="black" />
                    <Text>Add Image</Text>
                  </>
                ) : (
                  <Image source={{ uri: image }} style={styles.defaultImage} />
                )}
              </TouchableOpacity>
            </View>

            <View style={styles.closeBtnCon}>
              <View style={styles.closeCol}>
                <TouchableOpacity
                  style={styles.popupCloseBtn}
                  onPress={() => saveVehicleNo()}
                >
                  <Text style={styles.popupCloseTxt}>Save & Close</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.closeCol}>
                <TouchableOpacity
                  style={styles.popupCloseBtn}
                  onPress={() => closeVehicleNo()}
                >
                  <Text style={styles.popupCloseTxt}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
      <Text style={styles.textAcc}>Any Accident Happened To You ?</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.sosBtn}
          onPress={() => {
            console.log("Accident happened");
          }}
        >
          <Avatar.Image
            style={styles.sosAvatar}
            size={320}
            source={require("../images/sos.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.handoverContainer}>
        <TouchableOpacity
          style={styles.handOverBtn}
          onPress={() => navigation.navigate("HandOverVehicle")}
        >
          <Text style={styles.handOverText}>Hand Over Your Vehicle</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.reportAccBtn}
          onPress={() => setIsShow(true)}
        >
          <Text style={styles.reportAccText}>report an Accident</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.reportAccContainer}>
        <TouchableOpacity
          style={styles.reportAccBtn}
          onPress={() => {
            console.log("To be reported an accident");
          }}
        >
          <Text style={styles.reportAccText}>report an Accident</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width / 23,
    paddingTop: height / 60,
  },
  btnContainer: {
    height: "52%",
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  sosBtn: {
    height: "100%",
    width: "100%",
    borderRadius: 190,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    // overflow: "hidden",
    // shadowColor: "black", // IOS
    // shadowOffset: { height: 1, width: 1 }, // IOS
    // shadowOpacity: 10, // IOS
    // shadowRadius: 10, //IOS
    // elevation: 20, // Android
  },
  sosText: {
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
    shadowColor: "black", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 10, // IOS
    shadowRadius: 10, //IOS
    elevation: 100, // Android
  },
  textAcc: {
    fontSize: 19,
    marginBottom: "5%",
    fontWeight: "bold",
  },
  handoverContainer: {
    marginTop: "20%",
    height: "100%",
    width: "100%",
    marginBottom: "5%",
  },
  handOverBtn: {
    height: 50,
    width: "100%",
    borderRadius: 20,
    borderWidth: 3,
    justifyContent: "center",
    marginBottom: "5%",
    borderColor: "#39367e",
  },
  handOverText: {
    textTransform: "uppercase",
    color: "#39367e",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  reportAccContainer: {
    // marginTop: "10%",
    height: "100%",
    width: "100%",
  },
  reportAccBtn: {
    height: 50,
    width: "100%",
    borderRadius: 20,
    borderWidth: 3,
    justifyContent: "center",
    borderColor: "#39367e",
  },
  reportAccText: {
    textTransform: "uppercase",
    color: "#39367e",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  sosAvatar: {
    backgroundColor: "white",
    borderColor: "red",
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    shadowColor: "black", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 10, // IOS
    shadowRadius: 10, //IOS
    elevation: 100, // Android
  },
  popup: {
    alignSelf: "center",
    top: height / 4,
    width: "80%",
    height: "50%",
    borderRadius: 10,
    opacity: 1,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 40,
    backgroundColor: "white",
  },
  popupTopic: {
    fontSize: 17,
    fontWeight: "bold",
  },
  popupTopicImage: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: "2%",
  },
  popupCloseBtn: {
    borderColor: "gray",
    borderWidth: 0.4,
    borderRadius: 9,
    width: "30%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "1%",
  },
  closeBtnCon: {
    flexDirection: "row",
    width: "100%",
    height: "50%",
    alignContent: "center",
    columnGap: 5,
  },
  popupCloseBtn: {
    borderColor: "gray",
    borderWidth: 0.4,
    borderRadius: 9,
    width: "80%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "5%",
  },
  reviewTxtIn: {
    borderColor: "gray",
    borderWidth: 0.4,
    borderRadius: 9,
    width: "90%",
    marginTop: "6%",
    padding: "3%",
  },
  noInputCon: {
    marginTop: "30%",
    width: "100%",
    height: "70%",
    alignItems: "center",
  },
  closeCol: {
    width: "50%",
    alignItems: "center",
    marginTop: "15%",
  },
  accidentImage: {
    width: "90%",
    height: "50%",
    marginTop: "2%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 9,
  },
  defaultImage: {
    width: "100%",
    height: "100%",
    borderRadius: 9,
  },
});

export default Home;
