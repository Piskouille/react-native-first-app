import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import FilmItem from './FilmItem';
import apiHandler from '../api/apiHandler'

function FilmList() {
    const [data, setData] = useState([])

    const renderItem = ({ item }) => (
        <FilmItem title={item.title}/>
    );

    useEffect(async () => {
        const moviesData = await apiHandler.getMovies()
        setData(previousData => moviesData)
    }, [])

    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.mal_id.toString()}
            />
        </View>
    )
}

export default FilmList
