import React,{useState,useEffect} from 'react';
import { Text,Icon } from "react-native-elements";
import { TouchableOpacity,StyleSheet,View,ScrollView } from "react-native";
import axios from "../Axios/axios"

export default function Notes(props) {

  useEffect(async()=>{
    try{
      const allNotes = await axios.get('/notes');
      console.log(allNotes)
    }catch(e){
      console.log(e);
    }
  },[])

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
