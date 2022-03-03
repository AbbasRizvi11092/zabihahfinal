import React,{useState,useEffect} from "react";
import {View,Text,Image, StyleSheet,Appearance,FlatList} from 'react-native'
import StarIcon from 'react-native-vector-icons/Entypo';
import {Col,Row,Grid} from 'react-native-easy-grid'
import Axios from 'axios'
import { ServiceConstant } from "../../serviceconstant";

const ProfilereviewCard = props =>{
    const [review_data,setReview_Data] = useState([])
    const [theme,setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme)=>{
      setTheme(scheme.colorScheme);
    })
    useEffect(()=>{
        Axios
        .post(ServiceConstant.retrieve_mem_info + "?" + "key" + "=" + ServiceConstant.key + "&" + "uuid" + "=" + ServiceConstant.uuid+ "&" + "mid" + "=" + ServiceConstant.user_login_data)
        .then(function(data){
         setReview_Data(data.data.member.reviews_recent_r)
          // alert(JSON.stringify(mem_data.username))
        })
      })
    return(
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
            <Text>{item.rating_text}</Text>
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
        
    )
}
export default ProfilereviewCard

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