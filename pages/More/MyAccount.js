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
    
        <View style={{marginTop:20, marginLeft:30}}>
         <Text style={{fontSize:17, color:'black'}}>Account Number</Text>
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

<View style={{marginTop:20, marginLeft:30}}>
         <Text style={{fontSize:17, color:'black'}}>IBAN Number</Text>
         {user ? (
            <Text style={{fontSize: 19, color:'#009591', fontWeight:'700'}}>              
            <Text style={{fontWeight:'600', color:'black'}}></Text>{"HABB0541"}
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
<View style={{marginTop:20, marginLeft:30}}>
         <Text style={{fontSize:17, color:'black'}}>Email Address</Text>
         {user ? (
            <Text style={{fontSize: 19, color:'#009591', fontWeight:'700'}}>              
            <Text style={{fontWeight:'600', color:'black'}}></Text>{""}
              {user.email
                ? user.email
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
         <Text style={{fontSize:17, color:'black'}}>Account Status</Text>
         <Text style={{fontSize: 19, color:'#009591', fontWeight: '700',}}>Deposit Account</Text>
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
        
        </SafeAreaView></ScrollView>

    )
}
const styles = StyleSheet.create({

})