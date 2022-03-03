import React,{useState} from "react";
import { Image, View,Text, TextInput, StyleSheet,TouchableOpacity,Appearance,SafeAreaView, ScrollView, ToastAndroid} from "react-native";
import { forgotstyles } from "./darkstyle";
import Axios from 'axios'
import { ServiceConstant } from "../serviceconstant";
const forgotpassword =({navigation})=>{
  const [email,setEmail] = useState("")
  const [theme,setTheme] = useState(Appearance.getColorScheme());
   Appearance.addChangeListener((scheme)=>{
     setTheme(scheme.colorScheme);
   })

   const forget_password = ()=>{
     if(email === ""){
       ToastAndroid.show('Enter Email address',2000)
     }else if(
      Axios
      .post(ServiceConstant.reset_password + "?" + "key" + "=" + ServiceConstant.key + "&" + "uuid" + "=" + ServiceConstant.uuid + "&" + "e" + "=" + email)
      .then(function (response) {
      //  alert("Response" + JSON.stringify(response))
      })
      .catch(function (error) {
        console.log(error);  
      })
     ){
       ToastAndroid.show('A link has been sent to you to reset your password',2000)
     }
   }
    return(
      <SafeAreaView style={theme == 'light'?styles.container:forgotstyles.container}>
        <ScrollView>
        <View style={theme == 'light'?styles.container:forgotstyles.container}>
     
        <View style={styles.header}>
        <Image source={theme == 'light' ? require('../img/zabihah.png'):require('../img/Zabihahdark.png')}  style={{alignSelf:'center',padding:10}}/>
           
     </View>
     <View style={theme == 'light'?styles.footer:forgotstyles.footer}>

     <View style={{ flexDirection:'row',  padding:5,}}>
     <Text style={theme == 'light'?styles.header_text:forgotstyles.header_text}>Forgot Password</Text> 
       </View>

       <View style={{ flexDirection:'row', marginTop:7,  padding:5,}}>
     <Text style={theme == 'light'?styles.header_text_more:forgotstyles.header_text_more}>Enter your email address nd we'll send you  link to reset your password</Text> 
       </View>
     
       <View style={styles.action}>
        <TextInput placeholder={"Email address"} style={styles.inputtext} placeholderTextColor={theme == 'light'?'grey':'white'} onChangeText={setEmail} value={email}/> 
       </View>

    
       <View style={{marginBottom:10,alignSelf:'center',width:'90%'}}>
       <TouchableOpacity style={{backgroundColor:'#990000',marginTop:'100%',height:45,justifyContent:'center',}} onPress={forget_password}><Text style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:17}}>Email password reset link</Text></TouchableOpacity>   
       </View>
     </View>
            
     </View>
     </ScrollView>
     </SafeAreaView>
    )
}
export default forgotpassword;

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor : 'white'
      },
      header:{
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:50
      },
      footer:{
        flex:3,
        backgroundColor:'white',
        padding:10
      },
      header_text:{
        color:'black',
        fontWeight:'bold',
        fontSize:25,
        textAlign:'left'
      },
     action:{
       flexDirection:'row',
       marginTop:20,
       borderBottomWidth:1,
       borderColor:'#f2f2f2',
       padding:5,
     },
     inputtext:{
       flex:1,
       marginTop: Platform.OS === 'ios' ? 0 : -12,
       paddingLeft:5,
       color:'black'
     },
header_text_more:{
    color:'black',
    fontWeight:'bold',
    fontSize:15,
    textAlign:'left'
  },
});