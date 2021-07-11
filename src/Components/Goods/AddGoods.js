import React,{useState} from "react"
import { Input,Icon } from "react-native-elements";
import { ScrollView , View , StyleSheet , Text, TouchableOpacity} from "react-native";
export default function AddGoods(props){
    const [quantity,setQuantity] = useState(0);

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
          <Input placeholder="Name" />
          <View style={styles.barView}>
            <Input placeholder="BarCode" />
            <Icon name="barcode" type="ionicon" size={40} color="orange" />
          </View>
          <Input placeholder="Description" />
          <Text>Quantity</Text>
          <View style={styles.quantityView}>
            <Input
              placeholder="Quantity"
              keyboardType="numeric"
              value={quantity.toString()}
              onChangeText={(value)=>changeQuantity(value)}
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
    }
})