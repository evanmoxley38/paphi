import React from "react";
import {Text, View, Image, ScrollView} from "react-native";

//Info Imports
import People from "../Info/Information.js";
import map from "../Info/Map.js";

//Style Imports
import styles from "../Styles.js";

//Shell for each members information screen
export default function DetailsScreen({route}){
    let temp = route.params.crossing.split(" ")
    let index = map.get(temp[0])
  
    return (
      <ScrollView contentContainerStyle={styles.detailsContainer}>
        <View style={styles.innerContainer}>
            <Image source={People[index].image} style={styles.image}/>
        </View>
        <Text style={styles.header}> {People[index].lineNumber}     {People[index].name}  </Text>
        <Text style={styles.detailsText}>  "{People[index].lineName}" </Text>
        <Text style={styles.detailsText}>  {People[index].family} </Text>
        <Text style={styles.detailsText}>  {People[index].crossing} {People[index].date} </Text>
        <Text style={styles.detailsText}>  {People[index].grade} </Text>
        <Text style={styles.detailsText}>  {People[index].major} </Text>
      </ScrollView>
    )
  }

