import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { Logout } from "../store/actions";

export default function Profile() {
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Logout());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        mode="contained"
        onPress={submit}
        style={{ marginTop: 20 }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "green",
  },
});

// const Profile = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>My Profile</Text>
//       <Button onPress={() => navigation.navigate("Test")} title="Move" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
// });

// export default Profile;
