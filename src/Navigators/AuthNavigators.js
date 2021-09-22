import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login'
import SignUp from "../Screens/Signup";

const Stack = createStackNavigator()


export default function AuthNavigators(props){
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}  />
        </Stack.Navigator>
    )
}