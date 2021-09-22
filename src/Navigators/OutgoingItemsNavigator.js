import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import AddItems from "../Components/Items/AddItems";
import OutgoingItems from "../Screens/OutgoingItems"

const Stack = createStackNavigator()

export default function GoodsNavigator(props){
    return (
        <Stack.Navigator initialRouteName="OutgoingItems">
            <Stack.Screen name="OutgoingItems" component={OutgoingItems} options={{headerShown:false}} />
            <Stack.Screen name="AddItems" component={AddItems} options={{headerShown:false}}  />
        </Stack.Navigator>
    )
}