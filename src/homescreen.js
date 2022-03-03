import React, {useState,useRef,useEffect} from 'react';
import {Dimensions,ScrollView, Text, View,StyleSheet, Image, Appearance, TextInput,Animated,SafeAreaView,TouchableOpacity,FlatList,ImageBackground,ActivityIndicator} from 'react-native';
import PenIcon  from 'react-native-vector-icons/FontAwesome';
import StarIcon from 'react-native-vector-icons/Entypo';
import SearchIcon from 'react-native-vector-icons/Feather'
import SettingIcon from 'react-native-vector-icons/Fontisto'
import { Col, Grid, Row } from 'react-native-easy-grid';
import MenuIcon from 'react-native-vector-icons/Entypo';
import profile from '../img/avatar.png';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/SimpleLineIcons'
import Axios from 'axios'
import { ServiceConstant } from '../serviceconstant';
import { WebView } from 'react-native-webview';
import CustomWebView from './WebView/webview';


const homescreen=({navigation})=> {
  
  const [restaurants,setRestaurants] = useState([]);
  const [res_num,setResNum] = useState([])
  const [markets,setMarket] = useState([]);
  const [market_num,setMarketNum] = useState([]);
  const [mosques,setMosques] = useState([]);
  const [mosque_num,setMosqueNum] = useState([]);
  const [trending,setTrending] = useState([])
  const [trending_data,setTrendingData] = useState([])
  const [isLoading,setisLoading] = useState(true)
  const [webviewLoaded,setWebviewLoaded] = useState(false)

  const ScreenHeight = Dimensions.get("window").height - 130;
  const ScreenWidth = Dimensions.get("window").width;
  
  const [showMenu, setShowMenu] = useState(false);
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
      .get(ServiceConstant.record_around_location + "?" + "key" + "=" + ServiceConstant.key + "&" + "uuid" + "=" + ServiceConstant.uuid + "&" + "id" + "=" + ServiceConstant.user_login_data + "&" + "l" + "=" + ServiceConstant.user_lat + "," + ServiceConstant.user_long + "&" + "r" + "=" + 10 + "&" + "t" + "=" + 1)
      .then(function(data){
        setisLoading(false)
       setRestaurants(data.data.data.restaurants)
       setResNum(data.data.data)
      //   alert(JSON.stringify(data.data.data))
      })
     Axios
    .get(ServiceConstant.record_around_location + "?" + "key" + "=" + ServiceConstant.key + "&" + "uuid" + "=" + ServiceConstant.uuid + "&" + "id" + "=" + ServiceConstant.user_login_data + "&" + "l" + "=" +  ServiceConstant.user_lat + "," + ServiceConstant.user_long + "&" + "r" + "=" + 10 + "&" + "t" + "=" + 2)
    .then(function(data){
      setisLoading(false)
     setMarket(data.data.data.markets)
     setMarketNum(data.data.data)
    //   alert(JSON.stringify(data.data.data))
    })
      Axios
    .get(ServiceConstant.record_around_location + "?" + "key" + "=" + ServiceConstant.key + "&" + "uuid" + "=" + ServiceConstant.uuid + "&" + "id" + "=" + ServiceConstant.user_login_data + "&" + "l" + "=" +  ServiceConstant.user_lat + "," + ServiceConstant.user_long + "&" + "r" + "=" + 10 + "&" + "t" + "=" + 3)
    .then(function(data){
      setisLoading(false)
     setMosques(data.data.data.mosques)
     setMosqueNum(data.data.data)
    //   alert(JSON.stringify(data.data.data))
    })
    Axios
    .get(ServiceConstant.trending_around_location + "?" + "key" + "=" + ServiceConstant.key + "&" + "uuid" + "=" + ServiceConstant.uuid + "&" + "id" + "=" + ServiceConstant.user_login_data + "&" + "l" + "=" +  ServiceConstant.user_lat + "," + ServiceConstant.user_long + "&" + "r" + "=" + 10 + "&" + "t" + "=" + 1)
    .then(function(data){
      setisLoading(false)
     setTrending(data.data.data.trending)
     setTrendingData(data.data.data)
    //   alert(JSON.stringify(data.data.data))
    })
    },[])

    const signout=()=>{
      restaurants.length == null
      res_num.length == null
     markets.length == null
      market_num.length == null
      mosques.length == null
      mosque_num.length == null
      navigation.navigate('signin')

    }
    const _onLoadEnd = ()=>{
      setWebviewLoaded(true)
    }
  
//  termsWebViews(){
// return ( 
// return <WebView source={{uri:'https://app.zabihah.com/text_terms.php'}} style={{flex:1}}/>
// )   
//     }
    const aboutView = () =>{
      // alert("Hello")
        return(
         <View style={{width:'100%',height:'100%',position: 'relative'}}>
        <WebView source={{uri:'https://app.zabihah.com/text_about.php'}} onLoadEnd={_onLoadEnd.bind(this)} style={{marginTop: 20 }}/>
        </View>
        )    
    }
    const helpWebView = () =>{
      return(
        <WebView source={{uri:"https://app.zabihah.com/text_faq.php"}}/>
      )
    }
    const privacyWebView = () =>{
      return(
        <WebView source={{uri:"https://app.zabihah.com/text_privacy.php"}}/>
      )
    }
   
    return isLoading ? (
      <View style={{flex:1,justifyContent:'center'}}>
      <ActivityIndicator color='red' size='large'/>
      </View>
    ):(
      <>
      <SafeAreaView style={theme == 'light'? Drawerstyles.container:DrawerDarkstyles.container}>

      {ServiceConstant.user_login_data?(
      <View style={{  padding: 15 }}>
        <Image source={{uri:ServiceConstant.user_photo}} style={{
          width: 60,
          height: 60,
          borderRadius: 25,
          marginTop: 15,
          marginLeft:60
          // alignSelf:'center'
        }}></Image>

        <Text style={theme == 'light'? Drawerstyles.name_text:DrawerDarkstyles.name_text}>{ServiceConstant.user_name}</Text>
          <Text style={theme == 'light'? Drawerstyles.text_area:DrawerDarkstyles.text_area}>{ServiceConstant.user_home_location}</Text>
        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons....
          }

          {/* {TabButton(currentTab, setCurrentTab, "Home", home)}
          {TabButton(currentTab, setCurrentTab, "Edit your profile", search)}
          {TabButton(currentTab, setCurrentTab, "View your saved places", notifications)}
          {TabButton(currentTab, setCurrentTab, "Add a record", settings)} */}
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={()=>navigation.navigate('homescreen')}>
          <FontAwesome5Icon name='home' color={theme == 'light'?'black':'white'} size={25}/>
          <Text style={theme == 'light'? Drawerstyles.icon_text:DrawerDarkstyles.icon_text}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={()=>navigation.navigate('editprofile')}>
          <FontAwesome5Icon name='sliders-h' color={theme == 'light'?'black':'white'} size={25}/>
          <Text style={theme == 'light'? Drawerstyles.icon_text:DrawerDarkstyles.icon_text}>Edit your profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={()=>navigation.navigate('dashboard',{member_id:ServiceConstant.user_login_data})}>
          <AntDesign name='heart' color={theme == 'light'?'black':'white'} size={25}/>
          <Text style={theme == 'light'? Drawerstyles.icon_text:DrawerDarkstyles.icon_text}>View your saved places</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
          <Entypo name='squared-plus' color={theme == 'light'?'black':'white'} size={25}/>
          <Text style={theme == 'light'? Drawerstyles.icon_text:DrawerDarkstyles.icon_text}>Add a record</Text>
          </TouchableOpacity>
        </View>
       <View style={{flexDirection:'row',marginTop:20}}>
         <View style={{marginRight:5}}>
        <Text style={theme == 'light'? Drawerstyles.text:DrawerDarkstyles.text} onPress={()=>navigation.navigate('privacyWebView',)}>Privacy Policy</Text>
        <Text style={theme == 'light'? Drawerstyles.text:DrawerDarkstyles.text} onPress={()=>navigation.navigate('termsWebView')}>Terms of services</Text>
        <Text style={theme == 'light'? Drawerstyles.text:DrawerDarkstyles.text}>Contact Us</Text>

        </View>
        <View style={{marginRight:5}}>
        <Text style={theme == 'light'? Drawerstyles.text:DrawerDarkstyles.text} onPress={()=>navigation.navigate('helpWebView')}>Help & FAQ</Text>
        <Text style={theme == 'light'? Drawerstyles.text:DrawerDarkstyles.text} onPress={()=>navigation.navigate('aboutWebView')}>About Zabihah</Text>
        <Text style={theme == 'light'? Drawerstyles.text:DrawerDarkstyles.text}>Leaderboard</Text>
        </View>
        </View>
        {/* <View>
          {TabButton(currentTab, setCurrentTab, "Sign out", logout)}
        </View> */}
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginTop:15}} onPress={signout}>
          <MaterialIcons name='logout' color={theme == 'light'?'black':'white'} size={25}/>
          {/* <Image source={require('../img/signout.png')} style={{width:25,height:25}}/> */}
          <Text style={theme == 'light'? Drawerstyles.icon_text:DrawerDarkstyles.icon_text}>Sign out</Text>
          </TouchableOpacity>

      </View>
      ):(
        <View style={{  padding: 15 }}>
        <Image source={{uri:ServiceConstant.user_photo}} style={{
          width: 60,
          height: 60,
          borderRadius: 25,
          marginTop: 15,
          marginLeft:25
          // alignSelf:'center'
        }}></Image>

        <Text style={theme == 'light'? Drawerstyles.name_text:DrawerDarkstyles.name_text}>{ServiceConstant.user_name}</Text>
        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons....
          }

          {/* {TabButton(currentTab, setCurrentTab, "Home", home)}
          {TabButton(currentTab, setCurrentTab, "Edit your profile", search)}
          {TabButton(currentTab, setCurrentTab, "View your saved places", notifications)}
          {TabButton(currentTab, setCurrentTab, "Add a record", settings)} */}
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={()=>navigation.navigate('login')}>
          <FontAwesome5Icon name='home' color={theme == 'light'?'black':'white'} size={25}/>
          <Text style={theme == 'light'? Drawerstyles.icon_text:DrawerDarkstyles.icon_text}>Login To Zabihah</Text>
          </TouchableOpacity>       
        </View>
       
         <View style={{flexDirection:'row',margin:5}}>
        <Text style={theme == 'light'? Drawerstyles.text:DrawerDarkstyles.text} onPress={() => Linking.openURL('https://app.zabihah.com/text_privacy.php')}>Privacy Policy</Text>
        <Text style={theme == 'light'? Drawerstyles.text:DrawerDarkstyles.text} onPress={()=>Linking.openURL('https://app.zabihah.com/text_about.php')}>About Zabihah</Text>
        </View>
        <View style={{flexDirection:'row',margin:5}}>
        <Text style={theme == 'light'? Drawerstyles.text:DrawerDarkstyles.text} onPress={()=>navigation.navigate('termsWebView')}>Terms of services</Text>
        <Text style={theme == 'light'? Drawerstyles.text:DrawerDarkstyles.text} onPress={()=>navigation.navigate('helpWebView')}>Help & FAQ</Text>
        </View>
        <View style={{flexDirection:'row',margin:5}}>
        <Text style={theme == 'light'? Drawerstyles.text:DrawerDarkstyles.text}>Contact Us</Text>
        <Text style={theme == 'light'? Drawerstyles.text:DrawerDarkstyles.text}>Leaderboard</Text>
        </View>

      </View>
      )}

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
          {/* <TouchableOpacity> */}

            {/* <Image source={showMenu ? close : menu} style={{
              width: 20,
              height: 20,
              tintColor: 'black',
              marginTop: 40,

            }}></Image> */}

<View style={theme == 'light'?styles.container:Darkstyles.container}>
          <View style={{flexDirection:'row',justifyContent:'center',height:'6%'}}>
          <MenuIcon onPress={()=>navigation.navigate('mosquedetail')} name='menu' color={theme=='light'?"black":"white"} size={30} style={{left:0,position:'absolute',marginLeft:13}} 
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
          <View style={{height:'15%',marginTop:10}}>
          <Text style={theme == 'light'?styles.main_text:Darkstyles.main_text}>Places near you</Text>
         <View style={{width:'100%',flexDirection:'row'}}>
             
             <View style={{width:'80%',height:40,left:20,flexDirection:'row',backgroundColor:'white',borderRadius:10,marginTop:15}}>
             <SearchIcon name='search' size={15} color={'grey'} style={{alignSelf:'center',left:10}}/>
            
             <TextInput placeholder='Filter by keyword' style={{alignSelf:'center',left:15,color:'black'}} placeholderTextColor={theme=='light'?"grey":"grey"}/>
             </View>
             <View style={{width:'20%',justifyContent:'center',marginTop:15}}>
             <SettingIcon name='player-settings' size={25} color={theme=='light'?"black":"white"} style={{alignSelf:'center',marginLeft:10}} onPress={()=>navigation.navigate('searchgroup')}/>
             </View>
             </View>
         </View>
        
         <ScrollView style={{marginBottom:15}}>
         <View style={theme == 'light' ? styles.main_view:Darkstyles.main_view}>
        <View style={{flexDirection:'row'}}>
            <Text style={theme == 'light'?styles.text_saved:Darkstyles.text_saved}>
            {JSON.stringify(res_num.number_rest)} restaurants with halal dishes
            </Text>
            <Text style={theme == 'light'?styles.text_see:Darkstyles.text_see} onPress={()=>navigation.navigate('restaurantlistview',{res_list:res_num})}>
                See all
            </Text>
        </View>
    <FlatList 
    style={{width:'100%'}}
data={restaurants}
horizontal
showsHorizontalScrollIndicator = {false}
renderItem={({item})=>
   <TouchableOpacity style={theme == 'light'?styles.flatlist_view:Darkstyles.flatlist_view} onPress={()=>navigation.navigate('restaurantdetail',{res_detail:item})}>
       <ImageBackground source={{uri:item.photo_url}} style={{width:'100%',height:100,}} resizeMode="cover">
       <Grid>
  <Row>
      <Col style={{width:'25%',position:'absolute',right:0,margin:10}}>
       <View style={theme == 'light'?styles.star_view:Darkstyles.star_view}>
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
       <Text style={theme == 'light'?styles.name_text:Darkstyles.name_text}>
           {item.name.split(' , ')}
       </Text>
       <Text style={theme == 'light'?styles.text_under:Darkstyles.text_under}>
           {item.address}
       </Text>
       <Text style={theme == 'light'?styles.text_under:Darkstyles.text_under}>
           {item.tags}
       </Text>
       <View style={{flexDirection:'row',right:5}}>
           <Text style={{backgroundColor:'#FFCC2A',fontSize:12,padding:2,margin:5,fontWeight:'bold',color:'black'}}>{item.cuisine.split(',').map((step,i)=> <Text>{i > 0 && ","}{step}</Text>)}</Text>
           {/* <Text style={{backgroundColor:'#FFCC2A',fontSize:12,margin:5,padding:2,fontWeight:'bold',color:'black'}}>{item.cuisine}</Text> */}
        </View>
        </View>
   </TouchableOpacity>
}
/>

          </View>

          {/* <View style={theme == 'light' ? styles.main_view:Darkstyles.main_view}>
        <View style={{flexDirection:'row'}}>
            <Text style={theme == 'light'?styles.text_saved:Darkstyles.text_saved}>
            {JSON.stringify(trending_data.number)} trending restaurants
            </Text>
            <Text style={theme == 'light'?styles.text_see:Darkstyles.text_see} onPress={()=>navigation.navigate('trending',{res_list:res_num})}>
                See all
            </Text>
        </View>
    <FlatList 
    style={{width:'100%'}}
data={trending}
horizontal
showsHorizontalScrollIndicator = {false}
renderItem={({item})=>
   <TouchableOpacity style={theme == 'light'?styles.flatlist_view:Darkstyles.flatlist_view} onPress={()=>navigation.navigate('restaurantdetail',{res_detail:restaurants})}>
       <ImageBackground source={{uri:item.photo_url}} style={{width:'100%',height:100,}} resizeMode="cover">
       <Grid>
  <Row>
      <Col style={{width:'25%',position:'absolute',right:0,margin:10}}>
       <View style={theme == 'light'?styles.star_view:Darkstyles.star_view}>
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
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
      <Text style={{color:'white'}}>
        {item.distance_km}km
      </Text>
      </View>
      </Col>
  </Row>
</Grid>
</ImageBackground>
       <View style={{padding:10}}>
       <Text style={theme == 'light'?styles.name_text:Darkstyles.name_text}>
           {item.name}
       </Text>
       <Text style={theme == 'light'?styles.text_under:Darkstyles.text_under}>
           {item.address}
       </Text>
       <Text style={theme == 'light'?styles.text_under:Darkstyles.text_under}>
           {item.tags}
       </Text>
       <View style={{flexDirection:'row',right:5}}>
           <Text style={{backgroundColor:'#FFCC2A',fontSize:12,padding:2,margin:5,fontWeight:'bold',color:'black'}}>{item.cuisine}</Text>
           <Text style={{backgroundColor:'#FFCC2A',fontSize:12,margin:5,padding:2,fontWeight:'bold',color:'black'}}>{item.cuisine}</Text>
        </View>
        </View>
   </TouchableOpacity>
}
/>

          </View> */}


          <View style={theme == 'light' ? styles.main_view:Darkstyles.main_view}>
        <View style={{flexDirection:'row'}}>
            <Text style={theme == 'light'?styles.text_saved:Darkstyles.text_saved}>
            {JSON.stringify(market_num.number_mark)} markets with halal products
            </Text>
            <Text style={theme == 'light'?styles.text_see:Darkstyles.text_see} onPress={()=>navigation.navigate('marketlistview')}>
                See all
            </Text>
        </View>
    <FlatList 
    style={{width:'100%'}}
data={markets}
horizontal
showsHorizontalScrollIndicator = {false}
renderItem={({item})=>
   <TouchableOpacity style={theme == 'light'?styles.flatlist_view:Darkstyles.flatlist_view} onPress={()=>navigation.navigate('marketdetail',{res_detail:item})}>
       <ImageBackground source={{uri:item.photo_url}} style={{width:'100%',height:100,}} resizeMode="cover">
       <Grid>
  <Row>
      <Col style={{width:'25%',position:'absolute',right:0,margin:10}}>
       <View style={theme == 'light'?styles.star_view:Darkstyles.star_view}>
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
       <Text style={theme == 'light'?styles.name_text:Darkstyles.name_text}>
           {item.name}
           {/* {item.name.substring(1)} */}

       </Text>
       <Text style={theme == 'light'?styles.text_under:Darkstyles.text_under}>
           {item.address}
       </Text>
       <Text style={theme == 'light'?styles.text_under:Darkstyles.text_under}>
           {item.tags}
       </Text>
       <View style={{flexDirection:'row',right:5}}>
           <Text style={{backgroundColor:'#FFCC2A',fontSize:12,padding:2,margin:5,fontWeight:'bold',color:'black'}}>{item.cuisine}</Text>
           {/* <Text style={{backgroundColor:'#FFCC2A',fontSize:12,margin:5,padding:2,fontWeight:'bold',color:'black'}}>{item.cuisine}</Text> */}
        </View>
        </View>
   </TouchableOpacity>
}
/>
          </View>
          <View style={theme == 'light' ? styles.main_view:Darkstyles.main_view}>
        <View style={{flexDirection:'row'}}>
            <Text style={theme == 'light'?styles.text_saved:Darkstyles.text_saved}>
            {JSON.stringify(mosque_num.number_mosq)} mosques & prayers spaces
            </Text>
            <Text style={theme == 'light'?styles.text_see:Darkstyles.text_see} onPress={()=>navigation.navigate('mosquelistview')}>
                See all
            </Text>
            
        </View>
    <FlatList 
    style={{width:'100%'}}
data={mosques}
horizontal
showsHorizontalScrollIndicator = {false}
renderItem={({item})=>
   <TouchableOpacity style={theme == 'light'?styles.flatlist_view:Darkstyles.flatlist_view} onPress={()=>navigation.navigate('mosquedetail',{res_detail:item})}>
       <ImageBackground source={{uri:item.photo_url}} style={{width:'100%',height:100,}} resizeMode="cover">
       <Grid>
  <Row>
      <Col style={{width:'25%',position:'absolute',right:0,margin:10}}>
       <View style={theme == 'light'?styles.star_view:Darkstyles.star_view}>
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
       <Text style={theme == 'light'?styles.name_text:Darkstyles.name_text}>
           {item.name}
       </Text>
       <Text style={theme == 'light'?styles.text_under:Darkstyles.text_under}>
           {item.address}
       </Text>
       <Text style={theme == 'light'?styles.text_under:Darkstyles.text_under}>
           {item.tags}
       </Text>
       <View style={{flexDirection:'row',right:5}}>
           <Text style={{backgroundColor:'#FFCC2A',fontSize:12,padding:2,margin:5,fontWeight:'bold',color:'black'}}>{item.tags}</Text>
           {/* <Text style={{backgroundColor:'#FFCC2A',fontSize:12,margin:5,padding:2,fontWeight:'bold',color:'black'}}>{item.tags}</Text> */}
        </View>
        </View>
   </TouchableOpacity>
}
/>
          </View>
             {/* <RestaurantCard textplace= "restaurants with halal dishes"/>
         <MarketCard textplace="markets with halal products"/>
         <MosqueCard textplace="mosques & prayers spaces"/> */}
         </ScrollView>
         
          
      </View>

          {/* </TouchableOpacity> */}
            {/* <Homescreen/> */}
          
        </Animated.View>

      </Animated.View>

    </SafeAreaView>
    </>
      
    );
  
}
export default homescreen;


const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      width:'100%',
      height:'100%',
      backgroundColor:'#F2F2F3'
    },
main_text:{left:20,color:'black',fontWeight:'bold',fontSize:25},
main_view:{width:'100%',marginBottom:10},
    text_saved:{fontSize:17,color:'black',fontWeight:'bold',marginLeft:7},
    text_see:{position:'absolute',right:0,color:'black',fontSize:15,alignSelf:'center',marginRight:15},
    flatlist_view:{width:200,height:250,backgroundColor:'white',margin:7,shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
},
star_view:{flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'white'},
star_text:{color:'black',fontWeight:'bold',left:7},
name_text:{color:'black',fontWeight:'bold',fontSize:18},
text_under:{color:'black',fontSize:12}
});
const Darkstyles = StyleSheet.create({
    container: {
      paddingTop: 20,
      width:'100%',
      height:'100%',
      backgroundColor:'black'
    },
    main_text:{left:20,color:'white',fontWeight:'bold',fontSize:25},
    main_view:{width:'100%',margin:10},
    text_saved:{fontSize:17,color:'white',fontWeight:'bold',marginLeft:7},
    text_see:{position:'absolute',right:0,color:'white',fontSize:15,alignSelf:'center',marginRight:15},
    flatlist_view:{width:200,height:250,backgroundColor:'#494949',flex:1,margin:7,shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
},
star_view:{flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'#494949'},
star_text:{color:'white',fontWeight:'bold',left:7},
name_text:{color:'white',fontWeight:'bold',fontSize:18},
text_under:{color:'grey',fontSize:12}
    
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
    marginLeft:45,
    marginTop: 20,
  },
  text_area:{
    marginTop: 6,
    color: 'black',
    marginLeft:35
  },
  icon_text:{color:'black',margin:10,fontSize:15},
  text:{color:'black',margin:5,fontSize:12}
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
    marginLeft:45,
    marginTop: 20,
  },
  text_area:{
    marginTop: 6,
    color: 'white',
    marginLeft:35,
    // marginTop: 20,

  },
  icon_text:{color:'white',margin:10,fontSize:15},
  text:{color:'white',margin:5,fontSize:12}
});
