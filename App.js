import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import {NavigationContainer} from "@react-navigation/native"
import RootNavigator from "./src/Navigators/RootNavigator"
import AuthNavigators from './src/Navigators/AuthNavigators';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';


const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@shop')
    return value;
  } catch(e) {
    console.log(e);
  }
}


export default function App() {

  const [isSignin,setSign] = useState(false);

  useEffect(async()=>{
    const shop = JSON.parse(await getData())
    const token = shop.token;
    if(token){
      setSign(true);
    }
  },[])

  return (
    <NavigationContainer>
      {isSignin ?<RootNavigator/> : <AuthNavigators/>}
    </NavigationContainer>
  );
}
