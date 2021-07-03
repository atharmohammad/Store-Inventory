import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainMenu from "../Screens/MainMenu"
import Goods from "../Screens/Goods"
import Documents from "../Screens/Documents"
import Expenses from "../Screens/Expenses"
import Stores from "../Screens/Stores"
import IncomingItems from "../Screens/IncomingItems"
import OutgoingItems from "../Screens/OutgoingItems"
import Costumer from "../Screens/Costumer"
import Help from "../Screens/Help"
import About from "../Screens/About"
import Suppliers from "../Screens/Suppliers"
import Report from "../Screens/Report"
import DrawerHeader from "../Components/MainMenu/DrawerHeader";

const Drawer = createDrawerNavigator();

export default function RootNavigator(props){
  const screenOptions = {
    headerShown: true,
    headerStyle: {
      backgroundColor: '#f58a42',
    },
  };

  return (
    <Drawer.Navigator 
      drawerType="front"
      drawerContent={props=> <DrawerHeader {...props} />}
      initialRouteName="MainMenu"
      drawerStyle={{ width: 240 }}
      drawerContentOptions={{
        activeTintColor: "#e91e63",
      }}
    >
      <Drawer.Screen
        name="MainMenu"
        component={MainMenu}
        options={screenOptions}
      />
      <Drawer.Screen name="Goods" component={Goods} options={screenOptions} />
      <Drawer.Screen
        name="Expenses"
        component={Expenses}
        options={screenOptions}
      />
      <Drawer.Screen
        name="Documents"
        component={Documents}
        options={screenOptions}
      />
      <Drawer.Screen
        name="IncomingItems"
        component={IncomingItems}
        options={screenOptions}
      />
      <Drawer.Screen
        name="OutgoingItems"
        component={OutgoingItems}
        options={screenOptions}
      />
      <Drawer.Screen
        name="Suppliers"
        component={Suppliers}
        options={screenOptions}
      />
      <Drawer.Screen
        name="Costumer"
        component={Costumer}
        options={screenOptions}
      />
      <Drawer.Screen name="Stores" component={Stores} options={screenOptions} />
      <Drawer.Screen name="Help" component={Help} options={screenOptions} />
      <Drawer.Screen name="About" component={About} options={screenOptions} />
      <Drawer.Screen name="Report" component={Report} options={screenOptions} />
    </Drawer.Navigator>
  );
}
