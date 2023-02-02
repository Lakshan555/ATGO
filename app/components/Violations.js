import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Violations = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Any Violations?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "white",
    padding: 25,
    borderLeftWidth: 10,
    borderLeftColor: "red",
    borderRadius: 10,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#76a6ef",
  },
  header: {
    fontSize: 24,
    paddingLeft: 8,
  },
  title: {
    fontSize: 16,
  },
  touchableTextStyle:{
    color:'white'
  }
});

export default Violations;
