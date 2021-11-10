import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import FilmItem from './FilmItem';
import apiHandler from '../api/apiHandler'
// import films from '../Helpers/filmData'

function FilmList({searchState}) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    const pageRef = useRef(0)
    const totalPagesRef = useRef(0)

    const renderItem = ({ item }) => (
        <FilmItem 
            title={item.title} 
            rating={item.vote_average}
            image={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
            overview={item.overview}
            date={item.release_date}
        />
    );

    const _loadFilms = async () => {
        if(!searchState) return
        const moviesData = await apiHandler.getMovies(searchState, pageRef.current + 1)
        pageRef.current = moviesData.page
        totalPagesRef.current = moviesData.total_pages
        
        setData(previousData => [...previousData, ...moviesData.results])
    }
    
    useEffect(async () => {
        if(!searchState) return
        setIsLoading(true)
        pageRef.current = 0
        totalPagesRef.current = 0
        const moviesData = await apiHandler.getMovies(searchState, pageRef.current + 1)
        pageRef.current = moviesData.page
        totalPagesRef.current = moviesData.total_pages
        
        setData(previousData => moviesData.results)
        setIsLoading(false)
    }, [searchState])

    return (
        
        <View>
            {isLoading ? (      
                <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
            </View>) : (
                <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                onEndReachedThreshold={1}
                onEndReached={() => {
                    if (pageRef.current < totalPagesRef.current) { // On vérifie qu'on n'a pas atteint la fin de la pagination (totalPages) avant de charger plus d'éléments
                           _loadFilms()
                        }
                    }}
                />)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default FilmList
