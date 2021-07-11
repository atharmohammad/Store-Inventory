import React,{useState} from 'react';
import { Text ,Icon} from "react-native-elements";
import { TouchableOpacity,StyleSheet,View } from "react-native";
import { ScrollView } from 'react-native';

export default function Expenses(props) {

  return (
    <View style={styles.head}>
      <ScrollView>
        <Icon
            type="ionicon"
            name="card"
            size={160}
            color="orange"
            style={styles.card}
          ></Icon>
      </ScrollView>
      <TouchableOpacity onPress={() => props.navigation.navigate("AddExpense")}>
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
  head:{
    backgroundColor: "#fff" , 
    display:'flex',
    flex:1
  },
  addIcon: {
    alignSelf: "flex-end",
    marginHorizontal:5,
  },
  card:{
    opacity:0.8,
    marginTop:'40%'
  }
})
