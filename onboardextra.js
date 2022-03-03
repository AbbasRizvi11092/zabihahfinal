import React,{useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { View,Text,Image, StyleSheet,Appearance } from 'react-native';
import ButtonRed from './src/component/buttonred';
import { TouchableOpacity } from 'react-native-gesture-handler';

// const [theme,setTheme] = useState(Appearance.getColorScheme());
//    Appearance.addChangeListener((scheme)=>{
//      setTheme(scheme.colorScheme);
//    })
const slides = [
  {
    key: 'one',
    title: 'Find halal food \nand more',
    text: 'Zabihah can show you nearby\nHalal restaurants,markets,\n and prayer spaces',
    image: require('./img/search.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Search nearby \nor far away',
    text: "We show you what's nearby,\nbut you can also search around your destination",
    image: require('./img/location.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Have it delivered \nto your door',
    text: 'Order home delivery from Zabihah right in the app, or use your favorite delivery service',
    image: require('./img/cycle.png'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 'four',
    title: 'Get exclusive \ndeals & coupons',
    text: 'Zabihah has partnered with \n thousands of restaurants to get\n you exclusive offers',
    image: require('./img/stuff.png'),
    backgroundColor: '#22bcb5',
  }
];

export default class App extends React.Component {
  state = {
    showRealApp: false
  }
  _renderItem = ({ item }) => {
    return (
      <View style={{backgroundColor:'#FFCC2A',padding:5,width:'100%',height:'100%'}}>
        <Text style={{color:'black',alignSelf:'center',fontFamily:'Lato-Light',fontSize:35,fontWeight:'bold',textAlign:'center',marginTop:45}}>{item.title}</Text>
        <Text style={{color:'black',alignSelf:'center',fontFamily:'Lato-Regular',fontSize:20,padding:20,textAlign:'center'}}>{item.text}</Text>
        <Image source={item.image} style={{alignSelf:'center',width:250,height:250,justifyContent:'center',alignItems:'center',alignContent:'center'}}/>
        <View style={{justifyContent:'center',marginTop:55,padding:20}}>
        <ButtonRed text="Continue" next={this._nextbutton}/>
        {/* <bottomButton/> */}
       <TouchableOpacity>
        <Text>
          {
            this._nextbutton
          }
        </Text>
       </TouchableOpacity>
        </View>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  _nextbutton = () =>{
        // slides + 1
        this.props.navigation.navigate('login')
  }
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return <AppIntroSlider renderItem={this._renderItem} showDoneButton={false} data={slides} nextLabel={false} bottomButton={false} dotStyle={styles.dotstyle} activeDotStyle={styles.activeDotStyle}/>;
    }
  }
}
const styles = StyleSheet.create({
  main_view:{backgroundColor:'#FFCC2A',flex:1,padding:15},
  dotstyle:{letterSpacing:10,backgroundColor:'#F8F0E3',marginLeft:15,width:12,height:12,borderRadius:15,marginBottom:'20%'},
  activeDotStyle:{backgroundColor:'white',marginLeft:15,width:15,height:15,borderRadius:15,marginBottom:'20%'
}
})
const DarkStyle = StyleSheet.create({
  main_view:{backgroundColor:'#494949',flex:1,padding:15}
})