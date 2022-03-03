import React,{useState,useEffect} from "react";
import {View,Text,Image, StyleSheet,Appearance,FlatList, TouchableOpacity} from 'react-native'
import PenIcon  from 'react-native-vector-icons/FontAwesome';
import StarIcon from 'react-native-vector-icons/Entypo';
import {Col,Row,Grid} from 'react-native-easy-grid'
import Axios from 'axios'
import { ServiceConstant } from "../../serviceconstant";

const DashboardCard = ({navigation}) =>{
    const [dashboardData,setDashboardData] = useState([])
    const [theme,setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme)=>{
      setTheme(scheme.colorScheme);
    })
    useEffect(()=>{
        Axios
        .post(ServiceConstant.retrieve_mem_info + "?" + "key" + "=" + ServiceConstant.key + "&" + "uuid" + "=" + ServiceConstant.uuid + "&" + "mid" + "=" + ServiceConstant.user_login_data)
        .then(function(data){
         setDashboardData(data.data.member.favorite_rest)
          // alert(JSON.stringify(mem_data.username))
        })
      })
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('restaurantdetail')}>
        <FlatList 
        data={dashboardData}
        renderItem={({item})=>
        <Grid style={theme == 'light'?style.main_grid:styleDark.main_grid}>
        <Row>
            <Col style={{width:110}}>
            <Image source={{uri:item.photo_url}} style={{width:100,height:60}}/>
            </Col>

            <Col style={{width:'50%'}}>
            <Text style={theme == 'light'?style.text:styleDark.text}>
               {item.rest_name} 
            </Text>
            <Text style={{fontSize:12}}>
               {item.address}
            </Text>
            <Text style={{fontSize:12}}>
               {item.tags}
            </Text>
            </Col>

            <Col style={{width:'12%',position:'absolute',right:0}}>
             <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
            <StarIcon name='star' size={16} color={'#FFDF0D'} style={{position:'absolute',left:5}}/>
            <Text style={{color:'black',fontWeight:'bold',left:7}}>
            {item.reviews}
            </Text>
            </View>
            <View style={{flexDirection:'row',backgroundColor:'grey',alignItems:'center',justifyContent:'center'}}>
            <PenIcon name="pencil" size={16} color={'white'} style={{position:'absolute',left:5}}/>
            <Text style={{color:'white',fontWeight:'bold',left:7}}>
            {item.avgrating}
            </Text>
            </View>
            <View style={{flexDirection:'row',backgroundColor:'green',alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'white',fontWeight:'bold'}}>
            {item.returning}%
            </Text>
            </View>
            </Col>
        </Row>

        <Row style={{top:20}}>
            <Col  style={{width:100,backgroundColor:'#FFCC2A',alignItems:'center',height:25,justifyContent:'center'}}>
           <Text style={{fontWeight:'900',color:'black',fontSize:12}}>CUISINE TAG</Text>
            </Col>
            <Col style={{width:100,backgroundColor:'#FFCC2A',alignItems:'center',height:25,justifyContent:'center',height:25,marginLeft:10}}>
           <Text style={{fontWeight:'bold',color:'black',fontSize:12}}>CUISINE TAG</Text>
            </Col>
            <Col style={{width:100,backgroundColor:'#FFCC2A',alignItems:'center',height:25,justifyContent:'center',height:25,marginLeft:10}}>
           <Text style={{fontWeight:'bold',color:'black',fontSize:12}}>CUISINE TAG</Text>
            </Col>
        </Row>       
    </Grid>
    }
        />
        </TouchableOpacity>
        
    )
}
export default DashboardCard

const style = StyleSheet.create({
    main_grid:{padding:10,shadowOffset: {width: 0,height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84,  elevation: 5,backgroundColor:'white',height:120,marginTop:15},
    text:{fontSize:17,fontWeight:'bold',color:'black'}
})
const styleDark = StyleSheet.create({
    main_grid:{padding:10,shadowOffset: {width: 0,height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84,  elevation: 5,backgroundColor:'#494949',height:120,marginTop:15},
    text:{fontSize:17,fontWeight:'bold',color:'white'}
})