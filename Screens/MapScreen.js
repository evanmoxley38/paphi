import React from "react";
import {SafeAreaView, View, Text} from "react-native";
import MapView from 'react-native-maps';
import {createStackNavigator} from '@react-navigation/stack';

//Style Imports
import styles from "../Styles.js";

//Screen Imports
import MapDetails from "./MapDetails.js"

//Screen that renders the map with all its points
function MapScreen({navigation}){
    return(
        <SafeAreaView style={styles.mapContainer}>
            <View style={{justifyContent: 'center', alignItems: 'center',}}>
                <Text style={{fontSize: 40, fontWeight: 'bold'}}> Home</Text>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: "#1e90ff"}}>PI ALPHA PHI FRATERNITY INC.</Text>
            </View>
            <View style={{marginTop: 25, alignItems: 'center'}}>
                <MapView style={styles.mapStyle}>
                <MapView.Marker coordinate={{latitude: 34.6834, longitude: -82.8347}} title= "Chi Chapter - Clemson University" pinColor="orange" onCalloutPress={() => {navigation.navigate("Map Details")}}/>
                <MapView.Marker coordinate={{latitude: 37.8719, longitude: -122.2585}} title= "Alpha Chapter - UC Berkeley" pinColor="#7cfc00"/>
                <MapView.Marker coordinate={{latitude: 40.9124, longitude: -73.1234}} title= "Beta Chapter - Stony Brook University" pinColor="#dc143c"/>
                <MapView.Marker coordinate={{latitude: 38.5382, longitude: -121.7617}} title= "Gamma Chapter - UC Davis" pinColor="#dc143c"/>
                <MapView.Marker coordinate={{latitude: 37.3352, longitude: -121.8811}} title= "Delta Chapter - San Jose State University" pinColor="#dc143c"/>
                <MapView.Marker coordinate={{latitude: 33.9721, longitude: -117.3254}} title= "Epsion Chapter - UC Riverside" pinColor="#dc143c"/>
                <MapView.Marker coordinate={{latitude: 36.9881, longitude: -122.0582}} title= "Zeta Chapter - UC Santa Cruz" pinColor="#dc143c"/>
                <MapView.Marker coordinate={{latitude: 33.6405, longitude: -117.8443}} title= "Eta Chapter - UC Irvine" pinColor="#7cfc00"/>
                <MapView.Marker coordinate={{latitude: 32.8801, longitude: -117.2340}} title= "Theta Chapter - UC San Diego" pinColor="#7cfc00"/>
                <MapView.Marker coordinate={{latitude: 42.2780, longitude: -83.7382}} title= "Iota Chapter - University of Michigan" pinColor="#7cfc00"/>
                <MapView.Marker coordinate={{latitude: 32.2319, longitude: -110.9501}} title= "Kappa Chapter - University of Arizona" pinColor="#7cfc00"/>
                <MapView.Marker coordinate={{latitude: 42.7018, longitude: -84.4822}} title= "Mu Chapter - Michigan State University" pinColor="#7cfc00"/>
                <MapView.Marker coordinate={{latitude: 35.9049, longitude: -79.0469}} title= "Nu Chapter - UNC Chapel Hill" pinColor="#dc143c"/>
                <MapView.Marker coordinate={{latitude: 47.6555, longitude: -122.3032}} title= "Xi Chapter - University of Washington" pinColor="#7cfc00"/>
                <MapView.Marker coordinate={{latitude: 34.4140, longitude: -119.8489}} title= "Omicron Chapter - UC Santa Barbara" pinColor="#7cfc00"/>
                <MapView.Marker coordinate={{latitude: 41.6627, longitude: -91.5549}} title= "Pi Chapter - University of Iowa" pinColor="#7cfc00"/>
                <MapView.Marker coordinate={{latitude: 35.2271, longitude: -80.8431}} title= "Rho Chapter - UNC Charlotte" pinColor="#dc143c"/>
                <MapView.Marker coordinate={{latitude: 42.0559, longitude: -87.6751}} title= "Sigma Chapter - Northwestern University" pinColor="#dc143c"/>
                <MapView.Marker coordinate={{latitude: 35.7847, longitude: -78.6821}} title= "Tau Chapter - NC State University" pinColor="#7cfc00"/>
                <MapView.Marker coordinate={{latitude: 37.724, longitude: -122.4799}} title= "Upsilon Chapter - San Fransico State" pinColor="#dc143c"/>
                <MapView.Marker coordinate={{latitude: 39.9566, longitude: -75.1899}} title= "Phi Chapter - Drexel University" pinColor="#dc143c"/>
                <MapView.Marker coordinate={{latitude: 41.8780, longitude: -93.0977}} title= "Psi Chapter - Iowa State University" pinColor="#7cfc00"/>
                <MapView.Marker coordinate={{latitude: 43.0008, longitude: -78.7890}} title= "Colony Chapter - University at Buffulo" pinColor="#7cfc00"/>
                <MapView.Marker coordinate={{latitude: 36.1085, longitude: -115.1432}} title= "Colony Chapter - University of Nevada, Las Vegas" pinColor="#dc143c"/>
                <MapView.Marker coordinate={{latitude: 39.6780, longitude: -75.7506}} title= "Colony Chapter - University of Delaware" pinColor="#dc143c"/>
                <MapView.Marker coordinate={{latitude: 38.9869, longitude: -76.9426}} title= "Colony Chapter - University of Maryland CP" pinColor="#dc143c"/>
                <MapView.Marker coordinate={{latitude: 33.4242, longitude: -111.9281}} title= "Colony Chapter - Arizona State University" pinColor="#7cfc00"/>
                <MapView.Marker coordinate={{latitude: 36.0689, longitude: -79.8102}} title= "Colony Chapter - UNC at Greensboro" pinColor="#7cfc00"/>
        
                </MapView>
            </View>
            <View style={{flex: 1, backgroundColor: '#1e90ff'}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Brotherhood Map</Text>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>- Click pin for more details!</Text>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>- Green = Active Chapter</Text>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>- Red = Inactive Chapter</Text>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>- Orange = Clemson!</Text>
            </View>
        </SafeAreaView>
      
    )
}
export default function MapScreenStack(){
    return(
      <MapStack.Navigator>
        <MapStack.Screen name="Map Screen" component={MapScreen} options={{headerShown: false}}/>
        <MapStack.Screen name="Map Details" component={MapDetails} options={{headerShown: false}} />
      </MapStack.Navigator>
    )
  }
  
const MapStack = createStackNavigator()