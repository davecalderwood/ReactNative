import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const name = 'David';
    const greeting = 'Welcome to my first React-Native project';

  return (
      <View>
          <Text style={styles.textStyle}>This is the Components Screen</Text>
          <Text style={styles.greetingStyle}>{greeting}</Text>
      </View>
  )
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    textAlign: "center"
  },
  greetingStyle: {
    fontSize: 16,
    textAlign: "center"
  },

});

export default ComponentsScreen;
