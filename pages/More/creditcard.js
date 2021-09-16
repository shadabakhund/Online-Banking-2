import React, {useEffect, useState} from 'react'

import {View, Text,StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Alert, Image, ScrollView} from 'react-native'
import auth from "@react-native-firebase/auth";

export default function Cards(){
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
        <SafeAreaView style={{flex:1}}>
        <View style={{paddingTop:25, }}>
        <Text style={styles.pageText}>Debit Card</Text></View>
        <View
        style={{
          borderBottomColor: '#009591',
          borderBottomWidth: 1,
          marginTop:10,
          width:350,
          alignSelf:'center'
        }}
      />

            <View style={{marginTop:0}}>
        <View style={{marginTop:5}}>
        <View style={styles.card}>
        <View style={{flexDirection:'row'}}>
        <Text style={{color:'#fff', fontSize:28, paddingLeft:30, paddingTop:10, fontWeight:'bold'}}>HBL</Text>
        <Text style={{color:'#fff', fontSize:16, paddingLeft:120, paddingTop:18,}}>Debit Card</Text>
        </View>
<View style={{paddingLeft: 10,}}>
        <Image
          source={require("../../Image/gold.png")}
          style={{
            width:90,
            height:45
          }}
        />
</View>
        <View style={{paddingTop:0}}>
        {user ? (
            <Text style={{fontSize: 16, color:'#fff', fontWeight:'700', alignSelf:'center'}}>              
            <Text style={{fontWeight:'600', color:'#fff'}}></Text>{""}
              {user.uid
                ? user.uid
                : user.email}
            </Text>
          ) : null}</View>

            <View style={{flexDirection:'row', paddingTop:0,}}>
        <Text style={{color:'#fff', fontSize:8, paddingLeft: 30, paddingTop:5}}>Valid{"\n"}From</Text>
        <Text style={{color:'#fff', fontSize:18, paddingLeft:5, paddingTop:3}}>08/21</Text>

        <Text style={{color:'#fff', fontSize:8, paddingLeft: 15, paddingTop:5}}>Valid{"\n"}Thus</Text>
        <Text style={{color:'#fff', fontSize:18, paddingLeft:5, paddingTop:3}}>08/24</Text>
        </View>

        <View style={{flexDirection:'row',}}>
        {user ? (
            <Text style={{fontSize: 15, color:'#fff', paddingLeft: 30, paddingTop: 14,}}>
              <Text style={{fontWeight:'600', color:'#fff', flexWrap:'wrap'}}></Text>{"Mr. "}
              {user.displayName
                ? user.displayName
                : user.email}
            </Text>
          ) : null}

        <View style={{paddingLeft:75}}>
        <Image
          source={require("../../Image/mastercard.png")}
          style={{
            width:73,
            height:45,
            resizeMode:'cover'
          }}
        />
</View></View>
 </View>
        </View>
        
        </View>

        <View style={{paddingTop:50, }}>
        <Text style={styles.pageText}>Credit Card</Text></View>
        <View
        style={{
          borderBottomColor: '#009591',
          borderBottomWidth: 1,
          marginTop:10,
          width:350,
          alignSelf:'center'
        }}
      />
      <View style = {{paddingTop:10}}>
      <View style={styles.card2}>
      <Text style={{color:'black', fontSize:28, paddingLeft:30, paddingTop:10, fontWeight:'bold'}}>HBL</Text>
        <Text style={{textAlign:'center', paddingTop:20, color:'black', fontWeight:'bold', fontSize:20 }}>
            There is no Credit Card{"\n"}Available On this Account</Text>
        <Text style={{textAlign:"center", paddingTop:30, color:'black', fontSize:15, fontWeight:'600'}}>
            Please Contact to The{"\n"}Bank For Credit Card</Text>
      </View>
      </View>
        
        </SafeAreaView></ScrollView>
    )
}
const styles = StyleSheet.create({
    card:{
        height: 195, 
        marginTop: 10, 
        alignSelf:'center', 
        borderRadius:18,
        borderColor: '#fff',
        backgroundColor:'black',
        borderWidth:1,
        width:320 
      },

      card2:{
        height: 195, 
        marginTop: 10, 
        alignSelf:'center', 
        borderRadius:18,
        borderColor: 'black',
        backgroundColor:'#fff',
        borderWidth:1,
        width:320, 
      },

    text:{
        textAlign:'center', 
        paddingTop: 35, 
        color:'#009591',  
        fontWeight:'bold', 
        fontSize:18

    },
    pageText:{
        fontSize:30, 
        fontWeight:'bold', 
        color:'#009591', 
        textAlign:'center'
    }
     
})
