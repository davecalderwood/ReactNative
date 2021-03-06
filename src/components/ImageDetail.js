import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = (props) => {

  return (
    <View>
        <Image source={props.imageSource} />
        <Text>{props.title}</Text>
        <Text>{props.imageRating}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ImageDetail;