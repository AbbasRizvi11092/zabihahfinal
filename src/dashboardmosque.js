import React, {useState,useEffect} from 'react';
import { Text, View,StyleSheet, Image, TouchableOpacity, Appearance, SafeAreaView,FlatList} from 'react-native';
import { Avatar } from 'react-native-elements';
import MenuIcon from 'react-native-vector-icons/AntDesign';
import DashboardCard from './component/dashboardcard';
import {ServiceConstant} from '../serviceconstant'
import Axios from 'axios'
import {Col,Row,Grid} from 'react-native-easy-grid'
import PenIcon  from 'react-native-vector-icons/FontAwesome';
import StarIcon from 'react-native-vector-icons/Entypo';


const dashboardmosque=({navigation})=> {
  const [mem_data,setMem_Data] = useState([])
  const [dashboardData,setDashboardData] = useState([])
  const [theme,setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme)=>{
    setTheme(scheme.colorScheme);
  })
  useEffect(()=>{
        Axios
        .post(ServiceConstant.retrieve_mem_info + "?" + "key" + "=" + ServiceConstant.key + "&" + "uuid" + "=" + ServiceConstant.uuid + "&" + "mid" + "=" + res_text)
        .then(function(data){
          setMem_Data(data.data.member)
         setDashboardData(data.data.member.favorite_rest)
        //  ServiceConstant.user_detail = dashboardData[0]
         
          // alert(JSON.stringify(mem_data.username))
        })
      },[])
      const res_text = navigation.getParam('member_id','nothing sent')

    return (
      <SafeAreaView style={theme == 'light'?styles.container:stylesDark.container}>
      <View style={theme == 'light'?styles.container:stylesDark.container}>
         <View style={{flexDirection:'row',justifyContent:'center'}}>
         <Image source={theme == 'light' ? require('../img/zabihah.png'):require('../img/Zabihahblack.png')}  style={{alignSelf:'center',padding:10}}/>
          <MenuIcon name='arrowleft' color={theme == 'light'?'black':'white'} size={30} style={{left:0,position:'absolute',marginLeft:13}} onPress={()=>navigation.navigate('publicprofilemosque')}/>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',left:20,width:'100%',height:'14%'}}>
              <Avatar rounded source={{uri:mem_data.user_photo}} size="medium" icon={{name:'checkcircle',type:'antdesign',color:'red',size:30,disabled:false}} iconStyle={{marginLeft:30,bottom:10}}/>
              <View>
              <Text style={theme == 'light'?styles.text_name:stylesDark.text_name}>{mem_data.display_name}</Text>
              <Text style={theme == 'light'?styles.text_area:stylesDark.text_area}>{mem_data.home_city}, {mem_data.home_state}</Text>

              </View>
              <View style={{position:'absolute',right:0,marginRight:40,width:80,justifyContent:'center'}}>
              <TouchableOpacity style={{backgroundColor:'#990000',height:30,justifyContent:'center'}}>
                  <Text style={{color:'white',textAlign:'center',fontWeight:'bold'}}>Follow</Text>
                  {/* <Text style={{color:'white',textAlign:'center',fontWeight:'bold'}}>{res_text}</Text> */}

              </TouchableOpacity>
              </View>
          </View>
         
          <Text style={theme == 'light'?styles.text_main:stylesDark.text_main}>Saved places</Text>
         
       {/* <DashboardCard/> */}
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

        <View style={{flexDirection:'row',right:5}}>
           {/* <Text style={{backgroundColor:'#FFCC2A',fontSize:12,padding:2,margin:5,fontWeight:'bold',color:'black'}}>CUISINE TAG</Text> */}
           <Text style={{backgroundColor:'#FFCC2A',fontSize:12,margin:5,padding:2,fontWeight:'bold',color:'black'}}>{item.tags}</Text>
        </View>     
    </Grid>
    }
        />
        </TouchableOpacity>
         
      
       
      </View>
      </SafeAreaView>
    );
  
}


export default dashboardmosque;


const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      width:'100%',
      height:'100%',
      backgroundColor:'#F2F2F3'
    },
    text_name:{color:'black',fontSize:17,left:10,fontWeight:'bold'},
    text_area:{color:'grey',fontSize:12,left:10},
    text_main:{left:20,color:'black',fontWeight:'bold',fontSize:25}

});
const stylesDark = StyleSheet.create({
  container: {
    paddingTop: 20,
    width:'100%',
    height:'100%',
    backgroundColor:'black'
  },
  text_name:{color:'white',fontSize:17,left:10,fontWeight:'bold'},
  text_area:{color:'white',fontSize:12,left:10},
  text_main:{left:20,color:'white',fontWeight:'bold',fontSize:25}
});
const style = StyleSheet.create({
  main_grid:{padding:10,shadowOffset: {width: 0,height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84,  elevation: 5,backgroundColor:'white',height:120,marginTop:15},
  text:{fontSize:17,fontWeight:'bold',color:'black'}
})
const styleDark = StyleSheet.create({
  main_grid:{padding:10,shadowOffset: {width: 0,height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84,  elevation: 5,backgroundColor:'#494949',height:120,marginTop:15},
  text:{fontSize:17,fontWeight:'bold',color:'white'}
})