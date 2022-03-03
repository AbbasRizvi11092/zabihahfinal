import React,{useEffect, useState} from "react";
import {View,Text,ImageBackground,Appearance,StyleSheet,FlatList} from 'react-native'
import {Col,Row,Grid} from 'react-native-easy-grid'
import PenIcon  from 'react-native-vector-icons/FontAwesome';
import StarIcon from 'react-native-vector-icons/Entypo';
import Axios from 'axios'
import { ServiceConstant } from "../../serviceconstant";

const MosqueCard = props =>{
    const [mosques,setMosques] = useState([]);
    const [mosque_num,setMosqueNum] = useState([]);
    const [theme,setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme)=>{
    setTheme(scheme.colorScheme);
  })
  useEffect(()=>{
    Axios
    .post(ServiceConstant.record_around_location + "?" + "key" + "=" + ServiceConstant.key + "&" + "uuid" + "=" + 2 + "&" + "id" + "=" + 122 + "&" + "l" + "=" + "51.543227,0.0324407" + "&" + "r" + "=" + 10 + "&" + "t" + "=" + 3)
    .then(function(data){
     setMosques(data.data.data.mosques)
     setMosqueNum(data.data.data)
    //   alert(JSON.stringify(data.data.data))
    })
  })
    return(
        <View style={theme == 'light' ? styles.main_view:Darkstyles.main_view}>
        <View style={{flexDirection:'row'}}>
            <Text style={theme == 'light'?styles.text_saved:Darkstyles.text_saved}>
            {JSON.stringify(mosque_num.number_mosq)} {props.textplace}
            </Text>
            <Text style={theme == 'light'?styles.text_see:Darkstyles.text_see}>
                See all
            </Text>
        </View>
    <FlatList 
    style={{width:'100%'}}
data={mosques}
horizontal
showsHorizontalScrollIndicator = {false}
renderItem={({item})=>
   <View style={theme == 'light'?styles.flatlist_view:Darkstyles.flatlist_view}>
       <ImageBackground source={{uri:item.photo_url}} style={{width:191.5,height:100,}} resizeMode="cover">
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
           <Text style={{backgroundColor:'#FFCC2A',fontSize:12,margin:5,padding:2,fontWeight:'bold',color:'black'}}>{item.tags}</Text>
        </View>
        </View>
   </View>
}
/>
 </View>
    )
}
export default MosqueCard

const styles = StyleSheet.create({
    main_view:{width:'100%',margin:10},
    text_saved:{fontSize:20,color:'black',fontWeight:'bold'},
    text_see:{position:'absolute',right:0,color:'black',fontSize:15,alignSelf:'center',marginRight:15},
    flatlist_view:{backgroundColor:'white',margin:7,shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
},
star_view:{flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'white'},
star_text:{color:'black',fontWeight:'bold',left:7},
name_text:{color:'black',fontWeight:'bold'},
text_under:{color:'black'}
});
const Darkstyles = StyleSheet.create({
    main_view:{width:'100%',margin:10},
    text_saved:{fontSize:20,color:'white',fontWeight:'bold'},
    text_see:{position:'absolute',right:0,color:'white',fontSize:15,alignSelf:'center',marginRight:15},
    flatlist_view:{backgroundColor:'#494949',flex:1,margin:7,shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
},
star_view:{flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'#494949'},
star_text:{color:'white',fontWeight:'bold',left:7},
name_text:{color:'white',fontWeight:'bold',fontSize:12},
text_under:{color:'white',fontSize:10}
});