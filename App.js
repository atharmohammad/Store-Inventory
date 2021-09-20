import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import {NavigationContainer} from "@react-navigation/native"
import RootNavigator from "./src/Navigators/RootNavigator"
import axios from 'axios'

export default function App() {

  // useEffect(async()=>{
  //   try{
  //     const res = await axios.get('http://192.168.0.112:8080/');
  //     console.log(res.data);
  //   }catch(e){
  //     console.log(e);
  //   }
  // },[])

  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  );
}
