import React, {useState,useRef} from 'react';
import {ScrollView, Text, View,StyleSheet, Image,TextInput,Appearance,Animated,SafeAreaView,TouchableOpacity} from 'react-native';
import SearchIcon from 'react-native-vector-icons/Feather'
import SettingIcon from 'react-native-vector-icons/Fontisto'
import MenuIcon from 'react-native-vector-icons/Entypo';
import DashboardCard from './component/dashboardcard';
import profile from '../img/avatar.png';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ServiceConstant } from '../serviceconstant';


const favorties=({navigation})=> {
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
    return (
      <SafeAreaView style={theme == 'light'? Drawerstyles.container:DrawerDarkstyles.container}>

      <View style={{  padding: 15 }}>
        <Image source={{uri:ServiceConstant.user_photo}} style={{
          width: 60,
          height: 60,
          borderRadius: 25,
          marginTop: 15,
          marginLeft:35
          // alignSelf:'center'
        }}></Image>

        <Text style={theme == 'light'? Drawerstyles.name_text:DrawerDarkstyles.name_text}>{ServiceConstant.user_name}</Text>
          <Text style={theme == 'light'? Drawerstyles.text_area:DrawerDarkstyles.text_area}>{ServiceConstant.user_home_location}</Text>
        <View style={{ flexGrow: 1, marginTop: 50 }}>
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
        
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
          <MaterialIcons name='logout' color={theme == 'light'?'black':'white'} size={25}/>
          <Text style={theme == 'light'? Drawerstyles.icon_text:DrawerDarkstyles.icon_text}>Sign out</Text>
          </TouchableOpacity>

      </View>

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

        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>
          <SafeAreaView style={theme == 'light'?styles.container:Darkstyles.container}>
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
          <Image source={theme == 'light' ? require('../img/zabihah.png'):require('../img/Zabihahblack.png')}  style={{alignSelf:'center',padding:10}} />
          </View>
          <View>
          <Text style={theme == 'light'?styles.main_text:Darkstyles.main_text}>Your saved places</Text>
         <View style={{width:'100%',height:40,flexDirection:'row'}}>
             
             <View style={{width:'80%',height:40,left:20,flexDirection:'row',backgroundColor:'white',borderRadius:10}}>
             <SearchIcon name='search' size={15} color={'grey'} style={{alignSelf:'center',left:10}}/>
            
             <TextInput placeholder='Filter by keyword' style={{alignSelf:'center',left:15}} placeholderTextColor={theme=='light'?'grey':'grey'}/>
             </View>
             <View style={{width:'20%',justifyContent:'center'}}>
             <SettingIcon name='player-settings' size={25} color={theme == 'light'?'black':'white'} style={{alignSelf:'center'}}/>
             </View>
         </View>
          </View>
        <DashboardCard/>
        
      
       
      </View>
      </SafeAreaView>
      </Animated.View>

</Animated.View>

</SafeAreaView>
    );
  
}


export default favorties;


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