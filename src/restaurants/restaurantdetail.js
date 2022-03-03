import PropTypes from 'prop-types';
import React, {Component, useState,useEffect} from 'react';
// import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View,StyleSheet, Image, Appearance, FlatList,SectionList,Linking} from 'react-native';
import MobileIcon  from 'react-native-vector-icons/Entypo';
import PenIcon from 'react-native-vector-icons/FontAwesome'
import { Col, Grid, Row } from 'react-native-easy-grid';
import MenuIcon from 'react-native-vector-icons/AntDesign';
import EditIcon from 'react-native-vector-icons/Ionicons';
import CheckIcon from 'react-native-vector-icons/Feather'
import GlassIcon from 'react-native-vector-icons/FontAwesome5'
import WebIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Addreviewcard from '../component/addreviewcard';
import MapView,{Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {location} from '../mapData';
import CustomMarker from '../custommarker';
import RestaurantDetailCard from '../component/restaurantdetailcard'
import Axios from 'axios'
import { ServiceConstant } from '../../serviceconstant';
// import CustomMarker from './custommarker';
const mapDarkStyle=
  [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ]


  const mapStandardStyle = [
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
  ]

const restaurantdetail=({navigation})=> {
  const [review,setReviews] = useState([])
  const [detail,setDetail] = useState([])
  const [icon,setIcon] = useState([])
  const [photo,setPhoto] = useState([])
  const [theme,setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme)=>{
    setTheme(scheme.colorScheme);
  })

  useEffect(()=>{
    Axios
    .post(ServiceConstant.data_particular_record + "?" + "key" + "=" + ServiceConstant.key + "&" + "uuid" + "=" + ServiceConstant.uuid + "&" + "id" + "=" + res_id + "&" + "l" + "=" + ServiceConstant.user_lat + "," + ServiceConstant.user_long + "&" + "r" + "=" + 10 + "&" + "t" + "=" + 1 )
    .then(function(data){
     setReviews(data.data.data)
     setPhoto(data.data.data.photo_list)
     setDetail(data.data.data.review_list)
     setIcon(data.data)
      console.log(review)
    
    })
  },[])
  const res_text = navigation.getParam('res_detail','nothing sent')
  const res_id = res_text.id
  const res_lat = parseFloat(res_text.lat)
  const res_long = parseFloat(res_text.long)

    return (
      <View style={theme == 'light'?styles.container:Darkstyles.container}>
         <View style={{flexDirection:'row',justifyContent:'center'}}>
         <Image source={theme == 'light' ? require('../../img/zabihah.png'):require('../../img/Zabihahblack.png')}  style={{alignSelf:'center',padding:10}}/>
          <MenuIcon name='arrowleft' color={theme=='light'?"black":"white"} size={30} style={{left:0,position:'absolute',alignSelf:'center'}} onPress={()=>navigation.navigate('restaurantlistview')}/>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={theme == 'light'?styles.main_text:Darkstyles.main_text}>{res_text.name}</Text>

              <View style={{flexDirection:'row',marginLeft:8}}>
           <Text style={{backgroundColor:'#FFCC2A',fontSize:12,padding:2,margin:5,fontWeight:'bold',color:'black'}}>{review.cuisine}</Text>
           {/* <Text style={{backgroundColor:'#FFCC2A',fontSize:12,margin:5,padding:2,fontWeight:'bold',color:'black'}}>{item.cuisine}</Text> */}
        </View>  
             <View>  
               
               <MapView
               provider={PROVIDER_GOOGLE} // remove if not using Google Maps
               style={{width:'100%',height:120}}
               customMapStyle={theme == 'light' ? mapStandardStyle:mapDarkStyle}
               region={{    
                 latitude: res_lat,
                 longitude: res_long,
                 latitudeDelta: 0.015,
                 longitudeDelta: 0.0121,
               }}>
                 {/* <Text>Hello</Text> */}
                  <Marker
                        coordinate={{latitude:res_lat,longitude:res_long}}>
                            <CustomMarker/>
                            </Marker>
                 </MapView> 
            
         
       <View style={{backgroundColor:'#FFCC2A',margin:10}}>
                    <Text style={{textAlign:'center',color:'black',fontSize:18,padding:10,fontWeight:'bold'}}>
                        Order home delivery here
                    </Text>
                </View>
                <View style={{backgroundColor:'#FFCC2A',margin:10}} onPress={()=>navigation.navigate('couponlist',{restaurant_id:res_id})}>
                    <Text style={{textAlign:'center',color:'black',fontSize:18,padding:10,fontWeight:'bold'}} onPress={()=>navigation.navigate('couponlist',{restaurant_id:res_id})}>
                        {review.coupons} exclusive offers available here
                    </Text>
                </View>
                </View> 
                <Grid style={{margin:5}}>
                    <Row>
                        <Col>
                        <MobileIcon name='old-mobile' color={theme=='light'?"black":"white"} size={25} style={{alignSelf:'center'}}/>
                        <Text style={theme == 'light'?styles.first_icon:Darkstyles.first_icon}>Call</Text>
                        </Col>

                        <Col onPress={()=>navigation.navigate('addreview',{rewiew_data:res_text})}>
                        <PenIcon name='pencil' color={theme=='light'?"black":"white"} size={25} style={{alignSelf:'center'}}/>
                        <Text style={theme == 'light'?styles.first_icon:Darkstyles.first_icon}>Review</Text>
                        </Col>

                        <Col onPress={()=>navigation.navigate('photogallery',{rest_photo:res_id})}>
                        <MobileIcon name='camera' color={theme=='light'?"black":"white"} size={25} style={{alignSelf:'center'}}/>
                        <Text style={theme == 'light'?styles.first_icon:Darkstyles.first_icon}>Photo</Text>
                        </Col>

                        <Col>
                        <MenuIcon name='heart' color={theme=='light'?"black":"white"} size={25} style={{alignSelf:'center'}}/>
                        <Text style={theme == 'light'?styles.first_icon:Darkstyles.first_icon}>follow</Text>
                        </Col>

                        <Col>
                        <PenIcon name='share-alt' color={theme=='light'?"black":"white"} size={25} style={{alignSelf:'center'}}/>
                        <Text style={theme == 'light'?styles.first_icon:Darkstyles.first_icon}>Share</Text>
                        </Col>

                        <Col>
                        <EditIcon name='information-circle' color={theme=='light'?"black":"white"} size={25} style={{alignSelf:'center'}}/>
                        <Text style={theme == 'light'?styles.first_icon:Darkstyles.first_icon}>Edit</Text>
                        </Col>
                        
                    </Row>
                </Grid>
                <Text style={theme == 'light'?styles.feedback_text:Darkstyles.feedback_text}>Zabihah user feedback</Text>
                <View style={{flexDirection:'row',margin:5}}>
                <Row style={{backgroundColor:'white',alignItems:'center'}}>
                    <PenIcon name='star' color={'#FFCC2A'} size={17} style={{margin:2}}/>
                    <Text style={{color:'black',fontWeight:'bold'}}>{review.avgrating}</Text>
                </Row>
                <View style={{width:'87%',left:10}}>
                <Text style={theme == 'light'?styles.review_text:Darkstyles.review_text}>rating from {review.reviews} reviewers</Text>
                </View>
                </View>

                <View style={{flexDirection:'row',margin:5}}>
                <Row style={{backgroundColor:'#009A00',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white',fontWeight:'bold'}}>{review.returning}%</Text>
                </Row>
                <View style={{width:'87%',left:10}}>
                <Text style={theme == 'light'?styles.review_text:Darkstyles.review_text}>of reviewers would return</Text>
                </View>
                </View>

                {review.facebook,review.twitter,review.web?(<View>
                <Text style={theme == 'light'?styles.online_text:Darkstyles.online_text}>Visit this restaurant online</Text>
               <View style={{flexDirection:'row'}}>
               {review.facebook?(<MenuIcon name='facebook-square' color={theme=='light'?"black":"white"} size={35} style={{margin:5}} onPress={() => Linking.openURL(review.facebook)}/>):null}
                   {review.twitter?(<PenIcon name='twitter-square' color={theme=='light'?"black":"white"} size={35} style={{margin:5}} onPress={() => Linking.openURL(review.twitter)}/>):null}
                   {/* <MenuIcon name='instagram' color={theme=='light'?"black":"white"} size={35} style={{margin:5}}/> */}
                   {review.web?(<WebIcon name='web' color={theme=='light'?"black":"white"} size={35} style={{margin:5}} onPress={() => Linking.openURL(review.web)}/>):null}
                 {/* <Text>  {restaurant_detail_main.web}</Text>
                 <Text>{restaurant_detail_main.order_justeat}</Text> */}
               </View>
               </View>):null}

               {review.order_seamless,review.order_grubhub,review.order_doordash,review.order_eatstreet,review.order_direct,review.order_postmates,review.order_foodora,review.order_skipthedishes,review.order_deliveroo,review.order_justeat,review.order_foodhub,review.order_opentable?(
               <View>
                   <Text style={theme == 'light'?styles.delivery_text:Darkstyles.delivery_text}>
                   Order from these delivery apps
                   </Text>
                   <View style={{flexDirection:'row'}}>
                      {review.order_seamless?(<Image source={require('../../img/stuff.png')}/>):null}
                       {review.order_seamless?(<Image source={require('../../img/stuff.png')}  style={styles.image_style}/>):null}
                       {review.order_grubhub?(<Image source={require('../../img/stuff.png')} onPress={() => Linking.openURL(review.order_grubhub)} style={styles.image_style}/>):null}
                       {review.order_doordash?(<Image source={require('../../img/stuff.png')} onPress={() => Linking.openURL(review.order_doordash)} style={styles.image_style} />):null}
                       {review.order_eatstreet?(<Image source={require('../../img/stuff.png')} onPress={() => Linking.openURL(review.order_eatstreet)} style={styles.image_style}/>):null}
                       {review.order_direct?(<Image source={require('../../img/stuff.png')} onPress={() => Linking.openURL(review.order_direct)} style={styles.image_style}/>):null}
                       {review.order_postmates?(<Image source={require('../../img/stuff.png')} onPress={() => Linking.openURL(review.order_postmates)} style={styles.image_style}/>):null}
                       {review.order_foodora?(<Image source={require('../../img/stuff.png')} onPress={() => Linking.openURL(review.order_foodora)} style={styles.image_style}/>):null}
                       {review.order_skipthedishes?(<Image source={require('../../img/stuff.png')} onPress={() => Linking.openURL(review.order_skipthedishes)} style={styles.image_style}/>):null}
                       {review.order_deliveroo?(<Image source={require('../../img/stuff.png')} onPress={() => Linking.openURL(review.order_deliveroo)} style={styles.image_style}/>):null}
                       {review.order_justeat?(<Image source={require('../../img/stuff.png')} onPress={() => Linking.openURL(review.order_justeat)} style={styles.image_style}/>):null}
                       {review.order_foodhub?(<Image source={require('../../img/stuff.png')} onPress={() => Linking.openURL(review.order_foodhub)} style={styles.image_style}/>):null}
                       {review.order_opentable?(<Image source={require('../../img/stuff.png')} onPress={() => Linking.openURL(review.order_opentable)} style={styles.image_style}/>):null}
                   </View>
               </View>):null}
              {review.description?( <View>
                   <Text style={theme == 'light'?styles.description:Darkstyles.description}>
                       Description
                   </Text>
                   <Text style={theme == 'light'?styles.description_text:Darkstyles.description_text}>
                     {review.description}
                   </Text>
               </View>):null}
               
              {review.description_halal?(<View style={{marginTop:10}}>
                <Text style={theme == 'light'?styles.description:Darkstyles.description}>
                    Halal details
                </Text>
                <Text style={theme == 'light'?styles.description_text:Darkstyles.description_text}>
                {review.description_halal}
                </Text>
             </View> ):null} 
            
               {review.meat_icon,review.meat_text?(
               <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                <Image source={{uri:review.meat_icon == "" ? "":review.meat_icon}} style={{width:25,height:25}}/>
                    <Text style={theme == 'light'?styles.last_icon:Darkstyles.last_icon}>
                    {review.meat_text == "" ? "": review.meat_text }
                    </Text>
                </View>):null }

                {review.alcohol_icon,review.alcohol_text?(<View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                     <Image source={{uri:review.alcohol_icon == "" ? "":review.alcohol_icon}} style={{width:25,height:25}}/>
                     <Text style={theme == 'light'?styles.last_icon:Darkstyles.last_icon}>
                     {review.alcohol_text == "" ? "": review.alcohol_text}
                     </Text>
                 </View>):null} 

               {review.delivery_icon,review.delivery_text?(<View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                     <Image source={{uri:review.delivery_icon}} style={{width:25,height:25}}/>
                     <Text style={theme == 'light'?styles.last_icon:Darkstyles.last_icon}>
                     {review.delivery_text == "" ? "" : review.delivery_text}
                     </Text>
                 </View> ):null}

                 {review.organic_icon,review.organic_text?(<View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                     <Image source={{uri:review.organic_icon == "" ? "" : review.organic_icon}} style={{width:25,height:25}}/>
                     <Text style={theme == 'light'?styles.last_icon:Darkstyles.last_icon}>
                     {review.organic_text == "" ? "" : review.organic_text}
                     </Text>
                 </View> ):null}

                 {review.catering_icon,review.catering_text?(<View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                     <Image source={{uri:review.catering_icon == "" ? "" : review.catering_icon}} style={{width:25,height:25}}/>
                     <Text style={theme == 'light'?styles.last_icon:Darkstyles.last_icon}>
                     {review.catering_text == "" ? "" : review.catering_text}
                     </Text>
                 </View> ):null}

                 {review.shisha_icon,review.shisha_text?(<View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                     <Image source={{uri:review.shisha_icon == "" ? "" : review.shisha_icon}} style={{width:25,height:25}}/>
                     <Text style={theme == 'light'?styles.last_icon:Darkstyles.last_icon}>
                     {review.shisha_text == "" ? "" : review.shisha_text}
                     </Text>
                 </View>):null}

                 {review.takeaway_icon,review.takeaway_text?(<View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                     <Image source={{uri:review.takeaway_icon == "" ? "" : review.takeaway_icon}} style={{width:25,height:25}}/>
                     <Text style={theme == 'light'?styles.last_icon:Darkstyles.last_icon}>
                     {review.takeaway_text == "" ? "" : review.takeaway_text}
                     </Text>
                 </View>):null}

                 {review.wifi_icon,review.wifi_text?(<View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                     <Image source={{uri:review.wifi_icon== "" ? "" : review.wifi_icon}} style={{width:25,height:25}}/>
                     <Text style={theme == 'light'?styles.last_icon:Darkstyles.last_icon}>
                     {review.wifi_text == "" ? "" : review.wifi_text}
                     </Text>
                 </View>):null}

                 {review.parking_icon,review.parking_text?(<View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                     <Image source={{uri:review.parking_icon == "" ? "" : review.parking_icon}} style={{width:25,height:25}}/>
                     <Text style={theme == 'light'?styles.last_icon:Darkstyles.last_icon}>
                     {review.parking_text == "" ? "" : review.parking_text}
                     </Text>
                 </View>):null}

                 {review.restrooms_icon,review.restrooms_text?(<View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                     <Image source={{uri:review.restrooms_icon == "" ? "" : review.restrooms_icon}} style={{width:25,height:25}}/>
                     <Text style={theme == 'light'?styles.last_icon:Darkstyles.last_icon}>
                     {review.restrooms_text == "" ? "" : review.restrooms_text}
                     </Text>
                 </View>):null}

                 {review.transit_icon,review.transit_text?(<View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                     <Image source={{uri:review.transit_icon}} style={{width:25,height:25}}/>
                     <Text style={theme == 'light'?styles.last_icon:Darkstyles.last_icon}>
                     {review.transit_text }
                     </Text>
                 </View>):null}

                 {review.children_icon,review.children_text?(<View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                     <Image source={{uri:review.children_icon}} style={{width:25,height:25}}/>
                     <Text style={theme == 'light'?styles.last_icon:Darkstyles.last_icon}>
                     {review.children_text}
                     </Text>
                 </View>):null}

                 {review.access_icon,review.access_text?(<View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                     <Image source={{uri:review.access_icon}} style={{width:25,height:25}}/>
                     <Text style={theme == 'light'?styles.last_icon:Darkstyles.last_icon}>
                     {review.access_text}
                     </Text>
                 </View>):null}

                {review.drivethru_icon,review.drivethru_text?(<View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                     <Image source={{uri:review.drivethru_icon}} style={{width:25,height:25}}/>
                     <Text style={theme == 'light'?styles.last_icon:Darkstyles.last_icon}>
                     {review.drivethru_text}
                     </Text>
                 </View>):null}
                   
               {photo?(
                 <View>
               <View style={{flexDirection:'row',marginTop:10,marginBottom:10}}>
               <Text style={theme == 'light'?styles.photo_text:Darkstyles.photo_text}>
                    Photos
               </Text>
               <Text style={theme == 'light'?styles.see_text:Darkstyles.see_text} onPress={()=>navigation.navigate('photogallery',{rest_photo:res_id})}>
                   See all
               </Text>
               </View>
               <FlatList data={photo} horizontal renderItem={({item})=>
              <Image source={{uri:item.photo_url}} style={{width:100,height:70}}/>
              }/>
              </View>
                ):null}

               {detail?(
                 <View>
               <View style={{flexDirection:'row',marginTop:10,marginBottom:10}}>
               <Text style={theme == 'light'?styles.photo_text:Darkstyles.photo_text}>
                   {review.reviews} reviews
               </Text>
               <Text style={theme == 'light'?styles.see_text:Darkstyles.see_text} onPress={()=>navigation.navigate('detailreview',{review_data:res_text})}>
                   See all
               </Text>
               </View>
               <FlatList
               horizontal
               style={{width:'100%'}}
               data={detail}
               renderItem={({item})=>
               <View style={theme == 'light'?styles.main_view:Darkstyles.main_view}>
               <View style={{flexDirection:'row'}}>
                 <Image source={{uri:item.avatar}} style={{width:40,height:40,alignSelf:'center',borderRadius:25}}/>
                       <View style={{margin:5,alignContent:'center'}}>
                       <Col style={{flexDirection:'row'}}>
                       <PenIcon name='star' color={'#FFCC2A'} size={12} style={{alignSelf:'center'}}/>
                       <Text style={theme == 'light'?styles.star_text:Darkstyles.star_text}>
                           {item.rev_rating}
                       </Text>
                       </Col>
                       <Row style={{alignSelf:'center',backgroundColor:'#009A00'}}>
                           <Text style={{color:'white',fontWeight:'bold'}}>YES</Text>
                       </Row>
                       </View>                   
               </View>  
               <Text style={theme == 'light'?styles.name_text:Darkstyles.name_text}>
                   {item.rev_name}
               </Text>
               {/* <Text style={theme == 'light'?styles.text_under:Darkstyles.text_under}>
                   Vienna, VA
               </Text> */}
               </View>
              }
               /></View>):null}

               
          </ScrollView>
      </View>
    );
  
}


export default restaurantdetail;


const styles = StyleSheet.create({
   

    container: {
      padding: 10,
      width:'100%',
      height:'100%',
      backgroundColor:'#F2F2F3',
    },
   
    first_grid:{
        flexDirection:'row',
        margin:10,
        borderWidth:0.5,
        borderColor:'grey',
        borderRadius:5,
        },

    grid_style:{
            marginTop:15,
            flexDirection:'row',
            margin:10,
            borderBottomWidth:0.5,
            borderBottomColor:'grey',
            borderRadius:10,
        },
        image_style:{
            width:35,
            height:40,
            margin:5,
            borderRadius:10
        },
        first_icon:{alignSelf:'center',color:'black',fontFamily:'lato-Regular'},
        feedback_text:{color:'black',fontSize:20,marginTop:10,marginBottom:10,fontFamily:'lato-Bold',fontWeight:'bold'},
        review_text:{color:'black',fontSize:17,fontFamily:'lato-Regular'},
        last_icon:{color:'black',left:10,fontFamily:'lato-Regular'},
        photo_text:{color:'black',fontSize:20,fontFamily:'lato-Bold',fontWeight:'bold'},
        see_text:{position:'absolute',right:0,color:'black',alignSelf:'center',fontFamily:'lato-Regular'},
        main_text:{color:'black',fontSize:25,margin:10,fontFamily:'lato-Bold'},
        online_text:{color:'black',fontSize:20,marginTop:10,marginBottom:10,fontFamily:'lato-Bold',fontWeight:'bold'},
        delivery_text:{color:'black',fontSize:20,marginTop:10,marginBottom:10,fontFamily:'lato-Bold',fontWeight:'bold'},
        description:{color:'black',fontSize:20,marginTop:10,marginBottom:10,fontFamily:'lato-Bold',fontWeight:'bold'},
        description_text:{color:'black',marginBottom:10,fontFamily:'lato-Regular'},
        main_view:{backgroundColor:'white',padding:5,margin:5},
        star_text:{alignSelf:'center',fontWeight:'bold',color:'black'},
        name_text:{color:'black',fontWeight:'bold'},
        text_under:{color:'grey'}

});
const Darkstyles = StyleSheet.create({
   

    container: {
      padding: 10,
      width:'100%',
      height:'100%',
      backgroundColor:'black',
    },
   
    first_grid:{
        flexDirection:'row',
        margin:10,
        borderWidth:0.5,
        borderColor:'grey',
        borderRadius:5,
        },

    grid_style:{
            marginTop:15,
            flexDirection:'row',
            margin:10,
            borderBottomWidth:0.5,
            borderBottomColor:'grey',
            borderRadius:10,
        },
        image_style:{
            width:35,
            height:40,
            margin:5,
            borderRadius:10
        },
        first_icon:{alignSelf:'center',color:'white',fontFamily:'lato-Regular'},
        feedback_text:{color:'white',fontSize:20,marginTop:10,marginBottom:10,fontFamily:'lato-Bold',fontWeight:'bold'},
        review_text:{color:'white',fontSize:17,fontFamily:'lato-Regular'},
        last_icon:{color:'white',left:10,fontFamily:'lato-Regular'},
        photo_text:{color:'white',fontSize:20,fontFamily:'lato-Bold',fontWeight:'bold'},
        see_text:{position:'absolute',right:0,color:'white',alignSelf:'center',fontFamily:'lato-Regular'},
        main_text:{color:'white',fontSize:25,margin:10,fontFamily:'lato-Bold'},
        online_text:{color:'white',fontSize:20,marginTop:10,marginBottom:10,fontFamily:'lato-Bold',fontWeight:'bold'},
        delivery_text:{color:'white',fontSize:20,marginTop:10,marginBottom:10,fontFamily:'lato-Bold',fontWeight:'bold'},
        description:{color:'white',fontSize:20,marginTop:10,marginBottom:10,fontFamily:'lato-Bold',fontWeight:'bold'},
        description_text:{color:'white',marginTop:10,marginBottom:10,fontFamily:'lato-Regular'},
        main_view:{backgroundColor:'#494949',padding:5,margin:5},
    star_text:{alignSelf:'center',fontWeight:'bold',color:'white'},
    name_text:{color:'white',fontWeight:'bold'},
    text_under:{color:'grey'}
});