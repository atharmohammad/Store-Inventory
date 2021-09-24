import React,{useState,useEffect} from "react"
import { Input,Text,Icon } from "react-native-elements"
import {View,StyleSheet,TouchableOpacity} from "react-native"
import axios from "../../Axios/axios"

export default function AddContacts(props){

  const [name,setName] = useState("");
  const [address,setAddress] = useState("");
  const [phone,setPhone] = useState(null);
  const [email,setEmail] = useState("");
  const [description,setDescription] = useState("");

  const saveContact = async()=>{
    const obj = {
      Name:name,
      Address:address,
      Phone:phone,
      Email:email,
      Description:description
    }
    try{
      await axios.post('createContact',obj);
      props.navigation.navigate(props.route.params.parent)
    }catch(e){
      console.log(e);
    }
    
  }

    return (
      <View>
        <Text
          style={styles.title}
        >
          Add {props.route.params.parent} Details
        </Text>
        <View style={styles.component}>
          <Input placeholder="Name" style={styles.input} />
          <Icon name="text" type="ionicon" size={30} color="orange" />
        </View>
        <View style={styles.component}>
          <Input placeholder="Address" style={styles.input} />
          <Icon name="location" type="ionicon" size={30} color="orange" />
        </View>
        <View style={styles.component}>
          <Input placeholder="Phone" style={styles.input} keyboardType="numeric" />
          <Icon name="call" type="ionicon" size={30} color="orange" />
        </View>
        <View style={styles.component}>
          <Input placeholder="E-mail" style={styles.input} />
          <Icon name="mail" type="ionicon" size={30} color="orange" />
        </View>
        <View style={styles.component}>
          <Input placeholder="Description" style={styles.input}/>
          <Icon name="newspaper" type="ionicon" size={30} color="orange" />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => saveContact()}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Save</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    title:{
        backgroundColor: "#f58a42",
        color: "#fff",
        textAlign: "center",
    },
    component:{
        display:"flex",
        flexDirection:'row',
        justifyContent:'center',
        paddingHorizontal:20,
        marginTop:10
    },
    input:{
        borderColor:'black',
    },
    button:{
        backgroundColor:'#f58a42',
        padding:10,
        alignSelf:'flex-end',
        marginRight:21,
        borderRadius:10
      }

})