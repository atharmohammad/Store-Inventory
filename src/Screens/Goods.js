import React, { useState, useEffect } from "react";
import { Text, Input,Icon } from "react-native-elements";
import { TouchableOpacity, FlatList, ScrollView,StyleSheet,View } from "react-native";
import AddExpense from "../Components/Expenses/AddExpense";


export default function Goods(props) {
  const [allGoods, setAllGoods] = useState(null);

  return (
    <View style={styles.head}>
      <ScrollView style={styles.scrollView}>
        {allGoods ? null : (
          <Icon
            name="gift"
            type="ionicon"
            color="#f58a42"
            size={160}
            style={styles.gift}
          ></Icon>
        )}
      </ScrollView>
      <TouchableOpacity onPress={() => props.navigation.navigate("AddGoods")}>
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
  head: { 
    backgroundColor: "#fff" , 
    display:'flex',
    flex:1
  },
  addIcon: {
    alignSelf: "flex-end",
    marginHorizontal:5
  },
  scrollView: {
    backgroundColor: "#fff",
  },
  gift:{
    marginTop:'40%',
    opacity:0.8
  }
});