import React,{useState} from "react"
import { TextInput,Text,View,StyleSheet,TouchableOpacity} from "react-native"

export default function AddNotes(props){
    const [text,setText] = useState("")

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
          onPress={() => props.navigation.navigate("Notes")}
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