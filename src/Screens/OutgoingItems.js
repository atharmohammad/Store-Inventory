import React from 'react';
import { Text } from "react-native-elements";
import { TouchableOpacity } from "react-native";

export default function OutgoingItems(props) {
  return (
    <>
      <Text>OutgoingItems</Text>
      <TouchableOpacity
      onPress={()=>props.navigation.navigate("MainMenu")}>
        <Text>MainMenu</Text>
      </TouchableOpacity>
    </>
  );
}
