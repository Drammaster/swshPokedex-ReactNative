import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import Data from '../assets/data.json';
import fontsize from '../constants/fontsize';

    

const PokemonLoader = props => {


    return (
        <View style={styles.container}>
            {Data.map((postDetail, index) => {
                return <View style={styles.box}><Text style={styles.pokeTitle}>{postDetail.name}</Text></View>
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
        flex: 1,
        backgroundColor: '#f2f2f5',
        minWidth: 200,
        height: 200,
        margin: 5,
    },
    pokeTitle: {
        textAlign: 'center',
        fontSize: 20,
    }
})
export default PokemonLoader;