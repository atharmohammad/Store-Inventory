import React from "react";
import { Text } from "react-native-elements";
import { TouchableOpacity, View } from "react-native";
import TopOption from "./TopOptions/TopOption";
import BottomOption from "./BottomOptions/BottomOption";


export default function MainMenu(props) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop:15,
      }}
    >
      <TouchableOpacity onPress={() => props.navigation.navigate("Goods")}>
        <TopOption title="Goods" icon="gift"/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("Documents")}>
        <TopOption title="Documents" icon="documents" />
      </TouchableOpacity>

      <View style={{display:'flex',flexDirection:'column'}}>
          <View style={{display:'flex',flexDirection:'row'}}>
            <TouchableOpacity onPress={() => props.navigation.navigate("Suppliers")}>
                <BottomOption title="Suppliers" icon="person-add"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("Costumer")}>
                <BottomOption title="Costumers" icon="person-remove" />
            </TouchableOpacity>
          </View>
        <View style={{display:'flex',flexDirection:'row'}}>
            <TouchableOpacity onPress={() => props.navigation.navigate("IncomingItems")}>
                <BottomOption title="Incoming" icon="arrow-down-circle"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("OutgoingItems")}>
                <BottomOption title="Outgoing" icon="arrow-up-circle" />
            </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={() => props.navigation.navigate("Expenses")}>
        <TopOption title="Expenses" icon="card"/>
      </TouchableOpacity>

      <View style={{display:'flex',flexDirection:'column'}}>
          <View style={{display:'flex',flexDirection:'row'}}>
            <TouchableOpacity onPress={() => props.navigation.navigate("Stores")}>
                <BottomOption title="Stores" icon="business"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("Help")}>
                <BottomOption title="Help" icon="help-circle" />
            </TouchableOpacity>
          </View>
        <View style={{display:'flex',flexDirection:'row'}}>
            <TouchableOpacity onPress={() => props.navigation.navigate("About")}>
                <BottomOption title="About" icon="information-circle" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("Report")}>
                <BottomOption title="Report" icon="chatbox-ellipses" />
            </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate("Notes")}>
        <TopOption title="Notes" icon="clipboard"/>
      </TouchableOpacity>
    </View>
  );
}
