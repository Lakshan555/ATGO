import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome5, Feather, Fontisto } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

export default function NewPrescription() {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.header}>New Prescription</Text>
      </View>
      <View>
        <Text>New Prescription</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {},
  header: {},
});
