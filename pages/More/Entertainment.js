import React from 'react'

import {View, Text,StyleSheet, SafeAreaView, ScrollView, Image, ViewBase, TouchableOpacity, Linking} from 'react-native'
import Swiper from "react-native-swiper"


export default function Entertainment(){

    return(
    <ScrollView>
	<SafeAreaView style={{flex:1}}>
          <View style={{marginTop:12}}>
            	 <Swiper autoplay ={true} style ={{height:250}}>
              <View style ={styles.slide1}>
                <Image 
                        source ={{uri:"https://i1.wp.com/menuprices.pk/wp-content/uploads/2021/04/KFC-HBL-Mobile-Deal-scaled.jpg?ssl=1"}}
                        style ={{height:200, width:330, borderRadius:29}}
                />
              </View>  

              <View style ={styles.slide2}>
                <Image 
                        source ={{uri:"https://propakistani.pk/wp-content/uploads/2018/05/Untitled-1.jpg"}}
                        style ={{height:200, width:330, borderRadius:29}}
                />
              </View>    


              <View style ={styles.slide3}>
                <Image 
                        source ={{uri:"https://peekaboo.guru/blog/wp-content/uploads/2021/04/HBL-Banner-003-1-1024x536.jpg"}}
                        style ={{height:200, width:330, borderRadius:29}}
                />
              </View>


            </Swiper>
       	  </View>

        <View style={{backgroundColor:"#009591"}}>
           <Text style={{textAlign:"center", color:"white", fontSize: 25, fontWeight:"bold"}}>HBL Deals & Discounts</Text> 
        </View>
<ScrollView
  horizontal={true}
  showsHorizontalScrollIndicator={false}

  style={{alignSelf: 'center',
marginLeft:13 ,}}
  
  >
        <View>
          <View style={{flexDirection: 'row', alignSelf:"center"}}>
          <View style={{paddingRight:13}}>
          <TouchableOpacity style={styles.bigbuttons}
                 onPress={ ()=> Linking.openURL('https://www.hbl.com/personal/cards/hbl-deals-and-discounts')}>
              <View style={{backgroundColor:"white", width:85, height:85, marginTop:5, borderRadius:25,alignSelf: 'center',}}>
                <Image
                source={require("../../Image/karachi.jpg")}    
                style={{
                    width:85,
                    height:85,
                    resizeMode:"center",
                    alignSelf:"center",
                    borderRadius:25
                
                }}
            /></View>
            
                <Text style={{textAlign:'center', marginTop: 0, color:'#fff',  fontWeight:'bold'}}>Karachi</Text>
                </TouchableOpacity>
            </View>
            <View style={{paddingRight:13}}>
            <TouchableOpacity style={styles.bigbuttons}
                 onPress={ ()=> Linking.openURL('https://www.hbl.com/personal/cards/hbl-deals-and-discounts')}>
                <View style={{backgroundColor:"white", width:85, height:85, marginTop:5, borderRadius:25,alignSelf: 'center',}}>
                  <Image
                source={require("../../Image/Lahore.jpg")}    
                style={{
                    
                    width:85,
                    height:85,
                    resizeMode:"center",
                    alignSelf:"center",
                    borderRadius:25
                
                }}
            /></View>
            
                <Text style={{textAlign:'center', marginTop: 0, color:'#fff',  fontWeight:'bold'}}>Lahore</Text>
            </TouchableOpacity>
            </View>
            
            <View style={{paddingRight:13}}>
          <TouchableOpacity style={styles.bigbuttons}
                 onPress={ ()=> Linking.openURL('https://www.hbl.com/personal/cards/hbl-deals-and-discounts')}>
          <View style={{backgroundColor:"white", width:85, height:85, marginTop:5, borderRadius:25,alignSelf: 'center',}}>
                <Image
                source={require("../../Image/Islamabad.jpg")}    
                style={{
                    width:85,
                    height:85,
                    alignSelf:"center",
                    resizeMode:"center",
                    borderRadius:29
                
                }}
            />
            </View>
                <Text style={{textAlign:'center', marginTop: 0, color:'#fff',  fontWeight:'bold'}}>Islamabad</Text>
                </TouchableOpacity>
            </View>
            <View style={{paddingRight:13}}>
            <TouchableOpacity style={styles.bigbuttons}
                 onPress={ ()=> Linking.openURL('https://www.hbl.com/personal/cards/hbl-deals-and-discounts')}>
                  <View style={{backgroundColor:"white", width:85, height:85, marginTop:5, borderRadius:25,alignSelf: 'center',}}>
                    <Image
                source={require("../../Image/RawalPindi.jpg")}    
                style={{
                    resizeMode:"center", 
                    width:85,
                    height:85,
                    alignSelf:"center",
                    borderRadius:29
                
                }}
            />
            </View>
                <Text style={{textAlign:'center', marginTop: 0, color:'#fff',  fontWeight:'bold'}}>RawalPindi</Text>
            </TouchableOpacity>
            </View>
            <View style={{paddingRight:13}}>
          <TouchableOpacity style={styles.bigbuttons}
                 onPress={ ()=> Linking.openURL('https://www.hbl.com/personal/cards/hbl-deals-and-discounts')}>
          <View style={{backgroundColor:"white", width:85, height:85, marginTop:5, borderRadius:25,alignSelf: 'center',}}>
                <Image
                source={require("../../Image/Multan.jpg")}    
                style={{
                    resizeMode:"center",
                    width:85,
                    height:85,
                    alignSelf:"center",
                    borderRadius:29
                
                }}
            />
          </View>
                <Text style={{textAlign:'center', marginTop: 0, color:'#fff',  fontWeight:'bold'}}>Multan</Text>
                </TouchableOpacity>
            </View>
            <View style={{paddingRight:13}}>
            <TouchableOpacity style={styles.bigbuttons}
                 onPress={ ()=> Linking.openURL('https://www.hbl.com/personal/cards/hbl-deals-and-discounts')}>
            <View style={{backgroundColor:"white", width:85, height:85, marginTop:5, borderRadius:25,alignSelf: 'center',}}>
                <Image
                source={require("../../Image/Peshawar.jpg")}    
                style={{
                    resizeMode:"center",
                    width:85,
                    height:85,
                    alignSelf:"center",
                    borderRadius:29
                
                }}
            />
            </View> 
                <Text style={{textAlign:'center', marginTop: 0, color:'#fff',  fontWeight:'bold'}}>Peshawar</Text>
            </TouchableOpacity>
            </View>
          </View>

          
        </View>
</ScrollView>
	</SafeAreaView>
    </ScrollView>
    )
}
const styles = StyleSheet.create({

    slide1: {
      height:250,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      slide2: {
        height:250,
        justifyContent: 'center',
        alignItems: 'center',

      },
      slide3: {
        height:250,
        justifyContent: 'center',
        alignItems: 'center',
        
      },

  bigbuttons:{
          height: 110, 
          marginTop: 10, 
          backgroundColor:'#009591', 
          borderRadius:18, 
          width:110, 
        },
      
  

})