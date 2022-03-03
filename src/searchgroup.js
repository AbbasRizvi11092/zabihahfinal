import React,{useState} from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity, ScrollView,Appearance,Switch} from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native';
import CrossIcon from 'react-native-vector-icons/Entypo'
import SearchIcon from 'react-native-vector-icons/Feather'


const searchgroup = ({navigation})=>{
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [alcohol, setAlcohol] = useState(false);
  const togglealcohol = () => setAlcohol(previousState => !previousState);
  const [halal, setHalal] = useState(false);
  const togglehalal = () => setHalal(previousState => !previousState);
  const [delivery, setDelivery] = useState(false);
  const toggledelivery = () => setDelivery(previousState => !previousState);
  const [higher, setHigher] = useState(false);
  const togglehigher = () => setHigher(previousState => !previousState);
  const [less, setLess] = useState(false);
  const toggleless = () => setLess(previousState => !previousState);
  const [distance, setDistance] = useState(false);
  const toggledistance = () => setDistance(previousState => !previousState);
  const [hightolow, setHightolow] = useState(false);
  const togglehightolow = () => setHightolow(previousState => !previousState);
  const [lowtohigh, setLowtohigh] = useState(false);
  const togglelowtohigh = () => setLowtohigh(previousState => !previousState);
    const [theme,setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme)=>{
      setTheme(scheme.colorScheme);
    })
    return(
        <ScrollView style={theme == 'light'?styles.main_view:Darkstyles.main_view}>
        <View>
            <View style={theme == 'light'?styles.view_normal:Darkstyles.view_normal}>
                <View style={{flexDirection:'row'}}>
                <Text style={theme == 'light'?styles.main_text:Darkstyles.main_text}>Search preferences</Text>
                <CrossIcon name='cross' size={35} color={theme == 'light'?'black':'white'} style={{alignSelf:'flex-end',position:'relative',right:0}} onPress={()=>navigation.navigate('homescreen')}/>
                </View>
                <View style={{ flexDirection:'row',marginTop:10}}>
                <Switch
        trackColor={{ false: "#767577", true: "#32CD32" }}
        thumbColor={isEnabled ? "white" : "white"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />  
                <View>
                 <Text style={theme == 'light'?styles.toggle_text:Darkstyles.toggle_text}>Search around my location</Text>  
                 </View>
                 </View>   
       <View style={{width:'100%',height:40,flexDirection:'row',marginTop:10}}>
             
             <View style={{width:'100%',height:40,flexDirection:'row',backgroundColor:'white',borderRadius:10}}>
             <SearchIcon name='search' size={15} color={'grey'} style={{alignSelf:'center',left:10}}/>
            
             <TextInput placeholder='Filter by keyword' style={{alignSelf:'center',left:15,color:'black'}} placeholderTextColor={theme == 'light'?'grey':'grey'}/>
             </View>
             <View style={{width:'20%',justifyContent:'center'}}>
             </View>
         </View>
<View>
         <View style={{ flexDirection:'row',marginTop:7,padding:5}}>
         <Switch
        trackColor={{ false: "#767577", true: "#32CD32" }}
        thumbColor={alcohol ? "white" : "white"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={togglealcohol}
        value={alcohol}
      /> 
                 <View>
                 <Text style={theme == 'light'?styles.toggle_text:Darkstyles.toggle_text}>No alcohol on the premises</Text>  
                 </View>
                 </View> 

                 <View style={{ flexDirection:'row',marginTop:7,padding:5}}>
                 <Switch
        trackColor={{ false: "#767577", true: "#32CD32" }}
        thumbColor={halal ? "white" : "white"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={togglehalal}
        value={halal}
      /> 
                 <View>
                 <Text style={theme == 'light'?styles.toggle_text:Darkstyles.toggle_text}>No non-halal items available</Text>  
                 </View>
                 </View> 

                 <View style={{ flexDirection:'row',marginTop:7,padding:5}}>
                 <Switch
        trackColor={{ false: "#767577", true: "#32CD32" }}
        thumbColor={delivery ? "white" : "white"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggledelivery}
        value={delivery}
      /> 
                 <View>
                 <Text style={theme == 'light'?styles.toggle_text:Darkstyles.toggle_text}>Home delivery available</Text>  
                 </View>
                 </View> 

                 <View style={{marginTop:10}}>
                 <Text style={theme == 'light'?styles.text_normal:Darkstyles.text_normal}>User Rating</Text>
                 <View style={{ flexDirection:'row',marginTop:7,padding:5}}>
                 <Switch
        trackColor={{ false: "#767577", true: "#32CD32" }}
        thumbColor={higher ? "white" : "white"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={togglehigher}
        value={higher}
      /> 
                 <View>
                 <Text style={theme == 'light'?styles.toggle_text:Darkstyles.toggle_text}>Rating of 4 or higher</Text>  
                 </View>
                 </View> 
                 <View style={{ flexDirection:'row',marginTop:7,padding:5}}>
                 <Switch
        trackColor={{ false: "#767577", true: "#32CD32" }}
        thumbColor={less ? "white" : "white"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleless}
        value={less}
      /> 
                 <View>
                 <Text style={theme == 'light'?styles.toggle_text:Darkstyles.toggle_text}>Rating of 3 or higher</Text>  
                 </View>
                 </View> 
                 </View>
                 </View>
                 <View style={{marginTop:10}}>
                 <Text  style={theme == 'light'?styles.text_normal:Darkstyles.text_normal}>Sort Results</Text>
                 <View style={{ flexDirection:'row',marginTop:7,padding:5}}>
                 <Switch
        trackColor={{ false: "#767577", true: "#32CD32" }}
        thumbColor={distance ? "white" : "white"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggledistance}
        value={distance}
      /> 
                 <View>
                 <Text style={theme == 'light'?styles.toggle_text:Darkstyles.toggle_text}>Distance</Text>  
                 </View>
                 </View> 
                 <View style={{ flexDirection:'row',marginTop:7,padding:5}}>
                 <Switch
        trackColor={{ false: "#767577", true: "#32CD32" }}
        thumbColor={hightolow ? "white" : "white"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={togglehightolow}
        value={hightolow}
      /> 
                 <View>
                 <Text style={theme == 'light'?styles.toggle_text:Darkstyles.toggle_text}>Rating high to low</Text>  
                 </View>
                 </View> 
                 <View style={{ flexDirection:'row',marginTop:7,padding:5}}>
                 <Switch
        trackColor={{ false: "#767577", true: "#32CD32" }}
        thumbColor={lowtohigh ? "white" : "white"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={togglelowtohigh}
        value={lowtohigh}
      /> 
                 <View>
                 <Text style={theme == 'light'?styles.toggle_text:Darkstyles.toggle_text}>Rating low to high</Text>  
                 </View>
                 </View> 
                 </View>

                 <TouchableOpacity onPress={()=>navigation.navigate('homescreen')} style={{backgroundColor:'#990000',marginTop:20,height:45,justifyContent:'center',shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,}}><Text style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:17}}>Save preference</Text></TouchableOpacity> 

                </View>
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
    view_normal:{backgroundColor:'#FFCC2A',padding:15},
    toggle_text:{left:10,color:'black'},
    main_text:{fontSize:25,color:'black',fontWeight:'bold',width:'90%'},
    text_normal:{color:'black',fontWeight:'bold',fontSize:16}
})
const Darkstyles= StyleSheet.create({
    main_view:{
        width:'100%',
        height:'100%',
        backgroundColor:'black',
    },
    view_normal:{backgroundColor:'#494949',padding:15},
    toggle_text:{left:10,color:'white'},
    main_text:{fontSize:25,color:'white',fontWeight:'bold',width:'90%'},
    text_normal:{color:'white',fontWeight:'bold',fontSize:16}
})

export default searchgroup;