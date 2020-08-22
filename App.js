import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import PokemonLoader from './components/pokemonLoader';

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
    marginTop: 25,
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
  },

  body: {
    flex: 5,
    justifyContent: "center",
  }
});
