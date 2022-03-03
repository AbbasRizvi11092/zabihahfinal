import React,{Component,useState} from "react";
import { View ,Text,StyleSheet,Image,Button,TouchableOpacity,Appearance} from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import Login from './login'
import ButtonRed from "./component/buttonred";


const onboarding = ({navigation}) =>{
  const [theme,setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme)=>{
    setTheme(scheme.colorScheme);

  })
  return(
    <View style={{flex:1}}>
    
    <Onboarding 
    style={{
      flexDirection:'column-reverse',
    }}
    titleStyles={{fontSize:35,fontWeight:'bold',padding:15}}
    subTitleStyles={{padding:15}}
    onSkip={()=>navigation.navigate('login')}
    showSkip = {false}
    showNext = {false}
    showBtn={true}
    onDone={()=>navigation.navigate('login')}
   bottomBarColor="none"
    pages={[
      {
        
       backgroundColor: theme == 'light' ? '#FFCC2A' : '#494949' ,
        title: <Image source={theme == 'light' ? require('../img/search.png'):require('../img/searchdark.png')} style={{width:230,height:290,marginBottom:70}} />,
        subtitle:(
          <TouchableOpacity style={{
            padding:10,
            backgroundColor:'#990000',
            width:'90%',
            marginTop:6,
          }}>
           <Text style={{
             textAlign:'center',
             fontFamily:'Lato-Regular',
             fontSize:18,
             fontWeight:'bold',
           }}>Continue</Text>
          </TouchableOpacity>
        
        ),
        image:  (
          <View style={{
            padding:10,
            justifyContent:'flex-start',
            alignItems:'center',
            
          }}>
            <Text style={{
              fontSize:30,
              fontFamily:'Lato-Regular',
              fontWeight:'bold',
              textTransform:'uppercase',
              color:"white"

            }}>Zabihah can show you</Text>
            <View style={{
            padding:10,
            justifyContent:'center',
            alignItems:'center',
          }} >
            <Text style={{
              textAlign:'center',
              color:'white'
            }} >
            Zabihah can show you nearby
            Halal restaurants, markets, 
            and prayer spaces
            </Text>
            </View>
          </View>
        ),
      
       
      },
      {
        backgroundColor: theme == 'light' ? '#FFCC2A' : '#494949' ,
        image: <Image source={theme == 'light' ? require('../img/location.png'):require('../img/locationdark.png')} style={{width:150,height:150}}/>,
        title: 'Search nearby or far away',
        subtitleTwo:'siahfdouashf',
        subtitle: <TouchableOpacity style={{
          padding:10,
          backgroundColor:'#990000',
          width:'80%',
        }}>
         <Text style={{
           textAlign:'center',
           fontFamily:'Lato-Regular',
           fontSize:18,
           fontWeight:'bold',
         }}>Continue</Text>
        </TouchableOpacity>
      },
      {
        backgroundColor: theme == 'light' ? '#FFCC2A' : '#494949' ,
        image: <Image source={theme == 'light' ? require('../img/cycle.png'):require('../img/cycledark.png')} style={{width:150,height:150}}/>,
        title: 'Have it delivered to your door',
        subtitle: <TouchableOpacity style={{
          padding:10,
          backgroundColor:'#990000',
          width:'80%',
        }}>
         <Text style={{
           textAlign:'center',
           fontFamily:'Lato-Regular',
           fontSize:18,
           fontWeight:'bold',
         }}>Continue</Text>
        </TouchableOpacity>
       
      },
      {
        backgroundColor: theme == 'light' ? '#FFCC2A' : '#494949' ,
        title: 'Get exclusive deals & coupons',
        subtitle: <TouchableOpacity style={{
          padding:10,
          backgroundColor:'#990000',
          width:'80%',
        }}>
         <Text style={{
           textAlign:'center',
           fontFamily:'Lato-Regular',
           fontSize:18,
           fontWeight:'bold',
         }}>Continue</Text>
        </TouchableOpacity>,
        image: <Image source={theme == 'light' ? require('../img/stuff.png'):require('../img/stuffdark.png')}  style={{width:150,height:150}}/>,
       
      },
    ]}> 
  
   
    </Onboarding>

    </View>
  )
}
  
  export default onboarding;
