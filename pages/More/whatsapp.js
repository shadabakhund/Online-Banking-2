import React from 'react'

import {View, Text,StyleSheet, Image, SafeAreaView, TouchableOpacity, Linking, ScrollView} from 'react-native'


export default function whatsapp(){

    return(
      <ScrollView>
        <SafeAreaView style={{flex:1}}>
        <View style ={{ alignSelf: 'center', marginTop: 180,}}>
             <Image
          source={require("../../Image/whatsapplogo.png")}
          style={{
            width:113,
            height:100,
            resizeMode:'cover'
          }}
        />
        </View>
          <View>
        <TouchableOpacity style={styles.bigbuttons}
            onPress={ ()=> Linking.openURL('https://api.whatsapp.com/send/?phone=9221111111425&text=Hi&app_absent=0') }>
            <Text style={{textAlign:'center', paddingTop: 15, color:'#fff', fontWeight:'bold'}}>Connect To Whatsapp</Text>
        </TouchableOpacity>
          </View>


        <View>
            <Text style={{textAlign:"center",marginTop:30, fontWeight:"bold", color:"black",}}>You Can Also Connect 
            Manually With{'\n'}Us By Using This Conatct Number
            {'\n'}<TouchableOpacity
            onPress={ ()=> Linking.openURL('tel:021111111425') }>
              <Text style={{fontSize:18, fontWeight:"bold", color:"#12940a"}}>021 111 111 425</Text></TouchableOpacity></Text>
        </View>
        </SafeAreaView></ScrollView>
    )
}
const styles = StyleSheet.create({
    bigbuttons:{
        height: 50, 
        marginTop: 20, 
        alignSelf:'center',
        backgroundColor:'#12940a', 
        borderRadius:18, 
        width:190, 
      },
})