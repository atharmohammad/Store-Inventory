import React from "react"
import {View,ScrollView} from "react-native"
import {DrawerItemList,DrawerItem } from "@react-navigation/drawer";
import {Drawer,Text} from "react-native-paper"
import {useRoute} from '@react-navigation/native';

export default function DrawerHeader(props){
    const navigation = props.navigation
    return (
      <View style={{ marginTop: 80 }}>
        <ScrollView>
          <Text style={{ color: "black" }}>Header</Text>
        </ScrollView>
        <ScrollView style={{ marginBottom: 30 }}>
          <Drawer.Section>
            <ScrollView
              style={{
                borderBottomWidth: 1,
                borderColor: "gray",
                marginHorizontal: 4,
              }}
            >
              <DrawerItemList {...props} />
              <DrawerItem
                label="MainMenu"
                onPress={() => navigation.navigate("MainMenu")}
              />
              <DrawerItem
                label="Goods"
                onPress={() => navigation.navigate("Goods")}
              />
              <DrawerItem
                label="Expenses"
                onPress={() => navigation.navigate("Expenses")}
              />
              <DrawerItem
                label="Documents"
                onPress={() => navigation.navigate("Documents")}
              />
            </ScrollView>
            <ScrollView
              style={{
                borderBottomWidth: 1,
                borderColor: "gray",
                marginHorizontal: 4,
              }}
            >
              <DrawerItem
                label="Incoming Items"
                onPress={() => navigation.navigate("IncomingItems")}
              />
              <DrawerItem
                label="Outgoing Items"
                onPress={() => navigation.navigate("OutgoingItems")}
              />
              <DrawerItem
                label="Suppliers"
                onPress={() => navigation.navigate("Suppliers")}
              />
              <DrawerItem
                label="Costumer"
                onPress={() => navigation.navigate("Costumer")}
              />
            </ScrollView>
            <ScrollView
              style={{
                borderBottomWidth: 1,
                borderColor: "gray",
                marginHorizontal: 4,
              }}
            >
              <DrawerItem
                label="Stores"
                onPress={() => navigation.navigate("Stores")}
              />
              <DrawerItem
                label="Help"
                onPress={() => navigation.navigate("Help")}
              />
              <DrawerItem
                label="About"
                onPress={() => navigation.navigate("About")}
              />
              <DrawerItem
                label="Report"
                onPress={() => navigation.navigate("Report")}
              />
            </ScrollView>
          </Drawer.Section>
        </ScrollView>
      </View>
    );
}