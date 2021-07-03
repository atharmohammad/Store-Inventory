import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Tile , Icon} from "react-native-elements";

export default function BottomOption(props) {
  return (
    <View style={classes.view}>
      <Icon name={props.icon} type='ionicon' name={props.icon} color="#fff"></Icon>
      <Text style={classes.text}>{props.title}</Text>
    </View>
  );
}

const classes = StyleSheet.create({
  view: {
    height: 60,
    width: 80,
    backgroundColor: "#f58a42",
    display: "flex",
    justifyContent: "center",
    marginHorizontal: 3,
    marginTop:10,
    paddingBottom:6,
    paddingTop:4
  },
  text:{
    color: "#fff",
    textAlign:'center',
    marginTop:6,
  }
});
