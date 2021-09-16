import React from 'react'

import {View, Text,StyleSheet, SafeAreaView, Image, Linking, TouchableOpacity, ScrollView} from 'react-native'


export default function Support(){

    return(
      <ScrollView>
        <SafeAreaView style={{flex:1}}>
        
        <View style ={{backgroundColor:"white", }}>
            <Text style={{textAlign:"center", color:"#009591", fontSize:14}}>Depending on your need, you can contact HBL 
            in {'\n'} a variety of ways.</Text>
        </View>

{/*Single Row Start email*/}  
    <TouchableOpacity
            onPress={ ()=> Linking.openURL('mailto:shadabbusiness14@gmail.com') }>
      <View style={{flexDirection:"row", marginTop:19, alignSelf:"flex-start"}}>
        <View style ={{marginLeft:20, marginTop: 10,  }}>
             <Image
          source={require("../../Image/email.png")}
          style={{
            width:40,
            height:40,
            resizeMode:'cover'
          }}
        />
        </View>
                <Text style={{marginLeft: 19, marginTop: 18, fontSize:16,color:"#586168",fontWeight:"bold"}}>Customer.complaints@hbl.com</Text>
        </View>
        </TouchableOpacity>

        <View
        style={{
          borderBottomColor: '#586168',
          borderBottomWidth: 1,
          marginTop:10,
          width:"100%",
          alignSelf:'center'
        }}
      />
{/*Single Row End email*/}


{/*Single Row Start facebook*/} 
        <TouchableOpacity
            onPress={ ()=> Linking.openURL('https://facebook.com/HBLBank/') }>   
        <View style={{flexDirection:"row",marginTop:5}}>
        <View style ={{marginLeft:20, marginTop: 10,  }}>
             <Image
          source={require("../../Image/facebook.png")}
          style={{
            width:40,
            height:40,
            resizeMode:'cover'
          }}
        />
        </View>
        
        <Text style={{marginLeft: 19, marginTop: 18, fontSize:16,color:"#586168",fontWeight:"bold"}}>Hblbank</Text>
        
        </View></TouchableOpacity>

        <View
        style={{
          borderBottomColor: '#586168',
          borderBottomWidth: 1,
          marginTop:10,
          width:"100%",
          alignSelf:'center'
        }}
      />
{/*Single Row End facebook*/}

{/*Single Row Start twitter*/} 
<TouchableOpacity
            onPress={ ()=> Linking.openURL('https://twitter.com/HBLPak?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor') }>
<View style={{flexDirection:"row",marginTop:5}}>
        <View style ={{marginLeft:20, marginTop: 10,  }}>
             <Image
          source={require("../../Image/twitter.png")}
          style={{
            width:40,
            height:40,
            resizeMode:'cover'
          }}
        />
        </View>

        <Text style={{marginLeft: 19, marginTop: 18, fontSize:16,color:"#586168",fontWeight:"bold"}}>HBLPak</Text>
        </View></TouchableOpacity>

        <View
        style={{
          borderBottomColor: '#586168',
          borderBottomWidth: 1,
          marginTop:10,
          width: "100%",
          alignSelf:'center'
        }}
      />
{/*Single Row End twitter*/}

{/*Single Row Start linkedin*/} 
<TouchableOpacity
            onPress={ ()=> Linking.openURL('https://pk.linkedin.com/company/hblofficial') }>

<View style={{flexDirection:"row",marginTop:5}}>
        <View style ={{marginLeft:20, marginTop: 10,  }}>
             <Image
          source={require("../../Image/linkedin.png")}
          style={{
            width:40,
            height:40,
            resizeMode:'cover'
          }}
        />
        </View>
        <Text style={{marginLeft: 19, marginTop: 18, fontSize:16,color:"#586168",fontWeight:"bold"}}>HBL-Habib Bank Limited</Text>
        </View></TouchableOpacity>

        <View
        style={{
          borderBottomColor: '#586168',
          borderBottomWidth: 1,
          marginTop:10,
          width:"100%",
          alignSelf:'center'
        }}
      />
{/*Single Row End linkedin*/}

{/*Single Row Start youtube*/}  
<TouchableOpacity
            onPress={ ()=> Linking.openURL('https://www.youtube.com/channel/UC2alh3-B78Df0FnkiArxyWA') }>  
<View style={{flexDirection:"row",marginTop:5}}>
        <View style ={{marginLeft:20, marginTop: 10,  }}>
             <Image
          source={require("../../Image/youtube.png")}
          style={{
            width:40,
            height:40,
            resizeMode:'cover'
          }}
        />
        </View>

        <Text style={{marginLeft: 19, marginTop: 18, fontSize:16,color:"#586168",fontWeight:"bold"}}>HBL</Text>
        </View></TouchableOpacity>

        <View
        style={{
          borderBottomColor: '#586168',
          borderBottomWidth: 1,
          marginTop:10,
          width:"100%",
          alignSelf:'center'
        }}
      />
{/*Single Row End youtube*/}

{/*Single Row Start intagram*/}
      <TouchableOpacity
            onPress={ ()=> Linking.openURL('https://www.instagram.com/hblpak/?hl=en') }>
      <View style={{flexDirection:"row",marginTop:5}}>
        <View style ={{marginLeft:20, marginTop: 10,  }}>
             <Image
          source={require("../../Image/insta.png")}
          style={{
            width:40,
            height:40,
            resizeMode:'cover'
          }}
        />
        </View>

        <Text style={{marginLeft: 19, marginTop: 18, fontSize:16,color:"#586168",fontWeight:"bold"}}>hblpak</Text>
        </View></TouchableOpacity>

        <View
        style={{
          borderBottomColor: '#586168',
          borderBottomWidth: 1,
          marginTop:10,
          width:"100%",
          alignSelf:'center'
        }}
      />
{/*Single Row End instagram*/}

{/*Single Row Start globe*/}   
          <TouchableOpacity
            onPress={ ()=> Linking.openURL('https://www.hbl.com/customer-assistance/complaint-form') }> 
      <View style={{flexDirection:"row",marginTop:5}}>
        <View style ={{marginLeft:20, marginTop: 10,  }}>
             <Image
          source={require("../../Image/globe.png")}
          style={{
            width:40,
            height:40,
            resizeMode:'cover'
          }}
        />
        </View>

        <Text style={{marginLeft: 19, marginTop: 18, fontSize:16,color:"#586168",fontWeight:"bold"}}>www.hbl.com/complaintmanagement</Text>
        </View></TouchableOpacity>
        
        <View
        style={{
          borderBottomColor: '#586168',
          borderBottomWidth: 1,
          marginTop:10,
          width:"100%",
          alignSelf:'center'
        }}
      />
{/*Single Row End globe*/}

{/*Single Row Start phone*/}    
          <TouchableOpacity
            onPress={ ()=> Linking.openURL('tel:021111111425') }>
          <View style={{flexDirection:"row",marginTop:5}}>
        <View style ={{marginLeft:20, marginTop: 10,  }}>
             <Image
          source={require("../../Image/phone.png")}
          style={{
            width:40,
            height:40,
            resizeMode:'cover'
          }}
        />
        </View>

        <Text style={{marginLeft: 19, marginTop: 18, fontSize:16, color:"#586168",fontWeight:"bold"}}>021-111-111-425</Text>
        </View></TouchableOpacity>

        <View
        style={{
          borderBottomColor: '#586168',
          borderBottomWidth: 1,
          marginTop:10,
          width:"100%",
          alignSelf:'center'
        }}
      />
{/*Single Row End phone*/}
        </SafeAreaView></ScrollView>
    )
}