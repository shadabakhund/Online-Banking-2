import React from 'react'

import {View, Text,StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Linking, Image} from 'react-native'


export default function locator(){

    return(
    <ScrollView>
	<SafeAreaView style={{flex:1}}>
        <View>
            <Text style={{fontSize:22, backgroundColor:"#009591", color:"white", textAlign:"center", 
            fontWeight:"bold", marginTop: 10,}}>Click Your {'\n'} Nearby Location</Text>
        </View>
<View style={{flexDirection:'row', alignSelf: 'center', paddingTop:15,}}>
<TouchableOpacity
    style={styles.border}
     onPress={ ()=> Linking.openURL('https://www.google.com/maps/place/Habib+Bank+Ltd.+(HBL)+Plaza/@24.8499578,67.0055186,15z/data=!4m5!3m4!1s0x0:0xcbda29c3a7083062!8m2!3d24.8499578!4d67.0055186') }>
        <Image
          source={require("../../Image/2.jpg")}
          style={{
            width:160,
            height:130,
            resizeMode:'cover',
            
        }}
    />
    <Text style={{textAlign:"center", fontSize:15, fontWeight:"bold", color:"#009591"}}>HBL Plaza Branch</Text>
    </TouchableOpacity>
        
    <TouchableOpacity
    style={styles.border}
     onPress={ ()=> Linking.openURL('https://www.google.com/maps/place/Habib+Bank+Ltd.+(HBL)+Plaza/@24.8499578,67.0055186,15z/data=!4m5!3m4!1s0x0:0xcbda29c3a7083062!8m2!3d24.8499578!4d67.0055186') }>
        <Image
          source={require("../../Image/3.jpeg")}
          style={{
            width:160,
            height:130,
            resizeMode:'cover',
            
        }}
    />
    <Text style={{textAlign:"center", fontSize:15, fontWeight:"bold", color:"#009591"}}>HBL WestLand Branch</Text>
    </TouchableOpacity>
        
</View>

<View style={{flexDirection:'row', alignSelf: 'center', paddingTop:15,}}>
<TouchableOpacity
    style={styles.border}
     onPress={ ()=> Linking.openURL('https://www.google.com/maps/place/Habib+Bank+Ltd.+(HBL)+Plaza/@24.8499578,67.0055186,15z/data=!4m5!3m4!1s0x0:0xcbda29c3a7083062!8m2!3d24.8499578!4d67.0055186') }>
        <Image
          source={require("../../Image/4.jpg")}
          style={{
            width:160,
            height:130,
            resizeMode:'cover',
            
        }}
    />
    <Text style={{textAlign:"center", fontSize:15, fontWeight:"bold", color:"#009591"}}>HBL Saddar Branch</Text>
    </TouchableOpacity>
        
    <TouchableOpacity
    style={styles.border}
     onPress={ ()=> Linking.openURL('https://www.google.com/maps/place/Habib+Bank+Ltd.+(HBL)+Plaza/@24.8499578,67.0055186,15z/data=!4m5!3m4!1s0x0:0xcbda29c3a7083062!8m2!3d24.8499578!4d67.0055186') }>
        <Image
          source={require("../../Image/2.jpg")}
          style={{
            width:160,
            height:130,
            resizeMode:'cover',
            
        }}
    />
    <Text style={{textAlign:"center", fontSize:15, fontWeight:"bold", color:"#009591"}}>HBL Plaza Branch</Text>
    </TouchableOpacity>
        
</View>

<View style={{flexDirection:'row', alignSelf: 'center', paddingTop:15,}}>
<TouchableOpacity
    style={styles.border}
     onPress={ ()=> Linking.openURL('https://www.google.com/maps/place/Habib+Bank+Ltd.+(HBL)+Plaza/@24.8499578,67.0055186,15z/data=!4m5!3m4!1s0x0:0xcbda29c3a7083062!8m2!3d24.8499578!4d67.0055186') }>
        <Image
          source={require("../../Image/2.jpg")}
          style={{
            width:160,
            height:130,
            resizeMode:'cover',
            
        }}
    />
    <Text style={{textAlign:"center", fontSize:15, fontWeight:"bold", color:"#009591"}}>HBL Plaza Branch</Text>
    </TouchableOpacity>
        
    <TouchableOpacity
    style={styles.border}
     onPress={ ()=> Linking.openURL('https://www.google.com/maps/place/Habib+Bank+Ltd.+(HBL)+Plaza/@24.8499578,67.0055186,15z/data=!4m5!3m4!1s0x0:0xcbda29c3a7083062!8m2!3d24.8499578!4d67.0055186') }>
        <Image
          source={require("../../Image/3.jpeg")}
          style={{
            width:160,
            height:130,
            resizeMode:'cover',
            
        }}
    />
    <Text style={{textAlign:"center", fontSize:15, fontWeight:"bold", color:"#009591"}}>HBL WestLand Branch</Text>
    </TouchableOpacity>
        
</View>

<View style={{flexDirection:'row', alignSelf: 'center', paddingTop:15,}}>
<TouchableOpacity
    style={styles.border}
     onPress={ ()=> Linking.openURL('https://www.google.com/maps/place/Habib+Bank+Ltd.+(HBL)+Plaza/@24.8499578,67.0055186,15z/data=!4m5!3m4!1s0x0:0xcbda29c3a7083062!8m2!3d24.8499578!4d67.0055186') }>
        <Image
          source={require("../../Image/4.jpg")}
          style={{
            width:160,
            height:130,
            resizeMode:'cover',
            
        }}
    />
    <Text style={{textAlign:"center", fontSize:15, fontWeight:"bold", color:"#009591"}}>HBL Saddar Branch</Text>
    </TouchableOpacity>
        
    <TouchableOpacity
    style={styles.border}
     onPress={ ()=> Linking.openURL('https://www.google.com/maps/place/Habib+Bank+Ltd.+(HBL)+Plaza/@24.8499578,67.0055186,15z/data=!4m5!3m4!1s0x0:0xcbda29c3a7083062!8m2!3d24.8499578!4d67.0055186') }>
        <Image
          source={require("../../Image/2.jpg")}
          style={{
            width:160,
            height:130,
            resizeMode:'cover',
            
        }}
    />
    <Text style={{textAlign:"center", fontSize:15, fontWeight:"bold", color:"#009591"}}>HBL Plaza Branch</Text>
    </TouchableOpacity>
        
</View>

<View style={{flexDirection:'row', alignSelf: 'center', paddingTop:15,}}>
<TouchableOpacity
    style={styles.border}
     onPress={ ()=> Linking.openURL('https://www.google.com/maps/place/Habib+Bank+Ltd.+(HBL)+Plaza/@24.8499578,67.0055186,15z/data=!4m5!3m4!1s0x0:0xcbda29c3a7083062!8m2!3d24.8499578!4d67.0055186') }>
        <Image
          source={require("../../Image/2.jpg")}
          style={{
            width:160,
            height:130,
            resizeMode:'cover',
            
        }}
    />
    <Text style={{textAlign:"center", fontSize:15, fontWeight:"bold", color:"#009591"}}>HBL Plaza Branch</Text>
    </TouchableOpacity>
        
    <TouchableOpacity
    style={styles.border}
     onPress={ ()=> Linking.openURL('https://www.google.com/maps/place/Habib+Bank+Ltd.+(HBL)+Plaza/@24.8499578,67.0055186,15z/data=!4m5!3m4!1s0x0:0xcbda29c3a7083062!8m2!3d24.8499578!4d67.0055186') }>
        <Image
          source={require("../../Image/3.jpeg")}
          style={{
            width:160,
            height:130,
            resizeMode:'cover',
            
        }}
    />
    <Text style={{textAlign:"center", fontSize:15, fontWeight:"bold", color:"#009591"}}>HBL WestLand Branch</Text>
    </TouchableOpacity>
        
</View>

<View style={{flexDirection:'row', alignSelf: 'center', paddingTop:15,}}>
<TouchableOpacity
    style={styles.border}
     onPress={ ()=> Linking.openURL('https://www.google.com/maps/place/Habib+Bank+Ltd.+(HBL)+Plaza/@24.8499578,67.0055186,15z/data=!4m5!3m4!1s0x0:0xcbda29c3a7083062!8m2!3d24.8499578!4d67.0055186') }>
        <Image
          source={require("../../Image/4.jpg")}
          style={{
            width:160,
            height:130,
            resizeMode:'cover',
            
        }}
    />
    <Text style={{textAlign:"center", fontSize:15, fontWeight:"bold", color:"#009591"}}>HBL Saddar Branch</Text>
    </TouchableOpacity>
        
    <TouchableOpacity
    style={styles.border}
     onPress={ ()=> Linking.openURL('https://www.google.com/maps/place/Habib+Bank+Ltd.+(HBL)+Plaza/@24.8499578,67.0055186,15z/data=!4m5!3m4!1s0x0:0xcbda29c3a7083062!8m2!3d24.8499578!4d67.0055186') }>
        <Image
          source={require("../../Image/2.jpg")}
          style={{
            width:160,
            height:130,
            resizeMode:'cover',
            
        }}
    />
    <Text style={{textAlign:"center", fontSize:15, fontWeight:"bold", color:"#009591"}}>HBL Plaza Branch</Text>
    </TouchableOpacity>
        
</View>


	</SafeAreaView>
    </ScrollView>
    )
}
const styles = StyleSheet.create({

      border:{
        borderRadius:15, 
        borderColor:'#009591', 
        borderWidth:6,
        backgroundColor:"white",
        marginRight:7,
      }

    
    
})
