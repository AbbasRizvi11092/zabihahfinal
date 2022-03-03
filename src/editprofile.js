import React,{useState} from "react";
import { Image, View,Text,Switch,TextInput, StyleSheet,TouchableOpacity,Appearance, SafeAreaView, ToastAndroid} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ToggleSwitch from 'toggle-switch-react-native';
import {editprofilestyles} from "./darkstyle";
import Axios from 'axios'
import { ServiceConstant } from "../serviceconstant";

const editprofile =({navigation})=>{
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isEnableds, setIsEnableds] = useState(false);
  const toggleSwitchs = () => setIsEnableds(previousState => !previousState);
  const [first_name,setFirst_Name] = useState(ServiceConstant.user_first_name)
  const [last_name,setLast_Name] = useState(ServiceConstant.user_last_name)
  const [email,setEmail] = useState(ServiceConstant.user_email)
  const [mobile,setMobile] = useState(ServiceConstant.user_mobile)
  const [location,setLocation] = useState(ServiceConstant.user_home_location)
   const [isOn, setisOn] = useState()
   const [theme,setTheme] = useState(Appearance.getColorScheme());
   Appearance.addChangeListener((scheme)=>{
     setTheme(scheme.colorScheme);
   })
 const editinfo=()=>{
    if(first_name === ""){
      ToastAndroid.show("Enter Your First Name",2000)
    }else if(last_name === ""){
      ToastAndroid.show("Enter Your Last Name",2000)
    }else if(mobile === ""){
      ToastAndroid.show("Enter Your Mobile",2000)
    }else if(email === ""){
      ToastAndroid.show("Enter Your Email",2000)
    }else if(location === ""){
      ToastAndroid.show("Enter Your Location",2000)
    }else if(
      Axios
      .post(ServiceConstant.edit_profile + "?" + "key" + "=" + ServiceConstant.key + "uuid" + "=" + ServiceConstant.uuid + "mid" + "=" + ServiceConstant.user_login_data + "mobile" + "=" + mobile + "email" + "=" + email + "address" + "=" + location)
      .then(function(data){
        console.log(data)
        ToastAndroid.show("Changes Successfully Saved",2000)
      })
      .catch(function (error) {
        console.log(error);  
      })
    ){}
}
    return(
      <SafeAreaView style={theme == 'light' ?  styles.container:editprofilestyles.container}>
      <ScrollView style={theme == 'light' ?  styles.container:editprofilestyles.container} showsVerticalScrollIndicator={false}>
        <View style={theme == 'light' ?  styles.container:editprofilestyles.container}>
     
        <View style={styles.header}>
        <Image source={theme == 'light' ? require('../img/zabihah.png'):require('../img/Zabihahdark.png')}  style={{alignSelf:'center',padding:10}}/>
           
     </View>       
          <View style={{flex:1,padding:15,top:10}}>  
          <Text style={theme == 'light'?styles.header_text:editprofilestyles.header_text}>Edit your profile</Text>
       <View style={styles.action}>
         <Text style={theme == 'light'?{color:'grey'}:{color:'grey'}}>First Name</Text>
        <TextInput placeholder="First Name" style={theme == 'light'? styles.inputtext:editprofilestyles.inputtext} placeholderTextColor={theme == 'light'?'grey':'white'} onChangeText={setFirst_Name} value={first_name}/>     
       </View>

       <View style={styles.action}>
       <Text style={theme == 'light'?{color:'grey'}:{color:'grey'}}>Last Name</Text>
        <TextInput placeholder={"Last Name"} style={theme == 'light'? styles.inputtext:editprofilestyles.inputtext} placeholderTextColor={theme == 'light'?'grey':'white'} onChangeText={setLast_Name} value={last_name}/>
       </View>

       <View style={styles.action}>
       <Text style={theme == 'light'?{color:'grey'}:{color:'grey'}}>Mobile Phone</Text>
        <TextInput placeholder={"Mobile phone"} style={theme == 'light'? styles.inputtext:editprofilestyles.inputtext} placeholderTextColor={theme == 'light'?'grey':'white'} onChangeText={setMobile} value={mobile}/>
       </View>

       <View style={styles.action}>
       <Text style={theme == 'light'?{color:'grey'}:{color:'grey'}}>Email address</Text>
        <TextInput placeholder={"Email address"} style={theme == 'light'? styles.inputtext:editprofilestyles.inputtext} placeholderTextColor={theme == 'light'?'grey':'white'} onChangeText={setEmail} value={email}/>
       </View>
       
       <View style={styles.action}>
       <Text style={theme == 'light'?{color:'grey'}:{color:'grey'}}>location</Text>
        <TextInput placeholder={"Location"} style={theme == 'light'? styles.inputtext:editprofilestyles.inputtext} placeholderTextColor={theme == 'light'?'grey':'white'} onChangeText={setLocation} value={location}/>
       </View>

       
       <View style={{ flexDirection:'row',marginTop:7,padding:5}}>
       <Switch
        trackColor={{ false: "#767577", true: "#32CD32" }}
        thumbColor={isEnabled ? "white" : "white"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />        
      <View>
       <Text style={theme == 'light'?{left:10,color:'black'}:{left:10,color:'white'}}>Only show restaurants without </Text>
       <Text style={theme == 'light'?{left:10,color:'black'}:{left:10,color:'white'}}>alcohol on the premises </Text>
       </View>
       </View>  

       <View style={{ flexDirection:'row',marginTop:7,padding:5}}>
       <Switch
        trackColor={{ false: "#767577", true: "#32CD32" }}
        thumbColor={isEnableds ? "white" : "white"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitchs}
        value={isEnableds}
      />      
       <View>
       <Text style={theme == 'light'?{left:10,color:'black'}:{left:10,color:'white'}}>Only show restaurants with </Text>
       <Text style={theme == 'light'?{left:10,color:'black'}:{left:10,color:'white'}}>no non-halal items available</Text>
       </View>
       </View>      
       
       </View>
       <View style={{width:'90%',alignSelf:'center',marginBottom:10}}>
       <TouchableOpacity onPress={editinfo} style={{backgroundColor:'#990000',marginTop:10,height:45,justifyContent:'center',shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,}}><Text style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:17}}>Save changes</Text></TouchableOpacity> 

        <TouchableOpacity onPress={()=>navigation.navigate('mosquedetail')} style={{backgroundColor:'#3b5998',marginTop:10,height:45,justifyContent:'center',shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,}}><Text style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:17}}>Disconnect from facebook</Text></TouchableOpacity> 

       <TouchableOpacity style={styles.touchable_style} onPress={()=>navigation.navigate('favorties')}><Text style={styles.touch_text}>Upgrade to Zabihah Pro</Text></TouchableOpacity>   
       </View>
       
            
     </View>
     </ScrollView>
     </SafeAreaView>
    )
}
export default editprofile;

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
      
      //  marginLeft:13,
      //  paddingBottom:5,
       margin:7
     },
     inputtext:{
      
       marginTop: Platform.OS === 'ios' ? 0 : -12,
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
}
});