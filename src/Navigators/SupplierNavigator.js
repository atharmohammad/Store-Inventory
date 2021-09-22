import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import AddContacts from "../Components/Contacts/AddContacts";
import Suppliers from "../Screens/Suppliers"

const Stack = createStackNavigator()

export default function GoodsNavigator(props){
    return (
        <Stack.Navigator initialRouteName="Suppliers">
            <Stack.Screen name="Suppliers" component={Suppliers} options={{headerShown:false}} />
            <Stack.Screen name="AddContacts" component={AddContacts} options={{headerShown:false}}  />
        </Stack.Navigator>
    )
}