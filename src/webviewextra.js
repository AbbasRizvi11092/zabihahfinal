 import React,{Component} from "react";
import { WebView } from "react-native-webview";    //<---Import this dependency
 
export default class WebViewScreen extends Component {
  constructor(props) {
    super(props);
    // console.log(props.route.params);
 
    this.state = {
      url: props.route.params.url
    };
  }
 
  render() {
    return <WebView source={{ uri: this.state.url }} />;   //<---Pass url to webview
  }
}