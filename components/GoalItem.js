import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';
import Fonts from '../constants/fontsize';
import SvgImage from '../assets/svgs';

const GoalItem = props => {
    let pokemonType = SvgImage.normal;
    let pokemonColor = "#fff";

    if ( props.type == "Electric" ) { 
        pokemonType = SvgImage.electric;
        pokemonColor = Colors.electric;
    } else if ( props.type == "Fire" ) {
        pokemonType = SvgImage.fire;
        pokemonColor = Colors.fire;
    } else if ( props.type == "Grass" ) {
        pokemonType = SvgImage.grass;
        pokemonColor = Colors.grass;
    } else if ( props.type == "Bug" ) {
        pokemonType = SvgImage.bug;
        pokemonColor = Colors.bug;
    } else if ( props.type == "Dark" ) {
        pokemonType = SvgImage.dark;
        pokemonColor = Colors.dark;
    } else if ( props.type == "Dragon" ) {
        pokemonType = SvgImage.dragon;
        pokemonColor = Colors.dragon;
    } else if ( props.type == "Fairy" ) {
        pokemonType = SvgImage.fairy;
        pokemonColor = Colors.fairy;
    } else if ( props.type == "Figthing" ) {
        pokemonType = SvgImage.fightning;
        pokemonColor = Colors.fightning;
    } else if ( props.type == "Flying" ) {
        pokemonType = SvgImage.flying;
        pokemonColor = Colors.flying;
    } else if ( props.type == "Ghost" ) {
        pokemonType = SvgImage.ghost;
        pokemonColor = Colors.ghost;
    } else if ( props.type == "Ground" ) {
        pokemonType = SvgImage.ground;
        pokemonColor = Colors.ground;
    } else if ( props.type == "Ice" ) {
        pokemonType = SvgImage.ice;
        pokemonColor = Colors.ice;
    } else if ( props.type == "Normal" ) {
        pokemonType = SvgImage.normal;
        pokemonColor = Colors.normal;
    } else if ( props.type == "Poison" ) {
        pokemonType = SvgImage.poison;
        pokemonColor = Colors.poison;
    } else if ( props.type == "Psychic" ) {
        pokemonType = SvgImage.psychic;
        pokemonColor = Colors.psychic;
    } else if ( props.type == "Rock" ) {
        pokemonType = SvgImage.rock;
        pokemonColor = Colors.rock;
    } else if ( props.type == "Steel" ) {
        pokemonType = SvgImage.steel;
        pokemonColor = Colors.steel;
    } else if ( props.type == "Water" ) {
        pokemonType = SvgImage.water;
        pokemonColor = Colors.water;
    }
    
    

    return (
        <TouchableOpacity activeOpacity={0.9}>
            <View style={[styles.listItem, {backgroundColor: pokemonColor}]}>
                <Text style={styles.title}>{props.name}</Text>
                {pokemonType}
            </View>
        </TouchableOpacity>
        
    )
};

const styles = StyleSheet.create({
    listItem: {
        width: 200,
        height: "auto",
        padding: 10,
        marginVertical: 10,
        borderColor: "black",
        borderWidth: 1,
        margin: 8.5,
    },
    title: {
        fontSize: Fonts.cardTitle,
    }
});

export default GoalItem;