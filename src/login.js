import React,{useState} from "react";
import { Image, View,Text, TextInput, StyleSheet,TouchableOpacity,Appearance, SafeAreaView,ToastAndroid} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ToggleSwitch from 'toggle-switch-react-native';
import {loginstyles} from "./darkstyle";
import Axios from 'axios'
import {ServiceConstant} from '../serviceconstant'

const login =({navigation})=>{
   const [isOn, setisOn] = useState()
   const [username,setUserName] = useState("jaywalker")
   const [password,setPassword] = useState("ithaca123")
   const [theme,setTheme] = useState(Appearance.getColorScheme());
   Appearance.addChangeListener((scheme)=>{
     setTheme(scheme.colorScheme);
   })

   const loginDone =()=>{
     if(username === ""){
       ToastAndroid.show("Enter Your Username or Email Address",2000)
     }else if(password === ""){
       ToastAndroid.show("Enter Your Password",2000)
     }else if(Axios
      .post(ServiceConstant.login + "?" + "key" + "=" + ServiceConstant.key + "&" + "uuid" + "=" + 2 + "&" + "username" + "=" + username + "&" + "password" + "=" + password)
      .then(function(response){
        console.log("Response" + JSON.stringify(response.data.member))
        ServiceConstant.user_login_data = JSON.stringify(response.data.member.member_id)
        ServiceConstant.user_name = response.data.member.display_name
        ServiceConstant.user_photo = response.data.member.user_photo
        ServiceConstant.user_home_location = response.data.member.home_location
        ServiceConstant.user_lat = response.data.member.my_lat
        ServiceConstant.user_long = response.data.member.my_lon
        ServiceConstant.user_first_name = response.data.member.first_name
        ServiceConstant.user_last_name = response.data.member.last_name
        ServiceConstant.user_email = response.data.member.my_email
        ServiceConstant.user_mobile = response.data.member.my_phone



        navigation.navigate('homescreen')
      })
      .catch(function (error) {
        console.log(error);  
      }))
      {}
   }
    return(
      <SafeAreaView style={theme == 'light' ?  styles.container:darkMode.container}>
      <ScrollView style={theme == 'light' ?  styles.container:darkMode.container} showsVerticalScrollIndicator={false}>
        <View style={theme == 'light' ?  styles.container:darkMode.container}>
     
        <View style={styles.header}>
        <Image source={theme == 'light' ? require('../img/zabihah.png'):require('../img/Zabihahdark.png')}  style={{alignSelf:'center',padding:10}}/>        
     </View>
          <View style={{flex:1,padding:15}}>  
          <Text style={theme == 'light' ?  styles.header_text:darkMode.header_text}>Login to Zabihah</Text>
       <View style={styles.action}>
        <TextInput placeholder={"Username or email address"} style={theme == 'light'? styles.inputtext:darkMode.inputtext} placeholderTextColor={theme == 'light'? 'grey':'white'} onChangeText={setUserName} value={username}/>
       </View>
  
       <View style={styles.action}>
        <TextInput placeholder={"Password"} style={theme == 'light'? styles.inputtext:darkMode.inputtext} secureTextEntry={true} placeholderTextColor={theme == 'light'? 'grey':'white'} onChangeText={setPassword} value={password}/>
       </View>    
       
       </View>
       <View style={{width:'90%',alignSelf:'center',marginTop:'70%',marginBottom:10}}>
       <TouchableOpacity onPress={loginDone} style={{backgroundColor:'#990000',marginTop:10,height:45,justifyContent:'center',shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,}}><Text style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:17}}>Login to Zabihah</Text></TouchableOpacity>   
       <TouchableOpacity onPress={()=>navigation.navigate('forgotpassword')} style={styles.touchable_style}><Text style={styles.touch_text}>Forgot Password</Text></TouchableOpacity>   
       <TouchableOpacity onPress={()=>navigation.navigate('register')} style={styles.touchable_style}><Text style={styles.touch_text}>Create an account</Text></TouchableOpacity>   

       </View>  
     </View>
     </ScrollView>
     </SafeAreaView>
    )
}
export default login;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor : 'white',
        
      },
      header:{
       padding:10
      },
      footer:{
        // flex:3,
        // padding:15
        // backgroundColor:'white',
       
      },
      header_text:{
        color:'black',
        fontWeight:'bold',
        fontSize:25,
        textAlign:'left',
        fontFamily:'Lato-Bold',
      },
      footer_text:{
       color:'white',
       fontWeight:'bold',
       fontSize:18
     },
     action:{
       
       borderBottomWidth:1,
       borderColor:'#f2f2f2',
      
       marginLeft:13,
       paddingBottom:5,
       margin:7
     },
     inputtext:{
      // letterSpacing:1,
       marginTop: Platform.OS === 'ios' ? 0 : -12,
       paddingLeft:5,
       color:'black',
       fontFamily:'Lato-Regular'
     },
     button:{
       alignItems:'center',
       marginTop:50,
     },
     signin:{
       width:'100%',
       height:50,
       justifyContent:'center',
       alignItems:'center',
       borderRadius:10
     },
     text_signin:{
       font:18,
       fontWeight:'bold'
     },
     touchable_style: {
        backgroundColor:'white',
        marginTop:10,
        height:45,
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
    touch_text:{
        color:'black',
    textAlign:'center',
    fontWeight:'bold',
    fontSize:17
},
agree_text:{left:10,color:'black'},
text_more:{fontWeight:'bold',color:'black'},
text_about:{textAlign:'center',color:'black',fontSize:17,fontWeight:'bold'}
});

const darkMode = StyleSheet.create({
  container:{
      width:'100%',
      height:'100%',
      backgroundColor : '#494949',
      
    },
    header:{
     padding:10
    },
    footer:{
      flex:3,
      padding:15
      // backgroundColor:'white',
     
    },
    header_text:{
      color:'white',
      fontWeight:'bold',
      fontSize:25,
      textAlign:'left',
      fontFamily:'Lato-Bold',
     
    },
    footer_text:{
     color:'white',
     fontWeight:'bold',
     fontSize:18
   },
   action:{
     
     borderBottomWidth:1,
     borderColor:'#f2f2f2',
    
     marginLeft:13,
     paddingBottom:5,
     margin:7
   },
   inputtext:{
    // letterSpacing:1,
     marginTop: Platform.OS === 'ios' ? 0 : -12,
     paddingLeft:5,
     color:'white',
     fontFamily:'Lato-Regular'
   },
   button:{
     alignItems:'center',
     marginTop:50,
   },
   signin:{
     width:'100%',
     height:50,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:10
   },
   text_signin:{
     font:18,
     fontWeight:'bold'
   },
   touchable_style: {
      backgroundColor:'white',
      marginTop:10,
      height:45,
      justifyContent:'center',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      
      elevation: 5,
  },
  touch_text:{
      color:'black',
  textAlign:'center',
  fontWeight:'bold',
  fontSize:17
},
agree_text:{left:10,color:'white'},
text_more:{fontWeight:'bold',color:'white'},
text_about:{textAlign:'center',color:'white',fontSize:17,fontWeight:'bold'}
});