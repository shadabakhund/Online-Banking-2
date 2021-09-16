import React from 'react'

import {View, Text,StyleSheet, SafeAreaView, TouchableOpacity, Alert, ScrollView} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


export default function BillPayments({navigation}){

    return(
        <ScrollView>
        <SafeAreaView style={{flex:1}}>
            <View style={{marginTop:10}}>
        <View style={{marginTop:25, flexDirection:'row', alignSelf: 'center'}}>
        <TouchableOpacity style={styles.buttons}
             onPress={() => navigation.navigate('MyAccount')}>
            <Text style={styles.text}>My Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons}
             onPress={() => navigation.navigate('MyCards')}>
            <Text style={styles.text}>My Cards</Text>
        </TouchableOpacity>
</View>
<View style={{flexDirection:'row', alignSelf: 'center', paddingTop:15,}}>
        <TouchableOpacity style={styles.buttons}
             onPress={() => navigation.navigate('cheque')}>
            <Text style={{textAlign:'center',  paddingTop: 29, color:'#009591', fontWeight:'bold', fontSize:18}}>
                Cheque Book Request</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons}
             onPress={() => navigation.navigate('whatsapp')}>
            <Text style={{textAlign:'center', paddingTop: 29, color:'#009591', fontWeight:'bold', fontSize:18}}>Connect to our Whatsapp</Text>
        </TouchableOpacity>
        </View>
        
        <View style={{flexDirection:'row', alignSelf: 'center', paddingTop:15,}}>
        <TouchableOpacity style={styles.buttons}
             onPress={() => navigation.navigate('locator')}>
            <Text style={{textAlign:'center',  paddingTop: 35, color:'#009591', fontWeight:'bold', fontSize:18}}>
                Branch Locator</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons}
             onPress={() => navigation.navigate('Entertainment')}>
            <Text style={{textAlign:'center',  paddingTop: 25, color:'#009591', fontWeight:'bold', fontSize:18}}>
                HBL Entertainment</Text>
        </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row', alignSelf: 'center', marginTop:15,}}>
        <TouchableOpacity style={styles.buttons}
             onPress={() => navigation.navigate('Support')}>
            <Text style={{textAlign:'center',  paddingTop: 25, color:'#009591', fontWeight:'bold', fontSize:18}}>
                Customer Support</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons}
             onPress={() => navigation.navigate('help')}>
            <Text style={styles.text}>Help</Text>
        </TouchableOpacity>
        </View>
        </View>
        </SafeAreaView></ScrollView>
    )
}
const styles = StyleSheet.create({
    buttons:{
        marginLeft:10,
        height: 100, 
        marginTop: 10, 
        alignSelf:'center', 
        borderRadius:18,
        borderColor: '#009591',
        backgroundColor:'#fff',
        borderWidth:2,
        width:150 
      },

    text:{
        textAlign:'center', 
        paddingTop: 35, 
        color:'#009591',  
        fontWeight:'bold', 
        fontSize:18
    }
})