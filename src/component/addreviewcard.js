import React,{useState} from 'react';
import { View, Text, StyleSheet, Appearance ,TextInput} from 'react-native';
import CaretIcon  from 'react-native-vector-icons/AntDesign';

const ReviewCard = props => {
    const [theme,setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme)=>{
      setTheme(scheme.colorScheme);
    })
    const [counter,setCounter] = useState(0);
    const increament = () =>{
        setCounter(counter + 1)
    }
    const decreament = () =>{
        setCounter(counter - 1)
    }
   
    return (
       
        <View style={styles.first_grid}>
        <View style={{width:'80%'}}>     
            <TextInput placeholder={props.placename} onChangeText={props.onChangeText} value={props.value} keyboardType='numeric' placeholderTextColor={theme=='light'?"grey":"grey"}/>  
            {/* <Text>{counter}</Text> */}
            </View>  
            <View style={{alignSelf:'center',}}>
                <Text style={{color:'grey'}}>{props.textholder}</Text>
                {/* <CaretIcon name='caretup' color={'black'} size={10} onPress={increament}/>
                <CaretIcon name='caretdown' color={'black'} size={10} onPress={decreament}/> */}
            </View>
    </View>
        
    );
};
const styles = StyleSheet.create({
   
    first_grid:{
        flexDirection:'row',
        margin:5,
        borderWidth:0.5,
        borderColor:'grey',
        borderRadius:5,
       backgroundColor:'white',
       padding:5
        },

});
export default ReviewCard