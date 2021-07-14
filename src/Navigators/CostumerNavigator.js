import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import AddContacts from "../Components/Contacts/AddContacts";
import Costumer from "../Screens/Costumer"

const Stack = createStackNavigator()

export default function GoodsNavigator(props){
    return (
        <Stack.Navigator initialRouteName="Costumer">
            <Stack.Screen name="Costumer" component={Costumer} options={{headerShown:false}} />
            <Stack.Screen name="AddContacts" component={AddContacts} options={{headerShown:false}}  />
        </Stack.Navigator>
    )
}