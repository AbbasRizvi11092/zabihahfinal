import React,{useState} from 'react'
import {TouchableOpacity} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Axios from 'axios'
import { ServiceConstant } from '../../serviceconstant'


const FavButton = props=>{
    const [liked,setLiked] = useState(false)

    const favorite = ()=>{
        Axios
        .post(ServiceConstant.add_remove_favorties + "?" + "key" + "=" + ServiceConstant.key + "&" + "uuid" + "=" + 2 + "&" + "id" + "=" + 50939 + "&" + "t" + "=" + 1 + "&" + "mid" + "=" + 122)
        .then(function(data){
            alert("fav success")
        })
    }

    return(
        <TouchableOpacity onPress={()=>setLiked((isLiked)=>!isLiked)}>
            <Entypo name={liked ? 'heart' : 'heart-outlined'} size={32} color={liked ? 'red' : 'black'}/>
        </TouchableOpacity>
    )
}
export default FavButton