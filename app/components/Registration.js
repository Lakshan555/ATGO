import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";

import DropDownPicker from "react-native-dropdown-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { StoreRegisterDetails } from "../store/actions";

const { height, width } = Dimensions.get("window");

const Registration = ({ navigation, route }) => {
  const [taxiValue, setTaxiOption] = useState(null);
  const [taxiOpen, setTaxiOpen] = useState(false);
  const [isDrver, setTaxiAskOption] = useState([
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ]);
  const [istaxiDriver, setIsDriver] = useState("no");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [nic, setNic] = useState("");
  const [DOB, setDob] = useState(0);
  const [licenseNo, setLicenseNo] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [password, setPassword] = useState("");
  const [drivingProvince, setDrivingProvince] = useState("");
  const [drivingDistrict, setDrivingDistrict] = useState("");

  const dispatch = useDispatch();

  const ontaxiOpen = useCallback(() => {
    setCompanyOpen(false);
  }, []);

  const goToNextPage = () => {
    const registrationDetails = {
      fullName: fullName.trim(),
      email: email.trim(),
      nic: nic.trim(),
      DOB: DOB,
      licenseNo: licenseNo.trim(),
      phoneNumber: phoneNumber,
      password: password.trim(),
      drivingDistrict: drivingDistrict.trim(),
      drivingProvince: drivingProvince.trim(),
      isTaxiDriver: istaxiDriver.trim(),
    };

    console.log("registrationDetails : ", registrationDetails);
    dispatch(StoreRegisterDetails(registrationDetails));
    navigation.navigate("vehicleRegister");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.topic}>Personal Details</Text>
      <View style={styles.personalConatiner}>
        <View style={styles.inputboxCon}>
          <View style={styles.labelCon}>
            <Text style={styles.labelName}>Name </Text>
          </View>
          <View style={styles.inputFieldCon}>
            <TextInput
              label="name"
              mode="outlined"
              style={styles.textInputStyle}
              onChangeText={(val) => setFullName(val)}
            />
          </View>
        </View>
        <View style={styles.inputboxCon}>
          <View style={styles.labelCon}>
            <Text style={styles.labelName}>NIC </Text>
          </View>
          <View style={styles.inputFieldCon}>
            <TextInput
              label="name"
              mode="outlined"
              style={styles.textInputStyle}
              onChangeText={(val) => setNic(val)}
            />
          </View>
        </View>
        <View style={styles.inputboxCon}>
          <View style={styles.labelCon}>
            <Text style={styles.labelName}>Email </Text>
          </View>
          <View style={styles.inputFieldCon}>
            <TextInput
              label="name"
              mode="outlined"
              style={styles.textInputStyle}
              onChangeText={(val) => setEmail(val)}
            />
          </View>
        </View>
        <View style={styles.inputboxCon}>
          <View style={styles.labelCon}>
            <Text style={styles.labelName}>Date of Birth</Text>
          </View>
          <View style={styles.inputFieldCon}>
            <TextInput
              label="name"
              mode="outlined"
              style={styles.textInputStyle}
              onChangeText={(val) => setDob(val)}
              keyboardType={"numeric"}
            />
          </View>
        </View>
        <View style={styles.inputboxCon}>
          <View style={styles.labelCon}>
            <Text style={styles.labelName}>License Number </Text>
          </View>
          <View style={styles.inputFieldCon}>
            <TextInput
              label="name"
              mode="outlined"
              style={styles.textInputStyle}
              onChangeText={(val) => setLicenseNo(val)}
            />
          </View>
        </View>

        <View style={styles.inputboxCon}>
          <View style={styles.labelCon}>
            <Text style={styles.labelName}>Mobile Number</Text>
          </View>
          <View style={styles.inputFieldCon}>
            <TextInput
              label="name"
              mode="outlined"
              style={styles.textInputStyle}
              onChangeText={(val) => setPhoneNumber(val)}
              keyboardType={"numeric"}
            />
          </View>
        </View>
        <View style={styles.inputboxCon}>
          <View style={styles.labelCon}>
            <Text style={styles.labelName}>Password</Text>
          </View>
          <View style={styles.inputFieldCon}>
            <TextInput
              label="name"
              mode="outlined"
              style={styles.textInputStyle}
              onChangeText={(val) => setPassword(val)}
            />
          </View>
        </View>
        <View style={styles.inputboxConTaxi}>
          <View style={styles.labelConTaxi}>
            <Text style={styles.labelName}>Are You a Taxi Driver</Text>
          </View>
          <View style={styles.inputFieldConTaxi}>
            <DropDownPicker
              style={styles.dropdown}
              open={taxiOpen}
              value={taxiValue} //taxiValue
              items={isDrver}
              setOpen={setTaxiOpen}
              setValue={setTaxiOption}
              setItems={setTaxiAskOption}
              placeholder="Select an Option"
              placeholderStyle={styles.placeholderStyles}
              zIndex={3000}
              onChangeValue={(val) => setIsDriver(val)}
              zIndexInverse={1000}
            />
          </View>
        </View>
        {istaxiDriver === "yes" ? (
          <>
            <View style={styles.inputboxConTaxiOpt}>
              <View style={styles.labelConTaxi}>
                <Text style={styles.labelName}>
                  Provice do you usullay hire
                </Text>
              </View>
              <View style={styles.inputFieldConTaxi}>
                <TextInput
                  label="name"
                  mode="outlined"
                  style={styles.textInputStyle}
                  onChangeText={(val) => setDrivingProvince(val)}
                />
              </View>
            </View>
            <View style={styles.inputboxConTaxiOpt}>
              <View style={styles.labelConTaxi}>
                <Text style={styles.labelName}>
                  District do you usullay hire
                </Text>
              </View>
              <View style={styles.inputFieldConTaxi}>
                <TextInput
                  label="name"
                  mode="outlined"
                  style={styles.textInputStyle}
                  onChangeText={(val) => setDrivingDistrict(val)}
                />
              </View>
            </View>
          </>
        ) : null}

        <View></View>
      </View>
      <View style={styles.nextTxtCon}>
        <TouchableOpacity onPress={() => goToNextPage()}>
          <Text style={styles.nextTxt}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width / 17,
    paddingBottom: height / 13,
    marginTop: height / 28,
  },
  textInputStyle: {
    width: "100%",
    height: "100%",
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
    borderWidth: 1,
    borderColor: "#39367e",
  },
  inputboxCon: {
    width: "100%",
    height: "8.5%",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "4%",
  },
  inputboxConTaxi: {
    width: "100%",
    height: "10%",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "4%",
  },
  inputboxConTaxiOpt: {
    width: "100%",
    height: "8.5%",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "4%",
  },
  labelCon: {
    width: "20%",
    backgroundColor: "#39367e",
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  inputFieldCon: {
    width: "80%",
  },
  labelConTaxi: {
    width: "40%",
    backgroundColor: "#39367e",
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  inputFieldConTaxi: {
    width: "60%",
  },
  topic: {
    fontSize: 30,
    fontWeight: "bold",
    color: "gray",
    marginBottom: "7%",
  },
  labelName: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  taxiDriverAsk: {
    fontSize: 17,
  },
  dropdown: {
    height: "100%",
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    borderColor: "#39367e",
  },
  nextTxtCon: {
    width: "100%",
    marginTop: "17%",
  },
  nextTxt: {
    textAlign: "right",
    fontSize: 30,
    fontWeight: "bold",
    color: "gray",
  },
  personalConatiner: {
    width: "100%",
    height: "85%",
  },
});
