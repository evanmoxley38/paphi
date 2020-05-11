import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// //Screen Imports
import MapScreen from './Screens/MapScreen.js';
import ActiveHouseStack from './Screens/ActiveScreen.js';
import FullRosterStack from './Screens/RosterScreen.js';

const FullStack = createStackNavigator()
const Tab = createBottomTabNavigator()

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
            } else if (route.name === 'Map'){
              iconName = focused ? 'ios-map' : 'ios-map';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}> 
          <Tab.Screen name="Map" component={MapScreen}/>
          <Tab.Screen name="Active House" component={ActiveHouseStack} />
          <Tab.Screen name="Full Roster" component={FullRosterStack} />
          
        </Tab.Navigator>
      </NavigationContainer>
  
    );
  } 
}
export default App;

