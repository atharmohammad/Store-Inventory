import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import AddItems from "../Components/Items/AddItems";
import IncomingItems from "../Screens/IncomingItems"

const Stack = createStackNavigator()

export default function GoodsNavigator(props){
    return (
        <Stack.Navigator initialRouteName="IncomingItems">
            <Stack.Screen name="IncomingItems" component={IncomingItems} options={{headerShown:false}} />
            <Stack.Screen name="AddItems" component={AddItems} options={{headerShown:false}}  />
        </Stack.Navigator>
    )
}