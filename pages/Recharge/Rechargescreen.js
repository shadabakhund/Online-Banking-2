import React from 'react'

import {View, Text,StyleSheet, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native'


export default function Rechargescreen({navigation}){

    return(
        <ScrollView>
        <SafeAreaView style={{flex:1}}>
       <View style={{flexDirection:'row',alignSelf:'center', marginTop:250}}>
            <View style={{paddingRight:25}}>
                <TouchableOpacity style={styles.bigbuttons}
                 onPress={() => navigation.navigate('MobileRecharge')}>
                <Text style={{textAlign:'center', paddingTop: 30, color:'#fff',  fontWeight:'bold'}}>PrePaid Recharge</Text>
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity style={styles.bigbuttons}
                 onPress={() => navigation.navigate('MobileRecharge')}>
                <Text style={{textAlign:'center', paddingTop: 30, color:'#fff',  fontWeight:'bold'}}>PostPaid Recharge</Text>
            </TouchableOpacity></View></SafeAreaView></ScrollView>
    )
}
const styles = StyleSheet.create({
      bigbuttons:{
        height: 100, 
        marginTop: 10, 
        backgroundColor:'#009591', 
        borderRadius:18, 
        width:110, 
      },
    
})