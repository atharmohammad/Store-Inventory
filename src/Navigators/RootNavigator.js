import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from "react-native-elements";
import MainMenu from "../Screens/MainMenu"
import Goods from "./GoodsNavigator"
import Documents from "../Screens/Documents"
import Expenses from "./ExpenseNavigator"
import Stores from "../Screens/Stores"
import IncomingItems from "./IncomingItemNavigator"
import OutgoingItems from "./OutgoingItemsNavigator"
import Costumer from "./CostumerNavigator"
import Help from "../Screens/Help"
import About from "../Screens/About"
import Suppliers from "./SupplierNavigator"
import Report from "../Screens/Report"
import DrawerHeader from "../Components/MainMenu/DrawerHeader";
import Notes from "./NotesNavigator"

const Drawer = createDrawerNavigator();

export default function RootNavigator(props){
  const screenOptions = {
    headerShown: true,
    headerStyle: {
      backgroundColor: '#f58a42',
    },
    headerTintColor: '#fff'
  };
  return (
    <Drawer.Navigator
      drawerType="front"
      drawerContent={(props) => <DrawerHeader {...props} />}
      initialRouteName="MainMenu"
      drawerStyle={{ width: 240 }}
      drawerContentOptions={{
        activeTintColor: "#fff",
        activeBackgroundColor: "#f58a42",
        inactiveTintColor:"#f58a42"
      }}
    >
      <Drawer.Screen
        name="MainMenu"
        component={MainMenu}
        options={{...screenOptions,
            drawerIcon: ({focused, size}) => (
              <Icon
                name="home"
                type="ionicon"
                color={focused ? '#fff' : '#f58a42'}
                size={20}
              ></Icon>
          )
        }}
      />
      <Drawer.Screen name="Goods" component={Goods} options={{...screenOptions,
            drawerIcon: ({focused, size}) => (
              <Icon
                name="gift"
                type="ionicon"
                color={focused ? '#fff' : '#f58a42'}
                size={20}
              ></Icon>
          )
        }} />
      <Drawer.Screen
        name="Expenses"
        component={Expenses}
        options={{...screenOptions,
            drawerIcon: ({focused, size}) => (
              <Icon
                name="card"
                type="ionicon"
                color={focused ? '#fff' : '#f58a42'}
                size={20}
              ></Icon>
          )
        }}
      />
      <Drawer.Screen
        name="Documents"
        component={Documents}
        options={{...screenOptions,
            drawerIcon: ({focused, size}) => (
              <Icon
                name="documents"
                type="ionicon"
                color={focused ? '#fff' : '#f58a42'}
                size={20}
              ></Icon>
          )
        }}
      />
      <Drawer.Screen
        name="IncomingItems"
        component={IncomingItems}
        options={{...screenOptions,
            drawerIcon: ({focused, size}) => (
              <Icon
                name="arrow-down-circle"
                type="ionicon"
                color={focused ? '#fff' : '#f58a42'}
                size={20}
              ></Icon>
          )
        }}
      />
      <Drawer.Screen
        name="OutgoingItems"
        component={OutgoingItems}
        options={{...screenOptions,
            drawerIcon: ({focused, size}) => (
              <Icon
                name="arrow-up-circle"
                type="ionicon"
                color={focused ? '#fff' : '#f58a42'}
                size={20}
              ></Icon>
          )
        }}
      />
      <Drawer.Screen
        name="Suppliers"
        component={Suppliers}
        options={{...screenOptions,
            drawerIcon: ({focused, size}) => (
              <Icon
                name="person-add"
                type="ionicon"
                color={focused ? '#fff' : '#f58a42'}
                size={20}
              ></Icon>
          )
        }}
      />
      <Drawer.Screen
        name="Costumer"
        component={Costumer}
        options={{...screenOptions,
            drawerIcon: ({focused, size}) => (
              <Icon
                name="person-remove"
                type="ionicon"
                color={focused ? '#fff' : '#f58a42'}
                size={20}
              ></Icon>
          )
        }}
      />
      <Drawer.Screen name="Stores" component={Stores} options={{...screenOptions,
            drawerIcon: ({focused, size}) => (
              <Icon
                name="business"
                type="ionicon"
                color={focused ? '#fff' : '#f58a42'}
                size={20}
              ></Icon>
          )
        }} />
      <Drawer.Screen name="Help" component={Help} options={{...screenOptions,
            drawerIcon: ({focused, size}) => (
              <Icon
                name="help-circle"
                type="ionicon"
                color={focused ? '#fff' : '#f58a42'}
                size={20}
              ></Icon>
          )
        }} />
      <Drawer.Screen name="About" component={About} options={{...screenOptions,
            drawerIcon: ({focused, size}) => (
              <Icon
                name="information-circle"
                type="ionicon"
                color={focused ? '#fff' : '#f58a42'}
                size={20}
              ></Icon>
          )
        }} />
      <Drawer.Screen name="Report" component={Report} options={{...screenOptions,
            drawerIcon: ({focused, size}) => (
              <Icon
                name="chatbox-ellipses"
                type="ionicon"
                color={focused ? '#fff' : '#f58a42'}
                size={20}
              ></Icon>
          )
        }} />
      <Drawer.Screen name="Notes" component={Notes} options={{...screenOptions,
            drawerIcon: ({focused, size}) => (
              <Icon
                name="clipboard"
                type="ionicon"
                color={focused ? '#fff' : '#f58a42'}
                size={20}
              ></Icon>
          )
        }} />
    </Drawer.Navigator>
  );
}
