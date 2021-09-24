import React, { useEffect, useState } from 'react';
import { Text,Icon } from "react-native-elements";
import { TouchableOpacity,ScrollView,View,StyleSheet } from "react-native";
import axios from "../Axios/axios"

export default function Suppliers(props) {

  const [allContacts,setAllContacts] = useState(false);

  useEffect(async()=>{
    try{
      const res = await axios.get('/contacts');
      console.log(res);
    }catch(e){
      console.log(e);
    }
  },[])

  return (
    <View style={styles.head}>
    <ScrollView style={styles.scrollView}>
      {allContacts ? null : (
        <Icon
          name="person-remove"
          type="ionicon"
          color="#f58a42"
          size={160}
          style={styles.mainIcon}
        ></Icon>
      )}
    </ScrollView>
    <TouchableOpacity onPress={() => props.navigation.navigate("AddContacts",{parent:"Costumer"})}>
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
  mainIcon:{
    marginTop:'40%',
    opacity:0.8
  }
});