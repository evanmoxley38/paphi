import React from "react";
import {Text, SafeAreaView, SectionList} from "react-native";
import {createStackNavigator} from '@react-navigation/stack';


//Info Imports
import Roster from "../Info/Roster.js";

//Style Imports
import styles from "../Styles.js";

// //Screen Imports
import DetailsScreen from './DetailsScreen.js';
import Item from './ItemComponent.js';

//Shows all past and present members on the roster
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
export default function FullRosterStack(){
return(
    <FullStack.Navigator>
      <FullStack.Screen name="Full Roster" component={FullRoster} options={{title: "Role Call"}}/>
      <FullStack.Screen name="Information" component={DetailsScreen} options={{headerShown: false}}/>
    </FullStack.Navigator>
);
}
const FullStack = createStackNavigator()