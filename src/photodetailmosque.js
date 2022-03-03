import React, {useEffect, useRef, useState} from 'react';
import { Text, View,StyleSheet, Image, TouchableOpacity,Dimensions,Animated, ImageBackground,Appearance} from 'react-native';
import { Avatar } from 'react-native-elements';
import { Col, Grid, Row } from 'react-native-easy-grid';
import MenuIcon from 'react-native-vector-icons/AntDesign';
import darkMode from "./darkstyle";
import Axios from 'axios'
import { ServiceConstant } from '../serviceconstant';

const photodetail=({navigation})=> {
    const [photogallery,setPhotoGallery] = useState([])
    const [res_data,setResData] = useState([])
    const [theme,setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme)=>{
      setTheme(scheme.colorScheme);
    })
    const images =[    
       "https://cdn.wallpapersafari.com/34/46/W6l4nL.jpg",
       "https://www.teahub.io/photos/full/223-2237072_best-food-wallpaper-hd.jpg",
       "https://cdn.wallpapersafari.com/34/46/W6l4nL.jpg",
       "https://www.teahub.io/photos/full/223-2237072_best-food-wallpaper-hd.jpg",
]
const animation = useRef(new Animated.Value(0));
const [ currentImage,setCurrentImage] = useState(0);
const handleNextAnimation = () =>{
    let newCurrentImage = currentImage + 1;
    if(newCurrentImage >= images.length){
        newCurrentImage = 0;
    }
    Animated.spring(animation.current,{
        toValue: -(Dimensions.get('screen').width * newCurrentImage),
        useNativeDriver : true,
    }).start();
    setCurrentImage(newCurrentImage);
}
const handlePreAnimation = () =>{
    let newCurrentImage = currentImage - 1;
    if(newCurrentImage >= images.length){
        newCurrentImage = 0;
    }
    Animated.spring(animation.current,{
        toValue: -(Dimensions.get('screen').width * newCurrentImage),
        useNativeDriver : true,
    }).start();
    setCurrentImage(newCurrentImage);
}

useEffect(()=>{
    Axios
    .post(ServiceConstant.data_particular_record + "?" + "key" + "=" + ServiceConstant.key + "&" + "uuid" + "=" + ServiceConstant.uuid + "&" + "id" + "=" + res_id +  "&" + "t" + "=" + 3)
    .then(function(data){
        setResData(data.data.data)
        setPhotoGallery(data.data.data.photo_list)
    })
},[])
const res_id = navigation.getParam('rest_photo','nothing sent')

    return (
      <View style={theme == 'light'? styles.container:darkstyles.container}>
         <View style={{flexDirection:'row',justifyContent:'center'}}>
         <Image source={theme == 'light' ? require('../img/zabihah.png'):require('../img/Zabihahblack.png')}  style={{alignSelf:'center',padding:10}}/>
          <MenuIcon name='arrowleft' color={theme=='light'?"black":"white"} size={30} style={{left:0,position:'absolute',marginLeft:13}}  onPress={()=>navigation.navigate('photogalleryMosque')}/>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',left:20,width:'100%',height:'14%'}}>
              <View>
              <Text style={theme == 'light'?styles.main_text:darkstyles.main_text}>{res_data.name}</Text>
              <View style={{flexDirection:'row',right:5}}>
           <Text style={{backgroundColor:'#FFCC2A',fontSize:12,padding:2,margin:5,fontWeight:'bold',color:'black'}}>{res_data.cuisine}</Text>
           {/* <Text style={{backgroundColor:'#FFCC2A',fontSize:12,margin:5,padding:2,fontWeight:'bold',color:'black'}}>{item.cuisine}</Text> */}
        </View>          
              </View>
          </View>
         
         
    
        <Animated.View style={{flexDirection:'row',transform:[{translateX:animation.current}]}}>
            {photogallery.map((item)=>(
                            <ImageBackground source={{uri : item.photo_url}} style={{justifyContent:'center',resizeMode:'cover',height:250,width:Dimensions.get('screen').width}}>
                                <View style={{flexDirection:'row'}}>
                                <MenuIcon name='arrowleft' color={'white'} size={30} style={{}} onPress={handlePreAnimation}/>
                                <MenuIcon name='arrowright' color={'white'} size={30}  style={{position:'absolute',right:0}} onPress={handleNextAnimation}/>
                                </View>
                            </ImageBackground>
                            
            ))} 
            
        </Animated.View>

        <View style={{flexDirection:'row',alignItems:'center',width:'100%',padding:10}}>
              <Avatar rounded source={{uri:ServiceConstant.user_photo}} size="medium" icon={{name:'checkcircle',type:'antdesign',color:'red',size:30,disabled:false}} iconStyle={{marginLeft:30,bottom:10}}/>
              {photogallery.map((items)=>(
                  <View>
                  <Text style={theme == 'light'?styles.name_text:darkstyles.name_text}>{items.photo_name}</Text>
                  <Text style={theme == 'light'?styles.text_under:darkstyles.text_under}>{items.photo_date}</Text>
                  </View>
              ))}
              <View style={{position:'absolute',right:0,marginRight:40,width:80,justifyContent:'center'}}>
              <TouchableOpacity style={{backgroundColor:'#990000',height:30,justifyContent:'center'}}>
                  <Text style={{color:'white',textAlign:'center',fontWeight:'bold'}}>Follow</Text>
              </TouchableOpacity>

              </View>
              
          </View>

          {photogallery.map((items)=>(
                    <Text style={theme == 'light'?styles.dec_text:darkstyles.dec_text}>
                    {photogallery.photo_desc}
                    </Text>
              ))}
        

    

      </View>
    );
  
}


export default photodetail;


const styles = StyleSheet.create({
   

    container: {
      paddingTop: 20,
      width:'100%',
      height:'100%',
      backgroundColor:'#F2F2F3'
    },
    main_text:{color:'black',fontSize:25,fontWeight:'bold'},
    name_text:{color:'black',fontSize:17,left:10,fontWeight:'bold'},
    dec_text:{color:'black',padding:10},
    text_under:{color:'grey',fontSize:12,left:10}

});

const darkstyles = StyleSheet.create({
   

    container: {
      paddingTop: 20,
      width:'100%',
      height:'100%',
      backgroundColor:'#000000'
    },
    main_text:{color:'white',fontSize:25,fontWeight:'bold'},
    name_text:{color:'white',fontSize:17,left:10,fontWeight:'bold'},
    dec_text:{color:'white',padding:10},
    text_under:{color:'white',fontSize:12,left:10}
});