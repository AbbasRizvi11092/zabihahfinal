import React,{useState} from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity, ScrollView,Appearance} from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native';
import CrossIcon from 'react-native-vector-icons/Entypo'
import SearchIcon from 'react-native-vector-icons/Feather'

const photoupload = ({navigation})=>{
    const [theme,setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme)=>{
      setTheme(scheme.colorScheme);
    })
    return(
        <ScrollView style={theme == 'light'?styles.main_view:Darkstyles.main_view}>
        
            <View style={theme == 'light'?styles.normal_view:Darkstyles.normal_view}>
                <View style={{flexDirection:'row'}}>
                <Text style={theme == 'light'?styles.text:Darkstyles.text}>Add photos</Text>
                <CrossIcon name='cross' size={35} color={theme == 'light'?'black':'white'} style={{alignSelf:'flex-end',position:'relative',right:0}} onPress={()=>navigation.navigate('mosquedetail')}/>
                </View>
                  
       <View style={{width:'100%',flexDirection:'column',marginTop:20}}>
             
             <View style={{width:'100%',height:40,flexDirection:'row',borderBottomWidth:1,borderBottomColor:'grey'}}> 
             <TextInput placeholder='Photo title' style={{alignSelf:'center'}} placeholderTextColor={theme == 'light'?'grey':'white'}/>
             </View>

             <View style={{width:'100%',height:40,flexDirection:'row',borderBottomWidth:1,borderBottomColor:'grey',marginTop:30}}> 
             <TextInput placeholder='Photo description' style={{alignSelf:'center'}} placeholderTextColor={theme == 'light'?'grey':'white'}/>
             </View>
            
         </View>

                 <TouchableOpacity onPress={()=>navigation.navigate('profilereviews')} style={{backgroundColor:'white',marginTop:20,height:45,justifyContent:'center',shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,}}><Text style={{color:'black',textAlign:'center',fontWeight:'bold',fontSize:17}}>Attach photos</Text></TouchableOpacity> 

<TouchableOpacity onPress={()=>navigation.navigate('profilereviews')} style={{backgroundColor:'#990000',marginTop:20,height:45,justifyContent:'center',shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,}}><Text style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:17}}>Add photos</Text></TouchableOpacity> 

                </View>
       
        </ScrollView>
    )
}
const styles= StyleSheet.create({
    main_view:{
        width:'100%',
        height:'100%',
        backgroundColor:'#CACACA'
    },
    normal_view:{backgroundColor:'#FFCC2A',padding:20},
    text:{fontSize:25,color:'black',fontWeight:'bold',width:'90%'}
})
const Darkstyles= StyleSheet.create({
    main_view:{
        width:'100%',
        height:'100%',
        backgroundColor:'black'
    },
    normal_view:{backgroundColor:'#494949',padding:20},
    text:{fontSize:25,color:'white',fontWeight:'bold',width:'90%'}
})

export default photoupload;