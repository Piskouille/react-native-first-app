import axios from "axios";

const TMDB_API_TOKEN = "91ef34eb6b3c3913fe8873cd83cab117"

const apiHandler = {
    async getMovies(search, page){
        const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + TMDB_API_TOKEN + '&language=fr&query=' + search + "&page=" + page
          
        try{
            const res = await axios.get(url)
            
            return res.data
        }
        catch(err){
            console.error(err)
            return {message: 'Error with TMDB API'}
        }
    }
}

export default apiHandler