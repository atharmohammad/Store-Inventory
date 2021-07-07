import React, { useState, useEffect } from "react";
import { Text, Input } from "react-native-elements";
import { TouchableOpacity, FlatList, View } from "react-native";
import * as SQLite from "expo-sqlite";

export default function Goods(props) {
  const db = SQLite.openDatabase("Store_Inventory");
  const [goods, setGoods] = useState("");
  const [allGoods, setAllGoods] = useState(null);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS goods (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)"
      );
      tx.executeSql(
        "SELECT * FROM goods",
        null,
        (txObj, { rows: { _array } }) => {
          console.log(_array);
          setAllGoods(_array);
        },
        (txObj, err) => {
          console.log(err);
        }
      );
    });
  }, []);

  const addGoods = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO goods (name) values (?)",
        [goods],
        (txObj, resultSet) => {
          console.log(resultSet.insertId);
        }
      );
    });
  };

  const drop = ()=>{
    db.transaction(tx=>{
      tx.executeSql("DROP TABLE goods")
    })
  }

  return (
    <>
      <Text>Goods</Text>
      <Input value={goods} onChangeText={(value) => setGoods(value)} />
      <TouchableOpacity onPress={addGoods}>
        <Text>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={drop}>
        <Text>Drop_Table</Text>
      </TouchableOpacity>
      
      <View>
        <FlatList
          data={allGoods}
          renderItem={({item}) => <Text>{item["name"]}</Text>}
          keyExtractor={(item) => item["id"]}
        />
      </View>
    </>
  );
}
