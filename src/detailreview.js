import PropTypes from 'prop-types';
import React, {Component,useState,useEffect} from 'react';
// import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View,StyleSheet, Image, Appearance, FlatList, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Avatar } from 'react-native-elements';
import PenIcon  from 'react-native-vector-icons/FontAwesome';
import StarIcon from 'react-native-vector-icons/Entypo';
import CheckIcon from 'react-native-vector-icons/AntDesign'
import { Col, Grid, Row } from 'react-native-easy-grid';
import MenuIcon from 'react-native-vector-icons/AntDesign';
import DetailreviewCard from './component/detailreviewcard';
import Axios from 'axios'
import { ServiceConstant } from '../serviceconstant';

const detailreview=({navigation})=> {
  const [review,setReview] = useState([])
    const [theme,setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme)=>{
      setTheme(scheme.colorScheme);
    })
    useEffect(()=>{
      Axios
      .post(ServiceConstant.data_particular_record + "?" + "key" + "=" + ServiceConstant.key + "&" + "uuid" + "=" + ServiceConstant.uuid + "&" + "id" + "=" + res_id + "&" + "t" + "=" + 1 )
      .then(function(data){
       setReview(data.data.data.review_list)
      //  console.log(review)      
      })
    },[])
    const res_text = navigation.getParam('review_data','nothing sent')
    const res_id = res_text.id
    //  const memb_id = review[0].member_id


    return (
      <View style={theme == 'light'?styles.container:Darkstyles.container}>
         <View style={{flexDirection:'row',justifyContent:'center'}}>
         <Image source={theme == 'light' ? require('../img/zabihah.png'):require('../img/Zabihahblack.png')}  style={{alignSelf:'center',padding:10}}/>
          <MenuIcon name='arrowleft' color={theme == 'light'?'black':'white'} size={30} style={{left:0,position:'absolute',marginLeft:13}} onPress={()=>navigation.navigate('restaurantdetail')}/>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',left:20,width:'100%',height:'14%'}}>
              <View>
              <Text style={theme == 'light'?styles.text:Darkstyles.text}>{res_text.name}</Text>
              <View style={{flexDirection:'row',right:5}}>
           <Text style={{backgroundColor:'#FFCC2A',fontSize:12,padding:2,margin:5,fontWeight:'bold',color:'black'}}>{res_text.cuisine}</Text>
           {/* <Text style={{backgroundColor:'#FFCC2A',fontSize:12,margin:5,padding:2,fontWeight:'bold',color:'black'}}>{item.cuisine}</Text> */}
        </View>        
              </View>
          </View>
         
          <Text style={theme == 'light'?styles.main_text:Darkstyles.main_text}>{res_text.reviews} reviews</Text>
         
     <FlatList
     data={review}
     style={{width:'100%'}}
     renderItem={({item})=>
     <TouchableOpacity style={theme == 'light'?styles.grid_style:Darkstyles.grid_style} onPress={()=>navigation.navigate('profilereviews',{member_id:item.member_id})}>
     <Row>
         <Col style={{width:60}}>
         <Avatar rounded source={{uri:item.avatar}} size="medium" /> 
         {/* <Image source={{uri:item.avatar}} style={{width:40,height:40,alignSelf:'center',borderRadius:15}}/> */}
         </Col>
         <Col>
         <Text style={theme == 'light'?styles.text:Darkstyles.text}>
           {item.rev_name}
         </Text>
         <Text style={theme == 'light'?styles.text_under:Darkstyles.text_under}>
           {item.rev_date}
         </Text>
         </Col>

         <Col style={{position:'relative',right:0,flexDirection:'column',width:'30%'}}>
         <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
           <Text style={{color:'yellow'}}>
           {item.rating_text}
           </Text>
         </View>
        
         <View style={{backgroundColor:'#28A928',alignItems:'center',justifyContent:'center',padding:2}}>
         <Text style={{color:'white',fontWeight:'bold'}}>
           WILL RETURN
         </Text>
         </View>
         </Col>
     </Row>

     <Row style={{flexDirection:'column'}}>
         <View style={{flexDirection:'row'}}>        
             <Text style={theme == 'light'?styles.normal_text:Darkstyles.normal_text}>{item.rev_text}</Text>
         </View>                  
     </Row>       
 </TouchableOpacity>
    }/>
       
      </View>
    );
  
}


export default detailreview;

const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      width:'100%',
      height:'100%',
      backgroundColor:'#F2F2F3'
    },
    main_text:{color:'black',fontSize:17,left:10,fontWeight:'bold',alignItems:'center'},
    text:{color:'black',fontWeight:'bold',fontSize:25},
    grid_style:{
      padding:15,
      shadowOffset: {width: 0,height: 2, },
       shadowOpacity: 0.25, 
       shadowRadius: 3.84,  
       elevation: 5,
       backgroundColor:'white',
       marginTop:15
      },
  text:{fontSize:17,fontFamily:'Lato-Bold',color:'black'},
  text_under:{fontSize:13,color:'grey',fontFamily:'Lato-Regular'},
  normal_text:{fontFamily:'Lato-Regular',fontSize:15,color:'grey'}
  
  });
  const Darkstyles = StyleSheet.create({
  container: {
    paddingTop: 20,
    width:'100%',
    height:'100%',
    backgroundColor:'black'
  },
  main_text:{color:'white',fontSize:17,left:10,fontWeight:'bold'},
  text:{color:'white',fontWeight:'bold',fontSize:25},
  grid_style:{
    padding:15,
    shadowOffset: {width: 0,height: 2, },
     shadowOpacity: 0.25, 
     shadowRadius: 3.84,  
     elevation: 5,
     backgroundColor:'#494949',
     marginTop:15
    },
text:{fontSize:17,color:'white',fontFamily:'Lato-Bold'},
text_under:{fontSize:13,color:'white',fontFamily:'Lato-Regular'},
normal_text:{fontFamily:'Lato-Regular',fontSize:15,color:'grey',padding:5}
  });