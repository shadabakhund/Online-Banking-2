import React, {useEffect, useState} from 'react'

import {View, Text,StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Alert, ScrollView} from 'react-native'


import auth from "@react-native-firebase/auth";


       
export default function MobileRecharge(){
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
             <Text style={{fontSize:17, color:'black'}}>For Account</Text>
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
         <Text style={{fontSize:17, color:'black',}}>Number of Cheque</Text>
         <View style={{flexDirection:'row'}}>
         <TouchableOpacity style={styles.smallbuttons}
            onPress={() => Alert.alert('This Function is under construction')}>
            <Text style={{textAlign:'center', color:'#fff',  fontWeight:'bold'}}>10</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.smallbuttons}
            onPress={() => Alert.alert('This Function is under construction')}>
            <Text style={{textAlign:'center', color:'#fff',  fontWeight:'bold'}}>20</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.smallbuttons}
            onPress={() => Alert.alert('This Function is under construction')}>
            <Text style={{textAlign:'center', color:'#fff',  fontWeight:'bold'}}>50</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.smallbuttons}
            onPress={() => Alert.alert('This Function is under construction')}>
            <Text style={{textAlign:'center', color:'#fff',  fontWeight:'bold'}}>100</Text>
        </TouchableOpacity>
        </View>
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
         <Text style={{fontSize:17, color:'black',}}>City</Text>
         <TextInput
                style={{fontSize:17, color:'#009591',}}
                placeholder="Enter City Name" 
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
         <Text style={{fontSize:17, color:'black',}}>Branch</Text>
         <TextInput
                style={{fontSize:17, color:'#009591',}}
                placeholder="Enter Branch Name & Code" 
                placeholderTextColor="#009591"
                autoCapitalize="sentences"
                returnKeyType="next"
                keyboardType="numeric"
         />
        </View>

        <View style={{marginTop:60}}>
        <TouchableOpacity style={styles.bigbuttons}
            onPress={() => Alert.alert('This Function is under construction')}>
            <Text style={{textAlign:'center', paddingTop: 15, color:'#fff',  fontWeight:'bold'}}>Send Request</Text>
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

      smallbuttons:{
        height: 26, 
        marginTop: 0, 
        alignSelf:'center',
        backgroundColor:'#009591', 
        borderRadius:18, 
        width:33,
        marginLeft: 40,
        marginTop:25
      }
})