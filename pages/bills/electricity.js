import React,{useState, useEffect} from 'react'

import {View, Text,StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Alert, ScrollView} from 'react-native'
import auth from "@react-native-firebase/auth";

export default function electricity(){
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
        <View style={{marginTop:23, marginLeft:30}}>
         <Text style={{fontSize:17, color:'black',}}>Consumer Name</Text>
         <TextInput
                style={{fontSize:17, color:'#009591',}}
                placeholder="Enter Consumer Name" 
                placeholderTextColor="#009591"
                autoCapitalize="sentences"
                returnKeyType="next"
                keyboardType="default"
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
        <View style={{marginTop:23, marginLeft:30}}>
         <Text style={{fontSize:17, color:'black',}}>Consumer Number</Text>
         <TextInput
                style={{fontSize:17, color:'#009591',}}
                placeholder="Enter Consumer Number" 
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
        <View style={{marginTop:23, marginLeft:30}}>
         <Text style={{fontSize:17, color:'black',}}>Amount</Text>
         <TextInput
                style={{fontSize:17, color:'#009591',}}
                placeholder="Enter Account" 
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
        <View style={{marginTop:23, marginLeft:30}}>
         <Text style={{fontSize:17, color:'black',}}>Company</Text>
         <TextInput
                style={{fontSize:17, color:'#009591',}}
                placeholder="Enter Company Name" 
                placeholderTextColor="#009591"
                autoCapitalize="sentences"
                returnKeyType="next"
                keyboardType="default"
         />
        </View>

        <View style={{marginTop:60}}>
        <TouchableOpacity style={styles.bigbuttons}
            onPress={() => Alert.alert('This Function is under construction')}>
            <Text style={{textAlign:'center', paddingTop: 15, color:'#fff',  fontWeight:'bold'}}>Pay Bill</Text>
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