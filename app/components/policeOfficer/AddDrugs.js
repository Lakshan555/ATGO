import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5, Feather, Fontisto } from "@expo/vector-icons";
import { addListener } from "expo-updates";

const { height, width } = Dimensions.get("window");

export default function AddDrugs({navigation}) {
  const [symptems, setSymptems] = useState("");
  const [dosage, setDosage] = useState("");
  const [frequency, setFrequency] = useState("");
  const [duration, setDuration] = useState("");
  const [quantity, setQuantity] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <TextInput
          placeholder="Drug Name"
          style={styles.input}
          onChangeText={setSymptems}
          value={symptems}
        />
        <TextInput
          placeholder="Dosage"
          style={styles.input}
          onChangeText={setDosage}
          value={dosage}
        />
        <TextInput
          placeholder="Frequency"
          style={styles.input}
          onChangeText={setFrequency}
          value={frequency}
        />
        <TextInput
          placeholder="Duration"
          style={styles.input}
          onChangeText={setDuration}
          value={duration}
        />
        <TextInput
          placeholder="Quantity"
          style={styles.input}
          onChangeText={setQuantity}
          value={quantity}
        />
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.btnSize} onPress={() => {navigation.navigate("NewPrescription");}}>
            <View style={styles.saveButton}>
              <Text style={{ color: "white", fontSize: 18 }}>Cancel</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSize}>
            <View style={styles.saveButton}>
              <Text style={{ color: "white", fontSize: 18 }}>Ok</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textView: {
    marginTop: Math.round(height / 6),
    padding: 20,
    margin: 10,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#999999",
  },
  inputArea: {
    // height: 100,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#999999",
  },
  addButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 15,
    margin: 10,
    backgroundColor: "black",
    borderRadius: 10,
  },
  btnView: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btnSize:{
    width: 150,
  },
  saveButton: {
    alignItems: "center",
    padding: 15,
    margin: 10,
    backgroundColor: "#073763",
    borderRadius: 10,
  },
});
