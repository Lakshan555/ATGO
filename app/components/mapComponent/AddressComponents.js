import React from "react";
import { StyleSheet, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "../../../environments";

const AddressComponents = ({ placheholderText, fetchAddress }) => {
  const onPressAddress = (data, details) => {
    // console.log("details==>>>>", details)

    let resLength = details.address_components;
    let zipCode = "";

    let filtersResCity = details.address_components.filter((val) => {
      if (val.types.includes("locality") || val.types.includes("sublocality")) {
        return val;
      }
      if (val.types.includes("postal_code")) {
        let postalCode = val.long_name;
        zipCode = postalCode;
      }
      return false;
    });

    let dataTextCityObj =
      filtersResCity.length > 0
        ? filtersResCity[0]
        : details.address_components[
            resLength > 1 ? resLength - 2 : resLength - 1
          ];

    let cityText =
      dataTextCityObj.long_name && dataTextCityObj.long_name.length > 17
        ? dataTextCityObj.short_name
        : dataTextCityObj.long_name;

    // console.log("zip cod found", zipCode)
    // console.log("city namte", cityText)

    const lat = details.geometry.location.lat;
    const lng = details.geometry.location.lng;
    fetchAddress(lat, lng, zipCode, cityText);
  };

  return (
    <>
      <GooglePlacesAutocomplete
        styles={{
          textInput: styles.input,
          textInputContainer: styles.inputContainer,
        }}
        placeholder={placheholderText}
        onPress={onPressAddress}        
        fetchDetails={true}
        query={{
          key: GOOGLE_API_KEY,
          language: "en",
        }}
        enableHighAccuracyLocation={true}

      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "#f3f6f4",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
    elevation: 2,
  },
  inputContainer: {
    width: "100%",
  },
});

export default AddressComponents;
