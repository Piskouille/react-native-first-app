import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import FilmList from './Components/FilmList';
import Search from './Components/Search';

export default function App() {

  return (
    <View style={styles.view}>
      <StatusBar/>
      <Search/>
      <FilmList/>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,  
    paddingTop: 25,
    backgroundColor: '#C4E9DE'
  }
})
