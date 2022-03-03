import PropTypes from 'prop-types';
import React, {Component, useState,useEffect} from 'react';
import {Text, View,StyleSheet, Image, Appearance, TextInput, ToastAndroid} from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import MenuIcon from 'react-native-vector-icons/AntDesign';
import Addreviewcard from './component/addreviewcard';
import ButtonWhite from './component/buttonwhite';
import ButtonRed from './component/buttonred';
import { ScrollView } from 'react-native-gesture-handler';
import Axios from 'axios'
import { ServiceConstant } from '../serviceconstant';
import {Picker} from '@react-native-picker/picker'

const addreviewmarket=({navigation})=> {
    const [rating,setRating] = useState("")
    const [person,setPerson] = useState("")
    const [expense,setExpense] = useState("")
    const [returning,setReturning] = useState("")
    const [review,setReview] = useState("")
    const [theme,setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme)=>{
      setTheme(scheme.colorScheme);
    })
    const [counter,setCounter] = useState(0);
    const increament = () =>{
        setCounter(counter + 1)
    }
    const decreament = () =>{
        setCounter(counter - 1)
    }
    const review_add = ()=>{
        if(rating === ""){
            ToastAndroid.show('Enter Rating 1 to 5',2000)
        }else if(person === ""){
            ToastAndroid.show('Enter how many person in your party',2000)
        }else if(expense === ""){
            ToastAndroid.show('Enter how expense was it',2000)
        }else if(returning === ""){
            ToastAndroid.show('Enter returning YES or NO',2000)
        }else if(review === ""){
            ToastAndroid.show('Enter your review',2000)
        }else if(Axios
            .post(ServiceConstant.submit_review + "?" + "key" + "=" + ServiceConstant.key + "&" + "uuid" + "=" + ServiceConstant.uuid + "&" + "mid" + "=" + ServiceConstant.user_login_data + "&" + "t" + "=" + 2 + "&" + "id" + "=" + review_text.id + "&" + "rating" + "=" + rating + "&" + "review" + "=" + review + "&" + "rev_spend" + "=" + expense + "&" + "rev_party" + "=" + person + "&" + "rev_return" + "=" + returning)
            .then(function(data){
                // alert(JSON.stringify(data))
            })){
            ToastAndroid.show('Thank you for your review - please be patient while our editors approve it',2000)
        }  
      }
      const review_text = navigation.getParam('rewiew_data','nothing sent')

    return (
      <View style={theme == 'light'?styles.container:Darkstyles.container}>
         <View style={{flexDirection:'row',justifyContent:'center'}}>
         <Image source={theme == 'light' ? require('../img/zabihah.png'):require('../img/Zabihahblack.png')}  style={{alignSelf:'center',padding:10}}/>
          <MenuIcon name='arrowleft' color={theme=='light'?"black":"white"} size={30} style={{left:0,position:'absolute',marginLeft:13}} onPress={()=>navigation.navigate('marketdetail')}/>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',left:20,width:'100%',height:'14%'}}>
              <View>
              <Text style={theme == 'light'?styles.main_text:Darkstyles.main_text}>{review_text.name}</Text>
              {/* <Text style={theme == 'light'?styles.main_text:Darkstyles.main_text}>{review_text.id}</Text> */}

              <View style={{flexDirection:'row',right:5}}>
           <Text style={{backgroundColor:'#FFCC2A',fontSize:12,padding:2,margin:5,fontWeight:'bold',color:'black'}}>{review_text.cuisine}</Text>
           {/* <Text style={{backgroundColor:'#FFCC2A',fontSize:12,margin:5,padding:2,fontWeight:'bold',color:'black'}}>{item.cuisine}</Text> */}
        </View> 

              </View>
          </View>
         <ScrollView style={{marginBottom:10,marginTop:5}} showsVerticalScrollIndicator={false}>
         <Text style={theme == 'light'?styles.add_text:Darkstyles.add_text}>Add review</Text>
         <View style={{ height: 50, width: '90%',backgroundColor:'white',justifyContent:'center',alignContent:'center',alignItems:'center',alignSelf:'center',margin:10,color:'black',padding:10,borderWidth:0.5,borderColor:'grey',borderRadius:7 }}>
         <Picker
         mode='dropdown'
         dropdownIconColor={"black"}
        selectedValue={rating}
        style={{ height: 50, width: '100%',justifyContent:'center',alignContent:'center',alignItems:'center',alignSelf:'center',color:'black' }}
        onValueChange={(itemValue, itemIndex) => setRating(itemValue)}
      >
         <Picker.Item label="Choose Rating" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
      </Picker>
      </View>

      <View style={{ height: 50, width: '90%',backgroundColor:'white',justifyContent:'center',alignContent:'center',alignItems:'center',alignSelf:'center',margin:10,color:'black',padding:10,borderWidth:0.5,borderColor:'grey',borderRadius:7 }}>
      <Picker
         mode='dropdown'
         dropdownIconColor={"black"}
        selectedValue={person}
        style={{ height: 50, width: '100%',justifyContent:'center',alignContent:'center',alignItems:'center',alignSelf:'center',color:'black' }}
        onValueChange={(itemValue, itemIndex) => setPerson(itemValue)}
      >
         <Picker.Item label="How many in your party" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
      </Picker>
      </View>

      <View style={{ height: 50, width: '90%',backgroundColor:'white',justifyContent:'center',alignContent:'center',alignItems:'center',alignSelf:'center',margin:10,color:'black',padding:10,borderWidth:0.5,borderColor:'grey',borderRadius:7 }}>
      <Picker
         mode='dropdown'
         dropdownIconColor={"black"}
        selectedValue={expense}
        style={{ height: 50, width: '100%',justifyContent:'center',alignContent:'center',alignItems:'center',alignSelf:'center',color:'black',}}
        onValueChange={(itemValue, itemIndex) => setExpense(itemValue)}
      >
         <Picker.Item label="How expensive was it?" />
        <Picker.Item label="Very Expensive" value="Very Expensive" />
        <Picker.Item label="Expensive" value="Expensive" />
        <Picker.Item label="Moderate" value="Moderate" />
        <Picker.Item label="Reasonable " value="Reasonable " />
        <Picker.Item label="Cheap" value="Cheap " />
      </Picker>
      </View>

      <View style={{ height: 50, width: '90%',backgroundColor:'white',justifyContent:'center',alignContent:'center',alignItems:'center',alignSelf:'center',margin:10,color:'black',padding:10,borderWidth:0.5,borderColor:'grey',borderRadius:7 }}>
      <Picker
         mode='dropdown'
         dropdownIconColor={"black"}
        selectedValue={returning}
        style={{ height: 50, width: '100%',justifyContent:'center',alignContent:'center',alignItems:'center',alignSelf:'center',color:'black' }}
        onValueChange={(itemValue, itemIndex) => setReturning(itemValue)}
      >
         <Picker.Item label="Would you return here?" />
        <Picker.Item label="YES" value="1" />
        <Picker.Item label="NO" value="2" />
      </Picker>
      </View>
        <View style={styles.grid_style}>     
                <TextInput placeholder='Your review' placeholderTextColor={theme=='light'?"grey":"white"} onChangeText = {setReview} value = {review}/>  
        </View>
        <View style={{padding:10,marginTop:50}}>
        {/* <ButtonWhite text = "Attach photos" /> */}
        <ButtonRed text = "Add review" next = {review_add}/> 
   </View>
   </ScrollView>
      </View>
    );
  
}


export default addreviewmarket;


const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      width:'100%',
      height:'100%',
      backgroundColor:'white'
    },
   
    first_grid:{
        flexDirection:'row',
        margin:10,
        borderWidth:0.5,
        borderColor:'grey',
        borderRadius:5,
        },

    grid_style:{
            marginTop:15,
            flexDirection:'row',
            margin:10,
            borderBottomWidth:0.5,
            borderBottomColor:'grey',
            borderRadius:10,
        },
        main_text:{color:'black',fontSize:25,fontWeight:'bold'},
        add_text:{left:20,color:'black',fontWeight:'bold',fontSize:18,justifyContent:'flex-end',marginVertical:10}
});
const Darkstyles = StyleSheet.create({
    container: {
      paddingTop: 20,
      width:'100%',
      height:'100%',
      backgroundColor:'#494949'
    },
   
    first_grid:{
        flexDirection:'row',
        margin:10,
        borderWidth:0.5,
        borderColor:'grey',
        borderRadius:5,
        },

    grid_style:{
            marginTop:15,
            flexDirection:'row',
            margin:10,
            borderBottomWidth:0.5,
            borderBottomColor:'grey',
            borderRadius:10,
        },
        main_text:{color:'white',fontSize:25,fontWeight:'bold'},
        add_text:{left:20,color:'white',fontWeight:'bold',fontSize:18,justifyContent:'flex-end',marginVertical:10}
});