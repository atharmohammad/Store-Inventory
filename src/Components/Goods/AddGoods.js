import React from "react"
import { Input,Icon } from "react-native-elements";
import { ScrollView , View , StyleSheet , Text} from "react-native";
export default function AddGoods(props){
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
          <View style={styles.quantityView}>
            <Input placeholder="Quantity" />
            <Icon name="add-circle" type="ionicon" size={40} color="orange" />
            <Icon
              name="remove-circle"
              type="ionicon"
              size={40}
              color="#cf1d1d"
            />
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