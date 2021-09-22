import React from "react"
import {View,ScrollView} from "react-native"
import {DrawerItemList } from "@react-navigation/drawer";
import {Drawer,Text} from "react-native-paper"

export default function DrawerHeader(props){
    const navigation = props.navigation

    return (
      <View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            backgroundColor: "black",
            height: 120,
            marginBottom:10
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 25,
              fontStyle: "italic",
              marginTop: 40,
            }}
          >
            Store Name
          </Text>
        </View>
        <ScrollView style={{ marginBottom: 30 }}>
          <Drawer.Section>
            <ScrollView>
              <DrawerItemList {...props} />
            </ScrollView>
          </Drawer.Section>
        </ScrollView>
      </View>
    );
}