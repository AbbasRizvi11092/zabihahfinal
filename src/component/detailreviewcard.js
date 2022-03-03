import React,{useState} from "react";
import {View,Text,Image, StyleSheet,Appearance} from 'react-native'
import StarIcon from 'react-native-vector-icons/Entypo';
import {Col,Row,Grid} from 'react-native-easy-grid'
import { Avatar } from 'react-native-elements';

const DetailreviewCard = props =>{
    const [theme,setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme)=>{
      setTheme(scheme.colorScheme);
    })
    return(
        <Grid style={theme == 'light'?style.grid_style:styleDark.grid_style}>
            <Row>
                <Col style={{width:60}}>
                <Avatar rounded source={require('../../img/WeddingGifts1.jpg')} size="medium" /> 
                </Col>
                <Col>
                <Text style={theme == 'light'?style.text:styleDark.text}>
                  Shahid Amanullah
                </Text>
                <Text style={theme == 'light'?style.text_under:styleDark.text_under}>
                  Aug 5, 2020
                </Text>
                </Col>

                <Col style={{position:'relative',right:0,flexDirection:'column',width:'30%'}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <StarIcon name='star' size={20} color={'#FFDF0D'} />
                <View>
                <StarIcon name='star' size={20} color={'#FFDF0D'}/>
                </View>
                <View>
                <StarIcon name='star' size={20} color={'#FFDF0D'} />
                </View>
                <View>
                <StarIcon name='star' size={20} color={'#FFDF0D'} />
                </View>
                <View>
                <StarIcon name='star' size={20} color={'grey'} />
                </View>
               
                </View>
               
                <View style={{backgroundColor:'#28A928',alignItems:'center',justifyContent:'center',padding:2}}>
                <Text style={{color:'white',fontWeight:'bold'}}>
                  WILL RETURN
                </Text>
                </View>
                </Col>
            </Row>

            <Row style={{flexDirection:'column'}}>
                <View style={{flexDirection:'row'}}>        
                    <Text style={theme == 'light'?style.normal_text:styleDark.normal_text}>This is honestly one of the best Thai restaurants I have ever been to.Everything is halal per the owner,who came out to our table to assure us of that.Please patronize this business!</Text>
                </View>                  
            </Row>       
        </Grid>
    )
}
export default DetailreviewCard

const style = StyleSheet.create({
    grid_style:{
        padding:15,
        shadowOffset: {width: 0,height: 2, },
         shadowOpacity: 0.25, 
         shadowRadius: 3.84,  
         elevation: 5,
         backgroundColor:'white',
         marginTop:15
        },
    text:{fontSize:17,fontFamily:'Lato-Bold',color:'black'},
    text_under:{fontSize:13,color:'grey',fontFamily:'Lato-Regular'},
    normal_text:{fontFamily:'Lato-Regular',fontSize:15,color:'grey'}
})
const styleDark = StyleSheet.create({
    grid_style:{
        padding:15,
        shadowOffset: {width: 0,height: 2, },
         shadowOpacity: 0.25, 
         shadowRadius: 3.84,  
         elevation: 5,
         backgroundColor:'#494949',
         marginTop:15
        },
    text:{fontSize:17,color:'white',fontFamily:'Lato-Bold'},
    text_under:{fontSize:13,color:'white',fontFamily:'Lato-Regular'},
    normal_text:{fontFamily:'Lato-Regular',fontSize:15,color:'grey',padding:5}
})