import React, {useState,useEffect} from 'react';
import {ScrollView, Text, View,StyleSheet, Image,TextInput,Appearance, SafeAreaView,FlatList} from 'react-native';
import SearchIcon from 'react-native-vector-icons/Feather'
import SettingIcon from 'react-native-vector-icons/Fontisto'
import MenuIcon from 'react-native-vector-icons/AntDesign';
import MapIcon from 'react-native-vector-icons/FontAwesome'
import {Col,Row,Grid} from 'react-native-easy-grid'
import TrendingCard from '../component/trendingcard';
import Axios from 'axios'
import { ServiceConstant } from '../../serviceconstant';
import StarIcon from 'react-native-vector-icons/Entypo';
import PenIcon  from 'react-native-vector-icons/FontAwesome';


const marketlistview=({navigation})=> {
  const [restaurant_detail,setRestaurantDetail] = useState([])
  const [marketnum,setMarketNum] = useState([])
  const [res_keyword,setResKeyword] = useState()
  const [theme,setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme)=>{
    setTheme(scheme.colorScheme);
  })
  useEffect(()=>{
    Axios
    .post(ServiceConstant.record_around_location + "?" + "key" + "=" + ServiceConstant.key + "&" + "uuid" + "=" + ServiceConstant.uuid + "&" + "id" + "=" + ServiceConstant.user_login_data + "&" + "l" + "=" + ServiceConstant.user_lat + "," + ServiceConstant.user_long + "&" + "r" + "=" + 10 + "&" + "t" + "=" + 2 )
    .then(function(data){
     setMarketNum(data.data.data)
     setRestaurantDetail(data.data.data.markets)
      // alert(JSON.stringify(marketnum.number_rest))
    })
  },[])

  

    return (
      <SafeAreaView style={theme == 'light'?styles.container:Darkstyles.container}>
      <View style={theme == 'light'?styles.container:Darkstyles.container}>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
          <MenuIcon name='arrowleft' color={theme == 'light'?'black':'white'} size={30} style={{left:0,position:'absolute',marginLeft:13}} onPress={()=>navigation.navigate('homescreen')}/>
          <Image source={theme == 'light' ? require('../../img/zabihah.png'):require('../../img/Zabihahblack.png')}  style={{alignSelf:'center',padding:10}}/>
          <MapIcon name='map' color={theme == 'light'?'black':'white'} size={25} style={{right:0,position:'absolute',marginRight:20}} onPress={()=>navigation.navigate('mapviewmarket',{mapdata:marketnum})}/>
          </View>
          <View>
          <Text style={theme == 'light'?styles.main_text:Darkstyles.main_text}>{JSON.stringify(marketnum.number_mark)} markets with halal products</Text>
         <View style={{width:'100%',height:40,flexDirection:'row'}}>
             
             <View style={{width:'80%',height:40,left:20,flexDirection:'row',backgroundColor:'white',borderRadius:10}}>
             <SearchIcon name='search' size={15} color={'grey'} style={{alignSelf:'center',left:10}} />
            
             <TextInput placeholder='Filter by keyword' style={{alignSelf:'center',left:15,color:"black"}} placeholderTextColor={theme=='light'?'grey':'grey'} onChangeText={setResKeyword} value={res_keyword}/>
             </View>
             <View style={{width:'20%',justifyContent:'center'}}>
             <SettingIcon name='player-settings' size={25} color={theme == 'light'?'black':'white'} style={{alignSelf:'center'}} onPress={()=>navigation.navigate('searchgroupmarketlist')}/>
             </View>
         </View>
          </View>
        {/* <TrendingCard/> */}
        <FlatList data={restaurant_detail}
      renderItem={({item})=>
      <Grid style={theme == 'light'?style.main_grid:styleDark.main_grid} onPress={()=>navigation.navigate('marketdetail',{res_detail:item})}>
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
          <View style={{flexDirection:'row',backgroundColor:'green',alignItems:'center',justifyContent:'center'}}>
          <Text style={{color:'white',fontWeight:'bold'}}>
            {item.returning}%
          </Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10}}>
          <Text style={theme == 'light'?style.km_text:styleDark.km_text}>
            {item.distance_km}km
          </Text>
          </View>
          </Col>
      </Row>

      <View style={{flexDirection:'row',right:5}}>
           <Text style={{backgroundColor:'#FFCC2A',fontSize:12,padding:2,margin:5,fontWeight:'bold',color:'black'}}>{item.cuisine.split(',').map((step,i)=> <Text>{i > 0 && ","}{step}</Text>)}</Text>
           {/* <Text style={{backgroundColor:'#FFCC2A',fontSize:12,margin:5,padding:2,fontWeight:'bold',color:'black'}}>{item.cuisine}</Text> */}
        </View>       
  </Grid>
    }
      />

       
      </View>
      </SafeAreaView>
    );
  
}


export default marketlistview;


const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    width:'100%',
    height:'100%',
    backgroundColor:'#F2F2F3'
  },
  main_text:{left:10,color:'black',fontWeight:'bold',fontSize:20,padding:10}

});
const Darkstyles = StyleSheet.create({
container: {
  paddingTop: 20,
  width:'100%',
  height:'100%',
  backgroundColor:'black'
},
main_text:{left:10,color:'white',fontWeight:'bold',fontSize:20,padding:10}
});
const styleDark = StyleSheet.create({
  main_grid:{padding:10,shadowOffset: {width: 0,height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84,  elevation: 5,backgroundColor:'#494949',height:120,marginTop:15},
  text:{fontSize:17,fontWeight:'bold',color:'white'},
  text_under:{fontSize:13,color:'grey'},
  km_text:{color:'white',fontSize:12}
})
const style = StyleSheet.create({
  main_grid:{padding:10,shadowOffset: {width: 0,height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84,  elevation: 5,backgroundColor:'white',height:120,marginTop:15},
  text:{fontSize:17,fontWeight:'bold',color:'black'},
  text_under:{fontSize:13,color:'grey'},
  km_text:{color:'black',fontSize:12}
})