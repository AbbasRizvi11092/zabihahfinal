import React, { Component, useState } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Appearance,
  SafeAreaView,
  ToastAndroid,
  Alert,
  FlatList,
  Button,
  Modal,
  Pressable,
} from 'react-native';
import Axios  from 'axios';
import { ServiceConstant } from '../serviceconstant';
import {WebView} from 'react-native-webview'


export default class splashscreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      version: [],
      update:[],
      photo:[]
    }
  }
  
  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('App') },
        5000
      )
    )
  }

  async componentDidMount() {
    Axios
.post(ServiceConstant.global_data + "?" + "key"+ "=" +ServiceConstant.key + "uuid" + "=" + ServiceConstant.uuid)
.then(({data})=>{
this.setState({version :JSON.stringify(data.data[0].version)})
this.setState({update :JSON.stringify(data.data[0].updated)})
this.setState({photo :data.data})

  // alert(JSON.stringify(data.data[0]))
})
.catch((error)=>{
  alert(error);
})
    console.disableYellowBox = true
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('signin')  
    }

  }
  render() {
    return (
      <View style={{flex:1}}>
        {this.state.photo.map((item)=>{
          return(
        <ImageBackground source={{uri:item.background_photo}} style={{flex:1}}>
        <View style={{top:20,flex:1}}>
      <Image source={require('../img/zabihah.png')} style={splashstyle.image_zabihah}/>     
    <Text style={splashstyle.text_main}>The Original guide </Text>
    <Text style={splashstyle.text_main}>to Halal restaurant,</Text>
    <Text style={splashstyle.text_main}>markets, and more</Text>   
    </View>
    <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center',marginBottom:10}}>
    <View style={{position:'absolute',bottom:25,alignSelf:'center',flexDirection:'row'}}>
        <Text style={{fontSize:15,color:'white'}}>Version {item.version}</Text>
        <Text style={{fontSize:15,textAlign:'center',color:'white'}} onPress={()=>this.props.navigation.navigate('aboutWebView')}> About *</Text>
        <Text style={{fontSize:15,textAlign:'center',color:'white'}} onPress={()=>this.props.navigation.navigate('privacyWebView')}> Privacy *</Text>
        <Text style={{fontSize:15,textAlign:'center',color:'white'}} onPress={()=>this.props.navigation.navigate('termsWebView')}> Terms</Text>
        </View>
        <Text style={{fontSize:13,textAlign:'center',color:'white'}}>Database {item.updated}</Text>
        </View>
         </ImageBackground>
          )})}
         </View>
    )
  }
}
const splashstyle = StyleSheet.create({
    splash_main_view: {
        flex:1,
        backgroundColor:'#FFCC2A'
    },
    text_main:{
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
        top:10,
        fontFamily:'Lato-Regular'
    },
    image_zabihah:{
        alignSelf:'center',
       width:300,
       height:70
    },
  
})
// const Darksplashstyle = StyleSheet.create({
//   splash_main_view: {
//       flex:1,
//       backgroundColor:'#494949'
//   },
//   text_main:{
//       color:'white',
//       fontWeight:'bold',
//       textAlign:'center',
//       top:10
//   },
//   image_zabihah:{
//       alignSelf:'center',
     
//   },
// })

// const [theme,setTheme] = useState(Appearance.getColorScheme());
// Appearance.addChangeListener((scheme)=>{
//   setTheme(scheme.colorScheme);
// })