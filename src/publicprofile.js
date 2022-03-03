import PropTypes from 'prop-types';
import React, {Component,useEffect,useState} from 'react';
// import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import { Text, View,StyleSheet, Image, TouchableOpacity,FlatList,ImageBackground,Appearance, ScrollView,ActivityIndicator} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Avatar, ListItem } from 'react-native-elements';
import PenIcon  from 'react-native-vector-icons/FontAwesome';
import StarIcon from 'react-native-vector-icons/Entypo';
import CheckIcon from 'react-native-vector-icons/AntDesign'
import { Col, Grid, Row } from 'react-native-easy-grid';
import MenuIcon from 'react-native-vector-icons/AntDesign';
import PublicCard from './component/publiccard';
import {ServiceConstant} from '../serviceconstant'
import Axios from 'axios'
import ReviewCard from './component/reviewCard';


const publicprofile=({navigation})=> {
  const [mem_data,setMem_data] = useState([])
  const [fav,setFav] = useState([])
  const [isLoading,setisLoading] = useState(true)
  const [selectedValue,setSelectedValue] = useState([]);
    const [theme,setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme)=>{
      setTheme(scheme.colorScheme);
    })
    useEffect(()=>{
      Axios
      .post(ServiceConstant.retrieve_mem_info + "?" + "key" + "=" + ServiceConstant.key + "&" + "uuid" + "=" + ServiceConstant.uuid + "&" + "mid" + "=" + res_text )
      .then(function(data){
        setisLoading(false)
       setMem_data(data.data.member)
       setFav(data.data.member.favorite_rest)
     setSelectedValue(data.data.member.reviews_recent_r)
        // alert(JSON.stringify(mem_data.favorite_rest[0].rest_name))
      })
    },[])
    const res_text = navigation.getParam('member_id','nothing sent')

    return isLoading ? (
      <View style={{flex:1,justifyContent:'center'}}>
      <ActivityIndicator color='red' size='large'/>
      </View>
    ):(
      <>
      <View style={theme == 'light'?styles.container:Darkstyles.container}>
         <View style={{flexDirection:'row',justifyContent:'center'}}>
         <Image source={theme == 'light' ? require('../img/zabihah.png'):require('../img/Zabihahblack.png')}  style={{alignSelf:'center',padding:10}}/>
          <MenuIcon name='arrowleft' color={theme=='light'?"black":"white"} size={30} style={{left:0,position:'absolute',marginLeft:13}} onPress={()=>navigation.navigate('profilereview')}/>
          </View>
          <View style={{alignSelf:'center',alignItems:'center'}}>
              <Avatar source={{uri:mem_data.user_photo}} rounded size={45} onPress={()=>navigation.navigate('homescreen')}/>
              <Text style={theme == 'light'?styles.text_name:Darkstyles.text_name}>{mem_data.display_name}</Text>
              <Text style={theme == 'light'?styles.text_area:Darkstyles.text_area}>{mem_data.home_city}, {mem_data.home_state} </Text>
              <Text style={theme == 'light'?styles.text_main:Darkstyles.text_main}>
                 {mem_data.bio}
              </Text>
              <View style={{width:80,justifyContent:'center'}}>
              <TouchableOpacity style={{backgroundColor:'#990000',height:30,justifyContent:'center'}}>
                  <Text style={{color:'white',textAlign:'center',fontWeight:'bold'}}>Follow</Text>
              </TouchableOpacity>
              </View>
              </View>
             <ScrollView style={{marginTop:10}}>


                    <View style={theme == 'light' ? style.main_view:Darkstyle.main_view}>
        <View style={{flexDirection:'row'}}>
            <Text style={theme == 'light'?style.text_saved:Darkstyle.text_saved}>
                {mem_data.reviews_r} saved places
            </Text>
            <Text style={theme == 'light'?style.text_see:Darkstyle.text_see} onPress={()=>navigation.navigate('dashboard',{member_id:res_text})}>
                See all
            </Text>
        </View>
    <FlatList 
    style={{width:'100%'}}
data={fav}
horizontal
showsHorizontalScrollIndicator = {false}
renderItem={({item})=>
   <TouchableOpacity style={theme == 'light'?style.flatlist_view:Darkstyle.flatlist_view}>
       <ImageBackground source={{uri:item.photo_url}} style={{width:'100%',height:100,}} resizeMode="cover">
       <Grid>
  <Row>
      <Col style={{width:'25%',position:'absolute',right:0,margin:10}}>
       <View style={theme == 'light'?style.star_view:Darkstyle.star_view}>
      <StarIcon name='star' size={16} color={'#FFDF0D'} style={{position:'absolute',left:5}}/>
      <Text style={theme == 'light'?styles.star_text:Darkstyles.star_text}>
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
</Grid>
</ImageBackground>
       <View style={{padding:10}}>
       <Text style={theme == 'light'?style.name_text:Darkstyle.name_text}>
           {item.rest_name}
       </Text>
       <Text style={theme == 'light'?style.text_under:Darkstyle.text_under}>
           {item.address}
       </Text>
       <Text style={theme == 'light'?styles.text_under:Darkstyle.text_under}>
           {item.tags}
       </Text>
       <View style={{flexDirection:'row',right:5}}>
           {/* <Text style={{backgroundColor:'#FFCC2A',fontSize:12,padding:2,margin:5,fontWeight:'bold',color:'black'}}>CUISINE TAG</Text> */}
           <Text style={{backgroundColor:'#FFCC2A',fontSize:12,margin:5,padding:2,fontWeight:'bold',color:'black'}}>{item.tags}</Text>
        </View>
        </View>
   </TouchableOpacity>
}
/>
 </View>



             <View style={theme == 'light' ? style.main_view:Darkstyle.main_view}>
        <View style={{flexDirection:'row'}}>
            <Text style={theme == 'light'?style.text_saved:Darkstyle.text_saved}>
              {mem_data.reviews_total} reviews
            </Text>
            <Text style={theme == 'light'?style.text_see:Darkstyle.text_see} onPress={()=>navigation.navigate('profilereviews')}>
                See all
            </Text>
        </View>
    <FlatList 
    style={{width:'100%'}}
data={selectedValue}
horizontal
showsHorizontalScrollIndicator = {false}
renderItem={({item})=>
   <TouchableOpacity style={theme == 'light'?style.flatlist_view:Darkstyle.flatlist_view} >
       <ImageBackground source={{uri:item.rest_photo}} style={{width:'100%',height:100,}} resizeMode="cover" >
       <Grid>
  <Row>
      <Col style={{width:'25%',position:'absolute',right:0,margin:10}}>
       <View style={theme == 'light'?style.star_view:Darkstyle.star_view}>
      <StarIcon name='star' size={16} color={'#FFDF0D'} style={{position:'absolute',left:5}}/>
      <Text style={theme == 'light'?style.star_text:Darkstyle.star_text}>
         {item.rev_rating}
      </Text>
      </View>
      <View style={{flexDirection:'row',backgroundColor:'grey',alignItems:'center',justifyContent:'center'}}>
      <PenIcon name="pencil" size={16} color={'white'} style={{position:'absolute',left:5}}/>
      <Text style={{color:'white',fontWeight:'bold',left:7}}>
        9
      </Text>
      </View>
      <View style={{flexDirection:'row',backgroundColor:'green',alignItems:'center',justifyContent:'center'}}>
      <Text style={{color:'white',fontWeight:'bold'}}>
        %
      </Text>
      </View>
      </Col>
  </Row>
</Grid>
</ImageBackground>
       <View style={{padding:10}}>
       <Text style={theme == 'light'?style.name_text:Darkstyle.name_text}>
           {item.rest_name}
       </Text>
       <Text style={theme == 'light'?style.text_under:Darkstyle.text_under}>
           {item.rest_address}
       </Text>
       <Text style={theme == 'light'?style.text_under:Darkstyle.text_under}>
           {item.rest_tags}
       </Text>
       <View style={{flexDirection:'row',right:5}}>
           <Text style={{backgroundColor:'#FFCC2A',fontSize:12,padding:2,margin:5,fontWeight:'bold',color:'black'}}>{item.rest_tags}</Text>
           {/* <Text style={{backgroundColor:'#FFCC2A',fontSize:12,margin:5,padding:2,fontWeight:'bold',color:'black'}}>CUISINE TAG</Text> */}
        </View>
        </View>
   </TouchableOpacity>
}
/>
 </View>
           </ScrollView>
      </View>
      </>
    );
  
}


export default publicprofile;


const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      width:'100%',
      height:'100%',
      backgroundColor:'#F2F2F3'
    },
    text_name:{fontSize:17,color:'black',fontWeight:'bold'},
    text_area:{fontSize:14,color:'black'},
    text_main:{fontSize:15,color:'black',margin:10},
    // text_saved:{fontSize:20,color:'black',fontWeight:'bold'},
    text_see:{position:'absolute',right:0,color:'black',fontSize:15}
});
const Darkstyles = StyleSheet.create({
    container: {
      paddingTop: 20,
      width:'100%',
      height:'100%',
      backgroundColor:'black'
    },
    text_name:{fontSize:17,color:'white',fontWeight:'bold'},
    text_area:{fontSize:14,color:'white'},
    text_main:{fontSize:15,color:'white',margin:10},
    // text_saved:{fontSize:20,color:'white',fontWeight:'bold'},
    text_see:{position:'absolute',right:0,color:'white',fontSize:15}
});
const style = StyleSheet.create({
  main_view:{width:'100%',margin:10},
  text_saved:{fontSize:20,color:'black',fontWeight:'bold'},
  text_see:{position:'absolute',right:0,color:'black',fontSize:15,alignSelf:'center',marginRight:15},
  flatlist_view:{backgroundColor:'white',margin:7,shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  
  elevation: 5,
},
star_view:{flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'white'},
star_text:{color:'black',fontWeight:'bold',left:7},
name_text:{color:'black',fontWeight:'bold'},
text_under:{color:'black',fontSize:9}
});
const Darkstyle = StyleSheet.create({
  main_view:{width:'100%',margin:10},
  text_saved:{fontSize:20,color:'white',fontWeight:'bold'},
  text_see:{position:'absolute',right:0,color:'white',fontSize:15,alignSelf:'center',marginRight:15},
  flatlist_view:{backgroundColor:'#494949',flex:1,margin:7,shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  
  elevation: 5,
},
star_view:{flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'#494949'},
star_text:{color:'white',fontWeight:'bold',left:7},
name_text:{color:'white',fontWeight:'bold',fontSize:12},
text_under:{color:'white',fontSize:10}
});