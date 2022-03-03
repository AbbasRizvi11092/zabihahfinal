import React,{useState} from "react";
import {View,Text,ImageBackground,Appearance,StyleSheet,FlatList,Dimensions} from 'react-native'
import {Col,Row,Grid} from 'react-native-easy-grid'
import PenIcon  from 'react-native-vector-icons/AntDesign';
import { Avatar } from 'react-native-elements';


const Section = [
    
    {  
         key: "1",
         text1 : "Good Thai",
         text2 : "20 Queen Street",
         text3 : "Berkeley,CA",
         uri : "https://www.mashed.com/img/gallery/chinese-chain-restaurants-ranked-worst-to-best/l-intro-1611672738.jpg"
   },
   {  
       key: "2",
       text1 : "Bergerium",
       text2 : "20 Queen Street",
       text3 : "Berkeley,CA",
       uri : "https://www.mashed.com/img/gallery/chinese-chain-restaurants-ranked-worst-to-best/l-intro-1611672738.jpg"
},
{  
   key: "3",
   text1 : "Shalimar",
   text2 : "20 Queen Street",
   text3 : "Berkeley,CA",
   uri : "https://www.mashed.com/img/gallery/chinese-chain-restaurants-ranked-worst-to-best/l-intro-1611672738.jpg"
},
{  
    key: "3",
    text1 : "Shalimar",
    text2 : "20 Queen Street",
    text3 : "Berkeley,CA",
    uri : "https://www.mashed.com/img/gallery/chinese-chain-restaurants-ranked-worst-to-best/l-intro-1611672738.jpg"
 },
 {  
    key: "3",
    text1 : "Shalimar",
    text2 : "20 Queen Street",
    text3 : "Berkeley,CA",
    uri : "https://www.mashed.com/img/gallery/chinese-chain-restaurants-ranked-worst-to-best/l-intro-1611672738.jpg"
 },
 {  
    key: "3",
    text1 : "Shalimar",
    text2 : "20 Queen Street",
    text3 : "Berkeley,CA",
    uri : "https://www.mashed.com/img/gallery/chinese-chain-restaurants-ranked-worst-to-best/l-intro-1611672738.jpg"
 },
 {  
    key: "3",
    text1 : "Shalimar",
    text2 : "20 Queen Street",
    text3 : "Berkeley,CA",
    uri : "https://www.mashed.com/img/gallery/chinese-chain-restaurants-ranked-worst-to-best/l-intro-1611672738.jpg"
 },
 {  
    key: "3",
    text1 : "Shalimar",
    text2 : "20 Queen Street",
    text3 : "Berkeley,CA",
    uri : "https://www.mashed.com/img/gallery/chinese-chain-restaurants-ranked-worst-to-best/l-intro-1611672738.jpg"
 },
 {  
    key: "3",
    text1 : "Shalimar",
    text2 : "20 Queen Street",
    text3 : "Berkeley,CA",
    uri : "https://www.mashed.com/img/gallery/chinese-chain-restaurants-ranked-worst-to-best/l-intro-1611672738.jpg"
 },
 {  
    key: "3",
    text1 : "Shalimar",
    text2 : "20 Queen Street",
    text3 : "Berkeley,CA",
    uri : "https://www.mashed.com/img/gallery/chinese-chain-restaurants-ranked-worst-to-best/l-intro-1611672738.jpg"
 },
 {  
    key: "3",
    text1 : "Shalimar",
    text2 : "20 Queen Street",
    text3 : "Berkeley,CA",
    uri : "https://www.mashed.com/img/gallery/chinese-chain-restaurants-ranked-worst-to-best/l-intro-1611672738.jpg"
 },
 {  
    key: "3",
    text1 : "Shalimar",
    text2 : "20 Queen Street",
    text3 : "Berkeley,CA",
    uri : "https://www.mashed.com/img/gallery/chinese-chain-restaurants-ranked-worst-to-best/l-intro-1611672738.jpg"
 },
 {  
    key: "3",
    text1 : "Shalimar",
    text2 : "20 Queen Street",
    text3 : "Berkeley,CA",
    uri : "https://www.mashed.com/img/gallery/chinese-chain-restaurants-ranked-worst-to-best/l-intro-1611672738.jpg"
 },
 {  
    key: "3",
    text1 : "Shalimar",
    text2 : "20 Queen Street",
    text3 : "Berkeley,CA",
    uri : "https://www.mashed.com/img/gallery/chinese-chain-restaurants-ranked-worst-to-best/l-intro-1611672738.jpg"
 },
 {  
    key: "3",
    text1 : "Shalimar",
    text2 : "20 Queen Street",
    text3 : "Berkeley,CA",
    uri : "https://www.mashed.com/img/gallery/chinese-chain-restaurants-ranked-worst-to-best/l-intro-1611672738.jpg"
 },
 {  
    key: "3",
    text1 : "Shalimar",
    text2 : "20 Queen Street",
    text3 : "Berkeley,CA",
    uri : "https://www.mashed.com/img/gallery/chinese-chain-restaurants-ranked-worst-to-best/l-intro-1611672738.jpg"
 },
 {  
    key: "3",
    text1 : "Shalimar",
    text2 : "20 Queen Street",
    text3 : "Berkeley,CA",
    uri : "https://www.mashed.com/img/gallery/chinese-chain-restaurants-ranked-worst-to-best/l-intro-1611672738.jpg"
 },
 {  
    key: "3",
    text1 : "Shalimar",
    text2 : "20 Queen Street",
    text3 : "Berkeley,CA",
    uri : "https://www.mashed.com/img/gallery/chinese-chain-restaurants-ranked-worst-to-best/l-intro-1611672738.jpg"
 },
 {  
    key: "3",
    text1 : "Shalimar",
    text2 : "20 Queen Street",
    text3 : "Berkeley,CA",
    uri : "https://www.mashed.com/img/gallery/chinese-chain-restaurants-ranked-worst-to-best/l-intro-1611672738.jpg"
 },{  
    key: "3",
    text1 : "Shalimar",
    text2 : "20 Queen Street",
    text3 : "Berkeley,CA",
    uri : "https://www.mashed.com/img/gallery/chinese-chain-restaurants-ranked-worst-to-best/l-intro-1611672738.jpg"
 },
 
]
const PhotogalleryCard = props =>{
    const [theme,setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme)=>{
    setTheme(scheme.colorScheme);
  })
    return(
        
              <FlatList 
            //   alwaysBounceVertical = {false}
              showsVerticalScrollIndicator = {false}
             
              numColumns={4}
              keyExtractor={ (item, index) => item.id }
              style={{width:'100%'}}
          data={Section}
          renderItem={({item})=>
             <View style={theme == 'light'?styles.main_view:Darkstyles.main_view}>
                 <ImageBackground source={require('../../img/WeddingGifts1.jpg')} resizeMode="cover">
                <Avatar source={require('../../img/avatar.png')} avatarStyle={{margin:5,borderRadius:15}}/>
        </ImageBackground>
                 <View style={{padding:10}}>
                 <Text style={theme == 'light'?styles.name_text:Darkstyles.name_text}>
                     {item.text1}
                 </Text>
                 <Text style={theme == 'light'?styles.text_under:Darkstyles.text_under}>
                     {item.text2}
                 </Text>
                
                  </View>
             </View>
             
          }
          />
         
    )
}
export default PhotogalleryCard

const styles = StyleSheet.create({
    main_view:{backgroundColor:'white',margin:5,shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
    maxWidth: Dimensions.get('window').width /2,
},
name_text:{color:'black',fontWeight:'bold'},
text_under:{color:'black',fontSize:12}

});
const Darkstyles = StyleSheet.create({
    main_view:{backgroundColor:'#494949',margin:5,shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
    maxWidth: Dimensions.get('window').width /2,
},
name_text:{color:'white',fontWeight:'bold'},
text_under:{color:'white'}
});