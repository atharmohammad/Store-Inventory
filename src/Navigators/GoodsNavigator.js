import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import AddGoods from "../Components/Goods/AddGoods";
import Goods from "../Screens/Goods"

const Stack = createStackNavigator()

export default function GoodsNavigator(props){
    return (
        <Stack.Navigator initialRouteName="Goods">
            <Stack.Screen name="Goods" component={Goods} options={{headerShown:false}} />
            <Stack.Screen name="AddGoods" component={AddGoods} options={{headerShown:false}}  />
        </Stack.Navigator>
    )
}