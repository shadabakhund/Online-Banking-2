import React from 'react'

import {View, Text,StyleSheet, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


export default function BillPayments({navigation}){

    return(
        <ScrollView>
        <SafeAreaView style={{flex:1}}>
            <View style={{marginTop:110,}}>
        <View style={{marginTop:25}}>
        <TouchableOpacity style={styles.buttons}
             onPress={() => navigation.navigate('electricity')}>
            <Text style={styles.text}>Electricity Bill</Text>
        </TouchableOpacity>
        </View>

        <View style={{marginTop:25}}>
        <TouchableOpacity style={styles.buttons}
             onPress={() => navigation.navigate('electricity')}>
            <Text style={styles.text}>PTCL/Broadband Bill</Text>
        </TouchableOpacity>
        </View>

        <View style={{marginTop:25}}>
        <TouchableOpacity style={styles.buttons}
             onPress={() => navigation.navigate('electricity')}>
            <Text style={styles.text}>Gas Bill</Text>
        </TouchableOpacity>
        </View>

        <View style={{marginTop:25}}>
        <TouchableOpacity style={styles.buttons}
             onPress={() => navigation.navigate('electricity')}>
            <Text style={styles.text}>Water Bill</Text>
        </TouchableOpacity>
        </View>
        
        </View>
        </SafeAreaView></ScrollView>
    )
}
const styles = StyleSheet.create({
    buttons:{
        height: 50, 
        marginTop: 10, 
        alignSelf:'center', 
        borderRadius:18,
        borderColor: '#009591',
        backgroundColor:'#fff',
        borderWidth:2,
        width:250 
      },

    text:{
        textAlign:'center', 
        paddingTop: 12, 
        color:'#009591',  
        fontWeight:'bold', 
        fontSize:18

    }
     
})