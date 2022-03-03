import PropTypes from 'prop-types';
import React, {Component,useState} from 'react';
// import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View,StyleSheet, Image, TouchableOpacity, Button, FlatList, TextInput,Appearance} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Avatar } from 'react-native-elements';
import PenIcon  from 'react-native-vector-icons/FontAwesome';
import StarIcon from 'react-native-vector-icons/Entypo';
import SearchIcon from 'react-native-vector-icons/Feather'
import SettingIcon from 'react-native-vector-icons/Fontisto'
import { Col, Grid, Row } from 'react-native-easy-grid';
import MenuIcon from 'react-native-vector-icons/AntDesign';
import MapIcon from 'react-native-vector-icons/Feather';
import MapView,{Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {location} from '../mapData';
import CustomMarker from '../custommarker';
import { mapstyles } from '../darkstyle';

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
const mapviewrestaurant=({navigation})=> {
  const [theme,setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme)=>{
    setTheme(scheme.colorScheme);
  })
  const map_main = navigation.getParam('mapdata','nothing sent')
  const map_text = map_main.restaurants
  const user_lat = JSON.stringify(map_main.lat_st)
  const user_long = JSON.stringify(map_main.lon_st)
  const res_num = JSON.stringify(map_main.number_rest)
 
    return (
      <View style={theme == 'light' ?styles.container:mapstyles.container}>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <MenuIcon name='arrowleft' color={theme =='light'?"black":'white'} size={30} style={{left:0,position:'absolute',marginLeft:13}} onPress={()=>navigation.navigate('restaurantlistview')}/>
          <Image source={theme == 'light' ? require('../../img/zabihah.png'):require('../../img/Zabihahdark.png')}  style={{alignSelf:'center'}}/>
          {/* <MapIcon name='menu' color={theme =='light'?"black":'white'} size={25} style={{right:0,position:'absolute',marginRight:20}}/> */}
          </View>
          <View style={{top:30}}>
          <Text style={theme == 'light'?styles.main_text:mapstyles.main_text}>{res_num} restaurants near you</Text>
         <View style={{width:'100%',height:40,top:20,flexDirection:'row'}}>
             
             <View style={{width:'80%',height:40,left:20,flexDirection:'row',backgroundColor:'white',borderRadius:10}}>
             <SearchIcon name='search' size={15} color={'grey'} style={{alignSelf:'center',left:10}}/>
             <TextInput placeholder='Filter by keyword' style={{alignSelf:'center',left:15}} placeholderTextColor={theme =='light'?"black":'black'}/>
             </View>
             <View style={{alignSelf:'center',width:'20%'}}>
             <SettingIcon name='player-settings' size={25} color={theme =='light'?"black":'white'} style={{alignSelf:'center'}} onPress={()=>navigation.navigate('searchgrouprestmap')}/>
             </View>
         </View>
         <View style={{top:40,height:'100%'}}>
         
        <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={{flex:1}}
       customMapStyle={theme == 'light' ? mapStandardStyle:mapDarkStyle}
       region={{
         
         latitude: parseFloat(user_lat),
         longitude: parseFloat(user_long),
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}>
          {/* {mapMarkers} */}
              {  
                  map_text.map((marker) =>(
                    <Marker 
                    key={marker.id}
                   coordinate={{latitude:parseFloat(marker.lat),longitude:parseFloat(marker.long)}} 
                   title={marker.name}       
                   >
                   <CustomMarker item={marker}/>
                   </Marker>
                  ))
                  }
     </MapView>
        </View>
          </View>
    
       
      </View>
    );
  
}


export default mapviewrestaurant;


const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      width:'100%',
      height:'100%',
      backgroundColor:'#F2F2F3'
    },
main_text:{left:20,color:'black',fontWeight:'bold',fontSize:25}
});