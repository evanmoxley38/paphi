import React from "react";
import {Text, ScrollView, View, Image} from "react-native";
import styles from "../Styles";

//Meant to be a shell for all chapter details, but right now is specific to Clemson
export default function MapDetails(){
    return(
        <ScrollView style={styles.detailsContainer}>
            <View style={{justifyContents: 'center', alignItems: 'center', marginBottom: 20,}}>
                <Text style={{fontSize: 40, fontWeight: 'bold'}}> Chi Chapter</Text>
            </View>
            <View>
                <Image source={require('../Images/housepic.png')} style={{width: 340, height: 250, borderColor: 'blue', borderWidth: 3}}/>
            </View>
            <View style={{flex: 1, marginTop: 20}}>
                <Text style ={styles.names}> School: Clemson University</Text>
                <Text style ={styles.names}> Founded: April 15th, 2017</Text>
                <Text style ={styles.names}> Total Members: 26</Text>
                <Text style ={styles.names}> Active Members: 8</Text>
            </View>    
        </ScrollView>
    )
}
