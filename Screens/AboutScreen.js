import React from "react";
import {WebView} from 'react-native-webview';

export default function AboutScreen(){
    return(
       
        <WebView source={{uri: 'https://clemson0.wixsite.com/cupaphi/history' }} style={{marginTop: 25}}/>
        
    )
}