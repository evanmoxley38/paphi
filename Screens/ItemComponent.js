import React from "react";
import {Text, View, TouchableOpacity} from "react-native";

//Style Imports
import styles from "../Styles.js";


const Item = ({ crossing, navigation}) => (
    <View style={styles.item}>
      <TouchableOpacity style={styles.names} onPress={() => {navigation.navigate("Information",{crossing} )}} > 
        <Text style = {styles.names}> {crossing} </Text>
      </TouchableOpacity>
    </View>
);

export default Item
