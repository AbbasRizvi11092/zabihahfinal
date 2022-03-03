import React,{useState,useEffect} from "react";
import { Image, View,Text,Switch, TextInput, StyleSheet,TouchableOpacity,Appearance, ToastAndroid} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ToggleSwitch from 'toggle-switch-react-native';
import { ServiceConstant } from "../serviceconstant";
import Axios from 'axios';
import {loginstyles} from "./darkstyle";

const register =({navigation})=>{
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
   const [theme,setTheme] = useState(Appearance.getColorScheme());
   Appearance.addChangeListener((scheme)=>{
     setTheme(scheme.colorScheme);
   })
   const [terms, setTerms] = useState(1)
   const [first_name,setFirst_Name] = useState("")
   const [last_name,setLast_Name] = useState("")
   const [username,setUserName] = useState("")
   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")
   const [p_check,setP_check] = useState("")

     
    const registerDone = () =>{
      if(first_name === ""){
        ToastAndroid.show("Enter Your First Name",2000)
      }else if(last_name === ""){
        ToastAndroid.show("Enter Your Last Name",2000)
      }else if(username === ""){
        ToastAndroid.show("Enter Your Username",2000)
      }else if(email === ""){
        ToastAndroid.show("Enter Your Valid Email",2000)
      }else if(password === ""){
        ToastAndroid.show("Enter Your Password",2000)
      }else if(p_check !== password){
        ToastAndroid.show("Password Mismatch",2000)
      }else if(isEnabled === false){
        ToastAndroid.show("Please agree with Terms & Privacy policy")
      }
      else if( Axios
        .post(ServiceConstant.register + "?" + "key" + "=" + ServiceConstant.key + "&" + "uuid" + "=" + ServiceConstant.uuid + "&" + "first_name" + "=" + first_name + "&" + "last_name" + "=" + last_name + "&" + "username" + "=" + username + "&" + "email" + "=" + email + "&" + "password" + "=" + password + "&" + "p_check" + "=" + p_check + "&" + "terms" + "=" + terms)
        .then(function (response) {
          console.log("Response" + JSON.stringify(response.data));
         alert("Thanks for registration! Check your email for verification")
        })
        .catch(function (error) {
          console.log(error);  
        }))
        {
        // ToastAndroid.show("Successfully Register",2000)


      }
     
}
    return(
      <ScrollView style={theme == 'light' ?  styles.container:darkMode.container} showsVerticalScrollIndicator={false}>
        <View style={theme == 'light' ?  styles.container:darkMode.container}>
     
        <View style={styles.header}>
        <Image source={theme == 'light' ? require('../img/zabihah.png'):require('../img/Zabihahdark.png')}  style={{alignSelf:'center',padding:10}}/>
           
     </View>
       
          <View style={{flex:1,padding:15,top:10}}>  
          <Text style={theme == 'light' ?  styles.header_text:darkMode.header_text}>Create an account</Text>
       <View style={styles.action}>
        <TextInput placeholder="First Name" style={theme == 'light' ?  styles.inputtext:darkMode.inputtext} placeholderTextColor={theme == 'light'? 'grey':'white'} onChangeText={setFirst_Name} value={first_name}/>
       
       </View>

       <View style={styles.action}>
        <TextInput placeholder={"Last Name"} style={theme == 'light' ?  styles.inputtext:darkMode.inputtext} placeholderTextColor={theme == 'light'? 'grey':'white'} onChangeText={setLast_Name} value={last_name}/>
       </View>

       <View style={styles.action}>
        <TextInput placeholder={"Username(no space,20 char max)"} style={theme == 'light' ?  styles.inputtext:darkMode.inputtext} placeholderTextColor={theme == 'light'? 'grey':'white'} onChangeText={setUserName} value={username}/>
       </View>

       <View style={styles.action}>
        <TextInput placeholder={"Email address"} style={theme == 'light' ?  styles.inputtext:darkMode.inputtext} placeholderTextColor={theme == 'light'? 'grey':'white'} onChangeText={setEmail} value={email}/>
       </View>
       
       <View style={styles.action}>
        <TextInput placeholder={"Password"} style={theme == 'light' ?  styles.inputtext:darkMode.inputtext} secureTextEntry={true} placeholderTextColor={theme == 'light'? 'grey':'white'} onChangeText={setPassword} value={password} />
       </View>

       <View style={styles.action}>
        <TextInput placeholder={"Repeat Password"} style={theme == 'light' ?  styles.inputtext:darkMode.inputtext} secureTextEntry={true} placeholderTextColor={theme == 'light'? 'grey':'white'} onChangeText={setP_check} value={p_check} />
       </View>
       <View style={{ flexDirection:'row',marginTop:7,padding:5}}>
       {/* <ToggleSwitch isOn={false} onColor="green" offColor="grey" onToggle={isOn => console.log("changed to : ", isOn)}/> */}
       <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
     
       <View>
       <Text style={theme == 'light' ?  styles.agree_text:darkMode.agree_text}>I agree to abide by the <Text style={theme == 'light' ?  styles.text_more:darkMode.text_more}>Terms of Service</Text></Text>
       <Text style={theme == 'light' ?  styles.agree_text:darkMode.agree_text}>and have read the <Text style={theme == 'light' ?  styles.text_more:darkMode.text_more}>Privacy Policy</Text></Text>
       </View>
       </View>       
       
       </View>
       <View style={{width:'90%',alignSelf:'center',marginBottom:10,marginTop:55}}>
         <View style={{flexDirection:'row',alignSelf:'center'}}>
           <Text style={theme == 'light' ?  styles.text_about:darkMode.text_about} onPress={()=>navigation.navigate('aboutWebView')}>About </Text>
           <Text style={theme == 'light' ?  styles.text_about:darkMode.text_about} onPress={()=>navigation.navigate('termsWebView')}>Term</Text>
           <Text style={theme == 'light' ?  styles.text_about:darkMode.text_about} onPress={()=>navigation.navigate('privacyWebView')}>Privacy </Text>

           </View>
       <TouchableOpacity onPress={registerDone} style={{backgroundColor:'#990000',marginTop:10,height:45,justifyContent:'center',shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,}}><Text style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:17}}>Create an account</Text></TouchableOpacity>   
       <TouchableOpacity onPress={()=>navigation.navigate('login')} style={styles.touchable_style}><Text style={styles.touch_text}>Login to Zabihah</Text></TouchableOpacity>   
       </View>
       
            
     </View>
     </ScrollView>
    )
}
export default register;

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor : 'white',
        
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
        color:'black',
        fontWeight:'bold',
        fontSize:25,
        textAlign:'left'
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
      
       marginTop: Platform.OS === 'ios' ? 0 : -12,
       paddingLeft:5,
       color:'black'
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
agree_text:{left:10,color:'black',fontFamily:'Lato-Regular'},
text_more:{fontWeight:'bold',color:'black'},
text_about:{textAlign:'center',color:'black',fontSize:17,fontWeight:'bold',fontFamily:'Lato-Regular',marginLeft:15}
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
      // fontWeight:'bold',
      fontSize:25,
      textAlign:'left',
      fontFamily:'Lato-Bold'
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
    
     marginTop: Platform.OS === 'ios' ? 0 : -12,
     paddingLeft:5,
     color:'white'
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
agree_text:{left:10,color:'white',fontFamily:'Lato-Regular'},
text_more:{fontWeight:'bold',color:'white'},
text_about:{textAlign:'center',color:'white',fontSize:17,fontWeight:'bold',fontFamily:'Lato-Regular',marginLeft:15}
});