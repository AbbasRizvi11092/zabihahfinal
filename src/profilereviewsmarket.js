import PropTypes from 'prop-types';
import React, {useEffect,useState} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View,StyleSheet, Image, TouchableOpacity, Appearance,FlatList} from 'react-native';
import { Avatar } from 'react-native-elements';
import MenuIcon from 'react-native-vector-icons/AntDesign';
import ProfilereviewCard from './component/profilereviewcard';
import Axios from 'axios'
import { ServiceConstant } from '../serviceconstant';
import {Col,Row,Grid} from 'react-native-easy-grid'


const profilereviewsmarket=({navigation})=> {
  const [review_data,setReview_Data] = useState([])
    const [mem_data,setMem_Data] = useState([])
    const [theme,setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme)=>{
    setTheme(scheme.colorScheme);
  })
  useEffect(()=>{
    Axios
    .post(ServiceConstant.retrieve_mem_info + "?" + "key" + "=" + ServiceConstant.key + "&" + "uuid" + "=" + ServiceConstant.uuid + "&" + "mid" + "=" + res_text)
    .then(function(data){
      setMem_Data(data.data.member)
      setReview_Data(data.data.member.reviews_recent_r)

      // alert(JSON.stringify(mem_data.username))
    })
  },[])
  const res_text = navigation.getParam('member_id','nothing sent')
  // const mem_id = res_text.member_id
  // mem_id = res_text
    return (
      <View style={theme == 'light'?styles.container:Darkstyles.container}>
         <View style={{flexDirection:'row',justifyContent:'center'}}>
         <Image source={theme == 'light' ? require('../img/zabihah.png'):require('../img/Zabihahblack.png')}  style={{alignSelf:'center',padding:10}}/>
          <MenuIcon name='arrowleft' color={theme == 'light'?'black':'white'} size={30} style={{left:0,position:'absolute',marginLeft:13}} onPress={()=>navigation.navigate('detailreviewmarket')}/>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',left:20,width:'100%',height:'14%'}}>
              <Avatar rounded source={{uri:mem_data.user_photo}} size="medium" icon={{name:'checkcircle',type:'antdesign',color:'red',size:30,disabled:false}} iconStyle={{marginLeft:30,bottom:10}} onPress={()=>navigation.navigate('publicprofilemarket',{member_id:res_text})}/>
              <View>
              <Text style={theme == 'light'?styles.main_text:Darkstyles.main_text}>{mem_data.display_name}</Text>
              <Text style={{color:'grey',fontSize:12,left:10}}>{mem_data.home_city}, {mem_data.home_state}</Text>
              </View>
              <View style={{position:'absolute',right:0,marginRight:40,width:80,justifyContent:'center'}}>
              <TouchableOpacity style={{backgroundColor:'#990000',height:30,justifyContent:'center'}}>
                  <Text style={{color:'white',textAlign:'center',fontWeight:'bold'}}>Follow</Text>
              </TouchableOpacity>
              </View>
          </View>
         
          <Text style={theme == 'light'?styles.text:Darkstyles.text}>{mem_data.reviews_r} reviews</Text>
          <FlatList 
        data={review_data}
        renderItem={({item})=>
        <Grid style={theme == 'light'?style.main_grid:styleDark.main_grid}>
        <Row>
            <Col style={{width:'60%'}}>
            <Text style={theme == 'light'?style.text:styleDark.text}>
              {item.rest_name}
            </Text>
            <Text style={theme == 'light'?style.text_under:styleDark.text_under}>
               {item.rest_address}
            </Text>
            </Col>

            <Col style={{width:'30%',position:'absolute',right:0,flexDirection:'column'}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>          
            <Text style={{color:'yellow'}}>{item.rating_text}</Text>
            </View>
           
            <View style={{backgroundColor:'green',alignItems:'center',justifyContent:'center',padding:2}}>
            <Text style={{color:'white',fontWeight:'bold'}}>
              WILL RETURN
            </Text>
            </View>
            </Col>
        </Row>

        <Row style={{flexDirection:'column',marginTop:15}}>
            <View style={{flexDirection:'row'}}>
                <Text style={theme == 'light' ? style.aug_text:styleDark.aug_text}>
                   {item.rev_date}
                </Text>
                {/* <Text style={theme == 'light' ? style.normal_text:styleDark.normal_text}>This is honestly one of the best Thai</Text> */}
            </View>
            <View>
                <Text style={theme == 'light' ? style.normal_text:styleDark.normal_text}>{item.rev_text}</Text>
            </View>
                          
        </Row>       
    </Grid>
    }
        />
        
      
       
      </View>
    );
  
}


export default profilereviewsmarket;

const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      width:'100%',
      height:'100%',
      backgroundColor:'#F2F2F3'
    },
    main_text:{color:'black',fontSize:17,left:10,fontWeight:'bold'},
    text:{left:20,color:'black',fontWeight:'bold',fontSize:25}
  
  });
  const Darkstyles = StyleSheet.create({
  container: {
    paddingTop: 20,
    width:'100%',
    height:'100%',
    backgroundColor:'black'
  },
  main_text:{color:'white',fontSize:17,left:10,fontWeight:'bold'},
  text:{left:20,color:'white',fontWeight:'bold',fontSize:25}
  });
  const style = StyleSheet.create({
    main_grid:{padding:15,shadowOffset: {width: 0,height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84,  elevation: 5,backgroundColor:'white',marginTop:15},
    text:{fontSize:17,color:'black',fontFamily:'Lato-Bold'},
    text_under:{fontSize:13,color:'grey',fontFamily:'Lato-Regular'},
    aug_text:{color:'black',fontFamily:'Lato-Bold',fontSize:15},
    normal_text:{fontFamily:'Lato-Regular',fontSize:15,color:'grey'}
})
const styleDark = StyleSheet.create({
    main_grid:{padding:15,shadowOffset: {width: 0,height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84,  elevation: 5,backgroundColor:'#494949',marginTop:15},
    text:{fontSize:17,color:'white',fontFamily:'Lato-Bold'},
    text_under:{fontSize:13,color:'grey',fontFamily:'Lato-Regular'},
    aug_text:{color:'white',fontFamily:'poppins',fontSize:15,fontFamily:'Lato-Bold'},
    normal_text:{fontFamily:'Lato-Regular',fontSize:14,color:'grey'}
})