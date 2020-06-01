import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {

  return (
    <View>
        <ImageDetail 
            title="forest" 
            imageSource={require('../../assets/forest.jpg')} 
            imageRating={9} 
        />
        <ImageDetail 
            title="beach" 
            imageSource={require('../../assets/beach.jpg')} 
            imageRating={7} 
        />
        <ImageDetail 
            title="mountain" 
            imageSource={require('../../assets/mountain.jpg')} 
            imageRating={10} 
        />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }

});

export default ImageScreen;