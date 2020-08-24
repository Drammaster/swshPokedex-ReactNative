import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import PokemonLoader from './components/pokemonLoader';

import Colors from './constants/colors';
import Fontsize from './constants/fontsize';
import Pads from './constants/pads';

export default function App() {
  
  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Pokedex SwSh</Text>
      <View style={styles.body}>
        <PokemonLoader />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },

  header: {
    flex: 1,
    marginTop: Pads.header,
    textAlign: "center",
    fontSize: Fontsize.header,
    fontWeight: "bold",
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },

  body: {
    flex: 14,
    justifyContent: "center",
  }
});
