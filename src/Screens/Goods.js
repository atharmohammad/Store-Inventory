import React, { useState, useEffect } from "react";
import { Text, Input,Icon } from "react-native-elements";
import { TouchableOpacity, FlatList, ScrollView,StyleSheet,View } from "react-native";
import * as SQLite from "expo-sqlite";


export default function Goods(props) {
  const db = SQLite.openDatabase("Store_Inventory");
  const [allGoods, setAllGoods] = useState(null);

  // useEffect(() => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       "CREATE TABLE IF NOT EXISTS goods (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)"
  //     );
  //     tx.executeSql(
  //       "SELECT * FROM goods",
  //       null,
  //       (txObj, { rows: { _array } }) => {
  //         console.log(_array);
  //         setAllGoods(_array);
  //       },
  //       (txObj, err) => {
  //         console.log(err);
  //       }
  //     );
  //   });
  // }, []);

  // const addGoods = () => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       "INSERT INTO goods (name) values (?)",
  //       [goods],
  //       (txObj, resultSet) => {
  //         console.log(resultSet.insertId);
  //       }
  //     );
  //   });
  // };

  // const drop = ()=>{
  //   db.transaction(tx=>{
  //     tx.executeSql("DROP TABLE goods")
  //   })
  // }

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
    height:"100%"
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