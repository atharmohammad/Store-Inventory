import React from 'react';
import { Text } from "react-native-elements";
import { TouchableOpacity } from "react-native";

export default function Help(props) {
  return (
    <>
      <Text>Help</Text>
      <TouchableOpacity
      onPress={()=>props.navigation.navigate("MainMenu")}>
        <Text>MainMenu</Text>
      </TouchableOpacity>
    </>
  );
}
