import React,{useState,useEffect} from "react";
import {View,Text,Image, StyleSheet,Appearance,FlatList,TextInput, TouchableOpacity} from 'react-native'
import PenIcon  from 'react-native-vector-icons/FontAwesome';
import StarIcon from 'react-native-vector-icons/Entypo';
import {Col,Row,Grid} from 'react-native-easy-grid'
import Axios from 'axios'
import {ServiceConstant} from '../../serviceconstant'

const TrendingCard =({navigation}) =>{
    const [restaurant_detail,setRestaurantDetail] = useState([])
    const [res_keyword,setResKeyword] = useState()
    const [theme,setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme)=>{
      setTheme(scheme.colorScheme);
    })
    useEffect(()=>{
      Axios
      .post(ServiceConstant.trending_around_location + "?" + "key" + "=" + ServiceConstant.key + "&" + "uuid" + "=" + 2 + "&" + "id" + "=" + 122 + "&" + "l" + "=" + "51.543227,0.0324407" + "&" + "r" + "=" + 10 + "&" + "t" + "=" + 1)
      .then(function(data){
       setRestaurantDetail(data.data.data.trending)
      //   alert(JSON.stringify(data.data.data))
      })
    })
    return(
      <TouchableOpacity>
       {/* <TextInput placeholder='Filter by keyword' style={{alignSelf:'center',left:15}} placeholderTextColor={theme=='light'?'grey':'grey'} onChangeText={setResKeyword} value={res_keyword}/> */}
      <FlatList data={restaurant_detail}
      renderItem={({item})=>
      <Grid style={theme == 'light'?style.main_grid:styleDark.main_grid} onPress={()=>navigation.navigate('restaurantdetail',{res_detail:item})}>
      <Row>
          <Col style={{width:110}}>
          <Image source={{uri:item.photo_url}} style={{width:100,height:60}}/>
          </Col>

          <Col style={{width:'50%'}}>
          <Text style={theme == 'light'?style.text:styleDark.text}>
             {item.name}
          </Text>
          <Text  style={theme == 'light'?style.text_under:styleDark.text_under}>
             {item.address}
          </Text>
          <Text  style={theme == 'light'?style.text_under:styleDark.text_under}>
             {item.tags}
          </Text>
          </Col>

          <Col style={{width:'12%',position:'absolute',right:0}}>
           <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
          <StarIcon name='star' size={16} color={'#FFDF0D'} style={{position:'absolute',left:5}}/>
          <Text style={{color:'black',fontWeight:'bold',left:7}}>
              {item.avgrating}
          </Text>
          </View>
          <View style={{flexDirection:'row',backgroundColor:'grey',alignItems:'center',justifyContent:'center'}}>
          <PenIcon name="pencil" size={16} color={'white'} style={{position:'absolute',left:5}}/>
          <Text style={{color:'white',fontWeight:'bold',left:7}}>
            {item.reviews}
          </Text>
          </View>
          {/* <View style={{flexDirection:'row',backgroundColor:'green',alignItems:'center',justifyContent:'center'}}>
          <Text style={{color:'white',fontWeight:'bold'}}>
            {item.returning}%
          </Text>
          </View> */}
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <Text style={theme == 'light'?style.km_text:styleDark.km_text}>
            {item.distance_km}km
          </Text>
          </View>
          </Col>
      </Row>

      <View style={{width:'30%'}}>
          <View  style={{backgroundColor:'#FFCC2A',alignItems:'center',height:25,justifyContent:'center'}}>
         <Text style={{fontWeight:'bold',color:'black',fontSize:12}}>{item.cuisine}</Text>
          </View>
          {/* <Col style={{backgroundColor:'#FFCC2A',alignItems:'center',height:25,justifyContent:'center',height:25,marginLeft:10}}>
         <Text style={{fontWeight:'bold',color:'black',fontSize:12}}>CUISINE TAG</Text>
          </Col>
          <Col style={{backgroundColor:'#FFCC2A',alignItems:'center',height:25,justifyContent:'center',height:25,marginLeft:10}}>
         <Text style={{fontWeight:'bold',color:'black',fontSize:12}}>CUISINE TAG</Text>
          </Col> */}
          {/* <Col style={{alignItems:'center',height:25,height:25,marginLeft:10}}>
         
          </Col> */}
      </View>       
  </Grid>
    }
      />
      </TouchableOpacity>
        
    )
}
export default TrendingCard

const style = StyleSheet.create({
    main_grid:{padding:10,shadowOffset: {width: 0,height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84,  elevation: 5,backgroundColor:'white',height:120,marginTop:15},
    text:{fontSize:17,fontWeight:'bold',color:'black'},
    text_under:{fontSize:13,color:'grey'},
    km_text:{color:'black'}
})
const styleDark = StyleSheet.create({
    main_grid:{padding:10,shadowOffset: {width: 0,height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84,  elevation: 5,backgroundColor:'#494949',height:120,marginTop:15},
    text:{fontSize:17,fontWeight:'bold',color:'white'},
    text_under:{fontSize:13,color:'grey'},
    km_text:{color:'white'}
})