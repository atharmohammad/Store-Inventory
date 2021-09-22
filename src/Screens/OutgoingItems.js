import React,{useState} from 'react';
import { Text , Icon} from "react-native-elements";
import { TouchableOpacity,View,ScrollView,StyleSheet} from "react-native";

export default function OutgoingItems(props) {

  const [allItems,setItems] = useState(null);

  return (
    <View style={styles.head}>
      <ScrollView style={styles.scrollView}>
        {allItems ? null : (
          <Icon
            name="arrow-up-circle"
            type="ionicon"
            color="#f58a42"
            size={160}
            style={styles.mainIcon}
          ></Icon>
        )}
      </ScrollView>
      <TouchableOpacity onPress={() => props.navigation.navigate("AddItems",{parent:"OutgoingItems"})}>
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