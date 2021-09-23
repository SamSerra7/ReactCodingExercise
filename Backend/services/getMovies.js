require('dotenv').config();
const axios = require('axios');

const api_key = process.env.API_KEY;
const base_endpoint = process.env.MOVIES_BASE_ENDPOINT;

module.exports = async function listMoviesByWords(words,page){
    try {
        let url = `${base_endpoint}/search/movie?api_key=${api_key}&query=${words}&page=${page}`
        const response =  await axios(url);
        return response.data;
    } catch(err) { 
        console.error('A problem occurs: '+err);
    }
}
