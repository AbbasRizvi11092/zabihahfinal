import React from "react";
import {StyleSheet, TouchableOpacity,Text} from 'react-native'

const ButtonWhite = props =>{
    return(
        <TouchableOpacity onPress={props.next} style={style.touch_style}><Text style={style.touch_text}>{props.text}</Text></TouchableOpacity> 
    )
}
const style = StyleSheet.create({
    touch_style:{
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
})
export default ButtonWhite;