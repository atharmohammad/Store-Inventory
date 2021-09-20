import React,{useState,useEffect} from "react"
import { Input,Icon } from "react-native-elements";
import { ScrollView , View , StyleSheet , Text, TouchableOpacity} from "react-native";

export default function AddGoods(props){

    const [Name,setName] = useState("");
    const [quantity,setQuantity]  = useState(0);
    const [barcode,setBarcode] = useState("");
    const [description,setDescription] = useState("");

    const changeQuantity = (value)=>{
      if(value == ""){
        setQuantity(0);
        return;
      }
      setQuantity(parseInt(value))
    }

    return (
      <>
        <Text style={styles.title}>Add Goods</Text>
        <ScrollView style={styles.scrollView}>
          <Input placeholder="Name" onChange={setName}/>
          <View style={styles.barView}>
            <Input placeholder="BarCode" onChange={setBarcode}/>
            <Icon name="barcode" type="ionicon" size={40} color="orange" />
          </View>
          <Input placeholder="Description" onChange={setDescription} />
          <Text>Quantity</Text>
          <View style={styles.quantityView}>
            <Input
              placeholder="Quantity"
              keyboardType="numeric"
              value={quantity.toString()}
              onChangeText={setQuantity}
            />
            <TouchableOpacity onPress={() => setQuantity((prev) => parseInt(prev) + 1)}>
              <Icon name="add-circle" type="ionicon" size={40} color="orange" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (quantity > 0) setQuantity((prev) => parseInt(prev) - 1);
              }}
            >
              <Icon
                name="remove-circle"
                type="ionicon"
                size={40}
                color="#cf1d1d"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              props.navigation.navigate("Goods")
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Save</Text>
          </TouchableOpacity>
        </ScrollView>
      </>
    );
}

const styles = StyleSheet.create({
    scrollView:{
        padding:10
    },
    barView:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        paddingLeft:20,
        paddingRight:30
    },
    quantityView:{
        display:'flex',
        flexDirection:'row',
        justifyContent:"center",
        paddingLeft:40,
        paddingRight:50
    },
    title:{
      backgroundColor:'#f58a42',
      color:'#fff',
      textAlign:'center'
    },
    button:{
      backgroundColor:'#f58a42',
      padding:10,
      alignSelf:'flex-end',
      marginRight:21,
      borderRadius:10
    }
})