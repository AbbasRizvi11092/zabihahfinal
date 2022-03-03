import React, {Component} from 'react';
import {View, ActivityIndicator, Dimensions,StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

export default class CustomWebView extends Component {

    constructor(props){
        super(props);
        this.state = {
            webviewLoaded: false
        };
        this.ScreenHeight = Dimensions.get("window").height - 130;
        this.ScreenWidth = Dimensions.get("window").width;
        console.log(this.props)
    }
    _onLoadEnd() {
        this.setState({ webviewLoaded: true });
    }
    render(){
        const { uri } = this.props;
        return(
            <View style={WebViewStyle.container}>
                {(this.state.webviewLoaded) ? null :
                    <ActivityIndicator
                        style={[WebViewStyle.loading, {height:this.ScreenHeight, width:this.ScreenWidth}]}
                        size='large' color='#990000'
                    />
                }
                <WebView source={{uri: uri}} onLoadEnd={this._onLoadEnd.bind(this)} androidHardwareAccelerationDisabled={true} style={{opacity:0.99}}/>
            </View>
        );
    }
}
const WebViewStyle = StyleSheet.create({
    container:{
        flex: 1,
        position: 'relative'
    },
    loading:{
        backgroundColor: '#fff'
    }

});
