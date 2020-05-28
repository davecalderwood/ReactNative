import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {

    const friends = [
        {name: 'Joe', key: '1'},
        {name: 'Brice', key: '2'},
        {name: 'Sam', key: '3'},
        {name: 'Jess', key: '4'},
        {name: 'Anna', key: '5'},
        {name: 'Beth', key: '6'},
        {name: 'Jeff', key: '7'},
        {name: 'Kyle', key: '8'},
        {name: 'Eric', key: '9'},
    ];

    friends.sort(function(a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase()
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

  return (
      <View>
          <FlatList 
            data={friends} 
            renderItem={({item}) => {
                return <Text>{item.name}</Text>
            }} 
          />
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default ListScreen;
