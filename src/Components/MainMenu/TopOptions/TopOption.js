import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Tile , Icon} from "react-native-elements";

export default function TopOption(props) {
  return (
    <View style={classes.view}>
      <Icon
        name={props.icon}
        type="ionicon"
        name={props.icon}
        color="#fff"
        size={35}
      ></Icon>
      <Text style={classes.text}>{props.title}</Text>
    </View>
  );
}

const classes = StyleSheet.create({
  view: {
    height: 127,
    width: 165,
    backgroundColor: "#f58a42",
    display: "flex",
    justifyContent: "center",
    marginHorizontal: 7,
    marginTop: 12,
  },
  text:{
    color: "#fff",
    textAlign:'center',
    marginTop:6 
  }
});
