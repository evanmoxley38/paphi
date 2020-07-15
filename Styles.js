import {StyleSheet, Dimensions} from 'react-native'
import Constants from "expo-constants";

const styles = StyleSheet.create({
    //Styles for lists and details screens
    container: {
      flex: 1,
      marginHorizontal: 16,
    },
    detailsContainer:{
      flex: 1,
      marginHorizontal: 16,
      marginTop: 50
    },
    innerContainer:{
        flex: .7,
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
    //image for the details screen
    image:{
      width: 300,
      height: 300,
      resizeMode: 'cover',
      borderColor: 'blue',
      borderWidth: 3,
    },
    detailsText:{
      fontSize: 20,
    },
    //styles for map
    mapStyle:{
      width: Dimensions.get('window').width,
      height: 450,
    },
    mapContainer:{
      flex:1,
      backgroundColor: "#fff8dc"
    }
  }); 

  export default styles