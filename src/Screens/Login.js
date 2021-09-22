import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions
} from "react-native";
import axios from '../Axios/axios'

const win = Dimensions. get('window');


export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async()=>{
    try{
      const shop = await axios.post('/login',{UserName:username,Password:password});
      console.log(shop)
    }catch(e){
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <View style={styles.titleView}>
            <Text style={styles.title}>Store Inventory</Text>
        </View>

        <Image style={styles.image} source={require("../../assets/main.jpg")} />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="UserName"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={loginUser}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.signup} onPress={()=>props.navigation.navigate('SignUp')}>Create a new account ! SignUp </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  titleView:{
    marginVertical:30,
    alignSelf:'baseline',
    padding:7,
    width:win.width,
    backgroundColor:'#f58a42'
  },
  title: {
    fontSize:30,
    color:'#fff',
    alignSelf:'center'
  },
  image:{
    width: win.width/2,
    height: win.width/2
  },
  inputView: {
    borderWidth:2,
    borderColor:'#f58a42',
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#f58a42",
  },

  loginText:{
    color:'#fff',
  },
  signup:{
      marginTop:5,
      color:'blue',
      fontStyle:'italic'
  }
});