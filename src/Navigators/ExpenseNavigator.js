import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import AddExpense from "../Components/Expenses/AddExpense";
import Expenses from "../Screens/Expenses"

const Stack = createStackNavigator()

export default function ExpenseNavigator(props){
    return (
        <Stack.Navigator initialRouteName="Expenses">
            <Stack.Screen name="Expenses" component={Expenses} options={{headerShown:false}} />
            <Stack.Screen name="AddExpense" component={AddExpense} options={{headerShown:false}}  />
        </Stack.Navigator>
    )
}