import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// //Screen Imports
import MapScreenStack from './Screens/MapScreen.js';
import ActiveHouseStack from './Screens/ActiveScreen.js';
import FullRosterStack from './Screens/RosterScreen.js';

const Tab = createBottomTabNavigator()

//Main class for the app
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
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}> 
          <Tab.Screen name="Map" component={MapScreenStack}/>
          <Tab.Screen name="Active House" component={ActiveHouseStack} />
          <Tab.Screen name="Full Roster" component={FullRosterStack} />
          
        </Tab.Navigator>
      </NavigationContainer>
  
    );
  } 
}
export default App;

