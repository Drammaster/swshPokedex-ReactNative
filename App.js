import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';

import Colors from './constants/colors';
import Fontsize from './constants/fontsize';
import Pads from './constants/pads';
import Data from './assets/data.json';

export default function App() {
  
  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Pokedex SwSh</Text>
      <View style={styles.body}>
          <FlatList
          keyExtractor={(item, index) => item.id}
          data={Data}
          renderItem={itemData => <GoalItem id={itemData.item.id} name={itemData.item.name} />}
          />
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
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  }
});
