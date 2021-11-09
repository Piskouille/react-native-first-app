import React from 'react'
import { Text, View } from 'react-native'

function Item({title}) {
    return (
        <View style={styles.filmItem}>
            <Text style={styles.filmItem_title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        filmItem: {
            height: 200
        },
        filmItem_title: {
            fontSize: 16
        }
    }
  });

export default Item
