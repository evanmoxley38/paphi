import React from "react";
import {Text, View, SafeAreaView, SectionList, TouchableOpacity, Button} from "react-native";
import MapView from 'react-native-maps';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Info Imports
import Roster from "./Info/Roster.js";
import Actives from "./Info/Actives.js";

//Style Imports
import styles from "./Styles.js";

// //Screen Imports
import DetailsScreen from './Screens/DetailsScreen.js';

const Item = ({ crossing, navigation}) => (
  <View style={styles.item}>
    <TouchableOpacity style={styles.names} onPress={() => {navigation.navigate("Information",{crossing} )}} > 
      <Text style = {styles.names}> {crossing} </Text>
    </TouchableOpacity>
  </View>
);
//full roster screen
function FullRoster({navigation}){
  return(
    <SafeAreaView style={styles.container}>
        <SectionList
          sections={Roster}
          keyExtractor={(item, index) => item + index}
    
          renderItem={({ item }) => <Item crossing={item} navigation={navigation} />}
    
          renderSectionHeader={({ section: { crossing } }) => (
            <Text style={styles.header}>{crossing}</Text>
          )}
        />
      </SafeAreaView>
  )
}
function FullRosterStack(){
  return(
    <FullStack.Navigator>
      <FullStack.Screen name="Full Roster" component={FullRoster} />
      <FullStack.Screen name="Information" component={DetailsScreen} />
    </FullStack.Navigator>
  );
}
//active house screen
function ActiveHouse({navigation}){
  return(
    <SafeAreaView style={styles.container}>
        <SectionList
          sections={Actives}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item crossing={item} navigation={navigation} />}
          renderSectionHeader={({ section: { crossing } }) => (
            <Text style={styles.header}>{crossing}</Text>
          )}
        />
      </SafeAreaView>
  )
}
function ActiveHouseStack(){
  return(
    <ActiveStack.Navigator>
      <ActiveStack.Screen name="Active House" component={ActiveHouse} />
      <ActiveStack.Screen name="Information" component={DetailsScreen} />
    </ActiveStack.Navigator>
  )
}

const FullStack = createStackNavigator()
const ActiveStack = createStackNavigator()
const Tab = createBottomTabNavigator()

function MapScreen(){
  return(
    <View style={styles.container}>
      <Button title="Click to open fucking map"/>
      <MapView style={styles.mapStyle}></MapView>
    </View>
  )
}

class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator screenOptions={({route}) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Active House') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
            } else if (route.name === 'Full Roster') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}> 
          <Tab.Screen name="Active House" component={ActiveHouseStack} />
          <Tab.Screen name="Full Roster" component={FullRosterStack} />
          <Tab.Screen name="Map" component={MapScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
  
    );
  } 
}
export default App;

