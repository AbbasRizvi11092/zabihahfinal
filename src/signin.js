import React,{Component,useState} from "react";
import { View ,Text,StyleSheet,Image,Button,TouchableOpacity,Appearance,SafeAreaView} from "react-native";
import {signinstyle} from "./darkstyle";
// import {LoginButton, AccessToken,LoginManager, GraphRequest,GraphRequestManager,} from 'react-native-fbsdk'
import LoginController from "../fbLogibn";
import { ServiceConstant } from "../serviceconstant";
import Axios from 'axios'


const signin = ({navigation}) => {
  const [fbtoken,setFbtoken] = useState("")
  const [userName, setUserName] = useState('');
  const [token, setToken] = useState('');
  const [profilePic, setProfilePic] = useState('');
    const [theme,setTheme] = useState(Appearance.getColorScheme());
Appearance.addChangeListener((scheme)=>{
  setTheme(scheme.colorScheme);
})
// const getResponseInfo = (error, result) => {
//   if (error) {
//     //Alert for the Error
//     alert('Error fetching data: ' + error.toString());
//   } else {
//     //response alert
//     console.log(JSON.stringify(result));
//     setUserName('Welcome ' + result.name);
//     setToken('User Token: ' + result.id);
//     setProfilePic(result.picture.data.url);
//      ServiceConstant.user_login_data = result.id
//               ServiceConstant.user_name = result.name
//               ServiceConstant.user_photo = result.picture.data.url
//               // alert(ServiceConstant.user_name)
//               navigation.navigate('homescreen')
//   }
// };
const onLogout = () => {
  //Clear the state after logout
  setUserName(null);
  setToken(null);
  setProfilePic(null);
};
const loginfb=()=>{
  Axios.post(ServiceConstant.register + "?" + "fbid" + "=" + fbtoken)
  .then(function(data){
    console.log("Facebook Login Successfully")
    navigation.navigate('homescreen')
    setUserName(data.name);
    setFbtoken(data.id);
    setProfilePic(data.picture.data.url);
     ServiceConstant.user_login_data = data.name
     ServiceConstant.user_name = data.id
     ServiceConstant.user_photo = data.picture.data.url

  })
}
    return (
        <SafeAreaView style={theme == 'light' ?  splashstyle.splash_main_view:signinstyle.signin_main_view}>
        <View style={theme == 'light' ?  splashstyle.splash_main_view:signinstyle.signin_main_view}>
            <View style={{top:20,flex:1}}> 
        <Image source={theme == 'light' ? require('../img/zabihah.png'):require('../img/Zabihahdark.png')} style={splashstyle.image_zabihah}/>
        <Text style={theme == 'light' ? splashstyle.text_main:signinstyle.signin_main_text}>The Original guide </Text>
        <Text style={theme == 'light' ? splashstyle.text_main:signinstyle.signin_main_text}>to Halal restaurant,</Text>
        <Text style={theme == 'light' ? splashstyle.text_main:signinstyle.signin_main_text}>markets, and more</Text>
        </View>
        
        <View style={{alignSelf:'center',width:'90%',flex:1,bottom:20}}>
        <TouchableOpacity style={splashstyle.touchable} onPress={()=>navigation.navigate('onboardingextra')}><Text style={{color:'white',textAlign:'center',fontWeight:'bold'}}>Continue with email</Text></TouchableOpacity>
        {/* <LoginController/> */}
{/*     
        <LoginButton  
        // style={{width:'90%'}} 
        readPermissions={['public_profile']}
        onLoginFinished={(error, result) => {
          if (error) {
            alert(error);
            console.log('Login has error: ' + result.error);
          } else if (result.isCancelled) {
            alert('Login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken().then((data) => {
              
              // navigation.navigate('homescreen')
              // ServiceConstant.user_login_data = data.id
              // ServiceConstant.user_name = data.name
              // ServiceConstant.user_photo = data.picture.data.url
              console.log(data.accessToken.toString());
              const processRequest = new GraphRequest(
                '/me?fields=name,picture.type(large)',
                null,
              //    ServiceConstant.user_login_data = result.id
              // ServiceConstant.user_name = result.name
              // ServiceConstant.user_photo = result.picture.data.url
              // alert(ServiceConstant.user_name)
                loginfb,
                
              );
              // Start the graph request.
              new GraphRequestManager()
                .addRequest(processRequest).start();
            });
          }
        }}
        onLogoutFinished={onLogout}
      /> */}
        <TouchableOpacity style={{backgroundColor:'#3b5998',marginTop:10,height:40,justifyContent:'center',marginBottom:10}}><Text style={{color:'white',textAlign:'center',fontWeight:'bold'}}>Continue with Facebook</Text></TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'black',marginTop:10,height:40,justifyContent:'center',marginBottom:10}}><Text style={{color:'white',textAlign:'center',fontWeight:'bold'}}>Continue with Apple</Text></TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'white',marginTop:10,height:40,justifyContent:'center',marginBottom:10}} onPress={()=>navigation.navigate('login')}><Text style={{color:'black',textAlign:'center',fontWeight:'bold'}}>Continue as guest</Text></TouchableOpacity>   
        {/* <LoginButton
        
        style={{backgroundColor:'#3b5998',height:40,justifyContent:'center',marginTop:10}}
          onLoginFinished={
            (error, result) => {
                // alert(JSON.stringify(result))
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/> */}
        </View>

        <View style={{position:'absolute',bottom:25,alignSelf:'center'}}>
          <View style={{flexDirection:'row',alignSelf:'center'}}>
        <Text style={theme == 'light' ? splashstyle.footer_text_version:signinstyle.footer_text}>Version 7.0.1 . </Text>
        <Text style={theme == 'light' ? splashstyle.footer_text_version:signinstyle.footer_text} onPress={()=>navigation.navigate('aboutWebView')}>About . </Text>
        <Text style={theme == 'light' ? splashstyle.footer_text_version:signinstyle.footer_text} onPress={()=>navigation.navigate('privacyWebView')}>Privacy . </Text>
        <Text style={theme == 'light' ? splashstyle.footer_text_version:signinstyle.footer_text} onPress={()=>navigation.navigate('termsWebView')}>Terms</Text>

        </View>
        <Text style={theme == 'light' ? splashstyle.footer_text_db:signinstyle.footer_text_db}>Database last updated August 25,2020</Text>
        </View>
         </View>
         </SafeAreaView>
    );
  }
  
  export default signin;
  const splashstyle = StyleSheet.create({
    splash_main_view: {
        flex:1,
        backgroundColor:'#FFCC2A',
        
    },
   image_zabihah:{
       alignSelf:'center',
      width:300,
      height:70
   },
   text_main:{
       color:'black',
       fontWeight:'bold',
       textAlign:'center',
       top:10,
       fontSize:18
   },
   touchable:{
       backgroundColor:'#990000',
       height:40,
       justifyContent:'center',
       marginBottom:10,
     
   },
   footer_text_version:{
       color:'black',
       fontSize:12
   },
   footer_text_db:{
    color:'black',
    fontSize:10,
    textAlign:'center'
}

})