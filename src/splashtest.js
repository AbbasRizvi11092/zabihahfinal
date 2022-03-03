import React,{useEffect,useState} from 'react'
import {View,Text, ImageBackground, FlatList} from 'react-native'
import Axios from 'axios'
import { ServiceConstant } from '../serviceconstant'

const splash = ({navigation}) =>{
    const [photo,setPhoto] = useState([])
    setTimeout(()=>{
        navigation.replace('signin')
    },6000)
    Axios.post(ServiceConstant.global_data + "?" + "key" + "=" + ServiceConstant.key + "uuid" + "=" + ServiceConstant.uuid)
    .then(function(data){
        setPhoto(data.data.background_photo)
    })
    return(
     <View>
         <ImageBackground source={{uri:parseFloat(photo)}}/>
     </View>
    )
}
export default splash