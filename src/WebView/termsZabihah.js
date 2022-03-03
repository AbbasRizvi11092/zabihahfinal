import React, {Component} from 'react';
import CustomWebView from "./webview";

export default class TermsZabihah extends Component {
  render(){
      return( 
      <CustomWebView uri="https://app.zabihah.com/text_terms.php"/>   
      )
  }
}