import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
const { height, width } = Dimensions.get("window");

const RelationDetails = ({ navigation, route }) => {
  const [name, setName] = useState(null);
  const [type, setType] = useState(null);
  const [number, setNumber] = useState(null);
  const [relation, setRelation] = useState({});

  const userId = useSelector((state) => state.AuthReducers.userDetails._id);
  const relationId = useSelector(
    (state) => state.AuthReducers.userDetails.relationDetailsId
  );

  useEffect(() => {
    getContactDetails();
  }, []);

  const getContactDetails = () => {
    axios
      .get(`https://drivecare.herokuapp.com/relation/getDetails/${relationId}`)
      .then((response) => {
        console.log("response : ", response.data);
        setRelation(response.data);
        setName(response.data.fullName);
        setType(response.data.type);
        setNumber(response.data.phoneNumber);
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Failed", "Failed to load emergency contact", [
          { text: "OK" },
        ]);
      });
  };

  const saveRelation = () => {
    if (Object.keys(relation).length !== 0) {
      if (name === null && type === null && number === null) {
        Alert.alert("Failed", "You did not update any field", [{ text: "OK" }]);
      } else {
        const updatedDetails = {};

        if (relation.fullName !== name) {
          updatedDetails["fullName"] = name;
        }
        if (relation.type !== type) {
          updatedDetails["type"] = type;
        }
        if (relation.phoneNumber !== number) {
          updatedDetails["phoneNumber"] = number;
        }
        console.log("updatedDetails : ", updatedDetails);
        axios
          .put(
            `https://drivecare.herokuapp.com/relation/updateDetails/${relationId}`,
            updatedDetails
          )
          .then((response) => {
            console.log(response);
            Alert.alert(
              "Successfully saved",
              "Your emergency contact has been updated",
              [{ text: "OK" }]
            );
            getContactDetails();
          })
          .catch((err) => {
            console.log(err);
            Alert.alert("Failed", "Failed to update emergency contact", [
              { text: "OK" },
            ]);
          });
      }
    } else {
      const relationDetails = {
        fullName: name,
        type,
        phoneNumber: number,
        userId: userId,
      };

      axios
        .post(
          `https://drivecare.herokuapp.com/relation/addDetails`,
          relationDetails
        )
        .then((response) => {
          console.log(response);
          Alert.alert(
            "Successfully saved",
            "Your emergency contact has been saved",
            [{ text: "OK" }]
          );
          getContactDetails();
        })
        .catch((err) => {
          console.log(err);
          Alert.alert("Failed", "Failed to save emergency contact", [
            { text: "OK" },
          ]);
        });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.componentContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../images/PikPng.com_customer-icon-png_1935011.png")}
            style={styles.image}
          />
        </View>

        <Text style={styles.textAcc}>Add Emergency Contact Details</Text>
        <View style={styles.textInputContainer}>
          <View style={styles.inputboxCon}>
            <View style={styles.labelCon}>
              <Text style={styles.labelName}>Name </Text>
            </View>
            <View style={styles.inputFieldCon}>
              <TextInput
                label="name"
                mode="outlined"
                style={styles.textInputStyle}
                defaultValue={relation.fullName}
                onChangeText={(val) => setName(val)}
              />
            </View>
          </View>
          <View style={styles.inputboxCon}>
            <View style={styles.labelCon}>
              <Text style={styles.labelName}>Relation Type </Text>
            </View>
            <View style={styles.inputFieldCon}>
              <TextInput
                label="name"
                mode="outlined"
                style={styles.textInputStyle}
                defaultValue={relation.type}
                onChangeText={(val) => setType(val)}
              />
            </View>
          </View>
          <View style={styles.inputboxCon}>
            <View style={styles.labelCon}>
              <Text style={styles.labelName}>Mobile No </Text>
            </View>
            <View style={styles.inputFieldCon}>
              <TextInput
                label="name"
                mode="outlined"
                keyboardType="numeric"
                defaultValue={relation.phoneNumber}
                style={styles.textInputStyle}
                onChangeText={(val) => setNumber(val)}
              />
            </View>
          </View>
          <Text style={{ textAlign: "center" }}>
            * Once you add the emergency contact details you can update/view in
            here by clicking save after updating
          </Text>
          <TouchableOpacity
            mode="contained"
            onPress={saveRelation}
            style={styles.touchableOpacityStyle}
          >
            <Text style={styles.touchableTextStyle}>Save</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.touchableOpacityView}></View>
      </View>
    </View>
  );
};

export default RelationDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width / 23,
    paddingTop: height / 60,
  },
  title: {
    fontSize: 15,
    color: "#f7797d",
  },
  componentContainer: {
    paddingTop: height / 90,
    width: "100%",
    height: "75%",
  },
  textAcc: {
    fontSize: 19,
    marginBottom: "0.3%",
    fontWeight: "bold",
  },
  textInputContainer: {
    width: "100%",
    height: "20%",
    marginTop: "10%",
  },
  usernameContainer: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
  },
  passwordContainer: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
  },
  textInputStyle: {
    width: "100%",
    height: "55%",
    borderRadius: 9,
    borderWidth: 1,
  },
  iconStyles: {
    width: "10%",
    height: "100%",
  },
  textInputViewStyle: {
    width: "90%",
    marginLeft: "2%",
  },
  textStyleHeader: {
    fontSize: 25,
    fontWeight: "bold",
    color: "gray",
  },
  textStyleHeaderType: {
    fontSize: 80,
    marginBottom: "19%",
    fontWeight: "bold",
    color: "gray",
  },
  touchableOpacityStyle: {
    width: "100%",
    height: "40%",
    borderColor: "#39367e",
    borderRadius: 9,
    borderWidth: 1,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginTop: "8%",
  },
  touchableOpacityView: {
    width: "100%",
    alignItems: "center",
  },
  touchableTextStyle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  inputboxCon: {
    width: "100%",
    height: "45%",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "4%",
  },
  labelCon: {
    width: "30%",
    backgroundColor: "#39367e",
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  inputFieldCon: {
    width: "70%",
  },
  labelName: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  textInputStyle: {
    width: "100%",
    height: "100%",
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
    borderWidth: 1,
    borderColor: "#39367e",
  },
  needAcctxt: {
    marginTop: "8%",
  },
  imageContainer: {
    height: "45%",
    marginBottom: "1%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "60%",
    height: "100%",
  },
});
