import PropTypes from 'prop-types';
import React, {Component,useState} from 'react';
// import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View,StyleSheet, Image, Appearance} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Avatar } from 'react-native-elements';
import PenIcon  from 'react-native-vector-icons/FontAwesome';
import StarIcon from 'react-native-vector-icons/Entypo';
import CheckIcon from 'react-native-vector-icons/AntDesign'
import { Col, Grid, Row } from 'react-native-easy-grid';
import MenuIcon from 'react-native-vector-icons/AntDesign';

const coupondetail=({navigation})=> {
  const [theme,setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme)=>{
    setTheme(scheme.colorScheme);
  })
  const res_text = navigation.getParam('coupon_data','nothing sent')
  const coupon_detail =  res_text.coupon_list[0]

    return (
      <View style={theme == 'light'?styles.container:Darkstyles.container}>
         <View style={{flexDirection:'row',justifyContent:'center'}}>
         <Image source={theme == 'light' ? require('../img/zabihah.png'):require('../img/Zabihahblack.png')}  style={{alignSelf:'center',padding:10}}/>
          <MenuIcon name='arrowleft' color={theme=='light'?"black":"white"} size={30} style={{left:0,position:'absolute',marginLeft:13}} onPress={()=>navigation.navigate('mosquedetail')}/>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',left:20,top:20,width:'100%',height:'14%'}}>
              <View>
              <Text style={theme == 'light'?styles.text:Darkstyles.text}>{res_text.name}</Text>
              <Grid>
                  <Row style={{width:'100%',top:10}}>
                      <Col style={{width:'30%',backgroundColor:'#FFCC2A',height:30,justifyContent:'center'}}>
                      <Text style={{alignSelf:'center',fontWeight:'bold',color:'black',fontFamily:'Lato-Regular'}}>
                          {res_text.cuisine}
                      </Text>
                      </Col>
                      <Col style={{width:'30%',backgroundColor:'#FFCC2A',height:30,justifyContent:'center',left:10}}>
                      <Text style={{alignSelf:'center',fontWeight:'bold',color:'black',fontFamily:'Lato-Regular'}}>
                      {res_text.cuisine}
                      </Text>
                      </Col>
                      <Col style={{width:'30%',backgroundColor:'#FFCC2A',height:30,justifyContent:'center',left:10,marginLeft:10}}>
                      <Text style={{alignSelf:'center',fontWeight:'bold',color:'black',fontFamily:'Lato-Regular'}}>
                      {res_text.cuisine}
                      </Text>
                      </Col>
                  </Row>
              </Grid>
             
              </View>
         
         
          </View>
         
          <Text style={theme == 'light'?styles.text_more:Darkstyles.text_more}>Enjoy this exclusive coupon</Text>
         
    
        <View style={styles.first_grid}>       
                
                <Text style={{fontSize:20,fontWeight:'bold',color:'#990000',fontFamily:'Lato-Regular'}}>
                  {coupon_detail.coup_title} 
                </Text>
                <Text style={{fontSize:15,color:'black',marginTop:5,fontFamily:'Lato-Regular'}}>
                 {coupon_detail.coup_body}
                </Text>
                <View>
                <Text style={{fontSize:15,color:'black',marginTop:10,fontFamily:'Lato-Bold'}}>
                  Terms and conditions:
                  </Text>
                  <Text style={{fontSize:15,color:'black',fontFamily:'Lato-Regular',marginTop:5}}>{coupon_detail.coup_terms} Offer good until {coupon_detail.coup_end_format}</Text>
                  </View>
                  <Text style={{fontSize:12,color:'black',marginTop:10,fontFamily:'Lato-Regular'}}>Coupon data is provided by participating halal restaurants and markets. Zabihah L.L.C is not responsible for the validity or accuracy of the coupon information shown. Any queries should be directed directly to the participating merchant.</Text>
                
        </View>

      </View>
    );
  
}


export default coupondetail;


const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      width:'100%',
      height:'100%',
      backgroundColor:'#F2F2F3'
    },
   
    first_grid:{
        padding:15,
         backgroundColor:'#FFCC2A',
   
        },
        text:{color:'black',fontSize:25,fontWeight:'bold',fontFamily:'Lato-Regular'},
        text_more:{left:20,color:'black',fontWeight:'bold',fontSize:18,justifyContent:'flex-end',marginVertical:10,fontFamily:'Lato-Regular'}
});
const Darkstyles = StyleSheet.create({
  container: {
    paddingTop: 20,
    width:'100%',
    height:'100%',
    backgroundColor:'black'
  },
 text:{color:'white',fontSize:25,fontWeight:'bold',fontFamily:'Lato-Regular'},
 text_more:{left:20,color:'white',fontWeight:'bold',fontSize:18,justifyContent:'flex-end',marginVertical:10,fontFamily:'Lato-Regular'}
      
});