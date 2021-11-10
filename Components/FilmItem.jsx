import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'

function FilmItem({title, rating, image, overview, date}) {
    const newDate = new Date(date)
    const formatDate = newDate.toLocaleDateString('fr-FR')
    
    return (
        <View style={styles.filmItem_wrapper}>
            <Image
                style={styles.filmItem_image}
                source={{uri: `${image}`}}
            />
            <View style={styles.filmItem_description_wrapper}>
                <View style={styles.filmItem_description_header}> 
                    <Text style={styles.filmItem_title}>{title}</Text>
                    <Text style={styles.filmItem_rating}>{rating}</Text>

                </View>
                <Text numberOfLines={7} style={styles.filmItem_description_overview}>{overview}</Text>
                <View style={styles.filmItem_description_footer}>
                    <Text style={styles.filmItem_date}>Sorti le {formatDate}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({ 
    filmItem_wrapper: {
        flex: 1,
        flexDirection: 'row',
        height: 200,
        borderWidth: 1,
        borderColor: 'black',
        margin: 5,
        marginBottom: 15
    },
    filmItem_image: {
        flex: 1,
        margin: 3,
        marginRight: 10,
    },
    filmItem_description_wrapper: {
        flex: 2,
        margin: 3
    },
    filmItem_description_header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    filmItem_title: {
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5,
        fontSize: 15,
        fontWeight: 'bold',
    },
    filmItem_rating: {
        textAlign: 'right'
    },
    filmItem_description_overview: {
        flex: 3,
        fontSize: 12,
        fontStyle: 'italic',
    },
    filmItem_description_footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    filmItem_date: {
        fontSize: 13
    }
});

export default FilmItem
