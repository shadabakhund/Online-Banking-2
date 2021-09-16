import React from 'react'

import {View, Text,StyleSheet, SafeAreaView, Image, TouchableOpacity, Linking, ScrollView} from 'react-native'


export default function help(){

    return(
        <ScrollView>
        <SafeAreaView style={{flex:1, marginTop:80}}>
        <View style ={{alignItems: 'center', marginTop:19}}>
            <Image
                source={require("../../Image/phone.png")}    
                style={{
                    width:100,
                    height:100
                }}
            />
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop:25, }}>
            <Text style={{fontWeight:"bold", fontSize:19, color:"black" }}>General Helpline:</Text>
            <TouchableOpacity
            onPress={ ()=> Linking.openURL('tel:021111111425') }>
                    <Text style={{fontWeight:"600", fontSize:19, color:"#009591"}}>         111-111-425</Text>
                    </TouchableOpacity></View>
            

        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop:25, }}>
            <Text style={{fontWeight:"bold", fontSize:19, color:"black" }}>Remittance Helpline:</Text>
            <TouchableOpacity
            onPress={ ()=> Linking.openURL('tel:021111555425') }>
            <Text style={{fontWeight:"600", fontSize:19, color:"#009591"}}>    111-555-425</Text>
        </TouchableOpacity></View>

        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop:25, }}>
            <Text style={{fontWeight:"bold", fontSize:19, color:"black" }}>Konnect Helpline:</Text>
            <TouchableOpacity
            onPress={ ()=> Linking.openURL('tel:021111425111') }>
                <Text style={{fontWeight:"600", fontSize:19, color:"#009591"}}>           111-425-111</Text>
        </TouchableOpacity></View>

        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop:25, }}>
            <Text style={{fontWeight:"bold", fontSize:19, color:"black" }}>Merchant Acquisition:</Text>
            <TouchableOpacity
            onPress={ ()=> Linking.openURL('tel:021111777425') }>
                <Text style={{fontWeight:"600", fontSize:19, color:"#009591"}}>      111-777-425</Text>
        </TouchableOpacity></View>

        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop:25, }}>
            <Text style={{fontWeight:"bold", fontSize:19, color:"black" }}>Ehsaas Kafaalat Program:</Text>
            <TouchableOpacity
            onPress={ ()=> Linking.openURL('tel:021111000425') }>
            <Text style={{fontWeight:"600", fontSize:19, color:"#009591"}}>   111-000-425</Text>
        </TouchableOpacity></View>

        </SafeAreaView>
        </ScrollView>
    )
}