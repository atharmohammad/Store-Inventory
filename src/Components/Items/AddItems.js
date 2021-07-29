import React,{useState} from "react"
import {Input,Icon} from "react-native-elements"
import {TouchableOpacity,ScrollView,Text,View,StyleSheet} from "react-native"

export default function AddItems(props){
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
        <Text style={styles.title}>
          {props.route.params.parent === "IncomingItems"
            ? "Add Incoming Items"
            : "Add Outgoing Items"}
        </Text>
        <ScrollView style={{ marginTop: 10 }}>
          <View style={styles.component}>
            <Input placeholder="ItemName" />
            <Icon name="text" type="ionicon" color="orange" size={35} />
          </View>
          <View style={styles.component}>
            <Input placeholder="Description" />
            <Icon name="newspaper" type="ionicon" color="orange" size={35} />
          </View>
          <View style={styles.component}>
            <Input
              placeholder={
                props.route.params.parent === "IncomingItems"
                  ? "Supplier Name"
                  : "Costumer Name"
              }
            />
            <Icon name="text" type="ionicon" color="orange" size={35} />
          </View>
          <View style={styles.component}>
            <Input placeholder="Cost" keyboardType="number-pad" />
            <Icon name="text" type="ionicon" color="orange" size={35} />
          </View>
          <View>
            <Text style={{ paddingLeft: 15 }}>Quantity</Text>
            <View style={styles.quantityView}>
              <Input
                placeholder="Quantity"
                keyboardType="numeric"
                value={quantity.toString()}
                onChangeText={(value) => changeQuantity(value)}
              />
              <TouchableOpacity
                onPress={() => setQuantity((prev) => parseInt(prev) + 1)}
              >
                <Icon
                  name="add-circle"
                  type="ionicon"
                  size={40}
                  color="orange"
                />
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
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate(props.route.params.parent)}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Save</Text>
          </TouchableOpacity>
        </ScrollView>
      </>
    );
}

const styles = StyleSheet.create({
    component:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        paddingHorizontal:25
    },
    title: {
        backgroundColor: "#f58a42",
        textAlign: "center",
        color: "#fff",
        marginBottom: 10,
      },
    quantityView:{
        display:'flex',
        flexDirection:'row',
        justifyContent:"center",
        paddingLeft:45,
        paddingRight:50
    },
    button:{
        backgroundColor:'#f58a42',
        padding:10,
        alignSelf:'flex-end',
        marginRight:21,
        borderRadius:10
      }
})