import React from 'react';
import { Text,Icon } from "react-native-elements";
import { TouchableOpacity,StyleSheet,View,ScrollView } from "react-native";

export default function Notes(props) {
  return (
    <View  style={styles.head}>
      <ScrollView>
        <Icon
          type="ionicon"
          name="clipboard"
          color="orange"
          size={160}
          style={{ opacity: 0.6, marginTop: "40%" }}
        />
      </ScrollView>
       <TouchableOpacity onPress={() => props.navigation.navigate("AddNotes")}>
        <Icon
          type="ionicon"
          name="add-circle"
          color="orange"
          size={80}
          style={styles.addIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addIcon: {
    alignSelf: "flex-end",
    marginHorizontal:5
  },
  head: { 
    backgroundColor: "#fff" , 
    display:'flex',
    flex:1
  },
})
