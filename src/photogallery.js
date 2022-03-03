import PropTypes from 'prop-types';
import React, {Component,useState,useEffect} from 'react';
// import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View,StyleSheet, Image,Appearance,Dimensions,FlatList,ImageBackground, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Avatar } from 'react-native-elements';
import PenIcon  from 'react-native-vector-icons/AntDesign';
import { Col, Grid, Row } from 'react-native-easy-grid';
import PhotogalleryCard from './component/photogallerycard';
import  Axios from 'axios'
import { ServiceConstant } from '../serviceconstant';

const photogallery=({navigation})=> {
    // const str = res_data.cuisine;
    const [photogallery,setPhotoGallery] = useState([])
    const [res_data,setResData] = useState([])
    const [theme,setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme)=>{
      setTheme(scheme.colorScheme);
    })
    useEffect(()=>{
        Axios
        .post(ServiceConstant.data_particular_record + "?" + "key" + "=" + ServiceConstant.key + "&" + "uuid" + "=" + ServiceConstant.uuid + "&" + "id" + "=" + res_id +  "&" + "t" + "=" + 1)
        .then(function(data){
            setResData(data.data.data)
            setPhotoGallery(data.data.data.photo_list)
        })
    },[])
    const res_id = navigation.getParam('rest_photo','nothing sent')

    return (
      <View style={theme == 'light'? styles.container:Darkstyles.container}>
          <View style={{flexDirection:'row',justifyContent:'center',height:'6%'}}>
          <PenIcon name='arrowleft' color={theme=='light'?"black":"white"} size={30} style={{left:0,position:'absolute',marginLeft:13}} onPress={()=>navigation.navigate('restaurantdetail')}/>
          <Image source={theme == 'light' ? require('../img/zabihah.png'):require('../img/Zabihahblack.png')}  style={{alignSelf:'center',padding:10}}/>
          </View>
          <View style={{height:'15%'}}>
          <Text style={theme == 'light'? styles.main_text:Darkstyles.main_text}>{res_data.name}</Text>
          <View style={{flexDirection:'row',marginLeft:8}}>
           {/* <Text style={{backgroundColor:'#FFCC2A',fontSize:12,padding:2,margin:5,fontWeight:'bold',color:'black'}}>CUISINE TAG</Text> */}
           <Text style={{backgroundColor:'#FFCC2A',fontSize:12,margin:5,padding:2,fontWeight:'bold',color:'black'}}>{res_data.cuisine}</Text>
        </View>
         </View>
         <View style={{left:15}}>
                      <Text style={theme == 'light'? styles.photo_text:Darkstyles.photo_text}>
                         Photos
                      </Text>
                  </View>
         
                  <FlatList 
              showsVerticalScrollIndicator = {false}
              numColumns={2}
              style={{width:'100%'}}
          data={photogallery}
          renderItem={({item})=>
             <TouchableOpacity style={theme == 'light'?styles.main_view:Darkstyles.main_view} onPress={()=>navigation.navigate('photodetail',{rest_photo:res_id})}>
                 <Image source={{uri:item.photo_url}} resizeMode="cover" style={{width:191.5,height:100}}/>
                 <View style={{padding:10}}>
                 <Text style={theme == 'light'?styles.name_text:Darkstyles.name_text}>
                     {item.photo_name}
                 </Text>
                 <Text style={theme == 'light'?styles.text_under:Darkstyles.text_under}>
                     {item.photo_date}
                 </Text>
                
                  </View>
             </TouchableOpacity>
             
          }
          />
      </View>
    );
  
}


export default photogallery;


const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      width:'100%',
      height:'100%',
      backgroundColor:'#F2F2F3'
    },
main_text:{left:10,color:'black',fontWeight:'bold',fontSize:25},
photo_text:{fontSize:20,color:'black',fontWeight:'bold'},
main_view:{backgroundColor:'white',margin:5,shadowOffset: {
    width: 0,
    height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
maxWidth: Dimensions.get('window').width /2,
},
name_text:{color:'black',fontWeight:'bold'},
text_under:{color:'black',fontSize:12}
});
const Darkstyles = StyleSheet.create({
    container: {
      paddingTop: 20,
      width:'100%',
      height:'100%',
      backgroundColor:'black'
    },
    main_text:{left:10,color:'white',fontWeight:'bold',fontSize:25},
    photo_text:{fontSize:20,color:'white',fontWeight:'bold'},
    main_view:{backgroundColor:'#494949',margin:5,shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
    maxWidth: Dimensions.get('window').width /2,
},
name_text:{color:'white',fontWeight:'bold'},
text_under:{color:'white'}

});