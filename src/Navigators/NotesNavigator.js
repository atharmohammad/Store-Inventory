import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import AddNotes from "../Components/Notes/AddNotes";
import Notes from "../Screens/Notes"

const Stack = createStackNavigator()

export default function ExpenseNavigator(props){
    return (
        <Stack.Navigator initialRouteName="Notes">
            <Stack.Screen name="Notes" component={Notes} options={{headerShown:false}} />
            <Stack.Screen name="AddNotes" component={AddNotes} options={{headerShown:false}}  />
        </Stack.Navigator>
    )
}