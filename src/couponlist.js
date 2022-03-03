import PropTypes from 'prop-types';
import React, {Component,useState,useEffect} from 'react';
import { Text, View,StyleSheet, Image, Appearance, FlatList, TouchableOpacity} from 'react-native';;
import { Col, Grid, Row } from 'react-native-easy-grid';
import MenuIcon from 'react-native-vector-icons/AntDesign';
import Axios from 'axios'
import {ServiceConstant} from '../serviceconstant'

const couponlist=({navigation})=> {
  const [res_data,setRes_Data] = useState([])
  const [coupon,setCoupon] = useState([])
  const [theme,setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme)=>{
    setTheme(scheme.colorScheme);
  })
  useEffect(()=>{
    Axios
    .post(ServiceConstant.data_particular_record + "?" + "key" + "=" + ServiceConstant.key + "&" + "uuid" + "=" + ServiceConstant.uuid + "&" + "id" + "=" + rest_id + "&" + "t" + "=" + 1)
    .then(function(data){
      setRes_Data(data.data.data)
      setCoupon(data.data.data.coupon_list)
      // alert(JSON.stringify(coupon))
    })
  })
  const rest_id = navigation.getParam('restaurant_id','nothing sent')

  
    return (
      <View style={theme == 'light'?styles.container:Darkstyles.container}>
         <View style={{flexDirection:'row',justifyContent:'center'}}>
         <Image source={theme == 'light' ? require('../img/zabihah.png'):require('../img/Zabihahblack.png')}  style={{alignSelf:'center',padding:10}}/>
          <MenuIcon name='arrowleft' color={theme=='light'?"black":"white"} size={30} style={{left:0,position:'absolute',marginLeft:13}} onPress={()=>navigation.navigate('mosquedetail')}/>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',left:20,top:20,width:'100%',height:'14%'}}>
              <View>
              <Text style={theme == 'light'?styles.text:Darkstyles.text}>{res_data.name}</Text>
              <View style={{flexDirection:'row'}}>
                      <View style={{backgroundColor:'#FFCC2A',justifyContent:'center'}}>
                      <Text style={{color:'black',fontWeight:'bold',padding:5}}>
                          {res_data.cuisine}
                      </Text>
                      </View>
                      
                 
              </View>           
              </View>
          </View>
         
          <Text style={theme == 'light'?styles.text_more:Darkstyles.text_more}>{res_data.coupons} exclusive coupons</Text>
         
    <FlatList data={coupon} renderItem={({item})=>
  <TouchableOpacity style={styles.first_grid} onPress={()=>navigation.navigate('coupondetail',{coupon_data:res_data})}>                    
  <Text style={{fontSize:20,fontWeight:'bold',color:'#990000'}}>
   {item.coup_title}
  </Text>
  <View style={{flexDirection:'row'}}>
      <Image source={require('../img/ticket.png')} style={{alignSelf:'center',width:50,height:30}}/>
    <View style={{left:10}}>
  <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>
    {res_data.name}
    </Text>
    <Text style={{fontSize:15,color:'grey'}}>
    Offer expires {item.coup_end_format}
    </Text>
    </View>
    </View>
  
</TouchableOpacity>
  }/>

      </View>
    );
  
}


export default couponlist;


const styles = StyleSheet.create({
   

    container: {
      paddingTop: 20,
      width:'100%',
      height:'100%',
      backgroundColor:'#F2F2F3'
    },
   
    first_grid:{
      marginTop:10,
        padding:15,
         backgroundColor:'#FFCC2A',
        justifyContent:'center',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
        },
     grid_style:{
            padding:15,
         backgroundColor:'#FFCC2A',
            marginTop:15,
        justifyContent:'center',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
        },
        text:{color:'black',fontSize:25,fontWeight:'bold'},
        text_more:{left:20,color:'black',fontWeight:'bold',fontSize:18,justifyContent:'flex-end',marginVertical:10}
});
const Darkstyles = StyleSheet.create({
   

  container: {
    paddingTop: 20,
    width:'100%',
    height:'100%',
    backgroundColor:'black'
  },
 
  first_grid:{
      padding:15,
       backgroundColor:'#FFCC2A',
      justifyContent:'center',
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      
      elevation: 5,
      },
   grid_style:{
          padding:15,
       backgroundColor:'#FFCC2A',
          marginTop:15,
      justifyContent:'center',
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      
      elevation: 5,
      },
      text:{color:'white',fontSize:25,fontWeight:'bold'},
        text_more:{left:20,color:'white',fontWeight:'bold',fontSize:18,justifyContent:'flex-end',marginVertical:10}
});