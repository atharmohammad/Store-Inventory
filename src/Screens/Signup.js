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
const win = Dimensions. get('window');

export default function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [owner, setOwner] = useState("");
  const [shopname, setShopName] = useState("");

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
            placeholder="Shop Name"
            placeholderTextColor="#003f5c"
            onChangeText={(shopname) => setShopName(shopname)}
            />
        </View>


        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="UserName"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
            />
        </View>


        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            />
        </View>

        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Owner"
            placeholderTextColor="#003f5c"
            onChangeText={(owner) => setOwner(owner)}
            />
        </View>


      <TouchableOpacity style={styles.signupBtn} onPress={()=>props.navigation.navigate('Login')}>
        <Text style={styles.signuptext}>SIGNUP</Text>
      </TouchableOpacity>

      <Text style={styles.signup} onPress={()=>props.navigation.navigate('Login')}>Have an account already ! Login </Text>
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
  signupBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#f58a42",
  },

  signuptext:{
    color:'#fff',
  },
  signup:{
      marginTop:5,
      color:'blue',
      fontStyle:'italic'
  }
});