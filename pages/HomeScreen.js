// Import React and Component
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  
} from "react-native";

import auth from "@react-native-firebase/auth";
import { color } from "react-native-reanimated";
import { createNativeStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';




const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState();

  

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      console.log("user", JSON.stringify(user));
      setUser(user);
    });

    return subscriber;
  }, []);

  const logout = () => {
    Alert.alert(
      "Logout",
      "Are you sure? You want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => {
            return null;
          },
        },
        {
          text: "Confirm",
          onPress: () => {
            auth()
              .signOut()
              .then(() => navigation.replace("Auth"))
              .catch((error) => {
                console.log(error);
                if (error.code === "auth/no-current-user")
                  navigation.replace("Auth");
                else alert(error);
              });
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
<ScrollView>
    <SafeAreaView style={{ flex: 1 }}>
      
    <View style={{backgroundColor:'rgba(52, 52, 52, 0.8)'}}>     
          {user ? (
            <Text style={{textAlign:'center', color:'#fff', fontWeight:'bold', fontSize:18, fontFamily:"sans-serif-light"}}>
              <Text style={{fontWeight:'600', color:'#fff'}}>Welcome Back,</Text>{" "}
              {user.displayName
                ? user.displayName
                : user.email}
            </Text>
          ) : null}</View>
<View style={{backgroundColor:'rgba(0, 149, 145, 0.3)', height:180}}>
    <View style={styles.fixToText}>
        <TouchableOpacity style={styles.bigbuttons}
             onPress={() => navigation.navigate('SendMoney')}>
            <Text style={{textAlign:'center', paddingTop: 15, color:'#fff',  fontWeight:'bold'}}>Send Money</Text>
        </TouchableOpacity>
       
       
        <TouchableOpacity style={styles.bigbuttons}
            onPress={() => navigation.navigate('BillPayments')}>
            <Text style={{textAlign:'center', paddingTop: 15, color:'#fff', fontWeight:'bold'}}>Bill Payments</Text>
        </TouchableOpacity>

        </View>
        
         <View style={styles.fixToText}>
         <TouchableOpacity style={styles.bigbuttons}
            onPress={() => navigation.navigate('Rechargescreen')}>
            <Text style={{textAlign:'center', paddingTop: 15, color:'#fff',  fontWeight:'bold'}}>Mobile Recharge</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bigbuttons}
            onPress={() => navigation.navigate('MoreScreen')}>
            <Text style={{textAlign:'center', paddingTop: 15, color:'#fff',  fontWeight:'bold'}}>More</Text>
        </TouchableOpacity>

</View>
</View>


      <View>
        <Text style={
          {paddingLeft:50, 
          paddingTop:20, 
          fontWeight:'bold', 
          fontSize:19,
        color:'grey'}
          }>
            What I Have
            </Text>
            <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 3,
          marginTop:10,
          width:"100%",
          alignSelf:'center'
        }}
      />
      <Text style={
          {paddingLeft:50, 
          paddingTop:7, 
          fontWeight:'bold', 
          fontSize:15,
        color:'grey'}
          }>Deposit Account</Text>

     
          {user ? (
            <Text style={{paddingLeft:50,  
              fontWeight:'bold', 
              fontSize:15,
            color:'grey'}}>
              <Text style={{fontWeight:'600', color:'black'}}></Text>{""}
              {user.displayName
                ? user.displayName
                : user.email}
            </Text>
          ) : null}
          
          {user ? (
            <Text style={{paddingLeft:50, 
              fontWeight:'bold', 
              fontSize:15,
            color:'grey'}}>
              <Text style={{fontWeight:'600', color:'black'}}></Text>{""}
              {user.uid
                ? user.uid
                : user.email}
            </Text>
          ) : null}
          </View>

          <View style={{marginTop:30}}>
            <Text style={styles.Accountbalance}>500000.00</Text>
            <Text style={
              {
                textAlign:'center', 
                fontSize:12, 
                fontWeight:'700', 
                color:'grey'
                }
            }>Available Balance</Text>
          </View>
          <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
           
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={logout}
          >
            <Text style={styles.buttonTextStyle}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </SafeAreaView></ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  buttonStyle: {
    minWidth: 100,
    backgroundColor: "#009591",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 14,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: "#fff",
    paddingVertical: 10,
    fontSize: 16,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop:15,
    
    
  },

  bigbuttons:{
    height: 50, 
    marginTop: 10, 
    backgroundColor:'#009591', 
    borderRadius:18, 
    width:130, 
  },

  Accountbalance:{
    textAlign:'center', 
    fontSize:27, 
    fontWeight:'bold', 
    color:'#009591'

  }

});