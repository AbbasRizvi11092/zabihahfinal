import React, {Component} from 'react';
import CustomWebView from "./webview";

export default class HelpZabihah extends Component {
  render(){
      return( 
      <CustomWebView uri="https://app.zabihah.com/text_faq.php"/>   
      )
  }
}