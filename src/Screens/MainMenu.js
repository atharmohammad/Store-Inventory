import React from "react";
import { Text } from "react-native-elements";
import { TouchableOpacity, ScrollView } from "react-native";
import MainMenu from "../Components/MainMenu/MainMenu"

export default function Compare(props) {
  return (
    <ScrollView
      style={{
        backgroundColor: "#fff",
        height: "100%",
      }}
    >
      <MainMenu navigation={props.navigation}/>
    </ScrollView>
  );
}
