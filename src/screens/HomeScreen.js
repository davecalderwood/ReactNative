import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button 
        title="Components Screen"
        onPress={() => navigation.navigate("Components")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>List Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Image")}>
        <Text>Image Screen</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
