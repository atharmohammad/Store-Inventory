import React from 'react';
import { Text } from "react-native-elements";
import { TouchableOpacity } from "react-native";

export default function Report(props) {
  return (
    <>
      <Text>Report</Text>
      <TouchableOpacity
      onPress={()=>props.navigation.navigate("MainMenu")}>
        <Text>MainMenu</Text>
      </TouchableOpacity>
    </>
  );
}
