import React, { useRef } from 'react'
import { Button, StyleSheet, TextInput } from 'react-native'

function Search({setSearch}){
    
    const textRef = useRef()

    return (
        <>
            <TextInput 
                style={styles.textInput}
                placeholder='Titre du film'
                ref={textRef}
                onChangeText={text => textRef.current.value = text}
                onSubmitEditing={() => setSearch(state => textRef.current.value)} //validation du champ au clavier
            />
            <Button title='Rechercher' onPress={() => setSearch(state => textRef.current.value)}/>
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
