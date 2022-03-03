import React, {Component} from 'react';
import CustomWebView from "./webview";

export default class PrivacyZabihah extends Component {
  render(){
      return( 
      <CustomWebView uri="https://app.zabihah.com/text_privacy.php"/>   
      )
  }
}