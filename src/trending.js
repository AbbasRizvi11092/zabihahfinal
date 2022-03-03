import React, {Component,useState,useRef,useEffect} from 'react';
import {ScrollView, Text, View,StyleSheet, Image,TextInput,Appearance,Animated,SafeAreaView,TouchableOpacity,FlatList} from 'react-native';
import SearchIcon from 'react-native-vector-icons/Feather'
import SettingIcon from 'react-native-vector-icons/Fontisto'
import MenuIcon from 'react-native-vector-icons/Entypo';
import TrendingCard from './component/trendingcard';
import profile from '../img/avatar.png';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Axios from 'axios'
import { ServiceConstant } from '../serviceconstant';
import PenIcon  from 'react-native-vector-icons/FontAwesome';
import StarIcon from 'react-native-vector-icons/Entypo';
import {Col,Row,Grid} from 'react-native-easy-grid'

const trending=({navigation})=> {
  const [showMenu, setShowMenu] = useState(false);
  const [restaurant_detail,setRestaurantDetail] = useState([])

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
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
   
    return (
      <SafeAreaView style={theme == 'light'? Drawerstyles.container:DrawerDarkstyles.container}>

      <View style={{  padding: 15 }}>
        <Image source={profile} style={{
          width: 60,
          height: 60,
          borderRadius: 25,
          marginTop: 15,
          marginLeft:35
          // alignSelf:'center'
        }}></Image>

        <Text style={theme == 'light'? Drawerstyles.name_text:DrawerDarkstyles.name_text}>Shahid Amanullah</Text>

    
          <Text style={theme == 'light'? Drawerstyles.text_area:DrawerDarkstyles.text_area}>Vienna, VA</Text>
        

        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons....
          }

          {/* {TabButton(currentTab, setCurrentTab, "Home", home)}
          {TabButton(currentTab, setCurrentTab, "Edit your profile", search)}
          {TabButton(currentTab, setCurrentTab, "View your saved places", notifications)}
          {TabButton(currentTab, setCurrentTab, "Add a record", settings)} */}
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
          <FontAwesome5Icon name='home' color={theme == 'light'?'black':'white'} size={25}/>
          <Text style={theme == 'light'? Drawerstyles.icon_text:DrawerDarkstyles.icon_text}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
          <FontAwesome5Icon name='sliders-h' color={theme == 'light'?'black':'white'} size={25}/>
          <Text style={theme == 'light'? Drawerstyles.icon_text:DrawerDarkstyles.icon_text}>Edit your profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
          <AntDesign name='heart' color={theme == 'light'?'black':'white'} size={25}/>
          <Text style={theme == 'light'? Drawerstyles.icon_text:DrawerDarkstyles.icon_text}>View your saved places</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
          <Entypo name='squared-plus' color={theme == 'light'?'black':'white'} size={25}/>
          <Text style={theme == 'light'? Drawerstyles.icon_text:DrawerDarkstyles.icon_text}>Add a record</Text>
          </TouchableOpacity>
        </View>
       
         <View style={{flexDirection:'row',margin:5}}>
        <Text style={theme == 'light'? Drawerstyles.text:DrawerDarkstyles.text}>Privacy Policy</Text>
        <Text style={theme == 'light'? Drawerstyles.text:DrawerDarkstyles.text}>About Zabihah</Text>
        </View>
        <View style={{flexDirection:'row',margin:5}}>
        <Text style={theme == 'light'? Drawerstyles.text:DrawerDarkstyles.text}>Terms of services</Text>
        <Text style={theme == 'light'? Drawerstyles.text:DrawerDarkstyles.text}>Help & FAQ</Text>
        </View>
        <View style={{flexDirection:'row',margin:5}}>
        <Text style={theme == 'light'? Drawerstyles.text:DrawerDarkstyles.text}>Contact Us</Text>
        <Text style={theme == 'light'? Drawerstyles.text:DrawerDarkstyles.text}>Leaderboard</Text>
        </View>
        
        {/* <View>
          {TabButton(currentTab, setCurrentTab, "Sign out", logout)}
        </View> */}
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
          <MaterialIcons name='logout' color={theme == 'light'?'black':'white'} size={25}/>
          <Text style={theme == 'light'? Drawerstyles.icon_text:DrawerDarkstyles.icon_text}>Sign out</Text>
          </TouchableOpacity>

      </View>

      {
        // Over lay View...
      }

      <Animated.View style={{
        flexGrow: 1,
        // backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        // paddingHorizontal: 15,
        // paddingVertical: 20,
        borderRadius: showMenu ? 15 : 0,
        // Transforming View...
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue }
        ]
      }}>

        {
          // Menu Button...
        }

        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>
      <View style={theme == 'light'?styles.container:Darkstyles.container}>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
          <MenuIcon name='menu' color={theme == 'light'?'black':'white'} size={30} style={{left:0,position:'absolute',marginLeft:13}}
          onPress={() => {
            // Do Actions Here....
            // Scaling the view...
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.88,
              duration: 300,
              useNativeDriver: true
            })
              .start()
      
            Animated.timing(offsetValue, {
              // YOur Random Value...
              toValue: showMenu ? 0 : 230,
              duration: 300,
              useNativeDriver: true
            })
              .start()
      
            Animated.timing(closeButtonOffset, {
              // YOur Random Value...
              toValue: !showMenu ? -30 : 0,
              duration: 300,
              useNativeDriver: true
            })
              .start()
      
            setShowMenu(!showMenu);
          }}/>
          <Image source={theme == 'light' ? require('../img/zabihah.png'):require('../img/Zabihahblack.png')}  style={{alignSelf:'center',padding:10}}/>
          </View>
          <View>
          <Text style={theme == "light" ?styles.main_text:Darkstyles.main_text}>Trending in Berkeley</Text>
         <View style={{width:'100%',height:40,flexDirection:'row'}}>
             
             <View style={{width:'80%',height:40,left:20,flexDirection:'row',backgroundColor:'white',borderRadius:10}}>
             <SearchIcon name='search' size={15} color={'grey'} style={{alignSelf:'center',left:10}}/>
            
             <TextInput placeholder='Filter by keyword' style={{alignSelf:'center',left:15}} placeholderTextColor={theme == 'light'?'grey':'grey'}/>
             </View>
             <View style={{width:'20%',justifyContent:'center'}}>
             <SettingIcon name='player-settings' size={25} color={theme == 'light'?'black':'white'} style={{alignSelf:'center'}}/>
             </View>
         </View>
          </View>
        {/* <TrendingCard/> */}
        <View>
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
      </View>
           
      
       
      </View>
         </Animated.View>

         </Animated.View>
         
         </SafeAreaView>
      
    );
  
}


export default trending;


const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      width:'100%',
      height:'100%',
      backgroundColor:'#F2F2F3'
    },
    main_text:{left:20,color:'black',fontWeight:'bold',fontSize:25,padding:10}

});
const Darkstyles = StyleSheet.create({
  container: {
    paddingTop: 20,
    width:'100%',
    height:'100%',
    backgroundColor:'black'
  },
  main_text:{left:20,color:'white',fontWeight:'bold',fontSize:25,padding:10}
});
const Drawerstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCC2A',
  },
  name_text:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
  text_area:{
    marginTop: 6,
    color: 'black',
    marginLeft:35
  },
  icon_text:{color:'black',margin:10,fontSize:15},
  text:{color:'black',margin:5}
});
const DrawerDarkstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#494949',
  },
  name_text:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
  text_area:{
    marginTop: 6,
    color: 'white',
    marginLeft:35
  },
  icon_text:{color:'white',margin:10,fontSize:15},
  text:{color:'white',margin:5}
});
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