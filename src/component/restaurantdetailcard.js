import React,{useState,useEffect} from "react";
import {View,Text,Image,Appearance,StyleSheet} from 'react-native'
import PenIcon from 'react-native-vector-icons/FontAwesome'
import {Col,Row} from 'react-native-easy-grid'
import Axios from 'axios'
import {ServiceConstant} from '../../serviceconstant'

const RestaurantDetailCard = props =>{
    const [theme,setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme)=>{
      setTheme(scheme.colorScheme);
    })
    
    return(
        <View style={theme == 'light'?style.main_view:Darkstyle.main_view}>
                    <View style={{flexDirection:'row'}}>
                      <Image source={require('../../img/avatar.png')} style={{width:40,height:40,alignSelf:'center',borderRadius:15}}/>
                            <View style={{margin:5,alignContent:'center'}}>
                            <Col style={{flexDirection:'row'}}>
                            <PenIcon name='star' color={'#FFCC2A'} size={12} style={{alignSelf:'center'}}/>
                            <Text style={theme == 'light'?style.star_text:Darkstyle.star_text}>
                                5
                            </Text>
                            </Col>
                            <Row style={{alignSelf:'center',backgroundColor:'#009A00'}}>
                                <Text style={{color:'white',fontWeight:'bold'}}>YES</Text>
                            </Row>
                            </View>                   
                    </View>  
                    <Text style={theme == 'light'?style.name_text:Darkstyle.name_text}>
                        Shahid Amanullah
                    </Text>
                    <Text style={theme == 'light'?style.text_under:Darkstyle.text_under}>
                        Vienna, VA
                    </Text>
                    </View>
    )
}
export default RestaurantDetailCard

const style = StyleSheet.create({
    main_view:{backgroundColor:'white',padding:5,margin:5},
    star_text:{alignSelf:'center',fontWeight:'bold',color:'black'},
    name_text:{color:'black',fontWeight:'bold'},
    text_under:{color:'grey'}
})
const Darkstyle = StyleSheet.create({
    main_view:{backgroundColor:'#494949',padding:5,margin:5},
    star_text:{alignSelf:'center',fontWeight:'bold',color:'white'},
    name_text:{color:'white',fontWeight:'bold'},
    text_under:{color:'grey'}
})