import React from 'react';
import { Text, View, StyleSheet } from "react-native";


    

const PokemonLoader = props => {


    return (
        <View>
            <View style={styles.box}>
                <Text>Pokemon</Text>
            </View>
            <View style={styles.box}>
                <Text>Pokemon</Text>
            </View>
            <View style={styles.box}>
                <Text>Pokemon</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#f2f2f5',
        width: 100,
        height: 100,
        margin: 5,
    }
})
export default PokemonLoader;