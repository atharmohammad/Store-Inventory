import React,{useState} from "react"
import { TextInput,Text,View,StyleSheet,TouchableOpacity} from "react-native"
import axios from '../../Axios/axios'

export default function AddNotes(props){
    const [text,setText] = useState("")
    const [name,setName] = useState("")
    // Add name in notes
    const saveNote = async()=>{
      try{
        const obj = {
          Name:name,
          Notedata:text
        }
        await axios.post('/createNotes',obj);
        props.navigation.navigate("Notes");
      }catch(e){
        console.log(e);
      }
    }

    return (
      <>
      <Text style={{backgroundColor:'#f58a42',textAlign:'center',color:'#fff'}}>Add Notes</Text>
      <View style={styles.textAreaContainer}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Type something"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
          onChangeText={(text) =>setText({ text })}
          value={text}
          style={styles.textArea}
        />
      </View>
      <TouchableOpacity
          style={styles.button}
          onPress={() => saveNote()}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Done</Text>
        </TouchableOpacity>
      </>
    );
}

const styles = StyleSheet.create({
  textAreaContainer: {
    borderColor: "black",
    borderWidth: 2,
    padding: 5,
    flex:1,
    margin:5
  },
  textArea: {
    textAlignVertical: "top",
  },
  button:{
    backgroundColor:'#f58a42',
    padding:10,
    alignSelf:'flex-end',
    borderRadius:10,
    margin:10
  }
})