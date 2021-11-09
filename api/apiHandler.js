import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://jikan1.p.rapidapi.com/top/anime/1/upcoming',
    headers: {
      'x-rapidapi-host': 'jikan1.p.rapidapi.com',
      'x-rapidapi-key': 'ad1573737cmshc467c24e6c2ddbep172436jsnb4d5fc97f783'
    }
  };

const apiHandler = {
    async getMovies(){
        try{
            const res = await axios.request(options)
            return res.data.top
        }
        catch(err){
            console.error(err)
            return {error: 'API is broken'}
        }
    }
}

export default apiHandler


