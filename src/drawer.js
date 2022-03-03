import React, {Component,useState,useRef} from 'react';
import { Text, View,StyleSheet, Image, Appearance,Animated,SafeAreaView,TouchableOpacity} from 'react-native';
import profile from '../img/avatar.png';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const DrawerMenu=({navigation})=> {
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
          {/* <TouchableOpacity> */}

            {/* <Image source={showMenu ? close : menu} style={{
              width: 20,
              height: 20,
              tintColor: 'black',
              marginTop: 40,

            }}></Image> */}

          {/* </TouchableOpacity> */}
            {/* <Homescreen/> */}
          
        </Animated.View>

      </Animated.View>

    </SafeAreaView>
      
      
    );
  
}
export default DrawerMenu;

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
