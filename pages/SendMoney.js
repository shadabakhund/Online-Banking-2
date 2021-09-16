import React, {useEffect, useState} from 'react'

import {View, Text,StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Alert, ScrollView} from 'react-native'
import auth from "@react-native-firebase/auth";

export default function SendMoney(){
  const [user, setUser] = useState();
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      console.log("user", JSON.stringify(user));
      setUser(user);
    });

    return subscriber;
  }, []);

    return(
      <ScrollView>
        <SafeAreaView style={{ flex: 1 }}>        
        <View style={{marginTop:20, marginLeft:30}}>
         <Text style={{fontSize:17, color:'black'}}>From Account</Text>
         {user ? (
            <Text style={{fontSize: 19, color:'#009591', fontWeight:'700'}}>              
            <Text style={{fontWeight:'600', color:'black'}}></Text>{""}
              {user.uid
                ? user.uid
                : user.email}
            </Text>
          ) : null}
        </View>
        <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          marginTop:10,
          width:"100%",
          alignSelf:'center'
        }}
      />

        <View style={{marginTop:10, marginLeft:30}}>
         <Text style={{fontSize:17, color:'black'}}>Bank</Text>
         <Text style={{fontSize: 19, color:'#009591', fontWeight: '700',}}>Habib Bank Ltd.</Text>
        </View>

        <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          marginTop:10,
          width:"100%",
          alignSelf:'center'
        }}
      />

        <View style={{marginTop:23, marginLeft:30}}>
         <Text style={{fontSize:17, color:'black',}}>Account Number/Iban</Text>
         <TextInput
                style={{fontSize:17, color:'#009591',}}
                placeholder="Enter Account Number" 
                placeholderTextColor="#009591"
                autoCapitalize="sentences"
                returnKeyType="next"
                keyboardType="numeric"
         />
        </View>

        <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          marginTop:10,
          width:"100%",
          alignSelf:'center'
        }}
      />

        <View style={{marginTop:10, marginLeft:30}}>
         <Text style={{fontSize:17, color:'black'}}>Account Title</Text>
         {user ? (
            <Text style={{fontSize: 19, color:'#009591', fontWeight: '700'}}>
              <Text style={{fontWeight:'600', color:'black'}}></Text>{""}
              {user.displayName
                ? user.displayName
                : user.email}
            </Text>
          ) : null}
         
        </View>
        
        <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          marginTop:10,
          width:"100%",
          alignSelf:'center'
        }}
      />

        <View style={{marginTop:10, marginLeft:30}}>
         <Text style={{fontSize:17, color:'black',}}>Enter Amount</Text>
         <TextInput
                style={{fontSize:17, color:'#009591',}}
                placeholder="Enter Amount" 
                placeholderTextColor="#009591"
                autoCapitalize="sentences"
                keyboardType="numeric"
                returnKeyType="next"
         />
        </View>

        <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          marginTop:10,
          width:"100%",
          alignSelf:'center'
        }}
      />
        
        <View style={{marginTop:10, marginLeft:30}}>
         <Text style={{fontSize:17, color:'black',}}>Enter Email Address</Text>
            <TextInput
              style={{fontSize:17, color:'#009591',}}
              placeholder="Enter Your Email Address" 
              placeholderTextColor="#009591"
              
              autoCapitalize="sentences"
              keyboardType="email-address"
              returnKeyType="next"
              blurOnSubmit={false}
            />
        </View>
        <View style={{marginTop:60}}>
        <TouchableOpacity style={styles.bigbuttons}
            onPress={() => Alert.alert('This Function is under construction')}>
            <Text style={{textAlign:'center', paddingTop: 15, color:'#fff',  fontWeight:'bold'}}>Send Money</Text>
        </TouchableOpacity>
        </View>
        </SafeAreaView></ScrollView>

    )
}
const styles = StyleSheet.create({
    bigbuttons:{
        height: 50, 
        marginTop: 10, 
        alignSelf:'center',
        backgroundColor:'#009591', 
        borderRadius:18, 
        width:130, 
      },
})