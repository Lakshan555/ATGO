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

export default function NewPrescription({navigation}) {

  const [symptems, setSymptems] = useState("");
  const [labTest, setLabTest] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <TextInput
          placeholder="Symtoms"
          style={styles.input}
          onChangeText={setSymptems}
          value={symptems}
        />
        <Text
          style={{
            fontSize: 14,
            paddingLeft: 10,
            marginTop: 20,
            fontWeight: "bold",
          }}
        >
          Rx
        </Text>
        <TouchableOpacity onPress={() => {navigation.navigate("AddDrug");}}>
          <View style={styles.addButton}>
            <FontAwesome5 name="plus" size={20} color="white" />
            <Text style={{ paddingLeft: 50, color: "white" }}>ADD DRUGS</Text>
          </View>
        </TouchableOpacity>
        <TextInput
          placeholder="Lab Test"
          style={styles.inputArea}
          onChangeText={setLabTest}
          value={labTest}
          height={100}
        />
        <TextInput
          placeholder="Note"
          style={styles.inputArea}
          onChangeText={setNotes}
          value={notes}
          height={80}
        />
        <TouchableOpacity style={styles.saveBtnView}>
          <View style={styles.saveButton}>
            <Text style={{ color: "white", fontSize: 18 }}>Save</Text>
          </View>
        </TouchableOpacity>
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
  saveBtnView:{
    marginTop: 40,
  },
  saveButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    margin: 10,
    backgroundColor: "#073763",
    borderRadius: 10,
  },
});
