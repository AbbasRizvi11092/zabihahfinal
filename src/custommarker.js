import React from 'react';
import {View,StyleSheet,Image} from 'react-native'

const CustomMarker = ({item}) => {
    return(
        <View style={styles.roundmarker}>
            <Image source={require('../img/zabihahmapicon.png')} style={styles.roundImage}/>
        </View>
    )
}
const styles = StyleSheet.create({
    roundmarker:{
        height:30,
        width:30,
        backgroundColor:'white',
        borderRadius:25
    },
    roundImage:{
        height:30,
        width:30,
        borderRadius:25
    }
})
export default CustomMarker;