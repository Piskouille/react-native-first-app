import React from 'react'
import { Button, StyleSheet, TextInput } from 'react-native'

function Search() {
    return (
        <>
            <TextInput 
                style={styles.textInput}
                placeholder='Titre du film'/>
            <Button title='Rechercher' onPress={() => {}}/>
        </>
    )
}

const styles = StyleSheet.create({
    textInput: {
      marginLeft: 5, 
      marginRight: 5, 
      height: 50, 
      borderColor: '#000000',
      borderWidth: 1, 
      paddingLeft: 5
    }
});

export default Search
