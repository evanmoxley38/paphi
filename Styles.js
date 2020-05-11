import React from 'react';
import {StyleSheet, Dimensions} from 'react-native'
import Constants from "expo-constants";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      marginHorizontal: 16,
    },
    innterContainer:{
        flex: .75,
        paddingLeft: 20
    },
    item: {
      backgroundColor: "#61dafb",
      padding: 20,
      marginVertical: 8
    },
    //list and roster formatting
    header: {
      fontSize: 32,
      backgroundColor: "#fff"
    },
    names: {
      fontSize: 20
    },
    //image for the details scree 
    image:{
      width: 300,
      height: 300,
      resizeMode: 'cover',
    },
    detailsText:{
      fontSize: 20,
    },
    mapStyle:{
      width: 400,
      height: 400,
    }
  }); 

  export default styles