import React from "react";
import {Text, SafeAreaView, SectionList, Button} from "react-native";

import {createStackNavigator} from '@react-navigation/stack';

//Info Imports
import Actives from "../Info/Actives.js";

//Style Imports
import styles from "../Styles.js";

// //Screen Imports
import DetailsScreen from './DetailsScreen.js';
import Item from './ItemComponent.js'

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
export default function ActiveHouseStack(){
  return(
    <ActiveStack.Navigator>
      <ActiveStack.Screen name="Active House" component={ActiveHouse} />
      <ActiveStack.Screen name="Information" component={DetailsScreen} />
    </ActiveStack.Navigator>
  )
}

const ActiveStack = createStackNavigator()