import React,{useState} from "react"
import {Input,Icon} from "react-native-elements"
import {TouchableOpacity,ScrollView,Text,View,StyleSheet} from "react-native"

export default function AddItems(props){
    return(
        <ScrollView>
            <View style={styles.component}>
                <Input placeholder="ItemName"/>
                <Icon name="text" type="ionicon" color="orange" size={35} />
            </View>
            <View style={styles.component}>
                <Input placeholder="Description"/>
                <Icon name="newspaper" type="ionicon" color="orange" size={35} />
            </View>
            <View style={styles.component}>
                <Input placeholder="Supplier Name"/>
                <Icon name="text" type="ionicon" color="orange" size={35} />
            </View>
            <View style={styles.component}>
                <Input placeholder="Cost" keyboardType="number-pad" />
                <Icon name="text" type="ionicon" color="orange" size={35} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    component:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        paddingHorizontal:25
    }
})