import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import FilmList from '../Components/FilmList';
import Search from '../Components/Search';

export default function Main() {
  const [searchState, setSearch] = useState('')

  return (
    <View style={styles.view}>
      <StatusBar/>
      <Search setSearch={setSearch}/>
      <FilmList searchState={searchState}/>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,  
    paddingTop: 25,
    backgroundColor: '#C4E9DE'
  },
})