import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { LogoutUser } from "../store/actions";

const { height, width } = Dimensions.get("window");

const DATA = [
  {
    id: 1,
    title: "Profile",
    name: "user",
    component: "UserProfile",
  },

  {
    id: 2,
    title: "Relation Details",
    name: "person",
    component: "RelationDetails",
  },
];

const CardComponent = ({ title, name, navigation, component, key }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(component)} key={key}>
      <View style={styles.cardContent}>
        <AntDesign
          name={name}
          size={30}
          style={styles.optionIcon}
          color="#39367e"
        />
        <View style={styles.titleContainer}>
          <Text style={styles.optinTxt}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const MoreOptions = ({ navigation }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.AuthReducers.userDetails._id);

  console.log("user id : ", userId);
  const renderItem = ({ item }) => (
    <CardComponent
      title={item.title}
      name={item.name}
      component={item.component}
      navigation={navigation}
      key={item.id}
    />
  );

  const LogoutUserSystem = async (id) => {
    await axios
      .put(`https://drivecare.herokuapp.com/user/logOutUser/${id}`)
      .then(async (result) => {
        console.log("result login : ", result.data);
        if (result) {
          dispatch(LogoutUser());
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => LogoutUserSystem(userId)}>
        <View style={styles.cardContent}>
          <AntDesign
            name="sign-out"
            size={30}
            style={styles.optionIcon}
            color="#39367e"
          />
          <View style={styles.titleContainer}>
            <Text style={styles.optinTxt}>Log-Out</Text>
          </View>
        </View>
      </TouchableOpacity>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      />
    </View>
  );
};

export default MoreOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width / 23,
    paddingTop: height / 60,
  },
  cardContent: {
    width: "100%",
    marginTop: height / 45,
    borderRadius: 9,
    borderColor: "#39367e",
    borderWidth: 0.4,
    flexDirection: "row",
  },
  optionIcon: {
    paddingLeft: width / 30,
    paddingVertical: height / 40,
    paddingRight: width / 16,
  },
  optinTxt: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    paddingLeft: "8%",
  },
  titleContainer: {
    justifyContent: "center",
    borderLeftWidth: 0.4,
    borderLeftColor: "#39367e",
  },
});
