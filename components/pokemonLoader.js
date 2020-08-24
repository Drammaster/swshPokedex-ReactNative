import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import Data from '../assets/data.json';

    

const PokemonLoader = props => {


    return (
        <View style={styles.container}>
            {Data.map((postDetail, index) => {
                return <View style={styles.box}><Text>{postDetail.name}</Text></View>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    box: {
        backgroundColor: '#f2f2f5',
        width: 200,
        height: 200,
        margin: 5,
    }
})
export default PokemonLoader;