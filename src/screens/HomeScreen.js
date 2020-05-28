import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log(props);

  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button 
        title="Components Screen"
        onPress={() => props.navigation.navigate("Components")}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>List Screen</Text>
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
