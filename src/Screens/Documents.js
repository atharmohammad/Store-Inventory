import React from 'react';
import { Text } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import axios from "../Axios/axios"

export default function Documents(props) {
  return (
    <>
      <Text>Documents</Text>
      <TouchableOpacity
      onPress={()=>props.navigation.navigate("MainMenu")}>
        <Text>MainMenu</Text>
      </TouchableOpacity>
    </>
  );
}
