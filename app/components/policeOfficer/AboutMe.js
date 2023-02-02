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
  

export default function AboutMe() {

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.header}>About Me</Text>
      </View>
      <View>
        <Text>About Me</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerView: {},
    header: {},
  });